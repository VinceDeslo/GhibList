import React, {Component} from 'react';
import {Card, Logo, Form, Input, Button} from '../components/AuthForm';
import {Link} from 'react-router-dom';

export default class Register extends Component{

    render(){
        return(
            <Card>
                <Form>
                    <Input type="email" placeholder="Email or username"/>
                    <Input type="password" placeholder="Enter password"/>
                    <Input type="password" placeholder="Enter password again"/>
                    <Button>Register</Button>
                </Form>
                <Link to="/login">Or login here</Link>
            </Card>
        )
    }
}