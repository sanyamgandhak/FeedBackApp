import { createContext,useState,useEffect } from "react";
const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{

    const [isLoading , setIsLoading]=useState(true)
    const [feedback,setFeedback]=useState([])

    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })
     
    useEffect(()=>{
        fetchFeedback()
    },[])


    //fetch feedback 
    const fetchFeedback=async()=>{
        const response=await fetch(`/feedback?_sort=id_order=desc`)
        const data=await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    //will put information about the edited item !!
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }

    //it is used to delete the feedback item
    const deleteItem=async(id)=>{
        await fetch(`/feedback/${id}`,{
            method:'DELETE'
        })

        setFeedback(feedback.filter((item)=>item.id!==id))
    }

    //updating the feedback 
    const updateFeedback=async(id,updItem)=>{
        const response=await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify(updItem)
        })

        const data=await response.json()
        setFeedback(
            feedback.map((item)=>(item.id===id ? { ...item,...data}:item))
        )
    }
    

    const addFeedback= async(item)=>{
        const response=await fetch('/feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item),
        })
        console.log(response)
        const data=await response.json()
        setFeedback([data,...feedback])

    }
    return <FeedbackContext.Provider value={{
        feedback,
        deleteItem,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        fetchFeedback,
        isLoading,
    }}> 
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext