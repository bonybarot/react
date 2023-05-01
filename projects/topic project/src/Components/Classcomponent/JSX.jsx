import React, { Component } from 'react';

class Jsx extends Component {
    
    render() {
        const user = {
            firstname : "bony",
            lastname : "barot"
        }
        let heading=  "JSX"  ;
        return (
            <>
            <div className='container text-center'>
                <p>this is the {heading} page</p>
                <p>we have the first user as {user.firstname + " "+user.lastname}</p>
            </div>
            </>
        );
    }
}

export default Jsx;     