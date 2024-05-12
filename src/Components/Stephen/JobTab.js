import React, { useState, useEffect } from "react";
import "./index.css";
import JobList from "../Ignatius-Caesar/JobList";
// import Server from "./Server"

function JobTab({jobs}) {
  // Dummy data as I wait for public API to be fetched

  const [filteredJobs, setFilteredJobs] = useState([]);
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
function handleFilter(e){
  const jobType = e.target.id;
  setFilteredJobs(jobs.filter(job => job.time === jobType));
  e.target.style.fontWeight = "bold"
  // e.target.parentNode.style.transition = "width 0.4s ease, left 0.4s ease"
} 
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


    </>
  );
}

export default JobTab;