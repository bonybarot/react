import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';

const Example = () => {
    return (
        <>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col">

                   <Link to={`classcomponent`}>class component</Link> 
                </div>
                <div className="col">
                   <Link to={`functionalcomponent`}>functional component</Link> 
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                  <Outlet>here</Outlet>
                </div>
            </div>
        </div>
        
        </>
    );
};
<></>

export default Example;