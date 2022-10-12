import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar flex justify-between'>
            <div className='ml-1'>
            <h1>Frontend jobs test</h1>
            </div>

            <div className='mr-1'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Navbar;