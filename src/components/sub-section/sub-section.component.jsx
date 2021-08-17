import React from "react";

import "./sub-section.styles.css";
import WEAPON from "../../pages/weapon/weapon";
import Weapon from "../../pages/weapon/weapon.component";

const SubSection = ({
  subsection,
  moraNeeded,
  blueOreNeeded,
  domainMaterialGreenNeeded,
  domainMaterialBlueNeeded,
  domainMaterialPurpleNeeded,
  domainMaterialOrangeNeeded,
  domainMaterialOrangeRemaining,
  domainMaterialGreenRemaining,
  domainMaterialBlueRemaining,
  domainMaterialPurpleRemaining,
  eliteMaterialGreenNeeded,
  eliteMaterialBlueNeeded,
  eliteMaterialPurpleNeeded,
  eliteMaterialGreenRemaining,
  eliteMaterialBlueRemaining,
  eliteMaterialPurpleRemaining,
  commonMaterialWhiteNeeded,
  commonMaterialGreenNeeded,
  commonMaterialBlueNeeded,
  commonMaterialWhiteRemaining,
  commonMaterialGreenRemaining,
  commonMaterialBlueRemaining,
  state,
}) => (
  <div className="sub-section">
    {console.log(state[subsection.value])}
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

    {/* {() => {
      console.log(subsection.type);
      if (subsection.type === 1) {
        return (
          <div className="subsection">{`${subsection.label} ${subsection.value}`}</div>
        );
      } else {
        return <div>d</div>;
      }
    }} */}
  </div>
);

{
  /* */
}
export default SubSection;
