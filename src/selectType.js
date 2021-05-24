import React from 'react'
import { Button, FormGroup, FormControl, FormLabel, FormText, FormCheck, Form } from "react-bootstrap";

function Select() {
    return (
        <div>
            <h3>Select Accident Type</h3>
            <br />
            <br />
            <Form className="container">

                <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Car vs Car" />
                </FormGroup>
                <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Car vs Bike" />
                </FormGroup>
                <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Car vs Pedestrian" />
                </FormGroup>
                <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Car vs tree" />
                </FormGroup>
                <FormGroup controlId="formBasicCheckbox">
                    <FormCheck type="checkbox" label="Human Gatherings" />
                </FormGroup>
            </Form>
        </div>
    )
}

export default Select;