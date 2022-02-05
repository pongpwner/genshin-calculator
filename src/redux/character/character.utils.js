import CHARACTER_DATA from "../../pages/character/character.data";
export const CharacterCalculationParams = {
  nGemGreen: 0,
  nGemBlue: 0,
  nGemPurple: 0,
  nGemOrange: 0,
  nMora: 0,
  nBoss: 0,
  nCWhite: 0,
  nCGreen: 0,
  nCBlue: 0,
  nSpecialty: 0,
  nExpGreen: 0,
  nExpBlue: 0,
  nExpPurple: 0,

  // over flow

  oGemGreen: 0,
  oGemBlue: 0,
  oGemPurple: 0,
  oGemOrange: 0,
  oCWhite: 0,
  oCGreen: 0,
  oCBlue: 0,
  oExpGreen: 0,
  oExpBlue: 0,
  oExpPurple: 0,

  // underflow
  uGemGreen: 0,
  uGemBlue: 0,
  uGemPurple: 0,
  uGemOrange: 0,
  uCWhite: 0,
  uCGreen: 0,
  uCBlue: 0,
  uExpGreen: 0,
  uExpBlue: 0,
  uExpPurple: 0,

  //potential material
  //no green
  pGemBlue: 0,
  pGemPurple: 0,
  pGemOrange: 0,
  pCGreen: 0,
  pCBlue: 0,
  pExpBlue: 0,
  pExpPurple: 0,

  // remaining material
  rGemGreen: 0,
  rGemBlue: 0,
  rGemPurple: 0,
  rGemOrange: 0,
  rMora: 0,
  rBoss: 0,
  rCWhite: 0,
  rCGreen: 0,
  rCBlue: 0,
  rSpecialty: 0,
  rExpGreen: 0,
  rExpBlue: 0,
  rExpPurple: 0,

  //missing material
  mGemGreen: 0,
  mGemBlue: 0,
  mGemPurple: 0,
  mGemOrange: 0,
  mCWhite: 0,
  mCGreen: 0,
  mCBlue: 0,
  mExpGreen: 0,
  mExpBlue: 0,
  mExpPurple: 0,
};

export function calculateJewls(
  sumCurrentAscension,
  sumDesiredAscension,
  gemGreen,
  gemBlue,
  gemPurple,
  gemOrange
) {
  CharacterCalculationParams.nGemGreen = 0;
  CharacterCalculationParams.nGemBlue = 0;
  CharacterCalculationParams.nGemPurple = 0;
  CharacterCalculationParams.nGemOrange = 0;
  for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
    CharacterCalculationParams.nGemGreen +=
      CHARACTER_DATA.ascension[i].gemGreen;
    CharacterCalculationParams.nGemBlue += CHARACTER_DATA.ascension[i].gemBlue;
    CharacterCalculationParams.nGemPurple +=
      CHARACTER_DATA.ascension[i].gemPurple;
    CharacterCalculationParams.nGemOrange +=
      CHARACTER_DATA.ascension[i].gemOrange;
  }
  CharacterCalculationParams.mGemGreen = 0;

  //calculate overflow and underflow
  if (CharacterCalculationParams.nGemGreen - gemGreen < 0) {
    CharacterCalculationParams.oGemGreen = Math.abs(
      CharacterCalculationParams.nGemGreen - gemGreen
    );
  } else {
    CharacterCalculationParams.oGemGreen = 0;
    CharacterCalculationParams.uGemGreen =
      CharacterCalculationParams.nGemGreen - gemGreen;
  }
  if (CharacterCalculationParams.nGemBlue - gemBlue < 0) {
    CharacterCalculationParams.oGemBlue = Math.abs(
      CharacterCalculationParams.nGemBlue - gemBlue
    );
  } else {
    CharacterCalculationParams.oGemBlue = 0;
    CharacterCalculationParams.uGemBlue =
      CharacterCalculationParams.nGemBlue - gemBlue;
  }
  if (CharacterCalculationParams.nGemPurple - gemPurple < 0) {
    CharacterCalculationParams.oGemPurple = Math.abs(
      CharacterCalculationParams.nGemPurple - gemPurple
    );
  } else {
    CharacterCalculationParams.oGemPurple = 0;
    CharacterCalculationParams.uGemPurple =
      CharacterCalculationParams.nGemPurple - gemPurple;
  }
  console.log(gemOrange);
  console.log(CharacterCalculationParams.nGemOrange);
  if (CharacterCalculationParams.nGemOrange - gemOrange < 0) {
    CharacterCalculationParams.oGemOrange = Math.abs(
      CharacterCalculationParams.nGemOrange - gemOrange
    );
  } else {
    CharacterCalculationParams.oGemOrange = 0;
    CharacterCalculationParams.uGemOrange =
      CharacterCalculationParams.nGemOrange - gemOrange;
  }
  console.log(CharacterCalculationParams.oGemOrange);
  console.log(CharacterCalculationParams.uGemOrange);
  // calculate what materials can be converted
  //can't convert green

  CharacterCalculationParams.mGemGreen = Number(
    Math.abs(0 - CharacterCalculationParams.uGemGreen)
  );

  //top block = underflow greater bottom block = over flow greater
  if (
    Math.floor(CharacterCalculationParams.oGemGreen / 3) +
      CharacterCalculationParams.oGemBlue -
      CharacterCalculationParams.uGemBlue <=
    0
  ) {
    CharacterCalculationParams.pGemBlue = 0;
    CharacterCalculationParams.mGemBlue = Math.abs(
      Math.floor(CharacterCalculationParams.oGemGreen / 3) +
        CharacterCalculationParams.oGemBlue -
        CharacterCalculationParams.uGemBlue
    );
  } else {
    CharacterCalculationParams.pGemBlue =
      Math.floor(CharacterCalculationParams.oGemGreen / 3) +
      CharacterCalculationParams.oGemBlue -
      CharacterCalculationParams.uGemBlue;
  }
  if (
    Math.floor(CharacterCalculationParams.pGemBlue / 3) +
      CharacterCalculationParams.oGemPurple -
      CharacterCalculationParams.uGemPurple <=
    0
  ) {
    CharacterCalculationParams.pGemPurple = 0;
    CharacterCalculationParams.mGemPurple = Math.abs(
      Math.floor(CharacterCalculationParams.pGemBlue / 3) +
        CharacterCalculationParams.oGemPurple -
        CharacterCalculationParams.uGemPurple
    );
  } else {
    CharacterCalculationParams.pGemPurple =
      Math.floor(CharacterCalculationParams.pGemBlue / 3) +
      CharacterCalculationParams.oGemPurple -
      CharacterCalculationParams.uGemPurple;
  }

  if (
    Math.floor(CharacterCalculationParams.pGemPurple / 3) +
      CharacterCalculationParams.oGemOrange -
      CharacterCalculationParams.uGemOrange <=
    0
  ) {
    CharacterCalculationParams.pGemOrange = 0;
    CharacterCalculationParams.mGemOrange = Math.abs(
      Math.floor(CharacterCalculationParams.pGemPurple / 3) +
        CharacterCalculationParams.oGemOrange -
        CharacterCalculationParams.uGemOrange
    );
  } else {
    CharacterCalculationParams.pGemOrange =
      Math.floor(CharacterCalculationParams.pGemPurple / 3) +
      CharacterCalculationParams.oGemOrange -
      CharacterCalculationParams.uGemOrange;
  }

  //calculate remainders
  CharacterCalculationParams.rGemGreen =
    CharacterCalculationParams.oGemGreen % 3;
  CharacterCalculationParams.rGemBlue = CharacterCalculationParams.pGemBlue % 3;
  CharacterCalculationParams.rGemPurple =
    CharacterCalculationParams.pGemPurple % 3;
  CharacterCalculationParams.rGemOrange = CharacterCalculationParams.pGemOrange;
}
// function caclculateCommonMaterial() {
//   for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
//     nCWhite += constants.ascension[i].commonMaterialWhite;
//     nCGreen += constants.ascension[i].commonMaterialGreen;
//     nCBlue += constants.ascension[i].commonMaterialBlue;
//   }

//   //calculate overflow and underflow

//   if (nCWhite - commonMaterialWhiteC < 0) {
//     oCWhite = Math.abs(nCWhite - commonMaterialWhiteC);
//   } else {
//     uCWhite = nCWhite - commonMaterialWhiteC;
//   }
//   if (nCGreen - commonMaterialGreenC < 0) {
//     oCGreen = Math.abs(nCGreen - commonMaterialGreenC);
//   } else {
//     uCGreen = nCGreen - commonMaterialGreenC;
//   }
//   if (nCBlue - commonMaterialBlueC < 0) {
//     oCBlue = Math.abs(nCBlue - commonMaterialBlueC);
//   } else {
//     uCBlue = nCBlue - commonMaterialBlueC;
//   }

//   // calculate what materials can be converted
//   //can't convert green

//   mCWhite = Math.abs(0 - uCWhite);

//   if (Math.floor(oCWhite / 3) + oCGreen - uCGreen <= 0) {
//     pCGreen = 0;
//     mCGreen = Math.abs(Math.floor(oCWhite / 3) + oCGreen - uCGreen);
//   } else {
//     pCGreen = Math.floor(oCWhite / 3) + oCGreen - uCGreen;
//   }
//   if (Math.floor(pCGreen / 3) + oCBlue - uCBlue <= 0) {
//     pCBlue = 0;
//     mCBlue = Math.abs(Math.floor(pCGreen / 3) + oCBlue - uCBlue);
//   } else {
//     pCBlue = Math.floor(pCGreen / 3) + oCBlue - uCBlue;
//   }

//   //calculate remainders

//   rCWhite = oCWhite % 3;
//   rCGreen = pCGreen % 3;
//   rCBlue = pCBlue;
// }
// function calculateXP() {
//   for (let i = currentLevel + 1; i < desiredLevel + 1; i++) {
//     if (currentLevel == 7) {
//       break;
//     }
//     nExpGreen += constants.level[i].green;
//     nExpBlue += constants.level[i].blue;
//     nExpPurple += constants.level[i].purple;
//   }
//   if (nExpGreen - heroWitGreen < 0) {
//     oExpGreen = Math.abs(nExpGreen - heroWitGreen);
//   } else {
//     uExpGreen = nExpGreen - heroWitGreen;
//   }
//   if (nExpBlue - heroWitBlue < 0) {
//     oExpBlue = Math.abs(nExpBlue - heroWitBlue);
//   } else {
//     uExpBlue = nExpBlue - heroWitBlue;
//   }
//   if (nExpPurple - heroWitPurple < 0) {
//     oExpPurple = Math.abs(nExpPurple - heroWitPurple);
//   } else {
//     uExpPurple = nExpPurple - heroWitPurple;
//   }
//   mExpGreen = Math.abs(0 - uExpGreen);
//   //top block = underflow greater bottom block = over flow greater
//   if (Math.floor(oExpGreen / 3) + oExpBlue - uExpBlue <= 0) {
//     pExpBlue = 0;
//     mExpBlue = Math.abs(Math.floor(oExpGreen / 3) + oExpBlue - uExpBlue);
//   } else {
//     pExpBlue = Math.floor(oExpGreen / 3) + oExpBlue - uExpBlue;
//   }
//   if (Math.floor(pExpBlue / 3) + oExpPurple - uExpPurple <= 0) {
//     pExpPurple = 0;
//     mExpPurple = Math.abs(Math.floor(pExpBlue / 3) + oExpPurple - uExpPurple);
//   } else {
//     pExpPurple = Math.floor(pExpBlue / 3) + oExpPurple - uExpPurple;
//   }
//   rExpGreen = oExpGreen % 3;
//   rExpBlue = pExpBlue % 3;
//   rExpPurple = pExpPurple;
// }
// function calculateBossMaterial() {
//   for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
//     nBoss += constants.ascension[i].bossMaterial;
//   }
//   rBoss = bossMaterialC - nBoss;
//   nBoss = nBoss - bossMaterialC;
// }
// function calculateLocalSpecialty() {
//   for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
//     nSpecialty += constants.ascension[i].localSpecialty;
//   }
//   rSpecialty = localSpecialtyC - nSpecialty;
//   nSpecialty = nSpecialty - localSpecialtyC;
// }
// function calculateMora() {
//   for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
//     nMora += constants.ascension[i].mora;
//   }
//   for (let i = currentLevel + 1; i < desiredLevel + 1; i++) {
//     if (currentLevel == 7) {
//       break;
//     }
//     nMora += constants.level[i].mora;
//   }
//   rMora = moraC - nMora;
//   nMora = nMora - moraC;
// }
