import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CourseList from "./CourseList";

describe("<CourseList />", () => {
  test("CourseList renders without crashing", async () => {
    render(<CourseList />);

    await waitFor(() => {
      const availableCoursesElement = screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === "div" && /Available courses/i.test(content);
      });
      expect(availableCoursesElement).toBeInTheDocument();
    });
  });

  test("renders rows", () => {
    render(<CourseList />);

    // Check the header row
    const headerRow = screen.getByText( "Course name Credit" );
    console.log("HTML Structure:", screen.debug());
    expect(headerRow).toBeInTheDocument();

    // Check the rows with specific data
    const rowES6 = screen.getByRole("row", { name: /ES6 60/i });
    const rowWebpack = screen.getByRole("row", { name: /Webpack 20/i });
    const rowReact = screen.getByRole("row", { name: /React 40/i });

    console.log("HTML Structure:", screen.debug());

    expect(rowES6).toBeInTheDocument();
    expect(rowWebpack).toBeInTheDocument();
    expect(rowReact).toBeInTheDocument();
  });
});
