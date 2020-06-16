import React, {useContext} from "react"
import {ListGroup, ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
//everything is lying inside context
import {TodoContext} from "../context/TodoContext"


//We will be dispatching one action from here aswell.


//you can seprate out the component where you want to list todos (in context)

import {REMOVE_TODO} from"../context/action.types"


const Todos=()=>{
   const {todos,dispatch}= useContext(TodoContext);
   return(
       // Whenever you're looping through anything in React, React doesn't know 
       //if you're looping through the same item again and again
       //or you're looping through an individual unique item
       //inorder to provide that info we provide a key to that
   //WE are creating a component this component is not expecting any property at all
   //standalone app- that's why redux or context API
   // thing are not interdependent
   //data is lying sepratae from business language
   //When we need to pass info we use callback
    <ListGroup  className="mt-5 mb-2 items">
        {todos.map(todo=>(
            <ListGroupItem key={todo.id}>
                    {todo.toDoString}
                    
                    <span className="float-right" onClick={()=>{
                        dispatch({
                            type:REMOVE_TODO,
                            payload:todo.id
                        })
                    }}><FaCheckDouble></FaCheckDouble></span>
            </ListGroupItem>

        ))}
    </ListGroup>
   )
}

export default Todos;