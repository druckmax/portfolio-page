import React from "react";
import toast, { Toaster } from "react-hot-toast";
import "./_Contact.scss";
import { MainContext } from "../../Context";
import { useReducer, useState, useContext } from "react";

import bell from "./img/bell-white.png";

// Encode data for form submission
const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const { contactRef } = useContext(MainContext);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useReducer(
    (prevs, values) => ({ ...prevs, ...values }),
    initialValues
  );
  const { name, email, message } = formValues;

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formValues }),
      });
      if(!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message)
      }
      toast.success("Thanks for your submit");
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 2000);
    } catch (error) {
      toast.error("Sorry, something went wrong");
      console.error(error.message);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div ref={contactRef} className="contact-container">
        <div className="content-container">
          <div className="contact-heading">
            <img
              src={bell}
              alt="bell icon"
              style={{ animationName: submitSuccess && "bellRinging" }}
            />
            <h2>Contact</h2>
          </div>
          <form onSubmit={handleSubmit} name="contact" method="">
            <input
              type="hidden"
              name="subject"
              value="Contact request from Portfolio"
            />
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                minLength={2}
                maxLength={50}
                required
                value={name}
                onChange={handleFormChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                maxLength={50}
                required
                value={email}
                onChange={handleFormChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write me a message :)"
                minLength={20}
                maxLength={1000}
                value={message}
                required
                onChange={handleFormChange}
              />
            </div>
            <button className="btn btn-contact" type="submit">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
