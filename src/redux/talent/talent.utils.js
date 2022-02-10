import TALENT_DATA from "../../pages/talent/talent.data";
export const talentParams = {
  //n... is how many are needed. t... is how many you have
  nGreen: 0,
  nBlue: 0,
  nPurple: 0,
  nMora: 0,
  nCrown: 0,
  nBoss: 0,
  nCWhite: 0,
  nCGreen: 0,
  nCBlue: 0,

  // over flow

  oGreen: 0,
  oBlue: 0,
  oPurple: 0,
  oCWhite: 0,
  oCGreen: 0,
  oCBlue: 0,

  // underflow
  uGreen: 0,
  uBlue: 0,
  uPurple: 0,
  uCWhite: 0,
  uCGreen: 0,
  uCBlue: 0,

  //potential material
  //no green
  pBlue: 0,
  pPurple: 0,
  pCGreen: 0,
  pCBlue: 0,

  // remaining material
  rGreen: 0,
  rBlue: 0,
  rPurple: 0,
  rCWhite: 0,
  rCGreen: 0,
  rCBlue: 0,

  //missing material
  mGreen: 0,
  mBlue: 0,
  mPurple: 0,
  mCWhite: 0,
  mCGreen: 0,
  mCBlue: 0,
  rCrown: 0,
  rMora: 0,
  rBossMaterial: 0,
};
export function calculateTalent(
  currentAttackLv,
  attackLv,
  currentSkillLv,
  skillLv,
  currentBurstLv,
  burstLv,
  greenTalent,
  blueTalent,
  purpleTalent
) {
  talentParams.nGreen = 0;
  talentParams.nBlue = 0;
  talentParams.nPurple = 0;
  for (let i = currentAttackLv; i < attackLv; i++) {
    talentParams.nGreen += TALENT_DATA.level[i].greenTalent;
    talentParams.nBlue += TALENT_DATA.level[i].blueTalent;
    talentParams.nPurple += TALENT_DATA.level[i].purpleTalent;
  }
  for (let i = currentSkillLv; i < skillLv; i++) {
    talentParams.nGreen += TALENT_DATA.level[i].greenTalent;
    talentParams.nBlue += TALENT_DATA.level[i].blueTalent;
    talentParams.nPurple += TALENT_DATA.level[i].purpleTalent;
  }
  for (let i = currentBurstLv; i < burstLv; i++) {
    talentParams.nGreen += TALENT_DATA.level[i].greenTalent;
    talentParams.nBlue += TALENT_DATA.level[i].blueTalent;
    talentParams.nPurple += TALENT_DATA.level[i].purpleTalent;
  }
  //calculate overflow and underflow
  if (talentParams.nGreen - greenTalent < 0) {
    talentParams.oGreen = Math.abs(talentParams.nGreen - greenTalent);
  } else {
    talentParams.oGreen = 0;
    talentParams.uGreen = talentParams.nGreen - greenTalent;
  }
  if (talentParams.nBlue - blueTalent < 0) {
    talentParams.oBlue = Math.abs(talentParams.nBlue - blueTalent);
  } else {
    talentParams.uBlue = talentParams.nBlue - blueTalent;
    talentParams.oBlue = 0;
  }
  if (talentParams.nPurple - purpleTalent < 0) {
    talentParams.oPurple = Math.abs(talentParams.nPurple - purpleTalent);
  } else {
    talentParams.oPurple = 0;
    talentParams.uPurple = talentParams.nPurple - purpleTalent;
  }

  // calculate what materials can be converted
  //can't convert green
  talentParams.mGreen = Math.abs(0 - talentParams.uGreen);
  //top block = underflow greater bottom block = over flow greater
  if (
    Math.floor(talentParams.oGreen / 3) +
      talentParams.oBlue -
      talentParams.uBlue <=
    0
  ) {
    talentParams.pBlue = 0;
    talentParams.mBlue = Math.abs(
      Math.floor(talentParams.oGreen / 3) +
        talentParams.oBlue -
        talentParams.uBlue
    );
  } else {
    talentParams.pBlue =
      Math.floor(talentParams.oGreen / 3) +
      talentParams.oBlue -
      talentParams.uBlue;
  }
  if (
    Math.floor(talentParams.pBlue / 3) +
      talentParams.oPurple -
      talentParams.uPurple <=
    0
  ) {
    talentParams.pPurple = 0;
    talentParams.mPurple = Math.abs(
      Math.floor(talentParams.pBlue / 3) +
        talentParams.oPurple -
        talentParams.uPurple
    );
  } else {
    talentParams.pPurple =
      Math.floor(talentParams.pBlue / 3) +
      talentParams.oPurple -
      talentParams.uPurple;
  }
  //calculate remainders
  talentParams.rGreen = talentParams.oGreen % 3;
  talentParams.rBlue = talentParams.pBlue % 3;
  talentParams.rPurple = talentParams.pPurple;
}

export function calculateCommonMaterial(
  currentAttackLv,
  attackLv,
  currentSkillLv,
  skillLv,
  currentBurstLv,
  burstLv,
  commonMaterialWhite,
  commonMaterialGreen,
  commonMaterialBlue
) {
  talentParams.nCWhite = 0;
  talentParams.nCGreen = 0;
  talentParams.nCBlue = 0;
  for (let i = currentAttackLv; i < attackLv; i++) {
    talentParams.nCWhite += TALENT_DATA.level[i].commonMaterialWhite;
    talentParams.nCGreen += TALENT_DATA.level[i].commonMaterialGreen;
    talentParams.nCBlue += TALENT_DATA.level[i].commonMaterialBlue;
  }
  for (let i = currentSkillLv; i < skillLv; i++) {
    talentParams.nCWhite += TALENT_DATA.level[i].commonMaterialWhite;
    talentParams.nCGreen += TALENT_DATA.level[i].commonMaterialGreen;
    talentParams.nCBlue += TALENT_DATA.level[i].commonMaterialBlue;
  }
  for (let i = currentBurstLv; i < burstLv; i++) {
    talentParams.nCWhite += TALENT_DATA.level[i].commonMaterialWhite;
    talentParams.nCGreen += TALENT_DATA.level[i].commonMaterialGreen;
    talentParams.nCBlue += TALENT_DATA.level[i].commonMaterialBlue;
  }
  if (talentParams.nCWhite - commonMaterialWhite < 0) {
    talentParams.oCWhite = Math.abs(talentParams.nCWhite - commonMaterialWhite);
  } else {
    talentParams.uCWhite = talentParams.nCWhite - commonMaterialWhite;
  }
  if (talentParams.nCGreen - commonMaterialGreen < 0) {
    talentParams.oCGreen = Math.abs(talentParams.nCGreen - commonMaterialGreen);
  } else {
    talentParams.uCGreen = talentParams.nCGreen - commonMaterialGreen;
  }
  if (talentParams.nCBlue - commonMaterialBlue < 0) {
    talentParams.oCBlue = Math.abs(talentParams.nCBlue - commonMaterialBlue);
  } else {
    talentParams.uCBlue = talentParams.nCBlue - commonMaterialBlue;
  }

  talentParams.mCWhite = Math.abs(0 - talentParams.uCWhite);

  if (
    Math.floor(talentParams.oCWhite / 3) +
      talentParams.oCGreen -
      talentParams.uCGreen <=
    0
  ) {
    talentParams.pCGreen = 0;
    talentParams.mCGreen = Math.abs(
      Math.floor(talentParams.oCWhite / 3) +
        talentParams.oCGreen -
        talentParams.uCGreen
    );
  } else {
    talentParams.pCGreen =
      Math.floor(talentParams.oCWhite / 3) +
      talentParams.oCGreen -
      talentParams.uCGreen;
  }
  if (
    Math.floor(talentParams.pCGreen / 3) +
      talentParams.oCBlue -
      talentParams.uCBlue <=
    0
  ) {
    talentParams.pCBlue = 0;
    talentParams.mCBlue = Math.abs(
      Math.floor(talentParams.pCGreen / 3) +
        talentParams.oCBlue -
        talentParams.uCBlue
    );
  } else {
    talentParams.pCBlue =
      Math.floor(talentParams.pCGreen / 3) +
      talentParams.oCBlue -
      talentParams.uCBlue;
  }
  talentParams.rCWhite = talentParams.oCWhite % 3;
  talentParams.rCGreen = talentParams.pCGreen % 3;
  talentParams.rCBlue = talentParams.pCBlue;
}

export function calculateMora(
  currentAttackLv,
  attackLv,
  currentSkillLv,
  skillLv,
  currentBurstLv,
  burstLv,
  mora
) {
  talentParams.nMora = 0;
  for (let i = currentAttackLv; i < attackLv; i++) {
    talentParams.nMora += TALENT_DATA.level[i].mora;
  }
  for (let i = currentSkillLv; i < skillLv; i++) {
    talentParams.nMora += TALENT_DATA.level[i].mora;
  }
  for (let i = currentBurstLv; i < burstLv; i++) {
    talentParams.nMora += TALENT_DATA.level[i].mora;
  }
  talentParams.rMora = mora - talentParams.nMora;
  talentParams.nMora = talentParams.nMora - mora;
}

export function calculateCrowns(
  currentAttackLv,
  attackLv,
  currentSkillLv,
  skillLv,
  currentBurstLv,
  burstLv,
  crown
) {
  talentParams.nCrown = 0;
  for (let i = currentAttackLv; i < attackLv; i++) {
    talentParams.nCrown += TALENT_DATA.level[i].crown;
  }
  for (let i = currentSkillLv; i < skillLv; i++) {
    talentParams.nCrown += TALENT_DATA.level[i].crown;
  }
  for (let i = currentBurstLv; i < burstLv; i++) {
    talentParams.nCrown += TALENT_DATA.level[i].crown;
  }
  talentParams.rCrown = crown - talentParams.nCrown;
  talentParams.nCrown = talentParams.nCrown - crown;
}

export function calculateBossMaterial(
  currentAttackLv,
  attackLv,
  currentSkillLv,
  skillLv,
  currentBurstLv,
  burstLv,
  bossMaterial
) {
  talentParams.nBoss = 0;
  for (let i = currentAttackLv; i < attackLv; i++) {
    talentParams.nBoss += TALENT_DATA.level[i].bossMaterial;
  }
  for (let i = currentSkillLv; i < skillLv; i++) {
    talentParams.nBoss += TALENT_DATA.level[i].bossMaterial;
  }
  for (let i = currentBurstLv; i < burstLv; i++) {
    talentParams.nBoss += TALENT_DATA.level[i].bossMaterial;
  }

  talentParams.rBossMaterial = bossMaterial - talentParams.nBoss;
  talentParams.nBoss = talentParams.nBoss - bossMaterial;
}
