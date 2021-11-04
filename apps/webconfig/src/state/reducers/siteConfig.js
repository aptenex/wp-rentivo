import { SAVING_SITE_CONFIG, SAVING_SITE_CONFIG_ERROR, SET_SITE_CONFIG, SET_SITE_CONFIG_ERROR } from '../actionTypes';
import defaultSiteConfig from '../defaultStates/siteConfig';

export const initialState = {
  isSaving: false,
  lastSaved: null,
  data: defaultSiteConfig,
  error: null
};

export default function siteConfigReducer(state = initialState, action) {
  switch (action.type) {
    case SAVING_SITE_CONFIG:
      return {
        ...state,
        isSaving: true,
        error: null
      };
    case SAVING_SITE_CONFIG_ERROR:
      return {
        ...state,
        isSaving: false,
        error: action.payload
      };
    case SET_SITE_CONFIG:
      return {
        ...state,
        isSaving: false,
        lastSaved: new Date().getTime(),
        data: action.payload
      };
    case SET_SITE_CONFIG_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
