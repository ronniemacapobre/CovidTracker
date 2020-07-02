import {
  SIState,
  SIActionTypes,
  SET_ALL,
  ADD_SI,
  EDIT_SI,
  DELETE_SI,
  START_REQUEST,
  FAILED_REQUEST,
} from './types';

const initialState: SIState = {
  loading: false,
  data: [],
};

export function siReducer(
  state = initialState,
  action: SIActionTypes
): SIState {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAILED_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case SET_ALL:
      return {
        ...state,
        loading: false,
        data: [...action.payload],
      };
    case ADD_SI:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case EDIT_SI:
      // TODO
      return { ...state, loading: false };
    case DELETE_SI:
      return {
        ...state,
        loading: false,
        data: state.data.filter((si) => {
          return si.id !== action.payload;
        }),
      };
    default:
      return state;
  }
}
