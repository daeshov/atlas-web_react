import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
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
});
