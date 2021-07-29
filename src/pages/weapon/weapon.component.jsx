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
      blueOre: 0,
      greenOre: 0,
      whiteOre: 0,
      blueOreNeeded: 0,
    };
  }

  //calculation functions
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

    // calculate what materials can be converted
    //can't convert green
    mGreen = Math.abs(0 - uGreen);
    //top block = underflow greater bottom block = over flow greater
    if (Math.floor(oGreen / 3) + oBlue - uBlue <= 0) {
      pBlue = 0;
      mBlue = Math.abs(Math.floor(oGreen / 3) + oBlue - uBlue);
    } else {
      pBlue = Math.floor(oGreen / 3) + oBlue - uBlue;
    }
    if (Math.floor(pBlue / 3) + oPurple - uPurple <= 0) {
      pPurple = 0;
      mPurple = Math.abs(Math.floor(pBlue / 3) + oPurple - uPurple);
    } else {
      pPurple = Math.floor(pBlue / 3) + oPurple - uPurple;
    }
    if (Math.floor(pPurple / 3) + oOrange - uOrange <= 0) {
      pOrange = 0;
      mOrange = Math.abs(Math.floor(pPurple / 3) + oOrange - uOrange);
    } else {
      pOrange = Math.floor(pPurple / 3) + oOrange - uOrange;
    }

    //calculate remainders
    rGreen = oGreen % 3;
    rBlue = pBlue % 3;
    rPurple = pPurple % 3;
    rOrange = Math.floor(pOrange / 3) + (pOrange % 3);

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

  calculateEliteMaterial(startA, endA, tGreen, tBlue, tPurple, rarity) {
    //n... is how many are needed. t... is how many you have
    let nGreen = 0;
    let nBlue = 0;
    let nPurple = 0;
    // over flow
    let totalOverFlow;
    let oGreen = 0;
    let oBlue = 0;
    let oPurple = 0;
    // underflow
    let uGreen = 0;
    let uBlue = 0;
    let uPurple = 0;

    //potential material
    //no green
    let pBlue = 0;
    let pPurple = 0;

    // remaining material
    let rGreen = 0;
    let rBlue = 0;
    let rPurple = 0;

    //missing material
    let mGreen = 0;
    let mBlue = 0;
    let mPurple = 0;

    // gets how many of each material is needed
    for (let i = Number(startA) + 1; i < endA + 1; i++) {
      nGreen += WEAPON[rarity].ascension[i].eliteCost.green;
      nBlue += WEAPON[rarity].ascension[i].eliteCost.blue;
      nPurple += WEAPON[rarity].ascension[i].eliteCost.purple;
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

    //calculate total over flow/ not needed
    totalOverFlow =
      oGreen * WEAPON_MATERIALS.eliteMaterial.green +
      oBlue * WEAPON_MATERIALS.eliteMaterial.blue +
      oPurple * WEAPON_MATERIALS.eliteMaterial.purple;

    // calculate what materials can be converted
    //can't convert green
    mGreen =Math.abs( 0 - uGreen);
    //top block = underflow greater bottom block = over flow greater
    if (Math.floor(oGreen / 3) + oBlue - uBlue <= 0) {
      pBlue = 0;
      mBlue = Math.abs(Math.floor(oGreen / 3) + oBlue - uBlue);
    } else {
      pBlue = Math.floor(oGreen / 3) + oBlue - uBlue;
    }
    if (Math.floor(pBlue / 3) + oPurple - uPurple <= 0) {
      pPurple = 0;
      mPurple = Math.abs(Math.floor(pBlue / 3) + oPurple - uPurple);
    } else {
      pPurple = Math.floor(pBlue / 3) + oPurple - uPurple;
    }

    //calculate remainders
    rGreen = oGreen % 3;
    rBlue = pBlue % 3;
    rPurple = Math.floor(pPurple / 3) + (pPurple % 3);

    this.setState({
      eliteMaterialPurpleNeeded: mPurple,
      eliteMaterialBlueNeeded: mBlue,
      eliteMaterialGreenNeeded: mGreen,

      eliteMaterialPurpleRemaining: rPurple,
      eliteMaterialBlueRemaining: rBlue,
      eliteMaterialGreenRemaining: rGreen,
    });
    return;
  }

  calculateCommonMaterial(startA, endA, tWhite, tGreen, tBlue, rarity) {
    //n... is how many are needed. t... is how many you have
    let nWhite = 0;
    let nGreen = 0;
    let nBlue = 0;

    // over flow
    let totalOverFlow;
    let oWhite = 0;
    let oGreen = 0;
    let oBlue = 0;

    // underflow
    let uWhite = 0;
    let uGreen = 0;
    let uBlue = 0;

    //potential material
    //no white
    let pGreen = 0;
    let pBlue = 0;

    // remaining material
    let rWhite = 0;
    let rGreen = 0;
    let rBlue = 0;

    //missing material
    let mWhite = 0;
    let mGreen = 0;
    let mBlue = 0;

    // gets how many of each material is needed
    for (let i = Number(startA)+1 ; i < endA+1 ; i++) {
      nGreen += WEAPON[rarity].ascension[i].commonCost.green;
      nBlue += WEAPON[rarity].ascension[i].commonCost.blue;
      nWhite += WEAPON[rarity].ascension[i].commonCost.white;
      console.log(WEAPON[rarity].ascension[i].commonCost.white)
    }
    //calculate overflow and underflow
    if (nWhite - tWhite < 0) {
      oWhite = Math.abs(nWhite - tWhite);
    } else {
      uWhite = nWhite - tWhite;
    }
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
    console.log('nnnnnnnnnnnnnn'+nWhite)
    console.log("uuuuuuuuuuuuuuuuuwhite"+uWhite);

    //calculate total over flow/ not needed
    totalOverFlow =
      oWhite * WEAPON_MATERIALS.commonMaterial.white +
      oBlue * WEAPON_MATERIALS.commonMaterial.blue +
      oGreen * WEAPON_MATERIALS.commonMaterial.green;

    // calculate what materials can be converted
    //can't convert green
    mWhite = Math.abs(0 - uWhite);
    //top block = underflow greater bottom block = over flow greater
    if (Math.floor(oWhite / 3) + oGreen - uGreen <= 0) {
      pGreen = 0;
      mGreen = Math.abs(Math.floor(oWhite / 3) + oGreen - uGreen);
    } else {
      pGreen = Math.floor(oWhite / 3) + oGreen - uGreen;
    }
    if (Math.floor(pGreen / 3) + oBlue - uBlue <= 0) {
      pBlue = 0;
      mBlue = Math.abs(Math.floor(pGreen / 3) + oBlue - uBlue);
    } else {
      pBlue = Math.floor(pGreen / 3) + oBlue - uBlue;
    }

    //calculate remainders
    rWhite = oWhite % 3;
    rGreen = pGreen % 3;
    rBlue = Math.floor(pBlue / 3) + (pBlue % 3);

    console.log("uuuuuuuuuuuuuuuuuwhite"+uWhite);
    console.log("mmmmmmmmmmmmwhite"+mWhite);
    this.setState({
      commonMaterialWhiteNeeded: mWhite,
      commonMaterialBlueNeeded: mBlue,
      commonMaterialGreenNeeded: mGreen,

      commonMaterialWhiteRemaining: rWhite,
      commonMaterialBlueRemaining: rBlue,
      commonMaterialGreenRemaining: rGreen,
    });
    return;
  }
  calculateMora(startA, endA, startL, endL, mora, rarity) {
    let totalMora = 0;
    for (let i = Number(startL / 10) + 1; i < endL / 10 - 1; i++) {
      console.log(i);
      console.log(totalMora);
      totalMora += WEAPON[rarity].level[i].mora;
    }
    for (let i = Number(startA) + 1; i < endA + 1; i++) {
      totalMora += WEAPON[rarity].ascension[i].mora;
    }
    if (totalMora - mora <= 0) {
      totalMora = 0;
    } else {
      totalMora = totalMora - mora;
    }
    this.setState({ moraNeeded: totalMora });
  }
  calculateXP(startL, endL, whiteOre, greenOre, blueOre, rarity) {
    let totalXP =
      WEAPON_MATERIALS.enhancementOre.blue * blueOre +
      WEAPON_MATERIALS.enhancementOre.green * greenOre +
      WEAPON_MATERIALS.enhancementOre.white * whiteOre;
    let totalXPNeeded = 0;
    let xpNeeded = 0;
    let blueOreNeeded = 0;
    for (let i = Number(startL / 10) + 1; i < endL / 10 - 1; i++) {
      totalXPNeeded += WEAPON[rarity].level[i].exp;
    }
    if (totalXPNeeded - totalXP <= 0) {
      xpNeeded = 0;
    } else {
      xpNeeded = totalXPNeeded - totalXP;
    }
    blueOreNeeded = Math.ceil(xpNeeded / WEAPON_MATERIALS.enhancementOre.blue);
    this.setState({ blueOreNeeded: blueOreNeeded });
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
    this.calculateEliteMaterial(
      this.state.currentAscension,
      this.state.desiredAscension,
      this.state.eliteMaterialGreen,
      this.state.eliteMaterialBlue,
      this.state.eliteMaterialPurple,
      this.state.rarity
    );

    this.calculateCommonMaterial(
      this.state.currentAscension,
      this.state.desiredAscension,
      this.state.commonMaterialWhite,
      this.state.commonMaterialGreen,
      this.state.commonMaterialBlue,
      this.state.rarity
    );
    this.calculateMora(
      this.state.currentAscension,
      this.state.desiredAscension,
      this.state.currentLevel,
      this.state.desiredLevel,
      this.state.mora,
      this.state.rarity
    );

    this.calculateXP(
      this.state.currentLevel,
      this.state.desiredLevel,
      this.state.whiteOre,
      this.state.greenOre,
      this.state.blueOre,
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
      blueOre,
      greenOre,
      whiteOre,
      blueOreNeeded,
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
          <div className="input-row">
            <FormInput
              label="Mystic Enhancement Ore"
              name="blueOre"
              type="text"
              value={blueOre}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="Fine Enhancement Ore"
              name="greenOre"
              type="text"
              value={greenOre}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="Enhancement Ore"
              name="whiteOre"
              type="text"
              value={whiteOre}
              onChange={this.handleChange}
            ></FormInput>
          </div>
          <CustomButton onClick={this.handleSubmit}>Submit</CustomButton>
        </div>
        <div className="main-content">
          <div>Mora: {moraNeeded}</div>
          <div>Mystic enhancementOre: {blueOreNeeded}</div>
          <h1>Domain Materials</h1>
          <div className="material-info">
            <h2>what you need</h2>
            <div>green:{domainMaterialGreenNeeded}</div>
            <div>blue:{domainMaterialBlueNeeded}</div>
            <div>purple:{domainMaterialPurpleNeeded}</div>
            <div>orange:{domainMaterialOrangeNeeded}</div>
          </div>
          <div className="material-info">
            <h2>what's left after conversion</h2>
            <div>green:{domainMaterialGreenRemaining}</div>
            <div>blue:{domainMaterialBlueRemaining}</div>
            <div>purple:{domainMaterialPurpleRemaining}</div>
            <div>orange:{domainMaterialOrangeRemaining}</div>
          </div>
          <h1>Elite Materials</h1>

          <div className="material-info">
            <h2>what you need</h2>
            <div>green:{eliteMaterialGreenNeeded}</div>
            <div>blue:{eliteMaterialBlueNeeded}</div>
            <div>purple:{eliteMaterialPurpleNeeded}</div>
          </div>
          <div className="material-info">
            <h2>what's left after conversion</h2>
            <div>green:{eliteMaterialGreenRemaining}</div>
            <div>blue:{eliteMaterialBlueRemaining}</div>
            <div>purple:{eliteMaterialPurpleRemaining}</div>
          </div>

          <h1>Common Materials</h1>

          <div className="material-info">
            <h2>what you need</h2>
            <div>white:{commonMaterialWhiteNeeded}</div>
            <div>green:{commonMaterialGreenNeeded}</div>
            <div>blue:{commonMaterialBlueNeeded}</div>
          </div>
          <div className="material-info">
            <h2>what's left after conversion</h2>
            <div>white:{commonMaterialWhiteRemaining}</div>
            <div>green:{commonMaterialGreenRemaining}</div>
            <div>blue:{commonMaterialBlueRemaining}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Weapon;
