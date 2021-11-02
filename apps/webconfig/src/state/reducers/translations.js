import { SET_TRANSLATIONS, SET_TRANSLATIONS_ERROR, SAVING_TRANSLATIONS, SAVING_TRANSLATIONS_ERROR } from '../actionTypes';
import defaultTranslations from '../defaultStates/translations';


export const initialState = {
  isSaving: false,
  lastSaved: null,
  data: defaultTranslations,
  error: null
};

export default function translationsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVING_TRANSLATIONS:
      return {
        isSaving: true,
        error: null
      };
    case SAVING_TRANSLATIONS_ERROR:
      return {
        isSaving: false,
        error: action.payload
      };
    case SET_TRANSLATIONS:
      return {
        ...state,
        isSaving: false,
        lastSaved: new Date().getTime(),
        data: action.payload
      };
    case SET_TRANSLATIONS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
