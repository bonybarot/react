import React, { useEffect, useState } from 'react';
import { useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
    const [statedata, setData] = useState("something")
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("useEffect called");
        return useEffReturn
    },[statedata])

    // constructor and unmount
    useLayoutEffect(()=>{
        console.log("useLayoutEffect called ");
        return useEffReturn
    },[])
    let useEffReturn = () => {
        console.log("useEffReturn");
    }
    let btnClick = () => {
        console.log("btnClick called");
        setData("data")
    }
    let increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={btnClick}>Click</button>
            <br />
            <h2>increment decrement</h2>
            <button onClick={increment}>increment</button>  {count} <button onClick={() => { setCount(count - 1) }}>decrement</button>
        </div>
    );
};

export default UseLayoutEffect;