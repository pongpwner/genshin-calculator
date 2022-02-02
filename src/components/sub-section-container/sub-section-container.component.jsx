import React from "react";
import "./sub-section-container.styles.scss";

const SubSectionContainer = ({ children, center }) => (
  <div className={`sub-section-container ${center ? "center" : ""}`}>
    {children}
  </div>
);

export default SubSectionContainer;
