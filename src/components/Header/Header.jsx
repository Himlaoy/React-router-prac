import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <NavLink className= 'gap-5'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/meals'>Meals</Link>
            
        </NavLink>
    );
};

export default Header;