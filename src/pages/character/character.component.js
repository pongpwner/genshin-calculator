import react from "react";
import "./character.styles.css";
import { connect } from "react-redux";
import CharacterInput from "../../components/character-input/character-input.component";
import MainSection from "../../components/main-section/main-section.component";
import {
  selectCharacter,
  selectSubsections,
} from "../../redux/character/character.selector";

const Character = ({ subsections, state }) => (
  <div className="character">
    <h1 className="title">Character Calculator</h1>
    <div className="content">
      <CharacterInput />
      <MainSection subsections={subsections} state={state} />
      {console.log(state)}
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  subsections: selectSubsections(state),
  state: selectCharacter(state),
});

export default connect(mapStateToProps)(Character);
