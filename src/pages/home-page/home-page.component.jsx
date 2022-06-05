import React from "react";
import "./home-page.styles.scss";
import characterAscensionChart from "../../assets/images/characterAscension.PNG";
import Hero from "../../components/hero/hero.component";
import ChartContainer from "../../components/chart-container/chart-container.component";
const HomePage = () => (
  <div className="home-page">
    <Hero />
    <ChartContainer chart={characterAscensionChart} />
  </div>
);
export default HomePage;
