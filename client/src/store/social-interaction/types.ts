export interface SocialInteraction {
  id: string;
  name: string;
  date: Date;
  hours: number;
  isSocialDistancing: boolean;
}

export interface SIState {
  loading: boolean;
  data: SocialInteraction[];
}

export const START_REQUEST = 'START_REQUEST';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const SET_ALL = 'SET_SOCIAL_INTERACTIONS';
export const ADD_SI = 'ADD_SOCIAL_INTERACTION';
export const EDIT_SI = 'EDIT_SOCIAL_INTERACTION';
export const DELETE_SI = 'DELETE_SOCIAL_INTERACTION';

interface StartSIAction {
  type: typeof START_REQUEST;
}

interface FailedSIAction {
  type: typeof FAILED_REQUEST;
}

interface SetSIsAction {
  type: typeof SET_ALL;
  payload: SocialInteraction[];
}

interface AddSIAction {
  type: typeof ADD_SI;
  payload: SocialInteraction;
}

interface EditSIAction {
  type: typeof EDIT_SI;
  payload: {
    id: string;
    data: SocialInteraction;
  };
}

interface DeleteSIAction {
  type: typeof DELETE_SI;
  payload: string;
}

export type SIActionTypes =
  | StartSIAction
  | FailedSIAction
  | SetSIsAction
  | AddSIAction
  | EditSIAction
  | DeleteSIAction;
