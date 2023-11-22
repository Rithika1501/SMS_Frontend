// StudentProfile.js

import React from 'react';
import { Link } from 'react-router-dom';
import './assets/profile.css'; // Import the CSS file

function StudentProfile({ studentData }) {
  return (
    <div className="profile-container">
      <h1 className="profile-header">Welcome to the Student Profile</h1>

      {studentData && (
        <div className="details-container">
          <h3 className="details-header">Personal Information:</h3>
          <table className="details-table">
            <tbody>
              <tr>
                <td className="details-cell">First Name</td>
                <td className="details-cell">{studentData.firstName}</td>
              </tr>
              <tr>
                <td className="details-cell">Middle Name</td>
                <td className="details-cell">{studentData.middleName}</td>
              </tr>
              <tr>
                <td className="details-cell">Last Name</td>
                <td className="details-cell">{studentData.lastName}</td>
              </tr>
              <tr>
                <td className="details-cell">Username:</td>
                <td className="details-cell">{studentData.username}</td>
              </tr>
              <tr>
                <td className="details-cell">Email:</td>
                <td className="details-cell">{studentData.email}</td>
              </tr>
              <tr>
                <td className="details-cell">Enrollment Number</td>
                <td className="details-cell">{studentData.enroll}</td>
              </tr>
              <tr>
                <td className="details-cell">PhoneNumber:</td>
                <td className="details-cell">{studentData.phnno}</td>
              </tr>
              <tr>
                <td className="details-cell">Class</td>
                <td className="details-cell">{studentData.cls}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <Link to="/StudentDashboard" className="back-button" >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default StudentProfile;