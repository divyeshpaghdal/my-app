import React from 'react'
import { useNewcart } from '../cart/DubcartApi'
import ProductCard from '../pages/ProductCard'
import { useParams } from 'react-router'

const OrdergetList = () => {
   const {ordergetdata} = useNewcart()
   const {id} = useParams()  
   console.log(ordergetdata,id)
   
   const findorderId = ordergetdata?.find((e)=> {
    return e.paymentId === id
   })
  console.log(findorderId,"findorderId")

  return (
    <div className='container padding-80 order-list'>
        <h1>Your Order List</h1>
        <div className='row'>
        {
            findorderId?.cartItems?.map((e)=> {
                const {title,stock,id,price,img} = e
                return (
                    <ProductCard key={title} title={title} price={price} imgurl={img} stock={stock} id={id}/>
                )
            })
        }
    </div>
    </div>
  )
}

export default OrdergetList