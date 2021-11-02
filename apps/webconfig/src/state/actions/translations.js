import { SET_TRANSLATIONS, SET_TRANSLATIONS_ERROR, SAVING_TRANSLATIONS, SAVING_TRANSLATIONS_ERROR } from '../actionTypes';

import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import { WP_API_TRANSLATIONS } from '../../constants/api';

const toast = createStandaloneToast();

export const startSetTranslations = (payload) => {
  return async (dispatch) => {
    await dispatch(savingTranslationsState());

    try {
      if(process.env.NODE_ENV !== 'development') {
        const result = await axios({
          method: 'post',
          url: WP_API_TRANSLATIONS,
          data: {
            siteConfig: JSON.stringify(payload),
          }
        });

        console.log(result);
      }

      await dispatch(setTranslationState(payload));

      toast({
        title: "Your changes have been saved.",
        status: "success",
        duration: 2000
      })

    } catch (e) {
      console.log(e);
      return await dispatch(errorSavingTranslationsState('Something went wrong saving.'));
    }

  };
};

export function savingTranslationsState() {
  return {
    type: SAVING_TRANSLATIONS
  };
}

export function errorSavingTranslationsState(payload) {
  return {
    type: SAVING_TRANSLATIONS_ERROR,
    payload
  };
}

export function setTranslationState(payload) {
  return {
    type: SET_TRANSLATIONS,
    payload
  };
}

export function setTranslationsError(payload) {
  return {
    type: SET_TRANSLATIONS_ERROR,
    payload
  };
}
