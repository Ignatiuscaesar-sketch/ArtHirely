import React from 'react'
import "./index.css";

function Server() {

function handleSubmit(e){
  e.preventDefault()

  const jobObject ={
    // id: e.target.id.value,
    time: e.target.time.value,
    description: e.target.description.value,
    cost: e.target.cost.value,
    due_date: e.target.dueDate.value,
    stack: e.target.requiredStack.value,
    company: e.target.companyName.value,
    location: e.target.location.value,
  }

  // console.log(jobObject)

  fetch("http://localhost:3000/jobs", {
    method: "POST",
    header: {
      "content-type": "application/json"
    },
    body: JSON.stringify(jobObject)
  })
  .then(res => res.json())
  .then(jobs => console.log(jobs))

  e.target.reset()
}

// function filteredJobs(){
//     Freelance
//     Full-Time
// }

  
  return (
    <div>
        <form className = "formContainer" onSubmit = {handleSubmit}>
            {/* <label for="id">ID</label><br/>
            <input type="text" id="id" name="id"></input><br/> */}
            <label htmlFor="time">Time</label><br/>
            <input type="text" id="time" name="time"></input><br/>
            <label htmlFor="description">Description</label><br/>
            <input type="text" id="description" name="description"></input><br/>
            <label htmlFor="cost">Cost</label><br/>
            <input type="text" id="cost" name="cost"></input><br/>
            <label htmlFor="due date">Due Date</label><br/>
            <input type="text" id="dueDate" name="dueDate"></input><br/>
            <label htmlFor="required stack">Required Stack</label><br/>
            <input type="text" id="requiredStack" name="requredStack"></input><br/>
            <label htmlFor="companyName">Company Name</label><br/>
            <input type="text" id="companyName" name="companyName"></input><br/>
            <label htmlFor="location">Location</label><br/>
            <input type="text" id="location" name="location"></input><br/>
            <button id= "text" type="submit">submit</button><br/>
        </form>
    </div>
  )
}
export default Server;