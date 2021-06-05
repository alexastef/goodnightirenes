import React from 'react';
import './style.css';

const Footer2 = () => {
  return (
    <footer>
      <div className="footer-content">
        <span className="footer-content--column" id="footer-content--phone">
          <a href="tel:+1-609-729-3861" className="order-phone"><h4 className="footer-content--text"><i class="fas fa-phone-alt fa-sm"></i>609.729.3861</h4></a>
        </span>
        <span className="footer-content--column" id="footer-content--email">
          <h4 className="footer-content--text"><i class="fas fa-envelope fa-sm"></i>cheers@goodnight-irenes.com</h4>
        </span>
        <span className="footer-content--column" id="footer-content--address">
          <h4 className="footer-content--text"><i class="fas fa-map-marker-alt fa-sm"></i>2708 Pacific Avenue, Wildwood, NJ 08260</h4>
        </span>
        <span className="footer-content--column" id="footer-content--social">
          <a href="https://www.facebook.com/Goodnightirenes" className="social-link" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square fa-2x"></i></a>
          <a href="https://www.instagram.com/goodnightirenes/" className="social-link" target="_blank" rel="noreferrer"><i class="fab fa-instagram fa-2x"></i></a>
        </span>
      </div>
      <div className="footer-credits">
        <p className="footer-credits--text">Alexa Stef Creative | 2021</p>
      </div>
    </footer>
  )
}

export default Footer2;