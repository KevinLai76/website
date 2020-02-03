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
                    <p>
                        - brief intro (1-2 senctences)
                        - what do you do?
                            - what are your beiefs
                            - what are you passionate about
                            - what do you think you can contribute
                        - thoughtful ending line
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