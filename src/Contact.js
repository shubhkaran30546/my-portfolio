import React from 'react';

import { FaGithub, FaLinkedin, FaGraduationCap } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
  return (
    <>
    <script src="https://kit.fontawesome.com/e25a4b5b67.js" crossorigin="anonymous"></script>
      <body>
        <section id="contact">
          <h2 className='connect'>Lets Connect!</h2>
          <div className = "phone">
          <FontAwesomeIcon icon={faPhone} className="contact-logo" /><span className= "mobile-number">  Mobile Number</span>:    825-522-3031</div>
          <div className = "phone">
          <FontAwesomeIcon icon={faEnvelope} className="contact-logo" /><span className= "mobile-number">  Email</span>:    shubh.karan30@gmail.com</div>
          <div className = "phone">
          <FontAwesomeIcon icon={faGraduationCap} className="contact-logo" /><span className= "mobile-number"> Education:  University of Alberta</span></div>
          <div className = "social">
          <a href="https://github.com/shubhkaran30546" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-logo" /></a></div>
          <div className = "social-link">
          <a href="https://www.linkedin.com/in/shubhkaran-dhillon-a73651217" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-logo" /></a></div>
        </section>
        <div className="bottom-line"></div>
      </body>
      
    </>
  );
}