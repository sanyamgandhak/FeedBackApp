import Card from "./shared/card"
import {FaTimes,FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedBackContext"
function FeedbackItem({item}){

  const {deleteItem,editFeedback}=useContext(FeedbackContext)
    return (
   
        <Card >
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>deleteItem(item.id)}>
        <FaTimes color='purple' />
        </button>
        <button onClick={()=>editFeedback(item)}className="edit">
            <FaEdit color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
        </Card>
       

       
        
       
        )
}

export default FeedbackItem