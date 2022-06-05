import React from "react";
import "./chart-container.styles.scss";

const ChartContainer = ({ chart }) => {
  return (
    <div className="chart-container">
      <h1>Character Ascension Cost </h1>
      <img src={chart} className="responsive" alt="character ascension chart" />
    </div>
  );
};
export default ChartContainer;
