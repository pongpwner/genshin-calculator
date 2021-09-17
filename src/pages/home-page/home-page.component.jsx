import React from "react";
import "./home-page.styles.css";
import picture from "../../images/characterAscension.PNG";

const HomePage = () => (
  <div className="home-page">
    <div className="picture-container">
      <h1>Character Ascension Cost </h1>
      <img src={picture} alt="character ascension chart" />
    </div>
  </div>
);
export default HomePage;
