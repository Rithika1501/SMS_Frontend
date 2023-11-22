import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const buttonStyle = {
  position: 'fixed',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
  borderRadius: '5px',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '50px auto',
  padding: '20px',
  borderRadius: '5px',
  backgroundColor: '#f2dede',  // Table background color
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
  color: 'white',
};

const adminDetailsHeaderStyle = {
  backgroundColor: '#5bc0de',  // Light blue background color for the header
  padding: '20px',
  textAlign: 'center',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
  border: '1px solid #ddd',  // Border color
};

const tableHeaderStyle = {
  backgroundColor: '#f2dede',
  padding: '10px',
  borderBottom: '2px solid #ddd',  // Bottom border color
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',  // Bottom border color
  padding: '10px',
};

function Student_admin() {
  const [admins, setAdmins] = useState([]);
  const apiUrl = 'https://sms-backend1.onrender.com/admin_details/';

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAdmins(response.data.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <div>
      {/* Admin Details Header */}
      <div style={adminDetailsHeaderStyle}>
        <h1 style={headingStyle}>Admin Details</h1>
      </div>

      {/* Main Content Container */}
      <div style={{ ...containerStyle, backgroundColor: '#f2dede' }}>
        <table style={tableStyle}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin._id} style={tableRowStyle}>
                <td>
                  <strong>
                    {admin.firstName} {admin.lastName}
                  </strong>
                </td>
                <td>{admin.username}</td>
                <td>{admin.email}</td>
                <td>{admin.phnno}</td>
              </tr>
            ))}
          </tbody>
        </table>

      
      </div>
      <Link
          to="/StudentDashboard"
          style={{
            display: 'inline-block',
            margin: '0 780px auto',
            backgroundColor: '#5bc0de',
            padding: '10px 15px',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
        >
          Back to Dashboard
        </Link>
    </div>
  );
}

export default Student_admin;
