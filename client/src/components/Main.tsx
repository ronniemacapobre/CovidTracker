import React from 'react';
import { Chart } from 'react-google-charts';
import VisitedPlacesCard from './visited-places/VisitedPlacesCard';

const Main: React.FC = () => {
  const options = {
    hAxis: {
      title: 'Last 7 Days',
      titleTextStyle: { bold: true, italic: false },
    },
    vAxis: {
      title: 'No. of Visited Places',
      titleTextStyle: { bold: true, italic: false },
    },
    legend: { position: 'none' },
  };

  const data = [
    ['Last 7 Days', ''],
    ['7/13/2020', 8],
    ['7/12/2020', 4],
    ['7/11/2020', 2],
    ['7/10/2020', 1],
    ['7/09/2020', 12],
    ['7/08/2020', 6],
  ];

  return (
    <main className='admin__main'>
      <div className='dashboard'>
        <div className='dashboard__item'>
          <div className='card'>
            <VisitedPlacesCard />
          </div>
        </div>
        {/* <div className='dashboard__item'>
          <div className='card'>
            <h3>Recent Social Interactions</h3>
            <div className='App'>
              <Chart
                chartType='ColumnChart'
                width='100%'
                height='400px'
                data={data}
              />
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Main;
