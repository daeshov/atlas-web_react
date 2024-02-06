import uiReducer, { basicState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer tests', () => {
  it('verifies the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.equals(basicState)).toBeTruthy();
  });

  it('verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const nextState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    const expectedState = basicState.set('isNotificationDrawerVisible', true);
    expect(nextState.equals(expectedState)).toBeTruthy();
  });
});
