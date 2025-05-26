import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".anim");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    elements.forEach((el) => observer.observe(el));

    return () => {
        elements.forEach((el) => observer.unobserve(el));
    };
}, []);
  return (
    <div id="about">
      <h2 className='aboutheader anim'>About Me!</h2>
        <p className="summary anim">I am a recent Computing Science graduate from the University of Alberta with a keen interest in software development, networks, and security. My academic journey has provided me with a solid foundation in programming, system design, and cloud computing. I am an AWS Certified Cloud Practitioner, which has equipped me with the skills to design and implement cloud-based solutions effectively, enhancing my software development abilities.

While software development remains my primary focus, I am also dedicated to expanding my expertise in computer networks and security. Currently, I am preparing for advanced certifications, including the Cisco Certified Network Associate (CCNA) and a security certification, to strengthen my understanding of secure network infrastructures. With a commitment to continuous learning, I look forward to contributing to innovative projects, leveraging my skills in software development, networking, and security to build reliable and secure applications that drive impactful results.</p>     
<section className="tech-tools-section anim">
  <div class="image-container">
    <img className="image-container1" src={process.env.PUBLIC_URL + '/IMG_4993.HEIC'} alt="Laptop with pears" />
  </div>

  <div className="tech-details anim">
    <h2 class="tech-title">Technologies & Tools</h2>

    <div className="tech-category anim">
      <h3>Languages</h3>
      <p>Python, Java, C/C++, HTML, CSS, JavaScript, SQL, NoSQL, R, PHP, C#</p>
    </div>

    <div className="tech-category anim">
      <h3>Frameworks & Tools</h3>
      <p>React.js, SpringBoot, Django, ASP.NET, TensorFlow, PyTorch, Bootstrap, Git, Node.js, MongoDB</p>
    </div>

    <div className="tech-category anim">
      <h3>Cloud & Security</h3>
      <p>AWS, Azure, Wireshark, Nmap, Snort</p>
    </div>
  </div>
</section>

<section className="education-certifications anim">
  <h2 class="section-title">Education & Certifications</h2>
  <div class="edu-cert-grid anim">
    <div class="edu-cert-item">
      <h3>Bachelor of Science in Computing Science</h3>
      <p>Graduated from University of Alberta with focus on software development, networking, and cloud computing.</p>
    </div>
    <div class="edu-cert-item">
      <h3>AWS Certified Cloud Practitioner</h3>
      <p>Certified in designing and implementing cloud-based solutions using AWS.</p>
    </div>
    <div class="edu-cert-item">
      <h3>Pursuing CCNA & Security Certifications</h3>
      <p>Preparing for Cisco Certified Network Associate and security credentials to enhance secure systems knowledge.</p>
    </div>
  </div>
</section>

      </div>
      
  )
}