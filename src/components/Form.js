import React from 'react'

import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your name</label>
        <input type="text" placeholder="<NAME>"></input>
        <label>Email</label>
        <input type="email" placeholder="<name@gmail.com>"></input>
        <label>Subject</label>
        <input type="text" placeholder="<E-Commerce Website>"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message here" />

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
