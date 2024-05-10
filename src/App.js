<<<<<<< HEAD
import React from 'react';
import Server from './Components/FardosaGedi/Server';
import './index.css';
function App() {
    return (
        <div className="App">
        <Server />
        </div>
        );
     }
        
   
    
=======


import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import About from './Components/Header/About';
import Home from './Components/Header/Home';
import SignupForm from './Components/Header/SignupForm';
import LoginForm from './Components/Header/LoginForm';
import JobList from './Components/Ignatius-Caesar/JobList';
function App() {
    return (
        <Router>
            <div className='App'>
               <Header />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path='/' element={<Home />}/>
                    <Route path="/signup" element={<SignupForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path='/jobs' element={<JobList/>
}/>
                </Routes>
            </div>
        </Router>

    );
}

>>>>>>> cda18275c64b0821937232597971fb99c406c2f6
export default App;
