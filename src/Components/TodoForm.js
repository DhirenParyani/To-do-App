import React, {useState,useContext} from "react"
//useContext will help us understand types and payloads.
//to store them temporarily we will use useState

import {FormGroup,Input,Button,Form,InputGroup,InputGroupAddon} from "reactstrap";

import {v4} from "uuid";
import {TodoContext} from "../context/TodoContext";
import {ADD_TODO} from "../context/action.types";


const TodoForm= () => {
    const [toDoString, setToDoString]=useState("");
    const {dispatch}=useContext(TodoContext);
    const handleSubmit =e =>{
        e.preventDefault();
        if(toDoString === "")
        {
            return alert("Please enter a todo");

        }
        const todo = {
            toDoString,
            id: v4()
        }
        //we need to dispatch our todo, so we can store it in a central place.
        dispatch({
            type: ADD_TODO,
            payload:todo
        });
        setToDoString("");
    };
    return (
        //if we had parameters to pass on: handleSubmit then a callback ()=> {}
        <Form  onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Your next Todo" 
                    value={toDoString}
                    onChange={e=> setToDoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                        color="warning">Add</Button>
                    
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>

        </Form>
    );
}

export default TodoForm;

