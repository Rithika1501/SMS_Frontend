import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentMaterial({ studentData }) {
  const [classNumber, setClassNumber] = useState('');
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    // Fetch the class number from the student profile
    const loggedInClassNumber = studentData ? studentData.cls : '';
    setClassNumber(loggedInClassNumber);

    // Fetch materials based on the class number
    if (loggedInClassNumber) {
      axios.get(`https://sms-backend1.onrender.com/materials/${loggedInClassNumber}`)
        .then(response => {
          setMaterials(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching materials data: ', error);
          setMaterials([]);
        });
    }
  }, [studentData]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ backgroundColor: '#5bc0de', padding: '15px', color: '#fff', borderRadius: '5px' }}>
        Materials for Class {classNumber}
      </h2>

      {materials.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {materials.map(material => (
            <li key={material._id} style={{ padding: '15px', border: '2px solid #ddd', margin: '10px 0', borderRadius: '5px' }}>
              <strong>{material.subName}</strong>: 
              <a href={material.matLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', color: '#5bc0de' }}>
                Material Link
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No materials available for the selected class.</p>
      )}

      {/* Back to Dashboard Button */}
      <Link
        to="/StudentDashboard"
        style={{
          display: 'inline-block',
          margin: '20px auto',
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

export default StudentMaterial;
