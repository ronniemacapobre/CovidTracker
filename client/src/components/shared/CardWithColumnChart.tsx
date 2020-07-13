import React from 'react';
import Chart from 'react-google-charts';

type Props = {
  title: string;
  route: string;
  vAxisTitle: string;
  hAxistTitle: string;
  data: [];
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
        options={options}
        data={props.data}
      />
      <a href={props.route}>View All</a>
    </div>
  );
};

export default CardWithColumnChart;
