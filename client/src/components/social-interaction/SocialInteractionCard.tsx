import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchChartingData } from '../../store/social-interaction/utils';
import { AppState } from '../../store';
import { SocialInteraction } from '../../store/social-interaction/types';
import CardWithColumnChart from '../shared/CardWithColumnChart';

type StateProps = {
  getData: () => void;
  data: SocialInteraction[];
};

const SocialInteractionCard: React.FC<StateProps> = (props) => {
  useEffect(() => {
    props.getData();
  }, [props.getData]);

  const formatDataForChart = (data: SocialInteraction[]): any => {
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
          title='Recent Social Interactions'
          route='/social-interaction'
          vAxisTitle='Number of social interactions'
          hAxistTitle='Last 7 Days'
          data={formatDataForChart(props.data)}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState) => ({
  data: state.socialInteraction.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getData: () => dispatch(fetchChartingData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialInteractionCard);
