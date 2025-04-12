import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };
  
  // Close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('#sidemenu') && !e.target.closest('.menu-icon')) {
        closeMenu();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  
  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src="/images/logo.png" alt="Logo" className="logo" />
          
          {/* Mobile menu toggle button - only visible when menu is closed */}
          {!menuOpen && (
            <div className="menu-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon="bars" />
            </div>
          )}
          
          {/* Navigation menu */}
          <ul className={menuOpen ? 'active' : ''} id="sidemenu">
            {/* Close button for mobile menu */}
            <div className="mobile-close-btn" onClick={closeMenu}>
              <FontAwesomeIcon icon="xmark" />
            </div>
            
            <li><a href="#header" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            <li><a href="/cv-2.pdf" download onClick={closeMenu}>Resume</a></li>
          </ul>
          
          {/* Mobile menu backdrop */}
          {menuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
        </nav>
        
        <div className="header-text">
          <p>Web Developer</p>
          <h1>
            Hi, I'm <span style={{ color: '#ff004f' }}>Dhruv</span> <br />Gangal
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;