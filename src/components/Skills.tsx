// src/components/Skills.tsx
import React from 'react';
import './Skills.css';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Sass',
  'Tailwind CSS', 'Git', 'UX/UI'
];

const Skills: React.FC = () => {
  return (
    <section className="skills">
      <h2>SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;