import React from "react";
import "./index.css";

function JobCard() {
  



  
  return (
    <>
      <div className="main-button-container">
        {/* top buttons start here */}
        <div class="button-designs first-section">
          <div>
            <button class="button-designs third-button" id="freelance">
              Freelance {totalFreelanceJobs}
            </button>
          </div>
          <div>
            <button class="button-designs second-button" id="Full-Time">
              Full-Time
            </button>
          </div>
          <div>
            <button class="button-designs third-button" id="creatives-for-hire">
              Creatives for hire
            </button>
          </div>
        </div>
        {/* lower buttons start here */}

        <div className="button-designs lower-section">
          <div>
            <h6 className="button-designs" id="freelance-jobs">
              <span>{totalFreelanceJobs} Freelance Jobs </span>
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
  )
}

export default JobCard;
