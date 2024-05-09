import React from 'react'
import "./index.css";

function Server() {
  return (
    <div>
        <form class = "formContainer">
            <label for="id">ID</label><br/>
            <input type="text" id="id" name="id"></input><br/>
            <label for="time">Time</label><br/>
            <input type="text" id="time" name="time"></input><br/>
            <label for="description">Description</label><br/>
            <input type="text" id="description" name="description"></input><br/>
            <label for="cost">Cost</label><br/>
            <input type="text" id="cost" name="cost"></input><br/>
            <label for="due date">Due Date</label><br/>
            <input type="text" id="dueDate" name="dueDate"></input><br/>
            <label for="required stack">Required Stack</label><br/>
            <input type="text" id="requiredStack" name="requredStack"></input><br/>
            <label for="companyName">Company Name</label><br/>
            <input type="text" id="companyName" name="companyName"></input><br/>
            <label for="location">Location</label><br/>
            <input type="text" id="location" name="location"></input><br/>
            <button id= "text" type="submit">submit</button><br/>
        </form>
    </div>
  )
}
export default Server