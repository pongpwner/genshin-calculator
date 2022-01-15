import React from "react";

import "./custom-radio-button.styles.scss";

const CustomRadioButton = ({
  option,
  label,
  name,
  value,
  onChange,
  ...otherProps
}) => (
  <div className="custom-radio-button">
    <label>{label}</label>
    <input
      type="radio"
      name={name}
      value={option.value}
      checked={Number(value) === option.value}
      onChange={onChange}
      {...otherProps}
    ></input>
  </div>
);
export default CustomRadioButton;
