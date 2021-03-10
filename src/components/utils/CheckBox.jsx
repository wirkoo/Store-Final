import React from "react";

const CheckBox = (props) => {
  const { name, value, onChange, checked, onClick } = props;
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          onClick={onClick}
        />
        <label className="form-check-label" htmlFor={name}>
          {name}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
