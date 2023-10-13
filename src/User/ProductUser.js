import React from 'react'
import { useProduct } from '../ProductApi'
import { toast } from 'react-toastify';
import { categorytypedatabase,producttypedatabase } from '../database/Data';
import { Link } from 'react-router-dom';

const ProductUser = () => {
  const { list, products, setproducts, submitproduct, deleteproduct, updateproduct, updatebtnproduct, clear, productshow, setproductshow, listcopy} = useProduct()
    console.log( list)
    // let total = 0
    // list.map((e)=> {
    //     return total = total + parseInt(e.price)
    // })
    // const sum = list.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price),0);
    // console.log(sum)

    const show = () => {
        if (productshow === false) {
          setproductshow(true)
        } else {
          setproductshow(false)
        }
    }

  return (
    <>
            <div className='padding-80 px-0'>
                <button className='mb-4' onClick={show}>Add Your Product</button>
                {productshow &&
                    <form className='product-add-form'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">user</label>
                            <input type="text" value={products?.notuser} onChange={(e) => setproducts({ ...products, notuser: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">title</label>
                            <input type="text" value={products?.title} onChange={(e) => setproducts({ ...products, title: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Describation</label>
                            {/* <input type="text" value={products?.des} onChange={(e) => setproducts({ ...products, des: e.target.value })} /> */}
                            <textarea placeholder='Enter your Decbirition' type="text" value={products?.des} onChange={(e) => setproducts({ ...products, des: e.target.value })}>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                            <input type="text" value={products?.price} onChange={(e) => setproducts({ ...products, price: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">imgurl</label>
                            <input type="text" value={products?.imgurl} onChange={(e) => setproducts({ ...products, imgurl: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">category</label>
                            <select value={products?.category} onChange={(e) => setproducts({ ...products, category: e.target.value })}>
                                {
                                    categorytypedatabase?.map((item) => {
                                        return <option key={item} value={item}>{item}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">product</label>
                            <select value={products?.product} onChange={(e) => setproducts({ ...products, product: e.target.value })}>
                                {
                                    producttypedatabase?.map((item) => {
                                        return <option key={item} value={item}>{item}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">discount</label>
                            <input type="text" value={products?.discount} onChange={(e) => setproducts({ ...products, discount: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">stock</label>
                            <input type="text" value={products?.stock} onChange={(e) => setproducts({ ...products, stock: e.target.value })} />
                        </div>

                        {
                            clear ?
                                <button type="submit" onClick={submitproduct}>submit</button> :
                                <button type="submit" onClick={updatebtnproduct}>Update</button>
                        }
                    </form>
                }
                <div className="product">
                    <table>
                      <thead>
                        <tr>
                          <th className='number'>No.</th>
                          <th className='photos'>Photo</th>
                          <th>Title</th>
                          <th className='price'>Price</th>
                          <th className='cates'>category</th>
                          <th className='distock'>discount</th>
                          <th className='distock'>stock</th>
                          <th colspan="2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                        listcopy?.map((e, index) => {
                            return (
                              <tr>
                               <td>{index + 1}</td>
                               <td className='photos'><img src={e?.imgurl} /></td>
                               <td><Link to={`/product/${e?.id}`}><h5 className="card-title">{e?.title.slice(0, 30)}</h5></Link></td>
                               <td>{e?.price}</td>
                               <td>{e?.category}</td>
                               <td>{e?.discount}</td>
                               <td>{e?.stock}</td>
                               <td><button onClick={() => deleteproduct(e)}>-</button></td>
                               <td><button onClick={() => updateproduct(e)}>+</button></td>
                              </tr>
                            )
                        })
                    }
                      
                          
                     
                    
                     </tbody>
                    </table>
                </div>
            </div>
        </>
  )
}

export default ProductUser