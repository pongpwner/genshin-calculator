import React from "react";
import "./talent-results.styles.scss";
import { connect } from "react-redux";
import MainSectionContainer from "../main-section-container/main-section-container.component";
import SubSectionContainer from "../sub-section-container/sub-section-container.component";
import ResultRow from "../result-row/result-row.component";
import {
  selectBlueTalentNeeded,
  selectBlueTalentRemaining,
  selectGreenTalentNeeded,
  selectGreenTalentRemaining,
  selectPurpleTalentNeeded,
  selectPurpleTalentRemaining,
  selectBossMaterialNeeded,
  selectBossMaterialRemaining,
  selectCommonMaterialBlueNeeded,
  selectCommonMaterialBlueRemaining,
  selectCommonMaterialGreenNeeded,
  selectCommonMaterialGreenRemaining,
  selectCommonMaterialWhiteNeeded,
  selectCommonMaterialWhiteRemaining,
  selectMoraNeeded,
  selectMoraRemaining,
  selectCrownNeeded,
  selectCrownRemaining,
} from "../../redux/talent/talent.selector";
const TalentResults = ({
  talentGreenNeeded,
  talentGreenRemaining,
  talentBlueNeeded,
  talentBlueRemaining,
  talentPurpleNeeded,
  talentPurpleRemaining,
  crownNeeded,
  crownRemaining,
  bossMaterialNeeded,
  bossMaterialRemaining,
  commonMaterialBlueNeeded,
  commonMaterialBlueRemaining,
  commonMaterialGreenNeeded,
  commonMaterialGreenRemaining,
  commonMaterialWhiteNeeded,
  commonMaterialWhiteRemaining,
  moraNeeded,
  moraRemaining,
}) => {
  return (
    <div className="talent-results">
      <MainSectionContainer>
        <SubSectionContainer>
          <h2>Talent Books</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={talentGreenNeeded}
            remaining={talentGreenRemaining}
            rarity="green"
          />
          <ResultRow
            required={talentBlueNeeded}
            remaining={talentBlueRemaining}
            rarity="blue"
          />
          <ResultRow
            required={talentPurpleNeeded}
            remaining={talentPurpleRemaining}
            rarity="purple"
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
          <h2>Boss Materials</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={bossMaterialNeeded}
            remaining={bossMaterialRemaining}
            rarity="orange"
          />
        </SubSectionContainer>
        <SubSectionContainer>
          <h2>Crowns</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            required={crownNeeded}
            remaining={crownRemaining}
            rarity="orange"
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
  talentGreenNeeded: selectGreenTalentNeeded(state),
  talentGreenRemaining: selectGreenTalentRemaining(state),
  talentBlueNeeded: selectBlueTalentNeeded(state),
  talentBlueRemaining: selectBlueTalentRemaining(state),
  talentPurpleNeeded: selectPurpleTalentNeeded(state),
  talentPurpleRemaining: selectPurpleTalentRemaining(state),
  commonMaterialWhiteNeeded: selectCommonMaterialWhiteNeeded(state),
  commonMaterialWhiteRemaining: selectCommonMaterialWhiteRemaining(state),
  commonMaterialGreenNeeded: selectCommonMaterialGreenNeeded(state),
  commonMaterialGreenRemaining: selectCommonMaterialGreenRemaining(state),
  commonMaterialBlueNeeded: selectCommonMaterialBlueNeeded(state),
  commonMaterialBlueRemaining: selectCommonMaterialBlueRemaining(state),
  bossMaterialNeeded: selectBossMaterialNeeded(state),
  bossMaterialRemaining: selectBossMaterialRemaining(state),
  moraNeeded: selectMoraNeeded(state),
  moraRemaining: selectMoraRemaining(state),
  crownNeeded: selectCrownNeeded(state),
  crownRemaining: selectCrownRemaining(state),
});
export default connect(mapStateToProps)(TalentResults);
