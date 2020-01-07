import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <nav>
            <div className="Header">
                <NavLink to='/' >Kevin</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/about' >About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;