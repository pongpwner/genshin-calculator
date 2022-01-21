import React from "react";
import "./weapon.styles.scss";
import WeaponInput from "../../components/weapon-input/weapon-input.component";
import WeaponResults from "../../components/weapon-results/weapon-results.component";

const Weapon = () => {
  return (
    <div className="weapon">
      <h1 className="title">Weapon Material Calculator</h1>
      <div className="content">
        <WeaponInput />
        <WeaponResults />
      </div>
    </div>
  );
};

export default Weapon;
