import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', level: 80 },
    { name: 'CSS3', level: 75 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 65 },
    { name: 'Responsive Design', level: 75 },
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 60 },
    { name: 'UI/UX Basics', level: 65 },
    { name: 'Problem Solving', level: 80 },
    { name: 'Learning New Technologies', level: 90 },
  ];

  const renderSkillBars = (skills) => {
    return skills.map((skill, index) => (
      <div className="skill" key={index}>
        <div className="skill-name">{skill.name}</div>
        <div className="skill-bar">
          <div 
            className="skill-level" 
            style={{ width: `${skill.level}%` }}
          >
            <span className="skill-percent">{skill.level}%</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-intro">
          <p>
            While I'm new to professional development, I've been building a solid foundation in
            web technologies. I understand the fundamentals and am eager to apply and expand my
            skills in a real-world setting.
          </p>
        </div>
        
        <div className="skills-section">
          <h3>Front-End Development</h3>
          <div className="skills-list">
            {renderSkillBars(frontendSkills)}
          </div>
        </div>
        
        <div className="skills-section">
          <h3>Other Skills</h3>
          <div className="skills-list">
            {renderSkillBars(otherSkills)}
          </div>
        </div>
        
        <div className="learning-section">
          <h3>Ready to Learn</h3>
          <p>
            I'm enthusiastic about expanding my skill set! Here are some technologies I'm 
            interested in learning or am currently learning:
          </p>
          <div className="technologies-grid">
            <div className="tech-item">TypeScript</div>
            <div className="tech-item">Next.js</div>
            <div className="tech-item">Tailwind CSS</div>
            <div className="tech-item">Redux</div>
            <div className="tech-item">Node.js</div>
            <div className="tech-item">Any technology your company uses!</div>
          </div>
        </div>
        
        <div className="why-hire-section">
          <h3>Why Hire Me?</h3>
          <div className="why-hire-grid">
            <div className="reason-card">
              <h4>Fast Learner</h4>
              <p>I can quickly adapt to new technologies, frameworks, and codebases.</p>
            </div>
            <div className="reason-card">
              <h4>Problem Solver</h4>
              <p>I enjoy tackling challenges and finding efficient, elegant solutions.</p>
            </div>
            <div className="reason-card">
              <h4>Team Player</h4>
              <p>I communicate effectively and collaborate well with others.</p>
            </div>
            <div className="reason-card">
              <h4>Highly Motivated</h4>
              <p>I'm passionate about web development and eager to grow professionally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;