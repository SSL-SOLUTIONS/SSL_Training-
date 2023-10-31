import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    {/* Logo on the left side */}
                    <NavLink to="/" className="navbar-brand"><img className='logo' src='/logo.png'></img></NavLink>

                    {/* Navbar toggle button for smaller screens */}
                    <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-light">
                        <i class="fa-solid fa-bars color"></i>
                        </span>
                    </button>

                    {/* Unordered list on the right side */}
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mt-1">
                                <NavLink className="nav-link mx-2 mt-2" to='/about'>About Us</NavLink>
                            </li>
                            <li className="nav-item mt-1">
                                <NavLink to="/pricing" className="nav-link mx-2 mt-2">Pricing</NavLink>
                            </li>

                            <li className="nav-item mt-1">
                                <NavLink to="/privacy" className="nav-link mx-2 mt-2">Privacy Policy</NavLink>
                            </li>
                            <li className="nav-item mt-1">
                                <NavLink to="/blog" className="nav-link mx-2 mt-2">Blogs</NavLink>
                            </li>
                            <li className="nav-item mt-1">
                                <NavLink to="/contact" className="nav-link mx-2 mt-2">Contact Us</NavLink>
                            </li>
                            <li className="nav-item mt-2 ml-4">
                                <button className='my-btn'><NavLink to='/SignUp'>Create Account</NavLink></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
