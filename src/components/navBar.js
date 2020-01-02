import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <nav>
            <span>Kevin</span>
            <br></br>
            <NavLink to='/' exact>Home</NavLink>
            <br></br>
            <NavLink to='/about' exact>About</NavLink>
            <br></br>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    )
}

export default NavBar;