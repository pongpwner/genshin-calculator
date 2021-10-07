import React from "react";
import "./form-input.styles.css";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={`group ${label}`}>
    <input onChange={handleChange} className="form-input" {...otherProps} />
  </div>
);
export default FormInput;
