import React, { useState } from "react";
import Child from "./Child";
const Parent=()=>{
    const[todo,setTodo]=useState([{task:"Learn React",status:"complete"},{task:"Build a React app",status:"complete"},{task:"Deploy the React app",status:"complete"}])
    return(
       <div>
        <h1>Parent Component</h1>
        <Child todo={todo} setTodo={setTodo}/>
       </div>
    )
}
export default Parent