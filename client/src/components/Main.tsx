import React from 'react';

import { Button } from 'react-bootstrap';

const Main: React.FC = () => {
  return (
    <main className='admin__main'>
      <div className='dashboard'>
        <div className='dashboard__item'>
          <div className='card'>
            <h1>Recent Visited Places</h1>
          </div>
        </div>
        <div className='dashboard__item'>
          <div className='card'>
            <h1>Recent Social Interactions</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
