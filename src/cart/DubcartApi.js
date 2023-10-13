import { createContext, useState, useEffect, useContext } from 'react';
import { addDoc, collection,query,onSnapshot,orderBy,getDocs} from '@firebase/firestore'
import { db } from '../firebase';
import { useAuth } from '../AuthcontextApi';

const CartContext = createContext()

const CartdubProvider = ({ children }) => {
  const {user} = useAuth()
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const [ordergetdata, setordergetdata] = useState([])
  const [getorderlist, setgetorderlist] = useState([])
  let gettotal
  let result

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
 
// ----payment----
const checkout = async () => {
  var options = {
    key: "rzp_test_BtiGp81nTK7xFW",
    key_secret: "X12QhH8bscaraIO23CRFWn4p",
    amount: parseInt(gettotal * 100),
    currency: "INR",
    order_receipt: 'order_rcptid_' + user?.photoURL,
    name: "E-Bharat",
    description: "for testing purpose",
    handler: function (response) {

      console.log('Payment Successful')
      const paymentId = response.razorpay_payment_id
      const userinfodetails = {
        email:user?.email,
        url:user?.photoURL,
        displayName:user?.displayName
      }
  
      const orderInfo = {
        paymentId,
        cartItems,
        gettotal,
        userinfodetails,
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      }

      try {
        result = addDoc(collection(db, "orders"), orderInfo)
        console.log(result,"80")
      } catch (error) {
        console.log(error)
      }
    },

    theme: {
      color: "#3399cc"
    }
  };
  var pay = new window.Razorpay(options);
  pay.open();
  console.log(pay)
  getorderdetails()
}

// ---ordergetdata---
const getorderdetails = async () => {
  try {
    const userRef = collection(db,"orders")
    const ordervalue = await getDocs(userRef)
    let orderbox = []
    ordervalue.forEach((doc) => {
      orderbox.push({...doc.data()})
  })
      setordergetdata(orderbox)
  } catch (error) {
    console.log(error)
  }
}

const submitlist = (ordermenu) => {
  console.log(ordermenu)
  setgetorderlist(ordermenu)
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

  useEffect(() => {
    getorderdetails()
  }, [result])
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        setCartItems,
        removeFromCart,
        gettotal,
        checkout,
        ordergetdata,
        submitlist,
        getorderlist
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