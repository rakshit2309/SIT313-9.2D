import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    
    <div className="footer">
      <div className="footer-item explore">
        EXPLORE
        <ul className="footer-options">
          <li>Home</li>
          <li>Question</li>
          <li>Article</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-item center">
        SUPPORT
        <ul className="footer-options">
          <li>FAQ's</li>
          <li>Help</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-item right">
        STAY CONNECTED
        <div className="social-icons">
          <a href="https://www.instagram.com"><img src="/insta.jpeg" alt="Instagram" /></a>
          <a href="https://www.facebook.com"><img src="/facebook.jpeg" alt="Facebook" /></a>
          <a href="https://www.twitter.com"><img src="/twitter.png" alt="Twitter" /></a>
        </div>
      </div>
      
    </div>



    
  );
};

export default Footer;
