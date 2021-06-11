import {
  RequiredString
} from '../../utils/rules';
import { flattenArray } from '../../utils/arrays';

/* eslint-disable no-unused-vars */
export const sitePath = 'site';
export const siteApiPath = `${sitePath}.api`;
export const siteApiLycanPath = `${siteApiPath}.lycan`;
export const siteApiLycanChannelIdPath = `${siteApiLycanPath}.channelId`;
export const siteApiLycanHostPath = `${siteApiLycanPath}.host`;
export const siteApiLycanSendCurrencyOnPriceRequestsPath = `${siteApiLycanPath}.sendCurrencyOnPriceRequests`;

/*
"lycan": {
        "channelId": "120a0ed1-c841-4531-968f-d1d65209ccc0",
        "host": "https://search.es.rentivo.com:9243",
        "sendCurrencyOnPriceRequests": false
      },

      "googleApiKey": "AIzaSyBpUyxFM1ORsk7scdoW54MtLiq1pfFYFMw",
      "tracking": {
        "debug": false,
        "environments": ["production", "development"],
        "googleTagManager": {
          "active": true,
          "autoStart": true,
          "defaultDataLayer": {
            "platform": "rentivo"
          },
          "trackingId": "GTM-M4WLHWN",
          "cookieFlags": "secure;samesite=none"
        },
        "googleAnalytics": {
          "active": true,
          "head": true,
          "trackingId": "UA-34358122-1",
          "autoStart": true,
          "anonymize": true,
          "cookieFlags": "secure;samesite=none"
        },
        "googleAds": {
          "active": false,
          "head": true,
          "trackingId": "YOUR_GOOGLE_ADS_TRACKING_ID",
          "anonymize": true,
          "cookieFlags": "secure;samesite=none"
        },
        "hotjar": {
          "active": false,
          "head": true,
          "trackingId": "YOUR_HOTJAR_ID",
          "snippetVersion": "6"
        },
        "facebookPixel": {
          "active": false,
          "head": true,
          "autoStart": true,
          "trackingId": ""
        }
 */

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

export const lycanAPI = [lycanChannelIdField, lycanHostPathField, lycanSendCurrencyOnPriceRequestsField];
export const allFields = flattenArray([lycanAPI]);

export const fieldGroups = [
  {
    title: 'Lycan API',
    fields: lycanAPI
  }
];
