import React from 'react'
import { useProduct } from '../ProductApi'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const Popular = () => {
    const { listcopy } = useProduct()
    const popularitem = listcopy?.filter((e)=> {
    return e.product === "popular"
   })

    return (
        <>
            <div className='upcomming container padding-80 item'>
                <h3 className="title">popular Product</h3>
                <div className="row">
                    {
                        popularitem?.map((e) => {
                            const {title,price,category,des,imgurl,discount,stock,id} = e
                            return (
                               <ProductCard key={title} title={title} price={price} category={category} des={des} imgurl={imgurl} discount={discount} stock={stock} id={id}/>
                            )
                        })
                    }
  
                </div>
            </div>
        </>
    )
}

export default Popular