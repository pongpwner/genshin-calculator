import StrengthComparisonActionTypes from "./strength-comparison.types";

const INITIAL_STATE = {
  artifactCR: "",
  artifactCD: "",
  critValue: "",
  artifactCR2: "",
  artifactCD2: "",
  critValue2: "",
  atk1: "",
  cr1: "",
  cd1: "",
  pd1: "",
  bp1: "",
  atk2: "",
  cr2: "",
  cd2: "",
  pd2: "",
  bp2: "",
};

const strengthComparisonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StrengthComparisonActionTypes.HANDLE_CHANGE:
      const { name, value } = action.payload.target;

      return { ...state, [name]: value };
    case StrengthComparisonActionTypes.CALCULATE_BASE_POWER:
      const { atk1, atk2, cd1, cd2, cr1, cr2, pd1, pd2 } = state;

      return {
        ...state,
        bp1: (atk1 * (1 + (cr1 / 100) * (cd1 / 100)) * (1 + pd1 / 100)).toFixed(
          1
        ),
        bp2: (atk2 * (1 + (cr2 / 100) * (cd2 / 100)) * (1 + pd2 / 100)).toFixed(
          1
        ),
      };
    case StrengthComparisonActionTypes.CALCULATE_CRIT_VALUE:
      const { artifactCD, artifactCR, artifactCD2, artifactCR2 } = state;

      return {
        ...state,
        critValue: Number(artifactCD) + Number(artifactCR) * 2,
        critValue2: Number(artifactCD2) + Number(artifactCR2) * 2,
      };
    default:
      return { ...state };
  }
};

export default strengthComparisonReducer;
