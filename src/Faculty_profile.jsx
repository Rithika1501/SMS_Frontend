// FacultyProfile.js

import React from 'react';
import { Link } from 'react-router-dom';
import './assets/profile.css'; // Import the CSS file

function FacultyProfile({ facultyData }) {
  return (
    <div className="profile-container">
      <h1 className="profile-header">Welcome to the Faculty Profile</h1>

      {facultyData && (
        <div className="details-container">
          <h3 className="details-header">Personal Information:</h3>
          <table className="details-table">
            <tbody>
              <tr>
                <td className="details-cell">First Name</td>
                <td className="details-cell">{facultyData.firstName}</td>
              </tr>
              <tr>
                <td className="details-cell">Middle Name</td>
                <td className="details-cell">{facultyData.middleName}</td>
              </tr>
              <tr>
                <td className="details-cell">Last Name</td>
                <td className="details-cell">{facultyData.lastName}</td>
              </tr>
              <tr>
                <td className="details-cell">Username:</td>
                <td className="details-cell">{facultyData.username}</td>
              </tr>
              <tr>
                <td className="details-cell">Email:</td>
                <td className="details-cell">{facultyData.email}</td>
              </tr>
              <tr>
                <td className="details-cell">Employee Id</td>
                <td className="details-cell">{facultyData.id}</td>
              </tr>
              <tr>
                <td className="details-cell">PhoneNumber:</td>
                <td className="details-cell">{facultyData.phnno}</td>
              </tr>
              <tr>
                <td className="details-cell">Gender:</td>
                <td className="details-cell">{facultyData.gender}</td>
              </tr>
              <tr>
                <td className="details-cell">Department</td>
                <td className="details-cell">{facultyData.dept}</td>
              </tr>
              <tr>
                <td className="details-cell">Post</td>
                <td className="details-cell">{facultyData.post}</td>
              </tr>
              <tr>
                <td className="details-cell">Experience</td>
                <td className="details-cell">{facultyData.exp}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <Link to="/facultyDashboard" className="back-button">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default FacultyProfile;