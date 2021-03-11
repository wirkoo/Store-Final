import React from "react";

const CheckBox = (props) => {
  const { name, value, onChange, checked, onClick, error, disabled } = props;
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
          disabled={disabled}
        />
        <label className="form-check-label" htmlFor={name}>
          {disabled ? <s>{name}</s> : name}
        </label>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </>
  );
};

export default CheckBox;
