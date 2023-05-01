import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import LoginPage from './LoginPage';
import Registration from './Registration';
import Dashboard from './dashboard.jsx';
import UpdateProfile from './UpdateProfile.jsx';
import Resetpassword from './resetpassword.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>
    },
    {
      path: "/registration",
      element: <Registration/>
    },
    {
      path: "/LoginPage",
      element: <LoginPage/>
    },
    {
      path: "/UpdateProfile",
      element: <UpdateProfile/>
    },
    {
      path: "/resetpassword",
      element: <Resetpassword/>
    },
  ]);

  export default router