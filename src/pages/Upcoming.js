import React from 'react'
import { useProduct } from '../ProductApi'
import ProductCard from './ProductCard'
import Testi from './Testi'

const Upcoming = () => {
  const { listcopy } = useProduct()

 const upcomingitem = listcopy?.filter((e)=> {
  return e.product === "upcomming"
 })

  return (
      <>
          <div className='upcomming container padding-80 item spacing-top   '>
              <h3 className="title">Upcomming Product</h3>
              <div className="row">
                  {
                      upcomingitem?.map((e) => {
                          const {title,price,category,des,imgurl,discount,stock,id} = e
                          return (
                            <ProductCard key={title} title={title} price={price} category={category} des={des} imgurl={imgurl} discount={discount} stock={stock} id={id}/>
                          )
                      })
                  }

              </div>
          </div>
          <Testi/>
      </>
  )
}

export default Upcoming