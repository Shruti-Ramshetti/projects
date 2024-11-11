import React, { Component } from 'react';
import '../Assignment/FooterComp.css';

class FooterComp extends Component {
  render() {
    return (
        
      <footer className="footer">
       <button className="get-started" style={{marginLeft:"1400px",marginBottom:"10px",marginTop:"10px"}}>Send Message</button>
        <div className="container">
          <div className="footer-left">
            <h2>OnePage</h2>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget 
              nada terra videa magna derita valies darta donna mare fermentum 
              iaculis eu non diam phasellus.
            </p>
            <div className="social-icons">
              <a href="#facebook"><i className="fa fa-facebook"></i></a>
              <a href="#twitter"><i className="fa fa-twitter"></i></a>
              <a href="#instagram"><i className="fa fa-instagram"></i></a>
              <a href="#linkedin"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-section useful-links">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="footer-section services">
              <h3>Our Services</h3>
              <ul>
                <li><a href="#webdesign">Web Design</a></li>
                <li><a href="#webdev">Web Development</a></li>
                <li><a href="#product">Product Management</a></li>
                <li><a href="#marketing">Marketing</a></li>
                <li><a href="#graphic">Graphic Design</a></li>
              </ul>
            </div>

            <div className="footer-section contact">
              <h3>Contact Us</h3>
              <p>A108 Adam Street, New York, NY 535022, United States</p>
              <p><strong>Phone:</strong> +1 5589 55488 55</p>
              <p><strong>Email:</strong> info@example.com</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComp;
