import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('aphrodite');

describe('<CourseList />', () => {
  it('should contain the CourseList component when isLoggedIn is true', () => {
    const store = mockStore({
      listCourses: [],
    });

    render(
      <Provider store={store}>
        <CourseList isLoggedIn={true} />
      </Provider>
    );
    expect(screen.getByTestId('courseList')).toBeInTheDocument();
  });

  it('renders 3 different rows', () => {
    const store = mockStore({
      listCourses: [
        { id: '1', name: 'Course 1', credit: 3, isSelected: false },
        { id: '2', name: 'Course 2', credit: 4, isSelected: false },
        { id: '3', name: 'Course 3', credit: 3, isSelected: false },
      ],
    });

    render(
      <Provider store={store}>
        <CourseList isLoggedIn={true} />
      </Provider>
    );

    expect(screen.getAllByTestId('courselist-row')).toHaveLength(3);
  });

  it('dispatches fetchCourses action when component is mounted', () => {
    const store = mockStore({
      listCourses: [],
    });

    render(
      <Provider store={store}>
        <CourseList isLoggedIn={true} />
      </Provider>
    );

    const actions = store.getActions();
    expect(actions[0].type).toEqual('FETCH_COURSES_SUCCESS'); // Assuming FETCH_COURSES_SUCCESS is the action type
  });

  it('dispatches selectCourse and unSelectCourse actions when onChangeRow is called', () => {
    const store = mockStore({
      listCourses: [
        { id: '1', name: 'Course 1', credit: 3, isSelected: false },
        { id: '2', name: 'Course 2', credit: 4, isSelected: false },
        { id: '3', name: 'Course 3', credit: 3, isSelected: false },
      ],
    });

    render(
      <Provider store={store}>
        <CourseList isLoggedIn={true} />
      </Provider>
    );

    // Assuming the second row checkbox is initially unchecked
    const checkbox = screen.getAllByTestId('courselist-cell')[1].querySelector('input[type="checkbox"]');
    expect(checkbox.checked).toBe(false);

    // Triggering the change event
    fireEvent.change(checkbox, { target: { checked: true } });

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'SELECT_COURSE', id: '2' }, // Assuming SELECT_COURSE is the action type
    ]);

    // Triggering the change event again to unselect
    fireEvent.change(checkbox, { target: { checked: false } });

    const updatedActions = store.getActions();
    expect(updatedActions).toEqual([
      { type: 'SELECT_COURSE', id: '2' },
      { type: 'UNSELECT_COURSE', id: '2' }, // Assuming UNSELECT_COURSE is the action type
    ]);
  });
});
