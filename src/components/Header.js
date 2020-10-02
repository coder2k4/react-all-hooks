import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const Header = (props) => {

    const {location} = props

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">React Hooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/useState" >useState</Nav.Link>
                    <Nav.Link as={NavLink} to="/useEffect" >useEffect</Nav.Link>
                    <Nav.Link as={NavLink} to="/useRef" >useRef</Nav.Link>
                    <Nav.Link as={NavLink} to="/useMemo" >useMemo</Nav.Link>
                    <Nav.Link as={NavLink} to="/useCallback" >useCallback</Nav.Link>
                    <Nav.Link as={NavLink} to="/useContext" >useContext</Nav.Link>
                    <Nav.Link as={NavLink} to="/useReducer" >useReducer</Nav.Link>
                    <Nav.Link as={NavLink} to="/useOwnHooks" >useOwnHooks</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Header