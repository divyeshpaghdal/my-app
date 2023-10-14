import React,{useState,useEffect} from 'react';
// import { collection, getDocs, addDoc,limit, Timestamp, query, orderBy, onSnapshot, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from './firebase';
import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore"; 

const Pagination = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
 
  const handlequery = async (e) => {

// Query the first page of docs
const first = query(collection(db, "products"), orderBy("time"), limit(10));
const documentSnapshots = await getDocs(first);
console.log("last", documentSnapshots);
// Get the last visible document
const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
console.log("last", lastVisible);
// Construct a new query starting at this document,
// get the next 25 cities.
const next = query(collection(db, "products"),
    orderBy("time"),
    startAfter(lastVisible),
    limit(10));
  }

  let discount = "3456367578986868968569688544" 
  let getvalue = ""

for (let index = 0; index < 3; index++) {
  let vallu = Math.floor(Math.random() * discount.length);
  getvalue += discount.charAt(vallu)  
}
console.log(getvalue,discount.length)

  useEffect(() => {
    
  }, [])
  

 return (
   <div className='container padding-80'>
        <button onClick={handlequery}>click</button>
   </div>
 )

}

export default Pagination
