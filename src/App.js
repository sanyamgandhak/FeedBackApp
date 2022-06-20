
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/Feedbackstats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/AboutPage'
import AboutIconPage from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedBackContext'
function App(){

    return(
        <FeedbackProvider>
            <Router>
            <Header bgColor='red' textColor='blue' name={'sayam'} />
            <div className='container'>
                
                <Routes>
                    <Route exact path='/' element={<>
                        <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList />
                    </>}>
                   
                    </Route>
                <Route path ='/about' element={<AboutPage/>}> </Route>

                </Routes>
                <AboutIconPage/>
        </div>
     

        </Router>

        </FeedbackProvider>
        
       

    ) 
}
export default App