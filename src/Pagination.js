import React,{useState,useEffect} from 'react';
import { collection, getDocs, addDoc,limit, Timestamp, query, orderBy, onSnapshot, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from './firebase';


const Pagination = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  // const getpaginationdata = async () => {
  //       collection(db, 'products'),orderBy('time'),limit(5)
  //     .onSnapshot(function(querySnapshot) { 
  //         var items = [];
  //         querySnapshot.forEach(function(doc) {
  //             items.push({ key:doc.id,...doc.data() });
  //         });
  //         console.log('first item ', items[0])
  //         setList(items);
  //     })
  // }

  // useEffect(() => {
  //   getpaginationdata()
  // }, [])
  

 return (
   <div className='container padding-80'>
       
   </div>
 )

}

export default Pagination
