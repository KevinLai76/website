import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar(){

    return(
        <nav className='header'>
            <div className="link-container">
                <NavLink className='home-link' to='/'>Kevin</NavLink>
                <NavLink className='projects-link' to='/projects'>Projects</NavLink>
                <NavLink className='about-link' to='/about'>About</NavLink>
                <NavLink className='contact-link' to='/contact'>Contact</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;