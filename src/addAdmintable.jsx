import React from "react";
import "./assets/add.css";
import { MdClose } from "react-icons/md";

const AddAdmintable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="firstName">First Name : </label>
        <input type="text" id="firstName" name="firstName" onChange={handleOnChange} value={rest.firstName || ''} />

        <label htmlFor="middleName">Middle Name : </label>
        <input type="text" id="middleName" name="middleName" onChange={handleOnChange} value={rest.middleName || ''} />

        <label htmlFor="lastName">Last Name : </label>
        <input type="text" id="lastName" name="lastName" onChange={handleOnChange} value={rest.lastName || ''} />
        <label htmlFor="username">User Name : </label>
        <input type="text" id="username" name="username" onChange={handleOnChange} value={rest.username || ''} />

        <label htmlFor="password">Password : </label>
        <input type="text" id="password" name="password" onChange={handleOnChange} value={rest.password || ''} />

        <label htmlFor="id">Employee Id : </label>
        <input type="text" id="id" name="id" onChange={handleOnChange} value={rest.id || ''} />

        <label htmlFor="email">Email Address : </label>
        <input type="text" id="email" name="email" onChange={handleOnChange} value={rest.email || ''} />

        <label htmlFor="phnno">Phone Number : </label>
        <input type="text" id="phnno" name="phnno" onChange={handleOnChange} value={rest.phnno || ''} />

        <label htmlFor="gender">Gender : </label>
        <input type="text" id="gender" name="gender" onChange={handleOnChange} value={rest.gender || ''} />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddAdmintable;
