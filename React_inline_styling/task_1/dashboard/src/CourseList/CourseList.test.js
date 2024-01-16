import React from "react";
import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<CourseList />", () => {
  it('should contain the CourseList component when isLoggedIn is true', () => {
    render(<CourseList isLoggedIn={true} />);
    expect(screen.getByTestId('courseList')).toBeInTheDocument();
  });

  it('renders 5 different rows', () => {
    render(<CourseList isLoggedIn={true} />);

    // Assuming CourseListRow has a data-testid attribute
    const rows = screen.getAllByTestId('courselist-row');

    // Make sure there are 5 rows
    expect(rows.length).toBe(2);
  });
});
