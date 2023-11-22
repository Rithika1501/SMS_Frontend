import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddMattable from './addFacMaterialtable';
import { Link } from 'react-router-dom';

axios.defaults.baseURL = 'https://sms-backend1.onrender.com/';

function AddMaterial() {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    subCode: '',
    subName: '',
    matLink: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    subCode: '',
    subName: '',
    matLink: '',
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
    const data = await axios.post('/materials/create', formData);
    console.log('Response:', data);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        subCode: '',
        subName: '',
        matLink: '',
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get('/materials/');
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  const handleDelete = async (id) => {
    const data = await axios.delete('/materials/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/materials/update', formDataEdit);
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
      <div style={{ textAlign: 'center', backgroundColor: '#5bc0de', padding: '10px', color: '#fff', borderRadius: '5px' }}>
        <h2>Material</h2>
      </div>

      <div className='white-background-container' style={{ width: '75%' }}>
        <button className='btn btn-add' onClick={() => setAddSection(true)}>
          Add
        </button>
        <br />
        {addSection && (
          <AddMattable
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose={() => setAddSection(false)}
            rest={formData} // Pass formData for add scenario
          />
        )}
        {editSection && (
          <AddMattable
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
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Material Link</th>
              </tr>
            </thead>
            <tbody>
              {dataList.length > 0 ? (
                dataList.map((el, index) => (
                  <tr key={index}>
                    <td>{el.subCode}</td>
                    <td>{el.subName}</td>
                    <td>
                      {/* Render the link as an anchor tag */}
                      <a href={el.matLink} target="_blank" rel="noopener noreferrer">
                        {el.matLink}
                      </a>
                    </td>
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
            padding: '5px 10px', // Adjusted padding for a smaller button
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

export default AddMaterial;
