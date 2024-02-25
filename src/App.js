// StudentMarkPage.js

import React from 'react';
import MarkDetails from './MarkDetails';
import './App.css'; // Import the CSS file

const StudentMarkPage = () => {
  const studentName = 'Jennie Roopa';
  const subjects = [
    { name: 'Deep Learning', marks: 90 },
    { name: 'FullStack', marks: 85 },
    { name: 'Software Engineering', marks: 88 },
    {name:"Recommender System", marks:99},
    {name:"Tabeau", marks:81}
  ];

  return (
    <div className="student-mark-page"> {/* Apply the main container class */}
      <h1>Student Mark Page</h1>
      <MarkDetails studentName={studentName} subjects={subjects} />
    </div>
  );
};

export default StudentMarkPage;
