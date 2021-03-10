import React from "react";

const Remarks = (props) => {
  let { name, key, value, onChange, disabled } = props;
  name = name.split(" ").join("") + "Remarks";

  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{disabled ? <s>{name}</s> : name}</label>
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
