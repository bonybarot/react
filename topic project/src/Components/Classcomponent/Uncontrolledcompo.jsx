import React, { Component } from 'react'

export default class Uncontrolledcompo extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state={input : "before click"}
  }
  
  handlesubmit=(event)=>{
    event.preventDefault();
    console.log(this.input.current.value);
    this.setState({input:"changed on click"})
  }
  render() {
    return (
      <>
      
      {JSON.stringify(this.state.input)}
      <form method='post' onSubmit={this.handlesubmit}>
        <input type="text"  ref={this.input}/>
        <input type="submit" />
      </form>
      </>
    )
  }
}
