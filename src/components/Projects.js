import React from 'react'

class Projects extends React.Component{
    
    render(){
        return(
            <div className='projects-container'>
                <ul className='projects-list'>
                    <li className='flatiron-shoutouts-secrets'>Flatiron Shoutouts/Secrets</li>
                    <li className='name-rater'>Name Rater</li>
                    <li className='guess-who'>Guess Who?</li>
                </ul>
            </div>
        )
    }
}

export default Projects