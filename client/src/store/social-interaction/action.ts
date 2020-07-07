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
  TOGGLE_DELETE_SI,
} from './types';

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

export function toggleDeleteSIAction(id: string): SIActionTypes {
  return {
    type: TOGGLE_DELETE_SI,
    payload: id,
  };
}
