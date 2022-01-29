import { CharacterActionTypes } from "./character.types";
import { selectCharacters } from "./character.selector";
import store from "../store";

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
/////////async
export const fetchCharactersSuccess = (characterList) => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_SUCCESS,
  payload: characterList,
});
export const fetchCharactersFailure = (errorMessage) => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_FAILURE,
  payload: errorMessage,
});

export const fetchCharactersStart = () => ({
  type: CharacterActionTypes.FETCH_CHARACTERS_START,
});
export const fetchCharactersStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCharactersStart());
    fetch("https://api.genshin.dev/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(fetchCharactersSuccess(data));
      })
      .catch((error) => dispatch(error.message));
  };
};

export const fetchCharacterPortraitsSuccess = (characterList) => ({
  type: CharacterActionTypes.FETCH_CHARACTER_PORTRAITS_SUCCESS,
  payload: characterList,
});
export const fetchCharacterPortraitsFailure = (errorMessage) => ({
  type: CharacterActionTypes.FETCH_CHARACTER_PORTRAITS_FAILURE,
  payload: errorMessage,
});

export const fetchCharacterPortraitsStart = () => ({
  type: CharacterActionTypes.FETCH_CHARACTER_PORTRAITS_START,
});
export const fetchCharacterPortraitsStartAsync = () => {
  return (dispatch, getState) => {
    const state = getState();
    const characters = selectCharacters(state);
    dispatch(fetchCharacterPortraitsStart());
    let portraits = [];
    characters.map((character) => {
      return fetch(`https://api.genshin.dev/characters/${character}/icon.png`)
        .then((response) => response.blob())
        .then((imageBlob) => {
          // Then create a local URL for that image and print it
          const imageObjectURL = URL.createObjectURL(imageBlob);
          //console.log(imageObjectURL);
          portraits.push(imageObjectURL);
        })
        .catch((error) =>
          dispatch(fetchCharacterPortraitsFailure(error.message))
        );
    });
    dispatch(fetchCharacterPortraitsSuccess(portraits));
  };
};
