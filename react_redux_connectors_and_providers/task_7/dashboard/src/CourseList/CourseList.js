import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelectors';
import { StyleSheet, css } from 'aphrodite';

class CourseList extends Component {
  componentDidMount() {
    // Call fetchCourses when the component mounts
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    // Call selectCourse or unSelectCourse based on the value of checked
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
    const { listCourses } = this.props;

    if (!listCourses) {
      return <div>No course available yet</div>;
    } else {
      return (
        <table id="CourseList" data-testid="courseList" className={css(styles.table)}>
          <thead className={css(styles.cell)} data-testid="courselist-row">
            <CourseListRow
              data-testid="courselist-row"
              textFirstCell="Available courses"
              isHeader={true}
            />
            <CourseListRow
              data-testid="courselist-row"
              textFirstCell="Course name"
              textSecondCell="Credit"
            />
          </thead>
          <tbody>
            {listCourses.map((course) => (
              <CourseListRow
                data-testid="courselist-row"
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isChecked={course.isSelected}
                onChangeRow={(checked) => this.onChangeRow(course.id, checked)}
              />
            ))}
          </tbody>
        </table>
      );
    }
  }
}

const styles = StyleSheet.create({
  table: {
    width: '100%',
  },
  'table-header': {
    textAlign: 'center',
  },
  cell: {
    padding: '0.25rem',
    border: '1px solid lightgray',
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
  fetchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  unSelectCourse: PropTypes.func.isRequired,
};

CourseList.defaultProps = {
  listCourses: [],
};

const mapStateToProps = (state) => ({
  listCourses: getListCourses(state),
});

export default connect(mapStateToProps, {
  fetchCourses,
  selectCourse,
  unSelectCourse,
})(CourseList);
