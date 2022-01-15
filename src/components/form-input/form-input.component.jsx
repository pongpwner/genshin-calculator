import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={`form-input-container group `}>
    <input
      onChange={handleChange}
      className={`form-input ${label}`}
      {...otherProps}
    />
  </div>
);
export default FormInput;
