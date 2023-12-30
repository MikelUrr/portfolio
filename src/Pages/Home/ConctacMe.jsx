import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({});
  const [submitMessage, setSubmitMessage] = useState(null);


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
      const response = await fetch(`${VITE_BACKEND_HOST}/contactme`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

     
      if (response.ok) {
       
        setFormData({});
      
        setSubmitMessage('Request sent. Thank you for contacting me!');
      } else {
        console.error('Error al enviar el formulario');
        setSubmitMessage('Error sending request. Please try again.');
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      setSubmitMessage('Unexpected error. Please try again later.');
    }
  };
  const handleTextareaChange = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me </h2>
        <p className="text-lg">
          Whether you have a project in mind or just want to say hello, <br />
          feel free to drop me a message below. I look forward to hearing from you! 
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
       
        {submitMessage && <p className={submitMessage==='Request sent. Thank you for contacting me!' ? 'success-message' : 'error-message'}>{submitMessage}</p>}
        <div className="container">
         
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="firstname"
              required
              value={formData.firstName || ''}
              onChange={handleInputChange}
            />
          </label>

         
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="lastname"
              required
              value={formData.lastName || ''}
              onChange={handleInputChange}
            />
          </label>

          
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email || ''}
              onChange={handleInputChange}
            />
          </label>

          
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber || ''}
              onChange={handleInputChange}
            />
            
          </label>
        </div>

      
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            name="topic"
            className="contact--input text-md"
            value={formData.topic || ''}
            onChange={handleInputChange}
          >
            <option>Select One...</option>
            <option>Web Development Projects</option>
            <option>Software Engineering Opportunities</option>
            <option>Mobile App Development Projects</option>
            <option>GitHub Repository Inquiry</option>
            <option>Job Application</option>
            <option>Freelance Web Development</option>
            <option>Networking Opportunity</option>
            <option>General Inquiry</option>
            <option>Other</option>
          </select>
        </label>

       
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            value={formData.message || ''}
            onChange={handleTextareaChange}
          />
        </label>

        
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>

     
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
