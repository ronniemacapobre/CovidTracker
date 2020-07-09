export class VisitedPlace {
  public id: string;
  public place: string;
  public date: Date;
  public hours: number;
  public isCrowded: boolean;

  constructor(data: any) {
    this.id = data._id;
    this.place = data.place;
    this.date = new Date(data.date);
    this.hours = data.hours;
    this.isCrowded = data.isCrowded;
  }
}

export interface VPState {
  loading: boolean;
  isFiltered: boolean;
  idToDelete: string;
  data: VisitedPlace[];
}

export const START_REQUEST = 'START_REQUEST_VP';
export const FAILED_REQUEST = 'FAILED_REQUEST_VP';
export const SET_ALL = 'SET_VISITED_PLACES';
export const SET_FILTER = 'SET_FILTER_VP';
export const ADD_VP = 'ADD_VISITED_PLACE';
export const EDIT_VP = 'EDIT_VISITED_PLACE';
export const DELETE_VP = 'DELETE_VISITED_PLACE';
export const TOGGLE_DELETE_VP = 'TOGGLE_DELETE_VISITED_PLACE';

interface StartVPAction {
  type: typeof START_REQUEST;
}

interface FailedVPAction {
  type: typeof FAILED_REQUEST;
}

interface SetVPsAction {
  type: typeof SET_ALL;
  payload: VisitedPlace[];
}

interface AddVPAction {
  type: typeof ADD_VP;
  payload: VisitedPlace;
}

interface EditVPAction {
  type: typeof EDIT_VP;
  payload: {
    id: string;
    data: VisitedPlace;
  };
}

interface DeleteVPAction {
  type: typeof DELETE_VP;
  payload: string;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
}

interface ToggleDeleteVPAction {
  type: typeof TOGGLE_DELETE_VP;
  payload: string;
}

export type VPActionTypes =
  | StartVPAction
  | FailedVPAction
  | SetVPsAction
  | AddVPAction
  | EditVPAction
  | DeleteVPAction
  | SetFilterAction
  | ToggleDeleteVPAction;
