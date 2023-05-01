import React, { Component } from 'react'

const EnhancedComponent = (Originalcomponent)=>{
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state ={count:0}
        }
        
        handleclick=()=>{
            this.setState({count:this.state.count +1})
        }
        render(){
            console.log("enhanced component")
            return<>
            enhanced component
            <Originalcomponent 
            handleclick={this.handleclick}
            show={this.state.count}
            />
            </>
        }
    }
    return NewComponent
}

export default EnhancedComponent;