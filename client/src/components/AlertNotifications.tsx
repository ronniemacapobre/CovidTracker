import React from 'react';

import Notification from './shared/Notification';

const AlertNotifications: React.FC = () => {
  return (
    <>
      <Notification
        variant='danger'
        icon='fa-exclamation-circle'
        message='You have been exposed to a crowded place for the last 14 days. Try to
          avoid crowded places to minimized your exposure risk.'
      />
      <Notification
        variant='success'
        icon='fa-info-circle'
        message='Thank you for helping to stop spead the virus by staying home.'
      />
      <Notification
        variant='danger'
        icon='fa-exclamation-circle'
        message='You did not practice social distancing for the last 14 days. Stay at home and maintain 1-2 meters away from other people.'
      />
      <Notification
        variant='success'
        icon='fa-exclamation-circle'
        message='You are maintaining proper social distancing. Keep it up!'
      />
    </>
  );
};

export default AlertNotifications;
