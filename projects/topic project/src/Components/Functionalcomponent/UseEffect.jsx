import React, { useState } from 'react';
import { useEffect } from 'react';

const StateExampleFunctionalCompo = () => {
 
    const [statedata, setData] = useState("something")
    const [count, setCount] = useState(0)
    let data = "something"
  
    const[width,setwidth]=useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize",()=>{
            setwidth(window.innerWidth)
        })
        console.log("useEffect called");
    })
    let btnClick = () => {
        console.log("btnClick called");
        data = "Checking"
        console.log(data);
        setData("data")
    }
    let increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            simple variable data : {data}
            <br />
            State data : {statedata}
            <br />
            <button onClick={btnClick}>Click</button>
            <br />
            <h2>increment decrement</h2>
            <button onClick={increment}>increment</button>  {count} <button onClick={() => { setCount(count - 1) }}>decrement</button>
           <br />
           <br />
           <p>{width}</p>
        </>
    );
};

export default StateExampleFunctionalCompo;