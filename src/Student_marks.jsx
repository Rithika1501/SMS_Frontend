// student_marks.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentMarks({ studentData }) {
  const [marksData, setMarksData] = useState(null);

  useEffect(() => {
    // Fetch marks data based on the enrollment number
    const fetchMarksData = async () => {
      try {
        const response = await axios.get(`https://sms-backend1.onrender.com/marks/${studentData.enroll}`);
        const { success, data } = response.data;
        if (success) {
          setMarksData(data);
        } else {
          setMarksData(null);
          // Display a message when marks are not found
          alert('Marks not found for the given enrollment number');
        }
      } catch (error) {
        console.error('Error fetching marks data:', error);
      }
    };

    // Trigger the API call when the component mounts
    if (studentData) {
      fetchMarksData();
    }
  }, [studentData]);

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      {marksData && (
        <div>
          <h2 style={{ backgroundColor: '#5bc0de', padding: '10px', color: '#fff', borderRadius: '5px' }}>
            Marks Details
          </h2>
          <table
            style={{
              margin: '20px auto',
              borderCollapse: 'collapse',
              backgroundColor: '#f2dede',
              border: '5px solid #ddd',
              width: '60%',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f2dede', border: '2px solid #ddd' }}>
                <th style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>Subject</th>
                <th style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>Enrollment Number</td>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>{marksData.enroll}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>English</td>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>{marksData.eng}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>Hindi</td>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>{marksData.hin}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>Telugu</td>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>{marksData.tel}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>Math</td>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>{marksData.mat}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>Science</td>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>{marksData.sci}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>Social</td>
                <td style={{ padding: '15px', border: '2px solid #ddd', textAlign: 'left' }}>{marksData.ss}</td>
              </tr>
              {/* Add other fields as needed */}
            </tbody>
          </table>
        </div>
      )}

      {/* Back to Dashboard Button */}
      <Link
        to="/Studentdashboard"
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

export default StudentMarks;
