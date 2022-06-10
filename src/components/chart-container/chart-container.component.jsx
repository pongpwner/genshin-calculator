import React from "react";
import "./chart-container.styles.scss";

const ChartContainer = ({ chart, label }) => {
  return (
    <div className="chart-container">
      <h2>{label} </h2>
      <img src={chart} className="responsive" alt="character ascension chart" />
    </div>
  );
};
export default ChartContainer;
