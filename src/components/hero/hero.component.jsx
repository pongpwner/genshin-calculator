import React from "react";
import "./hero.styles.scss";
import videomp4 from "../../assets/videos/herovid.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <div className="video-container">
        <div className="color-overlay"></div>
        <video autoPlay loop muted poster="http">
          <source src={videomp4} type="video/mp4" />
        </video>
      </div>
      <h1>Genshin Impact Companion</h1>
    </div>
  );
};

export default Hero;
