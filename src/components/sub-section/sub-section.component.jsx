import React from "react";

import "./sub-section.styles.css";

const SubSection = ({
  subsection,

  state,
}) => (
  <div className="sub-section">
    {/*console.log(state)*/}
    {subsection.type === 1 ? (
      <div className="subsection material">{`${subsection.label} ${
        state[subsection.value]
      }`}</div>
    ) : null}
    {subsection.type === 2 ? (
      <div className="subsection">
        <h2 className="material-title">{`${subsection.mainHeader}`}</h2>
        <div className="material">
          <div className="material-info">
            <h3>{`${subsection.header1}`}</h3>
            {subsection.materialsNeeded.map((material) => (
              <div>{`${material.label} ${state[material.value]}`} </div>
            ))}
          </div>
          <div className="material-info">
            <h3>{`${subsection.header2}`}</h3>
            {subsection.materialsLeft.map((material) => (
              <div>{`${material.label} ${state[material.value]}`} </div>
            ))}
          </div>
        </div>
      </div>
    ) : null}
  </div>
);

export default SubSection;
