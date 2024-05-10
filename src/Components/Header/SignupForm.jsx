import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 4) {
      alert('Password must be at least 4 characters long.');
      return;
    }else if (formData.password.length > 8) {
      alert('Password must not exceed 8 characters.');
      return;
    }
    if (formData.email && formData.password){
    console.log('Signup form submitted:', formData);
    alert('Signup successeful!')
    // Redirect to the "About" page after signup
    navigate('/jobs');
    }else{
        alert('please enter email and password')
     }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
