import React from 'react';
import { Chart } from 'react-google-charts';
import VisitedPlacesCard from './visited-places/VisitedPlacesCard';
import SocialInteractionCard from './social-interaction/SocialInteractionCard';

const Main: React.FC = () => {
  return (
    <main className='admin__main'>
      <div className='dashboard'>
        <div className='dashboard__item'>
          <div className='card'>
            <VisitedPlacesCard />
          </div>
        </div>
        <div className='dashboard__item'>
          <div className='card'>
            <SocialInteractionCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
