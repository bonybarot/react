// import React, { Component } from 'react'

// export default class Listsandkeys extends Component {
//   render() {
//       let array = [1,3,2,5,4]
//     let plusone = array.map((element)=>{
//         return element + " ";
//     })
//     let listkey = array.map((value,key)=>{
//         return <li key={value}> { key+"  ==>  "+ value}</li>
//     });
//     let sorted = array.sort()
//     const object1 = [
//       {
        
//         id : 1,
//         firstname: "bony" ,
//         lastname : "barot"
//       },
//       {
//         id : 2,
//       firstname: "ramesh" ,
//       lastname : "barot"
//     }];
    
//     const component = object1.map((data,key)=>{
//       console.log(data);
//       console.log(data.id);
//       console.log(data.firstname);
//       console.log(data.lastname);
      
//       return <tr key={key}>
        
//         <td>{data.id + "   "}</td>
//         <td>{data.firstname}</td>
//         <td>{data.lastname}</td>
//       </tr>
//     })
    

//     return (
//       <>
//       {listkey}
//       <br />
//       <br />
//       {array}
//       <br />
//       {plusone}
//       <br />
//       {sorted}
//       <br />
//       <table className='table table-bordered'>
//         <tbody>

       
//         </tbody>
//       </table>
//       <table className='table table-bordered'>
//         <tbody> 
//           <tr>
//           <td><b>id</b></td>
//           <td><b>firstname</b></td>
//           <td><b>lastname</b></td>
//           </tr>

//       {component}
//         </tbody>
//       </table>
//       </>
      
//       )
//     }
//   }
  
import React, { Component } from 'react'

export default class Listsandkeys extends Component {
  render() {

    const object1 = [
      {
        
        id : 1,
        firstname: "bony" ,
        lastname : "barot"
      },
      {
        id : 2,
      firstname: "ramesh" ,
      lastname : "barot"
    },];
    
    const component = object1.map((data,key)=>{
      console.log(data);
      console.log(data.id);
      console.log(data.firstname);
      console.log(data.lastname);
      
      return <tr key={key}>
        
        <td>{data.id + "   "}</td>
        <td>{data.firstname}</td>
        <td>{data.lastname}</td>
      </tr>
    })
    

    return (
      <>

      <table className='table table-bordered'>
        <tbody> 
          <tr>
          <td><b>id</b></td>
          <td><b>firstname</b></td>
          <td><b>lastname</b></td>
          </tr>

      {component}
        </tbody>
      </table>
      </>
      
      )
    }
  }
  