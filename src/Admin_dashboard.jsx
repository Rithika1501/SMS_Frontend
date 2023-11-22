// admin_dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/dashboard.css'; // Import the same CSS file as the faculty dashboard

function AdminDashboard({ adminData }) {
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
      navigate('/adminProfile', { state: { adminData } });
    } else if (route === 'student') {
      navigate('/admin_students');
    } else if (route === 'faculty') {
      navigate('/admin_faculty');
    } else if (route === 'admins') {
      navigate('/admin_admins');
    } else if (route === 'notice') {
      navigate('/Admin_notice');
    } else {
      console.log(`Button clicked: ${route}`);
    }
  };

  return (
    <div className="dashboard-container"> 
      <header className="dashboard-header">
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-buttons-container">
        <button className="dashboard-button profile" onClick={() => handleButtonClick('profile')}>
          Profile
        </button>
        <button className="dashboard-button student" onClick={() => handleButtonClick('student')}>
          Student
        </button>
        <button className="dashboard-button faculty" onClick={() => handleButtonClick('faculty')}>
          Faculty
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

export default AdminDashboard;
