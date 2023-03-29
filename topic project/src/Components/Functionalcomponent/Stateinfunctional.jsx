import React, { useState } from 'react'
import './theme.css';
const Introduction = () => {
   
    let [state , setstate] = useState("select color")
    let colorfunction=(e)=>{
        setstate(e.target.value)
            console.log(e.target.value)
        }
        let theme = "box-"+state;
    return (<>
      
        <label htmlFor="">drop down</label>
        <select name="" id="" onChange={colorfunction}>
            <option value="red" >red</option>
            <option value="green" >green</option>
            <option value="blue" >blue</option>
        </select>

        <div>
            <input type="text" className={theme} value={state} />
        </div>

        </>
      )
}

export default Introduction