import { createSelector } from "reselect";

export const selectCharacter = (state) => state.character;

export const selectDropdown = createSelector(
  [selectCharacter],
  (character) => character.dropdown
);
export const selectCurrentLevel = createSelector(
  [selectCharacter],
  (character) => character.selectCurrentLevel
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
  (character) => character.commonMaterialWhite
);
export const selectCommonMaterialGreen = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialGreen
);
export const selectCommonMaterialBlue = createSelector(
  [selectCharacter],
  (character) => character.commonMaterialBlue
);
export const selectBossMaterial = createSelector(
  [selectCharacter],
  (character) => character.bossMaterial
);

export const selectLocalSpecialty = createSelector(
  [selectCharacter],
  (character) => character.localSpecialty
);

export const selectMora = createSelector(
  [selectCharacter],
  (character) => character.mora
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
