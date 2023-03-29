import React, { Component } from 'react';

class Conditionalrendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: true
      }
    }
    render() {
        this.changebtn=()=>{
            this.setState({value:!this.state.value})
        }
        return (
            <>
              <button className='btn btn-primary' onClick={this.changebtn}>{this.state.value ? "on":"off"}</button>
            </>
        );
    }
}

export default Conditionalrendering;