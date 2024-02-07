import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ textFirstCell, textSecondCell, isChecked, onChangeRow, isHeader }) => {
  const handleChange = (e) => {
    onChangeRow(e.target.checked);
  };

  return (
    <tr className={css(styles.row)} data-testid="courselist-row">
      <td className={css(styles.cell)} data-testid="courselist-cell">
        {isHeader ? (
          textFirstCell
        ) : (
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        )}
      </td>
      <td className={css(styles.cell)} data-testid="courselist-cell">
        {isHeader ? textSecondCell : isChecked ? 'Selected' : textSecondCell}
      </td>
    </tr>
  );
};

const styles = StyleSheet.create({
  row: {
    ':hover': {
      backgroundColor: 'lightgray',
    },
  },
  cell: {
    padding: '0.25rem',
    border: '1px solid lightgray',
    textAlign: 'center',
  },
});

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isChecked: PropTypes.bool,
  onChangeRow: PropTypes.func,
  isHeader: PropTypes.bool,
};

export default CourseListRow;
