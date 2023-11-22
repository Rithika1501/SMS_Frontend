import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddFacNoticet from './addFacnotic';
import { Link } from 'react-router-dom';

axios.defaults.baseURL = 'https://sms-backend1.onrender.com/';

function AddFacNotice() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [viewAdminNotices, setViewAdminNotices] = useState(false);
  const [adminNotices, setAdminNotices] = useState([]); // Updated state to store admin notices
  const [formData, setFormData] = useState({
    Fac_Notice: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    Fac_Notice: '',
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
    const data = await axios.post('/fac_notice/create', formData);
    console.log('Response:', data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        Fac_Notice: '',
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get('/fac_notice/');
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete('/fac_notice/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/fac_notice/update', formDataEdit);
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

  const handleViewAdminNotices = async () => {
    try {
      const data = await axios.get('/admin_notice');
      if (data.data.success) {
        setAdminNotices(data.data.data);
        setViewAdminNotices(true);
      } else {
        alert('Failed to fetch admin notices');
      }
    } catch (error) {
      console.error('Error fetching admin notices:', error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center', backgroundColor: '#5bc0de', padding: '10px', color: '#fff', borderRadius: '5px' }}>
        <h2>Spot Light</h2>
      </div>

      <div className='white-background-container' style={{ width: '75%' }}>
        <button className='btn btn-add' onClick={() => setAddSection(true)}>
          Add
        </button>
<br></br>
        <button className='btn btn-add' onClick={handleViewAdminNotices}>
          View Admin Notices
        </button>
        {viewAdminNotices && (
          <div>
            
            <ul>
              {adminNotices.map((notice, index) => (
                <li key={index}>{notice.Notice}</li>
              ))}
            </ul>
          </div>
        )}
        <br />
        {addSection && (
          <AddFacNoticet
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={() => setAddSection(false)}
            rest={formData} // Pass formData for add scenario
          />
        )}
        {editSection && (
          <AddFacNoticet
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose={() => setEditSection(false)}
            rest={formDataEdit} // Pass formDataEdit for edit scenario
          />
        )}
        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Faculty Notice</th>
              </tr>
            </thead>
            <tbody>
              {dataList.length > 0 ? (
                dataList.map((el, index) => (
                  <tr key={index}>
                    <td>{el.Fac_Notice}</td>
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
      <div style={{ textAlign: 'center' }}>
        <Link
          to="/facultyDashboard"
          style={{
            display: 'inline-block',
            margin: '20px auto', // Center the button horizontally
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
    </div>
  );
}

export default AddFacNotice;
