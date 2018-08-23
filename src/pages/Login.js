import React, { Component } from 'react';
import './Login.css';
import InputField from './../partials/InputField';
import DefaultButton from './../partials/DefaultButton'
import { Helmet } from 'react-helmet';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleInputChange = event => {
        let change = {}
        change[event.target.name] = event.target.value
        
        this.setState(change)
    }

    handleFormSubmit = event => {
        console.log("Login clicked!")
    }
    render() {
        return (
            <div className="container">
                <Helmet>
                    <style>{''+
                        'body { background-color: #40739e;'+
                        '}'}</style>
                </Helmet>
                <div className="card">
                    <div className="card-header">
                        <h1>Login</h1>
                    </div>
                    <div className="card-content">
                        <InputField
                            placeholder="email"
                            value={this.state.email}
                            name="email" type="text"
                            onChange={this.handleInputChange}
                        />
                        <InputField
                            placeholder="password"
                            value={this.state.password}
                            name="password"
                            type="password"
                            onChange={this.handleInputChange}
                        /> 
                        <DefaultButton onClick={this.handleFormSubmit}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;