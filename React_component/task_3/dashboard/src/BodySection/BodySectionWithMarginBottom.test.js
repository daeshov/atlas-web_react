import React from "react";
import { render, screen } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("TEST SUIT", () => {
  it("TEST CASE 1: checking that shallowing the component should render correctly a BodySection component\
    and that the props are passed correctly to the child component", () => {
    //
    render(
      <BodySectionWithMarginBottom title="test title">
        <p>test children</p>
      </BodySectionWithMarginBottom>
    );

    expect(screen.find("BodySection").prop("title")).toBe("test title");
    expect(screen.find("BodySection > p").text()).toEqual("test childscreen");
    expect(screen.find(".bodySectionWithMargin").exists()).toBe(true);
  });
});