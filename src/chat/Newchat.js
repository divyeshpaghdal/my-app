import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import Sendmsg from "./Sendmsg";


const Newchat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
  
    useEffect(() => {
      const q = query(
        collection(db, "messages"),
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
    }, []);


  return (
    <div className='padding-80 spacing-top chat-page container'>
      <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message}/>
        ))}
      </div>
     
      <span ref={scroll}></span>
      <Sendmsg scroll={scroll}/>
    </main>
    </div>
  )
}

export default Newchat