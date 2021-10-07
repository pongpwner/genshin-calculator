import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div
      className="container
      "
    >
      <Link to="/">Home</Link>
      <Link to="/weapon">Weapon</Link>
      <Link to="/character">Character</Link>
      <Link to="/talent">Talent</Link>
      <Link to="cv-base-power">Crit Value and Base Power</Link>
    </div>
  </div>
);

export default Header;
