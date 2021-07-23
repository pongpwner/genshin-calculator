import React from "react";
import WEAPON from "./weapon";
import WEAPON_MATERIALS from "../../constants/weaponMaterials";
import "./weapon.styles.css";
import FormInput from "../../components/form-input/form-input.component";
import FormDropdown from "../../components/form-dropdown/form-dropdown.component";
import CustomButton from "../../components/custom-button/custom-button.component";

class Weapon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mora: 0,
      rarity: "threeStar",
      currentLevel: 0,
      desiredLevel: 90,
      domainMaterialOrange: 0,
      domainMaterialPurple: 0,
      domainMaterialBlue: 0,
      domainMaterialGreen: 0,
      eliteMaterialPurple: 0,
      eliteMaterialBlue: 0,
      eliteMaterialGreen: 0,
      commonMaterialWhite: 0,
      commonMaterialGreen: 0,
      commonMaterialBlue: 0,
      domainMaterialOrangeNeeded: 0,
      domainMaterialPurpleNeeded: 0,
      domainMaterialBlueNeeded: 0,
      domainMaterialGreenNeeded: 0,
      eliteMaterialPurpleNeeded: 0,
      eliteMaterialBlueNeeded: 0,
      eliteMaterialGreenNeeded: 0,
      commonMaterialWhiteNeeded: 0,
      commonMaterialGreenNeeded: 0,
      commonMaterialBlueNeeded: 0,
      domainMaterialOrangeRemaining: 0,
      domainMaterialPurpleRemaining: 0,
      domainMaterialBlueRemaining: 0,
      domainMaterialGreenRemaining: 0,
      eliteMaterialPurpleRemaining: 0,
      eliteMaterialBlueRemaining: 0,
      eliteMaterialGreenRemaining: 0,
      commonMaterialWhiteRemaining: 0,
      commonMaterialGreenRemaining: 0,
      commonMaterialBlueRemaining: 0,
      moraNeeded: 0,
      currentAscension: 0,
      desiredAscension: 6,
    };
  }
  calculateDomainMaterial(
    startA,
    endA,
    tGreen,
    tBlue,
    tPurple,
    tOrange,
    rarity
  ) {
    //n... is how many are needed. t... is how many you have
    let nGreen = 0;
    let nBlue = 0;
    let nPurple = 0;
    let nOrange = 0;
    // over flow
    let totalOverFlow;
    let oGreen = 0;
    let oBlue = 0;
    let oPurple = 0;
    let oOrange = 0;
    // underflow
    let uGreen = 0;
    let uBlue = 0;
    let uPurple = 0;
    let uOrange = 0;
    // cost of overflow
    let coGreen = 0;
    let coBlue = 0;
    let coPurple = 0;
    let coOrange = 0;
    //potential material
    //no green
    let pBlue = 0;
    let pPurple = 0;
    let pOrange = 0;
    // remaining material
    let rGreen = 0;
    let rBlue = 0;
    let rPurple = 0;
    let rOrange = 0;
    //missing material
    let mGreen = 0;
    let mBlue = 0;
    let mPurple = 0;
    let mOrange = 0;

    // gets how many of each material is needed
    for (let i = Number(startA) + 1; i < endA + 1; i++) {
      console.log(typeof i);
      nGreen += WEAPON[rarity].ascension[i].domainCost.green;
      nBlue += WEAPON[rarity].ascension[i].domainCost.blue;
      nPurple += WEAPON[rarity].ascension[i].domainCost.purple;
      nOrange += WEAPON[rarity].ascension[i].domainCost.orange;
    }
    //calculate overflow and underflow
    if (nGreen - tGreen < 0) {
      oGreen = Math.abs(nGreen - tGreen);
    } else {
      uGreen = nGreen - tGreen;
    }
    if (nBlue - tBlue < 0) {
      oBlue = Math.abs(nBlue - tBlue);
    } else {
      uBlue = nBlue - tBlue;
    }
    if (nPurple - tPurple < 0) {
      oPurple = Math.abs(nPurple - tPurple);
    } else {
      uPurple = nPurple - tPurple;
    }
    if (nOrange - tOrange < 0) {
      oOrange = Math.abs(nOrange - tOrange);
    } else {
      uOrange = nOrange - tOrange;
    }
    //calculate total over flow/ not needed
    totalOverFlow =
      oGreen * WEAPON_MATERIALS.domainMaterial.green +
      oBlue * WEAPON_MATERIALS.domainMaterial.blue +
      oPurple * WEAPON_MATERIALS.domainMaterial.purple +
      oOrange * WEAPON_MATERIALS.domainMaterial.orange;
    coGreen = oGreen * WEAPON_MATERIALS.domainMaterial.green;
    coBlue = oBlue * WEAPON_MATERIALS.domainMaterial.blue;
    coPurple = oPurple * WEAPON_MATERIALS.domainMaterial.purple;
    coOrange = oOrange * WEAPON_MATERIALS.domainMaterial.orange;

    // calculate what materials can be converted
    //can't convert green
    mGreen = 0 - uGreen;
    //top block = underflow greater bottom block = over flow greater
    if (Math.floor(coGreen / 3) + oBlue - uBlue <= 0) {
      pBlue = 0;
      mBlue = Math.floor(coGreen / 3) + oBlue - uBlue;
    } else {
      pBlue = Math.floor(coGreen / 3) + oBlue - uBlue;
    }
    if (Math.floor(pBlue / 3) + oPurple - uPurple <= 0) {
      pPurple = 0;
      mPurple = Math.floor(pBlue / 3) + oPurple - uPurple;
    } else {
      pPurple = Math.floor(pBlue / 3) + oPurple - uPurple;
    }
    if (Math.floor(pPurple / 3) + oOrange - uOrange <= 0) {
      pOrange = 0;
      mOrange = Math.floor(pPurple / 3) + oOrange - uOrange;
    } else {
      pOrange = Math.floor(pPurple / 3) + oOrange - uOrange;
    }

    //calculate remainders
    rGreen = coGreen % 3;
    rBlue = pBlue % 3;
    rPurple = pPurple % 3;
    rOrange = Math.floor(pOrange / 3) + (pOrange % 3);

    console.log("blue" + pBlue);
    console.log("purple" + pPurple);
    console.log("orange" + pOrange);
    console.log("333333333");
    console.log(mGreen);
    console.log(mBlue);
    console.log(mPurple);
    console.log(mOrange);
    console.log("333333333");
    console.log(rGreen);
    console.log(rBlue);
    console.log(rPurple);
    console.log(rOrange);
    //console.log(rGreen);
    this.setState({
      domainMaterialOrangeNeeded: mOrange,
      domainMaterialPurpleNeeded: mPurple,
      domainMaterialBlueNeeded: mBlue,
      domainMaterialGreenNeeded: mGreen,
      domainMaterialOrangeRemaining: rOrange,
      domainMaterialPurpleRemaining: rPurple,
      domainMaterialBlueRemaining: rBlue,
      domainMaterialGreenRemaining: rGreen,
    });
    return;
  }

  handleChange = (event) => {
    console.log(this.state);
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    this.calculateDomainMaterial(
      this.state.currentAscension,
      this.state.desiredAscension,
      this.state.domainMaterialGreen,
      this.state.domainMaterialBlue,
      this.state.domainMaterialPurple,
      this.state.domainMaterialOrange,
      this.state.rarity
    );
  };
  render() {
    const {
      domainMaterialOrange,
      domainMaterialPurple,
      domainMaterialBlue,
      domainMaterialGreen,
      eliteMaterialPurple,
      eliteMaterialBlue,
      eliteMaterialGreen,
      commonMaterialWhite,
      commonMaterialGreen,
      commonMaterialBlue,
      domainMaterialOrangeNeeded,
      domainMaterialPurpleNeeded,
      domainMaterialBlueNeeded,
      domainMaterialGreenNeeded,
      eliteMaterialPurpleNeeded,
      eliteMaterialBlueNeeded,
      eliteMaterialGreenNeeded,
      commonMaterialWhiteNeeded,
      commonMaterialGreenNeeded,
      commonMaterialBlueNeeded,
      domainMaterialOrangeRemaining,
      domainMaterialPurpleRemaining,
      domainMaterialBlueRemaining,
      domainMaterialGreenRemaining,
      eliteMaterialPurpleRemaining,
      eliteMaterialBlueRemaining,
      eliteMaterialGreenRemaining,
      commonMaterialWhiteRemaining,
      commonMaterialGreenRemaining,
      commonMaterialBlueRemaining,

      mora,
      rarity,
      currentLevel,
      desiredLevel,
      moraNeeded,
      moraRemaining,
      currentAscension,
      desiredAscension,
    } = this.state;
    console.log(this.state);
    return (
      <div className="weapon">
        <div>
          <FormDropdown
            name="rarity"
            label="Weapon rarity"
            options={WEAPON.rarity}
            value={rarity}
            handleChange={this.handleChange}
          />
          <FormDropdown
            name="currentAscension"
            handleChange={this.handleChange}
            label="current ascension"
            value={currentAscension}
            options={WEAPON.ascension}
          />
          <FormDropdown
            name="desiredAscension"
            handleChange={this.handleChange}
            label="desired ascension"
            value={desiredAscension}
            options={WEAPON.ascension}
          />
          <FormDropdown
            name="currentLevel"
            handleChange={this.handleChange}
            label="current level"
            value={currentLevel}
            options={WEAPON[rarity].level}
          />
          <FormDropdown
            name="desiredLevel"
            handleChange={this.handleChange}
            label="desired level"
            value={desiredLevel}
            options={WEAPON[rarity].level}
          />

          
          <div className="input-row">
            <div>domain material: </div>
            <FormInput
              label="Green"
              name="domainMaterialGreen"
              type="text"
              value={domainMaterialGreen}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="Blue"
              name="domainMaterialBlue"
              type="text"
              value={domainMaterialBlue}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="Purple"
              name="domainMaterialPurple"
              type="text"
              value={domainMaterialPurple}
              onChange={this.handleChange}
            ></FormInput>

            <FormInput
              label="Orange"
              name="domainMaterialOrange"
              type="text"
              value={domainMaterialOrange}
              onChange={this.handleChange}
            ></FormInput>
          </div>
          <div className="input-row">
            <div>Elite Material:</div>
            <FormInput
              label="Green"
              name="eliteMaterialGreen"
              type="text"
              value={eliteMaterialGreen}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="Blue"
              name="eliteMaterialBlue"
              type="text"
              value={eliteMaterialBlue}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="Purple"
              name="eliteMaterialPurple"
              type="text"
              value={eliteMaterialPurple}
              onChange={this.handleChange}
            ></FormInput>
          </div>
          <div className="input-row">
            <div>Common Material:</div>

            <FormInput
              label="White"
              name="commonMaterialWhite"
              type="text"
              value={commonMaterialWhite}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="Green"
              name="commonMaterialGreen"
              type="text"
              value={commonMaterialGreen}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="Blue"
              name="commonMaterialBlue"
              type="text"
              value={commonMaterialBlue}
              onChange={this.handleChange}
            ></FormInput>
          </div>
          <FormInput
            label="Mora"
            name="mora"
            type="text"
            value={mora}
            onChange={this.handleChange}
          ></FormInput>
          <CustomButton onClick={this.handleSubmit}>Submit</CustomButton>
        </div>
        <div className="main-content">
          <div className="material-info">
            <h1>what you need</h1>
            <div>green:{domainMaterialGreenNeeded}</div>
            <div>blue:{domainMaterialBlueNeeded}</div>
            <div>purple:{domainMaterialPurpleNeeded}</div>
            <div>orange:{domainMaterialOrangeNeeded}</div>
          </div>
          <div className="material-info">
            <h1>what's left after conversion</h1>
            <div>green:{domainMaterialGreenRemaining}</div>
            <div>blue:{domainMaterialBlueRemaining}</div>
            <div>purple:{domainMaterialPurpleRemaining}</div>
            <div>orange:{domainMaterialOrangeRemaining}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Weapon;
