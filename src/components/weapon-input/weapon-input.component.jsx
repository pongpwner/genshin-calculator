import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./weapon-input.styles.scss";
import FormDropdown from "../form-dropdown/form-dropdown.component";
import FormInput from "../form-input/form-input.component";
import CustomRadioGroup from "../custom-radio-group/custom-radio-group.component";
import WEAPON from "../../pages/weapon/weapon";
import {
  CURRENT_ASCENSION_RADIO_BUTTONS,
  DESIRED_ASCENSION_RADIO_BUTTONS,
} from "../../pages/weapon/component-arrays/ascension-radio-buttons";
import {
  selectBlueOre,
  selectCommonMaterialBlue,
  selectCommonMaterialGreen,
  selectCommonMaterialWhite,
  selectCurrentLevel,
  selectCurrentRadioButton,
  selectDesiredLevel,
  selectDesiredRadioButton,
  selectDomainMaterialBlue,
  selectDomainMaterialGreen,
  selectDomainMaterialOrange,
  selectDomainMaterialPurple,
  selectEliteMaterialBlue,
  selectEliteMaterialGreen,
  selectEliteMaterialPurple,
  selectGreenOre,
  selectMora,
  selectRarity,
  selectWhiteOre,
} from "../../redux/weapon/weapon.selectors";
import {
  handleChange,
  handleSubmit,
  handleRadioButton,
  handleCurrentLevel,
  handleDesiredLevel,
} from "../../redux/weapon/weapon.actions";
const WeaponInput = ({
  rarity,
  currentLevel,
  currentRadioButton,
  desiredLevel,
  desiredRadioButton,
  domainMaterialGreen,
  domainMaterialBlue,
  domainMaterialPurple,
  domainMaterialOrange,
  eliteMaterialGreen,
  eliteMaterialBlue,
  eliteMaterialPurple,
  commonMaterialWhite,
  commonMaterialGreen,
  commonMaterialBlue,
  whiteOre,
  greenOre,
  blueOre,
  mora,
  handleSubmit,
  handleChange,
  handleRadioButton,
  handleDesiredLevel,
  handleCurrentLevel,
}) => {
  useEffect(handleSubmit, [
    rarity,
    currentLevel,
    currentRadioButton,
    desiredLevel,
    desiredRadioButton,
    domainMaterialGreen,
    domainMaterialBlue,
    domainMaterialPurple,
    domainMaterialOrange,
    eliteMaterialGreen,
    eliteMaterialBlue,
    eliteMaterialPurple,
    commonMaterialWhite,
    commonMaterialGreen,
    commonMaterialBlue,
    whiteOre,
    greenOre,
    blueOre,
    mora,
    handleSubmit,
  ]);
  return (
    <div className="weapon-input">
      <div className="input-container">
        <div className="material-input-container">
          <FormDropdown
            name="rarity"
            label="Weapon Rarity"
            options={WEAPON.rarity}
            value={rarity}
            handleChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className="level-input-container">
          <FormDropdown
            name="currentLevel"
            handleChange={(e) => handleCurrentLevel(e)}
            label="Current Level"
            value={currentLevel}
            options={WEAPON[rarity].level}
          />
          <CustomRadioGroup
            options={CURRENT_ASCENSION_RADIO_BUTTONS}
            label="Ascended?: "
            handleChange={(e) => handleRadioButton(e)}
            value={currentRadioButton}
            data-ascension="sumCurrentAscension"
            data-currentAscension="currentAscension"
          ></CustomRadioGroup>
        </div>

        <div className="level-input-container">
          <FormDropdown
            name="desiredLevel"
            handleChange={(e) => handleDesiredLevel(e)}
            label="Desired Level"
            value={desiredLevel}
            options={WEAPON[rarity].level}
          />
          <CustomRadioGroup
            options={DESIRED_ASCENSION_RADIO_BUTTONS}
            label="Ascended?: "
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
            href="https://genshin.honeyhunterworld.com/db/item/weapon-ascension-material-primary/?lang=EN"
          >
            Domain Material
          </a>
          <div className="input-row">
            <FormInput
              label="green"
              name="domainMaterialGreen"
              type="number"
              value={domainMaterialGreen}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="blue"
              name="domainMaterialBlue"
              type="number"
              value={domainMaterialBlue}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="purple"
              name="domainMaterialPurple"
              type="number"
              value={domainMaterialPurple}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>

            <FormInput
              label="orange"
              name="domainMaterialOrange"
              type="number"
              value={domainMaterialOrange}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
          </div>
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/weapon-ascension-material-secondary-material/?lang=EN"
          >
            Weapon Material
          </a>
          <div className="input-row">
            <FormInput
              label="green"
              name="eliteMaterialGreen"
              type="number"
              value={eliteMaterialGreen}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="blue"
              name="eliteMaterialBlue"
              type="number"
              value={eliteMaterialBlue}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="purple"
              name="eliteMaterialPurple"
              type="number"
              value={eliteMaterialPurple}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
          </div>
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
              name="commonMaterialWhite"
              type="number"
              value={commonMaterialWhite}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="green"
              name="commonMaterialGreen"
              type="number"
              value={commonMaterialGreen}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="blue"
              name="commonMaterialBlue"
              type="number"
              value={commonMaterialBlue}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
          </div>
        </div>
        <div className="material-input-container">
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/weapon-exp-material/?lang=EN"
          >
            Enhancement Ore
          </a>
          <div className="input-row">
            <FormInput
              label="white"
              name="whiteOre"
              type="number"
              value={whiteOre}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="green"
              name="greenOre"
              type="number"
              value={greenOre}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
            <FormInput
              label="blue"
              name="blueOre"
              type="number"
              value={blueOre}
              onChange={(e) => handleChange(e.target)}
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
              label="blue"
              name="mora"
              type="number"
              value={mora}
              onChange={(e) => handleChange(e.target)}
            ></FormInput>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rarity: selectRarity(state),
  currentLevel: selectCurrentLevel(state),
  currentRadioButton: selectCurrentRadioButton(state),
  desiredLevel: selectDesiredLevel(state),
  desiredRadioButton: selectDesiredRadioButton(state),
  domainMaterialGreen: selectDomainMaterialGreen(state),
  domainMaterialBlue: selectDomainMaterialBlue(state),
  domainMaterialPurple: selectDomainMaterialPurple(state),
  domainMaterialOrange: selectDomainMaterialOrange(state),
  eliteMaterialGreen: selectEliteMaterialGreen(state),
  eliteMaterialBlue: selectEliteMaterialBlue(state),
  eliteMaterialPurple: selectEliteMaterialPurple(state),
  commonMaterialWhite: selectCommonMaterialWhite(state),
  commonMaterialGreen: selectCommonMaterialGreen(state),
  commonMaterialBlue: selectCommonMaterialBlue(state),
  whiteOre: selectWhiteOre(state),
  greenOre: selectGreenOre(state),
  blueOre: selectBlueOre(state),
  mora: selectMora(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (change) => dispatch(handleChange(change)),
  handleSubmit: (event) => dispatch(handleSubmit(event)),
  handleCurrentLevel: (level) => dispatch(handleCurrentLevel(level)),
  handleDesiredLevel: (level) => dispatch(handleDesiredLevel(level)),
  handleRadioButton: (e) => dispatch(handleRadioButton(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeaponInput);
