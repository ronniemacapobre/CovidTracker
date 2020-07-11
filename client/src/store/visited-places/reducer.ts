import {
  VPState,
  VPActionTypes,
  START_REQUEST,
  FAILED_REQUEST,
  SET_ALL,
  ADD_VP,
  EDIT_VP,
  DELETE_VP,
  TOGGLE_DELETE_VP,
} from './types';

const initialState: VPState = {
  loading: false,
  idToDelete: '',
  data: [],
};

export function visitedPlacesReducer(
  state = initialState,
  action: VPActionTypes
): VPState {
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
    case ADD_VP:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
      };
    case EDIT_VP:
      return {
        ...state,
        loading: false,
        data: state.data.map((visitedPlace) =>
          visitedPlace.id === action.payload.id
            ? {
                ...visitedPlace,
                name: action.payload.data.place,
                date: action.payload.data.date,
                hours: action.payload.data.hours,
                isCrowded: action.payload.data.isCrowded,
              }
            : visitedPlace
        ),
      };
    case DELETE_VP:
      return {
        ...state,
        loading: false,
        idToDelete: '',
        data: state.data.filter((si) => {
          return si.id !== action.payload;
        }),
      };
    case TOGGLE_DELETE_VP:
      return {
        ...state,
        idToDelete: action.payload,
      };
    default:
      return state;
  }
}
