import React, { useRef, useState } from 'react'
import {Form ,Button , Card, Container, Alert} from "react-bootstrap"
import {  useAuth } from '../contexts/Authcontext';
import {Link, Navigate, useNavigate} from "react-router-dom"


const Updateprofile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmRef = useRef();
  const {currentuser,updateEmail,updatePassword } = useAuth()
  const [err, seterr] = useState("")
  const [message, setmessage] = useState("")
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();

   function handlesubmit(e){
    e.preventDefault();
    if(passwordRef.current.value !== passwordconfirmRef.current.value){
      return seterr("passwords don't match")
    }
    
    const promises = []
    if(emailRef.current.value !== currentuser.email){
        promises.push(updateEmail(emailRef.current.value))
    }if(passwordRef != null){
        
        promises.push(updatePassword(passwordRef.current.value))
    }
    Promise.all(promises).then(()=>{
        navigate("/")
    }).catch(()=>{
        seterr("failed to update")
    }).finally(()=>{
        setloading(false)
    })

    
    

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
          <h2 className=''>Update Profile</h2>
          {err && <Alert variant='danger'>{err}</Alert>}
          {message && <Alert variant='success'>{message}</Alert>}
            <Form onSubmit={handlesubmit}>
              <Form.Group id="email">
                  <Form.Label>
                    Email
                  </Form.Label>
                  <Form.Control type="email" ref={emailRef} required 
                  defaultValue={currentuser.email}
                  />
                </Form.Group>
              <Form.Group id="password">
                  <Form.Label>
                    password
                  </Form.Label>
                  <Form.Control type="password" ref={passwordRef} 
                  placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
              <Form.Group id="passwordconfirm">
                  <Form.Label>
                  passwordconfirm
                  </Form.Label>
                  <Form.Control type="password" ref={passwordconfirmRef}  
                  placeholder="Leave blank to keep the same"/>
                  
                </Form.Group>
                <br />
                <Button disabled={loading} type="submit" className="w-100">
                  Update
                </Button>
            </Form>
          
        </Card.Body>
      </Card>
      <div className='text-center'>
        <Link to = "/loginpage">Cancel</Link>
      </div>
      </div>
    </Container>
  
    </>
  );
};

export default Updateprofile;