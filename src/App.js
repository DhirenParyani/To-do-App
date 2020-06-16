import React,{useReducer} from 'react';
import {Container} from "reactstrap";
import TodoForm from "./Components/TodoForm";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//useReducer is almost like useState and useContext, Similar idea but provides you more.
//Action object can take type and payload that is possible because of Reducer.

import {TodoContext} from "./context/TodoContext";
import todoReducer from "./context/reducers"
import Todos from './Components/Todo';


//just like useState, useContext we will use useReducer
const App= () =>{
  //dispatch will take multiple functions with it
   const [todos,dispatch]=useReducer(todoReducer,[])
  return (
    //Whenever there is a provider you have to provide value
    <TodoContext.Provider value={{todos, dispatch}}> 
      <Container fluid>
         <h1>Todo App</h1>
         <Todos/>
         <TodoForm/>

      </Container>
    </TodoContext.Provider>
  );
}

export default App;
