import { createSelector } from "reselect";

const selectTalent = (state) => state.talent;

export const selectGreenTalent = createSelector(
  [selectTalent],
  (talent) => talent.greenTalent
);
export const selectBlueTalent = createSelector(
  [selectTalent],
  (talent) => talent.blueTalent
);

export const selectPurpleTalent = createSelector(
  [selectTalent],
  (talent) => talent.purpleTalent
);
export const selectGreenTalentNeeded = createSelector(
  [selectTalent],
  (talent) => talent.greenTalentNeeded
);
export const selectBlueTalentNeeded = createSelector(
  [selectTalent],
  (talent) => talent.blueTalentNeeded
);

export const selectPurpleTalentNeeded = createSelector(
  [selectTalent],
  (talent) => talent.purpleTalentNeeded
);
export const selectMoraNeeded = createSelector(
  [selectTalent],
  (talent) => talent.moraNeeded
);
export const selectTalentLv = createSelector(
  [selectTalent],
  (talent) => talent.talentLv
);
export const selectAttackLv = createSelector(
  [selectTalent],
  (talent) => talent.attackLv
);
export const selectSkillLv = createSelector(
  [selectTalent],
  (talent) => talent.skillLv
);
export const selectBurstLv = createSelector(
  [selectTalent],
  (talent) => talent.burstLv
);
export const selectCommonMaterialWhite = createSelector(
  [selectTalent],
  (talent) => talent.commonMaterialWhite
);
export const selectCommonMaterialGreen = createSelector(
  [selectTalent],
  (talent) => talent.commonMaterialGreen
);
export const selectCommonMaterialBlue = createSelector(
  [selectTalent],
  (talent) => talent.commonMaterialBlue
);
export const selectCommonMaterialWhiteNeeded = createSelector(
  [selectTalent],
  (talent) => talent.commonMaterialWhiteNeeded
);
export const selectCommonMaterialGreenNeeded = createSelector(
  [selectTalent],
  (talent) => talent.commonMaterialGreenNeeded
);
export const selectCommonMaterialBlueNeeded = createSelector(
  [selectTalent],
  (talent) => talent.commonMaterialBlueNeeded
);
export const selectBossMaterialNeeded = createSelector(
  [selectTalent],
  (talent) => talent.bossMaterialNeeded
);
export const selectBossMaterial = createSelector(
  [selectTalent],
  (talent) => talent.bossMaterial
);
export const selectCrown = createSelector(
  [selectTalent],
  (talent) => talent.crown
);
export const selectCrownNeeded = createSelector(
  [selectTalent],
  (talent) => talent.crownNeeded
);
