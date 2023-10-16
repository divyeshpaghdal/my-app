import React, { useState, useEffect } from 'react'
import { useProduct } from '../ProductApi'
import { categorytypedatabase } from '../database/Data'
import { sortdata } from '../database/Data'

const Filter = () => {
    const { list, setlist, listcopy} = useProduct()
    const [category, setcategory] = useState()
    const [searchkey, setsearchkey] = useState()
    const [range, setrange] = useState()
    const [sort, setsort] = useState()
   
    //category
    const filtercategory = listcopy?.filter((e) => {
        return e.category === category
    })
    //search
    const fitersearch = listcopy?.filter((e) => {
        return e.title.toLowerCase().includes(searchkey?.toLowerCase())
    })
    //categorykeys
    const categorysearch = listcopy?.map((e) => {
        return e.category
    })
    // const newcates = Array.from(new Set(categorysearch))
    // console.log(newcates)
    
    //range
    const getrange = listcopy.map((e)=> {
        return e.price
    })
   console.log()

    const rangerfilter = listcopy?.filter((e)=> {
        return Number(e.price) <= range
    })
    
  //sort
       
    
    
 

useEffect(() => {
    if (category) {
        setsearchkey("")
        setrange("")
        setlist(filtercategory)
    }
    if (searchkey) {
        setcategory("")
        setlist(fitersearch)
        
    }
    if(range){
        setsearchkey("")
        setcategory("")
        setlist(rangerfilter) 
    }
    if(sort) {
    }
    if(sort === "ATOZ") {
        const sortfilter = [...list].sort((a,b)=> {
         return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      })
      setlist(sortfilter) 
    } 
    if(sort === "ZTOA") {
        const sortfilter = [...list].sort((a,b)=> {
         return b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      })
      setlist(sortfilter) 
    } 
    if(sort === "Lowest") {
        const sortfilter = [...list].sort((a,b)=> {
         return a.price - b.price
      })
      setlist(sortfilter) 
    } 
    if(sort === "Highest") {
        const sortfilter = [...list].sort((a,b)=> {
         return b.price - a.price
      })
      setlist(sortfilter) 
    }  
}, [range,category,searchkey,sort])



    return (
        <div className='filerbar'>
            <div className='search-menu'>
                <input placeholder='Search your product' value={searchkey}
                    onChange={(e) => setsearchkey(e.target.value)} />
            </div>
            <div className='option-menu'>
                <select value={category} onChange={(e) => setcategory(e.target.value)}>
                    {
                        categorytypedatabase?.map((e) => {
                            return (
                                <option key={e} value={e}>{e}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='range'>
                {range}
             <input type='range' min={Math.min(...getrange)} max={Math.max(...getrange)} value={range} onChange={(e) => setrange(e.target.value)}/>
            </div>  
           
            <select value={sort} onChange={(e) => setsort(e.target.value)}>
                    {
                        sortdata?.map((sorte) => {
                            return (
                                <option key={sorte} value={sorte}>{sorte}</option>
                            )
                        })
                    }
                </select>
        </div>
    )
}

export default Filter

