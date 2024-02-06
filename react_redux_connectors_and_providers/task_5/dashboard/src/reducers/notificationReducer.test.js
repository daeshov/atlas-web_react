import { fromJS } from 'immutable';
import notificationReducer, { initialState } from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer tests', function () {
  it('returns the default state', function () {
    const state = notificationReducer(undefined, {});
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: [],
    });
    expect(state).toEqual(expectedState);
  });

  it('handles FETCH_NOTIFICATIONS_SUCCESS correctly', function () {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const expectedData = fromJS({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    });

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedData);
  });

  it('handles MARK_AS_READ correctly', function () {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    });

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedData = fromJS({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    });

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedData);
  });

  it('handles SET_TYPE_FILTER correctly', function () {
    const basicState = fromJS({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    });

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const expectedData = fromJS({
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    });

    const state = notificationReducer(basicState, action);
    expect(state).toEqual(expectedData);
  });
  it('verifies the state returned by the notificationReducer function equals the initial state when no action is passed', function () {
    const state = notificationReducer(undefined, {});
    expect(state.equals(initialState)).toBeTruthy();
  });

  it('verifies the state returned by the notificationReducer function, when the action FETCH_NOTIFICATIONS_SUCCESS is passed, updates the state correctly', function () {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    const nextState = notificationReducer(undefined, action);

    const expectedState = initialState.set('notifications', data.map(notification => ({ ...notification, isRead: false })));
    expect(nextState.equals(expectedState)).toBeTruthy();
  });

  it('verifies the state returned by the notificationReducer function, when the action MARK_AS_READ is passed, updates the state correctly', function () {
    const initialStateWithNotifications = initialState.set('notifications', [
      { id: 1, type: 'default', value: 'New course available', isRead: false },
      { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
    ]);
    const action = { type: MARK_AS_READ, index: 1 };
    const nextState = notificationReducer(initialStateWithNotifications, action);

    const expectedState = initialState.set('notifications', [
      { id: 1, type: 'default', value: 'New course available', isRead: true },
      { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
    ]);
    expect(nextState.equals(expectedState)).toBeTruthy();
  });

  it('verifies the state returned by the notificationReducer function, when the action SET_TYPE_FILTER is passed, updates the state correctly', function () {
    const action = { type: SET_TYPE_FILTER, filter: 'urgent' };
    const nextState = notificationReducer(undefined, action);

    const expectedState = initialState.set('filter', 'urgent');
    expect(nextState.equals(expectedState)).toBeTruthy();
  });

  it('verifies the state returned by the notificationReducer function, when the action SET_LOADING_STATE is passed, updates the state correctly', function () {
    const action = { type: SET_LOADING_STATE, loading: true };
    const nextState = notificationReducer(undefined, action);

    const expectedState = initialState.set('loading', true);
    expect(nextState.equals(expectedState)).toBeTruthy();
  });
});
