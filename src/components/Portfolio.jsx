import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  
  const initialWorks = [
    {
      id: 1,
      imgSrc: "/images/mgood.png",
      title: "Mgood.org",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
      link: "https://mgood.org"
    },
    {
      id: 2,
      imgSrc: "/images/todolist.png",
      title: "Todo-List",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
      link: "https://github.com/DHRUVGANGAL/Todo-List"
    },
    {
      id: 3,
      imgSrc: "/images/life.png",
      title: "Life Timmer",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
      link: "https://life-timer-blue.vercel.app/"
    }
  ];
  
  const additionalWorks = [
    {
      id: 4,
      imgSrc: "/images/quiz.png",
      title: "Maths Quiz Application",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
      link: "https://maths-quiz2.vercel.app/"
    },
    {
      id: 5,
      imgSrc: "/images/github.png",
      title: "GITHUB Profile Founder",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
      link: "https://git-profile-fetching.vercel.app"
    },
    {
      id: 6,
      imgSrc: "/images/math.png",
      title: "Mark Calculator",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
      link: "https://marks-cal.vercel.app/"
    }
  ];
  
  const handleSeeMore = (e) => {
    e.preventDefault();
    setShowMore(true);
  };
  
  // Combine the initial works with additional works if showMore is true
  const displayedWorks = showMore
    ? [...initialWorks, ...additionalWorks]
    : initialWorks;
  
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        
        <div className="work-list">
          {displayedWorks.map((work) => (
            <div className="work" key={work.id}>
              <img src={work.imgSrc} alt={work.title} />
              <div className="layer">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {!showMore && (
          <div className="btn-container">
            <a href="#" className="btn" onClick={handleSeeMore}>
              See More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;