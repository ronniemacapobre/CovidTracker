export class SocialInteraction {
  public id: string;
  public name: string;
  public date: Date;
  public hours: number;
  public isSocialDistancing: boolean;

  constructor(data: any) {
    this.id = data._id;
    this.name = data.name;
    this.date = new Date(data.date);
    this.hours = data.hours;
    this.isSocialDistancing = data.isSocialDistancing;
  }
}

export interface SIState {
  loading: boolean;
  isFiltered: boolean;
  data: SocialInteraction[];
}

export const START_REQUEST = 'START_REQUEST';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const SET_ALL = 'SET_SOCIAL_INTERACTIONS';
export const SET_FILTER = 'SET_FILTER';
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

interface SetFilterAction {
  type: typeof SET_FILTER;
}

export type SIActionTypes =
  | StartSIAction
  | FailedSIAction
  | SetSIsAction
  | AddSIAction
  | EditSIAction
  | DeleteSIAction
  | SetFilterAction;
