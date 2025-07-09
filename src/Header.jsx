import React from 'react';
import { Link } from 'react-router-dom';
import './Header.module.css'; // Assuming CSS Modules
import ClockWidget from './ClockWidget';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="app-name">WeatherNow</h1>
        <ClockWidget />
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
