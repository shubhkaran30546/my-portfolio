import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <body>
      <h2 className='aboutheader'>About Me!</h2>
        <p className="summary">I am a 4th year student studying in Computing Science at the University of Alberta. I am passionate about computer networks and security. With a strong focus on these domains, I am dedicated to expanding my knowledge and expertise in this ever-evolving field.
I am currently preparing to take the Cisco Certified Network Associate (CCNA) and cybersecurity exams to earn these valuable certifications. 
These certifications will not only validate my skills but also help me stay updated with the latest technologies and best practices in networking and security.
In addition to my focus on networking and security, I am also gaining knowledge in cloud computing.
I recently earned the AWS Cloud Practitioner certification, which has provided me with a solid foundation in cloud services and solutions. This certification demonstrates my understanding of AWS core services and my ability to implement cloud-based solutions effectively.
With a commitment to continuous learning and professional growth, I am excited about the opportunities in the field of computer networks and security. I look forward to contributing to innovative projects and collaborating with like-minded professionals to create secure and efficient network infrastructures.</p>
      <section className = "about1">
      <h3 className='aboutheader1'>Language & Technologies</h3>
      <p className = "about2">Python Java XML C/C++ HTML CSS  Javascript SQL NoSQL R PHP C#</p>
      <p className = "about2">React.js Django TensorFlow PyTorch Bootstrap Git AndroidSDK Node.js MongoDB Wireshark Cnet </p>
      <p className = "about2">Azure Nmap Snort AWS ASP.NET</p>
      </section>
      <section className = "about1">
      <h3 className='aboutheader1'>Concepts</h3>
      <p className = "about2"><span>Software Engineering</span> <span>Computer Network</span> <span>Cloud Databases</span> <span>Cloud Computing</span> Encryption Decryption API Agile
</p>
      <p className = "about2"> <span>Database Normalization</span> <span>Network Security</span> <span>Cloud Security</span> <span>Vulnerability Assessment</span> <span>Penetration Testing</span></p>
      </section>
      <h3 className='education'>Education</h3>
      <div className='education-section'>
        <div className='school'>
          <FontAwesomeIcon icon={faGraduationCap} className="education-logo" />
        </div>
        <div className='education-details'>
          <h3 className='education-text'>
            Bachelor of Science in Computing Science
          </h3>
          <p>University of Alberta</p>
        </div>
      </div>
      <div className='education-section'>
        <div className='school'>
          <FontAwesomeIcon icon={faGraduationCap} className="education-logo" />
        </div>
        <div className='education-details'>
          <h3 className='education-text'>
            High School Diploma
          </h3>
          <p>Spring Dale Senior School</p>
        </div>
      </div>
      <div className="bottom-line"></div>
      </body>
      
  )
}