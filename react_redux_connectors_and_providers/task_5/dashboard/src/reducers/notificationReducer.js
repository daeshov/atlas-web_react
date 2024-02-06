import { fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

export const initialState = fromJS({
  filter: 'DEFAULT',
  notifications: [],
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const updatedNotifications = fromJS(action.data).map(notification =>
        notification.set('isRead', false)
      );
      return state.set('notifications', updatedNotifications);

    case MARK_AS_READ:
      const updatedReadStatus = state.get('notifications').map(notification =>
        notification.get('id') === action.index
          ? notification.set('isRead', true)
          : notification
      );
      return state.set('notifications', updatedReadStatus);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
