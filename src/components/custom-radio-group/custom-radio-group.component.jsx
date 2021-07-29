import React from "react";
import "./custom-radio-group.styles.css";
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
    <label>{label}</label>
    <fieldset>
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
    </fieldset>
  </div>
);
export default CustomRadioGroup;
