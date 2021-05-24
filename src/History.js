import React from 'react'
import { Button, FormGroup, FormControl, FormLabel, FormText, FormCheck, Form } from "react-bootstrap";

function History() {
    return (
        <div>
            <h3> Past Accident History </h3>
            <br />
            <br />
            <Form className="container">
                <FormGroup >
                    <FormControl type="text" placeholder="Accident in Kandy (Vehicle, Time, Location, Date, Accuracy percentage)" />
                </FormGroup>
                <FormGroup >
                    <FormControl type="text" placeholder="...." />
                </FormGroup>
                <FormGroup >
                    <FormControl type="text" placeholder="....." />
                </FormGroup>
                <FormGroup >
                    <FormControl type="text" placeholder="......" />
                </FormGroup>
                <FormGroup >
                    <FormControl type="text" placeholder="........" />
                </FormGroup>


            </Form>
        </div>
    )
}

export default History;