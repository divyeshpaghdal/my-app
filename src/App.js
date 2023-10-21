import React from 'react'
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Category from './pages/Category';
import Contact from './pages/Contact';
import Upcoming from './pages/Upcoming';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Productinfo from './home/Productinfo';
import Header from './home/Header';
import Admin from './User/Admin';
import AboutDetails from './pages/AboutDetails';
import Cart from './cart/Cart';
import Pagination from './Pagination';
import OrdergetList from './User/OrdergetList';
import UserProfille from './User/UserProfille';
import Search from './pages/Search';
import { useProduct } from './ProductApi';
import ErrorPage from './home/ErrorPage';
 
const App = () => {
  const {searchfilter} = useProduct()

return (
    <div>
      <Header/>
      {
        searchfilter ? <Search/> : ""
      }
      <Routes>
      <Route>
              <Route path="/home" element={<Home/>} />  
              <Route path="/aboutdetails" element={<AboutDetails/>} />      
              <Route path="/category" element={<Category/>} />    
              <Route path="/contact" element={<Contact/>} />   
              <Route path="/upcoming" element={<Upcoming/>} />  
              <Route path="/admin" element={<Admin/>} />  
              <Route path="/pagination" element={<Pagination/>} />  
              <Route path="/product/:id" element={<Productinfo/>} />  
              <Route path="/cart" element={<Cart/>} />  
              <Route path="/orderlist/:id" element={<OrdergetList/>} />
              <Route path="/userprofile" element={<UserProfille/>} />    
              <Route path="*" element={<ErrorPage/>} />                  
        </Route>
      </Routes>
      <ToastContainer
      position="top-center"
      autoClose={1000}
      />
    </div>
  )
}

export default App;



