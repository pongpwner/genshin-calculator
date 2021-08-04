import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ children,center, ...otherProps  }) => (
  <button className={`custom-button ${center}`} {...otherProps}>
    {children}
  </button>
);
export default CustomButton;
