import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Apply rowChecked style when isChecked is true
    const rowStyle = isChecked ? styles.rowChecked : {};
    setBgColor(rowStyle);
  }, [isChecked]);

  const [bgColor, setBgColor] = useState({});
  const bg_color_1 = { backgroundColor: "#f5f5f5ab" };
  const bg_color_2 = { backgroundColor: "#deb5b545" };

  if (isHeader === true) {
    bgColor.backgroundColor = bg_color_2.backgroundColor;
    if (textSecondCell === null) {
      return <th colSpan="2" style={bgColor}>{textFirstCell}</th>;
    } else {
      return (
        <Fragment>
          <th style={bgColor} data-testid="courselist-row" >{textFirstCell}</th>
          <th style={bgColor} data-testid="courselist-row" >{textSecondCell}</th>
        </Fragment>
      );
    }
  }

  if (isHeader === false) {
    bgColor.backgroundColor = bg_color_1.backgroundColor;

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    return (
      <Fragment>
        <td style={bgColor}>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isChecked}
            className={css(styles.checkbox)}
          />
          {textFirstCell}
        </td>
        <td style={bgColor}>{textSecondCell}</td>
      </Fragment>
    );
  }

  return null;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  checkbox: {
    marginRight: '5px',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;
