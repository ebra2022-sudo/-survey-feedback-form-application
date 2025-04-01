import React, { useState } from 'react';
import './FeedbackForm.css'; 
import { useEffect } from 'react';
export const FeedbackForm = () => {
    const [formdata, setFormData] = useState(
        {
            name: '',
            email: '',
            feedback: '',
            rating: ''
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
              Rating: ${formdata.rating}
            `;
            const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
            if (isConfirmed) {
              console.log('Submitting feedback:', formdata);
              setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
              });
              alert('Thank you for your valuable feedback!');
            }
          };    


    const handleChange = (rate) =>{
        setFormData(
            {
             ...formdata,
            rating: rate
            }
        );
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
         <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                    <span>Rate Us:</span>
                    <p><input
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={e => handleChange(e.target.value)}
                    /> 1</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={e => handleChange(e.target.value)}
                    /> 2</p>
                  <p>  <input
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={e => handleChange(e.target.value)}
                    /> 3</p>
                   <p> <input
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={e => handleChange(e.target.value)}
                    /> 4</p>
                    <p><input
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={e => handleChange(e.target.value)}
                    /> 5</p>
                </div>
        <button onClick={(event) => {handleSubmit(event)}} type="submit">Submit Feedback</button>
        </form>
      </>
    );
  };
  
