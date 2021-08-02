import React from "react";
import WEAPON from "./weapon";
import WEAPON_MATERIALS from "../../constants/weaponMaterials";
import "./weapon.styles.css";
import FormInput from "../../components/form-input/form-input.component";
import FormDropdown from "../../components/form-dropdown/form-dropdown.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomRadioGroup from "../../components/custom-radio-group/custom-radio-group.component";
import {
  CURRENT_ASCENSION_RADIO_BUTTONS,
  DESIRED_ASCENSION_RADIO_BUTTONS,
} from "./component-arrays/ascension-radio-buttons";

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
      currentRadioButton: 0,
      desiredRadioButton: 0,
      sumCurrentAscension: 0,
      sumDesiredAscension: 6,
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
    for (let i = Number(startA) + 1; i < endA + 1; i++) {
      nGreen += WEAPON[rarity].ascension[i].commonCost.green;
      nBlue += WEAPON[rarity].ascension[i].commonCost.blue;
      nWhite += WEAPON[rarity].ascension[i].commonCost.white;
      console.log(WEAPON[rarity].ascension[i].commonCost.white);
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
    console.log("nnnnnnnnnnnnnn" + nWhite);
    console.log("uuuuuuuuuuuuuuuuuwhite" + uWhite);

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

    console.log("uuuuuuuuuuuuuuuuuwhite" + uWhite);
    console.log("mmmmmmmmmmmmwhite" + mWhite);
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
    //console.log(this.state);
    //console.log(event.target);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleCurrentLevel = (event) => {
    const { value } = event.target;

    this.handleChange(event);
    //assume weapon is not ascended
    const { currentRadioButton } = this.state;
    switch (Number(value)) {
      case 0:
        this.setState({ currentAscension: 0 });
        this.setState({ sumCurrentAscension: 0 });
        break;
      case 20:
        if (currentRadioButton == 0) {
          this.setState({ currentAscension: 0 });
          this.setState({ sumCurrentAscension: 0 });
        } else {
          this.setState({ currentAscension: 0 });
          this.setState({
            sumCurrentAscension: 1,
          });
        }

        break;
      case 40:
        if (currentRadioButton == 0) {
          this.setState({ currentAscension: 1 });
          this.setState({ sumCurrentAscension: 1 });
        } else {
          this.setState({ currentAscension: 1 });
          this.setState({
            sumCurrentAscension: 2,
          });
        }
        break;
      case 50:
        if (currentRadioButton == 0) {
          this.setState({ currentAscension: 2 });
          this.setState({ sumCurrentAscension: 2 });
        } else {
          this.setState({ currentAscension: 2 });
          this.setState({
            sumCurrentAscension: 3,
          });
        }
        break;
      case 60:
        if (currentRadioButton == 0) {
          this.setState({ currentAscension: 3 });
          this.setState({ sumCurrentAscension: 3 });
        } else {
          this.setState({ currentAscension: 3 });
          this.setState({
            sumCurrentAscension: 4,
          });
        }
        break;
      case 70:
        if (currentRadioButton == 0) {
          this.setState({ currentAscension: 4 });
          this.setState({ sumCurrentAscension: 4 });
        } else {
          this.setState({ currentAscension: 4 });
          this.setState({
            sumCurrentAscension: 5,
          });
        }
        break;
      case 80:
        if (currentRadioButton == 0) {
          this.setState({ currentAscension: 5 });
          this.setState({ sumCurrentAscension: 5 });
        } else {
          this.setState({ currentAscension: 5 });
          this.setState({
            sumCurrentAscension: 6,
          });
        }
        break;
      case 90:
        this.setState({ currentAscension: 6 });
        this.setState({ sumCurrentAscension: 6 });
        break;
      default:
        this.setState({ currentAscension: 999 });
    }

    //console.log(this.state);
  };
  handleDesiredLevel = (event) => {
    const { value } = event.target;

    this.handleChange(event);
    //assume weapon is not ascended
    const { desiredRadioButton } = this.state;
    switch (Number(value)) {
      case 0:
        this.setState({ desiredAscension: 0 });
        this.setState({ sumDesiredAscension: 0 });
        break;
      case 20:
        if (desiredRadioButton == 0) {
          this.setState({ desiredAscension: 0 });
          this.setState({ sumDesiredAscension: 0 });
        } else {
          this.setState({ desiredAscension: 0 });
          this.setState({
            sumDesiredAscension: 1,
          });
        }

        break;
      case 40:
        if (desiredRadioButton == 0) {
          this.setState({ desiredAscension: 1 });
          this.setState({ sumDesiredAscension: 1 });
        } else {
          this.setState({ desiredAscension: 1 });
          this.setState({
            sumDesiredAscension: 2,
          });
        }
        break;
      case 50:
        if (desiredRadioButton == 0) {
          this.setState({ desiredAscension: 2 });
          this.setState({ sumDesiredAscension: 2 });
        } else {
          this.setState({ desiredAscension: 2 });
          this.setState({
            sumDesiredAscension: 3,
          });
        }
        break;
      case 60:
        if (desiredRadioButton == 0) {
          this.setState({ desiredAscension: 3 });
          this.setState({ sumDesiredAscension: 3 });
        } else {
          this.setState({ desiredAscension: 3 });
          this.setState({
            sumDesiredAscension: 4,
          });
        }
        break;
      case 70:
        if (desiredRadioButton == 0) {
          this.setState({ desiredAscension: 4 });
          this.setState({ sumDesiredAscension: 4 });
        } else {
          this.setState({ desiredAscension: 4 });
          this.setState({
            sumDesiredAscension: 5,
          });
        }
        break;
      case 80:
        if (desiredRadioButton == 0) {
          this.setState({ desiredAscension: 5 });
          this.setState({ sumDesiredAscension: 5 });
        } else {
          this.setState({ desiredAscension: 5 });
          this.setState({
            sumDesiredAscension: 6,
          });
        }
        break;
      case 90:
        this.setState({ desiredAscension: 6 });
        this.setState({ sumDesiredAscension: 6 });
        break;
      default:
        this.setState({ desiredAscension: 999 });
    }

    //console.log(this.state);
  };

  handleRadioButton = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    this.handleChange(event);
    if (
      Number(this.state[event.target.getAttribute("data-currentAscension")]) +
        Number(value) ==
      7
    ) {
      this.setState({ desiredRadioButton: 0 });
    } else {
      this.setState({
        [event.target.getAttribute("data-ascension")]:
          Number(
            this.state[event.target.getAttribute("data-currentAscension")]
          ) + Number(value),
      });
    }
  };
  handleSubmit = (event) => {
    this.calculateDomainMaterial(
      this.state.sumCurrentAscension,
      this.state.sumDesiredAscension,
      this.state.domainMaterialGreen,
      this.state.domainMaterialBlue,
      this.state.domainMaterialPurple,
      this.state.domainMaterialOrange,
      this.state.rarity
    );
    this.calculateEliteMaterial(
      this.state.sumCurrentAscension,
      this.state.sumDesiredAscension,
      this.state.eliteMaterialGreen,
      this.state.eliteMaterialBlue,
      this.state.eliteMaterialPurple,
      this.state.rarity
    );

    this.calculateCommonMaterial(
      this.state.sumCurrentAscension,
      this.state.sumDesiredAscension,
      this.state.commonMaterialWhite,
      this.state.commonMaterialGreen,
      this.state.commonMaterialBlue,
      this.state.rarity
    );
    this.calculateMora(
      this.state.sumCurrentAscension,
      this.state.sumDesiredAscension,
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
      currentRadioButton,
      desiredRadioButton,
    } = this.state;
    console.log(this.state);
    return (
      <div className="weapon">
        <div className="input-container">
          <FormDropdown
            name="rarity"
            label="Weapon rarity"
            options={WEAPON.rarity}
            value={rarity}
            handleChange={this.handleChange}
          />

          <FormDropdown
            name="currentLevel"
            handleChange={this.handleCurrentLevel}
            label="current level"
            value={currentLevel}
            options={WEAPON[rarity].level}
          />
          <CustomRadioGroup
            options={CURRENT_ASCENSION_RADIO_BUTTONS}
            label="Ascended?:"
            handleChange={this.handleRadioButton}
            value={currentRadioButton}
            data-ascension="sumCurrentAscension"
            data-currentAscension="currentAscension"
          ></CustomRadioGroup>

          <FormDropdown
            name="desiredLevel"
            handleChange={this.handleDesiredLevel}
            label="desired level"
            value={desiredLevel}
            options={WEAPON[rarity].level}
          />
          <CustomRadioGroup
            options={DESIRED_ASCENSION_RADIO_BUTTONS}
            label="Ascended?:"
            handleChange={this.handleRadioButton}
            value={desiredRadioButton}
            data-ascension="sumDesiredAscension"
            data-currentAscension="desiredAscension"
          ></CustomRadioGroup>
          <div>domain material: </div>
          <div className="input-row">
            <FormInput
              label="green"
              name="domainMaterialGreen"
              type="text"
              value={domainMaterialGreen}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="blue"
              name="domainMaterialBlue"
              type="text"
              value={domainMaterialBlue}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="purple"
              name="domainMaterialPurple"
              type="text"
              value={domainMaterialPurple}
              onChange={this.handleChange}
            ></FormInput>

            <FormInput
              label="orange"
              name="domainMaterialOrange"
              type="text"
              value={domainMaterialOrange}
              onChange={this.handleChange}
            ></FormInput>
          </div>
          <div>Elite Material:</div>
          <div className="input-row">
            <FormInput
              label="green"
              name="eliteMaterialGreen"
              type="text"
              value={eliteMaterialGreen}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="blue"
              name="eliteMaterialBlue"
              type="text"
              value={eliteMaterialBlue}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="purple"
              name="eliteMaterialPurple"
              type="text"
              value={eliteMaterialPurple}
              onChange={this.handleChange}
            ></FormInput>
          </div>
          <div>Common Material:</div>
          <div className="input-row">
            <FormInput
              label="white"
              name="commonMaterialWhite"
              type="text"
              value={commonMaterialWhite}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="green"
              name="commonMaterialGreen"
              type="text"
              value={commonMaterialGreen}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="blue"
              name="commonMaterialBlue"
              type="text"
              value={commonMaterialBlue}
              onChange={this.handleChange}
            ></FormInput>
          </div>
          <div>Enhancement Ore</div>
          <div className="input-row">
            <FormInput
              label="white"
              name="whiteOre"
              type="text"
              value={whiteOre}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="green"
              name="greenOre"
              type="text"
              value={greenOre}
              onChange={this.handleChange}
            ></FormInput>
            <FormInput
              label="blue"
              name="blueOre"
              type="text"
              value={blueOre}
              onChange={this.handleChange}
            ></FormInput>
          </div>
          <div>Mora:</div>
          <div className="input-row">
            <FormInput
              label="Mora"
              name="mora"
              type="text"
              value={mora}
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
