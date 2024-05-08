import React from 'react'

const JobPost = () => {


function handleFormSubmission(e){
    e.preventDefault()
    const formObj= {
        Name: e.target.name.value,
        AcademicQualification: e.target.qualitifaction.value,
        experience: e.target.work_experience.value,
        location: e.target.location.value,
        certification: e.target.certifications.value,
        description: e.target.short_description.value
    }

    console.log(e.target.name.value)

    fetch("url", {
        "method": "POST",
        "body": JSON.stringify(formObj)
    })
    .then(res => res.json())
    .then(data=>console.log(data))



    e.target.reset()
}


  return (
    <>
      <div>JobPost</div>

    <form className = "form-container" onSubmit={handleFormSubmission}>
        <label for = "name">Name</label><br/>
        <input id ="name"></input> <br/>
        <label for = "qualitifaction"> Academic Qualification</label><br/>
        <input id ="qualification"></input> <br/>
        <label for = "work_experience">Work Experience</label><br/>
        <input id ="work_experience"></input> <br/>
        <label for = "location">Location</label><br/>
        <input id ="location"></input> <br/>
        <label for = "certifications">Certification</label><br/>
        <input id ="certifications"></input> <br/>
        <label for = "short_description">Short Description</label><br/>
        <textarea id ="short_description"></textarea> <br/>

        <button>Post a job</button>
    </form>


    <div id = "card-container">
 
 
    </div>
    
    </>
  






  )
}

export default JobPost