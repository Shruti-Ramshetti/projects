import React, { Component } from 'react';
import '../Assignment/HeaderComp.css';
import { Link } from 'react-router-dom';

class HeaderComp extends Component {
  render() {
    return (
        <header>
        <nav className="navbar">
          <div className="logo">
            <h1>OnePage</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li className="dropdown">
            <li><Link to="/dropdown">Dropdown</Link></li>
              <ul className="dropdown-menu">
                <li><a href="#option1">Option 1</a></li>
                <li><a href="#option2">Option 2</a></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
          <button className="get-started">Get Started</button>
        </nav>
      </header>
    );
  }
}

export default HeaderComp;