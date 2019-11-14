import React, {Component} from 'react';
import {Card, Form, Input, Button} from '../AuthForm';
import {Link, Redirect} from 'react-router-dom';
import {useAuth} from "../context/auth";

export default class Login extends Component{

    if(isLoggedIn){
        return <Redirect to="/"/>
    }

    render(){
        return(
            <Card>
                <Form>
                    <Input type="email" 
                           value={user}
                           onChange = {e =>{
                               setUserName(e.target.value);
                           }}
                           placeholder="Email or username"
                    />
                           
                    <Input type="password" 
                           value={password}
                           onChange = {e=>{
                               setPassword(e.target.value);
                           }}
                           placeholder="Enter password"
                    />

                    <Button>Login</Button>
                </Form>
                <Link to="/register">Or register here</Link>
            </Card>
        )
    }
}