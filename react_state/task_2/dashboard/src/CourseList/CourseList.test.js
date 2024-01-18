import React from "react";
import { render, screen } from "@testing-library/react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

jest.mock('aphrodite');

describe("<CourseList />", () => {
  it('should contain the CourseList component when isLoggedIn is true', () => {
    render(<CourseList isLoggedIn={true} />);
    expect(screen.getByTestId('courseList')).toBeInTheDocument();
  });

  it('renders 5 different rows', () => {
    render(<CourseList isLoggedIn={true} />);

    const rows = screen.getByTestId('courselist-row');

    expect(rows.length).toBe(2);
  });
});
