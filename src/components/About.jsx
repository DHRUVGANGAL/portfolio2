import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  const [activeTab, setActiveTab] = useState('Skills');
  
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="/images/new.png" alt="Profile" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Dhruv Gangal is a dedicated B.Tech student specializing in Computer Science with Data Science at ABES Engineering College. With strong expertise in frontend development and data science, validated through multiple certifications and hands-on projects including an Amazon Clone and Weather Forecasting App, he demonstrates a perfect blend of technical skills and practical implementation.
            </p>
            
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'Skills' ? 'active-links' : ''}`}
                onClick={() => handleTabClick('Skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'Exprience' ? 'active-links' : ''}`}
                onClick={() => handleTabClick('Exprience')}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === 'Education' ? 'active-links' : ''}`}
                onClick={() => handleTabClick('Education')}
              >
                Education
              </p>
            </div>
            
            <div className={`tab-content ${activeTab === 'Skills' ? 'active-tab' : ''}`} id="Skills">
              <ul>
                <li><span>UI/UX</span><br />Designing Web/APP Interfaces</li>
                <li><span>Web Development</span><br />Web Developer</li>
                <li><span>Problem Solving</span><br />Data Structures And Algorithm</li>
              </ul>
            </div>
            
            <div className={`tab-content ${activeTab === 'Exprience' ? 'active-tab' : ''}`} id="Exprience">
              <ul>
                <li><span>Social Media</span><br />Social Media head in <a href="https://mgood.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ababab' }}>Mgood.org</a></li>
                <li><span>Web Development</span><br />Member of developing Team in <a href="https://mgood.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#ababab' }}>Mgood.org</a></li>
              </ul>
            </div>
            
            <div className={`tab-content ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
              <ul>
                <li><span>2020</span><br />10th From Central Board Of Secondary Education</li>
                <li><span>2022</span><br />12th From Central Board Of Secondary Education</li>
                <li><span>2024-2026</span><br />Btech From Abdul Kalam Technical University</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;