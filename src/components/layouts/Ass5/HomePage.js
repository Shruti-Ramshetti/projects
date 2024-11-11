import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>Welcome to Our E-Commerce App</h1>
        <nav>
          <Link to="/catalog">Product Catalog</Link> | 
          <Link to="/about">About Us</Link> | 
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    );
  }
}

export default HomePage;
