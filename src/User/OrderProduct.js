import React from 'react'
import { useNewcart } from '../cart/DubcartApi'
import { Link } from 'react-router-dom'

const OrderProduct = () => {
  const {ordergetdata,submitlist} = useNewcart()
  console.log(ordergetdata)

  return (
    <div className='container padding-80 order-page'>
      <table>
        <thead>
        <tr>
              <th className='number'>No.</th>
              <th className='photos'>Photo</th>
              <th>Name</th>
              <th className='price'>Email</th>
              <th className='cates'>OrderID</th>
              <th className='distock'>Date</th>
              <th className='distock'>Price</th>
            </tr>
        </thead>
        <tbody>
        {
          ordergetdata?.map((e,index)=> {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={e?.userinfodetails?.url}/>
                </td>
                <td>{e?.userinfodetails?.displayName}</td>
                <td>{e?.userinfodetails?.email}</td>
                <td>{e?.paymentId}</td>
                <td>{e?.date}</td>
                <td>{e?.gettotal}</td>
                <td>
                <Link to="/orderlist"><button onClick={() => submitlist(e?.cartItems)}>order List</button></Link>
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