import { FETCHING_ALL, FETCHING_ALL_ERROR, FETCHING_ALL_SUCCESS } from '../actionTypes';

export const initialState = {
  isFetching: true,
  hasFetched: false,
  error: null
};

export default function allReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ALL:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCHING_ALL_ERROR:
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        error: action.payload
      };
    case FETCHING_ALL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasFetched: true,
        error: null
      };
    default:
      return state;
  }
}
