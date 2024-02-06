import React from "react";
import { render } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

jest.mock('aphrodite');

describe("<CourseListRow />", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow textFirstCell="test" />
        </tbody>
      </table>
    );
    expect(container).toBeInTheDocument();
  });

  it("renders one cell", () => {
    const { getByText } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="test" />
        </tbody>
      </table>
    );
    const element = getByText("test");
  });

  it("renders two cells", () => {
    const { getByText } = render(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    const firstCell = getByText("test");
    const secondCell = getByText("second");
    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();
  });
});

