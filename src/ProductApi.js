import React, { useState, createContext, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from './AuthcontextApi';
import { collection, getDocs, addDoc,limit, Timestamp, query, orderBy, onSnapshot, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../src/firebase"

const productcontext = createContext()
const ProductProvider = ({ children }) => {
  const [list, setlist] = useState([])
  const [listcopy, setlistcopy] = useState([])
  const [edit, setedit] = useState()
  const [clear, setclear] = useState(true)
  const [productshow, setproductshow] = useState(false)
 const [totaluser, settotaluser] = useState()
 const [isloading, setisloading] = useState(false)


  const [products, setproducts] = useState({
    title: null,
    des: null,
    price: null,
    imgurl:null,
    category:null,
    discount:null,
    stock:null,
    notuser:null,
    product:null,
    time: Timestamp.now()
  })
  //setproduct
  const submitproduct = async (e) => {
    e.preventDefault()
    try {
      const productRef = collection(db, 'products')
      const docRef = await addDoc(productRef, products);
      getproduct()
      products.title = ""
      products.price = ""
      products.category = ""
      products.discount = ""
      products.stock = ""
      products.imgurl = ""
      products.des = ""

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  //getproduct
  const getproduct = async () => {
    setisloading(true)
    try {
      const q = query(collection(db, 'products'), orderBy('time'))
      const getdata = onSnapshot(q, (queryshot) => {
        let productArray = []
        queryshot.forEach((doc) => {
        productArray.push({ ...doc.data(), id: doc.id })
        })
        setisloading(false)
        setlist(productArray)
        setlistcopy(productArray) 
        
      })
      return () => getdata;
    } catch (error) {
      console.log(error)
    }
  }

  //updateproduct
  const updateproduct = async (item) => {
    setisloading(true)
    try {
      const update = await setDoc(doc(db, 'products',item.id),item)
      setproducts(item)
      window.scrollTo(0, 0)
      setproductshow(true)
      setclear(false)
      setedit(item)
      getproduct()
      setisloading(false)
    } catch (error) {
      console.log(error)
    }
  }

  //updatebtnproduct
  const updatebtnproduct = async (e) => {
    e.preventDefault()
    deleteproduct(edit)
    try {
      const productRef = collection(db, 'products')
      const docRef = await addDoc(productRef,products);
      getproduct()
      setclear(true)
      setproductshow(false)
      products.title = ""
      products.price = ""
      products.category = ""
      products.discount = ""
      products.stock = ""
      products.imgurl = ""
      products.des = ""
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  //deleteproduct
  const deleteproduct = async (item) => {
    setisloading(true)
    try {
      const setdelete = await deleteDoc(doc(db, 'products', item.id))
      getproduct()
      setisloading(false) 
    } catch (error) {
      console.log(error)
    }
  }

//getuserdata

const getusedata = async () => {
  const userRef = collection(db,"user")
  const uservalue = await getDocs(userRef)
  let userbox = []
  uservalue.forEach((doc) => {
    userbox.push({...doc.data()})
  })
 settotaluser(userbox)
  };
  
  useEffect(() => {
    getproduct()
    getusedata()
  }, [])

  return (
    <productcontext.Provider value={{ products, setproducts, list, setlist, submitproduct, deleteproduct, updateproduct, edit, updatebtnproduct ,clear, setclear, listcopy, setlistcopy, productshow, setproductshow, totaluser, isloading}}>
      {children}
    </productcontext.Provider>
  )
}

const useProduct = () => {
  return useContext(productcontext)
}
export { ProductProvider, useProduct }
