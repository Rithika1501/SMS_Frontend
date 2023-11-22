import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const buttonStyle = {
  display: 'block',
  margin: '20px auto', // Center the button horizontally
  padding: '10px 15px', // Adjusted padding for better fit
  backgroundColor: '#5bc0de',
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
  borderRadius: '5px',
  maxWidth: '170px', // Set the maximum width for the button
};

const containerStyle = {
  margin: '20px',
  padding: '20px', // Added padding for better visual appearance
  textAlign: 'center', // Center-align content
};

const studentInfoStyle = {
  backgroundColor: '#5bc0de', // Light blue background color for Student Info
  color: 'white',
  marginBottom: '20px',
  padding: '10px 0',
};

const searchContainerStyle = {
  margin: '20px 0',
};

const tableStyle = {
  width: '50%', // Adjusted width for the table
  borderCollapse: 'collapse',
  marginTop: '20px',
  marginLeft: '400px',
  backgroundColor: '#f2dede', // Background color for the table
  padding: '10px', // Add padding to the table
};

function AddInfo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentData, setStudentData] = useState(null);

  const handleSearch = () => {
    // Fetch student details by enrollment number
    axios.get(`https://sms-backend1.onrender.com/student_details/${searchQuery}`)
      .then(response => {
        const { success, data } = response.data;
        if (success) {
          setStudentData(data);
        } else {
          setStudentData(null);
          // Display a message when student details are not found
          alert("Student details not found");
        }
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <h2 style={studentInfoStyle}>Student Info</h2>
  
      {/* Search bar and button */}
      <div style={searchContainerStyle}>
        <h2>Enter Enrollment No.</h2>
        <input
          type="text"
          placeholder="Search by enrollment number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
  
      {/* Display student data if found */}
      {studentData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Student Details</h2>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{studentData.firstName} {studentData.middleName} {studentData.lastName}</td>
              </tr>
              <tr>
                <td>Enrollment No.</td>
                <td>{studentData.enroll}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{studentData.email}</td>
              </tr>
              <tr>
                <td>Phone No.</td>
                <td>{studentData.phnno}</td>
              </tr>
              <tr>
                <td>Class</td>
                <td>{studentData.cls}</td>
              </tr>
              {/* Add other fields as needed */}
            </tbody>
          </table>
        </div>
      )}
      {/* Back to Dashboard button */}
      <Link to="/facultyDashboard" style={buttonStyle}>
        Back to Dashboard
      </Link>
    </div>
  );
}

export default AddInfo;