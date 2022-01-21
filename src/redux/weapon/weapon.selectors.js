import { createSelector } from "reselect";
export const selectWeapon = (state) => state.weapon;

export const selectRarity = createSelector(
  [selectWeapon],
  (weapon) => weapon.rarity
);
export const selectCurrentLevel = createSelector(
  [selectWeapon],
  (weapon) => weapon.currentLevel
);
export const selectDesiredLevel = createSelector(
  [selectWeapon],
  (weapon) => weapon.desiredLevel
);

export const selectCurrentRadioButton = createSelector(
  [selectWeapon],
  (weapon) => weapon.currentRadioButton
);

export const selectDesiredRadioButton = createSelector(
  [selectWeapon],
  (weapon) => weapon.desiredRadioButton
);

export const selectDomainMaterialGreen = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialGreen
);
export const selectDomainMaterialBlue = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialBlue
);
export const selectDomainMaterialPurple = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialPurple
);

export const selectDomainMaterialOrange = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialOrange
);
export const selectEliteMaterialGreen = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialGreen
);

export const selectEliteMaterialBlue = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialBlue
);
export const selectEliteMaterialPurple = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialPurple
);
export const selectCommonMaterialWhite = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialWhite
);
export const selectCommonMaterialGreen = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialGreen
);
export const selectCommonMaterialBlue = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialBlue
);

export const selectWhiteOre = createSelector(
  [selectWeapon],
  (weapon) => weapon.whiteOre
);
export const selectGreenOre = createSelector(
  [selectWeapon],
  (weapon) => weapon.greenOre
);
export const selectBlueOre = createSelector(
  [selectWeapon],
  (weapon) => weapon.blueOre
);

export const selectMora = createSelector(
  [selectWeapon],
  (weapon) => weapon.mora
);
export const selectSubsections = createSelector(
  [selectWeapon],
  (weapon) => weapon.subsections
);
//
export const selectMoraNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.moraNeeded
);
export const selectWhiteOreNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.whiteOreNeeded
);
export const selectGreenOreNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.greenOreNeeded
);
export const selectBlueOreNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.blueOreNeeded
);
export const selectDomainMaterialGreenNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialGreenNeeded
);
export const selectDomainMaterialBlueNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialBlueNeeded
);
export const selectDomainMaterialPurpleNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialPurpleNeeded
);
export const selectDomainMaterialOrangeNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialOrangeNeeded
);
export const selectEliteMaterialGreenNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialGreenNeeded
);
export const selectEliteMaterialBlueNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialBlueNeeded
);
export const selectEliteMaterialPurpleNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialPurpleNeeded
);
export const selectCommonMaterialWhiteNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialWhiteNeeded
);
export const selectCommonMaterialGreenNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialGreenNeeded
);
export const selectCommonMaterialBlueNeeded = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialBlueNeeded
);
////
export const selectMoraRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.moraRemaining
);
export const selectWhiteOreRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.whiteOreRemaining
);
export const selectGreenOreRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.greenOreRemaining
);
export const selectBlueOreRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.blueOreRemaining
);
export const selectDomainMaterialGreenRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialGreenRemaining
);
export const selectDomainMaterialBlueRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialBlueRemaining
);
export const selectDomainMaterialPurpleRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialPurpleRemaining
);
export const selectDomainMaterialOrangeRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.domainMaterialOrangeRemaining
);
export const selectEliteMaterialGreenRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialGreenRemaining
);
export const selectEliteMaterialBlueRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialBlueRemaining
);
export const selectEliteMaterialPurpleRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.eliteMaterialPurpleRemaining
);
export const selectCommonMaterialWhiteRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialWhiteRemaining
);
export const selectCommonMaterialGreenRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialGreenRemaining
);
export const selectCommonMaterialBlueRemaining = createSelector(
  [selectWeapon],
  (weapon) => weapon.commonMaterialBlueRemaining
);
