import React from "react";
import "./main-section.styles.css";
import SubSection from "../sub-section/sub-section.component";

const MainSection = ({
  subsections,

  state,
}) => {
  console.log(subsections);
  return (
    <div className="main-section">
      {subsections.map((subsection) => (
        <SubSection subsection={subsection} state={state} />
      ))}
    </div>
  );
};
//this would be the calculator and result container

export default MainSection;
