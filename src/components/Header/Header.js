import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/logo2.png';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="light" sticky="top" className="" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="100%"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
                <div className="me-3 mt-2">
                    <Button variant="light" className="fw-bolder me-2">Login</Button>
                    <Button variant="danger" className="rounded-pill px-4">Sign up</Button>
                </div>
            </Navbar>
            <HeaderBanner></HeaderBanner>
        </>
    );
};

export default Header;