import React from "react";
import "./home-page.styles.scss";
import characterAscensionChart from "../../assets/images/characterAscension.PNG";
import weapon5AscensionChart from "../../assets/images/5WeaponAscension.PNG";
import weapon4AscensionChart from "../../assets/images/4WeaponAscension.PNG";
import weapon3AscensionChart from "../../assets/images/3WeaponAscension.PNG";
import Hero from "../../components/hero/hero.component";
import ChartContainer from "../../components/chart-container/chart-container.component";
const HomePage = () => (
  <div className="home-page">
    <Hero />
    <ChartContainer
      chart={characterAscensionChart}
      label="Character Ascension"
    />
    <ChartContainer
      chart={weapon5AscensionChart}
      label="5 Star Weapon Ascension"
    />
    <ChartContainer
      chart={weapon4AscensionChart}
      label="4 Star Weapon Ascension"
    />
    <ChartContainer
      chart={weapon3AscensionChart}
      label="3 Star Weapon Ascension"
    />
  </div>
);
export default HomePage;
