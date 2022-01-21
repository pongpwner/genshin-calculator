import { WeaponActionTypes } from "./weapon.types.js";
import WEAPON_MATERIALS from "../../constants/weaponMaterials";
import WEAPON from "../../pages/weapon/weapon";
const INITIAL_STATE = {
  mora: "",
  rarity: "threeStar",
  currentLevel: 0,
  desiredLevel: 7,
  domainMaterialOrange: "",
  domainMaterialPurple: "",
  domainMaterialBlue: "",
  domainMaterialGreen: "",
  eliteMaterialPurple: "",
  eliteMaterialBlue: "",
  eliteMaterialGreen: "",
  commonMaterialWhite: "",
  commonMaterialGreen: "",
  commonMaterialBlue: "",
  domainMaterialOrangeNeeded: 0,
  domainMaterialPurpleNeeded: 0,
  domainMaterialBlueNeeded: 0,
  domainMaterialGreenNeeded: 0,
  eliteMaterialPurpleNeeded: "",
  eliteMaterialBlueNeeded: "",
  eliteMaterialGreenNeeded: "",
  commonMaterialWhiteNeeded: 0,
  commonMaterialGreenNeeded: 0,
  commonMaterialBlueNeeded: 0,
  domainMaterialOrangeRemaining: 0,
  domainMaterialPurpleRemaining: 0,
  domainMaterialBlueRemaining: 0,
  domainMaterialGreenRemaining: 0,
  eliteMaterialPurpleRemaining: 0,
  eliteMaterialBlueRemaining: 0,
  eliteMaterialGreenRemaining: 0,
  commonMaterialWhiteRemaining: 0,
  commonMaterialGreenRemaining: 0,
  commonMaterialBlueRemaining: 0,
  moraNeeded: 0,
  moraRemaining: 0,
  currentAscension: 0,
  desiredAscension: 6,
  blueOre: "",
  blueOreRemaining: "",
  greenOre: "",
  whiteOre: "",
  blueOreNeeded: 0,
  currentRadioButton: 0,
  desiredRadioButton: 0,
  sumCurrentAscension: 0,
  sumDesiredAscension: 6,
};

const weaponReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeaponActionTypes.HANDLE_CHANGE:
      return { ...state, [action.payload.name]: action.payload.value };
    case WeaponActionTypes.HANDLE_RADIO_BUTTON:
      const { name, value } = action.payload.target;

      if (
        (state.currentLevel === 0 || state.currentLevel === 7) &&
        action.payload.target.getAttribute("data-currentAscension") ===
          "currentAscension"
      ) {
        return {
          ...state,
          [name]: Number(value),
          currentRadioButton: 0,
        };
      } else if (
        (state.desiredLevel === 0 || state.desiredLevel === 7) &&
        action.payload.target.getAttribute("data-currentAscension") ===
          "desiredAscension"
      ) {
        return {
          ...state,
          [name]: Number(value),
          desiredRadioButton: 0,
        };
      } else {
        return {
          ...state,
          [name]: Number(value),

          [action.payload.target.getAttribute("data-ascension")]:
            Number(
              state[action.payload.target.getAttribute("data-currentAscension")]
            ) + Number(value),
        };
      }

    case WeaponActionTypes.HANDLE_CURRENT_LEVEL:
      //assume weapon is not ascended

      switch (Number(action.payload.target.value)) {
        case 0:
          return {
            ...state,
            [action.payload.target.name]: Number(action.payload.target.value),
            currentAscension: 0,
            sumCurrentAscension: 0,
            currentRadioButton: 0,
          };

        case 1:
          if (state.currentRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 0,
              sumCurrentAscension: 0,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 0,
              sumCurrentAscension: 1,
            };
          }

        case 2:
          if (state.currentRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 1,
              sumCurrentAscension: 1,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 1,
              sumCurrentAscension: 2,
            };
          }

        case 3:
          if (state.currentRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 2,
              sumCurrentAscension: 2,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 2,
              sumCurrentAscension: 3,
            };
          }

        case 4:
          if (state.currentRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 3,
              sumCurrentAscension: 3,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 3,
              sumCurrentAscension: 4,
            };
          }

        case 5:
          if (state.currentRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 4,
              sumCurrentAscension: 4,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 4,
              sumCurrentAscension: 5,
            };
          }

        case 6:
          if (state.currentRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 5,
              sumCurrentAscension: 5,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              currentAscension: 5,
              sumCurrentAscension: 6,
            };
          }

        case 7:
          return {
            ...state,
            [action.payload.target.name]: Number(action.payload.target.value),
            currentAscension: 6,
            sumCurrentAscension: 6,
            currentRadioButton: 0,
          };

        default:
          return { state };
      }

    case WeaponActionTypes.HANDLE_DESIRED_LEVEL:
      //assume character is not ascended

      switch (Number(action.payload.target.value)) {
        case 0:
          return {
            ...state,
            [action.payload.target.name]: Number(action.payload.target.value),
            desiredAscension: 0,
            sumDesiredAscension: 0,
            desiredRadioButton: 0,
          };

        case 1:
          if (state.desiredRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 0,
              sumDesiredAscension: 0,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 0,
              sumDesiredAscension: 1,
            };
          }

        case 2:
          if (state.desiredRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 1,
              sumDesiredAscension: 1,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 1,
              sumDesiredAscension: 2,
            };
          }

        case 3:
          if (state.desiredRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 2,
              sumDesiredAscension: 2,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 2,
              sumDesiredAscension: 3,
            };
          }

        case 4:
          if (state.desiredRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 3,
              sumDesiredAscension: 3,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 3,
              sumDesiredAscension: 4,
            };
          }

        case 5:
          if (state.currentRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 4,
              sumDesiredAscension: 4,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 4,
              sumDesiredAscension: 5,
            };
          }

        case 6:
          if (state.desiredRadioButton === 0) {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 5,
              sumDesiredAscension: 5,
            };
          } else {
            return {
              ...state,
              [action.payload.target.name]: Number(action.payload.target.value),
              desiredAscension: 5,
              sumDesiredAscension: 6,
            };
          }

        case 7:
          return {
            ...state,
            [action.payload.target.name]: Number(action.payload.target.value),
            desiredAscension: 6,
            sumDesiredAscension: 6,
            desiredRadioButton: 0,
          };

        default:
          return { ...state };
      }

    case WeaponActionTypes.HANDLE_SUBMIT:
      const {
        sumCurrentAscension,
        sumDesiredAscension,
        domainMaterialOrange,
        domainMaterialPurple,
        domainMaterialBlue,
        domainMaterialGreen,
        eliteMaterialPurple,
        eliteMaterialBlue,
        eliteMaterialGreen,
        commonMaterialWhite,
        commonMaterialGreen,
        commonMaterialBlue,
        mora,
        rarity,
        currentLevel,
        desiredLevel,
        blueOre,
        greenOre,
        whiteOre,
      } = state;
      //calculation functions
      //calculate domain materials
      //n... is how many are needed. t... is how many you have
      let nGreen = 0;
      let nBlue = 0;
      let nPurple = 0;
      let nOrange = 0;
      // over flow

      let oGreen = 0;
      let oBlue = 0;
      let oPurple = 0;
      let oOrange = 0;
      // underflow
      let uGreen = 0;
      let uBlue = 0;
      let uPurple = 0;
      let uOrange = 0;

      //potential material
      //no green
      let pBlue = 0;
      let pPurple = 0;
      let pOrange = 0;
      // remaining material
      let rGreen = 0;
      let rBlue = 0;
      let rPurple = 0;
      let rOrange = 0;
      //missing material
      let mGreen = 0;
      let mBlue = 0;
      let mPurple = 0;
      let mOrange = 0;

      // gets how many of each material is needed
      for (
        let i = Number(sumCurrentAscension) + 1;
        i < sumDesiredAscension + 1;
        i++
      ) {
        nGreen += WEAPON[rarity].ascension[i].domainCost.green;
        nBlue += WEAPON[rarity].ascension[i].domainCost.blue;
        nPurple += WEAPON[rarity].ascension[i].domainCost.purple;
        nOrange += WEAPON[rarity].ascension[i].domainCost.orange;
      }
      //calculate overflow and underflow
      if (nGreen - domainMaterialGreen < 0) {
        oGreen = Math.abs(nGreen - domainMaterialGreen);
      } else {
        uGreen = nGreen - domainMaterialGreen;
      }
      if (nBlue - domainMaterialBlue < 0) {
        oBlue = Math.abs(nBlue - domainMaterialBlue);
      } else {
        uBlue = nBlue - domainMaterialBlue;
      }
      if (nPurple - domainMaterialPurple < 0) {
        oPurple = Math.abs(nPurple - domainMaterialPurple);
      } else {
        uPurple = nPurple - domainMaterialPurple;
      }
      if (nOrange - domainMaterialOrange < 0) {
        oOrange = Math.abs(nOrange - domainMaterialOrange);
      } else {
        uOrange = nOrange - domainMaterialOrange;
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
      if (Math.floor(pPurple / 3) + oOrange - uOrange <= 0) {
        pOrange = 0;
        mOrange = Math.abs(Math.floor(pPurple / 3) + oOrange - uOrange);
      } else {
        pOrange = Math.floor(pPurple / 3) + oOrange - uOrange;
      }

      //calculate remainders
      rGreen = oGreen % 3;
      rBlue = pBlue % 3;
      rPurple = pPurple % 3;
      rOrange = pOrange;

      //////////////////////////////////////////////////////////////calculate elite material

      //n... is how many are needed. t... is how many you have
      let nEGreen = 0;
      let nEBlue = 0;
      let nEPurple = 0;
      // over flow

      let oEGreen = 0;
      let oEBlue = 0;
      let oEPurple = 0;
      // underflow
      let uEGreen = 0;
      let uEBlue = 0;
      let uEPurple = 0;

      //potential material
      //no green
      let pEBlue = 0;
      let pEPurple = 0;

      // remaining material
      let rEGreen = 0;
      let rEBlue = 0;
      let rEPurple = 0;

      //missing material
      let mEGreen = 0;
      let mEBlue = 0;
      let mEPurple = 0;

      // gets how many of each material is needed
      for (
        let i = Number(sumCurrentAscension) + 1;
        i < sumDesiredAscension + 1;
        i++
      ) {
        nEGreen += WEAPON[rarity].ascension[i].eliteCost.green;
        nEBlue += WEAPON[rarity].ascension[i].eliteCost.blue;
        nEPurple += WEAPON[rarity].ascension[i].eliteCost.purple;
      }
      //calculate overflow and underflow
      if (nEGreen - eliteMaterialGreen < 0) {
        oEGreen = Math.abs(nEGreen - eliteMaterialGreen);
      } else {
        uEGreen = nEGreen - eliteMaterialGreen;
      }
      if (nEBlue - eliteMaterialBlue < 0) {
        oEBlue = Math.abs(nEBlue - eliteMaterialBlue);
      } else {
        uEBlue = nEBlue - eliteMaterialBlue;
      }
      if (nEPurple - eliteMaterialPurple < 0) {
        oEPurple = Math.abs(nEPurple - eliteMaterialPurple);
      } else {
        uEPurple = nEPurple - eliteMaterialPurple;
      }

      // calculate what materials can be converted
      //can't convert green
      mEGreen = Math.abs(0 - uEGreen);
      //top block = underflow greater bottom block = over flow greater
      if (Math.floor(oEGreen / 3) + oEBlue - uEBlue <= 0) {
        pEBlue = 0;
        mEBlue = Math.abs(Math.floor(oEGreen / 3) + oEBlue - uEBlue);
      } else {
        pEBlue = Math.floor(oEGreen / 3) + oEBlue - uEBlue;
      }
      if (Math.floor(pEBlue / 3) + oEPurple - uEPurple <= 0) {
        pEPurple = 0;
        mEPurple = Math.abs(Math.floor(pEBlue / 3) + oEPurple - uEPurple);
      } else {
        pEPurple = Math.floor(pEBlue / 3) + oEPurple - uEPurple;
      }

      //calculate remainders
      rEGreen = oEGreen % 3;
      rEBlue = pEBlue % 3;
      rEPurple = pEPurple;
      ////////////////////////////////////////////////////////////CALCULATE COMMON MATERIALS

      //n... is how many are needed. t... is how many you have
      let nCWhite = 0;
      let nCGreen = 0;
      let nCBlue = 0;

      // over flow

      let oCWhite = 0;
      let oCGreen = 0;
      let oCBlue = 0;

      // underflow
      let uCWhite = 0;
      let uCGreen = 0;
      let uCBlue = 0;

      //potential material
      //no white
      let pCGreen = 0;
      let pCBlue = 0;

      // remaining material
      let rCWhite = 0;
      let rCGreen = 0;
      let rCBlue = 0;

      //missing material
      let mCWhite = 0;
      let mCGreen = 0;
      let mCBlue = 0;

      // gets how many of each material is needed
      for (
        let i = Number(sumCurrentAscension) + 1;
        i < sumDesiredAscension + 1;
        i++
      ) {
        nCGreen += WEAPON[rarity].ascension[i].commonCost.green;
        nCBlue += WEAPON[rarity].ascension[i].commonCost.blue;
        nCWhite += WEAPON[rarity].ascension[i].commonCost.white;
      }
      //calculate overflow and underflow
      if (nCWhite - commonMaterialWhite < 0) {
        oCWhite = Math.abs(nCWhite - commonMaterialWhite);
      } else {
        uCWhite = nCWhite - commonMaterialWhite;
      }
      if (nGreen - commonMaterialGreen < 0) {
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
      mCWhite = Math.abs(0 - uCWhite);
      //top block = underflow greater bottom block = over flow greater
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
      rCWhite = oCWhite % 3;
      rCGreen = pCGreen % 3;
      rCBlue = pCBlue;

      ///////////////////////////////////////////////////////////////CALCULATE MORA

      let totalMora = 0;
      let rMora = mora;
      for (
        let i = Number(currentLevel) + 1;
        i < Number(desiredLevel) + 1;
        i++
      ) {
        totalMora += WEAPON[rarity].level[i].mora;
      }
      for (
        let i = Number(sumCurrentAscension) + 1;
        i < sumDesiredAscension + 1;
        i++
      ) {
        totalMora += WEAPON[rarity].ascension[i].mora;
      }
      if (totalMora - mora <= 0) {
        rMora = mora - totalMora;
        totalMora = 0;
      } else {
        rMora = mora - totalMora;
        totalMora = totalMora - mora;
      }

      //////////////////////////////////////////// calculate xp

      let totalXP =
        WEAPON_MATERIALS.enhancementOre.blue * blueOre +
        WEAPON_MATERIALS.enhancementOre.green * greenOre +
        WEAPON_MATERIALS.enhancementOre.white * whiteOre;
      let totalXPNeeded = 0;
      let xpNeeded = 0;
      let blueOreNeeded = 0;
      let blueOreRemaining;
      let totalBlueOre = Math.floor(
        totalXP / WEAPON_MATERIALS.enhancementOre.blue
      );

      for (
        let i = Number(currentLevel) + 1;
        i < Number(desiredLevel) + 1;
        i++
      ) {
        totalXPNeeded += WEAPON[rarity].level[i].exp;
      }
      if (totalXPNeeded - totalXP <= 0) {
        xpNeeded = 0;
      } else {
        xpNeeded = totalXPNeeded - totalXP;
      }
      blueOreNeeded = Math.ceil(
        xpNeeded / WEAPON_MATERIALS.enhancementOre.blue
      );
      console.log(totalBlueOre);
      console.log(blueOreNeeded);
      blueOreRemaining =
        totalBlueOre -
        Math.ceil(totalXPNeeded / WEAPON_MATERIALS.enhancementOre.blue);

      return {
        ...state,
        domainMaterialOrangeNeeded: mOrange,
        domainMaterialPurpleNeeded: mPurple,
        domainMaterialBlueNeeded: mBlue,
        domainMaterialGreenNeeded: mGreen,
        domainMaterialOrangeRemaining: rOrange,
        domainMaterialPurpleRemaining: rPurple,
        domainMaterialBlueRemaining: rBlue,
        domainMaterialGreenRemaining: rGreen,
        eliteMaterialPurpleNeeded: mEPurple,
        eliteMaterialBlueNeeded: mEBlue,
        eliteMaterialGreenNeeded: mEGreen,
        eliteMaterialPurpleRemaining: rEPurple,
        eliteMaterialBlueRemaining: rEBlue,
        eliteMaterialGreenRemaining: rEGreen,
        commonMaterialWhiteNeeded: mCWhite,
        commonMaterialBlueNeeded: mCBlue,
        commonMaterialGreenNeeded: mCGreen,
        commonMaterialWhiteRemaining: rCWhite,
        commonMaterialBlueRemaining: rCBlue,
        commonMaterialGreenRemaining: rCGreen,
        moraNeeded: totalMora,
        moraRemaining: rMora,
        blueOreNeeded: blueOreNeeded,
        blueOreRemaining: blueOreRemaining,
      };
    default:
      return { ...state };
  }
};

export default weaponReducer;
