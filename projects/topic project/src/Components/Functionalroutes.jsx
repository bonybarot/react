import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menupage from './Classcomponent/Menupage';
class Functionalcomponent extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route  path='/' element={<Menupage/>}></Route>
                </Routes>
            </div>
        );
    }
}

export default Functionalcomponent;