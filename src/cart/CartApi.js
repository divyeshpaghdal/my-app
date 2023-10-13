// import React, { useState, createContext, useContext,useEffect} from 'react'
// import { json } from 'react-router'

// const cartcontext = createContext()
// const CartProvider = ({ children }) => {
//     const [cart, setcart] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

//    const handlecart = (itemdata) => {
//     console.log(itemdata)
//     const isItemInCart = cart.find((cartItem) => cartItem.id === itemdata.id);
//     if (isItemInCart) {
//         console.log(isItemInCart,cart)
//         cart?.map((cartItem) =>
//           cartItem.id === itemdata.id ?
//            setcart({ ...cart, count:cart.count + 1 })  : setcart(cart)
//         )
//     } else {
//         setcart([...cart, { ...itemdata, count:1}]);
//     }
//  }  


// useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cartItems"));
//     if (cartItems) {
//         setcart(cart);
//     }
//   }, []);


//     return (
//         <cartcontext.Provider value={{handlecart,cart, setcart}}>
//             {children}
//         </cartcontext.Provider>
//     )
// }
    
// const useCart = () => {
//     return useContext(cartcontext)
// }
// export { CartProvider, useCart }






// import React, { useState, createContext, useContext,useEffect} from 'react'

// const cartcontext = createContext()
// const CartProvider = ({ children }) => {
//     const [cart, setcart] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
//     let getTodoItem
//    const handlecart = (itemdata) => {
//     setcart((prev) =>[...prev,{
//         id:itemdata.id,
//         title:itemdata.title,  
//         img:itemdata.img,
//         count:itemdata.count,
//         price:itemdata.price
//     }])
//     const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);

//     if (isItemInCart) {
//       setCartItems(
//         cartItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cart, count:cart.count + 1 }
//             : cart
//         )
//       );
//     } else {
//       setCartItems([...cart, { ...item, count: 1 }]);
//     }
//  }  

// useEffect(() => {
//     getTodoItem = JSON.parse(localStorage.getItem("cart"))
//     if(getTodoItem){
//      setcart(getTodoItem)
//     }
// }, [getTodoItem ])
// console.log(cart,"cart")
//     return (
//         <cartcontext.Provider value={{handlecart,cart, setcart}}>
//             {children}
//         </cartcontext.Provider>
//     )
// }
    
// const useCart = () => {
//     return useContext(cartcontext)
// }
// export { CartProvider, useCart }


// useEffect(() => {
//     getTodoItem = JSON.parse(localStorage.getItem("cart"))
//     if(getTodoItem){
//      setcart(getTodoItem)
//     }
// }, [getTodoItem ])
// console.log(cart,"cart")
