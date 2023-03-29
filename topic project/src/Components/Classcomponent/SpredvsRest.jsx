import React, { Component } from 'react'

export default class SpredvsRest extends Component {
  restdata =(a,...data)=>{
    console.log("restdata",data);
  }
  spreddata=(a ,b)=>{
    console.log(a+b)
  }
  spreddata1=(A)=>{
    console.log(A)
  }

  render() {
    let arr =[1,2,3,4,5,6,8,3,4,3,4,6,5]
    return (
      <>
      
      {this.restdata(1,2,3,4,1,5,4,5,4,54,54,5,1,541,5,5,54,5,5,5,54,54,54,5)}
      {this.spreddata(5,5)}
      {this.spreddata1(arr)}
      {this.spreddata(1,2,3,)}

      </>
    )
  }
}
