// Admin_students.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStudenttable from './addStudenttable';
import { Link } from 'react-router-dom'; // Import Link

axios.defaults.baseURL = 'https://sms-backend1.onrender.com/';

function AddStudent() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    enroll: '',
    email: '',
    phnno: '',
    cls: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    enroll: '',
    email: '',
    phnno: '',
    cls: '',
    _id: '',
  });

  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    const data = await axios.post('/student_details/create', formData);
    console.log('Response:', data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        password: '',
        enroll: '',
        email: '',
        phnno: '',
        cls: '',
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get('/student_details/');
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete('/student_details/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/student_details/update', formDataEdit);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
        <h2>Add Students</h2>
      </div>

      {/* White Background Container */}
      <div className='white-background-container' style={{ width: '75%' }}>
        {/* Add Button */}
        <button className='btn btn-add' onClick={() => setAddSection(true)}>
          Add
        </button>
        <br />

        {/* Add Section */}
        {addSection && (
          <AddStudenttable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={() => setAddSection(false)}
            rest={formData} // Pass formData for add scenario
          />
        )}

        {/* Edit Section */}
        {editSection && (
          <AddStudenttable
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={() => setEditSection(false)}
            rest={formDataEdit} // Pass formDataEdit for edit scenario
          />
        )}

        {/* Table Section */}
        <div className='tableContainer'>
          <table>
            {/* Table Header */}
            <thead>
              <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Password</th>
                <th>Enrollment Number</th>
                <th>Email Address</th>
                <th>Phone number</th>
                <th>Class</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {dataList.length > 0 ? (
                dataList.map((el, index) => (
                  <tr key={index}>
                    <td>{el.firstName}</td>
                    <td>{el.middleName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.username}</td>
                    <td>{el.password}</td>
                    <td>{el.enroll}</td>
                    <td>{el.email}</td>
                    <td>{el.phnno}</td>
                    <td>{el.cls}</td>
                    <td>
                      <button className='btn btn-edit' onClick={() => handleEdit(el)}>
                        Edit
                      </button>
                      <button className='btn btn-delete' onClick={() => handleDelete(el._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='6' style={{ textAlign: 'center' }}>
                    No Data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Back to Dashboard Button */}
      <div style={{ backgroundColor: 'lightblue', padding: '10px', textAlign: 'center' }}>
        <Link to="/adminDashboard">
          <button style={{ backgroundColor: 'lightblue', border: 'none', cursor: 'pointer', width: '50%' }}>
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AddStudent;
