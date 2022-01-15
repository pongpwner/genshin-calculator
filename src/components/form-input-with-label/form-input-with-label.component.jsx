import React from "react";
import "./form-input-with-label.styles.scss";

const FormInputWithLabel = ({ type, name, value, label, handleChange }) => (
  <div className="form-input-with-label">
    <div className="form-input-label">{label}</div>
    <input
      className="form-input"
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    ></input>
  </div>
);

export default FormInputWithLabel;
