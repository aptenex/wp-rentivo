import { flattenArray } from '../../utils/arrays';
import uniq from 'lodash/uniq';
import axios from 'axios';
import {
  RequiredNumber,
  RequiredString,
} from '../../utils/rules';
import paletteGenerator from '@bobthered/tailwindcss-palette-generator';

export let googleFonts = [];

/* eslint-disable no-unused-vars */
export const sitePath = 'site';
export const siteDesignPath = `${sitePath}.design`;
export const siteDesignFontsPath = `${siteDesignPath}.fonts`;
export const siteDesignFontsGooglePath = `${siteDesignFontsPath}.google`;

export const chakraThemePath = 'chakraTheme';
export const chakraThemeColorsPath = `${chakraThemePath}.colors`;
export const chakraThemeColorsTextPath = `${chakraThemeColorsPath}.text`;
export const chakraThemeColorsTextLightPath = `${chakraThemeColorsPath}.textLight`;
export const chakraThemeColorsLinkPath = `${chakraThemeColorsPath}.link`;
export const chakraThemeColorsLinkHoverPath = `${chakraThemeColorsPath}.linkHover`;

export const chakraThemeColorsPrimaryPath = `${chakraThemeColorsPath}.primary`;
export const chakraThemeColorsPrimary500Path = `${chakraThemeColorsPrimaryPath}.500`;

export const chakraThemeColorsSecondaryPath = `${chakraThemeColorsPath}.secondary`;
export const chakraThemeColorsSecondary500Path = `${chakraThemeColorsSecondaryPath}.500`;

export const chakraThemeColorsTertiaryPath = `${chakraThemeColorsPath}.tertiary`;
export const chakraThemeColorsTertiary500Path = `${chakraThemeColorsTertiaryPath}.500`;

export const chakraThemeColorsGrayPath = `${chakraThemeColorsPath}.gray`;
export const chakraThemeColorsGray100Path = `${chakraThemeColorsGrayPath}.100`;
export const chakraThemeColorsGray200Path = `${chakraThemeColorsGrayPath}.200`;
export const chakraThemeColorsGray300Path = `${chakraThemeColorsGrayPath}.300`;

export const chakraThemeFontsPath = `${chakraThemePath}.fonts`;
export const chakraThemeFontsHeadingPath = `${chakraThemeFontsPath}.heading`;
export const chakraThemeFontsBodyPath = `${chakraThemeFontsPath}.body`;
export const chakraThemeFontsAccentPath = `${chakraThemeFontsPath}.accent`;

export const chakraThemeFontWeightsPath = `${chakraThemePath}.fontWeights`;
export const chakraThemeFontWeightsHairlinePath = `${chakraThemeFontWeightsPath}.hairline`;
export const chakraThemeFontWeightsThinPath = `${chakraThemeFontWeightsPath}.thin`;
export const chakraThemeFontWeightsLightPath = `${chakraThemeFontWeightsPath}.light`;
export const chakraThemeFontWeightsNormalPath = `${chakraThemeFontWeightsPath}.normal`;
export const chakraThemeFontWeightsMediumPath = `${chakraThemeFontWeightsPath}.medium`;
export const chakraThemeFontWeightsSemiboldPath = `${chakraThemeFontWeightsPath}.semibold`;
export const chakraThemeFontWeightsBoldPath = `${chakraThemeFontWeightsPath}.bold`;
export const chakraThemeFontWeightsExtraboldPath = `${chakraThemeFontWeightsPath}.extrabold`;
export const chakraThemeFontWeightsBlackPath = `${chakraThemeFontWeightsPath}.black`;

/* eslint-enable no-return-assign, no-param-reassign */

export const loadFontsField = {
  id: 'loadFonts',
  label: 'Google Fonts',
  helperText: 'These are the fonts which will be loaded through-out your website',
  type: 'repeater',
  modifies: ['bodyFont', 'headingFont'],
  //validate: RequiredString,
  fields: [
    {
      id: 'family',
      label: 'Family',
      type: 'select',
      options: [],
      //validate: RequiredString,
      getOptions: async () => {
        if(googleFonts.length) return googleFonts;
        try {
          const req = await axios.get(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_FONTS_API_KEY}`);
          const fonts = req.data.items.map(({family, ...rest}) => ({
            label: family,
            value: family,
            ...rest
          }));
          googleFonts = fonts;
          return fonts;
        } catch (e) {
          console.log(e);
          return [];
        }
      },
      onBlur: async ({field, form}) => {
        const fieldItem = field.name.split('.')[0];
        const [gFont] = googleFonts.filter(f => f.label === field.value);
        const fieldMeta = form.getFieldMeta(field.name);
        if(gFont && fieldMeta.initialValue !== fieldMeta.value) {
          const variants = gFont.variants.map(gf => gf.includes('0italic') ? gf.replace('0italic', '0i') : gf);
          form.setFieldValue(`${fieldItem}.variants`, variants.join(','));
        }
      },
    },
    {
      id: 'variants',
      type: 'text',
      label: 'Variants',
      placeholder: 'Comma separated, e.g. 400,500,600',
      //validate: RequiredString,
      setValue: ({value, setVal}) => {
        setVal(value.replace(/\s+/g, '').replace(/(^,)|(,$)/g, ''));
      }
    }
  ],
  addNewLabel: 'Add New Google Font',
  path: siteDesignFontsGooglePath
};

export const fontWeightOptions = [
  { label: '100', value: 100 },
  { label: '200', value: 200 },
  { label: '300', value: 300 },
  { label: '400', value: 400 },
  { label: '500', value: 500 },
  { label: '600', value: 600 },
  { label: '700', value: 700 },
  { label: '800', value: 800 },
  { label: '900', value: 900 }
];
/* eslint-disable no-unused-vars */
const getFontWeightOptions = ({values}) => {
  if(values.loadFonts && values.loadFonts.length) {
    let weights = [];
    values.loadFonts.forEach(({variants}) => {
      let newWeights = [];
      if(variants) {
        if(variants.includes(',')) {
          newWeights = [...newWeights, variants.split(',').map(v => parseInt(v))];
        } else {
          newWeights.push(parseInt(variants));
        }
      }
      weights = [...weights, ...newWeights];
    });

    return uniq(weights).map((weight) => ({
      label: weight,
      value: weight
    }));
  } else {
    return fontWeightOptions;
  }
};
/* eslint-enable no-return-assign, no-param-reassign */
export const fontWeightHairlineField = {
  id: 'fontWeightHairline',
  label: 'Hairline',
  type: 'select',
  path: chakraThemeFontWeightsHairlinePath,
  validate: RequiredNumber,
  defaultValue: 100,
  options: fontWeightOptions
};

export const fontWeightThinField = {
  id: 'fontWeightThin',
  label: 'Thin',
  type: 'select',
  path: chakraThemeFontWeightsThinPath,
  validate: RequiredNumber,
  defaultValue: 200,
  options: fontWeightOptions
};

export const fontWeightLightField = {
  id: 'fontWeightLight',
  label: 'Light',
  type: 'select',
  path: chakraThemeFontWeightsLightPath,
  validate: RequiredNumber,
  defaultValue: 400,
  options: fontWeightOptions
};

export const fontWeightNormalField = {
  id: 'fontWeightNormal',
  label: 'Normal',
  type: 'select',
  path: chakraThemeFontWeightsNormalPath,
  validate: RequiredNumber,
  defaultValue: 500,
  options: fontWeightOptions
};

export const fontWeightMediumField = {
  id: 'fontWeightMedium',
  label: 'Medium',
  type: 'select',
  path: chakraThemeFontWeightsMediumPath,
  validate: RequiredNumber,
  defaultValue: 600,
  options: fontWeightOptions
};

export const fontWeightSemiboldField = {
  id: 'fontWeightSemibold',
  label: 'Semibold',
  type: 'select',
  path: chakraThemeFontWeightsSemiboldPath,
  validate: RequiredNumber,
  defaultValue: 600,
  options: fontWeightOptions
};

export const fontWeightBoldField = {
  id: 'fontWeightBold',
  label: 'Bold',
  type: 'select',
  path: chakraThemeFontWeightsBoldPath,
  validate: RequiredNumber,
  defaultValue: 700,
  options: fontWeightOptions
};

export const fontWeightExtraboldField = {
  id: 'fontWeightExtrabold',
  label: 'Extrabold',
  type: 'select',
  path: chakraThemeFontWeightsExtraboldPath,
  validate: RequiredNumber,
  defaultValue: 700,
  options: fontWeightOptions
};

export const fontWeightBlackField = {
  id: 'fontWeightBlack',
  label: 'Black',
  type: 'select',
  path: chakraThemeFontWeightsBlackPath,
  validate: RequiredNumber,
  defaultValue: 900,
  options: fontWeightOptions
};

export const textColorField = {
  id: 'textColor',
  label: 'Text Color',
  type: 'color',
  path: chakraThemeColorsTextPath,
  validate: RequiredString,
  defaultValue: '#3D405B'
};

export const textLightColorField = {
  id: 'textLightColor',
  label: 'Light Text Color',
  type: 'color',
  path: chakraThemeColorsTextLightPath,
  validate: RequiredString,
  defaultValue: '#535678'
};

export const linkColorField = {
  id: 'linkColor',
  label: 'Link Color',
  type: 'color',
  path: chakraThemeColorsLinkPath,
  validate: RequiredString,
  defaultValue: '#f9593f'
};

export const linkHoverColorField = {
  id: 'linkHoverColor',
  label: 'Link Hover Color',
  type: 'color',
  path: chakraThemeColorsLinkHoverPath,
  validate: RequiredString,
  defaultValue: '#f13829'
};

export const primaryColorField = {
  id: 'primaryColor',
  label: 'Primary Color',
  type: 'color',
  path: chakraThemeColorsPrimary500Path,
  validate: RequiredString,
  defaultValue: '#f9593f',
  setValue: ({value, setState}) => {
    setState(chakraThemeColorsPrimaryPath, paletteGenerator(value).primary);
  }
};

export const secondaryColorField = {
  id: 'secondaryColor',
  label: 'Secondary Color',
  type: 'color',
  path: chakraThemeColorsSecondary500Path,
  validate: RequiredString,
  defaultValue: '#00afb9',
  setValue: ({value, setState}) => {
    setState(chakraThemeColorsSecondaryPath, paletteGenerator(value).primary);
  }
};

export const tertiaryColorField = {
  id: 'tertiaryColor',
  label: 'Tertiary Color',
  type: 'color',
  path: chakraThemeColorsTertiary500Path,
  validate: RequiredString,
  defaultValue: '#e49406',
  setValue: ({value, setState}) => {
    setState(chakraThemeColorsTertiaryPath, paletteGenerator(value).primary);
  }
};

export const gray100ColorField = {
  id: 'gray100Color',
  label: 'Lightest Gray Color',
  type: 'color',
  path: chakraThemeColorsGray100Path,
  validate: RequiredString,
  defaultValue: '#F7FAFC'
};

export const gray200ColorField = {
  id: 'gray200Color',
  label: 'Lighter Gray Color',
  type: 'color',
  path: chakraThemeColorsGray200Path,
  validate: RequiredString,
  defaultValue: '#E2E8F0'
};

export const gray300ColorField = {
  id: 'gray300Color',
  label: 'Light Gray Color',
  type: 'color',
  path: chakraThemeColorsGray300Path,
  validate: RequiredString,
  defaultValue: '#CBD5E0'
};

const getFontOptions = ({values}) => {
  if(values.loadFonts && values.loadFonts.length) {
    return values.loadFonts.map(({family, ...rest}) => ({
      label: family,
      value: family,
      ...rest
    }));
  } else {
    return [];
  }
  /*
  const fonts = getState(siteDesignFontsGooglePath).map(({family, ...rest}) => ({
    label: family,
    value: family,
    ...rest
  }));
  return fonts;
  */
};

export const headingFontField = {
  id: 'headingFont',
  label: 'General Heading Font',
  type: 'select',
  options: [],
  getOptions: getFontOptions,
  listensTo: ['loadFonts'],
  path: chakraThemeFontsHeadingPath
};

export const bodyFontField = {
  id: 'bodyFont',
  label: 'General Body Font',
  type: 'select',
  options: [],
  getOptions: getFontOptions,
  listensTo: ['loadFonts'],
  path: chakraThemeFontsBodyPath
};

export const accentFontField = {
  id: 'accentFont',
  label: 'General Accent Font',
  type: 'select',
  options: [],
  getOptions: getFontOptions,
  listensTo: ['loadFonts'],
  path: chakraThemeFontsAccentPath
};

export const fonts = [loadFontsField];
export const coreColors = [
  [primaryColorField, secondaryColorField, tertiaryColorField],
  [gray100ColorField, gray200ColorField, gray300ColorField]
];
export const textColors = [
  [textColorField, textLightColorField],
  [linkColorField, linkHoverColorField],
];
export const generalFonts = [
  [headingFontField, bodyFontField, accentFontField],
];
export const fontWeights = [
  [fontWeightHairlineField, fontWeightThinField, fontWeightLightField],
  [fontWeightMediumField, fontWeightNormalField, fontWeightSemiboldField],
  [fontWeightBoldField, fontWeightExtraboldField, fontWeightBlackField]
];

export const allFields = flattenArray([fonts, coreColors, textColors, generalFonts, fontWeights]);

export const fieldGroups = [
  {
    title: 'Core Colors',
    fields: coreColors
  },
  {
    title: 'Text Colors',
    fields: textColors
  },
  {
    title: 'Load Fonts',
    fields: fonts
  },
  {
    title: 'Assign Fonts',
    fields: generalFonts
  },
  {
    title: 'Font Weights',
    fields: fontWeights
  }
];
