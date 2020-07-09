import { Dispatch } from 'react';
import { Action } from 'redux';

import { VisitedPlace } from './types';
import {
  startRequestAction,
  addVPAction,
  failedRequestAction,
  setVPsAction,
} from './action';
import VisitedPlaceService from '../../services/VisitedPlaceService';

export const addVisitedPlace = (visitedPlace: VisitedPlace) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    VisitedPlaceService.add(visitedPlace)
      .then((response) => {
        dispatch(addVPAction(new VisitedPlace(response.data)));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failedRequestAction());
      });
  };
};

export const fetchAll = () => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    VisitedPlaceService.getAll()
      .then((response) => {
        var data = response.data.map((si: any) => new VisitedPlace(si));
        dispatch(setVPsAction(data));
      })
      .catch((error) => {
        dispatch(failedRequestAction());
        console.log(error);
      });
  };
};

export const deleteSI = (id: string) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    VisitedPlaceService.remove(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch(failedRequestAction());
        console.log(error);
      });
  };
};
