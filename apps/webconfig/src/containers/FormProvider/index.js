import React, { useRef } from 'react';
import { get, set } from 'lodash';
import { Formik, Form } from 'formik';
import { useMemo } from 'react';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useCallback } from 'react';
import { setSiteConfigError, startSetSiteConfig } from '../../state/actions/siteConfig';
import {
  Alert,
  AlertIcon,
  AlertTitle
} from '@chakra-ui/react';

export const FormStateContext = React.createContext({});

export const setSanitizer = (val, type) => {
  if(type === 'number') {
    return parseFloat(val);
  } else {
    return val;
  }
};

export default function FormProvider({fields, dataStore, children}) {



  // TODO: Need to move to hooks and give setValue access to form.
  const formik = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector(state => state[dataStore].data);
  const error = useSelector(state => state[dataStore].error);
  const isSaving = useSelector(state => state[dataStore].isSaving);
  const slowFields = useMemo(() => {
    const slowFields = [];
    for (const field of fields) {
      if(field.modifies && field.modifies.length) {
        if(slowFields.indexOf(field.id) === -1) slowFields.push(field.id);
        for (const id of field.modifies) {
          if(slowFields.indexOf(id) === -1) slowFields.push(id);
        }
      }
    }
    return slowFields;
  }, [fields]);
  const initValues = useMemo(() => {
    if(!state) {
      return null;
    }

    const result = {};

    for(const field of fields) {

      const getState = (path, defaultValue) => get(state, path, defaultValue);
      let val = typeof field.getValue === 'function' ? field.getValue({state, getState, get}) : get(state, field.path);
      if(val === undefined && field.defaultValue !== undefined) {
        val = field.defaultValue;
      }

      result[field.id] = val;
    }
    return  result;
  }, [fields, state]);

  const validationSchema = useMemo(() => {
    const result = {};
    for(const field of fields) {
      if(field.validate) {
        result[field.id] = field.validate;
      }
    }

    return Yup.object(result);
  }, [fields]);

  const handleSubmit = useCallback(async (values, actions) => {

    try {
      let newState = state;
      for(const field of fields) {
        if(values[field.id]) {

          const setState = (path, val) => set(newState, path, setSanitizer(val, field.type));
          const getState = (path, defaultValue) => get(newState, path, defaultValue);
          const prevVal = field.getValue && typeof field.getValue === 'function' ? field.getValue({state, get, getState}) : get(state, field.path);
          const setVal = field.path ? (val) => set(newState, field.path, setSanitizer(val, field.type)) : undefined;

          if(field.setValue) {
            await field.setValue({
              value: values[field.id],
              setVal,
              prevVal,
              state: newState,
              setState,
              getState,
              set,
              get,
              id: field.id,
              form: formik.current
            });
          } else {
            set(newState, field.path, values[field.id]);
          }

        }
      }
      console.log(newState);
      if(dataStore === 'siteConfig') {
        await dispatch(startSetSiteConfig(newState));
      }
    } catch (e) {
      await dispatch(setSiteConfigError(e));
      console.log(e);
    }

    actions.setSubmitting(false);
  }, [state, fields, dataStore, dispatch, formik]);

  return (
    <FormStateContext.Provider value={{state, error, isSaving, fields, slowFields}}>
      {typeof initValues === 'object' ? (
        <Formik
          innerRef={formik}
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {error && (
              <Alert status="error" mb={6}>
                <AlertIcon />
                <AlertTitle mr={2}>{error}</AlertTitle>
              </Alert>
            )}
            {children}
          </Form>
        </Formik>
      ) : (
        <Loader/>
      )}
    </FormStateContext.Provider>
  );
};
