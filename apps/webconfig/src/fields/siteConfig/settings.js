
import { flattenArray } from '../../utils/arrays';
import {
  RequiredNumber,
  RequiredString,
  RequiredStringUrl
} from '../../utils/rules';
import { capitalize } from 'lodash';

/* eslint-disable no-unused-vars */
export const dynamicPropertyPagesPath = 'dynamicPropertyPages';

export const currencyPath = 'currency';
export const currencyDefaultCurrencyPath = `${currencyPath}.defaultCurrency`;
export const currencySupportedCurrenciesPath = `${currencyPath}.supportedCurrencies`;

export const routePathsPath = `routePaths`;

export const searchPath = `search`;

export const searchResultsPath = `${searchPath}.results`;
export const searchResultsPerPagePath = `${searchResultsPath}.perPage`;
export const searchResultsOpenInNewTabPath = `${searchResultsPath}.openInNewTab`;

export const searchMapPath = `${searchPath}.map`;
export const searchMapDefaultCenterPath = `${searchMapPath}.defaultCenter`;
export const searchMapDefaultCenterLatPath = `${searchMapDefaultCenterPath}.lat`;
export const searchMapDefaultCenterLngPath = `${searchMapDefaultCenterPath}.lng`;

export const searchFiltersPath = `${searchPath}.filters`;


export const propertyPath = `property`;

export const propertyHeadlinePath = `${propertyPath}.headline`;
export const propertyHeadlineShowSubtitlePath = `${propertyHeadlinePath}.showSubtitle`;

export const propertyPricePath = `${propertyPath}.price`;
export const propertyPriceTypePath = `${propertyPricePath}.type`;
export const propertyPricePeriodPath = `${propertyPricePath}.period`;


export const propertyPricingPath = `${propertyPath}.pricing`;
export const propertyPricingActionsPath = `${propertyPricingPath}.actions`;
export const propertyPricingActionsEnquiryDisplayModePath = `${propertyPricingActionsPath}.enquiryDisplayMode`;
export const propertyPricingActionsRequestToBookDisplayModePath = `${propertyPricingActionsPath}.requestToBookDisplayMode`;

export const propertyPricingAlwaysShowBeforeArrivalFeesPath = `${propertyPricingPath}.alwaysShowBeforeArrivalFees`;
export const propertyPricingAlwaysShowAfterArrivalFeesPath = `${propertyPricingPath}.alwaysShowAfterArrivalFees`;
export const propertyPricingMinNightsPath = `${propertyPricingPath}.minNights`;
export const propertyPricingMaxNightsPath = `${propertyPricingPath}.maxNights`;

export const blogPath = `blog`;
export const blogPerPagePath = `${blogPath}.perPage`;

export const checkoutPath = `checkout`;

export const checkoutPaymentPath = `${checkoutPath}.payment`;
export const checkoutPaymentDefaultAcceptedPaymentBrandsPath = `${checkoutPaymentPath}.defaultAcceptedPaymentBrands`;

export const checkoutInfoPath = `${checkoutPath}.info`;
export const checkoutInfoPhoneRequiredPath = `${checkoutInfoPath}.phoneRequired`;

export const checkoutSuccessPath = `${checkoutPath}.success`;
export const checkoutSuccessReservationIdPath = `${checkoutSuccessPath}.reservationIdPath`;

export const checkoutMessageToAgentPath = `${checkoutPath}.messageToAgent`;
export const checkoutMessageToAgentActivePath = `${checkoutMessageToAgentPath}.active`;
export const checkoutMessageToAgentRequiredPath = `${checkoutMessageToAgentPath}.required`;

export const checkoutEnquiryModalPath = `${checkoutPath}.enquiryModal`;
export const checkoutEnquiryModalActivePath = `${checkoutEnquiryModalPath}.active`;

export const checkoutCheckboxesPath = `${checkoutPath}.checkboxes`;
export const checkoutCheckboxesShowMarketingOptInPath = `${checkoutCheckboxesPath}.showMarketingOptIn`;
export const checkoutCheckboxesShowTermsAndConditionsPath = `${checkoutCheckboxesPath}.showTermsAndConditions`;
export const checkoutCheckboxesShowPrivacyPolicyPath = `${checkoutCheckboxesPath}.showPrivacyPolicy`;
export const checkoutCheckboxesDefaultPrivacyPolicyPath = `${checkoutCheckboxesPath}.defaultPrivacyPolicy`;
export const checkoutCheckboxesDefaultTermsAndConditionsPath = `${checkoutCheckboxesPath}.defaultTermsAndConditions`;

export const ROUTE_PATHS = [
  "ROUTE_BASE_SEARCH",
  "ROUTE_BASE_PROPERTY",
  "ROUTE_BASE_CHECKOUT",
  "ROUTE_BASE_CHECKOUT_REVIEW",
  "ROUTE_BASE_CHECKOUT_GUEST_INFO",
  "ROUTE_BASE_CHECKOUT_CONFIRM",
  "ROUTE_BASE_CHECKOUT_SUCCESS",
  "ROUTE_BASE_POSTS",
  "ROUTE_BASE_POSTS_CATEGORIES",
  "ROUTE_BASE_POSTS_TAGS",
  "ROUTE_BASE_POSTS_AUTHOR",
  "ROUTE_BASE_NOT_FOUND",
  "ROUTE_BASE_CUSTOMER_CONTACT",
  "ROUTE_BASE_BUSINESS_CONTACT",
  "ROUTE_BASE_DEDICATED_POST",
  "ROUTE_BASE_HUB"
]

export const generateRoutePathFields = (corePath, paths) => {
  const fields = [];
  for(let i = 0; i < paths.length;) {
    const miniArray = [];
    miniArray.push({
      id: 'routePath_' + paths[i],
      label: capitalize(paths[i].replace('ROUTE_BASE_', '').toLowerCase().replace(/_/g, ' ')),
      type: 'text',
      validate: RequiredString,
      path: `${corePath}.${paths[i]}`,
    })
    const n = i + 1;
    if(paths[n]) {
      miniArray.push({
        id: 'routePath_' + paths[n],
        label: capitalize(paths[n].replace('ROUTE_BASE_', '').toLowerCase().replace(/_/g, ' ')),
        type: 'text',
        validate: RequiredString,
        path: `${corePath}.${paths[n]}`,
      })
    }
    fields.push(miniArray);
    i = i + 2;
  }
  return fields;
}

export const routePathsFields = generateRoutePathFields(routePathsPath, ROUTE_PATHS);

/* eslint-enable no-return-assign, no-param-reassign */

export const numberRange = (from = 1, to = 365, suffix) => {
  const items = [];
  for(let i = from; i <= to; ++i) {
    items.push({
      label: `${i}${suffix ? ` ${suffix}` : ``}`,
      value: i
    });
  }
  return items;
};


export const dynamicPropertyPagesField = {
  id: 'dynamicPropertyPages',
  label: 'Use Dynamic Property Pages',
  helperText: 'If enabled, property pages will not be statically generated. This increases build times but may have an impact on SEO.',
  type: 'switch',
  path: dynamicPropertyPagesPath,
  defaultValue: true
};

const getCurrencyOptions = ({values}) => {
  if(values.supportedCurrencies && values.supportedCurrencies.length) {
    return values.supportedCurrencies.map((currency) => ({
      label: currency,
      value: currency
    }));
  } else {
    return [];
  }
};

export const supportedCurrencyOptions = [
  {label: 'USD',value: 'USD'},
  {label: 'GBP',value: 'GBP'},
  {label: 'EUR',value: 'EUR'},
  {label: 'CAD',value: 'CAD'},
  {label: 'BRL',value: 'BRL'},
  {label: 'AUD',value: 'AUD'},
  {label: 'NZD',value: 'NZD'},
  {label: 'CHF',value: 'CHF'},
  {label: 'THB',value: 'THB'},
  {label: 'AED',value: 'AED'},
  {label: 'HKD',value: 'HKD'},
  {label: 'RUB',value: 'RUB'},
  {label: 'SGD',value: 'SGD'},
  {label: 'CZK',value: 'CZK'},
  {label: 'HRK',value: 'HRK'},
  {label: 'DKK',value: 'DKK'},
  {label: 'EGP',value: 'EGP'},
  {label: 'INR',value: 'INR'},
  {label: 'IDR',value: 'IDR'},
  {label: 'MXN',value: 'MXN'},
  {label: 'CNY',value: 'CNY'},
  {label: 'JPY',value: 'JPY'},
] 

//  "AUD", "THB", "AED", "HKD", "RUB", "SGD"

export const supportedCurrenciesField = {
  id: 'supportedCurrencies',
  label: 'Supported Currencies',
  type: 'repeater',
  modifies: ['defaultCurrency'],
  fields: {
    type: 'select',
    options: supportedCurrencyOptions
  },
  addNewLabel: 'Add Currency',
  path: currencySupportedCurrenciesPath
};

export const defaultCurrencyField = {
  id: 'defaultCurrency',
  label: 'Default Currency',
  type: 'select',
  options: [],
  getOptions: getCurrencyOptions,
  listensTo: ['supportedCurrencies'],
  path: currencyDefaultCurrencyPath,
  defaultValue: 'USD'
};

export const searchResultsPerPageField = {
  id: 'searchResultsPerPage',
  label: 'Results per page',
  type: 'number',
  path: searchResultsPerPagePath,
  default: 36,
  validate: RequiredNumber
};

export const searchResultsOpenInNewTabField = {
  id: 'searchResultsOpenInNewTab',
  label: 'Open Results In New Tab',
  type: 'switch',
  defaultValue: false,
  path: searchResultsOpenInNewTabPath,
};

export const searchMapDefaultCenterLatField = {
  id: 'searchMapDefaultCenterLat',
  label: 'Default Map Lat',
  type: 'number',
  defaultValue: 38.941631,
  path: searchMapDefaultCenterLatPath,
};

export const searchMapDefaultCenterLngField = {
  id: 'searchMapDefaultCenterLng',
  label: 'Default Map Lat',
  type: 'number',
  defaultValue: -119.977219,
  path: searchMapDefaultCenterLngPath,
};

export const propertyHeadlineShowSubtitleField = {
  id: 'propertyHeadlineShowSubtitle',
  label: 'Show property subtitle',
  type: 'switch',
  defaultValue: true,
  path: propertyHeadlineShowSubtitlePath,
};

export const propertyPriceTypeField = {
  id: 'propertyPriceType',
  label: 'Price Type',
  helperText: 'When displaying prices, Average = the average of the high & low price for the period Low = lowest price for the period. Range = to & from range of lowest to highest.',
  type: 'select',
  options: [
    {label: 'Average', value: 'PRICE_AVERAGE'},
    {label: 'Low', value: 'PRICE_LOW'},
    {label: 'Range', value: 'PRICE_RANGE'}
  ],
  path: propertyPriceTypePath,
  defaultValue: 'PRICE_LOW'
};

export const propertyPricePeriodField = {
  id: 'propertyPricePeriod',
  label: 'Price Period',
  type: 'select',
  options: [
    {label: 'Weekly', value: 'NIGHTLY'},
    {label: 'Nightly', value: 'WEEKLY'}
  ],
  path: propertyPricePeriodPath,
  defaultValue: 'NIGHTLY'
};

export const propertyPricingActionsEnquiryDisplayModeField = {
  id: 'propertyPricingActionsEnquiryDisplayMode',
  label: 'Show enquiry button',
  type: 'select',
  options: [
    {label: 'On any price quote', value: 'ON_ANY_RESPONSE'},
    {label: 'On failed price quote', value: 'ON_FAILED_PRICE'},
    {label: 'Never', value: 'NEVER'}
  ],
  path: propertyPricingActionsEnquiryDisplayModePath,
  defaultValue: 'ON_ANY_RESPONSE'
};

export const propertyPricingActionsRequestToBookDisplayModeField = {
  id: 'propertyPricingActionsRequestToBookDisplayMode',
  label: 'Show request to book button',
  type: 'select',
  options: [
    {label: 'On successful price quote (including enquiry)', value: 'ON_SUCCESSFUL_PRICE_INCLUDING_ENQUIRY'},
    {label: 'On successful price quote', value: 'ON_SUCCESSFUL_PRICE'}
  ],
  path: propertyPricingActionsEnquiryDisplayModePath,
  defaultValue: 'ON_SUCCESSFUL_PRICE_INCLUDING_ENQUIRY'
};

export const propertyPricingAlwaysShowBeforeArrivalFeesField = {
  id: 'propertyPricingAlwaysShowBeforeArrivalFees',
  label: 'Auto-expand before arrival fees',
  helperText: 'If off, it will be hidden by default with a show fees button. If yes, it will be auto-expanded.',
  type: 'switch',
  path: propertyPricingAlwaysShowBeforeArrivalFeesPath,
  defaultValue: true
};

export const propertyPricingAlwaysShowAfterArrivalFees = {
  id: 'propertyPricingAlwaysShowAfterArrivalFees',
  label: 'Auto-expand after arrival fees',
  helperText: 'If off, it will be hidden by default with a show fees button. If yes, it will be auto-expanded.',
  type: 'switch',
  path: propertyPricingAlwaysShowAfterArrivalFeesPath,
  defaultValue: true
};

export const propertyPricingMinNightsField = {
  id: 'propertyPricingMinNights',
  label: 'Show request to book button',
  type: 'select',
  options: numberRange(1, 365),
  path: propertyPricingMinNightsPath,
  defaultValue: 1
};

export const propertyPricingMaxNightsField = {
  id: 'propertyPricingMaxNights',
  label: 'Show request to book button',
  type: 'select',
  options: numberRange(1, 365),
  path: propertyPricingMaxNightsPath,
  defaultValue: 31
};

export const blogPerPageField = {
  id: 'blogPerPage',
  label: 'Blog posts to show per page',
  type: 'select',
  options: numberRange(4, 100),
  path: blogPerPagePath,
  defaultValue: 10
};


export const checkoutInfoPhoneRequiredField = {
  id: 'checkoutInfoPhoneRequired',
  label: 'Phone Required',
  helperText: 'Is the phone number required in checkout?',
  type: 'switch',
  path: checkoutInfoPhoneRequiredPath,
  defaultValue: false
};

export const checkoutMessageToAgentActiveField = {
  id: 'checkoutMessageToAgentActive',
  label: 'Show guest message box',
  helperText: 'Allows guests to send messages to agent when checking out.',
  type: 'switch',
  path: checkoutMessageToAgentActivePath,
  defaultValue: false
};

export const checkoutMessageToAgentRequiredField = {
  id: 'checkoutMessageToAgentRequired',
  label: 'Require guests send a message',
  helperText: 'Requires guests to send messages to the agent when checking out.',
  type: 'switch',
  path: checkoutMessageToAgentRequiredPath,
  defaultValue: false
};

export const checkoutEnquiryModalActiveField = {
  id: 'checkoutEnquiryModalActive',
  label: 'Allow enquiries in checkout',
  helperText: 'Allow enquiries to be sent separately whilst in checkout.',
  type: 'switch',
  path: checkoutEnquiryModalActivePath,
  defaultValue: false
};

export const checkoutCheckboxesShowMarketingOptInField = {
  id: 'checkoutCheckboxesShowMarketingOptIn',
  label: 'Marketing Opt-In Checkbox',
  helperText: 'Useful to allow guests to opt in to newsletters.',
  type: 'switch',
  path: checkoutCheckboxesShowMarketingOptInPath,
  defaultValue: false
};

export const checkoutCheckboxesShowTermsAndConditionsField = {
  id: 'checkoutCheckboxesShowTermsAndConditions',
  label: 'T&Cs Checkbox',
  helperText: 'Show terms and conditions checkbox.',
  type: 'switch',
  path: checkoutCheckboxesShowTermsAndConditionsPath,
  defaultValue: false
};

export const checkoutCheckboxesShowPrivacyPolicyField = {
  id: 'checkoutCheckboxesShowPrivacyPolicy',
  label: 'Privacy Policy Checkbox',
  helperText: 'Show privacy policy checkbox.',
  type: 'switch',
  path: checkoutCheckboxesShowPrivacyPolicyPath,
  defaultValue: false
};

export const checkoutCheckboxesDefaultPrivacyPolicyField = {
  id: 'checkoutCheckboxesDefaultPrivacyPolicy',
  label: 'Privacy Policy URL',
  type: 'text',
  path: checkoutCheckboxesDefaultPrivacyPolicyPath,
  validate: RequiredString,
  default: '/privacy'
};

export const checkoutCheckboxesDefaultTermsAndConditionsField = {
  id: 'checkoutCheckboxesDefaultTermsAndConditions',
  label: 'Terms & Conditions URL',
  type: 'text',
  path: checkoutCheckboxesDefaultTermsAndConditionsPath,
  validate: RequiredString,
  default: '/terms'
};


export const generalSettings = [dynamicPropertyPagesField, supportedCurrenciesField, defaultCurrencyField];
export const searchSettings = [
  [searchResultsPerPageField, searchResultsOpenInNewTabField],
  [searchMapDefaultCenterLatField, searchMapDefaultCenterLngField]
];
export const propertySettings = [
  propertyHeadlineShowSubtitleField,
  [propertyPriceTypeField, propertyPricePeriodField],
  [propertyPricingActionsEnquiryDisplayModeField, propertyPricingActionsRequestToBookDisplayModeField],
  [propertyPricingAlwaysShowBeforeArrivalFeesField, propertyPricingAlwaysShowAfterArrivalFees],
  [propertyPricingMinNightsField, propertyPricingMaxNightsField]
];
export const routePaths = [
  ...routePathsFields
]
export const blogSettings = [
  blogPerPageField
]
export const checkoutSettings = [
  [checkoutInfoPhoneRequiredField, checkoutEnquiryModalActiveField],
  [checkoutMessageToAgentActiveField, checkoutMessageToAgentRequiredField],
  [checkoutCheckboxesShowMarketingOptInField, checkoutCheckboxesShowTermsAndConditionsField, checkoutCheckboxesShowPrivacyPolicyField],
  [checkoutCheckboxesDefaultPrivacyPolicyField, checkoutCheckboxesDefaultTermsAndConditionsField]
]

export const allFields = flattenArray([generalSettings, routePaths, searchSettings, propertySettings, blogSettings, checkoutSettings]);

export const fieldGroups = [
  {
    title: 'General Settings',
    fields: generalSettings
  },
  {
    title: 'Search Settings',
    fields: searchSettings
  },
  {
    title: 'Property Settings',
    fields: propertySettings
  },
  {
    title: 'Blog Settings',
    fields: blogSettings
  },
  {
    title: 'Checkout Settings',
    fields: checkoutSettings
  },
  {
    title: 'Website URLs / Paths',
    fields: routePaths
  }
];
