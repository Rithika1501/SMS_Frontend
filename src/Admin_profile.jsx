// AdminProfile.js

import React from 'react';
import { Link } from 'react-router-dom';
import './assets/profile.css'; // Import the CSS file

function AdminProfile({ adminData }) {
  return (
    <div className="profile-container">
      <h1 className="profile-header">Welcome to the Admin Profile</h1>

      {adminData && (
        <div className="details-container">
          <h3 className="details-header">Personal Information:</h3>
          <table className="details-table">
            <tbody>
              <tr>
                <td className="details-cell">First Name</td>
                <td className="details-cell">{adminData.firstName}</td>
              </tr>
              <tr>
                <td className="details-cell">Middle Name</td>
                <td className="details-cell">{adminData.middleName}</td>
              </tr>
              <tr>
                <td className="details-cell">Last Name</td>
                <td className="details-cell">{adminData.lastName}</td>
              </tr>
              <tr>
                <td className="details-cell">Username:</td>
                <td className="details-cell">{adminData.username}</td>
              </tr>
              <tr>
                <td className="details-cell">Employee Id</td>
                <td className="details-cell">{adminData.id}</td>
              </tr>
              <tr>
                <td className="details-cell">Email:</td>
                <td className="details-cell">{adminData.email}</td>
              </tr>
              <tr>
                <td className="details-cell">PhoneNumber:</td>
                <td className="details-cell">{adminData.phnno}</td>
              </tr>
              <tr>
                <td className="details-cell">Gender:</td>
                <td className="details-cell">{adminData.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <Link to="/AdminDashboard" className="back-button">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default AdminProfile;