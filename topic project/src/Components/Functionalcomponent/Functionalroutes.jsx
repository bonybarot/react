import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menupage from './FunctionalMenu.jsx';
import Stateinfunctional from './Stateinfunctional.jsx';
import UseEffect from './UseEffect.jsx';
import UseLayoutEffect from './UseLayoutEffect.jsx';
import UseContextExample from './UseContextExample.jsx';
import Usereducer from './Usereducer.jsx';
class Functionalroutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route  path='/' element={<Menupage/>}>
                        <Route path='state' element={<Stateinfunctional/>}></Route>
                        <Route path='UseEffect' element={<UseEffect/>}></Route>
                        <Route path='UseLayoutEffect' element={<UseLayoutEffect/>}></Route>
                        <Route path='UseContextExample' element={<UseContextExample/>}></Route>
                        <Route path='Usereducer' element={<Usereducer/>}></Route>
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default Functionalroutes;