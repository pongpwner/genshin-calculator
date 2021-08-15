import React from "react";
import "./main-section.styles.css";
import SubSection from "../sub-section/sub-section.component";

const MainSection = ({
  subsections,
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
}) => {
  console.log(subsections);
  return (
    <div className="main-section">
      {subsections.map((subsection) => (
        <SubSection
          moraNeeded={moraNeeded}
          blueOreNeeded={blueOreNeeded}
          domainMaterialGreenNeeded={domainMaterialGreenNeeded}
          domainMaterialBlueNeeded={domainMaterialBlueNeeded}
          domainMaterialPurpleNeeded={domainMaterialPurpleNeeded}
          domainMaterialOrangeNeeded={domainMaterialOrangeNeeded}
          domainMaterialOrangeRemaining={domainMaterialOrangeRemaining}
          domainMaterialGreenRemaining={domainMaterialGreenRemaining}
          domainMaterialBlueRemaining={domainMaterialBlueRemaining}
          domainMaterialPurpleRemaining={domainMaterialPurpleRemaining}
          eliteMaterialGreenNeeded={eliteMaterialGreenNeeded}
          eliteMaterialBlueNeeded={eliteMaterialBlueNeeded}
          eliteMaterialPurpleNeeded={eliteMaterialPurpleNeeded}
          eliteMaterialGreenRemaining={eliteMaterialGreenRemaining}
          eliteMaterialBlueRemaining={eliteMaterialBlueRemaining}
          eliteMaterialPurpleRemaining={eliteMaterialPurpleRemaining}
          commonMaterialWhiteNeeded={commonMaterialWhiteNeeded}
          commonMaterialGreenNeeded={commonMaterialGreenNeeded}
          commonMaterialBlueNeeded={commonMaterialBlueNeeded}
          commonMaterialWhiteRemaining={commonMaterialWhiteRemaining}
          commonMaterialGreenRemaining={commonMaterialGreenRemaining}
          commonMaterialBlueRemaining={commonMaterialBlueRemaining}
          subsection={subsection}
          state={state}
        />
      ))}
    </div>
  );
};
//this would be the calculator and result container

export default MainSection;
{
  /* */
}
