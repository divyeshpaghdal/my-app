import { createContext, useState, useEffect, useContext } from 'react'

const CartContext = createContext()

const CartdubProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  let gettotal

  const addToCart = (item) => {
    console.log(item)
    const isItemInCart = cartItems?.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      console.log(isItemInCart)
      setCartItems(cartItems?.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity:isItemInCart.quantity + item.quantity}
            : cartItem
      ));
    } else {
      console.log(item,"21item")
      //setCartItems([...cartItems,{...item,quantity:item.quantity}])
      setCartItems([...cartItems,{...item}])
    }
  };
  
  gettotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) 
  console.log(gettotal)


 const removeFromCart = (removeId) => {
   setCartItems(cartItems?.filter((e)=> {
    return e.id !== removeId
   }))
 }
 


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        setCartItems,
        removeFromCart,
        gettotal
        //clearCart,
        //getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useNewcart = () => {
    return useContext(CartContext)
}

export {CartdubProvider,useNewcart}