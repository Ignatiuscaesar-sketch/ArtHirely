import React, { useState } from 'react'; 
import './index.css';

  function JobPosts() {
    const [formData, setFormData] = useState({
        time: '',
        description: '',
        cost: '',
        due_date: '',
        stack: '',
        company: '',
        location: ''
    });

    const handleJobSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted! Successful');

        const jobObject = {
          time: formData.time,
          description: formData.description,
          cost: formData.cost,
          due_date: formData.due_date,
          stack: formData.stack,
          company: formData.company,
          location: formData.location
        };

        console.log(jobObject)
        fetch("http://localhost:3000/jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(jobObject)
        })
        .then(res => res.json())
        .then(jobs => {
          console.log(jobs);
          setFormData({
            time: '',
            description: '',
            cost: '',
            due_date: '',
            stack: '',
            company: '',
            location: ''
        });
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return ( 
      <form className="formContainer" onSubmit={handleJobSubmit}>
        <h2>Job Posting</h2>
        <label for="time">Time:</label>
        <select id="time" name="time" value={formData.time} onChange={handleChange}>
          <option value="Full-time">Full-Time</option>
          <option value="Part-time">Part-Time</option>
          <option value="Internship">Internship</option>
        </select>
        <label>
            Description:
            <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </label><br />
        <label>
            Cost:
            <input type="text" name="cost" value={formData.cost} onChange={handleChange} required />
        </label><br />
        <label>
            Due Date:
            <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} required />
        </label><br />
        <label>
            Stack:
            <input type="text" name="stack" value={formData.stack} onChange={handleChange} required />
        </label><br />
        <label>
            Company Name:
            <input type="text" name="company" value={formData.company} onChange={handleChange} required />
        </label><br />
        <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label><br />
        <button type="submit">Submit</button>
      </form>
  
    );
  }


export default JobPosts;