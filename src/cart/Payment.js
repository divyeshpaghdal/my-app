import React from 'react'
import { useNewcart } from './DubcartApi'
import Price from '../pages/Price'

const Payment = () => {
    const {shippingInfo,cartItems,checkout} = useNewcart()
    const {email,userrname,address,city,phonenumber} = shippingInfo
  return (
    <>
    <div className='col-md-12'>
        {cartItems.length > 0 ? 
        <div>
          <table>
            <thead>
              <tr>
                <th className='number w-5'>No.</th>
                <th className='photos w-20'>Photo</th>
                <th className='w-40'>Title</th>
                <th className='w-25'>Quantity</th>
                <th className='price w-15'>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems?.map((e, index) => {
                  return ( 
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className='photos'><img src={e?.img} /></td>
                      <td><h5 className="card-title">{e?.title?.slice(0, 30)}</h5></td>
                      <td>
                        <div className='count'>
                          {e?.quantity}
                        </div>
                      </td>
                      <td><Price price= {e?.price*e?.quantity}/></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
          </div>
          : "pls add your item" }
          <div>{email}{userrname}{address}{city}{phonenumber}</div>
          {cartItems.length > 0 ? <button onClick={checkout}>checkout</button> : ""} 
        </div>
    </>
    
  )
}

export default Payment