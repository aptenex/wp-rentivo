import { SAVING_SITE_CONFIG, SET_SITE_CONFIG, SAVING_SITE_CONFIG_ERROR, SET_SITE_CONFIG_ERROR } from '../actionTypes';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import { WP_API_SITE_CONFIG } from '../../constants/api';

const toast = createStandaloneToast();

export const startSetSiteConfig = (payload) => {
  return async (dispatch) => {
    await dispatch(savingSiteConfigState());

    try {
      if(process.env.NODE_ENV !== 'development') {
        const result = await axios({
          method: 'post',
          url: WP_API_SITE_CONFIG,
          data: {
            siteConfig: JSON.stringify(payload),
          }
        });

        console.log(result);
      }

      await dispatch(setSiteConfigState(payload));

      toast({
        title: "Your changes have been saved.",
        status: "success",
        duration: 2000
      })

    } catch (e) {
      console.log(e);
      return await dispatch(errorSavingSiteConfigState('Something went wrong saving.'));
    }

  };
};

export function savingSiteConfigState() {
  return {
    type: SAVING_SITE_CONFIG
  };
}

export function errorSavingSiteConfigState(payload) {
  return {
    type: SAVING_SITE_CONFIG_ERROR,
    payload
  };
}

export function setSiteConfigState(payload) {
  return {
    type: SET_SITE_CONFIG,
    payload
  };
}

export function setSiteConfigError(payload) {
  return {
    type: SET_SITE_CONFIG_ERROR,
    payload
  };
}
