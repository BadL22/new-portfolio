import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Brandon Ladouceur</span></h1>
        <h2>Front-End Developer</h2>
        <p>
          I'm passionate about creating responsive and user-friendly web experiences.
          With a strong foundation in React and eagerness to learn new technologies,
          I'm ready to contribute to your team's success.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">
            Get In Touch
          </Link>
          <Link to="/skills" className="btn btn-secondary">
            My Skills
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
