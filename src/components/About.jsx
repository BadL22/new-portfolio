import React from 'react';

const About = () => {
  return (
    <section className="section section-light">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am an aspiring front-end developer with a strong foundation in React and 
              web development fundamentals. While I'm new to the industry, I'm passionate 
              about creating beautiful, functional web experiences and ready to apply my 
              skills in a professional environment.
            </p>
            <p>
              <strong>Why hire me?</strong>
            </p>
            <ul>
              <li>
                <strong>Quick learner:</strong> I can rapidly adapt to new technologies and frameworks.
                I already know the basics of React and am willing to learn any additional technologies 
                your company uses.
              </li>
              <li>
                <strong>Adaptable:</strong> I'm eager to align my skills with your company's tech stack 
                and can quickly learn whatever tools you need me to work with.
              </li>
              <li>
                <strong>Problem solver:</strong> I enjoy tackling complex challenges and finding elegant solutions.
              </li>
              <li>
                <strong>Team player:</strong> I thrive in collaborative environments and value clear communication.
              </li>
            </ul>
            <p>
              I'm looking for an internship opportunity that will allow me to grow my skills
              while contributing real value to your team and projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;