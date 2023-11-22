// student_dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/dashboard.css';

function StudentDashboard({ studentData, marksData }) {
  const [logoutMessage, setLogoutMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (logoutMessage) {
      const confirmLogout = window.confirm(logoutMessage);
      setLogoutMessage(null);

      if (confirmLogout) {
        navigate('/');
      }
    }
  }, [logoutMessage]);

  const handleLogout = () => {
    setLogoutMessage('Click OK to logout');
  };

  const handleButtonClick = (route) => {
    if (route === 'profile') {
      navigate('/StudentProfile', { state: { studentData } });
    } else if (route === 'Marks') {
      navigate('/Student_marks',{state: {studentData}});
    } else if (route === 'notice') {
      navigate('/Student_notice');
    } 
    else if (route === 'course') {
      navigate('/course',{state: {studentData }});
    } else if(route === 'admins'){
      navigate('/Student_admins');
    } else if(route == 'timetable'){
      navigate('/Time_table');
    } else {
      console.log(`Button clicked: ${route}`);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2 className="dashboard-title">Student Dashboard</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-buttons-container">
        <button className="dashboard-button profile" onClick={() => handleButtonClick('profile')}>
          Profile
        </button>
        <button className="dashboard-button marks" onClick={() => handleButtonClick('Marks')}>
          Marks
        </button>
        <button className="dashboard-button timetable" onClick={() => handleButtonClick('timetable')}>
          Time Table
        </button>
        <button className="dashboard-button course" onClick={() => handleButtonClick('course')}>
          Course
        </button>
        <button className="dashboard-button notice" onClick={() => handleButtonClick('notice')}>
          Notice
        </button>
        
        <button className="dashboard-button admins" onClick={() => handleButtonClick('admins')}>
          Admins
        </button>
      </div>
    </div>
  );
}

export default StudentDashboard;
