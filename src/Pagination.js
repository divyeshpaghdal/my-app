import React,{useState,useEffect} from 'react';
// import { collection, getDocs, addDoc,limit, Timestamp, query, orderBy, onSnapshot, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from './firebase';
import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore"; 

const Pagination = () => {
 
const ass = [
  {
    id:1,
    price : "1"
  },
  {
    id:2,
    price : "2"
  },
  {
    id:3,
    price : "1"
  }
]
console.log(ass)
console.log(ass.slice(0,2))


 return (
   <div className='container padding-80'>
        <button>click</button>
   </div>
 )

}

export default Pagination
