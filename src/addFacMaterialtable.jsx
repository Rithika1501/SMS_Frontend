import React from "react";
import "./assets/add.css";
import { MdClose } from "react-icons/md";

const AddMattable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="subCode">Subject Code : </label>
        <input type="text" id="subCode" name="subCode" onChange={handleOnChange} value={rest.subCode|| ''} />

        <label htmlFor="subName">Subject Name : </label>
        <input type="text" id="subName" name="subName" onChange={handleOnChange} value={rest.subName || ''} />

        <label htmlFor="matLink">Material Link : </label>
        <input type="text" id="matLink" name="matLink" onChange={handleOnChange} value={rest.matLink || ''} />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddMattable;
