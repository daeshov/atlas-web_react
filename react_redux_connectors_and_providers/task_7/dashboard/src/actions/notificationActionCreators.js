// actions/courseActionCreators.js

import * as courseActionTypes from './courseActionTypes';

export const setLoadingState = (isLoading) => ({
  type: courseActionTypes.SET_LOADING_STATE,
  isLoading,
});

export const setCourses = (courses) => ({
  type: courseActionTypes.FETCH_COURSES_SUCCESS,
  courses,
});

export const fetchCourses = () => async (dispatch) => {
  dispatch(setLoadingState(true));

  try {
    // Assuming that courses.json is in the dist folder
    const response = await fetch('/dist/courses.json');
    const data = await response.json();
    dispatch(setCourses(data));
  } catch (error) {
    console.error('Error fetching courses:', error);
  } finally {
    dispatch(setLoadingState(false));
  }
};
