import "./character.styles.scss";

import CharacterInput from "../../components/character-input/character-input.component";
import CharacterResults from "../../components/character-results/character-results.component";

const Character = () => (
  <div className="character">
    <h1 className="title">Character Calculator</h1>
    <div className="content">
      <CharacterInput />
      <CharacterResults />
    </div>
  </div>
);

export default Character;
