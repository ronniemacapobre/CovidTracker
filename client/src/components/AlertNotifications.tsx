import React, { useEffect } from 'react';

import Notification from './shared/Notification';
import { VisitedPlace } from '../store/visited-places/types';
import { SocialInteraction } from '../store/social-interaction/types';
import { AppState } from '../store';
import { fetchAll as getVisitedPlaces } from '../store/visited-places/utils';
import { fetchAll as getSocialInteractions } from '../store/social-interaction/utils';
import { connect } from 'react-redux';

type StateProps = {
  getVisitedPlaces: () => void;
  getSocialInteractions: () => void;
  visitedPlaces: VisitedPlace[];
  socialInteractions: SocialInteraction[];
};

const AlertNotifications: React.FC<StateProps> = (props) => {
  useEffect(() => {
    props.getVisitedPlaces();
    props.getSocialInteractions();
  }, [props.getVisitedPlaces, props.getSocialInteractions]);

  return (
    <>
      {props.visitedPlaces &&
      props.visitedPlaces.length > 0 &&
      props.visitedPlaces.find((vp) => vp.isCrowded) ? (
        <Notification
          variant='danger'
          icon='fa-exclamation-circle'
          message='You have been exposed to a crowded place for the last 14 days. Try to
          avoid crowded places to minimize your exposure risk.'
        />
      ) : (
        <Notification
          variant='success'
          icon='fa-info-circle'
          message='Thank you for helping to stop spead the virus by staying home.'
        />
      )}
      {props.socialInteractions &&
      props.socialInteractions.length > 0 &&
      props.socialInteractions.find((si) => !si.isSocialDistancing) ? (
        <Notification
          variant='danger'
          icon='fa-exclamation-circle'
          message='You did not practice social distancing for the last 14 days. Stay at home and maintain 1-2 meters away from other people.'
        />
      ) : (
        <Notification
          variant='success'
          icon='fa-exclamation-circle'
          message='You are maintaining proper social distancing. Keep it up!'
        />
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  visitedPlaces: state.visitedPlace.data,
  socialInteractions: state.socialInteraction.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  getVisitedPlaces: () => dispatch(getVisitedPlaces(14)),
  getSocialInteractions: () => dispatch(getSocialInteractions(14)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertNotifications);
