import React from "react";
import FormInput from "../form-input/form-input.component";
import FormDropdown from "../form-dropdown/form-dropdown.component";
import CustomButton from "../custom-button/custom-button.component";
import "./talent-input.styles.css";
import { connect } from "react-redux";
import {
  selectGreenTalent,
  selectBlueTalent,
  selectPurpleTalent,
  selectMoraNeeded,
  selectTalentLv,
  selectAttackLv,
  selectSkillLv,
  selectBurstLv,
  selectCommonMaterialWhite,
  selectCommonMaterialWhiteNeeded,
  selectCommonMaterialGreen,
  selectCommonMaterialGreenNeeded,
  selectCommonMaterialBlue,
  selectCommonMaterialBlueNeeded,
  selectBossMaterial,
  selectBossMaterialNeeded,
  selectGreenTalentNeeded,
  selectBlueTalentNeeded,
  selectPurpleTalentNeeded,
  selectCrown,
  selectCrownNeeded,
} from "../../redux/talent/talent.selector";
import { handleChange } from "../../redux/talent/talent.actions";

const TalentInput = ({
  talentLv,
  attackLv,
  skillLv,
  burstLv,
  greenTalent,
  blueTalent,
  purpleTalent,

  selectGreenTalentNeeded,
  selectBlueTalentNeeded,
  selectPurpleTalentNeeded,
  moraNeeded,
  commonMaterialWhite,
  commonMaterialWhiteNeeded,
  commonMaterialGreen,
  commonMaterialGreenNeeded,
  commonMaterialBlue,
  commonMaterialBlueNeeded,
  bossMaterial,
  bossMaterialNeeded,
  selectCrown,
  selectCrownNeeded,
  handleChange,
}) => {
  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     this.setState({ [name]: value });
  //   };
  console.log(greenTalent);
  return (
    <div className="talent-input">
      <div className="material-input-container">
        <div>Talent Books Needed</div>
        <div className="input-row">
          <FormDropdown
            options={talentLv}
            label="normal attack"
            name="attackLv"
            value={attackLv}
            handleChange={(e) => handleChange(e.target)}
          />
          <FormDropdown
            options={talentLv}
            label="elemental skill"
            name="skillLv"
            value={skillLv}
            handleChange={(e) => handleChange(e.target)}
          />
          <FormDropdown
            options={talentLv}
            label="elemental burst"
            name="burstLv"
            value={burstLv}
            handleChange={(e) => handleChange(e.target)}
          />
        </div>
      </div>
      <div className="material-input-container">
        <div>Talent Books</div>
        <div className="input-row">
          <FormInput
            label="green"
            name="greenTalent"
            type="number"
            value={greenTalent}
            handleChange={(e) => handleChange(e.target)}
          />
          <FormInput
            label="blue"
            name="blueTalent"
            type="number"
            value={blueTalent}
            handleChange={(e) => handleChange(e.target)}
          />
          <FormInput
            label="purple"
            name="purpleTalent"
            type="number"
            value={purpleTalent}
            handleChange={(e) => handleChange(e.target)}
          />
        </div>
      </div>
      <div className="material-input-container">
        <div>Common Materials</div>
        <div className="input-row">
          <FormInput
            label="white"
            name="commonMaterialWhite"
            type="number"
            value={commonMaterialWhite}
            handleChange={(e) => handleChange(e.target)}
          />
          <FormInput
            label="green"
            name="commonMaterialGreen"
            type="number"
            value={commonMaterialGreen}
            handleChange={(e) => handleChange(e.target)}
          />
          <FormInput
            label="blue"
            name="commonMaterialBlue"
            type="number"
            value={commonMaterialBlue}
            handleChange={(e) => handleChange(e.target)}
          />
        </div>
      </div>
      <div className="material-input-container">
        <div>Boss Material</div>
        <div className="input-row">
          <FormInput
            label="orange"
            name="bossMaterial"
            type="number"
            value={bossMaterial}
            handleChange={(e) => handleChange(e.target)}
          />
        </div>
      </div>
      <div className="material-input-container">
        <div>Crown</div>
        <div className="input-row">
          <FormInput
            label="orange"
            name="crown"
            type="number"
            value={bossMaterial}
            handleChange={(e) => handleChange(e.target)}
          />
        </div>
      </div>

      <div className="material-input-container">
        <div>Mora</div>
        <div className="input-row">
          <FormInput
            label="mora needed"
            name="moraNeeded"
            type="number"
            value={moraNeeded}
            handleChange={(e) => handleChange(e.target)}
          />
        </div>
      </div>
      <CustomButton onClick={() => console.log("a")} center>
        Submit
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  greenTalent: selectGreenTalent(state),
  blueTalent: selectBlueTalent(state),
  purpleTalent: selectPurpleTalent(state),
  selectGreenTalentNeeded: selectGreenTalentNeeded(state),
  selectBlueTalentNeeded: selectBlueTalentNeeded(state),
  selectPurpleTalentNeeded: selectPurpleTalentNeeded(state),
  moraNeeded: selectMoraNeeded(state),
  talentLv: selectTalentLv(state),
  atkLv: selectAttackLv(state),
  skillLv: selectSkillLv(state),
  burstLv: selectBurstLv(state),
  commonMaterialWhite: selectCommonMaterialWhite(state),
  commonMaterialWhiteNeeded: selectCommonMaterialWhiteNeeded(state),
  commonMaterialGreen: selectCommonMaterialGreen(state),
  commonMaterialGreenNeeded: selectCommonMaterialGreenNeeded(state),
  commonMaterialBlue: selectCommonMaterialBlue(state),
  commonMaterialBlueNeeded: selectCommonMaterialBlueNeeded(state),
  bossMaterial: selectBossMaterial(state),
  bossMaterialNeeded: selectBossMaterialNeeded(state),
  crown: selectCrown(state),
  crownNeeded: selectCrownNeeded(state),
});
const mapDispatchToProps = (dispatch) => ({
  handleChange: (change) => dispatch(handleChange(change)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TalentInput);
