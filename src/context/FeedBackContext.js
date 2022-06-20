import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{

    const [feedback,setFeedback]=useState([{
        id:1,
        text:'this item is from text',
        rating:10
    }])

    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

    //will put information about the edited item !!
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }

    //it is used to delete the feedback item
    const deleteItem=(id)=>{
        setFeedback(feedback.filter((item)=>item.id!==id))
    }

    //updating the feedback 
    const updateFeedback=(id,updItem)=>{
        setFeedback(
            feedback.map((item)=>(item.id===id ? { ...item,...updItem}:item))
        )
    }
    

    const addFeedback=(item)=>{
        item.id=uuidv4()
        setFeedback([item,...feedback])
    }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteItem,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext