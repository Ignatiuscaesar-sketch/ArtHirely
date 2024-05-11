
import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './Header.css';

function Header() {
  const location = useLocation();
  const renderSignupForm = location.pathname === '/signup';
  const renderLoginForm = location.pathname === '/login';

  return (
    <div className='header'>
      <div className="header-left">
        <h2>
        <span style={{ color: 'black' }}> Art</span>
        <span style={{ color: 'blue' }}>Hirely</span>
        </h2>
      </div>

      <div className="header-center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>

        </ul>
      </div>

      <div className="header-right">
        <div className='button-container'>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>
      {renderSignupForm && <SignupForm />}
      {renderLoginForm && <LoginForm />}
    </div>
  );
}

export default Header;
