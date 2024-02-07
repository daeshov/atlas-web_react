import { bindActionCreators } from "redux";
import * as uiActionTypes from "./uiActionTypes";

export const login = (email, password) => ({
  type: uiActionTypes.LOGIN,
  user: { email, password },
});

export const logout = () => ({ type: uiActionTypes.LOGOUT });
export const displayNotificationDrawer = () => ({
  type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER,
});
export const hideNotificationDrawer = () => ({
  type: uiActionTypes.HIDE_NOTIFICATION_DRAWER,
});

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { login, logout, displayNotificationDrawer, hideNotificationDrawer },
    dispatch
  );
};

export const loginSuccess = () => ({ type: uiActionTypes.LOGIN_SUCCESS });
export const loginFailure = () => ({ type: uiActionTypes.LOGIN_FAILURE });

export const loginRequest = (email, password) => (dispatch) => {
  dispatch(login(email, password));
  (async () => {
    try {
      const response = await fetch("http://localhost:3000/login-success.json");
      await response.json();
      dispatch(loginSuccess());
    } catch (err) {
      dispatch(loginFailure());
    }
  })();
};

export const setLoadingState = (isLoading) => ({
  type: uiActionTypes.SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (notifications) => ({
  type: uiActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});

export const fetchNotifications = () => async (dispatch) => {
  dispatch(setLoadingState(true));

  try {
    const response = await fetch('/notifications.json');
    const data = await response.json();
    dispatch(setNotifications(data));
  } catch (error) {
    console.error('Error fetching notifications:', error);
  } finally {
    dispatch(setLoadingState(false));
  }
};
