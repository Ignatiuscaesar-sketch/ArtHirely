import Header from './Components/Header/Header';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import About from './Components/Header/About';
import Home from './Components/Header/Home';
import JobList from './Components/Ignatius-Caesar/JobList';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResult from './Components/SearchBar/SearchResult';
import SearchResultsList from './Components/SearchBar/SearchResultList';
import JobTab from './Components/Stephen/JobTab';

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
                    <Route path='/jobs' element={<JobList/>} />
                    <Route path= '/jobtab' element={<JobTab/>} />
                </Routes>
            </div>
        </Router>
       
    )
}

export default App;
