import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useReducer } from 'react';

let reducerfunction=(state,actions)=>{

switch (actions.type) {
  case "icremented_age":
 { console.log("incremented age called")
 console.log(state) ;
 return{
  init : state.init,
    num : state.num+1
   
  } ;
    }

    case "deremented_age":{
      console.log("decremented age called")
      console.log(state) ;

return{
  init : state.init,
  num : state.num-1
}

    }
  default:
    break;
}

}
const Usereducer = () => {
  
    const[state,dispatch] = useReducer(reducerfunction,{init:"initial statement:" , num:0})
   let handleclick=()=>{
       dispatch({type :"icremented_age"})
    }
   let decrement=()=>{
       dispatch({type :"deremented_age"})
    }
  return (
    <>
    <h3>increment-decrement using "usereducer" hook</h3>

  {state.init}
  <br />
  <br />
 
    <button onClick={handleclick}>increment</button>
    <br />
    {state.num}
    <br />
    <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Usereducer