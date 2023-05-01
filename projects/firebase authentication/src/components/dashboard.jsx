import React, { useEffect, useLayoutEffect } from 'react';
import{Button, Card,Alert} from "react-bootstrap"
import { useState,  } from "react";
import {useNavigate , Link} from "react-router-dom";
import { useAuth } from '../contexts/Authcontext';
const Dashboard = () => {
  const [err, seterr] = useState("")
  const {currentuser, logout} = useAuth()
  const navigate = useNavigate();
  useEffect(() => {
    if(!currentuser){
      (navigate("/loginpage"))
}


}, )
const  handlelogout=async()=>{
    seterr("")

    try{
      await logout()
      navigate("/loginpage")
    }
    catch{
      seterr("failed to log out")
    }

  }
    
    
    return (
      <>
    <Card  style={{width:"700px", marginLeft:"350px" , marginTop:"100px"}}>
      <Card.Body className='ms-5 me-5 mt-5'>
        <h2 className='text-center mb-3'>Profile</h2>
        {err && <Alert variant='danger'>{err}</Alert>}
        <strong>Email : </strong>{currentuser && currentuser.email}
        <Link to="/UpdateProfile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        {/* {JSON.stringify(currentuser)} */}
      </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
      <Button variant='link' onClick={handlelogout}>Log Out</Button>
    </div>
      </>
    );
};

export default Dashboard;