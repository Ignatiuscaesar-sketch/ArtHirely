import React, { useState, useEffect } from 'react';
import './index.css'; 

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('./db.json')  
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setJobs(data.jobs);  
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Optionally handle error state
            });
    }, []);

    if (loading) return <div>Loading jobs...</div>;

    return (
        <table className="job-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Time</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Due Date</th>
                    <th>Required Stack</th>
                    <th>Company Name</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map(job => (
                    <tr key={job.id}>
                        <td>{job.id}</td>
                        <td>{job.time}</td>
                        <td>{job.description}</td>
                        <td>{job.cost}</td>
                        <td>{job.dueDate}</td>
                        <td>{job.requiredStack}</td>
                        <td>{job.companyName}</td>
                        <td>{job.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default JobList;
