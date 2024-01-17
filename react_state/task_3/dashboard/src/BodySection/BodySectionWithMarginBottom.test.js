import React from "react";
import { render, screen } from "@testing-library/react";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

jest.mock('aphrodite');

describe('<BodySectionWithMarginBottom />', () => {
 
  it('renders BodySectionWithMarginBottom correctly', () => {
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
