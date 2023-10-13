import React from 'react'
import { useNewcart } from '../cart/DubcartApi'
import ProductCard from '../pages/ProductCard'

const OrdergetList = () => {
   const {getorderlist} = useNewcart()
   console.log(getorderlist)
   


  return (
    <div className='container padding-80 order-list'>
        <h1>Your Order List</h1>
        <div className='row'>
        {
            getorderlist?.map((e)=> {
                const {title,price,category,des,img,discount,stock,id} = e
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