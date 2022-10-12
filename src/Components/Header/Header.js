import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand className='fs-2'>Quiz Hunter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
                        <Nav>
                            <Link className='text-warning text-decoration-none' to="/">Home</Link>
                            <Link className='text-warning text-decoration-none ms-sm-4' to="/statistics">Statistics</Link>
                            <Link className='text-warning text-decoration-none ms-sm-4' to="/blog">Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;