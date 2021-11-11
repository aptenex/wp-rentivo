import { SAVING_CUSTOM_CODE, SAVING_CUSTOM_CODE_ERROR, SET_CUSTOM_CODE, SET_CUSTOM_CODE_ERROR } from '../actionTypes';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import { WP_API_CUSTOM_CODE } from '../../constants/api';

const toast = createStandaloneToast();

export const startSetCustomCode = (payload) => {
  return async (dispatch) => {
    await dispatch(savingCustomCodeState());

    try {
      if(process.env.NODE_ENV !== 'development') {
        const result = await axios({
          method: 'post',
          url: WP_API_CUSTOM_CODE,
          data: {
            siteConfig: JSON.stringify(payload),
          }
        });

        console.log(result);
      }

      await dispatch(setCustomCodeState(payload));

      toast({
        title: "Your changes have been saved.",
        status: "success",
        duration: 2000
      })

    } catch (e) {
      console.log(e);
      return await dispatch(errorSavingCustomCodeState('Something went wrong saving.'));
    }

  };
};

export function savingCustomCodeState() {
  return {
    type: SAVING_CUSTOM_CODE
  };
}

export function errorSavingCustomCodeState(payload) {
  return {
    type: SAVING_CUSTOM_CODE_ERROR,
    payload
  };
}

export function setCustomCodeState(payload) {
  return {
    type: SET_CUSTOM_CODE,
    payload
  };
}

export function setCustomCodeError(payload) {
  return {
    type: SET_CUSTOM_CODE_ERROR,
    payload
  };
}
