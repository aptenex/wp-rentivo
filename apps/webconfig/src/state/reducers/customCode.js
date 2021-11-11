import { SAVING_CUSTOM_CODE, SAVING_CUSTOM_CODE_ERROR, SET_CUSTOM_CODE, SET_CUSTOM_CODE_ERROR } from '../actionTypes';

export const initialState = {
  isSaving: false,
  lastSaved: null,
  data: {
    headCustomHTML: '',
    closingBodyCustomHTML: ''
  },
  error: null
};

export default function customCodeReducer(state = initialState, action) {
  switch (action.type) {
    case SAVING_CUSTOM_CODE:
      return {
        ...state,
        isSaving: true,
        error: null
      };
    case SAVING_CUSTOM_CODE_ERROR:
      return {
        ...state,
        isSaving: false,
        error: action.payload
      };
    case SET_CUSTOM_CODE:
      return {
        ...state,
        isSaving: false,
        lastSaved: new Date().getTime(),
        data: action.payload
      };
    case SET_CUSTOM_CODE_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
