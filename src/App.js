import React from 'react';
import './Header.css'; // Assume CSS is already written

function Header() {
    return (
        <div className="App">
            <JobList />  
        </div>
=========
import Header from './Components/Header/Header';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import About from './Components/Header/About';
import Home from './Components/Header/Home';
function App() {
    return (
        <Router>
            <div className='App'>
               <Header />
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path='/' element={<Home />}/>
                </Routes>
            </div>
        </header>
    );
}

export default Header;
