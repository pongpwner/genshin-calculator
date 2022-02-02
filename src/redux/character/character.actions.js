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
        //console.log(data);
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
      return fetch(
        `https://api.genshin.dev/characters/${character.characterName}/icon.png`
      )
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
export const combineData = () => ({
  type: CharacterActionTypes.COMBINE_DATA,
});
export const fetchMaterialsStart = () => ({
  type: CharacterActionTypes.FETCH_MATERIALS_START,
});
export const fetchMaterialsSuccess = (materials) => ({
  type: CharacterActionTypes.FETCH_MATERIALS_SUCCESS,
  payload: materials,
});
export const fetchMaterialsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchMaterialsStart());
    const fetch1 = await fetch(
      `https://api.genshin.dev/materials/common-ascension`
    );
    const data1 = await fetch1.json();
    const commonMaterials = Object.entries(data1);

    const fetch2 = await fetch(
      `https://api.genshin.dev/materials/local-specialties`
    );
    const data2 = await fetch2.json();
    const localSpecialties = Object.values(data2).flat();
    dispatch(
      fetchMaterialsSuccess({
        localSpecialties: localSpecialties,
        commonMaterials: commonMaterials,
      })
    );
  };
};

export const getMaterialNames = (characterName) => ({
  type: CharacterActionTypes.GET_MATERIAL_NAMES,
  payload: characterName,
});
