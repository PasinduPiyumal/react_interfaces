import React from 'react'
import { Button, FormGroup, FormControl, FormLabel, FormText, FormCheck, Form, Image } from "react-bootstrap";

function NewReport() {
    return (
        <div>
            <h3>Recent accident report</h3>
            <br />
            <br />
            <Form className="container">
                <FormGroup >

                    <FormControl type="text" placeholder="New Accident in ABC Location" />
                    <br />
                    <Image src="/car.png" fluid />
                </FormGroup>

                <FormGroup >
                    <FormLabel>Location</FormLabel>
                    <FormControl type="text" placeholder="Location with Time Zone" />
                </FormGroup>


            </Form>
        </div>
    )
}

export default NewReport;