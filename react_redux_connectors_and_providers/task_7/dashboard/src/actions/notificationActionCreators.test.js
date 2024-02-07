import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as courseActionCreators from './courseActionCreators';
import * as courseActionTypes from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Action Creators', () => {
  it('should fetch courses correctly', async () => {
    const expectedCourses = [
      { id: 1, title: 'Course 1' },
      { id: 2, title: 'Course 2' },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expectedCourses),
      })
    );

    const store = mockStore({});

    await store.dispatch(courseActionCreators.fetchCourses());

    const actions = store.getActions();
    const expectedActions = [
      { type: courseActionTypes.SET_LOADING_STATE, isLoading: true },
      { type: courseActionTypes.FETCH_COURSES_SUCCESS, courses: expectedCourses },
      { type: courseActionTypes.SET_LOADING_STATE, isLoading: false },
    ];

    expect(actions).toEqual(expectedActions);
  });
});
