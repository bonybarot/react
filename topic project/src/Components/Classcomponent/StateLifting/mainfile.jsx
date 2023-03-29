import React, { Component } from 'react';
import Input from './inputfield';
class mainfile extends Component {
    hanndle=(data)=>{
        console.log("parent called",data)

    }
    render() {
        return (
            <div>
                parentfile
                <Input propdata={this.hanndle}/>
                <br />
                <br />
               
            </div>
        );
    }
}

export default mainfile;