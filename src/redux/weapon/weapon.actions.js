import { WeaponActionTypes } from "./weapon.types";
export const handleChange = (change) => ({
  type: WeaponActionTypes.HANDLE_CHANGE,
  payload: change,
});

export const handleSubmit = (event) => ({
  type: WeaponActionTypes.HANDLE_SUBMIT,
  payload: event,
});

export const handleRadioButton = (event) => ({
  type: WeaponActionTypes.HANDLE_RADIO_BUTTON,
  payload: event,
});

export const handleCurrentLevel = (level) => ({
  type: WeaponActionTypes.HANDLE_CURRENT_LEVEL,
  payload: level,
});
export const handleDesiredLevel = (level) => ({
  type: WeaponActionTypes.HANDLE_DESIRED_LEVEL,
  payload: level,
});
