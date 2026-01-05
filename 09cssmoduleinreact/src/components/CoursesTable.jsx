import React from 'react';
import styles from './CoursesTable.module.css';

const CoursesTable = ({ courses }) => {
  return (
    <table className={`table table-bordered table-hover ${styles.courseTable}`}>
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Fee (Rs)</th>
        </tr>
      </thead>

      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.name}</td>
            <td>{course.duration}</td>
            <td>{course.fee}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoursesTable;
