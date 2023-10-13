import React,{useState} from 'react'

const TodoList = () => {
    const [todo, settodo] = useState([])
    const [text, settext] = useState()


const submit = (e) => {
    settodo((prev) => [{keyId:Date.now(),task:text},...prev])
    settext("")
    console.log(todo)
}


const deletetodo = (todoitem) => {
  const deleteTodomenu = todo.filter((item)=>{
    return item.keyId !== todoitem.keyId
  })
  settodo(deleteTodomenu)
}


  return (
    <div>
       <input value={text} onChange={(e)=>settext(e.target.value)}/>
       <button onClick={submit}>go</button> 
       {
        todo && todo?.map((e)=> {
            return (
               <>
                <div onClick={()=>deletetodo(e)}>{e.task}</div>
               </>
            )
        })
       }     
    </div>
  )
}

export default TodoList