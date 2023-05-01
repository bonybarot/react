import React, { Component } from 'react';
import  {Link , Outlet} from 'react-router-dom';
class Menupage extends Component {
    render() {
        return (
        <>
            <div className='row'>
                <div className='col offset-6'>
                <Link to ="state">State</Link>
                </div>
            </div>
            <div className='row'>
                <div className='col offset-6'>
                <Link to ="UseEffect">use effect</Link>
                </div>
            </div>
            <div className='row'>
                <div className='col offset-6'>
                <Link to ="UseLayoutEffect">UseLayoutEffect</Link>
                </div>
            </div>
            <div className='row'>
                <div className='col offset-6'>
                <Link to ="UseContextExample">UseContextExample</Link>
                </div>
            </div>
            <div className='row'>
                <div className='col offset-6'>
                <Link to ="Usereducer">Usereducer</Link>
                </div>
            </div>
           
            <div className='row mt-5'>
                <div className='col offset-3'>
            <Outlet></Outlet>
                </div>
            </div>
            </>
        );
    }
}

export default Menupage;