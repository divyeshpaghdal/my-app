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
let cdate = current.getFullYear()  + "-" + current.getMonth() + "-" + current.getDate()
let ctime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds()


const handlechat = async (e) => {
  e.preventDefault()
  try {
    const chatRef = collection(db, 'chatmsg')
    const docRef = await addDoc(chatRef,{
      sendmsg,
      cdate,
      ctime,
      usersend:user?.displayName,
      timestamp:serverTimestamp()
    });
    getchatdata()
    setsendmsg("")
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const getchatdata = async () => {
  const userRef = collection(db, "chatmsg") 
  //const chatvalue = await getDocs(query(userRef, orderBy('timestamp')));
  const chatvalue = await getDocs(userRef);
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

