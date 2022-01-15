import React from "react";
import "./custom-radio-group.styles.scss";
import CustomRadioButton from "../custom-radio-button/custom-radio-button.component";
//might have to pass in weapon level state and ascesion state
const CustomRadioGroup = ({
  options,
  label,
  handleChange,
  value,
  name,
  ...otherProps
}) => (
  <div className="custom-radio-group">
    <label className="label">{label}</label>
    <div className="radio-buttons">
      {options.map((option) => (
        <CustomRadioButton
          option={option}
          value={value}
          onChange={handleChange}
          label={option.label}
          name={option.name}
          {...otherProps}
        />
      ))}
    </div>
  </div>
);
export default CustomRadioGroup;
