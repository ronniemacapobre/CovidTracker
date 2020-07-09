import {
  VPActionTypes,
  FAILED_REQUEST,
  VisitedPlace,
  SET_ALL,
  ADD_VP,
  EDIT_VP,
  DELETE_VP,
  SET_FILTER,
  TOGGLE_DELETE_VP,
} from './types';
import { START_REQUEST } from '../visited-places/types';

export function startRequestAction(): VPActionTypes {
  return { type: START_REQUEST };
}

export function failedRequestAction(): VPActionTypes {
  return {
    type: FAILED_REQUEST,
  };
}

export function setVPsAction(data: VisitedPlace[]): VPActionTypes {
  return {
    type: SET_ALL,
    payload: data,
  };
}

export function addVPAction(visitedPlace: VisitedPlace): VPActionTypes {
  return {
    type: ADD_VP,
    payload: visitedPlace,
  };
}

export function editVPAction(
  id: string,
  visitedPlace: VisitedPlace
): VPActionTypes {
  return {
    type: EDIT_VP,
    payload: {
      id: id,
      data: visitedPlace,
    },
  };
}

export function deleteVPAction(id: string): VPActionTypes {
  return {
    type: DELETE_VP,
    payload: id,
  };
}

export function setFilterAction(): VPActionTypes {
  return { type: SET_FILTER };
}

export function toggleDeleteSIAction(id: string): VPActionTypes {
  return {
    type: TOGGLE_DELETE_VP,
    payload: id,
  };
}
