import { WeaponActionTypes } from "./weapon.types.js";
import WEAPON_MATERIALS from "../../constants/weaponMaterials";
import WEAPON from "../../pages/weapon/weapon";
import {
  WeaponCalculationParams,
  calculateXP,
  calculateDomainMaterial,
  calculateWeaponMaterial,
  calculateCommonMaterial,
  calculateMora,
} from "./weapon.utils.js";
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
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
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
      calculateXP(
        rarity,
        currentLevel,
        desiredLevel,
        whiteOre,
        greenOre,
        blueOre
      );
      calculateDomainMaterial(
        rarity,
        sumCurrentAscension,
        sumDesiredAscension,
        domainMaterialGreen,
        domainMaterialBlue,
        domainMaterialPurple,
        domainMaterialOrange
      );
      calculateWeaponMaterial(
        rarity,
        sumCurrentAscension,
        sumDesiredAscension,
        eliteMaterialGreen,
        eliteMaterialBlue,
        eliteMaterialPurple
      );
      calculateCommonMaterial(
        rarity,
        sumCurrentAscension,
        sumDesiredAscension,
        commonMaterialWhite,
        commonMaterialGreen,
        commonMaterialBlue
      );
      calculateMora(
        rarity,
        sumCurrentAscension,
        sumDesiredAscension,
        currentLevel,
        desiredLevel,
        mora
      );

      return {
        ...state,
        domainMaterialOrangeNeeded: WeaponCalculationParams.mOrange,
        domainMaterialPurpleNeeded: WeaponCalculationParams.mPurple,
        domainMaterialBlueNeeded: WeaponCalculationParams.mBlue,
        domainMaterialGreenNeeded: WeaponCalculationParams.mGreen,
        domainMaterialOrangeRemaining: WeaponCalculationParams.rOrange,
        domainMaterialPurpleRemaining: WeaponCalculationParams.rPurple,
        domainMaterialBlueRemaining: WeaponCalculationParams.rBlue,
        domainMaterialGreenRemaining: WeaponCalculationParams.rGreen,
        eliteMaterialPurpleNeeded: WeaponCalculationParams.mEPurple,
        eliteMaterialBlueNeeded: WeaponCalculationParams.mEBlue,
        eliteMaterialGreenNeeded: WeaponCalculationParams.mEGreen,
        eliteMaterialPurpleRemaining: WeaponCalculationParams.rEPurple,
        eliteMaterialBlueRemaining: WeaponCalculationParams.rEBlue,
        eliteMaterialGreenRemaining: WeaponCalculationParams.rEGreen,
        commonMaterialWhiteNeeded: WeaponCalculationParams.mCWhite,
        commonMaterialBlueNeeded: WeaponCalculationParams.mCBlue,
        commonMaterialGreenNeeded: WeaponCalculationParams.mCGreen,
        commonMaterialWhiteRemaining: WeaponCalculationParams.rCWhite,
        commonMaterialBlueRemaining: WeaponCalculationParams.rCBlue,
        commonMaterialGreenRemaining: WeaponCalculationParams.rCGreen,
        moraNeeded: WeaponCalculationParams.totalMora,
        moraRemaining: WeaponCalculationParams.rMora,
        blueOreNeeded: WeaponCalculationParams.blueOreNeeded,
        blueOreRemaining: WeaponCalculationParams.blueOreRemaining,
      };
    default:
      return { ...state };
  }
};

export default weaponReducer;
