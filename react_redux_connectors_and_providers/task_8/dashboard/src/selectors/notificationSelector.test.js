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
  it("should return unread notifications when the filter is set to DEFAULT", () => {
    const result = getUnreadNotificationsByType(state);
    expect(result.size).toBe(2);
    expect(result.get(0).get("type")).toBe("default");
    expect(result.get(1).get("type")).toBe("urgent");
  });

  it("should return only unread urgent notifications when the filter is set to URGENT", () => {
    state = state.setIn(["notifications", "filter"], "URGENT");
    const result = getUnreadNotificationsByType(state);
    expect(result.size).toBe(1);
    expect(result.get(0).get("type")).toBe("urgent");
  });
});
