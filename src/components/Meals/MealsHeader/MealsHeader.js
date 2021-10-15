import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
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
                    <Nav.Link as={NavHashLink} to="/breakfast#breakfast" activeStyle={activeStyle}>Breakfast</Nav.Link>
                    <Nav.Link as={NavHashLink} to="/lunch#lunch" activeStyle={activeStyle}>Lunch</Nav.Link>
                    <Nav.Link as={NavHashLink} to="/dinner#dinner" activeStyle={activeStyle}>Dinner</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MealsHeader;