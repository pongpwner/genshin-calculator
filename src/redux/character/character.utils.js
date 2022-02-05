import CHARACTER_DATA from "../../pages/character/character.data";
export const CharacterCalculationParams = {
  //total needed materials (does not change based on form inputs, only when selecting level and ascension)
  neededJewlGreen: 0,
  neededJewlBlue: 0,
  neededJewlPurple: 0,
  neededJewlOrange: 0,
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

  overflowJewlGreen: 0,
  overflowJewlBlue: 0,
  overflowJewlPurple: 0,
  overflowJewlOrange: 0,
  oCWhite: 0,
  oCGreen: 0,
  oCBlue: 0,
  oExpGreen: 0,
  oExpBlue: 0,
  oExpPurple: 0,

  // underflow
  underflowJewlGreen: 0,
  underflowJewlBlue: 0,
  underflowJewlPurple: 0,
  underflowJewlOrange: 0,
  uCWhite: 0,
  uCGreen: 0,
  uCBlue: 0,
  uExpGreen: 0,
  uExpBlue: 0,
  uExpPurple: 0,

  //potential material (helps calculate remainder)
  //no green
  potentialJewlBlue: 0,
  potentialJewlPurple: 0,
  potentialJewlOrange: 0,
  pCGreen: 0,
  pCBlue: 0,
  pExpBlue: 0,
  pExpPurple: 0,

  // remaining material (value that is shown to user)
  remainderJewlGreen: 0,
  remainderJewlBlue: 0,
  remainderJewlPurple: 0,
  remainderJewlOrange: 0,
  rMora: 0,
  rBoss: 0,
  rCWhite: 0,
  rCGreen: 0,
  rCBlue: 0,
  rSpecialty: 0,
  rExpGreen: 0,
  rExpBlue: 0,
  rExpPurple: 0,

  //required material (value that is shown to user)
  requiredJewlGreen: 0,
  requiredJewlBlue: 0,
  requiredJewlPurple: 0,
  requiredJewlOrange: 0,
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
  CharacterCalculationParams.neededJewlGreen = 0;
  CharacterCalculationParams.neededJewlBlue = 0;
  CharacterCalculationParams.neededJewlPurple = 0;
  CharacterCalculationParams.neededJewlOrange = 0;
  for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
    CharacterCalculationParams.neededJewlGreen +=
      CHARACTER_DATA.ascension[i].gemGreen;
    CharacterCalculationParams.neededJewlBlue +=
      CHARACTER_DATA.ascension[i].gemBlue;
    CharacterCalculationParams.neededJewlPurple +=
      CHARACTER_DATA.ascension[i].gemPurple;
    CharacterCalculationParams.neededJewlOrange +=
      CHARACTER_DATA.ascension[i].gemOrange;
  }
  CharacterCalculationParams.requiredJewlGreen = 0;

  //calculate overflow and underflow
  if (CharacterCalculationParams.neededJewlGreen - gemGreen < 0) {
    CharacterCalculationParams.overflowJewlGreen = Math.abs(
      CharacterCalculationParams.neededJewlGreen - gemGreen
    );
  } else {
    CharacterCalculationParams.overflowJewlGreen = 0;
    CharacterCalculationParams.underflowJewlGreen =
      CharacterCalculationParams.neededJewlGreen - gemGreen;
  }
  if (CharacterCalculationParams.neededJewlBlue - gemBlue < 0) {
    CharacterCalculationParams.overflowJewlBlue = Math.abs(
      CharacterCalculationParams.neededJewlBlue - gemBlue
    );
  } else {
    CharacterCalculationParams.overflowJewlBlue = 0;
    CharacterCalculationParams.underflowJewlBlue =
      CharacterCalculationParams.neededJewlBlue - gemBlue;
  }
  if (CharacterCalculationParams.neededJewlPurple - gemPurple < 0) {
    CharacterCalculationParams.overflowJewlPurple = Math.abs(
      CharacterCalculationParams.neededJewlPurple - gemPurple
    );
  } else {
    CharacterCalculationParams.overflowJewlPurple = 0;
    CharacterCalculationParams.underflowJewlPurple =
      CharacterCalculationParams.neededJewlPurple - gemPurple;
  }

  if (CharacterCalculationParams.neededJewlOrange - gemOrange < 0) {
    CharacterCalculationParams.overflowJewlOrange = Math.abs(
      CharacterCalculationParams.neededJewlOrange - gemOrange
    );
  } else {
    CharacterCalculationParams.overflowJewlOrange = 0;
    CharacterCalculationParams.underflowJewlOrange =
      CharacterCalculationParams.neededJewlOrange - gemOrange;
  }

  // calculate what materials can be converted
  //can't convert green

  CharacterCalculationParams.requiredJewlGreen = Number(
    Math.abs(0 - CharacterCalculationParams.underflowJewlGreen)
  );

  //top block = underflow greater bottom block = over flow greater
  if (
    Math.floor(CharacterCalculationParams.overflowJewlGreen / 3) +
      CharacterCalculationParams.overflowJewlBlue -
      CharacterCalculationParams.underflowJewlBlue <=
    0
  ) {
    CharacterCalculationParams.potentialJewlBlue = 0;
    CharacterCalculationParams.requiredJewlBlue = Math.abs(
      Math.floor(CharacterCalculationParams.overflowJewlGreen / 3) +
        CharacterCalculationParams.overflowJewlBlue -
        CharacterCalculationParams.underflowJewlBlue
    );
  } else {
    CharacterCalculationParams.potentialJewlBlue =
      Math.floor(CharacterCalculationParams.overflowJewlGreen / 3) +
      CharacterCalculationParams.overflowJewlBlue -
      CharacterCalculationParams.underflowJewlBlue;
  }
  if (
    Math.floor(CharacterCalculationParams.potentialJewlBlue / 3) +
      CharacterCalculationParams.overflowJewlPurple -
      CharacterCalculationParams.underflowJewlPurple <=
    0
  ) {
    CharacterCalculationParams.potentialJewlPurple = 0;
    CharacterCalculationParams.requiredJewlPurple = Math.abs(
      Math.floor(CharacterCalculationParams.potentialJewlBlue / 3) +
        CharacterCalculationParams.overflowJewlPurple -
        CharacterCalculationParams.underflowJewlPurple
    );
  } else {
    CharacterCalculationParams.potentialJewlPurple =
      Math.floor(CharacterCalculationParams.potentialJewlBlue / 3) +
      CharacterCalculationParams.overflowJewlPurple -
      CharacterCalculationParams.underflowJewlPurple;
  }

  if (
    Math.floor(CharacterCalculationParams.potentialJewlPurple / 3) +
      CharacterCalculationParams.overflowJewlOrange -
      CharacterCalculationParams.underflowJewlOrange <=
    0
  ) {
    CharacterCalculationParams.potentialJewlOrange = 0;
    CharacterCalculationParams.requiredJewlOrange = Math.abs(
      Math.floor(CharacterCalculationParams.potentialJewlPurple / 3) +
        CharacterCalculationParams.overflowJewlOrange -
        CharacterCalculationParams.underflowJewlOrange
    );
  } else {
    CharacterCalculationParams.potentialJewlOrange =
      Math.floor(CharacterCalculationParams.potentialJewlPurple / 3) +
      CharacterCalculationParams.overflowJewlOrange -
      CharacterCalculationParams.underflowJewlOrange;
  }

  //calculate remainders
  CharacterCalculationParams.remainderJewlGreen =
    CharacterCalculationParams.overflowJewlGreen % 3;
  CharacterCalculationParams.remainderJewlBlue =
    CharacterCalculationParams.potentialJewlBlue % 3;
  CharacterCalculationParams.remainderJewlPurple =
    CharacterCalculationParams.potentialJewlPurple % 3;
  CharacterCalculationParams.remainderJewlOrange =
    CharacterCalculationParams.potentialJewlOrange;
}
export function calculateCommonMaterial(
  sumCurrentAscension,
  sumDesiredAscension,
  commonMaterialWhiteC,
  commonMaterialGreenC,
  commonMaterialBlueC
) {
  CharacterCalculationParams.nCWhite = 0;
  CharacterCalculationParams.nCGreen = 0;
  CharacterCalculationParams.nCBlue = 0;

  for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
    CharacterCalculationParams.nCWhite +=
      CHARACTER_DATA.ascension[i].commonMaterialWhite;
    CharacterCalculationParams.nCGreen +=
      CHARACTER_DATA.ascension[i].commonMaterialGreen;
    CharacterCalculationParams.nCBlue +=
      CHARACTER_DATA.ascension[i].commonMaterialBlue;
  }
  CharacterCalculationParams.mCWhite = 0;

  //calculate overflow and underflow

  if (CharacterCalculationParams.nCWhite - commonMaterialWhiteC < 0) {
    CharacterCalculationParams.oCWhite = Math.abs(
      CharacterCalculationParams.nCWhite - commonMaterialWhiteC
    );
  } else {
    CharacterCalculationParams.oCWhite = 0;
    CharacterCalculationParams.uCWhite =
      CharacterCalculationParams.nCWhite - commonMaterialWhiteC;
  }

  if (CharacterCalculationParams.nCGreen - commonMaterialGreenC < 0) {
    CharacterCalculationParams.oCGreen = Math.abs(
      CharacterCalculationParams.nCGreen - commonMaterialGreenC
    );
  } else {
    CharacterCalculationParams.oCGreen = 0;
    CharacterCalculationParams.uCGreen =
      CharacterCalculationParams.nCGreen - commonMaterialGreenC;
  }
  if (CharacterCalculationParams.nCBlue - commonMaterialBlueC < 0) {
    CharacterCalculationParams.oCBlue = Math.abs(
      CharacterCalculationParams.nCBlue - commonMaterialBlueC
    );
  } else {
    CharacterCalculationParams.oCBlue = 0;
    CharacterCalculationParams.uCBlue =
      CharacterCalculationParams.nCBlue - commonMaterialBlueC;
  }

  // calculate what materials can be converted
  //can't convert green

  CharacterCalculationParams.mCWhite = Math.abs(
    0 - CharacterCalculationParams.uCWhite
  );

  if (
    Math.floor(CharacterCalculationParams.oCWhite / 3) +
      CharacterCalculationParams.oCGreen -
      CharacterCalculationParams.uCGreen <=
    0
  ) {
    CharacterCalculationParams.pCGreen = 0;
    CharacterCalculationParams.mCGreen = Math.abs(
      Math.floor(CharacterCalculationParams.oCWhite / 3) +
        CharacterCalculationParams.oCGreen -
        CharacterCalculationParams.uCGreen
    );
  } else {
    CharacterCalculationParams.pCGreen =
      Math.floor(CharacterCalculationParams.oCWhite / 3) +
      CharacterCalculationParams.oCGreen -
      CharacterCalculationParams.uCGreen;
  }
  if (
    Math.floor(CharacterCalculationParams.pCGreen / 3) +
      CharacterCalculationParams.oCBlue -
      CharacterCalculationParams.uCBlue <=
    0
  ) {
    CharacterCalculationParams.pCBlue = 0;
    CharacterCalculationParams.mCBlue = Math.abs(
      Math.floor(CharacterCalculationParams.pCGreen / 3) +
        CharacterCalculationParams.oCBlue -
        CharacterCalculationParams.uCBlue
    );
  } else {
    CharacterCalculationParams.pCBlue =
      Math.floor(CharacterCalculationParams.pCGreen / 3) +
      CharacterCalculationParams.oCBlue -
      CharacterCalculationParams.uCBlue;
  }

  //calculate remainders

  CharacterCalculationParams.rCWhite = CharacterCalculationParams.oCWhite % 3;
  CharacterCalculationParams.rCGreen = CharacterCalculationParams.pCGreen % 3;
  CharacterCalculationParams.rCBlue = CharacterCalculationParams.pCBlue;
}
export function calculateXP(
  currentLevel,
  desiredLevel,
  heroWitGreen,
  heroWitBlue,
  heroWitPurple
) {
  //////this functioni does not claculate blue and green conversions correctly
  CharacterCalculationParams.nExpGreen = 0;
  CharacterCalculationParams.nExpBlue = 0;
  CharacterCalculationParams.nExpPurple = 0;
  for (let i = currentLevel + 1; i < desiredLevel + 1; i++) {
    if (currentLevel == 7) {
      break;
    }
    CharacterCalculationParams.nExpGreen += CHARACTER_DATA.level[i].green;
    CharacterCalculationParams.nExpBlue += CHARACTER_DATA.level[i].blue;
    CharacterCalculationParams.nExpPurple += CHARACTER_DATA.level[i].purple;
  }

  if (CharacterCalculationParams.nExpGreen - heroWitGreen < 0) {
    CharacterCalculationParams.oExpGreen = Math.abs(
      CharacterCalculationParams.nExpGreen - heroWitGreen
    );
  } else {
    CharacterCalculationParams.oExpGreen = 0;
    CharacterCalculationParams.uExpGreen =
      CharacterCalculationParams.nExpGreen - heroWitGreen;
  }
  if (CharacterCalculationParams.nExpBlue - heroWitBlue < 0) {
    CharacterCalculationParams.oExpBlue = Math.abs(
      CharacterCalculationParams.nExpBlue - heroWitBlue
    );
  } else {
    CharacterCalculationParams.oExpBlue = 0;
    CharacterCalculationParams.uExpBlue =
      CharacterCalculationParams.nExpBlue - heroWitBlue;
  }
  if (CharacterCalculationParams.nExpPurple - heroWitPurple < 0) {
    CharacterCalculationParams.oExpPurple = Math.abs(
      CharacterCalculationParams.nExpPurple - heroWitPurple
    );
  } else {
    CharacterCalculationParams.oExpPurple = 0;
    CharacterCalculationParams.uExpPurple =
      CharacterCalculationParams.nExpPurple - heroWitPurple;
  }
  CharacterCalculationParams.mExpGreen = Math.abs(
    0 - CharacterCalculationParams.uExpGreen
  );
  //top block = underflow greater bottom block = over flow greater
  if (
    Math.floor(CharacterCalculationParams.oExpGreen / 5) +
      CharacterCalculationParams.oExpBlue -
      CharacterCalculationParams.uExpBlue <=
    0
  ) {
    CharacterCalculationParams.pExpBlue = 0;
    CharacterCalculationParams.mExpBlue = Math.abs(
      Math.floor(CharacterCalculationParams.oExpGreen / 5) +
        CharacterCalculationParams.oExpBlue -
        CharacterCalculationParams.uExpBlue
    );
  } else {
    CharacterCalculationParams.pExpBlue =
      Math.floor(CharacterCalculationParams.oExpGreen / 5) +
      CharacterCalculationParams.oExpBlue -
      CharacterCalculationParams.uExpBlue;
  }
  if (
    Math.floor(CharacterCalculationParams.pExpBlue / 4) +
      CharacterCalculationParams.oExpPurple -
      CharacterCalculationParams.uExpPurple <=
    0
  ) {
    CharacterCalculationParams.pExpPurple = 0;
    CharacterCalculationParams.mExpPurple = Math.abs(
      Math.floor(CharacterCalculationParams.pExpBlue / 4) +
        CharacterCalculationParams.oExpPurple -
        CharacterCalculationParams.uExpPurple
    );
  } else {
    CharacterCalculationParams.pExpPurple =
      Math.floor(CharacterCalculationParams.pExpBlue / 4) +
      CharacterCalculationParams.oExpPurple -
      CharacterCalculationParams.uExpPurple;
  }
  CharacterCalculationParams.rExpGreen =
    CharacterCalculationParams.oExpGreen % 5;
  CharacterCalculationParams.rExpBlue = CharacterCalculationParams.pExpBlue % 4;
  CharacterCalculationParams.rExpPurple = CharacterCalculationParams.pExpPurple;
}
export function calculateBossMaterial(
  sumCurrentAscension,
  sumDesiredAscension,
  bossMaterialC
) {
  CharacterCalculationParams.nBoss = 0;
  for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
    CharacterCalculationParams.nBoss +=
      CHARACTER_DATA.ascension[i].bossMaterial;
  }

  CharacterCalculationParams.rBoss =
    bossMaterialC - CharacterCalculationParams.nBoss;
  CharacterCalculationParams.nBoss =
    CharacterCalculationParams.nBoss - bossMaterialC;
}
export function calculateLocalSpecialty(
  sumCurrentAscension,
  sumDesiredAscension,
  localSpecialtyC
) {
  CharacterCalculationParams.nSpecialty = 0;
  for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
    CharacterCalculationParams.nSpecialty +=
      CHARACTER_DATA.ascension[i].localSpecialty;
  }
  CharacterCalculationParams.rSpecialty =
    localSpecialtyC - CharacterCalculationParams.nSpecialty;
  CharacterCalculationParams.nSpecialty =
    CharacterCalculationParams.nSpecialty - localSpecialtyC;
}
export function calculateMora(
  sumCurrentAscension,
  sumDesiredAscension,
  currentLevel,
  desiredLevel,
  moraC
) {
  CharacterCalculationParams.nMora = 0;
  for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
    CharacterCalculationParams.nMora += CHARACTER_DATA.ascension[i].mora;
  }
  for (let i = currentLevel + 1; i < desiredLevel + 1; i++) {
    if (currentLevel == 7) {
      break;
    }
    CharacterCalculationParams.nMora += CHARACTER_DATA.level[i].mora;
  }
  CharacterCalculationParams.rMora = moraC - CharacterCalculationParams.nMora;
  CharacterCalculationParams.nMora = CharacterCalculationParams.nMora - moraC;
}
