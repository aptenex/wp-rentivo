import * as Yup from 'yup';
import { flattenArray } from '../../utils/arrays';


export const redirectsField = {
  id: 'redirects',
  label: 'Please beware that modifications here may break your website.',
  type: 'json',
  path: 'redirects',
  placeholder: `[
    {
      "fromPath": "https://www.oldurl.com",
      "force": true,
      "isPermanent": true,
      "redirectInBrowser": false,
      "toPath": "https://www.newurl.com"
    }
  ]`,
  validate: Yup.mixed().test(
    'is-json',
    'Please enter valid JSON',
    (value) => {
      if(value && typeof value === 'string') {
        try {
          JSON.parse(`{ "redirects": ${value} }`);
          return true;
        } catch(e) {
          console.log(e);
          return false;
        }
      }
      return true;
    },
  ),
  setValue: ({value, setState}) => {
    if(value && typeof value === 'string') {
      try {
        const parsed = JSON.parse(`{ "redirects": ${value} }`);
        setState(undefined, parsed);
      } catch(e) {
        console.log('Please enter valid JSON');
      }
    }
  }
};



export const redirects = [
  redirectsField
];

export const allFields = flattenArray([redirects]);

export const fieldGroups = [
  {
    title: 'Redirects',
    fields: redirects
  }
];
