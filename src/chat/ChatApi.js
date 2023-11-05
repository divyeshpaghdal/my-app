import { createContext, useState, useEffect, useContext } from 'react';
import { addDoc, collection,query,onSnapshot,orderBy,getDocs, serverTimestamp} from '@firebase/firestore'
import { db } from '../firebase';
import { useAuth } from '../AuthcontextApi';

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
const { user } = useAuth()
const [sendmsg, setsendmsg] = useState("")
const [getuserchat, setgetuserchat] = useState([])
let current = new Date();
let cTime = current.getHours() + ":" + current.getMinutes()


const handlechat = async (e) => {
  e.preventDefault()
  try {
    const chatRef = collection(db, 'chatmsg')
    const docRef = await addDoc(chatRef,{
      sendmsg,
      cTime,
      usersend:user?.displayName,
      timestamp:serverTimestamp()
    });
    console.log(Number(cTime),"time")
    getchatdata()
    setsendmsg("")
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const getchatdata = async () => {
  const userRef = collection(db, "chatmsg") 
  const chatvalue = await getDocs(query(userRef, orderBy('timestamp')));
  let chatbox = []
  chatvalue.forEach((doc) => {
    chatbox.push({ ...doc.data() })
  })
  setgetuserchat(chatbox)
};

useEffect(() => {
  getchatdata()
}, [sendmsg])

  return (
     <ChatContext.Provider value={{
         sendmsg, setsendmsg,
         handlechat,
         getuserchat
     }} >
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => {
    return useContext(ChatContext)
}

export {ChatProvider,useChat}

