import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
      <section className="footer-content--section" id="hours-section">
          <h3>Hours</h3>
          <div className="footer-order--hours">
            <h6>Monday - Thursday</h6>
            <p className="footer-p">3pm to 12pm</p>
            <h6>Friday - Sunday</h6>
            <p className="footer-p">11am to 3am</p>
          </div>
        </section>
      <section className="footer-content--section" id="order-section">
          <h3>Order</h3>
          <div className="footer-order--order">
            <span><i className="fas fa-phone-alt fa-xs"></i><a href="tel:+1-609-729-3861" className="order-phone">609.729.3861</a></span>
          </div>
        </section>
        <section className="footer-content--section" id="connect-section">
          <h3>Connect</h3>
          <div className="footer-content--connect">
            <a href="#" className="social-link" target="_blank"><i className="fab fa-google"></i></a>
            <a href="https://www.facebook.com/Goodnightirenes" className="social-link" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/goodnightirenes/" className="social-link" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
          </div>
        </section>
        <section className="footer-content--section" id="contact-section">
          <h3>Contact</h3>
          <div className="footer-content--contact">
            <p className="footer-address footer-p">
             2708 Pacific Avenue
            </p>
            <p className="footer-address footer-p">
             Wildwood, NJ 08260
            </p>
          </div>
          <div className="footer-content--contact">
            <h6>cheers@goodnight-irenes.com</h6>
          </div>
        </section>
      </div>
      <div className="footer-credits">
        <p className="footer-credits--designer">Alexa Stef Creative | 2021</p>
      </div>
    </footer>
  )
}

export default Footer;