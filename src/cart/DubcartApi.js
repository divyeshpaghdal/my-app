import { createContext, useState, useEffect, useContext } from 'react';
import { addDoc, collection,query,onSnapshot,orderBy,getDocs} from '@firebase/firestore'
import { db } from '../firebase';
import { useAuth } from '../AuthcontextApi';

const CartContext = createContext()

const CartdubProvider = ({ children }) => {
  const {user} = useAuth()
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const [ordergetdata, setordergetdata] = useState([])
  const [bred, setbred] = useState("cartpage")
  const [showdis, setshowdis] = useState(false)
  const [shippingInfo, setshippingInfo] = useState({
    email:"",
    userrname:"",
    city:"",
    phonenumber:"",
  })
  const [paymentInfo, setpaymentInfo] = useState({
    cardnumber:"",
    cardname:"",
    exp:"",
    cvv:"",
  })
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
  const getcart = cartItems.reduce((total, item) => total + item.quantity, 0) 


 const removeFromCart = (removeId) => {
   setCartItems(cartItems?.filter((e)=> {
    return e.id !== removeId
   }))
 }
 
// ----payment----








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

// ---discount generate---
// ---discount-range---
let discount
let lengthrange 

if(gettotal > 3000) {
  discount = "123455432112345" 
  lengthrange = 3
} 
if (gettotal > 8000) {
  discount = "567899876556789" 
  lengthrange = 3
}
if (gettotal > 50000) {
  discount = "123451234512345" 
  lengthrange = 4
}


let getvalue = ""
for (let index = 0; index < lengthrange; index++) {
let vallu = Math.floor(Math.random() * discount.length);
getvalue += discount.charAt(vallu)  
}

const handledis = () => {
  if(showdis === true) {
   setshowdis(false)
  }else {
   setshowdis(true)
  }
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
        //checkout,
        ordergetdata,
        getcart,
        bred,setbred,
        shippingInfo,setshippingInfo,
        handledis,showdis, setshowdis,getvalue,
        paymentInfo, setpaymentInfo
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





// const checkout = async () => {
//   var options = {
//     key: "rzp_test_BtiGp81nTK7xFW",
//     key_secret: "X12QhH8bscaraIO23CRFWn4p",
//     amount: parseInt(gettotal * 100),
//     currency: "INR",
//     order_receipt: 'order_rcptid_' + user?.displayName,
//     name: "E-Bharat",
//     description: "for testing purpose",
//     handler: function (response) {
//       console.log('Payment Successful')
//       const paymentId = response.razorpay_payment_id
     
//       const orderInfo = {
//         paymentId,
//         cartItems,
//         gettotal,
//         shippingInfo,
//         date: new Date().toLocaleString(
//           "en-US",
//           {
//             month: "short",
//             day: "2-digit",
//             year: "numeric",
//           }
//         )
//       }

//       try {
//         result = addDoc(collection(db, "orders"), orderInfo)
//       } catch (error) {
//         console.log(error)  
//       }
//     },

//     theme: {
//       color: "#3399cc"
//     }
//   };
//   var pay = new window.Razorpay(options);
//   pay.open();
//   console.log(pay)
//   getorderdetails()
// }