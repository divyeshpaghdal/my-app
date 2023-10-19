import React, { useState } from 'react'
//import { useCart } from './CartApi'
import { Link } from 'react-router-dom'
import { useNewcart } from './DubcartApi'
import Price from '../pages/Price'
import Shipping from './Shipping'
import Payment from './Payment'



const Cart = () => {
  const {cartItems,removeFromCart,setCartItems,checkout,bred,setbred,} = useNewcart()
 
 
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



const minprice = cartItems?.map((e)=> {
  return e?.price
})
console.log(Math.max(...minprice))


  return (
    <div className='container padding-80 px-0 cart-page'>
      <div className="row">
        <div className='col-12'>
          <div className='breadcump'>
            <ul>
              <li className={bred === "cartpage" ? "brd-active" : ""}>Cart page</li>
              <li className={bred === "shippingpage" ? "brd-active" : ""}>Shipping page</li>
              <li className={bred === "paymentpage" ? "brd-active" : ""}>payment page</li>
            </ul>
          </div>
        </div>
        {
          bred === "cartpage" && 
          <div className='col-md-12'>
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
          { cartItems.length > 0 ? <button onClick={() => setbred("shippingpage") }>Shipping page</button> : <button>add Product</button>}
        </div>
        }
      { bred === "shippingpage" && 
        <div className='col-12'>
          <Shipping/>
          <button onClick={() => setbred("cartpage") }>cart page</button>
        </div>
      }
      { bred === "paymentpage" && 
        <div className='col-12'>
          <Payment/>
          <button onClick={() => setbred("shippingpage") }>Shipping page</button>
        </div>
      }

        
      </div>

    </div>
  )
}

export default Cart




