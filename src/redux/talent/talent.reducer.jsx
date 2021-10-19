import { TalentActionTypes } from "./talent.types";

import TALENT_DATA from "../../pages/talent/talent.data";
const INITIAL_STATE = {
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
  subsections: [
    { label: "Mora Needed:", value: "moraNeeded", type: 1, id: 0 },
    {
      label: "Crown Needed",
      value: "crownNeeded",
      type: 1,
      id: 1,
    },
    {
      label: "Boss Material Needed",
      value: "bossMaterialNeeded",
      type: 1,
      id: 1,
    },

    {
      mainHeader: "Talent Materials",
      type: 2,
      id: 3,
      header1: "Materials Needed",
      materialsNeeded: [
        { label: "green:", value: "greenTalentNeeded" },
        { label: "blue:", value: "blueTalentNeeded" },
        { label: "purple:", value: "purpleTalentNeeded" },
      ],
      header2: "Materials left",
      materialsLeft: [
        { label: "green:", value: "greenTalentRemaining" },
        { label: "blue:", value: "blueTalentRemaining" },
        { label: "purple:", value: "purpleTalentRemaining" },
      ],
    },
    {
      mainHeader: "Common Materials",
      type: 2,
      id: 4,
      header1: "Materials Needed",
      materialsNeeded: [
        { label: "white:", value: "commonMaterialWhiteNeeded" },
        { label: "green:", value: "commonMaterialGreenNeeded" },
        { label: "blue:", value: "commonMaterialBlueNeeded" },
      ],
      header2: "Materials left",
      materialsLeft: [
        { label: "white:", value: "commonMaterialWhiteRemaining" },
        { label: "green:", value: "commonMaterialGreenRemaining" },
        { label: "blue:", value: "commonMaterialBlueRemaining" },
      ],
    },
  ],
};

const talentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TalentActionTypes.HANDLE_CHANGE:
      return { ...state, [action.payload.name]: Number(action.payload.value) };
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
      //n... is how many are needed. t... is how many you have
      let nGreen = 0;
      let nBlue = 0;
      let nPurple = 0;
      let nMora = 0;
      let nCrown = 0;
      let nBoss = 0;
      let nCWhite = 0;
      let nCGreen = 0;
      let nCBlue = 0;

      // over flow

      let oGreen = 0;
      let oBlue = 0;
      let oPurple = 0;
      let oCWhite = 0;
      let oCGreen = 0;
      let oCBlue = 0;

      // underflow
      let uGreen = 0;
      let uBlue = 0;
      let uPurple = 0;
      let uCWhite = 0;
      let uCGreen = 0;
      let uCBlue = 0;

      //potential material
      //no green
      let pBlue = 0;
      let pPurple = 0;
      let pCGreen = 0;
      let pCBlue = 0;

      // remaining material
      let rGreen = 0;
      let rBlue = 0;
      let rPurple = 0;
      let rCWhite = 0;
      let rCGreen = 0;
      let rCBlue = 0;

      //missing material
      let mGreen = 0;
      let mBlue = 0;
      let mPurple = 0;
      let mCWhite = 0;
      let mCGreen = 0;
      let mCBlue = 0;

      //

      //calculating how many talent materials are needed
      for (let i = currentAttackLv; i < attackLv; i++) {
        nGreen += talentCost[i].greenTalent;
        nBlue += talentCost[i].blueTalent;
        nPurple += talentCost[i].purpleTalent;
        nMora += talentCost[i].mora;
        nBoss += talentCost[i].bossMaterial;
        nCrown += talentCost[i].crown;
        nCWhite += talentCost[i].commonMaterialWhite;
        nCGreen += talentCost[i].commonMaterialGreen;
        nCBlue += talentCost[i].commonMaterialBlue;
      }
      for (let i = currentSkillLv; i < skillLv; i++) {
        nGreen += talentCost[i].greenTalent;
        nBlue += talentCost[i].blueTalent;
        nPurple += talentCost[i].purpleTalent;
        nMora += talentCost[i].mora;
        nBoss += talentCost[i].bossMaterial;
        nCrown += talentCost[i].crown;
        nCWhite += talentCost[i].commonMaterialWhite;
        nCGreen += talentCost[i].commonMaterialGreen;
        nCBlue += talentCost[i].commonMaterialBlue;
      }
      for (let i = currentBurstLv; i < burstLv; i++) {
        nGreen += talentCost[i].greenTalent;
        nBlue += talentCost[i].blueTalent;
        nPurple += talentCost[i].purpleTalent;
        nMora += talentCost[i].mora;
        nBoss += talentCost[i].bossMaterial;
        nCrown += talentCost[i].crown;
        nCWhite += talentCost[i].commonMaterialWhite;
        nCGreen += talentCost[i].commonMaterialGreen;
        nCBlue += talentCost[i].commonMaterialBlue;
      }
      //calculate overflow and underflow
      if (nGreen - greenTalent < 0) {
        oGreen = Math.abs(nGreen - greenTalent);
      } else {
        uGreen = nGreen - greenTalent;
      }
      if (nBlue - blueTalent < 0) {
        oBlue = Math.abs(nBlue - blueTalent);
      } else {
        uBlue = nBlue - blueTalent;
      }
      if (nPurple - purpleTalent < 0) {
        oPurple = Math.abs(nPurple - purpleTalent);
      } else {
        uPurple = nPurple - purpleTalent;
      }

      if (nCWhite - commonMaterialWhite < 0) {
        oCWhite = Math.abs(nCWhite - commonMaterialWhite);
      } else {
        uCWhite = nCWhite - commonMaterialWhite;
      }
      if (nCGreen - commonMaterialGreen < 0) {
        oCGreen = Math.abs(nCGreen - commonMaterialGreen);
      } else {
        uCGreen = nCGreen - commonMaterialGreen;
      }
      if (nCBlue - commonMaterialBlue < 0) {
        oCBlue = Math.abs(nCBlue - commonMaterialBlue);
      } else {
        uCBlue = nCBlue - commonMaterialBlue;
      }

      // calculate what materials can be converted
      //can't convert green
      mGreen = Math.abs(0 - uGreen);
      //top block = underflow greater bottom block = over flow greater
      if (Math.floor(oGreen / 3) + oBlue - uBlue <= 0) {
        pBlue = 0;
        mBlue = Math.abs(Math.floor(oGreen / 3) + oBlue - uBlue);
      } else {
        pBlue = Math.floor(oGreen / 3) + oBlue - uBlue;
      }
      if (Math.floor(pBlue / 3) + oPurple - uPurple <= 0) {
        pPurple = 0;
        mPurple = Math.abs(Math.floor(pBlue / 3) + oPurple - uPurple);
      } else {
        pPurple = Math.floor(pBlue / 3) + oPurple - uPurple;
      }

      mCWhite = Math.abs(0 - uCWhite);

      if (Math.floor(oCWhite / 3) + oCGreen - uCGreen <= 0) {
        pCGreen = 0;
        mCGreen = Math.abs(Math.floor(oCWhite / 3) + oCGreen - uCGreen);
      } else {
        pCGreen = Math.floor(oCWhite / 3) + oCGreen - uCGreen;
      }
      if (Math.floor(pCGreen / 3) + oCBlue - uCBlue <= 0) {
        pCBlue = 0;
        mCBlue = Math.abs(Math.floor(pCGreen / 3) + oCBlue - uCBlue);
      } else {
        pCBlue = Math.floor(pCGreen / 3) + oCBlue - uCBlue;
      }

      //calculate remainders
      rGreen = oGreen % 3;
      rBlue = pBlue % 3;
      rPurple = pPurple;

      rCWhite = oCWhite % 3;
      rCGreen = pCGreen % 3;
      rCBlue = pCBlue;
      // final mora
      nMora = nMora - mora;
      nBoss = nBoss - bossMaterial;
      nCrown = nCrown - crown;

      return {
        ...state,
        purpleTalentNeeded: mPurple,
        blueTalentNeeded: mBlue,
        greenTalentNeeded: mGreen,
        greenTalentRemaining: rGreen,
        blueTalentRemaining: rBlue,
        purpleTalentRemaining: rPurple,
        moraNeeded: nMora,
        bossMaterialNeeded: nBoss,
        crownNeeded: nCrown,
        commonMaterialWhiteNeeded: mCWhite,
        commonMaterialGreenNeeded: mCGreen,
        commonMaterialBlueNeeded: mCBlue,
        commonMaterialWhiteRemaining: rCWhite,
        commonMaterialGreenRemaining: rCGreen,
        commonMaterialBlueRemaining: rCBlue,
      };

    default:
      return state;
  }
};

export default talentReducer;
