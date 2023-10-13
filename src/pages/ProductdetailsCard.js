import React from 'react'
import { Link } from 'react-router-dom'

const ProductdetailsCard = ({title,imgurl,des,price,category,discount,stock,id}) => {
  console.log(id)
  return (
    <div className='col-md-4 mb-2' key={title}>
            <div className='item-box'>
                <div className='img-box'>
                    <img src={imgurl} />
                </div>
                <Link to={`/product/${id}`}><h5>{title?.slice(0, 50)}</h5></Link>
                <p>{des?.slice(0, 100)}</p>
                <h6>Price : {price}</h6>
                <h6>Category : {category}</h6>
                <h6>Discount : {discount}</h6>
                <h6>Stock : {stock}</h6>
            </div>
        </div>
  )
}

export default ProductdetailsCard