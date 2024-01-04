import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export default function Notifications() {
  
  const priorities = ['default', 'urgent'];

  return (
    <div className='Notifications'>
      <button
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority={priorities[0]}>New course available</li>
        <li data-priority={priorities[1]}>New resume available</li>
        <li data-priority={priorities[1]} dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
