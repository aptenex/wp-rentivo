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

export const chakraThemeTypographyPath = `${chakraThemePath}.typography`;
export const chakraThemeTypographyTextPath = `${chakraThemeTypographyPath}.text`;
export const chakraThemeTypographyTextWritingPath = `${chakraThemeTypographyPath}.textWriting`;
export const chakraThemeTypographyHeadingPath = `${chakraThemeTypographyPath}.heading`;
export const chakraThemeTypographyHeadingWritingPath = `${chakraThemeTypographyPath}.writingHeading`;

export const chakraThemeComponentsPath = `${chakraThemePath}.components`;
export const chakraThemeComponentsHeaderNavbarPath = `${chakraThemeComponentsPath}.HeaderNavbar`;

export const chakraThemeComponentsHeaderNavbarBaseStylePath = `${chakraThemeComponentsHeaderNavbarPath}.baseStyle`;

export const chakraThemeComponentsHeaderNavbarBaseStyleTypePath = `${chakraThemeComponentsHeaderNavbarBaseStylePath}.type`;
export const chakraThemeComponentsHeaderNavbarBaseStyleLayoutPath = `${chakraThemeComponentsHeaderNavbarBaseStylePath}.layout`;

export const chakraThemeComponentsHeaderNavbarBaseStyleHeaderPath = `${chakraThemeComponentsHeaderNavbarBaseStylePath}.header`;
export const chakraThemeComponentsHeaderNavbarBaseStyleHeaderHeightPath = `${chakraThemeComponentsHeaderNavbarBaseStyleHeaderPath}.height`;
export const chakraThemeComponentsHeaderNavbarBaseStyleHeaderBgPath = `${chakraThemeComponentsHeaderNavbarBaseStyleHeaderPath}.bg`;

export const chakraThemeComponentsHeaderNavbarBaseStyleContainerPath = `${chakraThemeComponentsHeaderNavbarBaseStylePath}.container`;
export const chakraThemeComponentsHeaderNavbarBaseStyleContainerMaxWPath = `${chakraThemeComponentsHeaderNavbarBaseStyleContainerPath}.maxW`;

export const chakraThemeBarcelonaPath = `${chakraThemePath}.barcelona`;
export const chakraThemeBarcelonaSearchPath = `${chakraThemeBarcelonaPath}.search`;

export const chakraThemeBarcelonaSearchDefaultTypePath = `${chakraThemeBarcelonaSearchPath}.defaultType`;
export const chakraThemeBarcelonaSearchShowViewButtonPath = `${chakraThemeBarcelonaSearchPath}.showViewButton`;

export const chakraThemeBarcelonaSearchLayoutPath = `${chakraThemeBarcelonaSearchPath}.layout`;
export const chakraThemeBarcelonaSearchLayoutSearchAreaTypePath = `${chakraThemeBarcelonaSearchLayoutPath}.searchAreaType`;
export const chakraThemeBarcelonaSearchLayoutSearchAreaPath = `${chakraThemeBarcelonaSearchLayoutPath}.searchArea`;
export const chakraThemeBarcelonaSearchLayoutSearchAreaMapOpenPath = `${chakraThemeBarcelonaSearchLayoutSearchAreaPath}.mapOpen`;


export const searchShowViewButtonField = {
  id: 'searchShowViewButton',
  label: 'Show view button',
  helperText: 'Display a view property button on each listing.',
  type: 'switch',
  defaultValue: true,
  path: chakraThemeBarcelonaSearchShowViewButtonPath,
};

export const searchDefaultTypeField = {
  id: 'searchDefaultType',
  label: 'Default Listing Type',
  type: 'select',
  options: [
    {
      label: 'List',
      value: 'list'
    },
    {
      label: 'Grid',
      value: 'grid'
    }
  ],
  defaultValue: 'list',
  path: chakraThemeBarcelonaSearchDefaultTypePath,
};

export const searchLayoutSearchAreaTypeField = {
  id: 'searchLayoutSearchAreaType',
  label: 'Default Listing Type',
  helperText: 'This only applies when the map is open, and users are on desktop',
  type: 'select',
  options: [
    {
      label: 'List view (Desktop + Map Open)',
      value: 'LIST_DESKTOP'
    },
    {
      label: 'Grid view (Desktop + Map Open)',
      value: 'GRID_DESKTOP'
    },
    {
      label: 'Custom',
      value: 'CUSTOM'
    }
  ],
  defaultValue: 'GRID_DESKTOP',
  setValue: ({value, setVal, setState}) => {
    setVal(value);
    if(value === 'GRID_DESKTOP') {
      setState(chakraThemeBarcelonaSearchLayoutSearchAreaMapOpenPath, {
        "base": {
          "colSpan": 24,
          "perRow": 1,
          "type": "grid"
        },
        "md": {
          "colSpan": 14,
          "perRow": 1,
          "type": "grid"
        },
        "lg": {
          "colSpan": 16,
          "perRow": 2,
          "type": "grid"
        },
        "xl": {
          "colSpan": 14,
          "perRow": 2,
          "type": "grid"
        },
        "xxl": {
          "colSpan": 12,
          "perRow": 2,
          "type": "grid"
        }
      });
    }

    if(value === 'LIST_DESKTOP') {
      setState(chakraThemeBarcelonaSearchLayoutSearchAreaMapOpenPath, {
        "base": {
          "colSpan": 24,
          "perRow": 1,
          "type": "grid"
        },
        "md": {
          "colSpan": 14,
          "perRow": 1,
          "type": "grid"
        },
        "lg": {
          "colSpan": 16,
          "perRow": 2,
          "type": "grid"
        },
        "xl": {
          "colSpan": 14,
          "perRow": 1,
          "type": "list"
        },
        "xxl": {
          "colSpan": 12,
          "perRow": 1,
          "type": "list"
        }
      });
    }
  },
  path: chakraThemeBarcelonaSearchLayoutSearchAreaTypePath,
};

/* eslint-enable no-return-assign, no-param-reassign */
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

export const themeFontWeightOptions = [
  { label: 'Hairline', value: 'hairline' },
  { label: 'Thin', value: 'thin' },
  { label: 'Light', value: 'light' },
  { label: 'Normal', value: 'normal' },
  { label: 'Medium', value: 'medium' },
  { label: 'Semibold', value: 'semibold' },
  { label: 'Bold', value: 'bold' },
  { label: 'Extrabold', value: 'extrabold' },
  { label: 'Black', value: 'black' }
];

export const themeColorOptions = [
  { label: 'Primary', value: 'primary.500' },
  { label: 'Secondary', value: 'secondary.500' },
  { label: 'Tertiary', value: 'tertiary.500' },
  { label: 'Lightest Gray', value: 'gray.100' },
  { label: 'Lighter Gray', value: 'gray.200' },
  { label: 'Light Gray', value: 'gray.300' },
  { label: 'Bold', value: 'bold' },
  { label: 'Text', value: 'text' },
  { label: 'Light Text', value: 'textLight' },
  { label: 'Link', value: 'link' },
  { label: 'Link Hover', value: 'linkHover' }
];

export const pixelRange = (from = 8, to = 72) => {
  const pixels = [];
  for(let i = from; i <= to; ++i) {
    pixels.push({
      label: `${i}px`,
      value: `${i}px`
    });
  }
  return pixels;
};

export const themeSizeOptions = [
  { label: 'Extra Small', value: 'xs' },
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'XL', value: 'xl' },
  { label: 'XXL', value: '2xl' },
  { label: 'XXXL', value: '3xl' },
  { label: 'XXXXL', value: '4xl' },
  { label: 'XXXXXL', value: '5xl' },
  { label: 'XXXXXL', value: '6xl' },
  ...pixelRange()
];

/*
"heading": "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
      "body": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      "button": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      "mono": "SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace"
      */

const getFontOptions = ({values}) => {

  const standardFonts = [
    {
      label: 'Native Serif Font',
      value: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
    },
    {
      label: 'Native Sans-Serif Font',
      value: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    },
    {
      label: 'Native Mono Font',
      value: "SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace"
    }
  ]

  if(values.loadFonts && values.loadFonts.length) {
    return [...standardFonts, ...values.loadFonts.map(({family, ...rest}) => ({
      label: family,
      value: family,
      ...rest
    }))];
  } else {
    return [...standardFonts];
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


function capitalizeStr(txt) {
  return txt.charAt(0).toUpperCase() + txt.slice(1); //or if you want lowercase the rest txt.slice(1).toLowerCase();
}

export const generateTypographyFields = (cat, defaultPath, items, includeFontSize = false) => {
  return items.map((item) => {
    const itemsArray = [
      {
        id: `typography${capitalizeStr(cat)}${capitalizeStr(item.path)}FontFamily`,
        label: item.labelAffix + ' Font Family',
        type: 'select',
        options: [],
        getOptions: getFontOptions,
        listensTo: ['loadFonts'],
        path: `${defaultPath}.${item.path}.fontFamily`
      },
      {
        id: `typography${capitalizeStr(cat)}${capitalizeStr(item.path)}FontWeight`,
        label: item.labelAffix + ' Font Weight',
        type: 'select',
        defaultValue: 'normal',
        options: themeFontWeightOptions,
        path: `${defaultPath}.${item.path}.fontWeight`
      },
      {
        id: `typography${capitalizeStr(cat)}${capitalizeStr(item.path)}Color`,
        label: item.labelAffix + ' Color',
        type: 'select',
        defaultValue: 'text',
        options: themeColorOptions,
        path: `${defaultPath}.${item.path}.color`
      }
    ];

    if(includeFontSize) {
      itemsArray.push({
        id: `typography${capitalizeStr(cat)}${capitalizeStr(item.path)}FontSizeBase`,
        label: item.labelAffix + ' Size (Mobile)',
        type: 'select',
        options: themeSizeOptions,
        defaultValue: 'md',
        path: `${defaultPath}.${item.path}.fontSize.base`
      });

      itemsArray.push({
        id: `typography${capitalizeStr(cat)}${capitalizeStr(item.path)}FontSizeLg`,
        label: item.labelAffix + ' Size (Desktop)',
        type: 'select',
        options: themeSizeOptions,
        defaultValue: 'lg',
        path: `${defaultPath}.${item.path}.fontSize.lg`
      });
    }

    return itemsArray;
  });
}

export const typographyTextFieldItems = [
  {
    path: 'text',
    labelAffix: 'Text'
  }
];

export const typographyHeadingFieldItems = [
  {
    path: 'h1',
    labelAffix: 'H1'
  },
  {
    path: 'h2',
    labelAffix: 'H2'
  },
  {
    path: 'h3',
    labelAffix: 'H3'
  },
  {
    path: 'h4',
    labelAffix: 'H4'
  },
  {
    path: 'h5',
    labelAffix: 'H5'
  },
  {
    path: 'h6',
    labelAffix: 'H6'
  }
];

export const typographyTextFields = generateTypographyFields('text', chakraThemeTypographyTextPath, typographyTextFieldItems);
export const typographyTextWritingFields = generateTypographyFields('textWriting', chakraThemeTypographyTextPath, typographyTextFieldItems);
export const typographyHeadingFields = generateTypographyFields('heading', chakraThemeTypographyHeadingPath, typographyHeadingFieldItems, true);
export const typographyHeadingWritingFields = generateTypographyFields('writingHeading', chakraThemeTypographyHeadingWritingPath, typographyHeadingFieldItems, true);

export const loadFontsField = {
  id: 'loadFonts',
  label: 'Google Fonts',
  helperText: 'These are the fonts which will be loaded through-out your website',
  type: 'repeater',
  modifies: [
    'bodyFont', 
    'headingFont', 
    'accentFont', 
    ...typographyTextFields.map(item => item[0].id),
    ...typographyTextWritingFields.map(item => item[0].id),
    ...typographyHeadingFields.map(item => item[0].id),
    ...typographyHeadingWritingFields.map(item => item[0].id),
  ],
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

export const headerNavbarBaseStyleHeaderBgField = {
  id: 'headerNavbarBaseStyleHeaderBg',
  label: 'Background Color',
  type: 'color',
  path: chakraThemeComponentsHeaderNavbarBaseStyleHeaderBgPath,
  validate: RequiredString,
  defaultValue: '#FFFFFF'
};

export const headerNavbarBaseStyleTypeField = {
  id: 'headerNavbarBaseStyleType',
  label: 'Color Type',
  helperText: 'If your header has a light background, use "Light". If your header has a dark background, use "Dark"',
  type: 'select',
  options: [
    {
      label: 'Light',
      value: 'light' 
    },
    {
      label: 'Dark',
      value: 'dark' 
    }
  ],
  defaultValue: 'light',
  path: chakraThemeComponentsHeaderNavbarBaseStyleTypePath
};

export const headerNavbarBaseStyleLayoutField = {
  id: 'headerNavbarBaseStyleLayout',
  label: 'Header Layout',
  type: 'select',
  options: [
    {
      label: 'Central Logo',
      value: 'CENTRAL_LOGO'
    },
    {
      label: 'Left Logo',
      value: 'LEFT_LOGO' 
    }
  ],
  defaultValue: 'LEFT_LOGO',
  path: chakraThemeComponentsHeaderNavbarBaseStyleLayoutPath
};

export const headerNavbarBaseStyleHeaderHeightField = {
  id: 'headerNavbarBaseStyleHeaderHeight',
  label: 'Header Height',
  helperText: 'Do not make your header height less than the height of your logo.',
  type: 'select',
  options: pixelRange(24, 200),
  defaultValue: '60px',
  path: chakraThemeComponentsHeaderNavbarBaseStyleHeaderHeightPath
};

export const headerNavbarBaseStyleContainerMaxWField = {
  id: 'headerNavbarBaseStyleContainerMaxW',
  label: 'Container Width',
  type: 'select',
  options: [
    {
      label: 'Full Width (Fluid)',
      value: 'container.full' 
    },
    {
      label: 'Large Container',
      value: 'container.xl'
    },
    {
      label: 'Small Container',
      value: 'container.lg' 
    }
  ],
  defaultValue: 'container.full',
  path: chakraThemeComponentsHeaderNavbarBaseStyleContainerMaxWPath
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
  [fontWeightNormalField, fontWeightMediumField, fontWeightSemiboldField],
  [fontWeightBoldField, fontWeightExtraboldField, fontWeightBlackField]
];
export const header = [
  [headerNavbarBaseStyleHeaderBgField, headerNavbarBaseStyleTypeField],
  [headerNavbarBaseStyleLayoutField, headerNavbarBaseStyleHeaderHeightField],
  headerNavbarBaseStyleContainerMaxWField
];
export const search = [
  [searchLayoutSearchAreaTypeField, searchShowViewButtonField]
];
export const typographyDefaultText = [
  ...typographyTextFields
];

export const typographyWritingText = [
  ...typographyTextWritingFields
];

export const typographyDefaultHeading = [
  ...typographyHeadingFields
];

export const typographyWritingHeading = [
  ...typographyHeadingWritingFields
];

export const allFields = flattenArray([
  fonts, coreColors, textColors, generalFonts, fontWeights, header, search, typographyDefaultText, typographyWritingText, typographyDefaultHeading, typographyWritingHeading
]);

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
  },
  {
    title: 'Header',
    fields: header
  },
  {
    title: 'Search',
    fields: search
  },
  {
    title: 'Default Text',
    fields: typographyDefaultText
  },
  {
    title: 'Page / Blog Text',
    fields: typographyWritingText
  },
  {
    title: 'Default Headings',
    fields: typographyDefaultHeading
  },
  {
    title: 'Page / Blog Headings',
    fields: typographyWritingHeading
  }
];
