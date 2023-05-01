import { Route, Routes } from 'react-router-dom';
// import { createBrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Menupage from './Menupage.jsx';
import JSX from './JSX.jsx';
import Props from './Props.jsx';
import React, { Component } from 'react';
import Classcomponents from './Classcomponents.jsx';
import State from './State.jsx';
import Listsandkeys from './Listsandkeys.jsx';
import Conditionalrendering from './Conditionalrendering.jsx';
import Controlledcompo from './controlledcompo.jsx';
import Uncontrolledcompo from './Uncontrolledcompo.jsx';
import SpredvsRest from './SpredvsRest.jsx';
import CompositionvsInheritance from './CompositionvsInheritance.jsx';
import APIExample from './APIExample.jsx';
import CSSExample from './cssexample.jsx';
import CSSStyledCompo from './CSSStyledCompo.jsx';
import StateLifting from './StateLifting/mainfile.jsx';
import HighOrderCompo from './HOC/HighOrderCompo';

export default class Classroute extends Component {
  render() {
    return (
      <>
   <Routes>
    <Route path='/' element={<Menupage/>}>
    <Route path='classcomponents' element={<Classcomponents/>}/>
    <Route path='jsx' element={<JSX/>}/>
    <Route path='props' element={<Props/>}/>
    <Route path='State' element={<State/>}/>
    <Route path='Conditionalrendering' element={<Conditionalrendering/>}/>
    <Route path='Listsandkeys' element={<Listsandkeys/>}/>
    <Route path='controlledcompo' element={<Controlledcompo/>}/>
    <Route path='Uncontrolledcompo' element={<Uncontrolledcompo/>}/>
    <Route path='SpredvsRest' element={<SpredvsRest/>}/>
    <Route path='CompositionvsInheritance' element={<CompositionvsInheritance/>}/>
    <Route path='apiexample' element={<APIExample/>}/>
    <Route path='cssexample' element={<CSSExample/>}/>
    <Route path='CSSStyledCompo' element={<CSSStyledCompo/>}/>
    <Route path='StateLifting' element={<StateLifting/>}/>
    <Route path='HighOrderCompo' element={<HighOrderCompo/>}/>
    </Route>
   </Routes>
      </>
    )
  }
}


// const Classroute = createBrowserRouter([
//   {
//     path: "/",
//     element: <Welcome />
//   },
// ]);
// export default Classroute;

// const Classroute = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default Classroute;