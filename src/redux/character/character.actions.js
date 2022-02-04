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
  return async (dispatch) => {
    // dispatch(fetchCharactersStart());
    // fetch("https://api.genshin.dev/characters")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     //console.log(data);
    //     dispatch(fetchCharactersSuccess(data));
    //   })
    //   .catch((error) => dispatch(error.message));
    //////
    const fetchCharacters = await fetch("https://api.genshin.dev/characters");
    const characters = await fetchCharacters.json();

    let characterList = [];
    await characters.forEach((character) => {
      return fetch(`https://api.genshin.dev/characters/${character}/icon.png`)
        .then((response) => response.blob())
        .then((imageBlob) => {
          // Then create a local URL for that image and print it
          const imageObjectURL = URL.createObjectURL(imageBlob);

          characterList.push({
            characterName: character,
            link: imageObjectURL,
          });
        })
        .catch((error) => dispatch(fetchCharactersFailure(error.message)));
    });

    dispatch(fetchCharactersSuccess(characterList));
  };
};

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
