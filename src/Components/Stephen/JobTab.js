import React, { useState, useEffect } from "react";
import "./index.css";
import JobPost from "./JobPost";

function JobCard() {
  // Dummy data as I wait for public API to be fetched
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Web Developer', type: 'Freelance' },
    { id: 2, title: 'Graphic Designer', type: 'Full-Time' },
    { id: 3, title: 'Content Writer', type: 'Freelance' },
    { id: 4, title: 'Project Manager', type: 'Full-Time' },
    { id: 5, title: 'Content Writer', type: 'Freelance' }
  ]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [freelanceCount, setFreelanceCount] = useState(0);
  const [fullTimeCount, setFullTimeCount] = useState(0);

  useEffect(() => {
    // Calculation of the total jobs in each category
    setFreelanceCount(jobs.filter(job => job.type === 'Freelance').length);
    setFullTimeCount(jobs.filter(job => job.type === 'Full-Time').length);
  }, [jobs]);

  //A callback function that triggers the filters
  function handleFilter(e) {
    const jobType = e.target.id; 
    setFilteredJobs(jobs.filter(job => job.type === jobType));
    e.target.style.fontWeight = "bold"
    e.target.parentNode.style.borderBottom = "2px solid black"
  }

// CRUD OPERATION

      
const url = 'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
      
const options = {
    method: 'GET',
    headers: { 
      'X-RapidAPI-Key': '622bf7f3fbmsh256faeb70b8923ep178db6jsn8367f8743c1f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          }
        };

        useEffect(()=>{
          fetch(url, options)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
        }, [])
        
     
        

  return (
    <>
      <div className="main-button-container">
        <div className="button-designs first-section">
          <div>
            <button className="button-designs third-button" id="Freelance" onClick={handleFilter}>
              Freelance ({freelanceCount})
            </button>
          </div>
          <div>
            <button className="button-designs second-button" id="Full-Time" onClick={handleFilter}>
              Full-Time ({fullTimeCount})
            </button>
          </div>
          <div>
            <button className="button-designs third-button" id="Creatives-for-hire" onClick={handleFilter}>
              Creatives for hire
            </button>
          </div>
        </div>

        <div className="button-designs lower-section">
          <div>
            <h6 className="button-designs" id="filtered-jobs">
              <span>{filteredJobs.length}</span> Jobs
            </h6>
            
          </div>
          <div>
            <button className="button-designs" id="blue-button">
              Post Jobs
            </button>
          </div>
        </div>
      </div>


      {/* Display filtered jobs */}
      <ul>
              {filteredJobs.map(job => (
                <li key={job.id}>{job.title}</li>
              ))}
            </ul>
            <JobPost />
    </>
  );
}

export default JobCard;
