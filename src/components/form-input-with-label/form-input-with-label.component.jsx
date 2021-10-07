import React from "react";
import "./form-input-with-label.styles.css";

const FormInputWithLabel = ({ type, name, value, label, handleChange }) => (
  <div className="FormInputWithLabel">
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
