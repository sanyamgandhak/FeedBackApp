import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedBackContext'

function FeedbackList(){

    const{feedback}=useContext(FeedbackContext)
    if(!feedback || feedback.length===0){
        return <div className='feedback-list'>No Feedback Yet </div>
    }
    return (
        <div className='feedback-list'>
            {feedback.map(item=>
               (<FeedbackItem item={item} />) 
            )}
        </div>
    )
}
export default FeedbackList