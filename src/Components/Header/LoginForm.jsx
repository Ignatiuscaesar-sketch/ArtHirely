import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
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
    console.log('Login form submitted:', formData);
    alert('Login successful!')
    navigate('/about');
    }else{
        alert('Please enter Email and Password!')
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
