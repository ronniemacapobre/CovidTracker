import React from 'react';

import Notifications from './Notifications';

const Dashboard: React.FC = () => {
  return (
    <main>
      <h1>COVID Exposure Tracking Tool</h1>
      <Notifications />
      <div className='flex-grid'>
        <div>
          <h2>Recent Visited Places</h2>
          <ul>
            <li>no position: absolute</li>
            <li>no float</li>
            <li>no clearfix</li>
            <li>no faux columns</li>
            <li>no javascript</li>
          </ul>
        </div>
        <div>
          <h2>Recent Social Interaction</h2>
          <ul>
            <li>no images</li>
            <li>no extra retina sprites</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
