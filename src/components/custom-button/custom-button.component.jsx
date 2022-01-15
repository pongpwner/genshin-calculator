import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, center, ...otherProps }) => (
  <button className={`custom-button ${center ? "center" : ""}`} {...otherProps}>
    {children}
  </button>
);
export default CustomButton;
