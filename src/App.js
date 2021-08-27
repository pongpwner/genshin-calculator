import "./App.css";
import Weapon from "./pages/weapon/weapon.component";
import Header from "./components/header/header.component";
import Talent from "./pages/talent/talent.component";
import Character from "./pages/character/character.component";
import { TalentActionTypes } from "./redux/talent/talent.types";

function App() {
  return (
    <div className="App">
      <Header />
      <Weapon />
      <Talent />
      <Character />
    </div>
  );
}

export default App;
