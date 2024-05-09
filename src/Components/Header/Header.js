import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [signupForm, setSignupForm] = useState({
    username:'',
    email: '',
    password: ''
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const navigate = useNavigate();

  const handleSignupInputChange = (event) => {
    const { name, value } = event.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if(signupForm.email !=='' && signupForm.password !== ''){
       // Add your signup logic here
       console.log('Signup form submitted:', signupForm);
       alert('Sign up successful!');
       // Redirect to the "About" page after signup
       navigate('/about');
       setShowSignupForm(false);
    } else{
      alert('please enter email and password')
   }

};


  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (loginForm.email !== '' && loginForm.password !== '') {
        console.log('Login form submitted:', loginForm);
        alert('Login successful!');
        // Redirect to the "About" page after login
        navigate('/about');
        setShowLoginForm(false);

    } else {
        alert('Please enter email and password.');
    }
};
  const handleSignupClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  return (
    <div className='header'>
      <div className="header-left">
        <h2>ArtHirely</h2>
      </div>

      <div className="header-center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#">Jobs</a></li>
        </ul>
      </div>

      <div className="header-right">
        <div className='button-container'>
        <button onClick={handleSignupClick}>Sign Up</button>
        <button onClick={handleLoginClick}>Log In</button>
        </div>
      </div>

      {/*SIGNUP FORM*/}
      {showSignupForm && (
        <div className="form-container">
          <form onSubmit={handleSignupSubmit} className="signup-form">
            <input
               type="username"
               name='username'
               placeholder='username'
               value={signupForm.username}
               onChange={handleSignupInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupForm.email}
              onChange={handleSignupInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupForm.password}
              onChange={handleSignupInputChange}
            />
            <button type="submit">Sign Up</button>
          </form>
          <button onClick={() => setShowSignupForm(false)}>Close</button>
        </div>
      )}

      {/* Login Form */}
      {showLoginForm && (
        <div className="form-container">
          <form onSubmit={handleLoginSubmit} className="login-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={handleLoginInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleLoginInputChange}
            />
            <button type="submit">Log In</button>
          </form>
          <button onClick={() => setShowLoginForm(false)}>Close</button>
        </div>
      )}
    </div>
  );
}