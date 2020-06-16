//What should I do when I hit any action.

import {ADD_TODO, REMOVE_TODO} from "./action.types"


//What action is being called we want to provide a reducer/function based on that



//When someone isgoing to use this file is going to provide us with state and action (ADD some Todo or remove some Todo)
export default (state, action) =>{
    //action: is an object which contains variety of things
    //type: what type of action it is
    switch(action.type){
        case  ADD_TODO:
            //Load whatever values are there in the state
            //action: is an object which contaiins variety of things
            //payload: what information it carries with it.(email-password)
            return[...state,action.payload]
        case  REMOVE_TODO:
             //filter: allows you to pass a simple call back method.
             //iterates through every todo present in my state and we can create a new list of todo.
             //In filter all values whivh evalutes to true carry forward in a new array.   
             //this returns all the todos which doesn't have id equal to passed id.
             //IDs are unique strings: uuid
        return state.filter(todo=> todo.id!==action.payload)   

          
        default:
            return state;
    }
}
