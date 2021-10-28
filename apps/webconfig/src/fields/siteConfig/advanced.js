import {
  RequiredString,
  RequiredNumber
} from '../../utils/rules';
import { flattenArray } from '../../utils/arrays';

/* eslint-disable no-unused-vars */
export const sitePath = 'site';
export const siteApiPath = `${sitePath}.api`;
export const siteApiLycanPath = `${siteApiPath}.lycan`;
export const siteApiLycanChannelIdPath = `${siteApiLycanPath}.channelId`;
export const siteApiLycanHostPath = `${siteApiLycanPath}.host`;
export const siteApiLycanSendCurrencyOnPriceRequestsPath = `${siteApiLycanPath}.sendCurrencyOnPriceRequests`;

export const searchPath = `search`;
export const searchElasticSearchPath = `${searchPath}.elasticSearch`;
export const searchElasticSearchAppPath = `${searchElasticSearchPath}.app`;
export const searchElasticSearchCredentialsPath = `${searchElasticSearchPath}.credentials`;
export const searchResultsTotalHits = `${searchPath}.results.totalHits`;

export const searchFiltersPath = `${searchPath}.filters`;
export const searchFiltersLosPath = `${searchFiltersPath}.los`;
export const searchFiltersLosActivePath = `${searchFiltersLosPath}.active`;
export const searchFiltersLosShowFilterPath = `${searchFiltersLosPath}.showFilter`;
export const searchFiltersLosDefaultValuePath = `${searchFiltersLosPath}.defaultValue`;

export const checkoutPath = `checkout`;

export const checkoutPaymentPath = `${checkoutPath}.payment`;
export const checkoutPaymentDefaultAcceptedPaymentBrandsPath = `${checkoutPaymentPath}.defaultAcceptedPaymentBrands`;

export const checkoutSuccessPath = `${checkoutPath}.success`;
export const checkoutSuccessReservationIdPath = `${checkoutSuccessPath}.reservationIdPath`;


/* eslint-enable no-return-assign, no-param-reassign */

export const lycanChannelIdField = {
  id: 'lycanChannelId',
  label: 'Lycan Channel ID',
  type: 'text',
  path: siteApiLycanChannelIdPath,
  validate: RequiredString,
  defaultValue: ''
};

export const lycanHostPathField = {
  id: 'lycanHostPath',
  label: 'Lycan Host Path',
  type: 'text',
  path: siteApiLycanHostPath,
  validate: RequiredString,
  defaultValue: 'https://search.es.rentivo.com:9243'
};

export const lycanSendCurrencyOnPriceRequestsField = {
  id: 'lycanSendCurrencyOnPriceRequests',
  label: 'Send Currency On Price Requests',
  type: 'switch',
  path: siteApiLycanSendCurrencyOnPriceRequestsPath,
  defaultValue: false
};


export const searchElasticSearchAppField = {
  id: 'searchElasticSearchApp',
  label: 'Elastic Search App',
  type: 'text',
  path: searchElasticSearchAppPath,
  validate: RequiredString
};

export const searchElasticSearchCredientialsField = {
  id: 'searchElasticSearchCredientials',
  label: 'Elastic Search Credientials',
  type: 'text',
  path: searchElasticSearchCredentialsPath,
  validate: RequiredString
};

export const searchResultsTotalHitsField = {
  id: 'searchResultsTotalHits',
  label: 'Total properties to index/search',
  type: 'number',
  path: searchResultsTotalHits,
  validate: RequiredNumber
};

export const searchFiltersLosActiveField = {
  id: 'searchFiltersLosActive',
  label: 'Enable LOS',
  type: 'switch',
  path: searchFiltersLosActivePath,
  defaultValue: false
};

export const searchFiltersLosShowFilterField = {
  id: 'searchFiltersLosShowFilter',
  label: 'Show LOS',
  type: 'switch',
  path: searchFiltersLosShowFilterPath,
  defaultValue: false
};

export const searchFiltersLosDefaultValueField = {
  id: 'searchFiltersLosDefaultValue',
  label: 'Default Value',
  type: 'select',
  options: [
    {label: 'Yes', value: 'yes'},
    {label: 'No', value: 'no'}
  ],
  path: searchFiltersLosDefaultValuePath,
  defaultValue: 'no'
};


// Adv
export const checkoutPaymentDefaultAcceptedPaymentBrandsField = {
  id: 'checkoutPaymentDefaultAcceptedPaymentBrands',
  label: 'Supported Payment Brands',
  type: 'repeater',
  fields: {
    type: 'select',
    options: [
      {label: 'Visa', value: 'visa'},
      {label: 'Mastercard', value: 'mastercard'},
      {label: 'Amex', value: 'amex'},
      {label: 'JCB', value: 'jcb'},
      {label: 'Master', value: 'master'},
      {label: 'Diners Club', value: 'diners_club'},
      {label: 'Stripe', value: 'stripe'},
      {label: 'Paypal', value: 'paypal'},
      {label: 'Amazon', value: 'amazon'}
    ]
  },
  addNewLabel: 'Add Payment Brand',
  path: checkoutPaymentDefaultAcceptedPaymentBrandsPath
};

// Adv
export const checkoutSuccessReservationIdField = {
  id: 'checkoutSuccessReservationId',
  label: 'Success Reservation ID Field',
  type: 'text',
  path: checkoutSuccessReservationIdPath,
  defaultValue: 'reservationExternalConnections[0].externalReservationId'
};


export const lycanAPI = [lycanChannelIdField, lycanHostPathField, lycanSendCurrencyOnPriceRequestsField];
export const elasticSearch = [
  searchElasticSearchAppField, 
  searchElasticSearchCredientialsField, 
  searchResultsTotalHitsField,
  [
    searchFiltersLosActiveField,
    searchFiltersLosShowFilterField,
    searchFiltersLosDefaultValueField
  ]
];
export const checkout = [
  checkoutPaymentDefaultAcceptedPaymentBrandsField,
  checkoutSuccessReservationIdField
];


export const allFields = flattenArray([lycanAPI, elasticSearch, checkout]);

export const fieldGroups = [
  {
    title: 'Lycan API',
    fields: lycanAPI
  },
  {
    title: 'Search',
    fields: elasticSearch
  },
  {
    title: 'Checkout',
    fields: checkout
  }
];
