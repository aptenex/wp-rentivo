import {
  RequiredNumber,
  RequiredString,
  RequiredStringUrl,
  StringEmail,
  StringUrl,
  StringUrlStrict
} from '../../utils/rules';
import { string_to_slug } from '../../utils/strings';
import { getExternalImageDimensions } from '../../utils/images';
import { toFixedIfNecessary } from '../../utils/numbers';
import { flattenArray } from '../../utils/arrays';

/* eslint-disable no-unused-vars */
export const siteNamePath = 'name';
export const siteIdPath = 'id';
export const siteShortNamePath = 'shortName';

export const sitePath = 'site';
export const siteLogoPath = `${sitePath}.logo`;
export const siteLogoUseImagePath = `${siteLogoPath}.useImage`;
export const siteLogoTextPath = `${siteLogoPath}.text`;
export const siteLogoImagePath = `${siteLogoPath}.image`;
export const siteLogoImageWidthPath = `${siteLogoImagePath}.width`;
export const siteLogoImageHeightPath = `${siteLogoImagePath}.height`;
export const siteLogoImageTypesPath = `${siteLogoImagePath}.types`;
export const siteLogoImageTypesDefaultPath = `${siteLogoImageTypesPath}.default`;
export const siteLogoImageTypesDefaultMobilePath = `${siteLogoImageTypesPath}.defaultMobile`;
export const siteLogoImageTypesLightPath = `${siteLogoImageTypesPath}.light`;
export const siteLogoImageTypesLightMobilePath = `${siteLogoImageTypesPath}.lightMobile`;
export const siteLogoImageTypesDarkPath = `${siteLogoImageTypesPath}.dark`;
export const siteLogoImageTypesDarkMobilePath = `${siteLogoImageTypesPath}.darkMobile`;

export const siteIconsPath = `${sitePath}.icons`;
export const siteIcons16Path = `${siteIconsPath}.16`;
export const siteIcons32Path = `${siteIconsPath}.32`;
export const siteIcons48Path = `${siteIconsPath}.48`;
export const siteIcons128Path = `${siteIconsPath}.128`;

export const siteCookiesPath = `${sitePath}.cookies`;
export const siteCookiesActivePath = `${siteCookiesPath}.active`;
export const siteCookiesPolicyUrlPath = `${siteCookiesPath}.policyUrl`;
export const siteCookiesPositionPath = `${siteCookiesPath}.position`;

export const siteSharingPath = `${sitePath}.sharing`;
export const siteSharingOgImagePath = `${siteSharingPath}.ogImage`;
export const siteSharingTwitterImagePath = `${siteSharingPath}.twitterImage`;
export const siteStructuredDataPath = `${sitePath}.structuredData`;
export const siteStructuredDataOrganizationPath = `${siteStructuredDataPath}.organization`;
export const siteStructuredDataOrganizationNamePath = `${siteStructuredDataOrganizationPath}.name`;
export const siteStructuredDataOrganizationLegalNamePath = `${siteStructuredDataOrganizationPath}.legalName`;
export const siteStructuredDataOrganizationUrlPath = `${siteStructuredDataOrganizationPath}.url`;
export const siteStructuredDataOrganizationLogoPath = `${siteStructuredDataOrganizationPath}.logo`;
export const siteStructuredDataOrganizationFoundingDatePath = `${siteStructuredDataOrganizationPath}.foundingDate`;
export const siteStructuredDataOrganizationContactPointPath = `${siteStructuredDataOrganizationPath}.contactPoint`;
export const siteStructuredDataOrganizationContactTypePath = `${siteStructuredDataOrganizationContactPointPath}.contactType`;
export const siteStructuredDataOrganizationContactEmailPath = `${siteStructuredDataOrganizationContactPointPath}.email`;
export const siteStructuredDataOrganizationSameAsPath = `${siteStructuredDataOrganizationPath}.sameAs`;
export const siteStructuredDataOrganizationSameAsObjPath = `${siteStructuredDataOrganizationPath}.sameAsObj`;
export const siteStructuredDataBrandPath = `${siteStructuredDataPath}.brand`;
export const siteStructuredDataBrandNamePath = `${siteStructuredDataBrandPath}.name`;
export const siteStructuredDataBrandUrlPath = `${siteStructuredDataBrandPath}.url`;
export const siteStructuredDataBrandLogoPath = `${siteStructuredDataBrandPath}.logo`;
export const siteStructuredDataBrandSameAsPath = `${siteStructuredDataBrandPath}.sameAs`;

export const siteContentPath = `${sitePath}.content`;
export const siteContentVariablesPath = `${siteContentPath}.variables`;
export const siteContentVariablesSepPath = `${siteContentVariablesPath}.sep`;
export const siteContentVariablesSiteTitle = `${siteContentVariablesPath}.siteTitle`;
/* eslint-enable no-return-assign, no-param-reassign */

export const siteNameField = {
  id: 'siteName',
  label: 'Website Name',
  helperText: "What's the name of your business/website?",
  type: 'text',
  path: siteNamePath,
  validate: RequiredString,
  defaultValue: 'Example Villas',
  setValue: ({value, setVal, setState}) => {
    setVal(value);
    setState(siteContentVariablesSiteTitle, value);
    setState(siteIdPath, string_to_slug(value));
    setState(siteShortNamePath, string_to_slug(value));
  }
};

const LogoImageCondition = (values) => values.useLogo === true;

export const logoUseImageField = {
  id: 'useLogo',
  label: 'Use Image For Logo',
  helperText: 'Would you like to use an image or text for your logo?',
  type: 'switch',
  path: siteLogoUseImagePath,
  defaultValue: true,
  required: true
};

export const logoTextField = {
  id: 'logoText',
  label: 'Logo Text (Website Name)',
  helperText: 'Used instead of an image if non exists',
  type: 'text',
  path: siteLogoTextPath,
  validate: RequiredString,
  conditional: LogoImageCondition
};

export const logoImageField = {
  id: 'logoImage',
  label: 'Logo Image URL',
  helperText: 'Please enter your logo',
  type: 'media',
  path: siteLogoImageTypesDefaultPath,
  required: true,
  validate: RequiredStringUrl,
  modifies: ['logoImageWidth', 'logoImageHeight'],
  conditional: LogoImageCondition,
  onBlur: async ({field, id, form, prevVal}) => {
    // If no errors & state is diff
    if(!form.errors[id] && prevVal !== field.value) {
      try {
        const { width, height } = await getExternalImageDimensions(field.value);
        console.log({ width, height });
        form.setFieldValue('logoImageWidth', width);
        form.setFieldValue('logoImageHeight', height);
      } catch (e) {
        form.setFieldTouched(id);
        form.setFieldError(id, `Error getting image from URL`);
      }
    }
  },
  setValue: async ({value, setState, getState}) => {
    try {
      const currentVal = getState(siteLogoImageTypesDefaultPath);
      if(currentVal !== value) {
        // New image, look up dimensions
        const { width, height } = await getExternalImageDimensions(value);
        setState(siteLogoImageWidthPath, width);
        setState(siteLogoImageHeightPath, height);
      }

      setState(siteLogoImageTypesDefaultPath, value);
      setState(siteLogoImageTypesDefaultMobilePath, value);
      setState(siteLogoImageTypesLightPath, value);
      setState(siteLogoImageTypesLightMobilePath, value);
    } catch (e) {
      throw new Error(`Error getting image from URL`);
    }
  }
};

export const logoImageHeightField = {
  id: 'logoImageHeight',
  label: 'Logo Height (px)',
  helperText: 'Please enter the desired height for your logo',
  type: 'number',
  path: siteLogoImageHeightPath,
  required: true,
  validate: RequiredNumber,
  conditional: (values) => values.useLogo === true,
  modifies: ['logoImageWidth'],
  onBlur: async ({field, form, getState}) => {
    const currentWidth = getState(siteLogoImageWidthPath);
    const currentHeight = getState(siteLogoImageHeightPath);
    const currentLogoImageURL = getState(siteLogoImageTypesDefaultPath);
    if(!currentLogoImageURL || !currentWidth || !currentHeight) {
      throw new Error(`No logo`);
    }
    const currentAspect = parseFloat(currentWidth) / parseFloat(currentHeight);
    const newWidth = parseFloat(field.value) * currentAspect;
    form.setFieldValue('logoImageWidth', toFixedIfNecessary(newWidth, 2));
  },
  setValue: async ({value, setVal}) => {
    setVal(value);
  }
};

export const logoImageWidthField = {
  id: 'logoImageWidth',
  label: 'Logo Width (px)',
  helperText: 'Please enter the desired width for your logo',
  type: 'number',
  path: siteLogoImageWidthPath,
  hidden: true,
  conditional: (values) => values.useLogo === true
};

export const onBlurImageDimensions = async ({field, id, form, prevVal}, minW = 32, minH) => {
  if(!form.errors[id] && prevVal !== field.value) {
    try {
      const { width, height } = await getExternalImageDimensions(field.value);
      if(width < minW || (minH > 0 && height < minW)) {
        form.setFieldError(id, `Please use an image with dimensions greater than ${minW}px${minH > 0 ? ` by ${minW}px` : ``}`);
      }
    } catch (e) {
      form.setFieldError(id, `Could not retrieve image.`);
    }
  }
};

export const iconLargeImageField = {
  id: 'iconImageLarge',
  label: 'Website Icon URL (min. 128px by 128px)',
  helperText: 'This icon will be used for icons on phones & tablets.',
  type: 'media',
  path: siteIcons128Path,
  required: true,
  validate: RequiredStringUrl,
  onBlur: async (props) => await onBlurImageDimensions(props, 128),
  setValue: async ({value, setVal, setState}) => {
    setVal(value);
    setState(siteIcons48Path, value);
  }
};

export const iconSmallImageField = {
  id: 'iconImageSmall',
  label: 'Website Favicon URL (min. 32px by 32px)',
  helperText: 'This icon will be used as your favicon.',
  type: 'media',
  path: siteIcons32Path,
  required: true,
  validate: RequiredStringUrl,
  onBlur: async (props) => await onBlurImageDimensions(props, 32),
  setValue: async ({value, setVal, setState}) => {
    setVal(value);
    setState(siteIcons16Path, value);
  }
};


export const logoImageDarkField = {
  id: 'logoImageDark',
  label: 'Light Logo Image URL (for dark backgrounds)',
  helperText: 'If using a dark background, please use a lighter logo url that is visible against a dark background',
  type: 'media',
  path: siteLogoImageTypesDarkPath,
  validate: StringUrl,
  conditional: (values) => values.useLogo === true,
  setValue: ({value, setVal, setState}) => {
    setVal(value);
    setState(siteLogoImageTypesDarkMobilePath, value);
  }
};

export const cookiesActiveField = {
  id: 'cookiesActive',
  label: 'Activate Cookie Popup',
  type: 'switch',
  path: siteCookiesActivePath,
  defaultValue: false
};

export const cookiesPolicyUrlField = {
  id: 'cookiesPolicyUrl',
  label: 'Cookie Policy URL',
  placeholder: 'https://example.com/policy',
  type: 'text',
  path: siteCookiesPolicyUrlPath,
  validate: StringUrlStrict,
};

export const cookiesPositionField = {
  id: 'cookiesPosition',
  label: 'Cookie Popup Position',
  type: 'select',
  options: [
    {
      label: 'Bottom Left',
      value: 'left'
    },
    {
      label: 'Bottom Right',
      value: 'left'
    },
    {
      label: 'Bottom Center',
      value: 'center'
    }
  ],
  path: siteCookiesPositionPath,
  defaultValue: 'center'
};

export const sharingOgImageField = {
  id: 'sharingOgImage',
  label: 'Sharing Image (min. 1200px)',
  helperText: 'When sharing your website across social media, this is the image which will be used as a preview. For best results, use an image 1200px by 600px.',
  type: 'media',
  path: siteSharingOgImagePath,
  validate: StringUrl,
  onBlur: async (props) => onBlurImageDimensions(props, 1200),
  setValue: async ({value, setVal, setState}) => {
    setVal(value);
    setState(siteSharingTwitterImagePath, value);
  }
};

/* eslint-disable no-unused-vars */
export const sharingTwitterImageField = {
  id: 'sharingTwitterImage',
  label: 'Twitter Image (min. 1200px)',
  helperText: 'When sharing your website on Twitter, this is the image which will be used as the card. For best results, use an image 1200px by 600px.',
  type: 'media',
  path: siteSharingTwitterImagePath,
  validate: StringUrl,
  onBlur: async (props) => onBlurImageDimensions(props, 1200)
};
/* eslint-enable no-return-assign, no-param-reassign */

export const structuredDataLegalNameField = {
  id: 'structuredDataLegalName',
  label: 'Legal Business Name',
  placeholder: 'Example Ltd',
  helperText: 'This is used for Google\'s structured data',
  type: 'text',
  path: siteStructuredDataOrganizationLegalNamePath
};

export const structuredDataFoundingDateField = {
  id: 'structuredDataFoundingDate',
  label: 'Founding Year',
  placeholder: '2009',
  helperText: 'This is used for Google\'s structured data',
  type: 'text',
  path: siteStructuredDataOrganizationFoundingDatePath
};

export const structuredDataContactTypeField = {
  id: 'structuredDataContactType',
  label: 'Contact Type',
  placeholder: 'Customer Support',
  defaultValue: 'Customer Support',
  helperText: 'This is used for Google\'s structured data.',
  type: 'text',
  path: siteStructuredDataOrganizationContactTypePath
};

export const structuredDataContactEmailField = {
  id: 'structuredDataContactEmail',
  label: 'Contact Email',
  placeholder: 'hello@example.com',
  helperText: 'This is used for Google\'s structured data.',
  type: 'text',
  path: siteStructuredDataOrganizationContactEmailPath,
  validation: StringEmail
};

export const structuredDataSameAsField = {
  id: 'structuredDataSameAs',
  label: 'Linked Social Media URLs',
  helperText: 'These are URLs to social media accounts that represent your business/website',
  type: 'repeater',
  fields: {
    type: 'text',
    label: 'Social Media URL'
  },
  addNewLabel: 'Add URL',
  path: siteStructuredDataOrganizationSameAsPath,
  validation: StringEmail
};
/*
export const structuredDataSameAsFieldObj = {
  id: 'structuredDataSameAsObj',
  label: 'Linked Social Media URLs',
  helperText: 'These are URLs to social media accounts that represent your business/website',
  type: 'repeater',
  fields: [
    {
      id: 'label',
      type: 'text',
      label: 'Label',
      defaultValue: ''
    },
    {
      id: 'url',
      type: 'text',
      label: 'URL',
      validate: RequiredStringUrl,
      defaultValue: 'http://'
    }
  ],
  addNewLabel: 'Add URL',
  path: siteStructuredDataOrganizationSameAsObjPath
};
*/
/*
"sharing": {
      "ogImage": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/brandhighresexport2-scaled.jpg",
      "twitterImage": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/brandhighresexport2-scaled.jpg"
    },
    "structuredData": {
      "organization": {
        "name": "Leavetown",
        "legalName": "Leavetown",
        "url": "https://leavetown.com",
        "logo": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-ungrouped.svg",
        "foundingDate": "2008",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "email": "hello@leavetown.com"
        },
        "sameAs": []
      },
      "brand": {
        "name": "Leavetown",
        "url": "https://leavetown.com",
        "logo": "https://leavetown.rentivo.net/wp-content/uploads/sites/11/2020/12/logo-3-ungrouped.svg",
        "sameAs": []
      }
    },
    "content": {
      "variables": {
        "sep": "—",
        "siteTitle": "Leavetown"
      }
    },
 */

export const siteDetails = [siteNameField];
export const logo = [logoUseImageField, logoTextField, logoImageField, logoImageDarkField, logoImageHeightField, logoImageWidthField, iconLargeImageField, iconSmallImageField];
export const cookies = [cookiesActiveField, cookiesPolicyUrlField, cookiesPositionField];
export const sharingSeo = [sharingOgImageField, structuredDataLegalNameField, structuredDataFoundingDateField, structuredDataContactTypeField, structuredDataContactEmailField, structuredDataSameAsField];
export const allFields = flattenArray([siteDetails, logo, cookies, sharingSeo]);

export const fieldGroups = [
  {
    title: 'Site Details',
    fields: siteDetails
  },
  {
    title: 'Logo & Icons',
    fields: logo
  },

  {
    title: 'Cookies / GDPR',
    fields: cookies
  },
  {
    title: 'Sharing & SEO',
    fields: sharingSeo
  }
];
