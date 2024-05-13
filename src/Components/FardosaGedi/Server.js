import React, { useState } from 'react';
import './index.css';

function Server() {

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

        e.target.reset()
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
      <div id = "formContent">
      <form className="formContainer" onSubmit={handleJobSubmit}>
        <h2 id = "formTitle">Job Posting</h2>
        <label for = "time">Time:</label><br />
            <input type="text" id ="time" name="time" value={formData.time} onChange={handleChange} required /><br/>
        
        <label for = "description"> Description: </label><br />
            <input type="text" id = "description" name="description" value={formData.description} onChange={handleChange} required /><br/>
       
        <label for = "cost"> Cost: </label><br />
            <input type="text" id = "cost" name="cost" value={formData.cost} onChange={handleChange} required /><br/>
        
        <label for = "date"> Due Date: </label><br />
            <input type="text" id = "date" name="dueDate" value={formData.dueDate} onChange={handleChange} required /><br/>
        
        <label for = "stack">Stack: </label><br />
            <input type="text" name="stack" value={formData.stack} onChange={handleChange} required /><br/>

            <label for = "companyName"> Company Name: </label> <br/>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required /><br/>
        
        <label for = "location"> Location:  </label><br/>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required /><br/>
       
        <button type="submit">Submit</button><br/>
      </form>
    </div>
    );
  }

  return <JobForm />;
}

export default Server;
