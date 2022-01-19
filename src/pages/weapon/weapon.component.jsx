import React from "react";
import { connect } from "react-redux";
import "./weapon.styles.scss";
import WeaponInput from "../../components/weapon-input/weapon-input.component";
import MainSection from "../../components/main-section/main-section.component";
import {
  selectSubsections,
  selectWeapon,
} from "../../redux/weapon/weapon.selectors";

const Weapon = ({ subsections, state }) => {
  return (
    <div className="weapon">
      <h1 className="title">Weapon Material Calculator</h1>
      <div className="content">
        <WeaponInput />
        <MainSection subsections={subsections} state={state} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  subsections: selectSubsections(state),
  state: selectWeapon(state),
});

export default connect(mapStateToProps)(Weapon);
