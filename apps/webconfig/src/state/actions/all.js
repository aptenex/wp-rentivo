import { FETCHING_ALL, FETCHING_ALL_ERROR, FETCHING_ALL_SUCCESS } from '../actionTypes';
import defaultSiteConfig from '../defaultStates/siteConfig';
import axios from 'axios';
import { WP_API_ALL } from '../../constants/api';
import { setTranslationState } from './translations';
import { setSiteConfigState } from './siteConfig';
import { setRedirectsState } from './redirects';
import { setCustomCodeState } from './customCode';

const sleep = t => new Promise(s => setTimeout(s, t));

export const startFetchingAll = () => {
  return async (dispatch) => {
   
    await dispatch(fetchingAll());

    try {
      if(process.env.NODE_ENV !== 'development') {

        const result = await axios({
          method: 'get',
          url: WP_API_ALL
        });

        const data = result.data.data;

        if(data) {
          
          let defaultLang = data.defaultLang ? data.defaultLang : 'en';

          if(data.siteConfig) {
            const config = JSON.parse(data.siteConfig);
            await dispatch(setSiteConfigState(config));
          } else {
            await dispatch(setSiteConfigState(defaultSiteConfig));
          }

          if(data.redirects) {
            const redirects = JSON.parse(data.redirects);
            await dispatch(setRedirectsState(redirects));
          } else {
            await dispatch(setRedirectsState({redirects: []}));
          }

          if(data.translations) {
            let translations = JSON.parse(data.translations);
            const translationValues = Object.values(translations);

            if(translationValues.length > 0 && typeof translationValues[0] === 'string') {
              translations = {
                [defaultLang]: translations
              }
            }
            await dispatch(setTranslationState(translations));
          } else {
            await dispatch(setTranslationState({en: {}}));
          }

          if(data.customCode && data.customCode.closingBodyCustomHTML && data.customCode.headCustomHTML) {
            await dispatch(setCustomCodeState(data.customCode));
          } else {
            await dispatch(setCustomCodeState({headCustomHTML: '', closingBodyCustomHTML: ''}));
          }

        } else {
          throw new Error('Could not get data');
        }

        console.log(result);

      } else {
        await sleep(500);
        await dispatch(setSiteConfigState(defaultSiteConfig));
        await dispatch(setTranslationState({en: {}}));
        await dispatch(setRedirectsState({redirects: []}));
        await dispatch(setCustomCodeState({headCustomHTML: '', closingBodyCustomHTML: ''}));
      }


      await dispatch(fetchingAllSuccess());
      

    } catch (e) {
      console.log(e);
      return await dispatch(fetchingAllError('Something went wrong saving.'));
    }

  };
};

export function fetchingAll() {
  return {
    type: FETCHING_ALL
  };
}

export function fetchingAllSuccess() {
  return {
    type: FETCHING_ALL_SUCCESS
  };
}

export function fetchingAllError(payload) {
  return {
    type: FETCHING_ALL_ERROR,
    payload
  };
}