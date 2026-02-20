import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import { GitHubCalendar } from "react-github-calendar";

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
        <p className="summary anim">
I am a Computing Science graduate from the University of Alberta with strong experience in software development, system design, and building full-stack applications. Through academic projects and hands-on development, I have worked with modern technologies to design scalable and efficient solutions.

Over time, I have expanded my knowledge into cloud computing, networking, and security, strengthening my understanding of how reliable systems are built and maintained. As an AWS Certified professional, I have gained practical exposure to cloud-based architectures and deployment practices.

I am passionate about solving real-world problems through clean, maintainable code and continuously improving my technical skills. I enjoy learning new technologies and contributing to projects that require both strong engineering fundamentals and innovative thinking.
</p>
     
<section className="tech-tools-section anim">
  <div className="image-container">
    <img
      className="image-container1"
      src={process.env.PUBLIC_URL + "/IMG_4993.JPG"}
      alt="Workspace"
    />
  </div>

  <div className="tech-details anim">
    <h2 className="tech-title">Technologies & Tools</h2>

    <div className="tech-category">
      <h3>Languages</h3>
      <p>Java, Python, JavaScript/TypeScript, SQL</p>
    </div>

    <div className="tech-category">
      <h3>Backend & APIs</h3>
      <p>Spring Boot, Django, Node.js, REST APIs, Microservices</p>
    </div>

    <div className="tech-category">
      <h3>Frontend</h3>
      <p>React.js, HTML, CSS</p>
    </div>

    <div className="tech-category">
      <h3>Cloud & DevOps</h3>
      <p>AWS (EC2, S3, Lambda, RDS, SQS), Docker, Kubernetes, Terraform, CI/CD</p>
    </div>

    <div className="tech-category">
      <h3>Databases</h3>
      <p>PostgreSQL, MySQL, MongoDB, Firebase, DynamoDB</p>
    </div>

    <div className="tech-category">
      <h3>Systems & Infrastructure</h3>
      <p>Redis, Kafka, Load Balancing, Horizontal Scaling, Networking</p>
    </div>
  </div>
</section>


<section className="education-certifications anim">
  <h2 className="section-title">Certifications</h2>

  <div className="cert-grid">
    <div className="cert-item">
      <a
        href="https://www.credly.com/badges/12005245-6f29-4683-a591-448b6aec29e1/public_url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/aws-certified-cloud-practitioner.png"}
          alt="AWS Certified Cloud Practitioner"
          className="cert-badge"
        />
      </a>
    </div>

    <div className="cert-item">
      <a
        href="https://www.credly.com/badges/11e69393-55d1-4afd-a436-a2c83d8e03f9/public_url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/aws-certified-developer-associate.png"}
          alt="AWS Certified Developer Associate"
          className="cert-badge"
        />
      </a>
    </div>

    <div className="cert-item">
      <a
        href="https://www.credly.com/badges/bb9722f2-bdd5-4ed1-a38a-28115721848c/public_url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/cloud-quest.png"}
          alt="AWS Cloud Quest"
          className="cert-badge"
        />
      </a>
    </div>
    <div className="cert-item">
      <a
        href="https://www.credly.com/badges/3924dcb3-ba73-4c29-b83f-cd394b8d112e/public_url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/linux.png"}
          alt="Linux Professional Institute"
          className="cert-badge"
        />
      </a>
    </div>
  </div>
</section>
<section className="education-certifications anim">
  <h2 class="section-title">Education</h2>
  <div className="edu-cert-item edu-with-logo">
  <img src={process.env.PUBLIC_URL + '/ualberta.png'} alt="University of Alberta" className="edu-logo" />
  <div>
    <h3>Bachelor of Science in Computing Science</h3>
    <p>
      Graduated from University of Alberta with focus on software development,
      networking, and cloud computing.
    </p>
  </div>
</div>
</section>
<section className="education-certifications anim">
   <h2 className="section-title">GitHub Contributions</h2>
  {/* <h2 className="section-title">GitHub Activity</h2> */}

  <div className="github-calendar-wrapper">
    <GitHubCalendar
      username="shubhkaran30546"
      colorScheme="dark"
    />
  </div>
</section>


      </div>
      
  )
}