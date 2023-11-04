import React from 'react'
import { useNewcart } from '../cart/DubcartApi'
import { Link } from 'react-router-dom'
import Price from '../pages/Price'

const OrderProduct = () => {
  const {ordergetdata} = useNewcart()
  console.log(ordergetdata)

  return (
    <div className='container padding-80 order-page'>
      <table>
        <thead>
        <tr>
              <th className='number'>No.</th>
              <th>Name</th>
              <th className='price'>Email</th>
              <th className='cates'>OrderID</th>
              <th className='distock'>Payment Date</th>
              <th className='distock'>Price</th>
              <th className='distock'>-</th>
            </tr>
        </thead>
        <tbody>
        {
          ordergetdata?.map((e,index)=> {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{e?.shippingInfo?.userrname}</td>
                <td>{e?.shippingInfo?.email}</td>
                <td>{e?.idddd}</td>
                <td>{e?.date}</td>
                <td>{<Price price={e?.gettotal}/>}</td>
                <td>
                <Link to={`/orderlist/${e?.idddd}`}><button><i className="fas fa-list"></i></button></Link>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default OrderProduct