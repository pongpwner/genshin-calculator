import { WeaponActionTypes } from "./weapon.types";
export const handleChange = (change) => ({
  type: WeaponActionTypes.HANDLE_CHANGE,
  payload: change,
});

export const handleSubmit = (submit) => ({
  type: WeaponActionTypes.HANDLE_SUBMIT,
  payload: submit,
});

export const handleRadioButton = (event) => ({
  type: WeaponActionTypes.HANDLE_RADIO_BUTTON,
  payload: event,
});
