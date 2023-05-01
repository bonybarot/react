import React, { useRef, useState } from 'react'
import {Form ,Button , Card, Container, Alert} from "react-bootstrap"
import {  useAuth } from '../contexts/Authcontext';
import {Link} from "react-router-dom"


const Registration = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const {signup } = useAuth()
  const [err, seterr] = useState("")
  const [message, setmessage] = useState("")
  const [loading, setloading] = useState(false)

  async function handlesubmit(e){
    e.preventDefault();
    if(passwordRef.current.value !== passwordconfirmRef.current.value){
      return seterr("passwords don't match")
    }
    
    try{
      seterr('');
      setloading(true)
      await signup(emailRef.current.value , passwordRef.current.value)
    emailRef.current.value = ""; 
    passwordRef.current.value = ""; 
    passwordconfirmRef.current.value= ""; 
    setmessage("registered successfully ")

      // console.log(emailRef.current.value , passwordRef.current.value)
    }catch(er){
      // if(er.customData._tokenResponse.error.code == 400){
      //   // seterr(JSON.stringify(er.customData._tokenResponse.error.code))
      //     seterr("Email : "+emailRef.current.value +"already exist in the firebase")
          
      //   }else{
          
      //   }
        console.log(er)
        seterr("failed to register")
      
    }
    setloading(false)
    

  }
  return (
    <>
   
    <Container
    className='d-flex align-items-center justify-content-center'
    style={{minHeight: "100vh"}}
    >
      <div className='w-100' style={{minWidth:"400px"}}>

      <Card>
        <Card.Body>
          <h2 className='text-center'> sign up</h2>
          {err && <Alert variant='danger'>{err}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
            <Form onSubmit={handlesubmit}>
              <Form.Group id="email">
                  <Form.Label>
                    Email
                  </Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
              <Form.Group id="password">
                  <Form.Label>
                    password
                  </Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
              <Form.Group id="passwordconfirm">
                  <Form.Label>
                  passwordconfirm
                  </Form.Label>
                  <Form.Control type="password" ref={passwordconfirmRef} required />
                </Form.Group>
                <br />
                <Button disabled={loading} type="submit" className="w-100">
                  sing up
                </Button>
            </Form>
          
        </Card.Body>
      </Card>
      <div>
        Already have an account <Link to = "/loginpage">log in</Link>
      </div>
      </div>
    </Container>
  
    </>
  );
};

export default Registration;












// // import { async } from '@firebase/util';
// // import { createUserWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// // import { auth } from './firebase';
// import './style.css'
// function Registration() {
//   const [userdata, setuserdata] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobilenumber: "",
//     DOB: "",
//     password: "",
//     confirmpassword: "",
//     city: "",
//     state: "",
//     country: "",
//   })
//   // const [err, seterr] = useState();
//   let name, value;
//   const changehandler = (e) => {
//     name = e.target.name;
//     value = e.target.value;
//     setuserdata({
//       ...userdata, [name]: value

//     })

//   }

//   const submithandle = async (e) => {
//     e.preventDefault();
//     const { firstName, lastName, email, mobilenumber, DOB, password, confirmpassword, city, state, country } = userdata;
//     if (firstName && lastName && email && mobilenumber && DOB && password && confirmpassword && city && state && country) {

//       const res = await fetch("https://quarks-task-bony-default-rtdb.firebaseio.com/userdatarecords.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             firstName, lastName, email, mobilenumber, DOB, password, confirmpassword, city, state, country
//           }),
//         }
//       );
//       if (res) {
//         setuserdata({
//           firstName: "",
//           lastName: "",
//           email: "",
//           mobilenumber: "",
//           DOB: "",
//           password: "",
//           confirmpassword: "",
//           city: "",
//           state: "",
//           country: "",
//         })
//         alert("data stored")

//       }


//       else {

//         alert("fill the data")

//       }
//     }

//     else {
//       alert("plese fill the data")
//     }

//   };
//   return (
//     <div className="form">
//       <div className="form-body">
//         <div className="username">
//           <label className="form__label">First Name </label>
//           <input className="form__input" type="text" name="firstName" placeholder="First Name"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , firstname : e.target.value}))}}
//             onChange={changehandler}
//           />

//         </div>
//         <div className="lastname">
//           <label className="form__label">Last Name </label>
//           <input type="text" name="lastName" className="form__input" placeholder="LastName"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , lastname : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>
//         <div className="email">
//           <label className="form__label" >Email </label>
//           <input type="text" name="email" className="form__input" placeholder="Email"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , email : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>
//         <div className="mobile-number">
//           <label className="form__label" >mobile</label>
//           <input className="form__input" type="text" name="mobilenumber" placeholder="mobilenumber"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , mobilenumber : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>

//         <div className="DOB">
//           <label className="form__label" >DOB </label>
//           <input className="form__input" type="date" name="DOB" placeholder="DOB"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , DOB : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>
//         <div className="city">
//           <label className="form__label" >city </label>
//           <input className="form__input" type="text" name="city" placeholder="city"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , city : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>
//         <div className="state">
//           <label className="form__label" >state </label>
//           <input className="form__input" type="text" name="state" placeholder="state"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , state : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>
//         <div className="country">
//           <label className="form__label" >country </label>
//           <input className="form__input" type="text" name="country" placeholder="country"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , country : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>
//         <div className="country">
//           <label className="form__label" >password </label>
//           <input className="form__input" type="text" name="password" placeholder="country"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , country : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>

//         <div className="country">
//           <label className="form__label" >confirm-password </label>
//           <input className="form__input" type="text" name="confirmpassword" placeholder="country"
//             //   onChange= {(e)=>{setfirst((prev)=>({...prev , country : e.target.value}))}}
//             onChange={changehandler}
//           />
//         </div>

//         {/* <b className='err'>{err}</b> */}
//         <div className="footer">
//           <button type="submit" className="btn" onClick={submithandle}>Register</button>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Registration;