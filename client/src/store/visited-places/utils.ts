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

export const fetchAll = (cutOffDays?: number, isDateAsc: boolean = false) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    VisitedPlaceService.getAll()
      .then((response) => {
        // Check if there is a cutoff date
        const cutOffDate = new Date();
        if (cutOffDays) {
          cutOffDate.setDate(cutOffDate.getDate() - cutOffDays);
        }

        var data = response.data
          .map((visitedPlace: any) => new VisitedPlace(visitedPlace))
          .filter((visitedPlace: VisitedPlace) => {
            // Return all if there's no cutoff
            if (!cutOffDays) return true;

            // Include data within the cutoff date range
            return (
              visitedPlace.date >= cutOffDate && visitedPlace.date <= new Date()
            );
          })
          .sort((a: VisitedPlace, b: VisitedPlace) => {
            if (isDateAsc) {
              return a.date > b.date ? 1 : -1;
            } else {
              return a.date > b.date ? -1 : 1;
            }
          });
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
