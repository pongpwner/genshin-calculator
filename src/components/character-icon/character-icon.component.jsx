import React from "react";
import "./character-icon.styles.scss";
import { connect } from "react-redux";
import { getMaterialNames } from "../../redux/character/character.actions";
const CharacterIcon = ({ name, link, getMaterialNames, setHidden }) => {
  return (
    <button
      className="character-icon"
      onClick={() => {
        getMaterialNames({ name, link });
        setHidden(true);
      }}
    >
      <img src={link} alt={name}></img>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getMaterialNames: (name) => dispatch(getMaterialNames(name)),
});
export default connect(null, mapDispatchToProps)(CharacterIcon);
