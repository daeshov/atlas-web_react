import React from "react";
import { render, screen } from '@testing-library/react';
import BodySection from "./BodySection";

describe("TEST SUIT", () => {
  it("TEST CASE1: checking that shallowing the component should render correctly the children and one h2 element", () => {
    render(
      <BodySection title="test title">
        <p>test children node</p>{" "}
      </BodySection>
    );

    expect(screen.getByTestId("BodySection")).toBeInTheDocument();
    expect(screen.getByTestId("BodySection").querySelector("h2").textContent).toEqual("test title");
    expect(screen.getByTestId("BodySection").querySelector("p").textContent).toEqual("test children node");
  });
});
