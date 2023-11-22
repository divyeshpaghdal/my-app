import React from "react";
import { auth } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

  

const Message = ({message}) => {
    console.log(message)
  return (
    <div>
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
        <p className="user-time">{message?.msgdate}</p>
        <p className="user-time">{message?.msgtime}</p>
        
      </div>
    </div>
  )
}

export default Message