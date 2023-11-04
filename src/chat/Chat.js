import React,{useEffect} from 'react'
import { useChat } from './ChatApi'
import { useAuth } from '../AuthcontextApi'

const Chat = () => {
 const { sendmsg,getuserchat, setsendmsg, handlechat } = useChat()
 const {user} = useAuth()




  return (
    <div className='padding-80 spacing-top chat-page container'>
        <h1 className='title'>Chat with Admin</h1>
        <div className='chatlist' id='data'>
     {
         getuserchat && getuserchat?.map((e,index)=> {
          return (
            <div key={index} className={user.displayName === e.usersend ? "rightset" : "leftset"}>
              <h2>{e.usersend}</h2>
              <h3>{e.sendmsg}</h3>
              <p>{e.cTime}</p>
            </div>
          )
         })
     }
     </div>


    <form>
        <input type='text' placeholder='enter your message' value={sendmsg}
         onChange={(e) => setsendmsg(e.target.value)}/>
        <button onClick={handlechat}>send</button>
    </form>
    </div>
  )
}

export default Chat