import React from 'react'
//import { Button, FormGroup, FormControl, FormLabel, FormText, FormCheck, Form } from "react-bootstrap";
import Home from './Home';
import Login from './Login';
import NewReport from './NewReport';
import { Route, Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';



function App() {
    return (
        <div className="App" style={
            {
                backgroundImage: `url(${require("./occurs.png")})`,
            }
        }>
            <ReactBootStrap.Navbar bg="light" expand="lg">
                <ReactBootStrap.Navbar.Brand href="#home">Accident Catalog</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="NewReport">Recent</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="SelectType">ReportType</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="Notify">Notifier</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="History">ReportHistory</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>

    );
}

export default App;