import React, { useState, useEffect } from 'react'
import { useProduct } from '../ProductApi'
import { categorytypedatabase } from '../database/Data'
import Price from '../pages/Price'

const Filter = () => {
    const { list, setlist, listcopy} = useProduct()
    console.log(list)
    const [category, setcategory] = useState()
    const [searchkey, setsearchkey] = useState()
    const [range, setrange] = useState()
   
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
    

    const filterchange = (e) => {
        // if (category) {
        //     setlist(filtercategory)
        // }
        // if (searchkey) {
        //     setlist(fitersearch)
        //     setsearchkey("")
        //     setcategory("")
        // }
        // if(range){
        //     setlist(rangerfilter)
        //     setsearchkey("")
        //     setcategory("")
        // }
    }

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
}, [range,category,searchkey])



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
            <button onClick={filterchange}>Submit</button>
        </div>
    )
}

export default Filter

