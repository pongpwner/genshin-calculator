import React from "react";
import "./weapon-input.styles.css";
import FormDropdown from "../form-dropdown/form-dropdown.component";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import CustomRadioGroup from "../custom-radio-group/custom-radio-group.component";
import WEAPON from "../../pages/weapon/weapon";
import WEAPON_MATERIALS from "../../constants/weaponMaterials";
import {
  CURRENT_ASCENSION_RADIO_BUTTONS,
  DESIRED_ASCENSION_RADIO_BUTTONS,
} from "../../pages/weapon/component-arrays/ascension-radio-buttons";
const WeaponInput = ({
  rarity,
  currentLevel,
  currentRadioButton,
  handleChange,
  handleRadioButton,
  handleDesiredLevel,
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
  handleCurrentLevel,
}) => (
  <div className="weapon-input">
    <div className="input-container">
      <div className="material-input-container">
        <FormDropdown
          name="rarity"
          label="Weapon rarity"
          options={WEAPON.rarity}
          value={rarity}
          handleChange={handleChange}
        />
      </div>
      <div className="level-input-container">
        <FormDropdown
          name="currentLevel"
          handleChange={handleCurrentLevel}
          label="current level"
          value={currentLevel}
          options={WEAPON[rarity].level}
        />
        <CustomRadioGroup
          options={CURRENT_ASCENSION_RADIO_BUTTONS}
          label="Ascended?:"
          handleChange={handleRadioButton}
          value={currentRadioButton}
          data-ascension="sumCurrentAscension"
          data-currentAscension="currentAscension"
        ></CustomRadioGroup>
      </div>

      <div className="level-input-container">
        <FormDropdown
          name="desiredLevel"
          handleChange={handleDesiredLevel}
          label="desired level"
          value={desiredLevel}
          options={WEAPON[rarity].level}
        />
        <CustomRadioGroup
          options={DESIRED_ASCENSION_RADIO_BUTTONS}
          label="Ascended?:"
          handleChange={handleRadioButton}
          value={desiredRadioButton}
          data-ascension="sumDesiredAscension"
          data-currentAscension="desiredAscension"
        ></CustomRadioGroup>
      </div>

      <div className="material-input-container">
        <div>domain material: </div>
        <div className="input-row">
          <FormInput
            label="green"
            name="domainMaterialGreen"
            type="text"
            value={domainMaterialGreen}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            label="blue"
            name="domainMaterialBlue"
            type="text"
            value={domainMaterialBlue}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            label="purple"
            name="domainMaterialPurple"
            type="text"
            value={domainMaterialPurple}
            onChange={handleChange}
          ></FormInput>

          <FormInput
            label="orange"
            name="domainMaterialOrange"
            type="text"
            value={domainMaterialOrange}
            onChange={handleChange}
          ></FormInput>
        </div>
        <div>Elite Material:</div>
        <div className="input-row">
          <FormInput
            label="green"
            name="eliteMaterialGreen"
            type="text"
            value={eliteMaterialGreen}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            label="blue"
            name="eliteMaterialBlue"
            type="text"
            value={eliteMaterialBlue}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            label="purple"
            name="eliteMaterialPurple"
            type="text"
            value={eliteMaterialPurple}
            onChange={handleChange}
          ></FormInput>
        </div>
        <div>Common Material:</div>
        <div className="input-row">
          <FormInput
            label="white"
            name="commonMaterialWhite"
            type="text"
            value={commonMaterialWhite}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            label="green"
            name="commonMaterialGreen"
            type="text"
            value={commonMaterialGreen}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            label="blue"
            name="commonMaterialBlue"
            type="text"
            value={commonMaterialBlue}
            onChange={handleChange}
          ></FormInput>
        </div>
      </div>
      <div className="material-input-container">
        <div>Enhancement Ore</div>
        <div className="input-row">
          <FormInput
            label="white"
            name="whiteOre"
            type="text"
            value={whiteOre}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            label="green"
            name="greenOre"
            type="text"
            value={greenOre}
            onChange={handleChange}
          ></FormInput>
          <FormInput
            label="blue"
            name="blueOre"
            type="text"
            value={blueOre}
            onChange={handleChange}
          ></FormInput>
        </div>
      </div>
      <div className="material-input-container">
        <div>Mora:</div>
        <div className="input-row">
          <FormInput
            label="Mora"
            name="mora"
            type="text"
            value={mora}
            onChange={handleChange}
          ></FormInput>
        </div>
      </div>
      <CustomButton onClick={handleSubmit} center>
        Submit
      </CustomButton>
    </div>
  </div>
);

export default WeaponInput;