// faculty_dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/dashboard.css'; // Import the same CSS file as the student dashboard

function FacultyDashboard({ facultyData }) {
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
      navigate('/facultyProfile', { state: { facultyData } });
    } else if (route === 'studentInfo') {
      navigate('/fac_StuInfo');
    } else if (route === 'uploadMarks') {
      navigate('/facultyMarks');
    } else if (route === 'timetable') {
      navigate('/fTimetable');
    } else if (route === 'notice') {
      navigate('/Faculty_notice');
    } else if (route === 'material') {
      navigate('/facultyMaterials');
    } else {
      console.log(`Button clicked: ${route}`);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2 className="dashboard-title">Faculty Dashboard</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-buttons-container">
        <button className="dashboard-button profile" onClick={() => handleButtonClick('profile')}>
          Profile
        </button>
        <button className="dashboard-button studentInfo" onClick={() => handleButtonClick('studentInfo')}>
          Student Info
        </button>
        <button className="dashboard-button uploadMarks" onClick={() => handleButtonClick('uploadMarks')}>
          Upload Marks
        </button>
        <button className="dashboard-button timetable" onClick={() => handleButtonClick('timetable')}>
          Timetable
        </button>
        <button className="dashboard-button notice" onClick={() => handleButtonClick('notice')}>
          Notice
        </button>
        <button className="dashboard-button material" onClick={() => handleButtonClick('material')}>
          Material
        </button>
      </div>
    </div>
  );
}

export default FacultyDashboard;
