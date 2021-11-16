import { combineReducers } from 'redux';
import siteConfig from './siteConfig';
import translations from './translations';
import redirects from './redirects';
import customCode from './customCode';
import all from './all';

export default combineReducers({
  siteConfig,
  translations,
  redirects,
  customCode,
  all
});
