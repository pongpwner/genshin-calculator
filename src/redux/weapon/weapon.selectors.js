import { createSelector } from "reselect";
import WeaponInput from "../../components/weapon-input/weapon-input.component";

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
