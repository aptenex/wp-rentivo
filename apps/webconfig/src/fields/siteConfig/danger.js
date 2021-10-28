import * as Yup from 'yup';
import { flattenArray } from '../../utils/arrays';


export const configField = {
  id: 'config',
  label: 'Please beware that modifications here may break your website.',
  type: 'json',
  validate: Yup.mixed().test(
    'is-json',
    'Please enter valid JSON',
    (value) => {
      if(value && typeof value === 'string') {
        try {
          const parsed = JSON.parse(value);
          console.log(parsed);
          return true;
        } catch(e) {
          console.log(e);
          return false;
        }
      }
      return true;
    },
  ),
  getValue: ({state}) => {
    return state
  },
  setValue: ({value, setState}) => {
    if(value && typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        setState(undefined, parsed);
      } catch(e) {
        console.log('Please enter valid JSON');
      }
    }
  }
};



export const config = [
  configField
];

export const allFields = flattenArray([config]);

export const fieldGroups = [
  {
    title: 'Site Config',
    fields: config
  }
];
