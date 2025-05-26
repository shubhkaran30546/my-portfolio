import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaUniversity } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section anim" id="contact">
      <h2 className="contact-title">Contacts</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-icon">
            <FaPhone />
          </div>
          <div className="contact-info">
            <p className="contact-label">Tel</p>
            <a href="tel:8255223031" className="contact-link">825-522-3031</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-info">
            <p className="contact-label">Email</p>
            <a href="mailto:shubh.karan30@gmail.com" className="contact-link">shubh.karan30@gmail.com</a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FaLinkedin />
          </div>
          <div className="contact-info">
            <p className="contact-label">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/shubhkaran-dhillon-a73651217"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <FaUniversity />
          </div>
          <div className="contact-info">
            <p className="contact-label">Name</p>
            <p className="contact-link">University of Alberta</p>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </section>
  );
}

export default Contact;
