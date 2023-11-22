// student_login.jsx
import React, { useState } from 'react';
import './assets/login.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import schoolLogo from './assets/schl_logo.jpeg';
import studentLogo from './assets/images.jpg'; // Add this import

function StudentLogin({ setStudentDataProp, setMarksDataProp }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [message, setErrorMessage] = useState();
  const [studentData, setStudentData] = useState(null);
  const [marksData, setMarksData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage('*All fields are required');
      return;
    }
    axios
      .post('https://sms-backend1.onrender.com/studentlogin', { username, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'Success') {
          setStudentData(response.data.data);
          setStudentDataProp(response.data.data);
          navigate('/StudentDashboard');
        } else if (response.data === 'Password is incorrect') {
          setErrorMessage('*Password is incorrect');
        } else {
          setErrorMessage('*Account does not exist');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={schoolLogo} alt="School Logo" style={{ width: '30px', marginRight: '10px' }} />
            <strong>Delhi Public School</strong>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ fontWeight: 'bold' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/studentlogin"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  Student
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/facultylogin" style={{ fontWeight: 'bold' }}>
                  Faculty
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/adminlogin" style={{ fontWeight: 'bold' }}>
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="login-container">
        <div className="left-side"></div>
        <div className="right-side bg-white p-3 rounded w-25">
          <div className="form-container">
            {/* Circular card with student logo and text */}
            <div
              style={{
                textAlign: 'center',
                borderRadius: '50%',
                overflow: 'hidden',
                width: '100px', // Increased size
                height: '100px', // Increased size
                margin: '0 auto 20px',
                backgroundColor: '#add8e6', // Light Blue color
              }}
            >
              <img
                src={studentLogo}
                alt="Student Logo"
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              />
            </div>
            <h2 style={{ textAlign: 'center' }}>Student</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username">
                  <strong>Username</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  autoComplete="off"
                  name="username"
                  className="form-control rounded-0"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="password"
                  className="form-control rounded-0"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                Login
              </button>
              <div style={{ color: 'red', textAlign: 'center', paddingTop: '5px' }}>{message}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
