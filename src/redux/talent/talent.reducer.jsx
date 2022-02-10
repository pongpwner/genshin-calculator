import { TalentActionTypes } from "./talent.types";
import TALENT_DATA from "../../pages/talent/talent.data";
import {
  calculateTalent,
  calculateCommonMaterial,
  calculateMora,
  calculateCrowns,
  calculateBossMaterial,
  talentParams,
} from "./talent.utils";
const INITIAL_STATE = {
  crownRemaining: 0,
  moraRemaining: 0,
  bossMaterialRemaining: 0,
  currentAttackLv: 1,
  currentSkillLv: 1,
  currentBurstLv: 1,
  attackLv: 1,
  skillLv: 1,
  burstLv: 1,
  moraNeeded: 0,
  mora: "",
  greenTalentNeeded: 0,
  blueTalentNeeded: 0,
  purpleTalentNeeded: 0,
  greenTalentRemaining: 0,
  blueTalentRemaining: 0,
  purpleTalentRemaining: 0,
  commonMaterialWhiteNeeded: 0,
  commonMaterialGreenNeeded: 0,
  commonMaterialBlueNeeded: 0,
  commonMaterialWhiteRemaining: 0,
  commonMaterialGreenRemaining: 0,
  commonMaterialBlueRemaining: 0,
  bossMaterialNeeded: 0,
  greenTalent: "",
  blueTalent: "",
  purpleTalent: "",
  commonMaterialWhite: "",
  commonMaterialGreen: "",
  commonMaterialBlue: "",
  bossMaterial: "",
  crown: "",
  crownNeeded: 0,
  talentLv: [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
  ],

  talentCost: TALENT_DATA.level,
};

const talentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TalentActionTypes.HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.target.name]: Number(action.payload.target.value),
      };
    case TalentActionTypes.HANDLE_SUBMIT:
      const {
        currentAttackLv,
        currentSkillLv,
        currentBurstLv,
        attackLv,
        skillLv,
        burstLv,
        greenTalent,
        blueTalent,
        purpleTalent,
        talentCost,
        mora,
        bossMaterial,
        crown,
        commonMaterialWhite,
        commonMaterialGreen,
        commonMaterialBlue,
      } = state;
      calculateTalent(
        currentAttackLv,
        attackLv,
        currentSkillLv,
        skillLv,
        currentBurstLv,
        burstLv,
        greenTalent,
        blueTalent,
        purpleTalent
      );
      calculateCommonMaterial(
        currentAttackLv,
        attackLv,
        currentSkillLv,
        skillLv,
        currentBurstLv,
        burstLv,
        commonMaterialWhite,
        commonMaterialGreen,
        commonMaterialBlue
      );
      calculateMora(
        currentAttackLv,
        attackLv,
        currentSkillLv,
        skillLv,
        currentBurstLv,
        burstLv,
        mora
      );
      calculateCrowns(
        currentAttackLv,
        attackLv,
        currentSkillLv,
        skillLv,
        currentBurstLv,
        burstLv,
        crown
      );
      calculateBossMaterial(
        currentAttackLv,
        attackLv,
        currentSkillLv,
        skillLv,
        currentBurstLv,
        burstLv,
        bossMaterial
      );

      return {
        ...state,
        crownRemaining: talentParams.rCrown,
        moraRemaining: talentParams.rMora,
        bossMaterialRemaining: talentParams.rBossMaterial,
        purpleTalentNeeded: talentParams.mPurple,
        blueTalentNeeded: talentParams.mBlue,
        greenTalentNeeded: talentParams.mGreen,
        greenTalentRemaining: talentParams.rGreen,
        blueTalentRemaining: talentParams.rBlue,
        purpleTalentRemaining: talentParams.rPurple,
        moraNeeded: talentParams.nMora,
        bossMaterialNeeded: talentParams.nBoss,
        crownNeeded: talentParams.nCrown,
        commonMaterialWhiteNeeded: talentParams.mCWhite,
        commonMaterialGreenNeeded: talentParams.mCGreen,
        commonMaterialBlueNeeded: talentParams.mCBlue,
        commonMaterialWhiteRemaining: talentParams.rCWhite,
        commonMaterialGreenRemaining: talentParams.rCGreen,
        commonMaterialBlueRemaining: talentParams.rCBlue,
      };

    default:
      return state;
  }
};

export default talentReducer;
