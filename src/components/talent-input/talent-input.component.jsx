import React, { useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import FormDropdown from "../form-dropdown/form-dropdown.component";
import MainSectionContainer from "../main-section-container/main-section-container.component";
import SubSectionContainer from "../sub-section-container/sub-section-container.component";
import "./talent-input.styles.scss";
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
  selectCurrentAttackLv,
  selectCurrentSkillLv,
  selectCurrentBurstLv,
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
  selectMora,
} from "../../redux/talent/talent.selector";
import { handleChange, handleSubmit } from "../../redux/talent/talent.actions";

const TalentInput = ({
  talentLv,
  attackLv,
  skillLv,
  burstLv,
  currentAttackLv,
  currentSkillLv,
  currentBurstLv,
  greenTalent,
  blueTalent,
  purpleTalent,
  mora,
  commonMaterialWhite,
  commonMaterialGreen,
  commonMaterialBlue,
  bossMaterial,
  crown,
  handleSubmit,
  handleChange,
}) => {
  useEffect(
    handleSubmit,

    [
      attackLv,
      skillLv,
      burstLv,
      currentAttackLv,
      currentSkillLv,
      currentBurstLv,
      greenTalent,
      blueTalent,
      purpleTalent,
      mora,
      commonMaterialWhite,
      commonMaterialGreen,
      commonMaterialBlue,
      bossMaterial,
      crown,
      handleSubmit,
    ]
  );
  console.log(skillLv);
  return (
    <div className="talent-input">
      <MainSectionContainer>
        <SubSectionContainer>
          <div>Current Talent Level</div>
          <div className="flex-row mobile-column">
            <FormDropdown
              options={talentLv}
              label=" normal attack"
              name="currentAttackLv"
              value={currentAttackLv}
              handleChange={(e) => handleChange(e)}
            />
            <FormDropdown
              options={talentLv}
              label="elemental skill"
              name="currentSkillLv"
              value={currentSkillLv}
              handleChange={(e) => handleChange(e)}
            />
            <FormDropdown
              options={talentLv}
              label="elemental burst"
              name="currentBurstLv"
              value={currentBurstLv}
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </SubSectionContainer>

        <SubSectionContainer>
          <div>Desired Talent Level</div>
          <div className="flex-row mobile-column">
            <FormDropdown
              options={talentLv}
              label="normal attack"
              name="attackLv"
              value={attackLv}
              handleChange={(e) => handleChange(e)}
            />
            <FormDropdown
              options={talentLv}
              label="elemental skill"
              name="skillLv"
              value={skillLv}
              handleChange={(e) => handleChange(e)}
            />
            <FormDropdown
              options={talentLv}
              label="elemental burst"
              name="burstLv"
              value={burstLv}
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </SubSectionContainer>

        <SubSectionContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/talent-level-up-material/?lang=EN"
          >
            Talent Books
          </a>
          <div className="flex-row">
            <FormInput
              label="green"
              name="greenTalent"
              type="number"
              value={greenTalent}
              handleChange={(e) => handleChange(e)}
            />
            <FormInput
              label="blue"
              name="blueTalent"
              type="number"
              value={blueTalent}
              handleChange={(e) => handleChange(e)}
            />
            <FormInput
              label="purple"
              name="purpleTalent"
              type="number"
              value={purpleTalent}
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </SubSectionContainer>

        <SubSectionContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/character-ascension-material-secondary-material/?lang=EN"
          >
            Common Material
          </a>
          <div className="flex-row">
            <FormInput
              label="white"
              name="commonMaterialWhite"
              type="number"
              value={commonMaterialWhite}
              handleChange={(e) => handleChange(e)}
            />
            <FormInput
              label="green"
              name="commonMaterialGreen"
              type="number"
              value={commonMaterialGreen}
              handleChange={(e) => handleChange(e)}
            />
            <FormInput
              label="blue"
              name="commonMaterialBlue"
              type="number"
              value={commonMaterialBlue}
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </SubSectionContainer>

        <SubSectionContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/talent-level-up-material/?lang=EN"
          >
            Boss Material
          </a>
          <div className="flex-row">
            <FormInput
              label="orange"
              name="bossMaterial"
              type="number"
              value={bossMaterial}
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </SubSectionContainer>

        <SubSectionContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/talent-level-up-material/?lang=EN"
          >
            Crown
          </a>
          <div className="flex-row">
            <FormInput
              label="orange"
              name="crown"
              type="number"
              value={crown}
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </SubSectionContainer>

        <SubSectionContainer>
          <a
            className="info-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://genshin.honeyhunterworld.com/db/item/i_2001/?lang=EN"
          >
            Mora
          </a>
          <div className="flex-row">
            <FormInput
              label="blue"
              name="mora"
              type="number"
              value={mora}
              handleChange={(e) => handleChange(e)}
            />
          </div>
        </SubSectionContainer>
      </MainSectionContainer>
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
  attackLv: selectAttackLv(state),
  skillLv: selectSkillLv(state),
  burstLv: selectBurstLv(state),
  currentAttackLv: selectCurrentAttackLv(state),
  currentSkillLv: selectCurrentSkillLv(state),
  currentBurstLv: selectCurrentBurstLv(state),
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
  mora: selectMora(state),
});
const mapDispatchToProps = (dispatch) => ({
  handleChange: (change) => dispatch(handleChange(change)),
  handleSubmit: (event) => dispatch(handleSubmit(event)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TalentInput);
