import { Dispatch } from 'react';
import { Action } from 'redux';

import { VisitedPlace } from './types';
import {
  startRequestAction,
  addVPAction,
  failedRequestAction,
  setVPsAction,
  deleteVPAction,
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

export const fetchAll = (isFiltered: boolean = false) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    VisitedPlaceService.getAll()
      .then((response) => {
        const cutOffDate = new Date();
        cutOffDate.setDate(cutOffDate.getDate() - 14);

        var data = response.data
          .map((visitedPlace: any) => new VisitedPlace(visitedPlace))
          .filter((visitedPlace: VisitedPlace) => {
            return isFiltered ? visitedPlace.date >= cutOffDate : true;
          })
          .sort((a: VisitedPlace, b: VisitedPlace) =>
            a.date > b.date ? -1 : 1
          );
        dispatch(setVPsAction(data));
      })
      .catch((error) => {
        dispatch(failedRequestAction());
        console.log(error);
      });
  };
};

export const deleteVisitedPlace = (id: string) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    VisitedPlaceService.remove(id)
      .then((response) => {
        dispatch(deleteVPAction(id));
      })
      .catch((error) => {
        dispatch(failedRequestAction());
        console.log(error);
      });
  };
};
