import React ,{useState,useEffect, useContext}from 'react';
import useFetch from './useFetch';
import { MessagesContext} from'./Chat';


export default function Messages(){
const u=useContext(MessagesContext)
const [user,setUser]=useState({username:"Bindu"});
const[count,setCount]=useState(0);

const data=useFetch("https://jsonplaceholder.typicode.com/users");
const todos=useFetch("https://jsonplaceholder.typicode.com/todos")
return (
    <div>
      <h1>Context</h1>
      <p>{u}</p>
      {/* <MessagesContext.Consumer>{(value)=><div>{value.username}</div>}</MessagesContext.Consumer> */}
        <h1>Notifications</h1>
        <p>u have received {count} new Messages</p>
        <h2>Users</h2>
        <div>
            {data.map((user,index)=><div key={index}>
              {user.name} </div>)} 
              
              <h2>Todos</h2>
              <div>
              {todos.map((todo)=><p key={todo.title}>{todo.title}</p>)}
              </div>
</div>
            <button onClick={()=>setCount(count+1)}>Send Message</button>
<br/>
      {user.username}
      <br/>
      <button onClick={()=>setUser({age:24})}>Click</button>
</div>
  )
}


