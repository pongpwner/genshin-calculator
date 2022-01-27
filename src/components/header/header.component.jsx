import React, { useState } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="header">
      <nav className={`dropdown `}>
        <div className="hamburger mobile" onClick={() => setActive(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`dropdown-container ${active ? "active" : ""}`}>
          <li>
            <button onClick={() => setActive(false)}>X</button>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/weapon">Weapon</Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/character">Character</Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/talent">Talent</Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/cv-base-power">Crit Value and Power Level</Link>
          </li>
        </ul>
        <div className={`background ${active ? "active" : ""}`}></div>
      </nav>
      <ul
        className="container desktop
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
          <Link to="/strength-comparison">Strength Comparison</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
