import React from 'react';
import CoursesTable from './components/CoursesTable.jsx';

export const App = () => {
  const courses = [
    { id: 1, name: 'React JS', duration: '3 Months', fee: 5000 },
    { id: 2, name: 'PHP', duration: '2 Months', fee: 4000 },
    { id: 3, name: 'Python', duration: '4 Months', fee: 6000 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Course Details</h2>
      <CoursesTable courses={courses} />
    </div>
  );
};
