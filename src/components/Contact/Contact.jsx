import React from "react";
import "./_Contact.scss";

import bell from "./img/bell-white.png";

function Contact() {
  return (
    <div className="contact-container">
      <div className="content-container">
        <div className="contact-heading">
          <img src={bell} alt="bell icon" />
          <h2>Contact</h2>
        </div>
        <form action="">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-group">
            <label htmlFor="topic">Topic:</label>
            <input type="text" id="topic" name="topic" />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write me a message :)"
            />
          </div>
        </form>
        <button className="btn btn-contact" type="submit">
            Contact Me
          </button>
      </div>
    </div>
  );
}

export default Contact;
