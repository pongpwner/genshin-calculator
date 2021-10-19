import React from "react";
import "./cv-base-power.styles.css";
import FormInputWithLabel from "../../components/form-input-with-label/form-input-with-label.component";

class CVBasePower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artifactCR: "",
      artifactCD: "",
      critValue: "",
      artifactCR2: "",
      artifactCD2: "",
      critValue2: "",
      atk1: "",
      cr1: "",
      cd1: "",
      pd1: "",
      bp1: "",
      atk2: "",
      cr2: "",
      cd2: "",
      pd2: "",
      bp2: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  calculateCritValue() {
    const { artifactCD, artifactCR, artifactCD2, artifactCR2 } = this.state;
    return this.setState({
      critValue: Number(artifactCD) + Number(artifactCR) * 2,
      critValue2: Number(artifactCD2) + Number(artifactCR2) * 2,
    });
  }
  calculateBasePower() {
    const { atk1, atk2, cd1, cd2, cr1, cr2, pd1, pd2 } = this.state;
    this.setState({
      bp1: (atk1 * (1 + (cr1 / 100) * (cd1 / 100)) * (1 + pd1 / 100)).toFixed(
        5
      ),
      bp2: (atk2 * (1 + (cr2 / 100) * (cd2 / 100)) * (1 + pd2 / 100)).toFixed(
        5
      ),
    });
  }
  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => {
      this.calculateCritValue();
      this.calculateBasePower();
      return;
    });
  }
  render() {
    const {
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
    } = this.state;

    return (
      <div className="cv-base-power">
        <h1>relative strength calculator </h1>
        <div className="content">
          <h1>artifact crit value </h1>
          <div className="main-section">
            <h2>artifact crit value 1</h2>
            <div className="section">
              <div className="inputs">
                <FormInputWithLabel
                  type="number"
                  name="artifactCR"
                  value={artifactCR}
                  label="artifact crit rate"
                  handleChange={this.handleChange}
                />

                <FormInputWithLabel
                  type="number"
                  name="artifactCD"
                  value={artifactCD}
                  label="artifact crit damage"
                  handleChange={this.handleChange}
                />
              </div>
              <div className="results">
                crit value 1:<span className="result">{critValue}</span>
              </div>
            </div>
            <h2>artifact crit value 2</h2>
            <div className="section">
              <div className="inputs">
                <FormInputWithLabel
                  type="number"
                  name="artifactCR2"
                  value={artifactCR2}
                  label="artifact crit rate"
                  handleChange={this.handleChange}
                />

                <FormInputWithLabel
                  type="number"
                  name="artifactCD2"
                  value={artifactCD2}
                  label="artifact crit damage"
                  handleChange={this.handleChange}
                />
              </div>
              <div className="results">
                crit value 2:<span className="result">{critValue2}</span>
              </div>
            </div>
          </div>

          <h1>character power level </h1>
          <div className="main-section">
            <h2> power level 1 </h2>
            <div className="section">
              <div className="inputs">
                <FormInputWithLabel
                  type="number"
                  name="atk1"
                  value={atk1}
                  label="attack"
                  handleChange={this.handleChange}
                />

                <FormInputWithLabel
                  type="number"
                  name="cr1"
                  value={cr1}
                  label="crit rate"
                  handleChange={this.handleChange}
                />

                <FormInputWithLabel
                  type="number"
                  name="cd1"
                  value={cd1}
                  label="crit damage"
                  handleChange={this.handleChange}
                />
                <FormInputWithLabel
                  type="number"
                  name="pd1"
                  value={pd1}
                  label="percentage damage"
                  handleChange={this.handleChange}
                />
              </div>
              <div className="results">
                power level 1:<span className="result">{bp1}</span>
              </div>
            </div>

            <h2>power level 2</h2>

            <div className="section">
              <div className="inputs">
                <FormInputWithLabel
                  type="number"
                  name="atk2"
                  value={atk2}
                  label="attack"
                  handleChange={this.handleChange}
                />

                <FormInputWithLabel
                  type="number"
                  name="cr2"
                  value={cr2}
                  label="crit rate"
                  handleChange={this.handleChange}
                />

                <FormInputWithLabel
                  type="number"
                  name="cd2"
                  value={cd2}
                  label="crit damage"
                  handleChange={this.handleChange}
                />
                <FormInputWithLabel
                  type="number"
                  name="pd2"
                  value={pd2}
                  label="percentage damage"
                  handleChange={this.handleChange}
                />
              </div>
              <div className="results">
                powerlevel 2:<span className="result">{bp2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CVBasePower;
