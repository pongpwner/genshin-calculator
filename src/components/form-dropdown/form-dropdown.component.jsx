import React from "react";

import "./form-dropdown.styles.css";
//need to make the mapped optaions have a key
const FormDropdown = ({ label, options, handleChange, value, name,...otherProps }) => (
  <div className="group">
    <label className="dropdown-label">{label}</label>
    <select onChange={handleChange} defaultValue={value} name={name}{...otherProps}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);
export default FormDropdown;
//
