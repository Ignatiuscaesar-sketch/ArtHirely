import React, { useState } from 'react';

function JobForm() {
    const [formData, setFormData] = useState({
        time: '',
        description: '',
        cost: '',
        dueDate: '',
        requiredStack: '',
        companyName: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted! Successfull');
    };

    return (
      <form className = "formContainer" onSubmit = {handleSubmit}>
            <h2>Job Posting Form</h2>
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
                Required Stack:
                <input type="text" name="requiredStack" value={formData.requiredStack} onChange={handleChange} required />
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
    );
}

export default JobForm;
