'use client';

import React, { useContext, useState, useReducer, ChangeEvent, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './_Contact.scss';
import { MainContext } from '@/app/context/Context';

import bell from './img/bell-white.png';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

// Encode data for form submission
const encode = (data: FormValues): string => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key as keyof FormValues]))
    .join('&');
};

export default function Contact() {
  const context = useContext(MainContext);

  const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  const [formValues, setFormValues] = useReducer(
    (prevs: FormValues, values: Partial<FormValues>) => ({ ...prevs, ...values }),
    initialValues,
  );

  const { name, email, message } = formValues;
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!context) {
    return null;
  }

  const { contactRef } = context;

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ ...formValues }),
      });
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }
      toast.success('Thanks for your submit');
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 2000);
    } catch (error) {
      toast.error('Sorry, something went wrong');
      console.error(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div ref={contactRef} className="contact-container">
        <div className="content-container">
          <div className="contact-heading">
            <img
              src={bell.src}
              alt="bell icon"
              style={{ animationName: submitSuccess ? 'bellRinging' : undefined }}
            />
            <h2>Contact</h2>
          </div>
          <form onSubmit={handleSubmit} name="contact" method="POST">
            <input type="hidden" name="form-name" value="Contact request from Portfolio" />
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
