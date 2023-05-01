import React, { Component } from 'react';

class controlledcompo extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "hello" ,formdata:{"temp":"data"} }

    }
    storedata = (event) => {

        console.log("called", event.target.value);
        this.setState({ username: event.target.value })
    }
    submitdata = (event) => {
        event.preventDefault();
        console.log("called")
    }


    render() {
        return (
            <>
                <h3>conrolled component</h3>
                <p>In React, Controlled Components are those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick,onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.</p>
                <form >
                    <p>1st</p>
                    {JSON.stringify(this.state)}
                    <input type="text" onChange={this.storedata} name='username' id='username' />
                    <input type="submit" onClick={this.submitdata} name='' id='' />
                    <br />
                    <br />
                    <br />
                    <p>2nd</p>

                </form>
                <form>

                    {JSON.stringify(this.state.formdata)}
                    <input type="text" onChange={(event) => { this.setState((prevstate) => ({ formdata: { ...prevstate.formdata, [event.target.name]: event.target.value } })) }} name="uname" id="uname" />
                    <br />
                    <br />
                    <input type="text" onChange={(event) => { this.setState((prevstate) => ({ formdata: { ...prevstate.formdata, [event.target.name]: event.target.value } })) }} name="password" id="password" />
                    
                </form>
                <br />
                <br />
                <br />
            </>
        );
    }
}

export default controlledcompo;