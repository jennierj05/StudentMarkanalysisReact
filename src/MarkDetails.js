import React from 'react';

const MarkDetails = ({ studentName, subjects }) => {
  // Calculate total marks gained by the student
  const totalMarks = subjects.reduce((total, subject) => total + subject.marks, 0);

  return (
    <div>
      <h2>Mark Details for {studentName}</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Marks: {totalMarks}</p>
    </div>
  );
};

export default MarkDetails;
