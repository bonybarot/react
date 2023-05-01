import React, { Component} from 'react'

export default class APIExample extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fetchdata:{}
        }
        fetch("https://jsonplaceholder.typicode.com/todos").then(resp => resp.json()).then((result =>{
            console.log(result);
             this.setState({fetchdata: result})
       
        }))

       
       
    }
    
  render() {
    return (
      <>
      <tr>
        <td>

        </td>
      </tr>
      {JSON.stringify(this.state.fetchdata)}
    
     
        
      </>
    )
  }
}
