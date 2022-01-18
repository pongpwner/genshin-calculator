import WEAPON_MATERIALS from "../../constants/weaponMaterials";
import WEAPON from "../../pages/weapon/weapon";
export function calculateDomainMaterial(
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

  rOrange = pOrange;

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

export function calculateEliteMaterial(
  startA,
  endA,
  tGreen,
  tBlue,
  tPurple,
  rarity
) {
  //n... is how many are needed. t... is how many you have
  let nGreen = 0;
  let nBlue = 0;
  let nPurple = 0;
  // over flow

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
  rPurple = pPurple;

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

export function calculateCommonMaterial(
  startA,
  endA,
  tWhite,
  tGreen,
  tBlue,
  rarity
) {
  //n... is how many are needed. t... is how many you have
  let nWhite = 0;
  let nGreen = 0;
  let nBlue = 0;

  // over flow

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
  rBlue = pBlue;

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
export function calculateMora(startA, endA, startL, endL, mora, rarity) {
  let totalMora = 0;
  for (let i = Number(startL) + 1; i < Number(endL) + 1; i++) {
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
export function calculateXP(startL, endL, whiteOre, greenOre, blueOre, rarity) {
  let totalXP =
    WEAPON_MATERIALS.enhancementOre.blue * blueOre +
    WEAPON_MATERIALS.enhancementOre.green * greenOre +
    WEAPON_MATERIALS.enhancementOre.white * whiteOre;
  let totalXPNeeded = 0;
  let xpNeeded = 0;
  let blueOreNeeded = 0;
  for (let i = Number(startL) + 1; i < Number(endL) + 1; i++) {
    // if (startL == 7) {
    //   console.log(startL);
    //   break;
    // }
    totalXPNeeded += WEAPON[rarity].level[i].exp;
    console.log(WEAPON[rarity].level[i].exp);
    console.log(startL);
  }
  if (totalXPNeeded - totalXP <= 0) {
    xpNeeded = 0;
  } else {
    xpNeeded = totalXPNeeded - totalXP;
  }
  blueOreNeeded = Math.ceil(xpNeeded / WEAPON_MATERIALS.enhancementOre.blue);
  this.setState({ blueOreNeeded: blueOreNeeded });
}

export function handleCurrentLevel(event) {
  const { value } = event.target;

  this.handleChange(event);
  //assume weapon is not ascended
  const { currentRadioButton } = this.state;
  switch (Number(value)) {
    case 0:
      this.setState({ currentAscension: 0 });
      this.setState({ sumCurrentAscension: 0 });
      break;
    case 1:
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
    case 2:
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
    case 3:
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
    case 4:
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
    case 5:
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
    case 6:
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
    case 7:
      this.setState({ currentAscension: 6 });
      this.setState({ sumCurrentAscension: 6 });
      break;
    default:
      this.setState({ currentAscension: 999 });
  }

  //console.log(this.state);
}
export function handleDesiredLevel(event) {
  const { value } = event.target;

  this.handleChange(event);
  //assume weapon is not ascended
  const { desiredRadioButton } = this.state;
  switch (Number(value)) {
    case 0:
      this.setState({ desiredAscension: 0 });
      this.setState({ sumDesiredAscension: 0 });
      break;
    case 1:
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
    case 2:
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
    case 3:
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
    case 4:
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
    case 5:
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
    case 6:
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
    case 7:
      this.setState({ desiredAscension: 6 });
      this.setState({ sumDesiredAscension: 6 });
      break;
    default:
      this.setState({ desiredAscension: 999 });
  }

  //console.log(this.state);
}

export function handleRadioButton(event) {
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
    return {
      [event.target.getAttribute("data-ascension")]:
        Number(this.state[event.target.getAttribute("data-currentAscension")]) +
        Number(value),
    };
  }
}

export function handleSubmit(event) {
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
}
