import { Dispatch } from 'react';
import { Action } from 'redux';

import { SocialInteraction } from './types';
import {
  startRequestAction,
  addSIAction,
  failedRequestAction,
  setSIsAction,
  editSIAction,
} from './action';
import SocialInteractionService from '../../services/SocialInteractionService';

export const addSI = (si: SocialInteraction) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    SocialInteractionService.add(si)
      .then((response) => {
        dispatch(addSIAction(new SocialInteraction(response.data)));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failedRequestAction());
      });
  };
};

export const editSI = (id: string, updatedSI: SocialInteraction) => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(startRequestAction());
    SocialInteractionService.update(id, updatedSI)
      .then((response) => {
        console.log(response.data);
        dispatch(editSIAction(id, response.data));
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
    SocialInteractionService.getAll()
      .then((response) => {
        var data = response.data.map((si: any) => new SocialInteraction(si));
        dispatch(setSIsAction(data));
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
    SocialInteractionService.remove(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch(failedRequestAction());
        console.log(error);
      });
  };
};
