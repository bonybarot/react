import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class CSSStyledCompo extends Component {
  call=()=>{
    console.log("called")
  }
  render() {
    
    const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
    const Button = styled.button`
    animation: ${rotate} 2s linear infinite;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
    return (
      <Button onClick={this.call}>click</Button>
    );
  }
}

export default CSSStyledCompo;