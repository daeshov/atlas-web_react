import React from "react";
import BodySection from "./BodySection";
import "./BodySection.css";

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin" data-testid="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

export default BodySectionWithMarginBottom;