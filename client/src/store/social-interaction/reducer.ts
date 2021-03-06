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
  TOGGLE_DELETE_SI,
} from './types';

const initialState: SIState = {
  loading: false,
  isFiltered: false,
  idToDelete: '',
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
      return {
        ...state,
        loading: false,
        data: state.data.map((si) =>
          si.id === action.payload.id
            ? {
                ...si,
                name: action.payload.data.name,
                date: action.payload.data.date,
                hours: action.payload.data.hours,
                isSocialDistancing: action.payload.data.isSocialDistancing,
              }
            : si
        ),
      };
    case DELETE_SI:
      return {
        ...state,
        loading: false,
        idToDelete: '',
        data: state.data.filter((si) => {
          return si.id !== action.payload;
        }),
      };
    case SET_FILTER:
      return {
        ...state,
        isFiltered: !state.isFiltered,
      };
    case TOGGLE_DELETE_SI:
      return {
        ...state,
        idToDelete: action.payload,
      };
    default:
      return state;
  }
}
