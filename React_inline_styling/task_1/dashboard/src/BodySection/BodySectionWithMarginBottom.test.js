import React from "react";
import { render, screen } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("TEST SUIT", () => {
  it("TEST CASE 1: checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component", () => {
    render(
      <BodySectionWithMarginBottom title="test title">
        <p>test children</p>
      </BodySectionWithMarginBottom>
    );

    expect(screen.getByTestId("bodySectionWithMargin")).toBeInTheDocument(); // Use getByTestId for the wrapper
    expect(screen.getByTestId("BodySection").textContent).toContain("test title"); // Use getByTestId for the inner BodySection
    expect(screen.getByText("test children")).toBeInTheDocument(); // Use getByText for checking text content
  });
});
