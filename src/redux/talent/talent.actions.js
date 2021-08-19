import { TalentActionTypes } from "./talent.types";

export const setGreenTalent = (greenTalent) => ({
  type: TalentActionTypes.SET_GREEN_TALENT,
  payload: greenTalent,
});

export const setBlueTalent = (blueTalent) => ({
  type: TalentActionTypes.SET_BLUE_TALENT,
  payload: blueTalent,
});

export const setPurpleTalent = (purpleTalent) => ({
  type: TalentActionTypes.SET_PURPLE_TALENT,
  payload: purpleTalent,
});

export const handleChange = (change) => ({
  type: TalentActionTypes.HANDLE_CHANGE,
  payload: change,
});
export const handleSubmit = (submit) => ({
  type: TalentActionTypes.HANDLE_SUBMIT,
  payload: submit,
});
