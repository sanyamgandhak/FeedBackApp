

import Card from './shared/card'
import {Link} from 'react-router-dom'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
function AboutPage(){
    return (
        <Card className='about-link'>
            <h1>Feedback App</h1>
           <p>Hi there !! Myself <strong>Sayam Gandhak</strong> . I created this app while learning React.This React App uses Mock Json Server as a Backend . App has following features : - </p>
           <ul>
            <strong>
            <li>Add Feedback</li>
            <li>Delete Feedback</li>
            <li>Update Feedback</li>
            </strong>
           
           </ul>
            <br/>
           <p>App uses following <strong>React Concepts :-</strong> </p>
           <ul>
            <strong>
            <li>State</li>
            <li>Component</li>
            <li>UseEffect</li>
            <li>Context</li>
            <li>Props</li>
            <li>Router</li>
            </strong>
            
           </ul>
           <br/>
           <p>You can connect with me here : -<br/>
            <a href="https://www.linkedin.com/in/sayamgandhak/"> <FaLinkedin></FaLinkedin></a>&nbsp;&nbsp;
            <a href="https://twitter.com/GandhakSanyam"><FaTwitter></FaTwitter></a></p>
            <br/>
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </Card>
    )
}

export default AboutPage