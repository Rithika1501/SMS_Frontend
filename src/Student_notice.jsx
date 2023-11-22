import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.baseURL = 'https://sms-backend1.onrender.com/';

function StudentNotice() {
  const [viewAdminNotices, setViewAdminNotices] = useState(false);
  const [adminNotices, setAdminNotices] = useState([]);
  const [viewFacNotices, setViewFacNotices] = useState(false);
  const [facNotices, setFacNotices] = useState([]);

  const handleViewAdminNotices = async () => {
    try {
      const data = await axios.get('/admin_notice');
      if (data.data.success) {
        setAdminNotices(data.data.data);
        setViewAdminNotices(true);
        setViewFacNotices(false);
      } else {
        alert('Failed to fetch admin notices');
      }
    } catch (error) {
      console.error('Error fetching admin notices:', error);
    }
  };

  const handleViewFacNotices = async () => {
    try {
      const data = await axios.get('/fac_notice');
      if (data.data.success) {
        setFacNotices(data.data.data);
        setViewFacNotices(true);
        setViewAdminNotices(false);
      } else {
        alert('Failed to fetch faculty notices');
      }
    } catch (error) {
      console.error('Error fetching faculty notices:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Spot Light Header */}
      <div style={{ backgroundColor: '#5bc0de', padding: '10px', marginBottom: '20px' }}>
        <h2 style={{ color: '#fff' }}>Spot Light</h2>
      </div>

      {/* Main Content Container */}
      <div className="white-background-container" style={{ width: '75%', padding: '20px', display: 'inline-block', textAlign: 'center' }}>
        <div style={{ margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#f2dede', padding: '20px', borderRadius: '10px', margin: '10px', width: '300px' }}>
            <strong>
              <button className="btn btn-view" onClick={handleViewAdminNotices} style={{fontWeight:'bold', fontSize:'25px'}}>
                View Admin Notices
              </button>
            </strong>
            {viewAdminNotices && (
              <div>
                <ul>
                  {adminNotices.map((notice, index) => (
                    <li key={index}>{notice.Notice}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div style={{ backgroundColor: '#f2dede', padding: '20px', borderRadius: '10px', margin: '10px', width: '300px' }}>
            <strong>
              <button className="btn btn-view" onClick={handleViewFacNotices} style={{fontWeight:'bold', fontSize:'25px'}}>
                View Faculty Notices
              </button>
            </strong>
            {viewFacNotices && (
              <div>
                <ul>
                  {facNotices.map((notice, index) => (
                    <li key={index}>{notice.Fac_Notice}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Back to Dashboard Button */}
        <Link
          to="/StudentDashboard"
          style={{
            display: 'block',
            backgroundColor: '#5bc0de',
            padding: '10px',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
            width: '150px',
            margin: '20px auto',
          }}
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default StudentNotice;
