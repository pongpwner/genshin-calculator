import React from "react";
import "./content-container.styles.css";
import MainSection from "../main-section/main-section.component";

const ContentContainer = ({ content, rarity, value }) => (
  <div className="content-container">
    {content.map((contentSection) => (
      <MainSection
        key={contentSection.id}
        subSections={contentSection.sections}
        rarity={rarity}
        value={value}
      />
    ))}
  </div>
);
export default ContentContainer;
