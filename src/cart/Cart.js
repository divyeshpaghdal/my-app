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



  return (
    <div className='container padding-80 px-0 cart-page spacing-top'>
      <div className="row cart-list">
        <div className='col-12'>
          <div className='breadcump'>
            <ul>
              <li className={bred === "cartpage" ? "brd-active" : ""}>Cart</li>
              <li className={bred === "shippingpage" ? "brd-active" : ""}>Shipping</li>
              <li className={bred === "paymentpage" ? "brd-active" : ""}>payment</li>
            </ul>
          </div>
        </div>
        {
          bred === "cartpage" && 
         <div className='col-12'>
        {cartItems.length > 0 ? 
        <div>
          <table>
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
                        <button onClick={()=>setdec({idd:e?.id,stocckk:e?.stock})}><i class="fas fa-minus"></i></button>
                          {e?.quantity}
                          <button onClick={()=>setinc({idd:e?.id,stocckk:e?.stock})}><i class="far fa-plus"></i></button>
                        </div>
                      </td>
                      <td><Price price= {e?.price*e?.quantity}/></td>
                     <td onClick={() => removeFromCart(e?.id)}><i class="fas fa-trash"></i></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
          </div>
          : <div className='cart-emt'>Cart Empty</div> }
          
          { cartItems.length > 0 ? 
           <div className='btn-rightt'><button onClick={() => setbred("shippingpage") }>Shipping</button></div> : <div className='btn-alignn'><Link to="/category"><button>Add Product</button></Link></div> 
          }

        </div>
        }
      { bred === "shippingpage" && 
        <div className='col-12 shipping-pages'>
          <Shipping/>
        </div>
      }
      { bred === "paymentpage" && 
        <div className='col-12'>
          <Payment/>
          <button onClick={() => setbred("shippingpage") }>Shipping</button>
        </div>
      }

        
      </div>

    </div>
  )
}

export default Cart




