import { createContext, useState, useEffect, useContext , useRef } from 'react';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from '../AuthcontextApi';

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
const { user } = useAuth()
const [messages, setMessages] = useState([]);
const [getuserchat, setgetuserchat] = useState([])
let current = new Date();
let cdate = current.getFullYear()  + "-" + current.getMonth() + "-" + current.getDate()
let ctime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds()


const getchatdata = async () => {
  const q = query(
    collection(db, "chatmessages"),
    orderBy("createdAt", "desc"),
    limit(50)
  );
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    const fetchedMessages = [];
    QuerySnapshot.forEach((doc) => {
      fetchedMessages.push({ ...doc.data(), id: doc.id });
    });
    const sortedMessages = fetchedMessages.sort(
      (a, b) => a.createdAt - b.createdAt
    );
    setMessages(sortedMessages);
  });
  return () => unsubscribe;
};


const handlechat = async (e) => {
  getchatdata()
}



useEffect(() => {
  getchatdata()
}, []);



  return (
     <ChatContext.Provider value={{
       messages, setMessages,
         getuserchat,handlechat
     }} >
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => {
    return useContext(ChatContext)
}

export {ChatProvider,useChat}

