import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} notifications={[]} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render NotificationItem elements', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Test Notification 1' },
      { id: 2, type: 'urgent', value: 'Test Notification 2' },
    ];

    const wrapper = shallow(<Notifications displayDrawer notifications={notifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it('should render the correct html for the first NotificationItem', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Test Notification 1', html: { __html: 'Test HTML 1' } },
      { id: 2, type: 'urgent', value: 'Test Notification 2' },
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} notifications={notifications} />);
    expect(wrapper.find(NotificationItem).at(0).prop('html')).toEqual({ __html: 'Test HTML 1' });
    expect(wrapper.find(NotificationItem).at(0).prop('value')).toEqual('Test Notification 1');
  });
});
