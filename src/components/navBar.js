import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <nav>
            <span>Kevin</span>
            <br></br>
            <NavLink to='/' >Home</NavLink>
            <br></br>
            <NavLink to='/about' >About</NavLink>
            <br></br>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    )
}

export default NavBar;