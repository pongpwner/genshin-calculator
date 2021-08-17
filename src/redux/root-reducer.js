import { combineReducers } from "redux";
import characterReducer from "./character/character.reducer";
import talentReducer from "./talent/talent.reducer";

export default combineReducers({
  character: characterReducer,
  talent: talentReducer,
});
