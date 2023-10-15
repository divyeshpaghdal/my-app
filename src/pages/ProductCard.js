import React from 'react'
import { Link } from 'react-router-dom'
import Price from './Price'


const ProductCard = ({title,imgurl,des,price,category,discount,stock,id}) => {
    return (
        <div className='col-md-3 mb-2'>
            <div className='item-box'>
                <div className='img-box'>
                    <img src={imgurl} />
                </div>
                <Link to={`/product/${id}`}><h5 className='title-sub'>{title?.slice(0, 50)}</h5></Link>
                <p>{des?.slice(0, 100)}</p>
                <h6 className='price'>Price : <Price price={price}/></h6>
                <h6 className='cates'>Category : {category}</h6>
                <h6 className='dis'>Discount : {discount}</h6>
                <h6 className='stock'>Stock : {stock}</h6>
            </div>
        </div>
    )
}

export default ProductCard