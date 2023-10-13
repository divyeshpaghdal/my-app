import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import { AuthProvider } from './AuthcontextApi';
import {BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './ProductApi';
import { CartProvider } from './cart/CartApi';
import { CartdubProvider } from './cart/DubcartApi';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <Provider store={store}>
   <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
          <CartdubProvider>
           <App />
           </CartdubProvider>
       </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
