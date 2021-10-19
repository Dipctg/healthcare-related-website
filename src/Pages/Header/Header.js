import React from 'react';
import { Button, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (

        <div>
            <div>
                <header className="header">
                    <h1>Doctors-care</h1>
                </header>
            </div>
            <div className="main-nav-container">
                <div>

                    <nav className="header_nav" >
                        <Link as={HashLink} className="text-decoration-none p-2" to="/home#home">Home</Link>
                        <Link as={HashLink} className="text-decoration-none p-2" to="/services">Services</Link>
                        <Link as={HashLink} className="text-decoration-none p-2" to="/aboutus">About US</Link>

                    </nav>
                </div>
                <div >

                    {user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Link className="text-decoration-none" to="/login">Login</Link>

                    }
                    <br />
                    <Navbar.Text>
                        <a className="text-decoration-none " href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </div>
            </div>




        </div>
    );
};

export default Header;