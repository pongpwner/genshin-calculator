import { createSelector } from "reselect";

export const selectCharacter = (state) => state.character;

export const selectDropdown = createSelector(
  [selectCharacter],
  (character) => character.dropdown
);
export const selectCurrentLevel = createSelector(
  [selectCharacter],
  (character) => character.currentLevel
);
export const selectDesiredLevel = createSelector(
  [selectCharacter],
  (character) => character.desiredLevel
);
export const selectCurrentRadioButton = createSelector(
  [selectCharacter],
  (character) => character.currentRadioButtonC
);
export const selectDesiredRadioButton = createSelector(
  [selectCharacter],
  (character) => character.desiredRadioButtonC
);
export const selectRadioButtonOptions = createSelector(
  [selectCharacter],
  (character) => character.radioButtons
);
export const selectGemWhite = createSelector(
  [selectCharacter],
  (character) => character.gemWhite
);
export const selectGemGreen = createSelector(
  [selectCharacter],
  (character) => character.gemGreen
);
export const selectGemBlue = createSelector(
  [selectCharacter],
  (character) => character.gemBlue
);
export const selectGemPurple = createSelector(
  [selectCharacter],
  (character) => character.gemPurple
);
export const selectGemOrange = createSelector(
  [selectCharacter],
  (character) => character.gemOrange
);
export const selectCommonMaterialWhite = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialWhiteC
);
export const selectCommonMaterialGreen = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialGreenC
);
export const selectCommonMaterialBlue = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialBlueC
);
export const selectBossMaterial = createSelector(
  [selectCharacter],
  (character) => character.bossMaterialC
);

export const selectLocalSpecialty = createSelector(
  [selectCharacter],
  (character) => character.localSpecialtyC
);

export const selectMora = createSelector(
  [selectCharacter],
  (character) => character.moraC
);

export const selectHeroWitGreen = createSelector(
  [selectCharacter],
  (character) => character.heroWitGreen
);
export const selectHeroWitBlue = createSelector(
  [selectCharacter],
  (character) => character.heroWitBlue
);
export const selectHeroWitPurple = createSelector(
  [selectCharacter],
  (character) => character.heroWitPurple
);

export const selectMoraNeeded = createSelector(
  [selectCharacter],
  (character) => character.moraNeeded
);
export const selectBossMaterialNeeded = createSelector(
  [selectCharacter],
  (character) => character.bossMaterialNeeded
);
export const selectLocalSpecialtyNeeded = createSelector(
  [selectCharacter],
  (character) => character.localSpecialtyNeeded
);
export const selectGemGreenNeeded = createSelector(
  [selectCharacter],
  (character) => character.gemGreenNeeded
);
export const selectGemBlueNeeded = createSelector(
  [selectCharacter],
  (character) => character.gemBlueNeeded
);
export const selectGemPurpleNeeded = createSelector(
  [selectCharacter],
  (character) => character.gemPurpleNeeded
);
export const selectGemOrangeNeeded = createSelector(
  [selectCharacter],
  (character) => character.gemOrangeNeeded
);
export const selectExpGreenNeeded = createSelector(
  [selectCharacter],
  (character) => character.expGreenNeeded
);
export const selectExpBlueNeeded = createSelector(
  [selectCharacter],
  (character) => character.expBlueNeeded
);
export const selectExpPurpleNeeded = createSelector(
  [selectCharacter],
  (character) => character.expPurpleNeeded
);
export const selectCommonMaterialWhiteNeeded = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialWhiteNeeded
);
export const selectCommonMaterialGreenNeeded = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialGreenNeeded
);

export const selectCommonMaterialBlueNeeded = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialBlueNeeded
);
////remaining
export const selectMoraRemaining = createSelector(
  [selectCharacter],
  (character) => character.moraRemaining
);
export const selectBossMaterialRemaining = createSelector(
  [selectCharacter],
  (character) => character.bossMaterialRemaining
);
export const selectLocalSpecialtyRemaining = createSelector(
  [selectCharacter],
  (character) => character.localSpecialtyRemaining
);
export const selectGemGreenRemaining = createSelector(
  [selectCharacter],
  (character) => character.gemGreenRemaining
);
export const selectGemBlueRemaining = createSelector(
  [selectCharacter],
  (character) => character.gemBlueRemaining
);
export const selectGemPurpleRemaining = createSelector(
  [selectCharacter],
  (character) => character.gemPurpleRemaining
);
export const selectGemOrangeRemaining = createSelector(
  [selectCharacter],
  (character) => character.gemOrangeRemaining
);
export const selectExpGreenRemaining = createSelector(
  [selectCharacter],
  (character) => character.expGreenRemaining
);
export const selectExpBlueRemaining = createSelector(
  [selectCharacter],
  (character) => character.expBlueRemaining
);
export const selectExpPurpleRemaining = createSelector(
  [selectCharacter],
  (character) => character.expPurpleRemaining
);
export const selectCommonMaterialWhiteRemaining = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialWhiteRemaining
);
export const selectCommonMaterialGreenRemaining = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialGreenRemaining
);

export const selectCommonMaterialBlueRemaining = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialBlueRemaining
);
export const selectCharacters = createSelector(
  [selectCharacter],
  (character) => character.characters
);
export const selectCharacterPortraits = createSelector(
  [selectCharacter],
  (character) => character.characterPortraits
);
export const selectIsFetching = createSelector(
  [selectCharacter],
  (character) => character.isFetching
);
