import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Header;