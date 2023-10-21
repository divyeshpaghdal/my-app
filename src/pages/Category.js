import React from 'react'
import Header from '../home/Header'
import Filter from '../home/Filter'
import { useProduct } from '../ProductApi'
import ProductCard from './ProductCard'
import ProductdetailsCard from './ProductdetailsCard'


const Category = () => {
  const {list} = useProduct()
  
  console.log(list,"40")
  return (
    <>
    <div className='category-page container padding-80 spacing-top'>
     <div className="row">
        <div className='product-leangth'>
          <h4>Total Product : {list?.length}</h4>
        </div>
        <div className='col-md-3'>
        <Filter/>
        </div>
        <div className='col-md-9'>
            <div className='row'>
            {
                        list?.map((e) => {
                            const {title,price,category,des,imgurl,discount,stock,id} = e
                            return (
                              <ProductdetailsCard title={title} price={price} category={category} des={des} imgurl={imgurl} discount={discount} stock={stock} id={id}/>
                            )
                        })
                    }
            </div>
        </div>
             </div>
        </div>
    </>
  )
}

export default Category