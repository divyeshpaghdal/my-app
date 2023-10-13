import React, { useState, useEffect } from 'react'
import { useProduct } from '../ProductApi'
import { categorytypedatabase } from '../database/Data'

const Filter = () => {
    const { list, setlist, listcopy} = useProduct()
    console.log(list)
    const [category, setcategory] = useState()
    const [searchkey, setsearchkey] = useState()
    const [range, setrange] = useState(0)
   
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
    const rangerfilter = listcopy?.filter((e)=> {
        return Number(e.price) <= range
    })
  

    const filterchange = (e) => {
        if (category) {
            setlist(filtercategory)
        }
        if (searchkey) {
            setlist(fitersearch)
            setsearchkey("")
            setcategory("")
        }
        if(range){
            setlist(rangerfilter)
            setsearchkey("")
            setcategory("")
        }
    }

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
             <input type='range' min="0" max="150000" value={range} onChange={(e) => setrange(e.target.value)}/>
            </div>
            <button onClick={filterchange}>Submit</button>
        </div>
    )
}

export default Filter



//sort
    // const sortfilter = () => {
    //    const azsort = listcopy?.sort((a,b) => {
    //     return a?.title.toLowerCase().localeCompare(b?.title.toLowerCase())
    //    })
    //    navigate('/category')
    //    setlist(azsort)  
    // }
    // const sortfilterrev = () => {
    //     navigate("/category")
    //     const azsort = listcopy?.sort((a,b) => {
    //      return b?.title.toLowerCase().localeCompare(a?.title.toLowerCase())
    //     })
    //     setlist(azsort)
        
    //  }
   
//     //maxvalue  
//     const maxrangevalue = listcopy?.map((e)=> {
//         return Number(e?.price)
//     })
//     console.log()
//     console.log(Math.max(Array.from(maxrangevalue)));
//    console.log(Math.max(maxrangevalue))

    // const handlefilter = (e) => {
    //   e.preventDefault()
    //   setcategory(e.target.value) 
    //   setlistcopy(filtercategory)
    // }
//   useEffect(() => {
//     setlist(sort)
//   }, [])
  