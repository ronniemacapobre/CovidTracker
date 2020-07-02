import {
  SocialInteraction,
  SET_SOCIAL_INTERACTIONS,
  ADD_SOCIAL_INTERACTION,
  SocialInteractionActionTypes,
  EDIT_SOCIAL_INTERACTION,
  DELETE_SOCIAL_INTERACTION,
  FETCH_SOCIAL_INTERACTIONS,
} from './types';
import { Dispatch } from 'react';
import { Action } from 'redux';
import axios from 'axios';
import SocialInteractionService from '../../services/SocialInteractionService';

export function fetchSocialInteractionsRequestAction(): SocialInteractionActionTypes {
  return { type: FETCH_SOCIAL_INTERACTIONS };
}

export function setSocialInteractions(
  siList: SocialInteraction[]
): SocialInteractionActionTypes {
  return {
    type: SET_SOCIAL_INTERACTIONS,
    payload: siList,
  };
}

export function addSocialInteraction(
  si: SocialInteraction
): SocialInteractionActionTypes {
  return {
    type: ADD_SOCIAL_INTERACTION,
    payload: si,
  };
}

export function editSocialInteraction(
  id: string,
  si: SocialInteraction
): SocialInteractionActionTypes {
  return {
    type: EDIT_SOCIAL_INTERACTION,
    payload: {
      id: id,
      data: si,
    },
  };
}

export function deleteSocialInteraction(
  id: string
): SocialInteractionActionTypes {
  return {
    type: DELETE_SOCIAL_INTERACTION,
    payload: id,
  };
}

export const fetchSocialInteractions = () => {
  return function (dispatch: Dispatch<Action>) {
    dispatch(fetchSocialInteractionsRequestAction());
    SocialInteractionService.getAll()
      .then((response) => dispatch(setSocialInteractions(response.data)))
      .catch((error) => console.log(error));
  };
};
