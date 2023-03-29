import React, { Component } from 'react'
import EnhancedComponent from './EnhancedComponent'

 class HighOrderCompo extends Component {
  render() {
    console.log("highorder compo called")
    const {show,handleclick} = this.props
    return (
      <div>
        HighOrderCompo
        <button onClick={handleclick}>{show}</button>
      </div>
    )
  }
}

export default EnhancedComponent(HighOrderCompo)