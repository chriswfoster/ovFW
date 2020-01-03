import React from 'react';
import { message, Input, Button, Alert, Spin } from 'antd';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import "./Login.css"
import spinsciTrans from "./spinsciTrans.png"


export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            showAlert: false,
            username: "",
            password: "",
            token: ""
        }
    }

    login = (event) => {
        let authString = `${this.state.username}:${this.state.password}`;
        authString = btoa(authString);
        authString = `Basic ${authString}`;


        axios.post(`https://9d67f927.ngrok.io/agenta/v1/Login?hoursToExpire=1`,
            "",
            {
                headers: {
                    "Authorization": authString,
                    Accept: "application/json"
                }
            })
            .then((res) => {
                let data = res.data;
                //Perform any custom work and error checking here
                if (data.success) {
                    //Save token to global state here. Redirect to landing page
                    this.setState({ token: data.token });
                    var tokenCheck = this.state.token
                    localStorage.setItem("token", data.token);
                    if (tokenCheck.length > 0) {
                        console.log("I RAN", tokenCheck)
                    }
                } else {
                    if (data.error)
                        alert(data.error[0]);
                }
            }).catch((err) => {
                console.log(err);
                let data = err.data;
                alert("Authentication failed for some reason. Please attempt to login again, or contact your administartor.");
            })
    }

    render() {
        { console.log("TOKEN", this.state.token) }
        return (
            <div className="loginBackground">
                <div className='spinsciBgImage'>
                </div>
                <div className="login-card" style={{ overflowX: 'scroll' }}>
                    <div className="login-top-bar">
                        <img src={spinsciTrans} />
                    </div>
                    <Spin spinning={false}>
                        <div className="login-input-container">
                            {
                                this.state.showAlert ?
                                    <Alert
                                        showIcon={true}
                                        type="error"
                                        message="Please enter a valid email address and password."
                                        style={{ marginBottom: 20 }}
                                    />
                                    :
                                    ''
                            }
                            <span>
                                <Input
                                    style={{ width: 300, marginBottom: 20, maxWidth: '40vw' }}
                                    size="large"
                                    placeholder="Email"
                                    allowClear
                                    onChange={(e) => { this.setState({ username: e.target.value }) }}
                                />
                            </span>
                            <span>
                                <Input.Password
                                    style={{ width: 300, marginBottom: 20, maxWidth: '40vw' }}
                                    size="large"
                                    placeholder="Password"
                                    allowClear
                                    onPressEnter={}
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                />
                            </span>
                            <Button onClick={this.login} style={{ marginBottom: 20 }} >
                                Login
                            </Button>
                            {localStorage.getItem("token") ? <Redirect to="/main" /> : ""}
                            <div style={{ fontSize: 10, textAlign: 'center', marginTop: 20 }}>
                                <span>
                                    Copyright © SpinSci Technologies. All Rights Reserved.
                                </span>
                            </div>
                        </div>
                    </Spin>
                </div>
            </div >
        )
    }
}
