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

    expect(screen.find("h2").text()).toEqual("test title");
    expect(screen.find("p").text()).toEqual("test children node");
  });
});