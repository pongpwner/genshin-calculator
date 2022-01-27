import React, { useEffect } from "react";
import "./weapon.styles.scss";
import WeaponInput from "../../components/weapon-input/weapon-input.component";
import WeaponResults from "../../components/weapon-results/weapon-results.component";
import { useState } from "react";

const Weapon = () => {
  const [count, setCount] = useState(0);
  let characters = [];
  useEffect(() => {
    fetch("https://api.genshin.dev/characters")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        characters = data;
        setCount(data.length);
      });
  }, []);
  return (
    <div className="weapon">
      <h1 className="title">Weapon Material Calculator</h1>
      <div>{count}</div>
      <div className="content">
        <WeaponInput />
        <WeaponResults />
      </div>
    </div>
  );
};

export default Weapon;
