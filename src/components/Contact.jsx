import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // For demo purposes, just show a success message
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset submission status after a delay
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">
              Contact Me
            </h1>
            <p>
              <FontAwesomeIcon icon="paper-plane" /> dhruvgangal123@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon="phone" /> 7017998087
            </p>
            
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dhruv-gangal-4084a3257/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
              <a href="https://www.instagram.com/dhruv_gangal_/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="https://github.com/DHRUVGANGAL" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
              <a href="https://x.com/DGangal5559" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </div>
            
            <a href="/cv-2.pdf" download className="btn btn2">Download CV</a>
          </div>
          
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn btn2">Submit</button>
              {formSubmitted && <p className="form-success">Thank you! Your message has been sent.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;