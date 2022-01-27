import StrengthComparisonActionTypes from "./strength-comparison.types";

export const handleChange = (event) => ({
  type: StrengthComparisonActionTypes.HANDLE_CHANGE,
  payload: event,
});

export const calculateCritValue = () => ({
  type: StrengthComparisonActionTypes.CALCULATE_CRIT_VALUE,
});

export const calculateBasePower = () => ({
  type: StrengthComparisonActionTypes.CALCULATE_BASE_POWER,
});
