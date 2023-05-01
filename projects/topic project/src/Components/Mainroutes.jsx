import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Homepage from './Homepage.jsx'
import Aboute from './Aboutuspage.jsx'
import Pricing from './Pricingpage.jsx'
import Features from './Featurespage.jsx'
import Example from './Example.jsx'
// import Functionalcomponent from './Functionalroutes.jsx'
// import Classcomponent from './Classcomponent/Classroute.jsx'
  
const Classcomponent = React.lazy(() => import('./Classcomponent/Classroute'));
const Functionalcomponent = React.lazy(() => import('./Functionalcomponent/Functionalroutes'));

  
    
const Mainroutes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,

  },
  {
    path: "/home",
    element: <Homepage />,

  },
  {
    path: "/about",
    element: <Aboute />,

  },
  {
    path: "/pricing",
    element: <Pricing />,

  },
  {
    path: "/features",
    element: <Features />,

  },
  {
    path: "/example",
    element: <Example />,

    children: [
      {
        path: "classcomponent/*",
        element:<Suspense fallback={<h2>loading...</h2>}> <Classcomponent /></Suspense>,
      },
      {
        path: "Functionalcomponent/*",
        element:<Suspense fallback={<h2>loading...</h2>}> <Functionalcomponent /></Suspense>,
      }
    ],


  },
]);



export default Mainroutes;
