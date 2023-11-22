import React from "react";
import "./assets/add.css";
import { MdClose } from "react-icons/md";

const AddNoticet = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="Notice">Add Notice : </label>
        <input type="text" id="Notice" name="Notice" onChange={handleOnChange} value={rest.Notice || ''} />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddNoticet;