import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const boundCourseActionCreators = (dispatch) => bindActionCreators({
  selectCourse,
  unSelectCourse,
}, dispatch);

export function fetchCourses() {
  return function(dispatch) {
      return fetch('http://localhost:8564/courses.json')
      .then((data) => data.json())
      .then((data) => dispatch(setCourses(data)))
      .catch((err) => console.log(err));
  };
}
