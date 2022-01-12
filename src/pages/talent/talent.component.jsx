import React from "react";
import "./talent.styles.scss";
import TalentInput from "../../components/talent-input/talent-input.component";
import MainSection from "../../components/main-section/main-section.component";
import { connect } from "react-redux";
import {
  selectSubsections,
  selectTalent,
} from "../../redux/talent/talent.selector";
const Talent = ({ subsections, state }) => (
  <div className="talent">
    <h1 className="title">Talent Calculator</h1>
    <div className="content">
      <TalentInput />
      <MainSection subsections={subsections} state={state} />
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  subsections: selectSubsections(state),
  state: selectTalent(state),
});
export default connect(mapStateToProps)(Talent);
