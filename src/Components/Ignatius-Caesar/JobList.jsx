import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure you have this CSS file in the same directory
import JobTab from '../Stephen/JobTab';

const JobList = () => {
    const [jobs, setJobs] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [filteredJobs, setFilteredJobs] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/jobs")  // Adjust the path if your db.json is located elsewhere
          .then(response => response.json())
          .then(data => {
            setJobs(data);  // Ensure your db.json structure matches
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });

      }, []);  // Empty dependency array to run only on the first render
    
      if (loading) return <div>Loading...</div>;
      
      function handleFilter(e){
        const jobType = e.target.id;
        e.target.style.fontWeight = "bold"
        setFilteredJobs(jobs.filter(job => job.time === jobType));  
        e.target.parentNode.style.transition = "width 0.4s ease, left 0.4s ease"
      }

    return (
        <>
        <JobTab jobs = {jobs} handleFilter = {handleFilter} filteredJobs={filteredJobs}/>
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
                {filteredJobs.map(job => (
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
        
        </>
    );
};

export default JobList;
