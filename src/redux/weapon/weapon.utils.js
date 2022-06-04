import WEAPON_MATERIALS from "../../constants/weaponMaterials";
import WEAPON from "../../pages/weapon/weapon";
export const WeaponCalculationParams = {
  //n... is how many are needed. t... is how many you have
  nGreen: 0,
  nBlue: 0,
  nPurple: 0,
  nOrange: 0,
  // over flow = number of extra materials of that color, used to be converted to the next level
  oGreen: 0,
  oBlue: 0,
  oPurple: 0,
  oOrange: 0,
  // underflow = number of material needed to reach n...
  uGreen: 0,
  uBlue: 0,
  uPurple: 0,
  uOrange: 0,
  //potential material=  number of materials converted from the tier below + number of actual blues left over
  //no green
  pBlue: 0,
  pPurple: 0,
  pOrange: 0,
  // remaining material
  rGreen: 0,
  rBlue: 0,
  rPurple: 0,
  rOrange: 0,
  //missing material, shows up as required materials on dom
  mGreen: 0,
  mBlue: 0,
  mPurple: 0,
  mOrange: 0,
  nEGreen: 0,
  nEBlue: 0,
  nEPurple: 0,
  // over flow
  oEGreen: 0,
  oEBlue: 0,
  oEPurple: 0,
  // underflow
  uEGreen: 0,
  uEBlue: 0,
  uEPurple: 0,
  //potential material
  //no green
  pEBlue: 0,
  pEPurple: 0,
  // remaining material
  rEGreen: 0,
  rEBlue: 0,
  rEPurple: 0,
  //missing material
  mEGreen: 0,
  mEBlue: 0,
  mEPurple: 0,
  nCWhite: 0,
  nCGreen: 0,
  nCBlue: 0,
  // over flow
  oCWhite: 0,
  oCGreen: 0,
  oCBlue: 0,
  // underflow
  uCWhite: 0,
  uCGreen: 0,
  uCBlue: 0,
  //potential material
  //no white
  pCGreen: 0,
  pCBlue: 0,
  // remaining material
  rCWhite: 0,
  rCGreen: 0,
  rCBlue: 0,
  //missing material
  mCWhite: 0,
  mCGreen: 0,
  mCBlue: 0,
  totalMora: 0,
  rMora: 0,
  totalBlueOre: 0,
  blueOreRemaining: 0,
  totalXPNeeded: 0,
};

export function calculateDomainMaterial(
  rarity,
  sumCurrentAscension,
  sumDesiredAscension,
  domainMaterialGreen,
  domainMaterialBlue,
  domainMaterialPurple,
  domainMaterialOrange
) {
  WeaponCalculationParams.nGreen = 0;
  WeaponCalculationParams.nBlue = 0;
  WeaponCalculationParams.nPurple = 0;
  WeaponCalculationParams.nOrange = 0;
  console.log(domainMaterialGreen);
  //calculate total number of needed materials
  for (
    let i = Number(sumCurrentAscension) + 1;
    i < sumDesiredAscension + 1;
    i++
  ) {
    WeaponCalculationParams.nGreen +=
      WEAPON[rarity].ascension[i].domainCost.green;
    WeaponCalculationParams.nBlue +=
      WEAPON[rarity].ascension[i].domainCost.blue;
    WeaponCalculationParams.nPurple +=
      WEAPON[rarity].ascension[i].domainCost.purple;
    WeaponCalculationParams.nOrange +=
      WEAPON[rarity].ascension[i].domainCost.orange;
  }

  //calculate overflow and underflow
  //if given material - required material

  //rewrite if (WeaponCalculationParams.nGreen < domainMaterialGreen) {
  //   WeaponCalculationParams.oGreen =
  //     WeaponCalculationParams.nGreen - domainMaterialGreen;
  // }

  if (WeaponCalculationParams.nGreen - domainMaterialGreen < 0) {
    //calculates overflow for green
    //WeaponCalculationParams.uGreen =0
    WeaponCalculationParams.uGreen = 0;
    WeaponCalculationParams.oGreen = Math.abs(
      WeaponCalculationParams.nGreen - domainMaterialGreen
    );
  } else {
    //calculates underflow for green
    WeaponCalculationParams.oGreen = 0;
    WeaponCalculationParams.uGreen =
      WeaponCalculationParams.nGreen - domainMaterialGreen;
  }
  if (WeaponCalculationParams.nBlue - domainMaterialBlue < 0) {
    //calculates overflow for blue
    WeaponCalculationParams.uBlue = 0;
    WeaponCalculationParams.oBlue = Math.abs(
      WeaponCalculationParams.nBlue - domainMaterialBlue
    );
  } else {
    //calculates underflow for blue
    WeaponCalculationParams.oBlue = 0;
    WeaponCalculationParams.uBlue =
      WeaponCalculationParams.nBlue - domainMaterialBlue;
  }
  if (WeaponCalculationParams.nPurple - domainMaterialPurple < 0) {
    //calculates overflow for purple
    WeaponCalculationParams.uPurple = 0;
    WeaponCalculationParams.oPurple = Math.abs(
      WeaponCalculationParams.nPurple - domainMaterialPurple
    );
  } else {
    //calculates underflow for purple
    WeaponCalculationParams.oPurple = 0;
    WeaponCalculationParams.uPurple =
      WeaponCalculationParams.nPurple - domainMaterialPurple;
  }
  if (WeaponCalculationParams.nOrange - domainMaterialOrange < 0) {
    //calculates overflow for orange
    WeaponCalculationParams.uOrange = 0;
    WeaponCalculationParams.oOrange = Math.abs(
      WeaponCalculationParams.nOrange - domainMaterialOrange
    );
  } else {
    //calculates underflow for orange
    WeaponCalculationParams.oOrange = 0;
    WeaponCalculationParams.uOrange =
      WeaponCalculationParams.nOrange - domainMaterialOrange;
  }
  // calculate how many materials can be converted to the next tier
  //calculates missing (required) materials
  //can't convert anything to green
  WeaponCalculationParams.mGreen = Math.abs(0 - WeaponCalculationParams.uGreen);
  //top block = underflow greater bottom block = over flow greater
  if (
    //converted green + overflow blue - underflow blue <=0
    Math.floor(WeaponCalculationParams.oGreen / 3) +
      WeaponCalculationParams.oBlue -
      WeaponCalculationParams.uBlue <=
    0
  ) {
    //calculates missing (required) blue
    WeaponCalculationParams.pBlue = 0;
    WeaponCalculationParams.mBlue = Math.abs(
      Math.floor(WeaponCalculationParams.oGreen / 3) +
        WeaponCalculationParams.oBlue -
        WeaponCalculationParams.uBlue
    );
    console.log("mblue" + WeaponCalculationParams.mBlue);
  } else {
    //calculates potential blue
    //WeaponCalculationParams.mBlue =0
    WeaponCalculationParams.mBlue = 0;
    //number of greens converted to blue - number of missing blue materials
    WeaponCalculationParams.pBlue =
      Math.floor(WeaponCalculationParams.oGreen / 3) +
      WeaponCalculationParams.oBlue -
      WeaponCalculationParams.uBlue;
  }
  if (
    Math.floor(WeaponCalculationParams.pBlue / 3) +
      WeaponCalculationParams.oPurple -
      WeaponCalculationParams.uPurple <=
    0
  ) {
    WeaponCalculationParams.pPurple = 0;
    WeaponCalculationParams.mPurple = Math.abs(
      Math.floor(WeaponCalculationParams.pBlue / 3) +
        WeaponCalculationParams.oPurple -
        WeaponCalculationParams.uPurple
    );
  } else {
    WeaponCalculationParams.mPurple = 0;
    WeaponCalculationParams.pPurple =
      Math.floor(WeaponCalculationParams.pBlue / 3) +
      WeaponCalculationParams.oPurple -
      WeaponCalculationParams.uPurple;
  }
  if (
    Math.floor(WeaponCalculationParams.pPurple / 3) +
      WeaponCalculationParams.oOrange -
      WeaponCalculationParams.uOrange <=
    0
  ) {
    WeaponCalculationParams.pOrange = 0;
    WeaponCalculationParams.mOrange = Math.abs(
      Math.floor(WeaponCalculationParams.pPurple / 3) +
        WeaponCalculationParams.oOrange -
        WeaponCalculationParams.uOrange
    );
  } else {
    WeaponCalculationParams.mOrange = 0;
    WeaponCalculationParams.pOrange =
      Math.floor(WeaponCalculationParams.pPurple / 3) +
      WeaponCalculationParams.oOrange -
      WeaponCalculationParams.uOrange;
  }
  //calculate remainders
  WeaponCalculationParams.rGreen = WeaponCalculationParams.oGreen % 3;
  WeaponCalculationParams.rBlue = WeaponCalculationParams.pBlue % 3;
  WeaponCalculationParams.rPurple = WeaponCalculationParams.pPurple % 3;
  WeaponCalculationParams.rOrange = WeaponCalculationParams.pOrange;
}

export function calculateWeaponMaterial(
  rarity,
  sumCurrentAscension,
  sumDesiredAscension,
  eliteMaterialGreen,
  eliteMaterialBlue,
  eliteMaterialPurple
) {
  WeaponCalculationParams.nEGreen = 0;
  WeaponCalculationParams.nEBlue = 0;
  WeaponCalculationParams.nEPurple = 0;
  // gets how many of each material is needed
  for (
    let i = Number(sumCurrentAscension) + 1;
    i < sumDesiredAscension + 1;
    i++
  ) {
    WeaponCalculationParams.nEGreen +=
      WEAPON[rarity].ascension[i].eliteCost.green;
    WeaponCalculationParams.nEBlue +=
      WEAPON[rarity].ascension[i].eliteCost.blue;
    WeaponCalculationParams.nEPurple +=
      WEAPON[rarity].ascension[i].eliteCost.purple;
  }
  //calculate overflow and underflow
  if (WeaponCalculationParams.nEGreen - eliteMaterialGreen < 0) {
    WeaponCalculationParams.uEGreen = 0; //
    WeaponCalculationParams.oEGreen = Math.abs(
      WeaponCalculationParams.nEGreen - eliteMaterialGreen
    );
  } else {
    WeaponCalculationParams.oEGreen = 0;
    WeaponCalculationParams.uEGreen =
      WeaponCalculationParams.nEGreen - eliteMaterialGreen;
  }
  if (WeaponCalculationParams.nEBlue - eliteMaterialBlue < 0) {
    WeaponCalculationParams.uEBlue = 0; //
    WeaponCalculationParams.oEBlue = Math.abs(
      WeaponCalculationParams.nEBlue - eliteMaterialBlue
    );
  } else {
    WeaponCalculationParams.oEBlue = 0; //
    WeaponCalculationParams.uEBlue =
      WeaponCalculationParams.nEBlue - eliteMaterialBlue;
  }
  if (WeaponCalculationParams.nEPurple - eliteMaterialPurple < 0) {
    WeaponCalculationParams.uEPurple = 0; //
    WeaponCalculationParams.oEPurple = Math.abs(
      WeaponCalculationParams.nEPurple - eliteMaterialPurple
    );
  } else {
    WeaponCalculationParams.oEPurple = 0; //
    WeaponCalculationParams.uEPurple =
      WeaponCalculationParams.nEPurple - eliteMaterialPurple;
  }

  // calculate what materials can be converted
  //can't convert green
  WeaponCalculationParams.mEGreen = Math.abs(
    0 - WeaponCalculationParams.uEGreen
  );
  //top block = underflow greater bottom block = over flow greater
  if (
    Math.floor(WeaponCalculationParams.oEGreen / 3) +
      WeaponCalculationParams.oEBlue -
      WeaponCalculationParams.uEBlue <=
    0
  ) {
    WeaponCalculationParams.pEBlue = 0;
    WeaponCalculationParams.mEBlue = Math.abs(
      Math.floor(WeaponCalculationParams.oEGreen / 3) +
        WeaponCalculationParams.oEBlue -
        WeaponCalculationParams.uEBlue
    );
  } else {
    WeaponCalculationParams.mEBlue = 0;
    WeaponCalculationParams.pEBlue =
      Math.floor(WeaponCalculationParams.oEGreen / 3) +
      WeaponCalculationParams.oEBlue -
      WeaponCalculationParams.uEBlue;
  }
  if (
    Math.floor(WeaponCalculationParams.pEBlue / 3) +
      WeaponCalculationParams.oEPurple -
      WeaponCalculationParams.uEPurple <=
    0
  ) {
    WeaponCalculationParams.pEPurple = 0;
    WeaponCalculationParams.mEPurple = Math.abs(
      Math.floor(WeaponCalculationParams.pEBlue / 3) +
        WeaponCalculationParams.oEPurple -
        WeaponCalculationParams.uEPurple
    );
  } else {
    WeaponCalculationParams.mEPurple = 0;
    WeaponCalculationParams.pEPurple =
      Math.floor(WeaponCalculationParams.pEBlue / 3) +
      WeaponCalculationParams.oEPurple -
      WeaponCalculationParams.uEPurple;
  }

  //calculate remainders
  WeaponCalculationParams.rEGreen = WeaponCalculationParams.oEGreen % 3;
  WeaponCalculationParams.rEBlue = WeaponCalculationParams.pEBlue % 3;
  WeaponCalculationParams.rEPurple = WeaponCalculationParams.pEPurple;
}

export function calculateCommonMaterial(
  rarity,
  sumCurrentAscension,
  sumDesiredAscension,
  commonMaterialWhite,
  commonMaterialGreen,
  commonMaterialBlue
) {
  // gets how many of each material is needed
  WeaponCalculationParams.nCGreen = 0;
  WeaponCalculationParams.nCBlue = 0;
  WeaponCalculationParams.nCWhite = 0;
  for (
    let i = Number(sumCurrentAscension) + 1;
    i < sumDesiredAscension + 1;
    i++
  ) {
    WeaponCalculationParams.nCGreen +=
      WEAPON[rarity].ascension[i].commonCost.green;
    WeaponCalculationParams.nCBlue +=
      WEAPON[rarity].ascension[i].commonCost.blue;
    WeaponCalculationParams.nCWhite +=
      WEAPON[rarity].ascension[i].commonCost.white;
  }
  //calculate overflow and underflow
  if (WeaponCalculationParams.nCWhite - commonMaterialWhite < 0) {
    WeaponCalculationParams.uCWhite = 0; //
    WeaponCalculationParams.oCWhite = Math.abs(
      WeaponCalculationParams.nCWhite - commonMaterialWhite
    );
  } else {
    WeaponCalculationParams.oCWhite = 0;
    WeaponCalculationParams.uCWhite =
      WeaponCalculationParams.nCWhite - commonMaterialWhite;
  }
  if (WeaponCalculationParams.nGreen - commonMaterialGreen < 0) {
    WeaponCalculationParams.uCGreen = 0; //
    WeaponCalculationParams.oCGreen = Math.abs(
      WeaponCalculationParams.nCGreen - commonMaterialGreen
    );
  } else {
    WeaponCalculationParams.oCGreen = 0;
    WeaponCalculationParams.uCGreen =
      WeaponCalculationParams.nCGreen - commonMaterialGreen;
  }
  if (WeaponCalculationParams.nCBlue - commonMaterialBlue < 0) {
    WeaponCalculationParams.uCBlue = 0; //
    WeaponCalculationParams.oCBlue = Math.abs(
      WeaponCalculationParams.nCBlue - commonMaterialBlue
    );
  } else {
    WeaponCalculationParams.oCBlue = 0;
    WeaponCalculationParams.uCBlue =
      WeaponCalculationParams.nCBlue - commonMaterialBlue;
  }

  // calculate what materials can be converted
  //can't convert green
  WeaponCalculationParams.mCWhite = Math.abs(
    0 - WeaponCalculationParams.uCWhite
  );
  //top block = underflow greater bottom block = over flow greater
  if (
    Math.floor(WeaponCalculationParams.oCWhite / 3) +
      WeaponCalculationParams.oCGreen -
      WeaponCalculationParams.uCGreen <=
    0
  ) {
    WeaponCalculationParams.pCGreen = 0;
    WeaponCalculationParams.mCGreen = Math.abs(
      Math.floor(WeaponCalculationParams.oCWhite / 3) +
        WeaponCalculationParams.oCGreen -
        WeaponCalculationParams.uCGreen
    );
  } else {
    WeaponCalculationParams.mCGreen = 0; //
    WeaponCalculationParams.pCGreen =
      Math.floor(WeaponCalculationParams.oCWhite / 3) +
      WeaponCalculationParams.oCGreen -
      WeaponCalculationParams.uCGreen;
  }
  if (
    Math.floor(WeaponCalculationParams.pCGreen / 3) +
      WeaponCalculationParams.oCBlue -
      WeaponCalculationParams.uCBlue <=
    0
  ) {
    WeaponCalculationParams.pCBlue = 0;
    WeaponCalculationParams.mCBlue = Math.abs(
      Math.floor(WeaponCalculationParams.pCGreen / 3) +
        WeaponCalculationParams.oCBlue -
        WeaponCalculationParams.uCBlue
    );
  } else {
    WeaponCalculationParams.mCBlue = 0; //
    WeaponCalculationParams.pCBlue =
      Math.floor(WeaponCalculationParams.pCGreen / 3) +
      WeaponCalculationParams.oCBlue -
      WeaponCalculationParams.uCBlue;
  }

  //calculate remainders
  WeaponCalculationParams.rCWhite = WeaponCalculationParams.oCWhite % 3;
  console.log(WeaponCalculationParams.rCWhite);
  WeaponCalculationParams.rCGreen = WeaponCalculationParams.pCGreen % 3;
  WeaponCalculationParams.rCBlue = WeaponCalculationParams.pCBlue;
}

export function calculateMora(
  rarity,
  sumCurrentAscension,
  sumDesiredAscension,
  currentLevel,
  desiredLevel,
  mora
) {
  WeaponCalculationParams.totalMora = 0;
  for (let i = Number(currentLevel) + 1; i < Number(desiredLevel) + 1; i++) {
    WeaponCalculationParams.totalMora += WEAPON[rarity].level[i].mora;
  }
  for (
    let i = Number(sumCurrentAscension) + 1;
    i < sumDesiredAscension + 1;
    i++
  ) {
    WeaponCalculationParams.totalMora += WEAPON[rarity].ascension[i].mora;
  }
  if (WeaponCalculationParams.totalMora - mora <= 0) {
    WeaponCalculationParams.rMora = mora - WeaponCalculationParams.totalMora;
    WeaponCalculationParams.totalMora = 0;
  } else {
    WeaponCalculationParams.rMora = mora - WeaponCalculationParams.totalMora;
    WeaponCalculationParams.totalMora =
      WeaponCalculationParams.totalMora - mora;
  }
}
export function calculateXP(
  rarity,
  currentLevel,
  desiredLevel,
  whiteOre,
  greenOre,
  blueOre
) {
  WeaponCalculationParams.totalXPNeeded = 0;
  WeaponCalculationParams.totalXP =
    WEAPON_MATERIALS.enhancementOre.blue * blueOre +
    WEAPON_MATERIALS.enhancementOre.green * greenOre +
    WEAPON_MATERIALS.enhancementOre.white * whiteOre;
  WeaponCalculationParams.totalBlueOre =
    WeaponCalculationParams.totalXP / WEAPON_MATERIALS.enhancementOre.blue;
  for (let i = Number(currentLevel) + 1; i < Number(desiredLevel) + 1; i++) {
    WeaponCalculationParams.totalXPNeeded += WEAPON[rarity].level[i].exp;
  }
  if (
    WeaponCalculationParams.totalXPNeeded - WeaponCalculationParams.totalXP <=
    0
  ) {
    WeaponCalculationParams.xpNeeded = 0;
  } else {
    WeaponCalculationParams.xpNeeded =
      WeaponCalculationParams.totalXPNeeded - WeaponCalculationParams.totalXP;
  }
  WeaponCalculationParams.blueOreNeeded = Math.ceil(
    WeaponCalculationParams.xpNeeded / WEAPON_MATERIALS.enhancementOre.blue
  );

  WeaponCalculationParams.blueOreRemaining =
    WeaponCalculationParams.totalBlueOre -
    Math.ceil(
      WeaponCalculationParams.totalXPNeeded /
        WEAPON_MATERIALS.enhancementOre.blue
    );
  console.log(WeaponCalculationParams.blueOreRemaining);
}
