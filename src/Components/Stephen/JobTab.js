import React from "react";

function JobTab() {
  return (
    <>
      <div className="main-button-container">
        {/* top buttons start here */}
        <div class="button-designs first-section">
          <div>
            <button class="button-designs third-button" id="freelance">
              Freelance
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
              <span>300</span> Freelance Jobs
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
