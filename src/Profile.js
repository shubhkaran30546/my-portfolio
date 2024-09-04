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
          Welcome to my portfolio! I am a dedicated Computer Science student with over a year of hands-on experience in software development. My passion lies in enhancing software quality and contributing to innovative development projects. I excel in problem-solving and continuously seek opportunities to learn and grow. I am eager to bring my skills and enthusiasm to dynamic teams where technology and creativity come together to create impactful solutions.
          </p>
          <button onClick={handleDownload} className="cv">
          Download CV
        </button>
        </div>
      </body>
  )
}