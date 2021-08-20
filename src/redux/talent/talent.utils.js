export const submit = (state) => {
  calculateTalent(state);
};
const calculateTalent = (state) => {
  const {
    currentAttackLv,
    currentSkillLv,
    currentBurstLv,
    talentLv,
    attackLv,
    skillLv,
    burstLv,
    greenTalent,
    blueTalent,
    purpleTalent,
    greenTalentNeeded,
    blueTalentNeeded,
    purpleTalentNeeded,
    talentCost,
  } = state;
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

  //calculating how many talent materials are needed
  for (let i = currentAttackLv; i < attackLv; i++) {
    nGreen += talentCost[i].greenTalent;
    nBlue += talentCost[i].blueTalent;
    nPurple += talentCost[i].purpleTalent;
  }
  for (let i = currentSkillLv; i < skillLv; i++) {
    nGreen += talentCost[i].greenTalent;
    nBlue += talentCost[i].blueTalent;
    nPurple += talentCost[i].purpleTalent;
  }
  for (let i = currentBurstLv; i < burstLv; i++) {
    nGreen += talentCost[i].greenTalent;
    nBlue += talentCost[i].blueTalent;
    nPurple += talentCost[i].purpleTalent;
  }
  //calculate overflow and underflow
  if (nGreen - greenTalent < 0) {
    oGreen = Math.abs(nGreen - greenTalent);
  } else {
    uGreen = nGreen - greenTalent;
  }
  if (nBlue - blueTalent < 0) {
    oBlue = Math.abs(nBlue - blueTalent);
  } else {
    uBlue = nBlue - blueTalent;
  }
  if (nPurple - purpleTalent < 0) {
    oPurple = Math.abs(nPurple - purpleTalent);
  } else {
    uPurple = nPurple - purpleTalent;
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
  rPurple = Math.floor(pPurple / 3) + (pPurple % 3);

  return {
    purpleTalentNeeded: mPurple,
    blueTalentNeeded: mBlue,
    greenTalentNeeded: mGreen,

    // domainMaterialPurpleRemaining: rPurple,
    // domainMaterialBlueRemaining: rBlue,
    // domainMaterialGreenRemaining: rGreen,
  };

  // console.log(nGreen);
  // console.log(nBlue);
  // console.log(nPurple);
  console.log(oGreen);
  console.log(oBlue);
  console.log(oPurple);
};
