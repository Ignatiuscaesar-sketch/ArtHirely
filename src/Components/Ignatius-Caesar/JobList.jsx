import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure you have this CSS file in the same directory

const JobList = (prop) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    

    // Mock data to simulate fetched jobs
    useEffect(() => {
        // Simulate a fetch call
        setTimeout(() => {
            setJobs([
                { id: 1, time: "Full-Time", description: "Develop a full stack application", cost: "$1200", dueDate: "2024-05-30", requiredStack: "React, Node.js", companyName: "OpenAI", location: "San Francisco" },
                { id: 2, time: "Part-Time", description: "Front-end development for a dashboard", cost: "$800", dueDate: "2024-06-15", requiredStack: "Vue, Firebase", companyName: "Tech Innovations", location: "Remote" }
            ]);
            setLoading(false);
        }, 1000);
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
                        <td>{job.due_date}</td>
                        <td>{job.stack}</td>
                        <td>{job.company}</td>
                        <td>{job.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default JobList;