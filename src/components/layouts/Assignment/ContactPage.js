import React, { Component } from 'react';
import '../Assignment/ContactPage.css';

class ContactPage extends Component {

        render() {
          return (
            <div className="contact-container">
              <h1 className="contact-title">CONTACT</h1>
              <p className="contact-subtitle">
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
              </p>
              <div className="map-container" style={{marginBottom:"40px"}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9797868698687!2d-74.00465348459386!3d40.70601397933142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a198b173ded%3A0x4e63b16b5d1d94b9!2sA108%20Adam%20St%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1601433306060!5m2!1sen!2sin"
                  width="100%" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"
                ></iframe>
              </div>
              <div className="contact-content" style={{marginRight:"20px"}}>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Address</p>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <p>Call Us</p>
                    <p>+1 5589 55488 55</p>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p>Email Us</p>
                    <p>info@example.com</p>
                  </div>
                </div>
                <div className="contact-form">
                  <form>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea name="message" rows="5" placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
             
            </div>
          );
        }
      }
      


export default ContactPage;
