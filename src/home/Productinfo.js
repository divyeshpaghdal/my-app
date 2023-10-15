import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../firebase'
import { useEffect } from 'react'
import { useProduct } from '../ProductApi'
import { Link } from 'react-router-dom'
import { useNewcart } from '../cart/DubcartApi'
import Price from '../pages/Price'


const Productinfo = () => {
  const {cartItems} = useNewcart()
  const { id } = useParams()
  const [info, setinfo] = useState()
  const [count, setcount] = useState(1)
  const { listcopy } = useProduct()
  const {addToCart} = useNewcart()


const newstock = cartItems.find((e)=> {
 return e?.id === id
})  
const totalstock = info?.stock - newstock?.quantity

  console.log(info)
  const infoRef = collection(db, 'products')
  const getinfo = async () => {
    const idinfo = await getDoc(doc(infoRef, id))
    setinfo(idinfo.data())
  }

  const reletedproduct = listcopy?.filter((e) => {
    return e.category === info?.category
  })
  const reletedproductfilter = reletedproduct.filter((e) => {
    return e.id !== id
  })


  const increment = () => {
    if(totalstock ? totalstock > count : info?.stock > count) {
      setcount(count + 1)
    }
    if(totalstock <= 0) { 
      setcount(count - 1)
    }
  }

const deccrement = () => {
  setcount(count - 1)
}

  useEffect(() => {
    getinfo()
  }, [])

  return (
    <>
      <div className='container padding-80 product-page'>
        <div className='row'>
          <div className='col-md-6 left'>
            <div><img src={info?.imgurl} /></div>
          </div>
          <div className='col-md-6 right'>
            <h4>{info?.title}</h4>
            <p>{info?.des}</p>
            <table>
              <tbody>
                <tr>
                  <th>Category</th>
                  <td>{info?.category}</td>
                </tr>
                <tr>
                  <th>Product Type</th>
                  <td>{info?.product} product</td>
                </tr>
                <tr>
                  <th>Stock</th>
                  <td>{totalstock ? totalstock : totalstock <= 0 ? 0 : info?.stock}</td>
                </tr>
                <tr>
                  <th>Discount</th>
                  <td>{info?.discount}</td>
                </tr>
                <tr>
                  <th>Regular Price</th>
                  <td><Price price={info?.price}/></td>
                </tr>
              </tbody>
            </table>
            <h2>Pay : ₹ <Price price={info?.price - info?.discount} /></h2>
            { totalstock !== 0 && info?.product !== "upcomming" ?  
              <div className='count'>
              <button onClick={()=>deccrement()}>-</button> 
              <button>{count >= 1 ? count : 1}</button>
              <button onClick={()=>increment()}>+</button>
            </div> : ""
          }
           { totalstock !== 0 && info?.product !== "upcomming" ?
             <Link to="/cart"><button onClick={() => 
              addToCart({title:info?.title,price:Number(info?.price),img:info?.imgurl,id:id,quantity:count,stock:Number(info?.stock)})}>
                 Add to Cart</button></Link> : ""
           }
          </div>
        </div>
        { reletedproductfilter.length > 0 && 
           <div className='related padding-80 item px-0'>
           <h3 className="title">Related Product</h3>
           <div className="row">
             {
               reletedproductfilter?.map((e) => {
                 const { title, price, category, des, imgurl, discount, stock, id } = e
                 return (
                   <div className='col-md-3 my-2' key={title}>
                     <div className='item-box'>
                       <div className='img-box'>
                         <img src={imgurl} />
                       </div>
                       <h5>{title?.slice(0, 100)}</h5>
                     </div>
                   </div>
                 )
               })
             }
           </div>
         </div>
        }
      </div>
    </>
  )
}

export default Productinfo