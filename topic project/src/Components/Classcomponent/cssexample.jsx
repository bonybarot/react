import React, { Component } from 'react';
import CSS from "./css.css"

class cssexample extends Component {
    render() {
        return (
            <>
            <p style={{background :"black",color:"green" }}>internal css</p>
             <h2>external css</h2>   
             <p style={CSS}>css application</p>
            </>
        );
    }
}

export default cssexample;