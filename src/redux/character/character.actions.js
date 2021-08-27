import { CharacterActionTypes } from "./character.types";

export const handleChange = (change) => ({
  type: CharacterActionTypes.HANDLE_CHANGE,
  payload: change,
});

export const handleRadioButton = (e) => ({
  type: CharacterActionTypes.HANDLE_RADIO_BUTTON,
  payload: e,
});
export const handleCurrentLevel = (e) => ({
  type: CharacterActionTypes.HANDLE_CURRENT_LEVEL,
  payload: e,
});
export const handleDesiredLevel = (e) => ({
  type: CharacterActionTypes.HANDLE_DESIRED_LEVEL,
  payload: e,
});

export const handleSubmit = (e) => ({
  type: CharacterActionTypes.HANDLE_SUBMIT,
  payload: e,
});
