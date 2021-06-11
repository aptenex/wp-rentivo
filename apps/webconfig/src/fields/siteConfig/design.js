import { flattenArray } from '../../utils/arrays';
import axios from 'axios';

/* eslint-disable no-unused-vars */
export const sitePath = 'site';
export const siteDesignPath = `${sitePath}.design`;
export const siteDesignFontsPath = `${siteDesignPath}.fonts`;
export const siteDesignFontsGooglePath = `${siteDesignFontsPath}.google`;
/* eslint-enable no-return-assign, no-param-reassign */

export const loadFontsField = {
  id: 'loadFonts',
  label: 'Google Fonts',
  helperText: 'These are the fonts which will be loaded through-out your website',
  type: 'repeater',
  fields: [
    {
      id: 'family',
      label: 'Family',
      type: 'select',
      options: [],
      getOptions: async () => {
        try {
          const req = await axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCAsskOzfAmrB6NlkFf4JLGu_qEczpAxps');
          return req.data.items.map(({family, ...rest}) => ({
            label: family,
            value: family,
            ...rest
          }));
        } catch (e) {
          console.log(e);
          return [];
        }
      }
    },
    {
      id: 'variants',
      type: 'text',
      label: 'Variants'
    }
  ],
  addNewLabel: 'Add New Google Font',
  path: siteDesignFontsGooglePath
};


export const fonts = [loadFontsField];
export const allFields = flattenArray([fonts]);

export const fieldGroups = [
  {
    title: 'Fonts',
    fields: fonts
  }
];
