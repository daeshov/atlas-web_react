import React from "react";
import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
  test("CourseList renders without crashing", () => {
    render(<CourseList />);
    const availableCoursesElement = screen.getByText("Available courses");
    expect(availableCoursesElement).toBeInTheDocument();
  });

  test("renders rows", () => {
    render(<CourseList />);

    // Check the header row
    const headerRow = screen.getByRole("row", { name: /Course name Credit/i });
    expect(headerRow).toBeInTheDocument();

    // Check the rows with specific data
    const rowES6 = screen.getByRole("row", { name: /ES6 60/i });
    expect(rowES6).toBeInTheDocument();

    const rowWebpack = screen.getByRole("row", { name: /Webpack 20/i });
    expect(rowWebpack).toBeInTheDocument();

    const rowReact = screen.getByRole("row", { name: /React 40/i });
    expect(rowReact).toBeInTheDocument();
  });
});
