import {
  SIState,
  SIActionTypes,
  SET_ALL,
  ADD_SI,
  EDIT_SI,
  DELETE_SI,
  START_REQUEST,
  FAILED_REQUEST,
  SET_FILTER,
} from './types';

const initialState: SIState = {
  loading: false,
  isFiltered: false,
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
      let cutOffDate = new Date();
      // TODO: Move to environment variable
      cutOffDate.setDate(cutOffDate.getDate() - 14);

      let data = state.isFiltered
        ? action.payload.filter((si) => {
            return si.date >= cutOffDate;
          })
        : action.payload;

      return {
        ...state,
        loading: false,
        data: [...data],
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
    case SET_FILTER:
      return {
        ...state,
        isFiltered: !state.isFiltered,
      };
    default:
      return state;
  }
}
