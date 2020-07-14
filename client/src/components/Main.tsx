import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import VisitedPlacesCard from './visited-places/VisitedPlacesCard';
import SocialInteractionCard from './social-interaction/SocialInteractionCard';
import { AppState } from '../store';
import { fetchChartingData as getVisitedPlaces } from '../store/visited-places/utils';
import { fetchChartingData as getSocialInteractions } from '../store/social-interaction/utils';
import { SocialInteraction } from '../store/social-interaction/types';
import { VisitedPlace } from '../store/visited-places/types';
import CardWithColumnChart from './shared/CardWithColumnChart';

type StateProps = {
  getVisitedPlaces: () => void;
  getSocialInteractions: () => void;
  visitedPlaces: VisitedPlace[];
  socialInteractions: SocialInteraction[];
};

const Main: React.FC<StateProps> = (props) => {
  useEffect(() => {
    props.getVisitedPlaces();
    props.getSocialInteractions();
  }, [props.getVisitedPlaces, props.getSocialInteractions]);

  return (
    <main className='admin__main'>
      <div className='dashboard'>
        <div className='dashboard__item'>
          <div className='card'>
            {props.visitedPlaces.length > 0 && (
              <CardWithColumnChart
                title='Recent Visited Places'
                route='/visited-places'
                vAxisTitle='Number of visited places'
                hAxistTitle='Last 7 Days'
                data={props.visitedPlaces}
              />
            )}
          </div>
        </div>
        <div className='dashboard__item'>
          <div className='card'>
            {props.socialInteractions.length > 0 && (
              <CardWithColumnChart
                title='Recent Social Interactions'
                route='/social-interaction'
                vAxisTitle='Number of social interactions'
                hAxistTitle='Last 7 Days'
                data={props.socialInteractions}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state: AppState) => ({
  visitedPlaces: state.visitedPlace.data,
  socialInteractions: state.socialInteraction.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getVisitedPlaces: () => dispatch(getVisitedPlaces()),
  getSocialInteractions: () => dispatch(getSocialInteractions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
