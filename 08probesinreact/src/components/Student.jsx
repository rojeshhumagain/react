import React from 'react';

const Student = ({ name, roll, degree }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Roll: {roll}</p>
      <p>Degree: {degree}</p>
    </div>
  );
};

export default Student;
