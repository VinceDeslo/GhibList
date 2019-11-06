import React, {Component} from 'react';
import {Card, Logo, Form, Input, Button} from '../components/AuthForm';
import {Link} from 'react-router-dom';

export default class Login extends Component{
    
    render(){
        return(
            <Card>
                <Form>
                    <Input type="email" placeholder="Email or username"/>
                    <Input type="password" placeholder="Enter password"/>
                    <Button>Login</Button>
                </Form>
                <Link to="/register">Or register here</Link>
            </Card>
        )
    }
}