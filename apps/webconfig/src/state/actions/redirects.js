import { SAVING_REDIRECTS, SET_REDIRECTS, SAVING_REDIRECTS_ERROR, SET_REDIRECTS_ERROR } from '../actionTypes';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import { WP_API_REDIRECTS } from '../../constants/api';

const toast = createStandaloneToast();

export const startSetRedirects = (payload) => {
  return async (dispatch) => {
    await dispatch(savingRedirectsState());

    try {
      if(process.env.NODE_ENV !== 'development') {
        const result = await axios({
          method: 'post',
          url: WP_API_REDIRECTS,
          data: {
            siteConfig: JSON.stringify(payload),
          }
        });

        console.log(result);
      }

      await dispatch(setRedirectsState(payload));

      toast({
        title: "Your changes have been saved.",
        status: "success",
        duration: 2000
      })

    } catch (e) {
      console.log(e);
      return await dispatch(errorSavingRedirectsState('Something went wrong saving.'));
    }

  };
};

export function savingRedirectsState() {
  return {
    type: SAVING_REDIRECTS
  };
}

export function errorSavingRedirectsState(payload) {
  return {
    type: SAVING_REDIRECTS_ERROR,
    payload
  };
}

export function setRedirectsState(payload) {
  return {
    type: SET_REDIRECTS,
    payload
  };
}

export function setRedirectsError(payload) {
  return {
    type: SET_REDIRECTS_ERROR,
    payload
  };
}
