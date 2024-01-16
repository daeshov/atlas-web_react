import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";



const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.margin)} data-testid="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: "40px",
    width: "100%",
  },
});
export default BodySectionWithMarginBottom;