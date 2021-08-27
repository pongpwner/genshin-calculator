import React from "react";
import "./character-input.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import FormDropdown from "../form-dropdown/form-dropdown.component";
import FormInput from "../form-input/form-input.component";
import CustomRadioGroup from "../custom-radio-group/custom-radio-group.component";
import { connect } from "react-redux";
import {
  selectBossMaterial,
  selectCommonMaterialBlue,
  selectCommonMaterialGreen,
  selectCommonMaterialWhite,
  selectCurrentLevel,
  selectCurrentRadioButton,
  selectDesiredLevel,
  selectDesiredRadioButton,
  selectDropdown,
  selectGemBlue,
  selectGemGreen,
  selectGemOrange,
  selectGemPurple,
  selectHeroWitBlue,
  selectHeroWitGreen,
  selectHeroWitPurple,
  selectLocalSpecialty,
  selectMora,
  selectRadioButtonOptions,
} from "../../redux/character/character.selector";
import {
  handleChange,
  handleRadioButton,
  handleCurrentLevel,
  handleDesiredLevel,
  handleSubmit,
} from "../../redux/character/character.actions";

const CharacterInput = ({
  currentLevel,
  desiredLevel,
  currentRadioButton,
  desiredRadioButton,
  radioButtonOptions,
  dropdown,
  gemGreen,
  gemBlue,
  gemPurple,
  gemOrange,
  bossMaterial,
  handleChange,
  handleRadioButton,
  commonMaterialWhite,
  commonMaterialGreen,
  commonMaterialBlue,
  localSpecialty,
  mora,
  heroWitGreen,
  heroWitBlue,
  heroWitPurple,
  handleCurrentLevel,
  handleDesiredLevel,
  handleSubmit,
}) => (
  <div className="character-input">
    <div className="input-container">
      <div className="material-input-container">
        <div>Current Character Level</div>
        <div className="input-row">
          <FormDropdown
            name="currentLevel"
            label="current level"
            options={dropdown.levels}
            value={currentLevel}
            handleChange={(e) => handleCurrentLevel(e)}
          />
          <CustomRadioGroup
            options={radioButtonOptions.current}
            label="Ascended?:"
            handleChange={(e) => handleRadioButton(e)}
            value={currentRadioButton}
            data-ascension="sumCurrentAscension"
            data-currentAscension="currentAscension"
          ></CustomRadioGroup>
        </div>
      </div>
      <div className="material-input-container">
        <div>Desired Character Level</div>
        <div className="input-row">
          <FormDropdown
            name="desiredLevel"
            label="desired level"
            options={dropdown.levels}
            value={desiredLevel}
            handleChange={(e) => handleDesiredLevel(e)}
          />
          <CustomRadioGroup
            options={radioButtonOptions.desired}
            label="Ascended?:"
            handleChange={(e) => handleRadioButton(e)}
            value={desiredRadioButton}
            data-ascension="sumDesiredAscension"
            data-currentAscension="desiredAscension"
          ></CustomRadioGroup>
        </div>
      </div>
      <div className="material-input-container">
        <div>Gemstones</div>
        <div className="input-row">
          <FormInput
            label="green"
            name="gemGreen"
            type="number"
            value={gemGreen}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
          <FormInput
            label="blue"
            name="gemBlue"
            type="number"
            value={gemBlue}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
          <FormInput
            label="purple"
            name="gemPurple"
            type="number"
            value={gemPurple}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
          <FormInput
            label="orange"
            name="gemOrange"
            type="number"
            value={gemOrange}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
        </div>
      </div>

      <div className="material-input-container">
        <div>Common Material</div>
        <div className="input-row">
          <FormInput
            label="white"
            name="commonMaterialWhite"
            type="number"
            value={commonMaterialWhite}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
          <FormInput
            label="green"
            name="commonMaterialGreen"
            type="number"
            value={commonMaterialGreen}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
          <FormInput
            label="blue"
            name="commonMaterialBlue"
            type="number"
            value={commonMaterialBlue}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
        </div>
      </div>
      <div className="material-input-container">
        <div>EXP</div>
        <div className="input-row">
          <FormInput
            label="green"
            name="heroWitGreen"
            type="number"
            value={heroWitGreen}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
          <FormInput
            label="blue"
            name="heroWitBlue"
            type="number"
            value={heroWitBlue}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
          <FormInput
            label="purple"
            name="heroWitPurple"
            type="number"
            value={heroWitPurple}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
        </div>
      </div>

      <div className="material-input-container">
        <div>Boss Material</div>
        <div className="input-row">
          <FormInput
            label="purple"
            name="bossMaterial"
            type="number"
            value={bossMaterial}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
        </div>
      </div>

      <div className="material-input-container">
        <div>Local Specialty</div>
        <div className="input-row">
          <FormInput
            label="white"
            name="localSpecialty"
            type="number"
            value={localSpecialty}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
        </div>
      </div>

      <div className="material-input-container">
        <div>Mora</div>
        <div className="input-row">
          <FormInput
            label="white"
            name="mora"
            type="number"
            value={mora}
            handleChange={(e) => handleChange(e.target)}
          ></FormInput>
        </div>
      </div>
      <CustomButton center onClick={handleSubmit}>
        Submit
      </CustomButton>
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  currentLevel: selectCurrentLevel(state),
  desiredLevel: selectDesiredLevel(state),
  dropdown: selectDropdown(state),
  currentRadioButton: selectCurrentRadioButton(state),
  desiredRadioButton: selectDesiredRadioButton(state),
  radioButtonOptions: selectRadioButtonOptions(state),

  gemGreen: selectGemGreen(state),
  gemBlue: selectGemBlue(state),
  gemPurple: selectGemPurple(state),
  gemOrange: selectGemOrange(state),
  commonMaterialWhite: selectCommonMaterialWhite(state),
  commonMaterialGreen: selectCommonMaterialGreen(state),
  commonMaterialBlue: selectCommonMaterialBlue(state),
  bossMaterial: selectBossMaterial(state),
  localSpecialty: selectLocalSpecialty(state),
  mora: selectMora(state),
  heroWitGreen: selectHeroWitGreen(state),
  heroWitBlue: selectHeroWitBlue(state),
  heroWitPurple: selectHeroWitPurple(state),
});
const mapDispatchToProps = (dispatch) => ({
  handleChange: (change) => dispatch(handleChange(change)),
  handleRadioButton: (e) => dispatch(handleRadioButton(e)),
  handleCurrentLevel: (e) => dispatch(handleCurrentLevel(e)),
  handleDesiredLevel: (e) => dispatch(handleDesiredLevel(e)),
  handleSubmit: (e) => dispatch(handleSubmit(e)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CharacterInput);
