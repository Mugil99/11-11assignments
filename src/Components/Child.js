import React from "react";
const Child=(props)=>{
    const{todo}=props
    const{setTodo}=props
    console.log(todo)
    function handleComplete(e,index){
        console.log(index);
        todo[index].status="Completed"
        setTodo(todo);
        console.log(todo)
        e.target.remove()
    }
    return(
        <div>
            <h2>Child Component</h2>
           <ul>
           {
                todo.map((obj,index)=>{
                    return(
                        <>
                        <li>{obj.task}</li>
                        <button key={index} onClick={(e)=>(handleComplete(e,index))}>{obj.status}</button>
                        </>
                    )
                })
            }
           </ul>
        </div>
    )
}
export default Child