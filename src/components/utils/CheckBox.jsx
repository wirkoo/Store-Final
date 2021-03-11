import React from "react";
import "../../ManualStyles.css";
const CheckBox = (props) => {
  const { name, value, onChange, checked, onClick, error, disabled } = props;
  return (
    <>
      <div
        className={
          disabled
            ? "bg-danger text-white container cont head"
            : "container cont head"
        }
      >
        <div className="inl">
          <input
            style={{ margin: 0 }}
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
        </div>
        <div className="inl">
          <label className="form-check-label" htmlFor={name}>
            {name}
          </label>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
