import React from 'react';
import { Link } from 'react-router-dom';


import './Header.css';
const Header = () => {
    return (
        <div>
            <div>
                <header className="header">
                    <h1>Doctors-care</h1>
                </header>
                <nav className="header_nav" >
                    <Link className="text-decoration-none p-2" to="/home">Home</Link>
                    <Link className="text-decoration-none p-2" to="/services">Services</Link>
                    <Link className="text-decoration-none p-2" to="/aboutus">About US</Link>

                </nav>
            </div>
            <div className="header_nav">
                <Link className="text-decoration-none p-2" to="/login">Log In</Link>
                <Link className="text-decoration-none p-2" to="/register">New member</Link>
            </div>
        </div>

    );
};

export default Header;