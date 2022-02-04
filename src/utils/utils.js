import CHARACTER_DATA from "../../pages/character/character.data";
export function calculateMaterial(
  sumCurrentAscension,
  sumDesiredAscension,
  gemGreen,
  gemBlue,
  gemPurple,
  gemOrange,
  nGemGreen,
  nGemBlue,
  nGemPurple,
  nGemOrange,
  oGemGreen,
  uGemGreen,
  oGemBlue,
  uGemBlue,
  oGemPurple,
  uGemPurple,
  oGemOrange,
  uGemOrange,
  mGemGreen,
  pGemBlue,
  mGemBlue,
  pGemPurple,
  mGemPurple,
  pGemOrange,
  mGemOrange,
  rGemGreen,
  rGemBlue,
  rGemPurple,
  rGemOrange
) {
  for (let i = sumCurrentAscension + 1; i < sumDesiredAscension + 1; i++) {
    nGemGreen += CHARACTER_DATA.ascension[i].gemGreen;
    nGemBlue += CHARACTER_DATA.ascension[i].gemBlue;
    nGemPurple += CHARACTER_DATA.ascension[i].gemPurple;
    nGemOrange += CHARACTER_DATA.ascension[i].gemOrange;
  }

  //calculate overflow and underflow
  if (nGemGreen - gemGreen < 0) {
    oGemGreen = Math.abs(nGemGreen - gemGreen);
  } else {
    uGemGreen = nGemGreen - gemGreen;
  }
  if (nGemBlue - gemBlue < 0) {
    oGemBlue = Math.abs(nGemBlue - gemBlue);
  } else {
    uGemBlue = nGemBlue - gemBlue;
  }
  if (nGemPurple - gemPurple < 0) {
    oGemPurple = Math.abs(nGemPurple - gemPurple);
  } else {
    uGemPurple = nGemPurple - gemPurple;
  }
  if (nGemOrange - gemOrange < 0) {
    oGemOrange = Math.abs(nGemOrange - gemOrange);
  } else {
    uGemOrange = nGemOrange - gemOrange;
  }

  // calculate what materials can be converted
  //can't convert green
  mGemGreen = Math.abs(0 - uGemGreen);
  //top block = underflow greater bottom block = over flow greater
  if (Math.floor(oGemGreen / 3) + oGemBlue - uGemBlue <= 0) {
    pGemBlue = 0;
    mGemBlue = Math.abs(Math.floor(oGemGreen / 3) + oGemBlue - uGemBlue);
  } else {
    pGemBlue = Math.floor(oGemGreen / 3) + oGemBlue - uGemBlue;
  }
  if (Math.floor(pGemBlue / 3) + oGemPurple - uGemPurple <= 0) {
    pGemPurple = 0;
    mGemPurple = Math.abs(Math.floor(pGemBlue / 3) + oGemPurple - uGemPurple);
  } else {
    pGemPurple = Math.floor(pGemBlue / 3) + oGemPurple - uGemPurple;
  }
  if (Math.floor(pGemPurple / 3) + oGemOrange - uGemOrange <= 0) {
    pGemOrange = 0;
    mGemOrange = Math.abs(Math.floor(pGemPurple / 3) + oGemOrange - uGemOrange);
  } else {
    pGemOrange = Math.floor(pGemPurple / 3) + oGemOrange - uGemOrange;
  }

  //calculate remainders
  rGemGreen = oGemGreen % 3;
  rGemBlue = pGemBlue % 3;
  rGemPurple = pGemPurple % 3;
  rGemOrange = pGemOrange;
}
