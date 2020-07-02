export interface SocialInteraction {
  id: string;
  name: string;
  date: Date;
  hours: number;
  isSocialDistancing: boolean;
}

export interface SocialInteractionState {
  loading: boolean;
  socialInteractions: SocialInteraction[];
}

export const FETCH_SOCIAL_INTERACTIONS = 'FETCH_SOCIAL_INTERACTIONS';
export const SET_SOCIAL_INTERACTIONS = 'SET_SOCIAL_INTERACTIONS';
export const ADD_SOCIAL_INTERACTION = 'ADD_SOCIAL_INTERACTION';
export const EDIT_SOCIAL_INTERACTION = 'EDIT_SOCIAL_INTERACTION';
export const DELETE_SOCIAL_INTERACTION = 'DELETE_SOCIAL_INTERACTION';

interface FetchSocialInteractionsAction {
  type: typeof FETCH_SOCIAL_INTERACTIONS;
}

interface SetSocialInteractionsAction {
  type: typeof SET_SOCIAL_INTERACTIONS;
  payload: SocialInteraction[];
}

interface AddSocialInteractionAction {
  type: typeof ADD_SOCIAL_INTERACTION;
  payload: SocialInteraction;
}

interface EditSocialInteractionAction {
  type: typeof EDIT_SOCIAL_INTERACTION;
  payload: {
    id: string;
    data: SocialInteraction;
  };
}

interface DeleteSocialInteractionAction {
  type: typeof DELETE_SOCIAL_INTERACTION;
  payload: string;
}

export type SocialInteractionActionTypes =
  | FetchSocialInteractionsAction
  | SetSocialInteractionsAction
  | AddSocialInteractionAction
  | EditSocialInteractionAction
  | DeleteSocialInteractionAction;
