import React, { useState } from 'react'
//import { useCart } from './CartApi'
import { Link } from 'react-router-dom'
import { useNewcart } from './DubcartApi'
import Price from '../pages/Price'



const Cart = () => {
  const {cartItems,removeFromCart,gettotal,setCartItems,checkout} = useNewcart()
  const [showdis, setshowdis] = useState(false)
 
  


 const setinc = (incid) => {
  const {idd,stocckk} = incid
  console.log(incid)
   const ifincmatch = cartItems.find((e)=> {
    return e.id === idd
   })
    if (ifincmatch) {
      setCartItems(cartItems?.map((cartItem) =>
          cartItem.id === idd
            ? { ...cartItem, quantity:ifincmatch.quantity + 1} : cartItem
      ));
    }
    if(ifincmatch.quantity + 1 > stocckk) {
      setCartItems(cartItems?.map((cartItem) =>
          cartItem.id === idd
            ? { ...cartItem, quantity:ifincmatch.quantity} : cartItem
      ));
    }
  }

// -----
 const setdec = (incid) => {
  const {idd,stocckk} = incid
  const ifincmatch = cartItems.find((e)=> {
   return e.id === idd
  })
   if (ifincmatch) {
     console.log(ifincmatch)
     setCartItems(cartItems?.map((cartItem) =>
         cartItem.id === idd
           ? { ...cartItem,quantity:ifincmatch.quantity - 1} : cartItem
     ));
   } 
 if(ifincmatch.quantity <= 1) {
     removeFromCart(idd)
 }
} 

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

const minprice = cartItems?.map((e)=> {
  return e?.price
})
console.log(Math.max(...minprice))


  return (
    <div className='container padding-80 px-0 cart-page'>
      <div className="row">
        <div className='col-md-9'>
        {cartItems.length > 0 ? 
        <div>
          <table>
            <thead>
              <tr>
                <th className='number w-5'>No.</th>
                <th className='photos w-20'>Photo</th>
                <th className='w-40'>Title</th>
                <th className='w-25'>count</th>
                <th className='price w-15'>Price</th>
                <th className='price w-15'></th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems?.map((e, index) => {
                  return ( 
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className='photos'><img src={e?.img} /></td>
                      <td><Link to={`/product/${e?.id}`}><h5 className="card-title">{e?.title?.slice(0, 30)}</h5></Link></td>
                      <td>
                        <div className='count'>
                        <button onClick={()=>setdec({idd:e?.id,stocckk:e?.stock})}>-</button>
                          {e?.quantity}
                          <button onClick={()=>setinc({idd:e?.id,stocckk:e?.stock})}>+</button>
                        </div>
                      </td>
                      <td><Price price= {e?.price*e?.quantity}/></td>
                     <td onClick={() => removeFromCart(e?.id)}>remove</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
          </div>
          : "pls add your item" }
        </div>
         <div className='col-md-3'>
         <h2>Total : {<Price price = {gettotal}/> }</h2>
         <h5>Special Discount : {showdis ? getvalue : ""} </h5>
         <button onClick={handledis}>show discount</button>
         {/* {cartItems.length > 0 ? <button onClick={checkout}>checkout</button> : ""}  */}
         </div>
      </div>

    </div>
  )
}

export default Cart