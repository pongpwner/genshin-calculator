import React from "react";
import { connect } from "react-redux";
import "./character-results.styles.scss";
import MainSectionContainer from "../main-section-container/main-section-container.component";
import ResultRow from "../result-row/result-row.component";
import SubSectionContainer from "../sub-section-container/sub-section-container.component";
import {
  selectBossMaterialNeeded,
  selectBossMaterialRemaining,
  selectCommonMaterialBlueNeeded,
  selectCommonMaterialBlueRemaining,
  selectCommonMaterialGreenNeeded,
  selectCommonMaterialGreenRemaining,
  selectCommonMaterialWhiteNeeded,
  selectCommonMaterialWhiteRemaining,
  selectExpBlueNeeded,
  selectExpBlueRemaining,
  selectExpGreenNeeded,
  selectExpGreenRemaining,
  selectExpPurpleNeeded,
  selectExpPurpleRemaining,
  selectGemBlueNeeded,
  selectGemBlueRemaining,
  selectGemGreenNeeded,
  selectGemGreenRemaining,
  selectGemOrangeNeeded,
  selectGemOrangeRemaining,
  selectGemPurpleNeeded,
  selectGemPurpleRemaining,
  selectLocalSpecialtyNeeded,
  selectLocalSpecialtyRemaining,
  selectMoraNeeded,
  selectMoraRemaining,
} from "../../redux/character/character.selector";
const CharacterResults = ({
  bossMaterialNeeded,
  bossMaterialRemaining,
  commonMaterialBlueNeeded,
  commonMaterialBlueRemaining,
  commonMaterialGreenNeeded,
  commonMaterialGreenRemaining,
  commonMaterialWhiteNeeded,
  commonMaterialWhiteRemaining,
  expBlueNeeded,
  expBlueRemaining,
  expGreenNeeded,
  expGreenRemaining,
  expPurpleNeeded,
  expPurpleRemaining,
  gemBlueNeeded,
  gemBlueRemaining,
  gemGreenNeeded,
  gemGreenRemaining,
  gemOrangeNeeded,
  gemOrangeRemaining,
  gemPurpleNeeded,
  gemPurpleRemaining,
  localSpecialtyNeeded,
  localSpecialtyRemaining,
  moraNeeded,
  moraRemaining,
}) => {
  return (
    <div className="character-results">
      <MainSectionContainer>
        <SubSectionContainer>
          <h2>Jewls</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={gemGreenNeeded}
            remaining={gemGreenRemaining}
            rarity="green"
          />
          <ResultRow
            required={gemBlueNeeded}
            remaining={gemBlueRemaining}
            rarity="blue"
          />
          <ResultRow
            required={gemPurpleNeeded}
            remaining={gemPurpleRemaining}
            rarity="purple"
          />
          <ResultRow
            required={gemOrangeNeeded}
            remaining={gemOrangeRemaining}
            rarity="orange"
          />
        </SubSectionContainer>

        <SubSectionContainer>
          <h2>Common Materials</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={commonMaterialWhiteNeeded}
            remaining={commonMaterialWhiteRemaining}
            rarity="white"
          />
          <ResultRow
            required={commonMaterialGreenNeeded}
            remaining={commonMaterialGreenRemaining}
            rarity="green"
          />
          <ResultRow
            required={commonMaterialBlueNeeded}
            remaining={commonMaterialBlueRemaining}
            rarity="blue"
          />
        </SubSectionContainer>

        <SubSectionContainer>
          <h2>EXP</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={expGreenNeeded}
            remaining={expGreenRemaining}
            rarity="green"
          />
          <ResultRow
            required={expBlueNeeded}
            remaining={expBlueRemaining}
            rarity="blue"
          />
          <ResultRow
            required={expPurpleNeeded}
            remaining={expPurpleRemaining}
            rarity="purple"
          />
        </SubSectionContainer>

        <SubSectionContainer>
          <h2>Boss Materials</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={bossMaterialNeeded}
            remaining={bossMaterialRemaining}
            rarity="purple"
          />
        </SubSectionContainer>

        <SubSectionContainer>
          <h2>Local Specialties</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={localSpecialtyNeeded}
            remaining={localSpecialtyRemaining}
            rarity="white"
          />
        </SubSectionContainer>

        <SubSectionContainer>
          <h2>Mora</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={moraNeeded}
            remaining={moraRemaining}
            rarity="blue"
          />
        </SubSectionContainer>
      </MainSectionContainer>
    </div>
  );
};
const mapStateToProps = (state) => ({
  moraNeeded: selectMoraNeeded(state),
  moraRemaining: selectMoraRemaining(state),
  bossMaterialNeeded: selectBossMaterialNeeded(state),
  bossMaterialRemaining: selectBossMaterialRemaining(state),
  localSpecialtyNeeded: selectLocalSpecialtyNeeded(state),
  localSpecialtyRemaining: selectLocalSpecialtyRemaining(state),
  gemGreenNeeded: selectGemGreenNeeded(state),
  gemGreenRemaining: selectGemGreenRemaining(state),
  gemBlueNeeded: selectGemBlueNeeded(state),
  gemBlueRemaining: selectGemBlueRemaining(state),
  gemPurpleNeeded: selectGemPurpleNeeded(state),
  gemPurpleRemaining: selectGemPurpleRemaining(state),
  gemOrangeNeeded: selectGemOrangeNeeded(state),
  gemOrangeRemaining: selectGemOrangeRemaining(state),
  expGreenNeeded: selectExpGreenNeeded(state),
  expGreenRemaining: selectExpGreenRemaining(state),
  expBlueNeeded: selectExpBlueNeeded(state),
  expBlueRemaining: selectExpBlueRemaining(state),
  expPurpleNeeded: selectExpPurpleNeeded(state),
  expPurpleRemaining: selectExpPurpleRemaining(state),
  commonMaterialWhiteNeeded: selectCommonMaterialWhiteNeeded(state),
  commonMaterialWhiteRemaining: selectCommonMaterialWhiteRemaining(state),
  commonMaterialGreenNeeded: selectCommonMaterialGreenNeeded(state),
  commonMaterialGreenRemaining: selectCommonMaterialGreenRemaining(state),
  commonMaterialBlueNeeded: selectCommonMaterialBlueNeeded(state),
  commonMaterialBlueRemaining: selectCommonMaterialBlueRemaining(state),
});
export default connect(mapStateToProps)(CharacterResults);
