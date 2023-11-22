import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Sendmsg = ({ scroll }) => {
    const [message, setMessage] = useState("");
    let current = new Date();
    let cdate = current.getFullYear()  + "-" + current.getMonth() + "-" + current.getDate()
    let ctime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds()

    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
          alert("Enter valid message");
          return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
          text: message,
          name: displayName,
          avatar: photoURL,
          msgdate:cdate,
          msgtime:ctime,
          createdAt: serverTimestamp(),
          uid,
        });
        setMessage("");
        scroll.current.scrollIntoView({ behavior: "smooth" });
        console.log(cdate,ctime)
      };
      


  return (
    <div>
        <form onSubmit={(event) => sendMessage(event)} className="send-message">
         <input  value={message}  onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
    </div>
  )
}

export default Sendmsg