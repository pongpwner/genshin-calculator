import { createSelector } from "reselect";

export const selectStrengthComparison = (state) => state.strengthComparison;

export const selectArtifactCR = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.artifactCR
);
export const selectArtifactCD = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.artifactCD
);
export const selectCritValue = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.critValue
);
export const selectCritValue2 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.critValue2
);
export const selectartifactCR2 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.artifactCR2
);
export const selectArtifactCD2 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.artifactCD2
);

export const selectAtk1 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.atk1
);
export const selectCr1 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.cr1
);
export const selectCr2 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.cr2
);
export const selectCd1 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.cd1
);
export const selectCd2 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.cd2
);
export const selectPd1 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.pd1
);
export const selectPd2 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.pd2
);

export const selectBp1 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.bp1
);
export const selectBp2 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.bp2
);

export const selectAtk2 = createSelector(
  [selectStrengthComparison],
  (selectStrengthComparison) => selectStrengthComparison.atk2
);
