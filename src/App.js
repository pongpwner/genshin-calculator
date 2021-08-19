import "./App.css";
import Weapon from "./pages/weapon/weapon.component";
import Header from "./components/header/header.component";
import Talent from "./pages/talent/talent.component";
import { TalentActionTypes } from "./redux/talent/talent.types";

function App() {
  return (
    <div className="App">
      <Header />
      <Weapon />
      <Talent />
    </div>
  );
}

export default App;
