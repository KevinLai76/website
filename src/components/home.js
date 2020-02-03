import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'


class Home extends React.Component {
    render(){
        return(
            <div className="body">
                <h1>Kevin Lai</h1>
                <p>Here is a short paragraph about some stuff that kevin has done.
                   This also includes a brief intro in to his beliefs and methodology.
                </p>
                <h1>Projects</h1>
                <Projects />
                <h1>About</h1>
                <About />
                <h1>Contact</h1>
                <Contact />
            </div>
        )
    }
}

export default Home