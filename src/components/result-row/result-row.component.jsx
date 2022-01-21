import React from "react";
import "./result-row.styles.scss";

const ResultRow = ({ material, required, remaining, rarity }) => (
  <div className={`result-row ${rarity} `}>
    <div className="result number">{required}</div>
    <div className="result number">{remaining}</div>
  </div>
);

export default ResultRow;
