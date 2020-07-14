import React from 'react';
import Chart from 'react-google-charts';

type Props = {
  title: string;
  route: string;
  vAxisTitle: string;
  hAxistTitle: string;
  data: any[];
};

const CardWithColumnChart: React.FC<Props> = (props) => {
  const options = {
    hAxis: {
      title: props.hAxistTitle,
      titleTextStyle: { bold: true, italic: false },
    },
    vAxis: {
      title: props.vAxisTitle,
      titleTextStyle: { bold: true, italic: false },
    },
    legend: { position: 'none' },
  };

  const cardTitleStype = {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  };

  const formatDataForChart = (data: any[]): any => {
    let chartDataMap = new Map();

    for (const item of data) {
      const shortDate = item.date.toLocaleDateString();

      chartDataMap.set(
        shortDate,
        chartDataMap.has(shortDate) ? chartDataMap.get(shortDate) + 1 : 1
      );
    }

    return [['Last 7 Days', ''], ...Array.from(chartDataMap)];
  };

  return (
    <div>
      <div style={cardTitleStype}>
        <h3>{props.title}</h3>
        <a className='btn btn-success' href={props.route}>
          View All
        </a>
      </div>
      <Chart
        chartType='ColumnChart'
        width='100%'
        height='400px'
        loader={<div>Loading Chart...</div>}
        options={options}
        data={formatDataForChart(props.data)}
      />
      <a href={props.route}>View All</a>
    </div>
  );
};

export default CardWithColumnChart;
