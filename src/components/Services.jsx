import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        
        <div className="services-list">
          <div className="service-item">
            <FontAwesomeIcon icon="code" className="service-icon" />
            <h2>Web Developer</h2>
            <p>
              As a web developer, I specialize in creating responsive and dynamic websites using HTML and CSS. My portfolio includes practical projects like an Amazon Clone, E-commerce platform, and Weather Forecasting App. Backed by frontend development certifications and active participation in Scholar Hat workshops, I consistently deliver user-friendly web solutions.
            </p>
            <a href="https://github.com/DHRUVGANGAL" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
          
          <div className="service-item">
            <FontAwesomeIcon icon={['fab', 'app-store']} className="service-icon" />
            <h2>App Developer</h2>
            <p>
              As a dedicated app developer, I focus on creating intuitive and functional mobile applications that solve real-world problems. With experience in building weather forecasting and e-commerce applications, I combine technical expertise with user-centric design principles. My commitment to clean code and continuous learning ensures delivery of high-performance, user-friendly mobile solutions.
            </p>
            <a href="https://github.com/DHRUVGANGAL" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
          
          <div className="service-item">
            <FontAwesomeIcon icon="crop" className="service-icon" />
            <h2>UI/UX Designing</h2>
            <p>
              As a UI/UX enthusiast, I specialize in creating intuitive and engaging digital experiences. My expertise includes crafting user-centered interfaces, wireframing, and prototyping with a focus on seamless navigation and visual aesthetics. Through projects like e-commerce websites and web applications, I've demonstrated my ability to blend modern design principles with robust functionality to deliver compelling user experiences.
            </p>
            <a href="https://github.com/DHRUVGANGAL" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;