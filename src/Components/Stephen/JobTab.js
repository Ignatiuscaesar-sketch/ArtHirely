import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from 'react-router-dom';

//import JobPosts from "./JobPosts"

function JobTab({jobs, handleFilter, filteredJobs}) {
  // Dummy data as I wait for public API to be fetched
  const [fullTimeCount, setFullTimeCount] = useState(0);
  const [partTimeCount, setPartTimeCount] = useState(0);
  const [intershipCount, setInternshipCount] = useState(0);
  

useEffect(() => {
  // Calculation of the total jobs in each category
  setFullTimeCount(jobs.filter(job => job.time === 'Full-time').length);
  setPartTimeCount(jobs.filter(job => job.time === 'Part-time').length);
  setInternshipCount(jobs.filter(job => job.time === 'Internship').length);
}, [jobs]);

//A callback function that triggers the filters here


  return (
    <>
      <div className="main-button-container">
        <div className="button-designs first-section">
          <div>
            <button className="button-designs third-button" id="Full-time" onClick={handleFilter}>
              Full-Time ({fullTimeCount})
            </button>
          </div>
          <div>
            <button className="button-designs second-button" id="Part-time" onClick={handleFilter}>
              Part-Time ({partTimeCount})
            </button>
          </div>
          <div>
            <button className="button-designs third-button" id="Internship" onClick={handleFilter}>
              Internship ({intershipCount})
            </button>
          </div>
          
          <div>
            <button className="button-designs" id="blue-button">
              <Link to = '/jobposts'>Post Jobs</Link>
            </button>
          </div>
        </div>

        <div className="button-designs lower-section">
          <div>
            <h6 className="button-designs" id="filtered-jobs">
              <span>{filteredJobs.length}</span> Jobs
            </h6>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default JobTab;