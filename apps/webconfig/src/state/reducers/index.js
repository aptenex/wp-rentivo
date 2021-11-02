import { combineReducers } from 'redux';
import siteConfig from './siteConfig';
import translations from './translations';

export default combineReducers({
  siteConfig,
  translations
});
