import React from 'react';
import { connect } from 'react-redux';

import { fetchChartingData } from '../../store/visited-places/utils';
import { useEffect } from 'react';
import { AppState } from '../../store';
import { VisitedPlace } from '../../store/visited-places/types';
import CardWithColumnChart from '../shared/CardWithColumnChart';

type StateProps = {
  getData: () => void;
  data: VisitedPlace[];
};

const VisitedPlacesCard: React.FC<StateProps> = (props) => {
  useEffect(() => {
    props.getData();
  }, [props.getData]);

  const formatDataForChart = (data: VisitedPlace[]): any => {
    let chartDataMap = new Map();

    for (const { date } of data) {
      const shortDate = date.toLocaleDateString();

      chartDataMap.set(
        shortDate,
        chartDataMap.has(shortDate) ? chartDataMap.get(shortDate) + 1 : 1
      );
    }

    return [['Last 7 Days', ''], ...Array.from(chartDataMap)];
  };

  return (
    <React.Fragment>
      {props.data.length > 0 && (
        <CardWithColumnChart
          title='Recent Visited Places'
          route='/visited-places'
          vAxisTitle='Number of Visited Places'
          hAxistTitle='Last 7 Days'
          data={formatDataForChart(props.data)}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState) => ({
  data: state.visitedPlace.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(fetchChartingData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitedPlacesCard);
