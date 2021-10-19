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
export const selectSubsections = createSelector(
  [selectCharacter],
  (character) => character.subsections
);
