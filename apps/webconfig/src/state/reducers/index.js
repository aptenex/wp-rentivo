import { combineReducers } from 'redux';
import siteConfig from './siteConfig';
import translations from './translations';
import redirects from './redirects';
import customCode from './customCode';

export default combineReducers({
  siteConfig,
  translations,
  redirects,
  customCode
});
