import React from "react";
import "./assets/add.css";
import { MdClose } from "react-icons/md";

const AddFacNoticet= ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="Fac_Notice">Add Notice : </label>
        <input type="Fac_Notice" id="Fac_Notice" name="Fac_Notice" onChange={handleOnChange} value={rest.Fac_Notice || ''} />

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddFacNoticet;