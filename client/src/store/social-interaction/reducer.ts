import {
  SocialInteractionState,
  SocialInteractionActionTypes,
  SET_SOCIAL_INTERACTIONS,
  ADD_SOCIAL_INTERACTION,
  DELETE_SOCIAL_INTERACTION,
  FETCH_SOCIAL_INTERACTIONS,
} from './types';

const initialState: SocialInteractionState = {
  loading: false,
  socialInteractions: [],
};

export function socialInteractionReducer(
  state = initialState,
  action: SocialInteractionActionTypes
): SocialInteractionState {
  switch (action.type) {
    case FETCH_SOCIAL_INTERACTIONS:
      return {
        ...state,
        loading: true,
      };

    case SET_SOCIAL_INTERACTIONS:
      return {
        ...state,
        socialInteractions: [...action.payload],
      };
    case ADD_SOCIAL_INTERACTION:
      return {
        ...state,
        socialInteractions: [...state.socialInteractions, action.payload],
      };
    case DELETE_SOCIAL_INTERACTION:
      return {
        ...state,
        socialInteractions: state.socialInteractions.filter((si) => {
          return si.id !== action.payload;
        }),
      };
    default:
      return state;
  }
}
