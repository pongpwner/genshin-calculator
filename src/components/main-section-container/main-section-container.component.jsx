import React from "react";
import "./main-section-container.styles.scss";

export const MainSectionContainer = ({ children, title, row, mobileCol }) => (
  <div className={`main-section-container `}>
    {title ? <h2 className={`title`}>{title}</h2> : null}
    <div
      className={`content ${row ? "row" : ""} ${
        mobileCol ? "mobile-col" : ""
      }   `}
    >
      {children}
    </div>
  </div>
);

export default MainSectionContainer;
