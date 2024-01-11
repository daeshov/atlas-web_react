import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan=2 when isHeader is true and textSecondCell does not exist', () => {
    const { getByTestId } = render(<CourseListRow isHeader={true} textFirstCell='First' />);
    const headerCell = getByTestId('courselist-header-cell');
    
    expect(headerCell).toBeInTheDocument();
    expect(headerCell.colSpan).toBe("2");
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const { getAllByTestId } = render(<CourseListRow isHeader={true} textFirstCell='First' textSecondCell='Second' />);
    const headerCells = getAllByTestId('courselist-header-cell');
    
    expect(headerCells.length).toBe(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const { getByTestId, getAllByTestId } = render(<CourseListRow isHeader={false} textFirstCell='First' textSecondCell='Second' />);
    const row = getByTestId('courselist-row');
    const cells = getAllByTestId('courselist-cell');
    
    expect(row).toBeInTheDocument();
    expect(cells.length).toBe(2);
  });
});
