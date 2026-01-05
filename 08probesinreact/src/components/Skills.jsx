import React from 'react';

const Skills = ({ skills }) => {
  return (
    <ul className="list-group">
      {skills.map((skill) => (
        <li key={skill} className="list-group-item">
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
