import React from 'react'

import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form action="https://formspree.io/f/mjvqpwro" method="post">
        <label>Your name</label>
        <input type="text" name ="username" placeholder="<NAME>"></input>
        <label>Email</label>
        <input type="email" name ="email" placeholder="<name@gmail.com>"></input>
        <label>Subject</label>
        <input type="text" name ="subject" placeholder="<E-Commerce Website>"></input>
        <label>Message</label>
        <textarea rows="6" name ="Message" placeholder="Type Your Message here" />

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
