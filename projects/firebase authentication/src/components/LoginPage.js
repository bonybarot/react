import React, { useRef, useState } from 'react'
import {Form ,Button , Card, Container, Alert } from "react-bootstrap"
import {  useAuth } from '../contexts/Authcontext';
import {Link,useNavigate} from "react-router-dom"

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login } = useAuth()
  const [err, seterr] = useState("")
  const [loading, setloading] = useState(false)
  const navigate =useNavigate(); 

  async function handlesubmit(e){
    e.preventDefault();

   
    try{
      seterr('');
      setloading(true)
      await login(emailRef.current.value , passwordRef.current.value)
        navigate("/") 
    }catch{
      seterr("failed to log in")
      // console.log(er)
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
          <h2 className='text-center'> Log In</h2>
          {err && <Alert variant='danger'>{err}</Alert>}
            <Form onSubmit={handlesubmit} autoComplete="off">
              <Form.Group id="email">
                  <Form.Label>
                    Email
                  </Form.Label>
                  <Form.Control type="email" ref={emailRef} required  />
                </Form.Group>
              <Form.Group id="password">
                  <Form.Label>
                    password
                  </Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
          
                <br />
                <Button disabled={loading} type="submit" className="w-100">
                  Log In
                </Button>
            </Form>
    <div className='w-100 text-center mt-2'>
     <Link to="/resetpassword">Forgot password</Link>
    </div>
        </Card.Body>
      </Card>
      <div>
        dont have an account <Link to = "/registration">sign up</Link>
      </div>
      </div>
    </Container>
  
    </>
  );
};

export default LoginPage;























// // import './App.css';
// import React, { useState, } from 'react';
// import {useNavigate } from "react-router-dom";
// import {
//   MDBContainer,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn,
//   MDBIcon,
// }
// from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// function LoginPage() {
//   let navigate = useNavigate(); 
//   const [required, setrequired] = useState()


//   const require =(e)=>{
    
//     if(e.target.value==="" ){
//       setrequired("this feild required")
//     }
//     else{
      
//       setrequired("");
//     }
//   }
//  const signinhandler=(e)=>{
//   e.preventDefault();
//     // <Navigate to={Dashboard} replace={true} ></Navigate>
//   console.log(e);
//     navigate("/dashboard")
//   }
  

//   return (
    



//     <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

//       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={require}/>
//       {required}
//       <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

//       <div className="d-flex justify-content-between mx-3 mb-4">
//         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//         <a href="!#">Forgot password?</a>
//       </div>

//       <MDBBtn className="mb-4" onClick={signinhandler}>Sign in</MDBBtn>
    

//       <div className="text-center">
//         <p>Not a member? <Link to="/registration">Register</Link></p>
//         <p>or sign up with:</p>

//         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='facebook-f' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='twitter' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='google' size="sm"/>
//           </MDBBtn>

//           <MDBBtn color='none' className='m-1' style={{ color: '#1266f1' }} >
//             <MDBIcon fab icon='github' size="sm"/>
//           </MDBBtn>

//         </div>
//       </div>

//     </MDBContainer>
//   );
// }


// export default LoginPage;
