import "./App.scss";
import Weapon from "./pages/weapon/weapon.component";
import Header from "./components/header/header.component";
import Talent from "./pages/talent/talent.component";
import Character from "./pages/character/character.component.jsx";
import HomePage from "./pages/home-page/home-page.component";
import StrengthComparison from "./pages/strength-comparison/strength-comparison.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />.
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
        <Route path="/strength-comparison" componet={StrengthComparison}>
          <StrengthComparison />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
