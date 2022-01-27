import { combineReducers } from "redux";
import characterReducer from "./character/character.reducer";
import talentReducer from "./talent/talent.reducer";
import weaponReducer from "./weapon/weapon.reducer";
import strengthComparisonReducer from "./strength-comparison/strength-comparison.reducer";

export default combineReducers({
  character: characterReducer,
  talent: talentReducer,
  weapon: weaponReducer,
  strengthComparison: strengthComparisonReducer,
});
