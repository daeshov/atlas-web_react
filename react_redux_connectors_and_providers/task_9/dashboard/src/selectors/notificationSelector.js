import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) =>
    notifications.filter((notification) => !notification.get('isRead'))
);

export const getUnreadNotificationsByType = createSelector(
  [getUnreadNotifications, filterTypeSelected],
  (unreadNotifications, filterType) => {
    if (filterType === 'DEFAULT') {
      return unreadNotifications.toJS(); 
    } else if (filterType === 'URGENT') {
      return unreadNotifications.filter((notification) => notification.get('type') === 'urgent').toJS();
    } else {
      return [];
    }
  }
);
