import "./App.css";
import Weapon from "./pages/weapon/weapon.component";
import Header from "./components/header/header.component";
import Talent from "./pages/talent/talent.component";
import Character from "./pages/character/character.component";
import HomePage from "./pages/home-page/home-page.component";
import CVBasePower from "./pages/cv-base-power/cv-base-power.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage}>
          <HomePage />
        </Route>
        <Route path="/weapon" component={Weapon}>
          <Weapon />
        </Route>
        <Route path="/talent" component={Talent}>
          <Talent />
        </Route>
        <Route path="/character" component={Character}>
          <Character />
        </Route>
        <Route path="/cv-base-power" componet={CVBasePower}>
          <CVBasePower />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
