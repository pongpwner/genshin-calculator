import React, { useEffect } from "react";
import "./strength-comparison.styles.scss";
import { connect } from "react-redux";
import FormInputWithLabel from "../../components/form-input-with-label/form-input-with-label.component";
import MainSectionContainer from "../../components/main-section-container/main-section-container.component";
import SubSectionContainer from "../../components/sub-section-container/sub-section-container.component";
import {
  selectArtifactCD,
  selectArtifactCD2,
  selectArtifactCR,
  selectartifactCR2,
  selectAtk1,
  selectAtk2,
  selectBp1,
  selectBp2,
  selectCd1,
  selectCd2,
  selectCr1,
  selectCr2,
  selectCritValue,
  selectCritValue2,
  selectPd1,
  selectPd2,
} from "../../redux/strength-comparison/strength-comparison.selectors";
import {
  calculateBasePower,
  calculateCritValue,
  handleChange,
} from "../../redux/strength-comparison/strength-comparison.actions";
const StrengthComparison = ({
  artifactCR,
  artifactCD,
  artifactCR2,
  artifactCD2,
  atk1,
  atk2,
  cd1,
  cd2,
  cr1,
  cr2,
  bp1,
  bp2,
  pd1,
  pd2,
  critValue,
  critValue2,
  handleChange,
  calculateBasePower,
  calculateCritValue,
}) => {
  useEffect(() => {
    calculateBasePower();
  }, [atk1, atk2, cd1, cd2, cr1, cr2, pd1, pd2, calculateBasePower]);
  useEffect(() => {
    calculateCritValue();
  }, [artifactCD, artifactCR, artifactCD2, artifactCR2, calculateCritValue]);
  return (
    <div className="strength-comparison">
      <h1>Strength Comparison Calculator </h1>
      <div className="content">
        <MainSectionContainer row title="Artifact Crit Value" mobileCol>
          <SubSectionContainer>
            <h3>crit value 1</h3>
            <div className="section">
              <div className="inputs">
                <FormInputWithLabel
                  type="number"
                  name="artifactCR"
                  value={artifactCR}
                  label="artifact crit rate"
                  handleChange={(event) => handleChange(event)}
                />

                <FormInputWithLabel
                  type="number"
                  name="artifactCD"
                  value={artifactCD}
                  label="artifact crit damage"
                  handleChange={(event) => handleChange(event)}
                />
              </div>
              <div className="results">
                crit value:<span className="result">{critValue}</span>
              </div>
            </div>
          </SubSectionContainer>
          <SubSectionContainer>
            <h3>crit value 2</h3>
            <div className="section">
              <div className="inputs">
                <FormInputWithLabel
                  type="number"
                  name="artifactCR2"
                  value={artifactCR2}
                  label="artifact crit rate"
                  handleChange={(event) => handleChange(event)}
                />

                <FormInputWithLabel
                  type="number"
                  name="artifactCD2"
                  value={artifactCD2}
                  label="artifact crit damage"
                  handleChange={(event) => handleChange(event)}
                />
              </div>
              <div className="results">
                crit value:<span className="result">{critValue2}</span>
              </div>
            </div>
          </SubSectionContainer>
        </MainSectionContainer>

        <MainSectionContainer row title="Character Power Level" mobileCol>
          <SubSectionContainer>
            <h3> power level 1 </h3>
            <div className="section">
              <div className="inputs">
                <FormInputWithLabel
                  type="number"
                  name="atk1"
                  value={atk1}
                  label="attack"
                  handleChange={(event) => handleChange(event)}
                />

                <FormInputWithLabel
                  type="number"
                  name="cr1"
                  value={cr1}
                  label="crit rate"
                  handleChange={(event) => handleChange(event)}
                />

                <FormInputWithLabel
                  type="number"
                  name="cd1"
                  value={cd1}
                  label="crit damage"
                  handleChange={(event) => handleChange(event)}
                />
                <FormInputWithLabel
                  type="number"
                  name="pd1"
                  value={pd1}
                  label="percentage damage"
                  handleChange={(event) => handleChange(event)}
                />
              </div>
              <div className="results">
                power level:<span className="result">{bp1}</span>
              </div>
            </div>
          </SubSectionContainer>

          <SubSectionContainer>
            <h3>power level 2</h3>

            <div className="section">
              <div className="inputs">
                <FormInputWithLabel
                  type="number"
                  name="atk2"
                  value={atk2}
                  label="attack"
                  handleChange={(event) => handleChange(event)}
                />

                <FormInputWithLabel
                  type="number"
                  name="cr2"
                  value={cr2}
                  label="crit rate"
                  handleChange={(event) => handleChange(event)}
                />

                <FormInputWithLabel
                  type="number"
                  name="cd2"
                  value={cd2}
                  label="crit damage"
                  handleChange={(event) => handleChange(event)}
                />
                <FormInputWithLabel
                  type="number"
                  name="pd2"
                  value={pd2}
                  label="percentage damage"
                  handleChange={(event) => handleChange(event)}
                />
              </div>
              <div className="results">
                power level:<span className="result">{bp2}</span>
              </div>
            </div>
          </SubSectionContainer>
        </MainSectionContainer>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  artifactCR: selectArtifactCR(state),
  artifactCD: selectArtifactCD(state),
  artifactCR2: selectartifactCR2(state),
  artifactCD2: selectArtifactCD2(state),
  atk1: selectAtk1(state),
  atk2: selectAtk2(state),
  cd1: selectCd1(state),
  cd2: selectCd2(state),
  cr1: selectCr1(state),
  cr2: selectCr2(state),
  bp1: selectBp1(state),
  bp2: selectBp2(state),
  pd1: selectPd1(state),
  pd2: selectPd2(state),
  critValue: selectCritValue(state),
  critValue2: selectCritValue2(state),
});
const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch(handleChange(event)),
  calculateBasePower: () => dispatch(calculateBasePower()),
  calculateCritValue: () => dispatch(calculateCritValue()),
});
export default connect(mapStateToProps, mapDispatchToProps)(StrengthComparison);
