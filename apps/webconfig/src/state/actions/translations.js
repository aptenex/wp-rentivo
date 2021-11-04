import { SET_TRANSLATIONS, SET_TRANSLATIONS_ERROR, SET_TRANSLATION, SAVING_TRANSLATIONS, SAVING_TRANSLATIONS_ERROR, ADD_NEW_LANG, REMOVE_LANG } from '../actionTypes';

import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import { WP_API_TRANSLATIONS } from '../../constants/api';

const toast = createStandaloneToast();


const sleep = t => new Promise(s => setTimeout(s, t));

export const startSetTranslations = (payload, updateState = true) => {
  return async (dispatch, getState) => {
    const translationState = getState().translations;
    payload = payload ? payload : translationState.data;

    await dispatch(savingTranslationsState());

    try {
      if(process.env.NODE_ENV !== 'development') {
        const result = await axios({
          method: 'post',
          url: WP_API_TRANSLATIONS,
          data: {
            translations: JSON.stringify(payload),
          }
        });

        console.log(result);
      } else {
        await sleep(500);
      }

      if(updateState) {
        await dispatch(setTranslationState(payload));
      }

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

const removeKey = (key, {[key]: _, ...rest}) => rest;

export const startSetTranslation = (lang, key, payload, remove = false) => {
  return async (dispatch, getState) => {
    let translationData = { ...getState().translations.data };
    if(translationData && translationData[lang]) {
      
      if(remove) {
        translationData[lang] = removeKey(key, translationData[lang]);
      } else {
        translationData[lang][key] = payload;
      }

      await dispatch(savingTranslationsState());

      try {
        if(process.env.NODE_ENV !== 'development') {
          const result = await axios({
            method: 'post',
            url: WP_API_TRANSLATIONS,
            data: {
              translations: JSON.stringify(translationData),
            }
          });

          console.log(result);
        } else {
          await sleep(500);
        }

        await dispatch(setTranslation(lang, key, payload, remove));

        toast({
          title: "Your changes have been saved.",
          status: "success",
          duration: 2000
        })

      } catch (e) {
        console.log(e);
        return await dispatch(errorSavingTranslationsState('Something went wrong saving.'));
      }
    }
  };
};

export function savingTranslationsState() {
  return {
    type: SAVING_TRANSLATIONS
  };
}

export function addNewLang(payload) {
  return {
    type: ADD_NEW_LANG,
    payload
  };
}

export function removeLang(payload) {
  return {
    type: REMOVE_LANG,
    payload
  };
}

export function errorSavingTranslationsState(payload) {
  return {
    type: SAVING_TRANSLATIONS_ERROR,
    payload
  };
}

export function setTranslation(lang, key, payload, remove = false) {
  return {
    type: SET_TRANSLATION,
    lang,
    key,
    payload,
    remove
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
