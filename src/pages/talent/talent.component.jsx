import React from "react";
import "./talent.styles.scss";
import TalentInput from "../../components/talent-input/talent-input.component";

import TalentResults from "../../components/talent-results/talent-results.component";

const Talent = () => (
  <div className="talent">
    <h1 className="title">Talent Calculator</h1>
    <div className="content">
      <TalentInput />
      <TalentResults />
    </div>
  </div>
);

export default Talent;
