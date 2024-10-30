import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <body>
      <h2 className='aboutheader'>About Me!</h2>
        <p className="summary">I am a 4th-year Computing Science student at the University of Alberta with a keen interest in software development and a passion for building scalable, efficient, and user-centered applications. My academic journey has provided me with a solid foundation in programming, system design, and cloud computing, with recent hands-on experience in cloud services through the AWS Cloud Practitioner certification. This certification has equipped me with the skills to design and implement cloud-based solutions effectively, enhancing my software development abilities.

While software development is my primary focus, I am also dedicated to expanding my understanding of computer networks and security. Currently, I am preparing for the Cisco Certified Network Associate (CCNA) and cybersecurity exams to strengthen my grasp on secure network infrastructures. With a commitment to continuous learning, I look forward to contributing to innovative projects, leveraging both my software development skills and knowledge in security best practices to create reliable and secure applications that drive impactful results.</p>
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