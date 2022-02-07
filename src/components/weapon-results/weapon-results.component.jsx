import React from "react";
import { connect } from "react-redux";
import "./weapon-results.styles.scss";
import MainSectionContainer from "../main-section-container/main-section-container.component";
import SubSectionContainer from "../sub-section-container/sub-section-container.component";
import ResultRow from "../result-row/result-row.component";
import {
  selectWhiteOreNeeded,
  selectWhiteOreRemaining,
  selectGreenOreNeeded,
  selectGreenOreRemaining,
  selectBlueOreNeeded,
  selectBlueOreRemaining,
  selectDomainMaterialBlueNeeded,
  selectDomainMaterialBlueRemaining,
  selectDomainMaterialGreenNeeded,
  selectDomainMaterialGreenRemaining,
  selectMoraNeeded,
  selectMoraRemaining,
  selectDomainMaterialPurpleNeeded,
  selectDomainMaterialPurpleRemaining,
  selectDomainMaterialOrangeNeeded,
  selectDomainMaterialOrangeRemaining,
  selectEliteMaterialPurpleNeeded,
  selectEliteMaterialPurpleRemaining,
  selectEliteMaterialBlueNeeded,
  selectEliteMaterialBlueRemaining,
  selectEliteMaterialGreenNeeded,
  selectEliteMaterialGreenRemaining,
  selectCommonMaterialBlueNeeded,
  selectCommonMaterialBlueRemaining,
  selectCommonMaterialGreenNeeded,
  selectCommonMaterialGreenRemaining,
  selectCommonMaterialWhiteNeeded,
  selectCommonMaterialWhiteRemaining,
} from "../../redux/weapon/weapon.selectors";

const WeaponResults = ({
  whiteOreNeeded,
  whiteOreRemaining,
  greenOreNeeded,
  greenOreRemaining,
  blueOreNeeded,
  blueOreRemaining,
  domainMaterialBlueNeeded,
  domainMaterialBlueRemaining,
  domainMaterialGreenNeeded,
  domainMaterialGreenRemaining,
  moraNeeded,
  moraRemaining,
  domainMaterialPurpleNeeded,
  domainMaterialPurpleRemaining,
  domainMaterialOrangeNeeded,
  domainMaterialOrangeRemaining,
  eliteMaterialPurpleNeeded,
  eliteMaterialPurpleRemaining,
  eliteMaterialBlueNeeded,
  eliteMaterialBlueRemaining,
  eliteMaterialGreenNeeded,
  eliteMaterialGreenRemaining,
  commonMaterialBlueNeeded,
  commonMaterialBlueRemaining,
  commonMaterialGreenNeeded,
  commonMaterialGreenRemaining,
  commonMaterialWhiteNeeded,
  commonMaterialWhiteRemaining,
}) => {
  return (
    <div className="weapon-results">
      <MainSectionContainer>
        <SubSectionContainer>
          <h2>Domain Materials</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            remaining={domainMaterialGreenRemaining}
            required={domainMaterialGreenNeeded}
            rarity="green"
          />
          <ResultRow
            remaining={domainMaterialBlueRemaining}
            required={domainMaterialBlueNeeded}
            rarity="blue"
          />
          <ResultRow
            remaining={domainMaterialPurpleRemaining}
            required={domainMaterialPurpleNeeded}
            rarity="purple"
          />
          <ResultRow
            remaining={domainMaterialOrangeRemaining}
            required={domainMaterialOrangeNeeded}
            rarity="orange"
          />
        </SubSectionContainer>

        <SubSectionContainer>
          <h2>Weapon Materials</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            remaining={eliteMaterialGreenRemaining}
            required={eliteMaterialGreenNeeded}
            rarity="green"
          />
          <ResultRow
            remaining={eliteMaterialBlueRemaining}
            required={eliteMaterialBlueNeeded}
            rarity="blue"
          />
          <ResultRow
            remaining={eliteMaterialPurpleRemaining}
            required={eliteMaterialPurpleNeeded}
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
            remaining={commonMaterialWhiteRemaining}
            required={commonMaterialWhiteNeeded}
            rarity="white"
          />
          <ResultRow
            remaining={commonMaterialGreenRemaining}
            required={commonMaterialGreenNeeded}
            rarity="green"
          />
          <ResultRow
            remaining={commonMaterialBlueRemaining}
            required={commonMaterialBlueNeeded}
            rarity="blue"
          />
        </SubSectionContainer>
        <SubSectionContainer>
          <h2>Mystic Enchancement Ore</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>

          <ResultRow
            remaining={blueOreRemaining}
            required={blueOreNeeded}
            rarity="blue"
          />
        </SubSectionContainer>

        <SubSectionContainer>
          <h2>Mora</h2>
          <div className="heading">
            <h3>required</h3>
            <h3>remaining</h3>
          </div>
          <ResultRow
            remaining={moraRemaining}
            required={moraNeeded}
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
  whiteOreNeeded: selectWhiteOreNeeded(state),
  whiteOreRemaining: selectWhiteOreRemaining(state),
  greenOreNeeded: selectGreenOreNeeded(state),
  greenOreRemaining: selectGreenOreRemaining(state),
  blueOreNeeded: selectBlueOreNeeded(state),
  blueOreRemaining: selectBlueOreRemaining(state),
  domainMaterialGreenNeeded: selectDomainMaterialGreenNeeded(state),
  domainMaterialGreenRemaining: selectDomainMaterialGreenRemaining(state),
  domainMaterialBlueNeeded: selectDomainMaterialBlueNeeded(state),
  domainMaterialBlueRemaining: selectDomainMaterialBlueRemaining(state),
  domainMaterialPurpleNeeded: selectDomainMaterialPurpleNeeded(state),
  domainMaterialPurpleRemaining: selectDomainMaterialPurpleRemaining(state),
  domainMaterialOrangeNeeded: selectDomainMaterialOrangeNeeded(state),
  domainMaterialOrangeRemaining: selectDomainMaterialOrangeRemaining(state),
  eliteMaterialGreenNeeded: selectEliteMaterialGreenNeeded(state),
  eliteMaterialGreenRemaining: selectEliteMaterialGreenRemaining(state),
  eliteMaterialBlueNeeded: selectEliteMaterialBlueNeeded(state),
  eliteMaterialBlueRemaining: selectEliteMaterialBlueRemaining(state),
  eliteMaterialPurpleNeeded: selectEliteMaterialPurpleNeeded(state),
  eliteMaterialPurpleRemaining: selectEliteMaterialPurpleRemaining(state),
  commonMaterialGreenNeeded: selectCommonMaterialGreenNeeded(state),
  commonMaterialGreenRemaining: selectCommonMaterialGreenRemaining(state),
  commonMaterialBlueNeeded: selectCommonMaterialBlueNeeded(state),
  commonMaterialBlueRemaining: selectCommonMaterialBlueRemaining(state),
  commonMaterialWhiteNeeded: selectCommonMaterialWhiteNeeded(state),
  commonMaterialWhiteRemaining: selectCommonMaterialWhiteRemaining(state),
});
export default connect(mapStateToProps)(WeaponResults);
