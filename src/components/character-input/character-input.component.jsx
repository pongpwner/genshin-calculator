import React, { useEffect } from "react";
import "./character-input.styles.scss";
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
}) => {
  useEffect(handleSubmit, [
    gemGreen,
    gemBlue,
    gemPurple,
    gemOrange,
    commonMaterialWhite,
    commonMaterialGreen,
    commonMaterialBlue,
    localSpecialty,
    mora,
    heroWitGreen,
    heroWitBlue,
    heroWitPurple,
    bossMaterial,
    currentLevel,
    desiredLevel,
    currentRadioButton,
    desiredRadioButton,
    handleSubmit,
  ]);
  return (
    <div className="character-input">
      <div className="input-container">
        <div className="level-input-container">
          <FormDropdown
            name="currentLevel"
            label="Current Level"
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

        <div className="level-input-container">
          <FormDropdown
            name="desiredLevel"
            label="Desired Level"
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

        <div className="material-input-container">
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/character-ascension-material-jewel/?lang=EN"
          >
            Jewels
          </a>
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
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/character-ascension-material-secondary-material/?lang=EN"
          >
            Common Material
          </a>
          <div className="input-row">
            <FormInput
              label="white"
              name="commonMaterialWhiteC"
              type="number"
              value={commonMaterialWhite}
              handleChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="green"
              name="commonMaterialGreenC"
              type="number"
              value={commonMaterialGreen}
              handleChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="blue"
              name="commonMaterialBlueC"
              type="number"
              value={commonMaterialBlue}
              handleChange={(e) => handleChange(e.target)}
            ></FormInput>
          </div>
        </div>
        <div className="material-input-container">
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/character-exp-material/?lang=EN"
          >
            EXP
          </a>
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
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/character-ascension-material-elemental-stone/?lang=EN"
          >
            Boss Material
          </a>
          <div className="input-row">
            <FormInput
              label="purple"
              name="bossMaterialC"
              type="number"
              value={bossMaterial}
              handleChange={(e) => handleChange(e.target)}
            ></FormInput>
          </div>
        </div>

        <div className="material-input-container">
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/character-ascension-material-local-material/?lang=EN"
          >
            Local Specialty
          </a>
          <div className="input-row">
            <FormInput
              label="white"
              name="localSpecialtyC"
              type="number"
              value={localSpecialty}
              handleChange={(e) => handleChange(e.target)}
            ></FormInput>
          </div>
        </div>

        <div className="material-input-container">
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/i_2001/?lang=EN"
          >
            Mora
          </a>
          <div className="input-row">
            <FormInput
              label=""
              name="moraC"
              type="number"
              value={mora}
              handleChange={(e) => handleChange(e.target)}
            ></FormInput>
          </div>
        </div>
      </div>
    </div>
  );
};
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
