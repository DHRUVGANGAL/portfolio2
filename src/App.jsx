import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCrop, faPaperPlane, faPhone, faBars, faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub, faTwitter, faAppStore } from '@fortawesome/free-brands-svg-icons';

// Add all icons to the library
library.add(
  faCode,
  faCrop,
  faPaperPlane,
  faPhone,
  faBars,
  faXmark,
  faArrowUpRightFromSquare,
  faLinkedin,
  faInstagram,
  faGithub,
  faTwitter,
  faAppStore
);

function App() {
  const [error, setError] = useState(null);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === 'a' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href');
        const element = document.querySelector(id);
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.body.addEventListener('click', handleAnchorClick);
    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Error boundary approach for component rendering
  const renderComponent = (Component, name) => {
    try {
      return <Component />;
    } catch (err) {
      console.error(`Error rendering ${name} component:`, err);
      setError(`Failed to load ${name} component. Check console for details.`);
      return null;
    }
  };

  if (error) {
    return <div style={{padding: '20px', color: 'white'}}>{error}</div>;
  }

  return (
    <>
      {renderComponent(Header, 'Header')}
      {renderComponent(About, 'About')}
      {renderComponent(Services, 'Services')}
      {renderComponent(Portfolio, 'Portfolio')}
      {renderComponent(Contact, 'Contact')}
    </>
  );
}

export default App;