import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('notification selectors tests', () => {
  const state = fromJS({
    filter: 'DEFAULT',
    notifications: [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: true, type: 'urgent', value: 'New data available' },
    ],
  });

  it('filterTypeSelected works as expected', () => {
    const result = filterTypeSelected(state);
    expect(result).toEqual('DEFAULT');
  });

  it('getNotifications returns a list of notifications in Map format', () => {
    const result = getNotifications(state);
    const expected = fromJS([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: true, type: 'urgent', value: 'New data available' },
    ]);
    expect(result).toEqual(expected);
  });

  it('getUnreadNotifications returns a list of unread notifications in Map format', () => {
    const result = getUnreadNotifications(state);
    const expected = fromJS([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    ]);
    expect(result).toEqual(expected);
  });
});
