import React,{useEffect,useState} from 'react'
import { useChat } from './ChatApi'
import { useAuth } from '../AuthcontextApi'

const Chat = () => {
 const { messages, setMessages ,getuserchat, handlechat } = useChat()
 const [finduser, setfinduser] = useState()
 const {user} = useAuth()
  
//  const userlist = getuserchat.map((e)=> {
//   return e.usersend
//  })
//  const setNewUserlist = new Set(userlist)
//  const newfitleruserlist = Array.from(setNewUserlist)

//  const fitleruserlist = newfitleruserlist.filter((e)=> {
//   return e !== user.displayName
//  })

// const getloginchatuser = getuserchat.filter((e)=> {
//   return e.usersend === user.displayName
// })

// const getfinduserchat = getuserchat.filter((e)=> {
//   return e.usersend === finduser 
// }) 

// console.log(getloginchatuser)
// console.log(getfinduserchat)

// const jointchat = getloginchatuser.concat(getfinduserchat)
// console.log(jointchat)


// const res = jointchat?.sort((a,b)=>
//   a?.cdate.localeCompare(b?.cdate)||a?.ctime.localeCompare(b?.ctime));
// console.log(res);



  return (
    <div className='padding-80 spacing-top chat-page container'>
        <h1 className='title'>Chat with Admin</h1>
       <div className='row'>
        <div className='col-3 leftuser'>
          <ul>
            {/* {
              fitleruserlist && fitleruserlist?.map((e)=> {
                return  <li onClick={()=>setfinduser(e)}>{e}</li>
              })
            }
             */}
          </ul>
        </div>
        <div className='col-9'>
        <div className='chatlist' id='data'>
        <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <li key={message.id}>{message}</li>
        ))}
      </div>
      {/* <span ref={scroll}></span> */}
      {/* <SendMessage scroll={scroll} /> */}
    </main>
     </div>
    <form>
        {/* <input type='text' placeholder='enter your message' value={sendmsg}
         onChange={(e) => setsendmsg(e.target.value)}/>
        <button onClick={handlechat}>send</button> */}
    </form>
        </div>
       </div>
        
    </div>
  )
}

export default Chat