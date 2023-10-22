import React, { useState } from 'react'
import { useProduct } from '../ProductApi'
import { Link } from 'react-router-dom'

const Search = () => {
    const [searchdata, setsearchdata] = useState()
    const [filter, setfilter] = useState()
    const { listcopy,searchfilter, setsearchfilter} = useProduct()
    let finditem 

    const handlesearch = (e) => {
        setsearchdata(e.target.value)
        finditem = [...listcopy].filter((e) => {
            return e.title?.toLowerCase().includes(searchdata?.toLowerCase())
        })
        console.log(finditem)
        if(searchdata?.length > 1) {
            setfilter(finditem)
        }else {
            setfilter([])
        }
    }
   const closesearchquery = () => {
    setsearchfilter(false)
   }
 
    return (
        <div className='searchscreen'>
        <div className='searchpage container'>
            <h1>Search Your Product</h1>
            <input value={searchdata} onChange={(e) => handlesearch(e)} placeholder='Search...'/>
            <span onClick={closesearchquery}><i class="fas fa-times"></i></span>
            <div>
                <ul>
                    {
                        filter?.map((e) => {
                            return (
                                <Link onClick={closesearchquery} to={`/product/${e?.id}`}><li>{e.title}</li></Link>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
        </div>
    )
}

export default Search