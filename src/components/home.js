import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'


class Home extends React.Component {
    render(){
        return(
            <div className='body'>
                <div className="bio-section">
                    <h1>Kevin Lai</h1>
                    <p>Here is a short paragraph about some stuff that kevin has done.
                       This also includes a brief intro in to his beliefs and methodology.
                    </p>
                </div>
                <div className='project-section'>
                    <h1>Projects</h1>
                    <Projects />
                </div>
                <div className='about-section'>
                    <h1>About</h1>
                    <About />
                </div>
                <div className='contact-section'>
                    <h1>Contact</h1>
                    <Contact />
                </div>
            </div>
        )
    }
}

export default Home