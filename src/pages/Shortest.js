import React from 'react'
import { useProduct } from '../ProductApi'
import ProductCard from './ProductCard'

const Shortest = () => {
    const { listcopy } = useProduct()
  
   const shortestitem = listcopy?.filter((e)=> {
    return e.product === "shortest"
   })
    return (
        <>
            <div className='shortest container padding-80 item'>
                <h3 className="title">shortest Product</h3>
                <div className="row">
                    {
                        shortestitem?.map((e) => {
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

export default Shortest