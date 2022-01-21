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
  const results = [
    {
      material: "Mora",
      required: moraNeeded,
      remaining: moraRemaining,
      rarity: "blue",
      id: 0,
    },
    {
      material: "Boss Material",
      required: bossMaterialNeeded,
      remaining: bossMaterialRemaining,
      rarity: "purple",
      id: 1,
    },
    {
      material: "Local Specialty",
      required: localSpecialtyNeeded,
      remaining: localSpecialtyRemaining,
      rarity: "white",
      id: 2,
    },
    {
      material: "Jewel",
      required: gemGreenNeeded,
      remaining: gemGreenRemaining,
      rarity: "green",
      id: 3,
    },
    {
      material: "Jewel",
      required: gemBlueNeeded,
      remaining: gemBlueRemaining,
      rarity: "blue",
      id: 4,
    },
    {
      material: "Jewel",
      required: gemPurpleNeeded,
      remaining: gemPurpleRemaining,
      rarity: "purple",
      id: 5,
    },
    {
      material: "Jewel",
      required: gemOrangeNeeded,
      remaining: gemOrangeRemaining,
      rarity: "orange",
      id: 6,
    },
    {
      material: "Common Material",
      required: commonMaterialWhiteNeeded,
      remaining: commonMaterialWhiteRemaining,
      rarity: "white",
      id: 7,
    },
    {
      material: "Common Material",
      required: commonMaterialGreenNeeded,
      remaining: commonMaterialGreenRemaining,
      rarity: "green",
      id: 8,
    },
    {
      material: "Common Material",
      required: commonMaterialBlueNeeded,
      remaining: commonMaterialBlueRemaining,
      rarity: "blue",
      id: 9,
    },
    {
      material: "EXP",
      required: expGreenNeeded,
      remaining: expGreenRemaining,
      rarity: "green",
      id: 10,
    },
    {
      material: "EXP",
      required: expBlueNeeded,
      remaining: expBlueRemaining,
      rarity: "blue",
      id: 11,
    },
    {
      material: "EXP",
      required: expPurpleNeeded,
      remaining: expPurpleRemaining,
      rarity: "purple",
      id: 12,
    },
  ];
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
          <h2>Common Material</h2>
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
          <h2>Boss Material</h2>
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
          <h2>Local Specialty</h2>
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

{
  /* <div className="character-results">
      <MainSectionContainer>
        <ResultRow
          material="Material"
          required="Required"
          remaining="Remaining"
          heading
          key={99}
        />
        {results.map((result) => (
          <ResultRow
            material={result.material}
            required={result.required}
            remaining={result.remaining}
            rarity={result.rarity}
            key={result.id}
          />
        ))}
      </MainSectionContainer>
    </div> */
}
