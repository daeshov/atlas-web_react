import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <tr data-testid="courselist-header-cell">
                    <th colSpan="2" data-testid="courselist-row">{textFirstCell}</th>
                </tr>
            )
        } else {
            return (
                <tr data-testid="courselist-row">
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        }
    } else {
        return (
            <tr data-testid="courselist-row">
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.string
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}