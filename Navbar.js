import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PremiumPlans from './PremiumPlans';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-items">
        <span className="username">DEV@Deakin</span>
      </div>
      <div className="center-items">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="right-items">
        <span className="nav-item">Post</span>
        <span className="nav-item">Login</span>
        <Link to="/premium-plans" className="nav-item">Premium</Link> {/* Use Link for navigation */}
      </div>
    </div>
  );
};

export default Navbar;
