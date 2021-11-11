import { SAVING_REDIRECTS, SAVING_REDIRECTS_ERROR, SET_REDIRECTS, SET_REDIRECTS_ERROR } from '../actionTypes';

export const initialState = {
  isSaving: false,
  lastSaved: null,
  data: {
    redirects: [
      
    ]
  },
  error: null
};

export default function redirectsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVING_REDIRECTS:
      return {
        ...state,
        isSaving: true,
        error: null
      };
    case SAVING_REDIRECTS_ERROR:
      return {
        ...state,
        isSaving: false,
        error: action.payload
      };
    case SET_REDIRECTS:
      return {
        ...state,
        isSaving: false,
        lastSaved: new Date().getTime(),
        data: action.payload
      };
    case SET_REDIRECTS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
