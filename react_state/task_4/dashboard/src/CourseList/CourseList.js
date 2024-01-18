import React, { Component, } from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from "aphrodite";

class CourseList extends Component {
	render() {
		let {
			listCourses,
		} = this.props;

		if (!listCourses) {
			return (
				<div>
					No course available yet
				</div>
			);
		} else {
			return (
				<table id="CourseList" data-testid="courseList" className={css(styles.table)}>
					<thead className={css(styles.cell)} data-testid="courselist-row">
						<CourseListRow data-testid="courselist-row" textFirstCell="Available courses" isHeader={true} />
						<CourseListRow data-testid="courselist-row" textFirstCell="Course name" textSecondCell="Credit" />
					</thead>
					<tbody>
						{
							listCourses.map(course => {
								return (
									<CourseListRow
										data-testid="courselist-row"
										key={course.id}
										textFirstCell={course.name}
										textSecondCell={course.credit}
										isHeader={false}
									/>
								)
							})
						}
					</tbody>
				</table>
			);
		}
	};
};

const styles = StyleSheet.create({
	table: {
	  width: "100%",
	},
	"table-header": {
	  textAlign: "center",
	},
	cell: {
	  padding: "0.25rem",
	  border: "1px solid lightgray",
	},
  });
  

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
	listCourses: [],
};

export default CourseList;