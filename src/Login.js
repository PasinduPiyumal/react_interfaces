import React from 'react'
import { Button, FormGroup, FormControl, FormLabel, FormText, FormCheck, Form } from "react-bootstrap";

function Login() {
    return (
        <div>
            <h2>Sign In</h2>
            <br />
            <br />
            <Form className="container">
                <FormGroup controlId="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="Enter email" />
                    <FormText className="text-muted">
                        Provide your credentials...
    </FormText>
                </FormGroup>

                <FormGroup controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Check me out" />
                </FormGroup>
                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Button variant="primary" type="close">
                    Close
                </Button>
            </Form>
        </div>
    )
}

export default Login;