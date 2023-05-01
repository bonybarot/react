import React, { Component } from 'react';


class inputfield extends Component {
    handleinput=(e)=>{
        console.log("child called",e.target.value)
        this.props.propdata(e.target.value)
    }
    render() {
        return (
            <>
             <input type="text" onChange={this.handleinput} />  
            </>
        );
    }
}

export default inputfield;