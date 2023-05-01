import React, { useRef, useState } from 'react'
import {Form ,Button , Card, Container, Alert } from "react-bootstrap"
import {  useAuth } from '../contexts/Authcontext';
import {Link,useNavigate} from "react-router-dom"

const Resetpassword = () => {
  const emailRef = useRef();
  const {Resetpassword } = useAuth()
  const [err, seterr] = useState("")
  const [massage, setmassage] = useState("")
  const [loading, setloading] = useState(false)
  const navigate =useNavigate(); 

  async function handlesubmit(e){
    e.preventDefault();
    try{
      seterr('');
      setloading(true)
      await Resetpassword(emailRef.current.value)
      setmassage("check your inbox")
    }catch{
      seterr("failed to reset password",emailRef.current.value)
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
          <h2 className='text-center'> Reset Password</h2>
          {err && <Alert variant='danger'>{err}</Alert>}
          {massage && <Alert variant='success'>{massage}</Alert>}
            <Form onSubmit={handlesubmit}>
              <Form.Group id="email">
                  <Form.Label>
                    Email
                  </Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
              
          
                <br />
                <Button disabled={loading} type="submit" className="w-100">
                  submit
                </Button>
            </Form>
            <div className='w-100 text-center mt-2'>
     <Link to="/loginpage">log in</Link>
    </div>
        </Card.Body>
      </Card>
      <div>
        create an account <Link to = "/registration">sign up</Link>
      </div>
      </div>
    </Container>
  
    </>
  );
};

export default Resetpassword;

