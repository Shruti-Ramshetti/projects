import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
     <footer className="footer">
      <div className="footer-subscribe">
        <h2>Tech-Shop</h2>
        <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Email Address*" style={{backgroundColor:"black",border:"1px solid white",color:"white"}} required /><br/>
          <button type="submit">Subscribe</button><br/>
        </form>
      </div>
      
      <div className="footer-links" >
        <div className="footer-column" style={{marginRight:"250px"}}>
          <h4>Help</h4>
          <a href="/faqs">FAQs</a>
          <a href="/track-order">Track Order</a>
          <a href="/cancel-order">Cancel Order</a>
          <a href="/return-order">Return Order</a>
          <a href="/warranty-info">Warranty Info</a>
        </div>
        
        <div className="footer-column" style={{marginRight:"250px"}}>
          <h4>Policies</h4>
          <a href="/return-policy">Return Policy</a>
          <a href="/security">Security</a>
          <a href="/sitemap">Sitemap</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-conditions">Terms & Conditions</a>
        </div>

        <div className="footer-column" style={{marginRight:"250px"}}>
          <h4>Company</h4>
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/service-centres">Service Centres</a>
          <a href="/careers">Careers</a>
          <a href="/affiliates">Affiliates</a>
        </div>
      </div>
      <div className="footerContainerBottom">
        <p>2024 | All Rights Reserved. Built by | SHRUTI RAMSHETTI</p>
        <div className="socialIcons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        </div>
    </footer>
       </>
   
  );
};

export default Footer;
