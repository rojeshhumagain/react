import React from 'react';
import Skills from './components/Skills.jsx';
import Student from './components/Student.jsx';

export const App = () => {
  const skills = ['frontend', 'backend', 'database', 'deployment', 'testing'];

  return (
    <div className="container mt-4">
      <h2>My Skills</h2>
      <Skills skills={skills} />
    </div>
  );
};

export const StudentApp = () => {
  const studentData = {
    name: 'Rojesh',
    roll: 12,
    degree: 'CSIT'
  };

  return (
    <div>
      <h2>Student Info</h2>
      <Student
        name={studentData.name}
        roll={studentData.roll}
        degree={studentData.degree}
      />
    </div>
  );
};
