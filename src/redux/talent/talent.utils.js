export const submit = (state) => {
  calculateTalent(state);
};
const calculateTalent = (state) => {
  const {
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
};
