import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <ul
      className="container
      "
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/weapon">Weapon</Link>
      </li>
      <li>
        <Link to="/character">Character</Link>
      </li>
      <li>
        <Link to="/talent">Talent</Link>
      </li>
      <li>
        <Link to="/cv-base-power">Crit Value and Power Level</Link>
      </li>
    </ul>
  </header>
);

export default Header;
