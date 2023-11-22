import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FacultyMarks() {
  const [cls, setClassNumber] = useState('');
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState({});
  const [editingMarks, setEditingMarks] = useState({});
  const [enrollmentExists, setEnrollmentExists] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (cls !== '') {
      axios.get(`https://sms-backend1.onrender.com/students/${cls}`)
        .then((response) => {
          setStudents(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
          setStudents([]);
        });
    }
  }, [cls]);

  const handleCheckMarks = async (studentEnroll) => {
    try {
      const response = await axios.get(`https://sms-backend1.onrender.com/marks/${studentEnroll}`);
      setMarks(response.data.data);
      setEnrollmentExists(true);
    } catch (error) {
      console.error('Error fetching marks data: ', error);
      setEnrollmentExists(false);
    }
  };

  const handleEditMarksChange = (subject, value) => {
    setEditingMarks({ ...editingMarks, [subject]: value });
  };

  const handleUpdateMarks = async (studentEnroll) => {
    try {
      await axios.put(`https://sms-backend1.onrender.com/marks/update`, {
        enroll: studentEnroll,
        eng: editingMarks.eng,
        tel: editingMarks.tel,
        hin: editingMarks.hin,
        mat: editingMarks.mat,
        sci: editingMarks.sci,
        ss: editingMarks.ss,
      });
      handleCheckMarks(studentEnroll);
      setEditingMarks({});
    } catch (error) {
      console.error('Error updating marks: ', error);
    }
  };

  const handleAddMarks = async (studentEnroll) => {
    try {
      await axios.post(`https://sms-backend1.onrender.com/marks/create`, {
        enroll: studentEnroll,
        eng: 0,
        tel: 0,
        hin: 0,
        mat: 0,
        sci: 0,
        ss: 0,
      });
      handleCheckMarks(studentEnroll);
    } catch (error) {
      console.error('Error adding marks: ', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ backgroundColor: '#5bc0de', padding: '10px', color: '#fff' }}>Student Marks</h1>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>Select Class</p>
        <select
          value={cls}
          onChange={(e) => setClassNumber(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        >
          <option value="" disabled>
            Select Class
          </option>
          {[...Array(10).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {students.length > 0 && (
        <table style={{ border: '1px solid #000', width: '60%', margin: '0 auto', backgroundColor: '#f2dede' }}>
          <thead>
            <tr>
              <th>Enrollment Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.enroll}>
                <td>{student.enroll}</td>
                <td>
                  <button onClick={() => handleCheckMarks(student.enroll)}>Check Marks</button>
                  {!enrollmentExists && (
                    <p>
                      No marks found for this enrollment number.
                      <button onClick={() => handleAddMarks(student.enroll)}>Add Marks</button>
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {Object.keys(marks).length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Marks for Enrollment Number: {marks.enroll}</h2>
          <table style={{ border: '1px solid #000', width: '60%', margin: '0 auto', backgroundColor: '#f2dede' }}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(marks).map(
                (key) =>
                  key !== '_id' &&
                  key !== 'createdAt' &&
                  key !== 'updatedAt' &&
                  key !== '__v' && (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{typeof marks[key] === 'object' ? JSON.stringify(marks[key]) : marks[key]}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>

          <button onClick={() => setEditingMarks({ ...marks })}>Edit Marks</button>

          {Object.keys(editingMarks).length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <h2>Edit Marks for Enrollment Number: {marks.enroll}</h2>
              <table style={{ border: '1px solid #000', width: '60%', margin: '0 auto', backgroundColor: '#f2dede' }}>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Edit Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(editingMarks).map((subject) => (
                    <tr key={subject}>
                      <td>{subject}</td>
                      <td>
                        <input
                          type="text"
                          value={editingMarks[subject] || ''}
                          onChange={(e) => handleEditMarksChange(subject, e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => handleUpdateMarks(marks.enroll)}>Save Changes</button>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => navigate('/facultydashboard')}
        style={{
          backgroundColor: '#5bc0de',
          padding: '10px 15px',
          color: '#fff',
          borderRadius: '5px',
          marginTop: '20px',
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default FacultyMarks;
