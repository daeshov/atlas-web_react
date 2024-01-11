import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe("Testing the <CourseListRow /> Component", () => {
  
    it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
        const props = {
            isHeader: true,
            textFirstCell: "test",
            textSecondCell: null
        }
        const { container } = render(<CourseListRow shouldRender {...props} />);
        expect(container.firstChild).toMatchInlineSnapshot(`
<tr>
  <th
    colspan="2"
  >
    test
  </th>
</tr>
`);
    });
    
    it("renders two cells when textSecondCell is present", () => {
        const props = {
            isHeader: true,
            textFirstCell: "test",
            textSecondCell: "test2"
        }
        const { container } = render(<CourseListRow shouldRender {...props} />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <tr>
              <th>
                ${props.textFirstCell}
              </th>
              <th>
                ${props.textSecondCell}
              </th>
            </tr>
        `);
    });
    
    it("renders correctly two td elements within a tr element", () => {
        const props = {
            isHeader: false,
            textFirstCell: "test",
            textSecondCell: "test2"
        }
        const { container } = render(<CourseListRow shouldRender {...props} />);
        expect(container.firstChild).toMatchInlineSnapshot(`
            <tr>
              <td>
                ${props.textFirstCell}
              </td>
              <td>
                ${props.textSecondCell}
              </td>
            </tr>
        `);
    });
});
