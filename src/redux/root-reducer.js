import { combineReducers } from "redux";
import characterReducer from "./character/character.reducer";
import talentReducer from "./talent/talent.reducer";
import weaponReducer from "./weapon/weapon.reducer";

export default combineReducers({
  character: characterReducer,
  talent: talentReducer,
  weapon: weaponReducer,
});
