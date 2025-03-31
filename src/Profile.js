import React from 'react'

export default function Profile() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/SWE_dhillon.pdf';
    link.download = 'SDE_dhillon.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <body>
      <div className="bottom-line"></div>
      <img className="some" src={process.env.PUBLIC_URL + '/shubh.jpg'} alt="Shubhkaran Dhillon profile" />
        <div className="intro">
          <h1>Hi, My name is <span className="beige">Shubhkaran Dhillon</span> </h1>
          <p className='intro1'>
          Welcome to my portfolio! I am a dedicated Computing Science graduate with hands-on experience in software development. I have a keen interest in software development, networks, and security and am passionate about building scalable, efficient, and user-centered applications. My expertise lies in enhancing software quality, solving complex problems, and continuously expanding my knowledge in emerging technologies.
          </p>
          <button onClick={handleDownload} className="cv">
          Download CV
        </button>
        </div>
      </body>
  )
}