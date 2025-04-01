import React, { useState } from 'react';
import './FeedbackForm.css'; 
import { useEffect } from 'react';
export const FeedbackForm = () => {
    const [formdata, setFormData] = useState(
        {
            name: '',
            email: '',
            feedback: ''
        }
    );

    const [togle, settogle] = useState(false);

    useEffect(
        () => {
            console.log(formdata.email);
        },
        [togle]
        );


        const handleSubmit = (event) => {
            event.preventDefault();
            const confirmationMessage = `
              Name: ${formdata.name}
              Email: ${formdata.email}
              Feedback: ${formdata.feedback}
            `;
            const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
            if (isConfirmed) {
              console.log('Submitting feedback:', formdata);
              setFormData({
                name: '',
                email: '',
                feedback: ''
              });
              alert('Thank you for your valuable feedback!');
            }
          };
       



    return (
      <>
      <nav>
      Tell Us What You Think
      </nav>
        <form className="feedback-form">
          <h2>We'd Love to Hear From You!</h2>
          <p>Please share your feedback with us.</p>
          <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={input => setFormData({
            ...formdata,
            name: input.target.value
          })}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={input => setFormData({
            ...formdata,
            email: input.target.value
          })}
          placeholder="Your Email"
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formdata.feedback}
          onChange={input => 
            setFormData({
                ...formdata,
                feedback: input.target.value
              })
          }
        ></textarea>
        <button onClick={(event) => {handleSubmit(event)}} type="submit">Submit Feedback</button>
        </form>
      </>
    );
  };
  
