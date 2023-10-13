import React from 'react'
import { useProduct } from '../ProductApi'
import ProductCard from './ProductCard'
import Loader from './Loader'

const LatestProduct = () => {
    const { listcopy,isloading} = useProduct()

   const latestitem = listcopy?.filter((e)=> {
    return e.product === "latest"
   })

    return (
        <>
       
        
            <div className='latest container padding-80 item'>
            {isloading && <Loader/>}   
                <h3 className="title">Latest Product</h3>
                <div className="row">
                    {
                        latestitem?.map((e) => {
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

export default LatestProduct