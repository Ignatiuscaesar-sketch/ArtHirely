import React from 'react'

export default function server() {
  return (
    <div>
        <form>
            <label for="id">ID</label>
            <input type="text" id="id" name="id"></input>
            <label for="time">Time</label>
            <input type="text" id="time" name="time"></input>
            <label for="description">Description</label>
            <label for="cost">Cost</label>
            <input type="text" id="cost" name="cost"></input>
            <input type="text" id="discription" name="discription"></input>
            <label for="due date"></label>
            <input type="text" id="dueDate" name="dueDate"></input>
            <label for="required stack">Required Stack</label>
            <input type="text" id="requiredStack" name="requredStack"></input>
            <label for="companyName"></label>
            <input type="text" id="companyName" name="companyName"></input>
            <label for="location">Location</label>
            <input type="text" id="location" name="location"></input>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}
