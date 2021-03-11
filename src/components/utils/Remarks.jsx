import React from "react";

const Remarks = (props) => {
  let { name, key, value, onChange, disabled } = props;
  let newName = name + " Remarks";
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{disabled ? <s>{newName}</s> : newName} </label>
        <input
          id={name}
          type="text"
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default Remarks;
