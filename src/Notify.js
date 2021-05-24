import React from 'react'
import { Button, FormGroup, FormControl, FormLabel, FormText, FormCheck, Form } from "react-bootstrap";

function Notify() {
    return (
        <div>
            <h1> Notify of Reports </h1>
            <br />
            <br />
            <Form className="container">
                <FormGroup >
                    <FormLabel>Nearest Hospital</FormLabel>
                    <FormControl type="text" placeholder="Hospital" />
                </FormGroup>
                <FormGroup >
                    <FormLabel>Nearest Police Station</FormLabel>
                    <FormControl type="text" placeholder="Station" />
                </FormGroup>
                <FormGroup >
                    <FormLabel>Nearest FireBrigade</FormLabel>
                    <FormControl type="text" placeholder="FireBrigade" />
                </FormGroup>
                <FormGroup >
                    <FormLabel>Nearest Crane Support</FormLabel>
                    <FormControl type="text" placeholder="Crane Support" />
                </FormGroup>
                <br />
                <br />
                <FormGroup >
                    <FormControl type="text" placeholder="Notification sent to relevant fields" />
                    <FormText className="text-muted">
                        Alerts
    </FormText>
                </FormGroup>

            </Form>
        </div>
    )
}

export default Notify;