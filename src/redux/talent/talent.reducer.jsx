import { TalentActionTypes } from "./talent.types";
import { submit } from "./talent.utils";
import TALENT_DATA from "../../pages/talent/talent.data";
const INITIAL_STATE = {
  attackLv: 1,
  skillLv: 1,
  burstLv: 1,
  moraNeeded: 0,
  greenTalentNeeded: 0,
  blueTalentNeeded: 0,
  purpleTalentNeeded: 0,
  commonMaterialWhiteNeeded: 0,
  commonMaterialGreenNeeded: 0,
  commonMaterialBlueNeeded: 0,
  bossMaterialNeeded: 0,
  greenTalent: 0,
  blueTalent: 0,
  purpleTalent: 0,
  commonMaterialWhite: 0,
  commonMaterialGreen: 0,
  commonMaterialBlue: 0,
  bossMaterial: 0,
  crown: 0,
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
      return { ...state, [action.payload.name]: Number(action.payload.value) };
    case TalentActionTypes.HANDLE_SUBMIT:
      submit(state);
      return;

    default:
      return state;
  }
};

export default talentReducer;
