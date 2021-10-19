import { CharacterActionTypes } from "./character.types";
import CHARACTER_DATA from "../../pages/character/character.data";
const INITIAL_STATE = {
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

  subsections: [
    { label: "Mora Needed:", value: "moraNeeded", type: 1, id: 0 },

    {
      label: "Boss Material Needed",
      value: "bossMaterialNeeded",
      type: 1,
      id: 1,
    },
    {
      label: "Local Specialty",
      value: "localSpecialtyNeeded",
      type: 1,
      id: 2,
    },
    {
      mainHeader: "Gemstones",
      type: 2,
      id: 3,
      header1: "Gemstones Needed",
      materialsNeeded: [
        { label: "green:", value: "gemGreenNeeded" },
        { label: "blue:", value: "gemBlueNeeded" },
        { label: "purple:", value: "gemPurpleNeeded" },
        { label: "orange:", value: "gemOrangeNeeded" },
      ],
      header2: "Materials left",
      materialsLeft: [
        { label: "green:", value: "gemGreenRemaining" },
        { label: "blue:", value: "gemBlueRemaining" },
        { label: "purple:", value: "gemPurpleRemaining" },
        { label: "orange:", value: "gemOrangeRemaining" },
      ],
    },

    {
      mainHeader: "Exp",
      type: 2,
      id: 4,
      header1: "Exp Needed",
      materialsNeeded: [
        { label: "green:", value: "expGreenNeeded" },
        { label: "blue:", value: "expBlueNeeded" },
        { label: "purple:", value: "expPurpleNeeded" },
      ],
      header2: "Materials left",
      materialsLeft: [
        { label: "green:", value: "expGreenRemaining" },
        { label: "blue:", value: "expBlueRemaining" },
        { label: "purple:", value: "expPurpleRemaining" },
      ],
    },
    {
      mainHeader: "Common Materials",
      type: 2,
      id: 5,
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

//state is from the store
const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterActionTypes.HANDLE_CHANGE:
      if (
        action.payload.name === "currentLevel" ||
        action.payload.name === "desiredLevel"
      ) {
        return {
          ...state,
          [action.payload.name]: Number(action.payload.value),
        };
      }
      return { ...state, [action.payload.name]: Number(action.payload.value) };

    case CharacterActionTypes.HANDLE_RADIO_BUTTON:
      const { name, value } = action.payload.target;
      console.log(action.payload.target.name);
      console.log(action.payload.target.value);
      //this.handleChange(event);
      //state[action.payload.target.name] = Number(action.payload.target.value);

      if (
        Number(
          state[action.payload.target.getAttribute("data-currentAscension")]
        ) +
          Number(value) ==
        7
      ) {
        return {
          ...state,
          [action.payload.target.name]: Number(action.payload.target.value),
          desiredRadioButton: 0,
        };
      } else {
        return {
          ...state,
          [action.payload.target.name]: Number(action.payload.target.value),

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
          };

        case 1:
          if (state.currentRadioButtonC == 0) {
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
          if (state.currentRadioButtonC == 0) {
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
          if (state.currentRadioButtonC == 0) {
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
          if (state.currentRadioButtonC == 0) {
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
          if (state.currentRadioButtonC == 0) {
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
          if (state.currentRadioButtonC == 0) {
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
          };

        default:
          return { state };
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
          };

        case 1:
          if (state.desiredRadioButtonC == 0) {
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
          if (state.desiredRadioButtonC == 0) {
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
          if (state.desiredRadioButtonC == 0) {
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
          if (state.desiredRadioButtonC == 0) {
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
          if (state.currentRadioButtonC == 0) {
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
          if (state.desiredRadioButtonC == 0) {
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
          };

        default:
          return { state };
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
        currentAscension,
        sumCurrentAscension,
        desiredAscension,
        sumDesiredAscension,
        constants,
      } = state;
      //n... is how many are needed. t... is how many you have
      let nGemGreen = 0;
      let nGemBlue = 0;
      let nGemPurple = 0;
      let nGemOrange = 0;
      let nMora = 0;
      let nBoss = 0;
      let nCWhite = 0;
      let nCGreen = 0;
      let nCBlue = 0;
      let nSpecialty = 0;
      let nExpGreen = 0;
      let nExpBlue = 0;
      let nExpPurple = 0;

      // over flow

      let oGemGreen = 0;
      let oGemBlue = 0;
      let oGemPurple = 0;
      let oGemOrange = 0;
      let oMora = 0;
      let oBoss = 0;
      let oCWhite = 0;
      let oCGreen = 0;
      let oCBlue = 0;
      let oSpecialty = 0;
      let oExpGreen = 0;
      let oExpBlue = 0;
      let oExpPurple = 0;

      // underflow
      let uGemGreen = 0;
      let uGemBlue = 0;
      let uGemPurple = 0;
      let uGemOrange = 0;
      let uMora = 0;
      let uBoss = 0;
      let uCWhite = 0;
      let uCGreen = 0;
      let uCBlue = 0;
      let uSpecialty = 0;
      let uExpGreen = 0;
      let uExpBlue = 0;
      let uExpPurple = 0;

      //potential material
      //no green
      let pGemGreen = 0;
      let pGemBlue = 0;
      let pGemPurple = 0;
      let pGemOrange = 0;
      let pMora = 0;
      let pBoss = 0;
      let pCWhite = 0;
      let pCGreen = 0;
      let pCBlue = 0;
      let pSpecialty = 0;
      let pExpGreen = 0;
      let pExpBlue = 0;
      let pExpPurple = 0;

      // remaining material
      let rGemGreen = 0;
      let rGemBlue = 0;
      let rGemPurple = 0;
      let rGemOrange = 0;
      let rMora = 0;
      let rBoss = 0;
      let rCWhite = 0;
      let rCGreen = 0;
      let rCBlue = 0;
      let rSpecialty = 0;
      let rExpGreen = 0;
      let rExpBlue = 0;
      let rExpPurple = 0;

      //missing material
      let mGemGreen = 0;
      let mGemBlue = 0;
      let mGemPurple = 0;
      let mGemOrange = 0;
      let mMora = 0;
      let mBoss = 0;
      let mCWhite = 0;
      let mCGreen = 0;
      let mCBlue = 0;
      let mSpecialty = 0;
      let mExpGreen = 0;
      let mExpBlue = 0;
      let mExpPurple = 0;

      //calculate materials needed

      for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
        nGemGreen += constants.ascension[i].gemGreen;
        nGemBlue += constants.ascension[i].gemBlue;
        nGemPurple += constants.ascension[i].gemPurple;
        nGemOrange += constants.ascension[i].gemOrange;
        nMora += constants.ascension[i].mora;
        nBoss += constants.ascension[i].bossMaterial;
        nCWhite += constants.ascension[i].commonMaterialWhite;
        nCGreen += constants.ascension[i].commonMaterialGreen;
        nCBlue += constants.ascension[i].commonMaterialBlue;
        nSpecialty += constants.ascension[i].localSpecialty;
      }
      for (let i = currentLevel + 1; i < desiredLevel + 1; i++) {
        if (currentLevel == 7) {
          break;
        }
        nMora += constants.level[i].mora;
        nExpGreen += constants.level[i].green;
        nExpBlue += constants.level[i].blue;
        nExpPurple += constants.level[i].purple;
      }

      //calculate overflow and underflow
      if (nGemGreen - gemGreen < 0) {
        oGemGreen = Math.abs(nGemGreen - gemGreen);
      } else {
        uGemGreen = nGemGreen - gemGreen;
      }
      if (nGemBlue - gemBlue < 0) {
        oGemBlue = Math.abs(nGemBlue - gemBlue);
      } else {
        uGemBlue = nGemBlue - gemBlue;
      }
      if (nGemPurple - gemPurple < 0) {
        oGemPurple = Math.abs(nGemPurple - gemPurple);
      } else {
        uGemPurple = nGemPurple - gemPurple;
      }
      if (nGemOrange - gemOrange < 0) {
        oGemOrange = Math.abs(nGemOrange - gemOrange);
      } else {
        uGemOrange = nGemOrange - gemOrange;
      }

      if (nCWhite - commonMaterialWhiteC < 0) {
        oCWhite = Math.abs(nCWhite - commonMaterialWhiteC);
      } else {
        uCWhite = nCWhite - commonMaterialWhiteC;
      }
      if (nCGreen - commonMaterialGreenC < 0) {
        oCGreen = Math.abs(nCGreen - commonMaterialGreenC);
      } else {
        uCGreen = nCGreen - commonMaterialGreenC;
      }
      if (nCBlue - commonMaterialBlueC < 0) {
        oCBlue = Math.abs(nCBlue - commonMaterialBlueC);
      } else {
        uCBlue = nCBlue - commonMaterialBlueC;
      }
      if (nSpecialty - localSpecialtyC < 0) {
        oSpecialty = Math.abs(nSpecialty - localSpecialtyC);
      } else {
        uSpecialty = nSpecialty - localSpecialtyC;
      }
      if (nBoss - bossMaterialC < 0) {
        oBoss = Math.abs(nBoss - bossMaterialC);
      } else {
        uBoss = nBoss - bossMaterialC;
      }
      if (nExpGreen - heroWitGreen < 0) {
        oExpGreen = Math.abs(nExpGreen - heroWitGreen);
      } else {
        uExpGreen = nExpGreen - heroWitGreen;
      }
      if (nExpBlue - heroWitBlue < 0) {
        oExpBlue = Math.abs(nExpBlue - heroWitBlue);
      } else {
        uExpBlue = nExpBlue - heroWitBlue;
      }
      if (nExpPurple - heroWitPurple < 0) {
        oExpPurple = Math.abs(nExpPurple - heroWitPurple);
      } else {
        uExpPurple = nExpPurple - heroWitPurple;
      }

      // calculate what materials can be converted
      //can't convert green
      mGemGreen = Math.abs(0 - uGemGreen);
      //top block = underflow greater bottom block = over flow greater
      if (Math.floor(oGemGreen / 3) + oGemBlue - uGemBlue <= 0) {
        pGemBlue = 0;
        mGemBlue = Math.abs(Math.floor(oGemGreen / 3) + oGemBlue - uGemBlue);
      } else {
        pGemBlue = Math.floor(oGemGreen / 3) + oGemBlue - uGemBlue;
      }
      if (Math.floor(pGemBlue / 3) + oGemPurple - uGemPurple <= 0) {
        pGemPurple = 0;
        mGemPurple = Math.abs(
          Math.floor(pGemBlue / 3) + oGemPurple - uGemPurple
        );
      } else {
        pGemPurple = Math.floor(pGemBlue / 3) + oGemPurple - uGemPurple;
      }
      if (Math.floor(pGemPurple / 3) + oGemOrange - uGemOrange <= 0) {
        pGemOrange = 0;
        mGemOrange = Math.abs(
          Math.floor(pGemPurple / 3) + oGemOrange - uGemOrange
        );
      } else {
        pGemOrange = Math.floor(pGemPurple / 3) + oGemOrange - uGemOrange;
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

      mExpGreen = Math.abs(0 - uExpGreen);
      //top block = underflow greater bottom block = over flow greater
      if (Math.floor(oExpGreen / 3) + oExpBlue - uExpBlue <= 0) {
        pExpBlue = 0;
        mExpBlue = Math.abs(Math.floor(oExpGreen / 3) + oExpBlue - uExpBlue);
      } else {
        pExpBlue = Math.floor(oExpGreen / 3) + oExpBlue - uExpBlue;
      }
      if (Math.floor(pExpBlue / 3) + oExpPurple - uExpPurple <= 0) {
        pExpPurple = 0;
        mExpPurple = Math.abs(
          Math.floor(pExpBlue / 3) + oExpPurple - uExpPurple
        );
      } else {
        pExpPurple = Math.floor(pExpBlue / 3) + oExpPurple - uExpPurple;
      }

      //calculate remainders
      rGemGreen = oGemGreen % 3;
      rGemBlue = pGemBlue % 3;
      rGemPurple = pGemPurple % 3;
      rGemOrange = pGemOrange;

      rExpGreen = oExpGreen % 3;
      rExpBlue = pExpBlue % 3;
      rExpPurple = pExpPurple;

      rCWhite = oCWhite % 3;
      rCGreen = pCGreen % 3;
      rCBlue = pCBlue;
      // final mora
      nMora = nMora - moraC;
      nBoss = nBoss - bossMaterialC;
      nSpecialty = nSpecialty - localSpecialtyC;

      return {
        ...state,
        gemOrangeNeeded: mGemOrange,
        gemPurpleNeeded: mGemPurple,
        gemBlueNeeded: mGemBlue,
        gemGreenNeeded: mGemGreen,
        gemGreenRemaining: rGemGreen,
        gemBlueRemaining: rGemBlue,
        gemPurpleRemaining: rGemPurple,
        gemOrangeRemaining: rGemOrange,
        moraNeeded: nMora,
        bossMaterialNeeded: nBoss,
        localSpecialtyNeeded: nSpecialty,
        commonMaterialWhiteNeeded: mCWhite,
        commonMaterialGreenNeeded: mCGreen,
        commonMaterialBlueNeeded: mCBlue,
        commonMaterialWhiteRemaining: rCWhite,
        commonMaterialGreenRemaining: rCGreen,
        commonMaterialBlueRemaining: rCBlue,
        expPurpleNeeded: mExpPurple,
        expBlueNeeded: mExpBlue,
        expGreenNeeded: mExpGreen,
        expGreenRemaining: rExpGreen,
        expBlueRemaining: rExpBlue,
        expPurpleRemaining: rExpPurple,
      };

    default:
      return state;
  }
};

export default characterReducer;
