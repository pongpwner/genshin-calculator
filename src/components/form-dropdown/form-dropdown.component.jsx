import React from "react";

import "./form-dropdown.styles.scss";
//need to make the mapped optaions have a key
const FormDropdown = ({
  label,
  options,
  handleChange,
  value,
  name,
  ...otherProps
}) => (
  <div className="group form-dropdown">
    <label className="dropdown-label">{label}</label>
    <select
      className="drop-down"
      onChange={handleChange}
      defaultValue={value}
      name={name}
      {...otherProps}
    >
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);
export default FormDropdown;
//
