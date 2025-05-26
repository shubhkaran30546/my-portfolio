import React from 'react'
import { useEffect } from 'react';
export default function Profile() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/SWE_dhillon.pdf';
    link.download = 'SDE_dhillon.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
    <div id="home">
      {/* <img className="some" src={process.env.PUBLIC_URL + '/shubh.jpg'} alt="Shubhkaran Dhillon profile" /> */}
        <div className="intro anim">
          <h1>Hi, My name is <span className="beige">Shubhkaran Dhillon</span> </h1>
          <p className='intro1 anim'>
          Welcome to my portfolio! I am a dedicated Computing Science graduate with hands-on experience in software development. I have a keen interest in software development, networks, and security and am passionate about building scalable, efficient, and user-centered applications. My expertise lies in enhancing software quality, solving complex problems, and continuously expanding my knowledge in emerging technologies.
          </p>
          <button onClick={handleDownload} className="cv">
          Download CV
        </button>
        </div>
      </div>
  )
}