import { Dispatch } from 'react';
import { Action } from 'redux';

import {
  SocialInteraction,
  SIActionTypes,
  SET_ALL,
  START_REQUEST,
  FAILED_REQUEST,
  ADD_SI,
  EDIT_SI,
  DELETE_SI,
  SET_FILTER,
} from './types';
import SocialInteractionService from '../../services/SocialInteractionService';

export function startRequestAction(): SIActionTypes {
  return { type: START_REQUEST };
}

export function failedRequestAction(): SIActionTypes {
  return {
    type: FAILED_REQUEST,
  };
}

export function setSIsAction(data: SocialInteraction[]): SIActionTypes {
  return {
    type: SET_ALL,
    payload: data,
  };
}

export function addSIAction(si: SocialInteraction): SIActionTypes {
  return {
    type: ADD_SI,
    payload: si,
  };
}

export function editSIAction(id: string, si: SocialInteraction): SIActionTypes {
  return {
    type: EDIT_SI,
    payload: {
      id: id,
      data: si,
    },
  };
}

export function deleteSIAction(id: string): SIActionTypes {
  return {
    type: DELETE_SI,
    payload: id,
  };
}

export function setFilterAction(): SIActionTypes {
  return { type: SET_FILTER };
}

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
