import { useState } from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:organobiotas@gmail.com">organobiotas@gmail.com</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href="tel:+918007775341">+91 800 777 5341</a>
              <a href="tel:+918149726097">+91 814 972 6097</a>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <p>Visakhapatnam, Andhra Pradesh, India</p>
              <a href="https://maps.app.goo.gl/BPqxSMoNSsUWVW2D6?g_st=ipc" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

