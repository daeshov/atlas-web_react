import * as uiActionTypes from './uiActionTypes';

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
