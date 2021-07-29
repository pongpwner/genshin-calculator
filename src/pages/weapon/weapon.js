const WEAPON = {
  rarity: [
    {
      label: "3 star",
      value: "threeStar",
    },
    {
      label: "4 star",
      value: "fourStar",
    },
    {
      label: "5 star",
      value: "fiveStar",
    },
  ],
  ascension: [
    { label: "0", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
  ],

  threeStar: {
    ascension: [
      {
        ascension: 0,
        domainCost: { green: 0, blue: 0, purple: 0, orange: 0 },
        eliteCost: { green: 0, blue: 0, purple: 0 },
        commonCost: { white: 0, green: 0, blue: 0 },
       
        mora: 0,
      },
      {
        ascension: 1,
        domainCost: { green: 2, blue: 0, purple: 0, orange: 0 },
        eliteCost: { green: 2, blue: 0, purple: 0 },
        commonCost: { white: 1, green: 0, blue: 0 },
        
        mora: 5000,
      },
      {
        ascension: 2,
        domainCost: { green: 0, blue: 2, purple: 0, orange: 0 },
        eliteCost: { green: 8, blue: 0, purple: 0 },
        commonCost: { white: 5, green: 0, blue: 0 },
        
        mora: 10000,
      },
      {
        ascension: 3,
        domainCost: { green: 0, blue: 4, purple: 0, orange: 0 },
        eliteCost: { green: 0, blue: 4, purple: 0 },
        commonCost: { white: 0, green: 4, blue: 0 },
       
        mora: 15000,
      },
      {
        ascension: 4,
        domainCost: { green: 0, blue: 0, purple: 2, orange: 0 },
        eliteCost: { green: 0, blue: 8, purple: 0 },
        commonCost: { white: 0, green: 6, blue: 0 },
        
        mora: 20000,
      },
      {
        ascension: 5,
        domainCost: { green: 0, blue: 0, purple: 4, orange: 0 },
        eliteCost: { green: 0, blue: 0, purple: 6 },
        commonCost: { white: 0, green: 0, blue: 4 },
        mora: 25000,
      },
      {
        ascension: 6,
        domainCost: { green: 0, blue: 0, purple: 0, orange: 3 },
        eliteCost: { green: 0, blue: 0, purple: 12 },
        commonCost: { white: 0, green: 0, blue: 8 },
        
        mora: 30000,
      },
    ],
    level: [
      {
        lv: 0,
        exp: 0,
        mora: 0,
        ascension: 0,
        value: 0,
        label: "0",
      },
      {
        lv: 20,
        exp: 53475,
        mora: 5360,
        ascension: 0,
        value: 20,
        label: "20",
      },
      {
        lv: 40,
        exp: 274000,
        mora: 27400,
        ascension: 1,
        value: 40,
        label: "40",
      },
      {
        lv: 50,
        exp: 276350,
        mora: 27640,
        ascension: 2,
        value: 50,
        label: "50",
      },
      {
        lv: 60,
        exp: 408150,
        mora: 40820,
        ascension: 3,
        value: 60,
        label: "60",
      },
      {
        lv: 70,
        exp: 571625,
        mora: 57180,
        ascension: 4,
        value: 70,
        label: "70",
      },
      {
        lv: 80,
        exp: 770125,
        mora: 77020,
        ascension: 5,
        value: 80,
        label: "80",
      },
      {
        lv: 90,
        exp: 1634475,
        mora: 163460,
        ascension: 6,
        value: 90,
        label: "90",
      },
    ],
  },
  fourStar: {
    ascension: [
      {
        ascension: 0,
        domainCost: { green: 0, blue: 0, purple: 0, orange: 0 },
        eliteCost: { green: 0, blue: 0, purple: 0 },
        commonCost: { white: 0, green: 0, blue: 0 },
        mora: 0,
      },
      {
        ascension: 1,
        domainCost: { green: 3, blue: 0, purple: 0, orange: 0 },
        eliteCost: { green: 3, blue: 0, purple: 0 },
        commonCost: { white: 2, green: 0, blue: 0 },
        mora: 5000,
      },
      {
        ascension: 2,
        domainCost: { green: 0, blue: 3, purple: 0, orange: 0 },
        eliteCost: { green: 12, blue: 0, purple: 0 },
        commonCost: { white: 8, green: 0, blue: 0 },
        mora: 15000,
      },
      {
        ascension: 3,
        domainCost: { green: 0, blue: 6, purple: 0, orange: 0 },
        eliteCost: { green: 0, blue: 6, purple: 0 },
        commonCost: { white: 0, green: 6, blue: 0 },
        mora: 20000,
      },
      {
        ascension: 4,
        domainCost: { green: 0, blue: 0, purple: 3, orange: 0 },
        eliteCost: { green: 0, blue: 12, purple: 0 },
        commonCost: { white: 0, green: 9, blue: 0 },
        mora: 30000,
      },
      {
        ascension: 5,
        domainCost: { green: 0, blue: 0, purple: 6, orange: 0 },
        eliteCost: { green: 0, blue: 0, purple: 9 },
        commonCost: { white: 0, green: 0, blue: 6 },
        mora: 35000,
      },
      {
        ascension: 6,
        domainCost: { green: 0, blue: 0, purple: 0, orange: 4 },
        eliteCost: { green: 0, blue: 0, purple: 18 },
        commonCost: { white: 0, green: 0, blue: 12 },
        mora: 45000,
      },
    ],
    level: [
      {
        lv: 0,
        exp: 0,
        mora: 0,
        value: "0",
        label: "0",
      },
      {
        lv: 20,
        exp: 81000,
        mora: 8100,
      },
      {
        lv: 40,
        exp: 415125,
        mora: 41520,
      },
      {
        lv: 50,
        exp: 418725,
        mora: 41880,
      },
      {
        lv: 60,
        exp: 618400,
        mora: 61840,
      },
      {
        lv: 70,
        exp: 866050,
        mora: 86620,
      },
      {
        lv: 80,
        exp: 1166875,
        mora: 116700,
      },
      {
        lv: 90,
        exp: 2476475,
        mora: 247660,
      },
    ],
  },
  fiveStar: {
    ascension: [
      {
        ascension: 0,
        domainCost: { green: 0, blue: 0, purple: 0, orange: 0 },
        eliteCost: { green: 0, blue: 0, purple: 0 },
        commonCost: { white: 0, green: 0, blue: 0 },
        mora: 0,
      },
      {
        ascension: 1,
        domainCost: { green: 5, blue: 0, purple: 0, orange: 0 },
        eliteCost: { green: 5, blue: 0, purple: 0 },
        commonCost: { white: 3, green: 0, blue: 0 },
        mora: 10000,
      },
      {
        ascension: 2,
        domainCost: { green: 0, blue: 5, purple: 0, orange: 0 },
        eliteCost: { green: 18, blue: 0, purple: 0 },
        commonCost: { white: 12, green: 0, blue: 0 },
        mora: 20000,
      },
      {
        ascension: 3,
        domainCost: { green: 0, blue: 9, purple: 0, orange: 0 },
        eliteCost: { green: 0, blue: 9, purple: 0 },
        commonCost: { white: 0, green: 9, blue: 0 },
        mora: 30000,
      },
      {
        ascension: 4,
        domainCost: { green: 0, blue: 0, purple: 5, orange: 0 },
        eliteCost: { green: 0, blue: 18, purple: 0 },
        commonCost: { white: 0, green: 14, blue: 0 },
        mora: 45000,
      },
      {
        ascension: 5,
        domainCost: { green: 0, blue: 0, purple: 9, orange: 0 },
        eliteCost: { green: 0, blue: 0, purple: 14 },
        commonCost: { white: 0, green: 0, blue: 9 },
        mora: 55000,
      },
      {
        ascension: 6,
        domainCost: { green: 0, blue: 0, purple: 0, orange: 6 },
        eliteCost: { green: 0, blue: 0, purple: 27 },
        commonCost: { white: 0, green: 0, blue: 18 },
        mora: 65000,
      },
    ],
    level: [
      {
        lv: 0,
        exp: 0,
        mora: 0,
        value: "0",
        label: "0",
      },
      {
        lv: 20,
        exp: 121550,
        mora: 12160,
      },
      {
        lv: 40,
        exp: 622800,
        mora: 62280,
      },
      {
        lv: 50,
        exp: 628150,
        mora: 62820,
      },
      {
        lv: 60,
        exp: 927675,
        mora: 92780,
      },
      {
        lv: 70,
        exp: 1299125,
        mora: 129920,
      },
      {
        lv: 80,
        exp: 1750375,
        mora: 175040,
      },
      {
        lv: 90,
        exp: 3714775,
        mora: 371480,
      },
    ],
  },
};

export default WEAPON;
