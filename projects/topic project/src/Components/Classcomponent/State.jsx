import React, { Component } from 'react';

class State extends Component {
    btn="";
    constructor(props) {
        super(props);
        this.state ={
            data:"somthing data...",
            btn:" change",
            value : 0 ,
            onoffbtn : true
        }
        
    }
   
    
    changedata=()=>{
      this.setState({data: "changed data..."})
      this.setState({onoff:  "off"})
    }
    increment=()=>{
        this.setState({value : this.state.value+1})
    }
    render() {
       
        return (
            <>
                {this.state.data}
              <button onClick={this.changedata }>{this.state.btn}</button> 
              <br />
              <br />
              <button onClick={this.increment}>increment</button> 
              <p>{this.state.value}</p>
              <button onClick={()=>{ this.setState({value : this.state.value-1})}}>decrement</button>
              <br />
              <br />
              <button onClick={()=>this.setState({onoffbtn : !this.state.onoffbtn })}>{this.state.onoffbtn ? "on":"off"}</button>
            </>
        );
    }
}

export default State;