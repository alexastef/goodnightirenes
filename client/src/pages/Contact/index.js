import React from 'react';
import './style.css';
import Favicon from '../../images/GNI_favicon2.png';
import Fade from 'react-reveal';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact--info">
        <section className="contact--info-hours">
          <h2 className="contact--info-heading">Hours</h2>
          <Fade right cascade>
            <h4 className="contact--info-subheading">Monday - Thursday: 1pm - 3am</h4>
            <h4 className="contact--info-subheading">Friday - Sunday: 11am - 3am</h4>
          </Fade>
        </section>
        <hr />
        <section className="contact--info-inquiries">
          <h2 className="contact--info-heading">Take out, reservations, questions, or feedback? We'd love to hear from you!</h2>
            <div className="contact--info-group">
              <Fade right cascade>
                <img src={Favicon} alt="hops-favicon" className="contact--info-image"/>
                <h4 className="contact--info-subheading">cheers@goodnight-irenes.com</h4>
              </Fade>
            </div>
            <div className="contact--info-group">
              <Fade right cascade>
                <img src={Favicon} alt="hops-favicon" className="contact--info-image"/>
                <h4 className="contact--info-subheading"><a href="tel:+1-609-729-3861" className="contact--info-phone">609.729.3861</a></h4>
              </Fade>
            </div>
        </section>
      </div>
      <div className="contact--map">
      <iframe title="gni-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.980645726146!2d-74.81210274886242!3d38.99293807945567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0a83c9e3ab831%3A0xa1a205900a8edc65!2sGoodnight%20Irene&#39;s%20Brew%20Pub!5e0!3m2!1sen!2sus!4v1622767411405!5m2!1sen!2sus" allowfullscreen="" loading="lazy" zoom="3"></iframe>
      </div>
    </div>
  )
}

export default Contact;