import React, { useState } from 'react'
//import { useCart } from './CartApi'
import { Link } from 'react-router-dom'
import { useNewcart } from './DubcartApi'

const Cart = () => {
  const {cartItems,removeFromCart,gettotal,setCartItems} = useNewcart()
 
 const setinc = (incid) => {
  const {idd,stocckk} = incid
  console.log(incid)
   const ifincmatch = cartItems.find((e)=> {
    return e.id === idd
   })
    if (ifincmatch) {
      setCartItems(cartItems?.map((cartItem) =>
          cartItem.id === idd
            ? { ...cartItem, quantity:ifincmatch.quantity + 1}
            : cartItem
      ));
    }
    if(ifincmatch.quantity + 1 > stocckk) {
      setCartItems(cartItems?.map((cartItem) =>
          cartItem.id === idd
            ? { ...cartItem, quantity:ifincmatch.quantity}
            : cartItem
      ));
    }
 }

// -----
 const setdec = (incid) => {
  const ifincmatch = cartItems.find((e)=> {
   return e.id === incid
  })
   if (ifincmatch) {
     console.log(ifincmatch)
     setCartItems(cartItems?.map((cartItem) =>
         cartItem.id === incid
           ? { ...cartItem,quantity:ifincmatch.quantity - 1}
           : cartItem
     ));
   }

 if(ifincmatch.quantity <= 1) {
  setCartItems(cartItems?.map((cartItem) =>
  cartItem.id === incid
    ? { ...cartItem, quantity:1}
    : cartItem
));
 }}

  return (
    <div className='container padding-80 px-0 cart-page'>
      <div className="row">
        <div className='col-md-9'>
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
                        <button onClick={()=>setdec(e?.id)}>-</button>
                          {e?.quantity}
                          <button onClick={()=>setinc({idd:e?.id,stocckk:e?.stock})}>+</button>
                        </div>
                      </td>
                      <td>{e?.price*e?.quantity}
                      
                      </td>
                     <td onClick={() => removeFromCart(e?.id)}>remove</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
         <h3>{gettotal}</h3>
        </div>
      </div>

    </div>
  )
}

export default Cart