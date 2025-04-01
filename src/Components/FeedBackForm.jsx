import React, { useState } from 'react';
import './FeedbackForm.css'; 
export const FeedbackForm = () => {



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
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
        ></textarea>
        <button type="submit">Submit Feedback</button>
        </form>
      </>
    );
  };
  
