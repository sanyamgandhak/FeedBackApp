

import Card from './shared/card'
import {Link} from 'react-router-dom'
function AboutPage(){
    return (
        <Card className='about-link'>
           <h1>This is about page </h1>
           <p>Hi how are you !!</p>
            <p>
                <Link to='/'>Back to Home</Link>
            </p>
        </Card>
    )
}

export default AboutPage