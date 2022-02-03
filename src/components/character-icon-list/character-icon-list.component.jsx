import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./character-icon-list.styles.scss";
import CharacterIcon from "../character-icon/character-icon.component";
import {
  selectCharacterPortraits,
  selectCharacters,
  selectIsFetching,
} from "../../redux/character/character.selector";
import { fetchCharactersStartAsync } from "../../redux/character/character.actions";
const CharacterIconList = ({
  characterPortraits,
  characters,
  isFetching,

  fetchCharactersStartAsync,
  setHidden,
}) => {
  return (
    <div className="character-icon-list">
      {!isFetching && (
        <>
          {characters.map((character) => (
            <CharacterIcon
              setHidden={setHidden}
              link={character.link}
              name={character.characterName}
            />
          ))}
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  characterPortraits: selectCharacterPortraits(state),
  characters: selectCharacters(state),
  isFetching: selectIsFetching(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchCharactersStartAsync: () => dispatch(fetchCharactersStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterIconList);
