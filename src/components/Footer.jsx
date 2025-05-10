import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">Brandon Ladouceur</div>
        <div className="footer-social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your.email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} Brandon Ladouceur. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;