import React from 'react';
import { Route, Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

function NavBar(){
    return(
        <div className='header'>
            <span>Kevin</span>
            <Link to='/about'>
                About
            </Link>
        </div>
    )
}

export default NavBar;