import React from 'react';
import { Link } from 'react-router-dom';
import './assets/login.css';
import schoolLogo from './assets/schl_logo.jpeg';

function HomePage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
                <Link className="nav-link" to="/studentlogin" style={{ fontWeight: 'bold' }}>
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
        <div className="right-side bg-white p-3 rounded w-25" style={{ maxHeight: 'calc(100vh - 56px)', overflowY: 'auto' }}>
          <div className="form-container">
            <div className="content">
              <h2>Welcome to Delhi Public School</h2>
              <p style={{ fontStyle: 'italic' }}>
         

<br></br>
"Education breeds Confidence Confidence breeds Hope And Hope breeds peace"

20 years of DPS HYDERABAD

The year 2022 will go down in the annals of DPS Hyderabad as a significant year for it celebrates 20 years of being the epitome of excellence in the field of academics, sports and extracurricular activities since its inception in 2002

It is indeed a proud moment not only for the visionaries of the institution but also the staff and students. The esteemed parent body too is an integral part of this trajectory and their continued encouragement and involvement will surely ensure both personal goals for our dipsites and also school goals for the institution in years to come.

The success and achievements of DPS Hyderabad's alumni, gaining admission into prestigious universities in India and across the world is a fitting tribute to an organization that has withstood the test of time, delivering brilliant results year after year both at secondary and senior secondary level under the competent leadership of founder principal and now academic director of the school Ms Rekha Aggarwala and present principal Ms Geetha Vishwanathan.

The past twenty years are but humble seeds sown for a promising journey ahead as the school looks forward to the celebration of its Silver Jubilee in the near future with its commitment to innovative growth.
          </p>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ background: '#f8f9fa', padding: '20px', marginTop: '20px' }}>
  <div style={{ marginLeft: '20px' }}>
    <p style={{ margin: 0 }}>
      Contact us: Survey No 74, Khajaguda Village Chitrapuri Colony Post, Hyderabad, Telangana - 500104 |
      Phone: 040 2980 6765/66 |
      Office: info@dpshyderabad.com |
      Admissions: admissions@dpshyderabad.com |
      Recruitment: recruit@dpshyderabad.com |
      <a href=" www.dpshyderabad.in" target="_blank" rel="noopener noreferrer">
        Website
      </a> |
      <a href="https://www.facebook.com/dpschool" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
    </p>
  </div>
</footer>
    </div>
  );
}

export default HomePage;