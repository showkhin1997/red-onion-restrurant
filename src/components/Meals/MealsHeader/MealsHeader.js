import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const MealsHeader = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        textDecoration: "underline"
    }

    return (
        <Navbar bg="light" variant="light" className="mt-5">
            <Container>
                <Nav className="mx-auto">
                    <Nav.Link as={NavLink} to="/breakfast" activeStyle={activeStyle}>Breakfast</Nav.Link>
                    <Nav.Link as={NavLink} to="/lunch" activeStyle={activeStyle}>Lunch</Nav.Link>
                    <Nav.Link as={NavLink} to="/dinner" activeStyle={activeStyle}>Dinner</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MealsHeader;