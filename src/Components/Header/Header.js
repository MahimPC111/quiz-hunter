import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* <h1>This is header</h1> */}
            {/* <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link> */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='title'>Quiz Hunter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
                        <Nav>
                            <Link className='link' to="/">Home</Link>
                            <Link className='link' to="/statistics">Statistics</Link>
                            <Link className='link' to="/blog">Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;