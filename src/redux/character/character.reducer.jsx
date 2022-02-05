import { CharacterActionTypes } from "./character.types";
import CHARACTER_DATA from "../../pages/character/character.data";
import {
  CharacterCalculationParams,
  calculateJewls,
  calculateCommonMaterial,
  calculateXP,
  calculateBossMaterial,
  calculateLocalSpecialty,
  calculateMora,
} from "./character.utils";
const INITIAL_STATE = {
  currentCharacter: { name: "", link: "./" },
  localSpecialtyList: null,
  commonMaterialList: null,
  materials: null,
  commonMaterialLabel: "",
  localSpecialtyLabel: "",
  characters: null,
  isFetching: false,
  errorMessage: undefined,
  characterPortraits: null,
  moraC: "",
  moraNeeded: 0,
  gemGreen: "",
  gemBlue: "",
  gemPurple: "",
  gemOrange: "",
  gemGreenNeeded: 0,
  gemBlueNeeded: 0,
  gemPurpleNeeded: 0,
  gemOrangeNeeded: 0,
  gemGreenRemaining: 0,
  gemBlueRemaining: 0,
  gemPurpleRemaining: 0,
  gemOrangeRemaining: 0,
  commonMaterialWhiteC: "",
  commonMaterialGreenC: "",
  commonMaterialBlueC: "",
  commonMaterialWhiteNeeded: 0,
  commonMaterialGreenNeeded: 0,
  commonMaterialBlueNeeded: 0,
  commonMaterialWhiteRemaining: 0,
  commonMaterialGreenRemaining: 0,
  commonMaterialBlueRemaining: 0,
  bossMaterialC: "",
  bossMaterialNeeded: 0,
  bossMaterialRemaining: 0,
  localSpecialtyC: "",
  localSpecialtyNeeded: 0,
  localSpecialtyRemaining: 0,
  heroWitGreen: "",
  heroWitBlue: "",
  heroWitPurple: "",
  expGreenNeeded: 0,
  expBlueNeeded: 0,
  expPurpleNeeded: 0,
  expGreenRemaining: 0,
  expBlueRemaining: 0,
  expPurpleRemaining: 0,
  currentLevel: 0,
  desiredLevel: 0,
  currentAscension: 0,
  sumCurrentAscension: 0,
  sumDesiredAscension: 0,
  desiredAscension: 0,
  currentRadioButtonC: 0,
  desiredRadioButtonC: 0,
  dropdown: {
    levels: [
      { label: "0", value: 0, ascension: 0 },
      { label: "20", value: 1, ascension: 0 },
      { label: "40", value: 2, ascension: 1 },
      { label: "50", value: 3, ascension: 2 },
      { label: "60", value: 4, ascension: 3 },
      { label: "70", value: 5, ascension: 4 },
      { label: "80", value: 6, ascension: 5 },
      { label: "90", value: 7, ascension: 6 },
    ],
    ascensions: [
      { label: "0", value: 0 },
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
      { label: "6", value: 6 },
    ],
  },
  radioButtons: {
    current: [
      { name: "currentRadioButtonC", value: 0, label: "no" },
      { name: "currentRadioButtonC", value: 1, label: "yes" },
    ],
    desired: [
      { name: "desiredRadioButtonC", value: 0, label: "no" },
      { name: "desiredRadioButtonC", value: 1, label: "yes" },
    ],
  },
  constants: CHARACTER_DATA,
};

//state is from the store
const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterActionTypes.HANDLE_CHANGE: {
      const { name, value } = action.payload.target;
      if (name === "currentLevel" || name === "desiredLevel") {
        return {
          ...state,
          [name]: Number(value),
        };
      }
      return { ...state, [name]: Number(value) };
    }
    case CharacterActionTypes.HANDLE_RADIO_BUTTON:
      const { name, value } = action.payload.target;

      if (
        (state.currentLevel === 0 || state.currentLevel === 7) &&
        action.payload.target.getAttribute("data-currentAscension") ===
          "currentAscension"
      ) {
        return {
          ...state,
          [name]: Number(value),
          currentRadioButtonC: 0,
        };
      } else if (
        (state.desiredLevel === 0 || state.desiredLevel === 7) &&
        action.payload.target.getAttribute("data-currentAscension") ===
          "desiredAscension"
      ) {
        return {
          ...state,
          [name]: Number(value),
          desiredRadioButtonC: 0,
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

    case CharacterActionTypes.HANDLE_CURRENT_LEVEL:
      //assume weapon is not ascended

      switch (Number(action.payload.target.value)) {
        case 0:
          return {
            ...state,
            [action.payload.target.name]: Number(action.payload.target.value),
            currentAscension: 0,
            sumCurrentAscension: 0,
            currentRadioButtonC: 0,
          };

        case 1:
          if (state.currentRadioButtonC === 0) {
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
          if (state.currentRadioButtonC === 0) {
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
          if (state.currentRadioButtonC === 0) {
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
          if (state.currentRadioButtonC === 0) {
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
          if (state.currentRadioButtonC === 0) {
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
          if (state.currentRadioButtonC === 0) {
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
            currentRadioButtonC: 0,
          };

        default:
          return { ...state };
      }

    case CharacterActionTypes.HANDLE_DESIRED_LEVEL:
      //assume character is not ascended

      switch (Number(action.payload.target.value)) {
        case 0:
          return {
            ...state,
            [action.payload.target.name]: Number(action.payload.target.value),
            desiredAscension: 0,
            sumDesiredAscension: 0,
            desiredRadioButtonC: 0,
          };

        case 1:
          if (state.desiredRadioButtonC === 0) {
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
          if (state.desiredRadioButtonC === 0) {
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
          if (state.desiredRadioButtonC === 0) {
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
          if (state.desiredRadioButtonC === 0) {
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
          if (state.currentRadioButtonC === 0) {
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
          if (state.desiredRadioButtonC === 0) {
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
            desiredRadioButtonC: 0,
          };

        default:
          return { ...state };
      }

    case CharacterActionTypes.HANDLE_SUBMIT:
      const {
        gemGreen,
        gemBlue,
        gemPurple,
        gemOrange,
        commonMaterialWhiteC,
        commonMaterialGreenC,
        commonMaterialBlueC,
        moraC,
        localSpecialtyC,
        heroWitGreen,
        heroWitBlue,
        heroWitPurple,
        bossMaterialC,
        currentLevel,
        desiredLevel,
        sumCurrentAscension,
        sumDesiredAscension,
        constants,
      } = state;
      calculateJewls(
        sumCurrentAscension,
        sumDesiredAscension,
        gemGreen,
        gemBlue,
        gemPurple,
        gemOrange
      );

      calculateCommonMaterial(
        sumCurrentAscension,
        sumDesiredAscension,
        commonMaterialWhiteC,
        commonMaterialGreenC,
        commonMaterialBlueC
      );
      calculateBossMaterial(
        sumCurrentAscension,
        sumDesiredAscension,
        bossMaterialC
      );
      calculateLocalSpecialty(
        sumCurrentAscension,
        sumDesiredAscension,
        localSpecialtyC
      );
      calculateMora(
        sumCurrentAscension,
        sumDesiredAscension,
        currentLevel,
        desiredLevel,
        moraC
      );
      calculateXP(
        currentLevel,
        desiredLevel,
        heroWitGreen,
        heroWitBlue,
        heroWitPurple
      );

      return {
        ...state,
        gemOrangeNeeded: CharacterCalculationParams.requiredJewlOrange,
        gemPurpleNeeded: CharacterCalculationParams.requiredJewlPurple,
        gemBlueNeeded: CharacterCalculationParams.requiredJewlBlue,
        gemGreenNeeded: CharacterCalculationParams.requiredJewlGreen,
        gemGreenRemaining: CharacterCalculationParams.remainderJewlGreen,
        gemBlueRemaining: CharacterCalculationParams.remainderJewlBlue,
        gemPurpleRemaining: CharacterCalculationParams.remainderJewlPurple,
        gemOrangeRemaining: CharacterCalculationParams.remainderJewlOrange,
        moraNeeded: CharacterCalculationParams.nMora,
        moraRemaining: CharacterCalculationParams.rMora,
        bossMaterialNeeded: CharacterCalculationParams.nBoss,
        bossMaterialRemaining: CharacterCalculationParams.rBoss,
        localSpecialtyNeeded: CharacterCalculationParams.nSpecialty,
        localSpecialtyRemaining: CharacterCalculationParams.rSpecialty,
        commonMaterialWhiteNeeded: CharacterCalculationParams.mCWhite,
        commonMaterialGreenNeeded: CharacterCalculationParams.mCGreen,
        commonMaterialBlueNeeded: CharacterCalculationParams.mCBlue,
        commonMaterialWhiteRemaining: CharacterCalculationParams.rCWhite,
        commonMaterialGreenRemaining: CharacterCalculationParams.rCGreen,
        commonMaterialBlueRemaining: CharacterCalculationParams.rCBlue,
        expPurpleNeeded: CharacterCalculationParams.mExpPurple,
        expBlueNeeded: CharacterCalculationParams.mExpBlue,
        expGreenNeeded: CharacterCalculationParams.mExpGreen,
        expGreenRemaining: CharacterCalculationParams.rExpGreen,
        expBlueRemaining: CharacterCalculationParams.rExpBlue,
        expPurpleRemaining: CharacterCalculationParams.rExpPurple,
      };

    case CharacterActionTypes.FETCH_CHARACTERS_START:
      return { ...state, isFetching: true };

    case CharacterActionTypes.FETCH_CHARACTERS_SUCCESS:
      return { ...state, isFetching: false, characters: action.payload };
    case CharacterActionTypes.FETCH_CHARACTERS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };

    case CharacterActionTypes.FETCH_MATERIALS_START:
      return { ...state };

    case CharacterActionTypes.FETCH_MATERIALS_SUCCESS:
      const { localSpecialties, commonMaterials } = action.payload;
      return {
        ...state,
        localSpecialtyList: localSpecialties,
        commonMaterialList: commonMaterials,
      };

    case CharacterActionTypes.GET_MATERIAL_NAMES:
      const { localSpecialtyList, commonMaterialList } = state;
      const charName = action.payload.name;
      let ln = "";
      let cn = "";
      localSpecialtyList.forEach((ls) => {
        ls.characters.forEach((character) => {
          if (character === charName) {
            ln = ls.name;
          }
        });
      });

      commonMaterialList.forEach((cm) => {
        if (cm[1].characters) {
          cm[1].characters.forEach((character) => {
            if (character === charName) {
              cn = cm[0];
            }
          });
        }
      });
      return {
        ...state,
        localSpecialtyLabel: ln,
        commonMaterialLabel: cn,
        currentCharacter: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
