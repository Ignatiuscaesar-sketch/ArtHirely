import React, { useState } from 'react';
import './index.css';

function Server() {

  function handleJobSubmit(e){
    e.preventDefault();
  }

  function JobForm() {
    const [formData, setFormData] = useState({
        time: '',
        description: '',
        cost: '',
        dueDate: '',
        stack: '',
        companyName: '',
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
          dueDate: formData.dueDate,
          stack: formData.stack,
          companyName: formData.companyName,
          location: formData.location
        };
        console.log(`this is the object ${jobObject}`)

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
        });
        e.target.reset(); 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
      <div>
      <form className="formContainer" onSubmit={handleJobSubmit}>
        <h2>Job Posting</h2>
        <label>
            Time:
            <input type="text" name="time" value={formData.time} onChange={handleChange} required />
        </label><br />
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
            <input type="text" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
        </label><br />
        <label>
            Stack:
            <input type="text" name="stack" value={formData.stack} onChange={handleChange} required />
        </label><br />
        <label>
            Company Name:
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
        </label><br />
        <label>
            Location:
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label><br />
        <button type="submit">Submit</button>
      </form>
      </div>
    );

  }

  return <JobForm />;
}

export default Server;
