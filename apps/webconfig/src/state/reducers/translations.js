import { SET_TRANSLATIONS, SET_TRANSLATIONS_ERROR, SAVING_TRANSLATIONS, SET_TRANSLATION, SAVING_TRANSLATIONS_ERROR, ADD_NEW_LANG, REMOVE_LANG } from '../actionTypes';
import defaultTranslations from '../defaultStates/translations';


export const initialState = {
  isSaving: false,
  lastSaved: null,
  data: Object.assign({}, defaultTranslations),
  error: null
};

const removeKey = (key, {[key]: _, ...rest}) => rest;

export default function translationsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVING_TRANSLATIONS:
      return {
        ...state,
        isSaving: true,
        error: null
      };
    case SAVING_TRANSLATIONS_ERROR:
      return {
        ...state,
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
    case SET_TRANSLATION:
      return state;
      // translationData[lang] = removeKey(key, translationData[lang]);
      // TODO: ---- SOME HOW MUTATING ------
      if(action.remove) {
        return {
          ...state,
          data: {
            ...state.data,
            [action.lang]: removeKey(action.key, state.data[action.lang])
          }
        }
      } else {
        return {
          ...state,
          data: {
            ...state.data,
            [action.lang]: {
              ...state.data[action.lang],
              [action.key]: action.payload
            }
          }
        }
      }
    case SET_TRANSLATIONS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADD_NEW_LANG:
      if(!state.data[action.payload]) {
        return {
          ...state,
          data: {
            ...state.data,
            [`${action.payload}`]: state.data['en']
          }
        }
      } else {
        return state;
      }
    case REMOVE_LANG:
      if(state.data[action.payload]) {
        return {
          ...state,
          data: removeKey(action.payload, state.data)
        }
      } else {
        return state;
      }
    default:
      return state;
  }
}
