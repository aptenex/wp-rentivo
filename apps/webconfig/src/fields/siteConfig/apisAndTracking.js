import {
  RequiredString
} from '../../utils/rules';
import { flattenArray } from '../../utils/arrays';

/* eslint-disable no-unused-vars */
export const sitePath = 'site';
export const siteApiPath = `${sitePath}.api`;
export const siteApiGoogleApiKeyPath = `${siteApiPath}.googleApiKey`;
export const siteApiTrackingPath = `${siteApiPath}.tracking`;

export const siteApiTrackingGTMPath = `${siteApiTrackingPath}.googleTagManager`;
export const siteApiTrackingGTMActivePath = `${siteApiTrackingGTMPath}.active`;
export const siteApiTrackingGTMTrackingIdPath = `${siteApiTrackingGTMPath}.trackingId`;

export const siteApiTrackingGAPath = `${siteApiTrackingPath}.googleAnalytics`;
export const siteApiTrackingGAActivePath = `${siteApiTrackingGAPath}.active`;
export const siteApiTrackingGATrackingIdPath = `${siteApiTrackingGAPath}.trackingId`;

export const siteApiTrackingGoogleAdsPath = `${siteApiTrackingPath}.googleAds`;
export const siteApiTrackingGoogleAdsActivePath = `${siteApiTrackingGoogleAdsPath}.active`;
export const siteApiTrackingGoogleAdsTrackingIdPath = `${siteApiTrackingGoogleAdsPath}.trackingId`;

export const siteApiTrackingHotjarPath = `${siteApiTrackingPath}.hotjar`;
export const siteApiTrackingHotjarActivePath = `${siteApiTrackingHotjarPath}.active`;
export const siteApiTrackingHotjarTrackingIdPath = `${siteApiTrackingHotjarPath}.trackingId`;

export const siteApiTrackingFBPath = `${siteApiTrackingPath}.facebookPixel`;
export const siteApiTrackingFBActivePath = `${siteApiTrackingFBPath}.active`;
export const siteApiTrackingFBTrackingIdPath = `${siteApiTrackingFBPath}.trackingId`;

export const siteApiMapPath = `${siteApiPath}.map`;
export const siteApiMapKeyPath = `${siteApiMapPath}.mapKey`;
export const siteApiMapStylePath = `${siteApiMapPath}.mapStyle`;
/* eslint-enable no-return-assign, no-param-reassign */

export const googleApiKeyField = {
  id: 'googleApiKey',
  label: 'Google API Key',
  helperText: 'Google API key with Places API enabled. https://developers.google.com/maps/documentation/places/web-service/overview',
  type: 'text',
  path: siteApiGoogleApiKeyPath,
  validate: RequiredString,
  defaultValue: ''
};

export const mapKeyField = {
  id: 'siteApiMapKey',
  label: 'Mapbox API Key',
  helperText: 'Required for mapping. Sign up here: https://www.mapbox.com/',
  type: 'text',
  path: siteApiMapKeyPath,
  validate: RequiredString,
  defaultValue: ''
};

export const mapStyleField = {
  id: 'siteApiMapStyle',
  label: 'Mapbox Style',
  helperText: 'Gallery of styles: https://www.mapbox.com/gallery/',
  type: 'text',
  path: siteApiMapStylePath,
  validate: RequiredString,
  defaultValue: 'mapbox://styles/mapbox/streets-v11'
};

export const GTMActiveField = {
  id: 'GTMActive',
  label: 'Activate Google Tag Manager',
  type: 'switch',
  path: siteApiTrackingGTMActivePath,
  defaultValue: false
};

export const GTMTrackingIdField = {
  id: 'GTMTrackingId',
  label: 'Google Tag Manager Tracking ID',
  placeholder: 'GTM-XXXXXX',
  helperText: 'Instructions: https://support.google.com/tagmanager/answer/6103696',
  type: 'text',
  path: siteApiTrackingGTMTrackingIdPath,
  defaultValue: ''
};

export const GAActiveField = {
  id: 'GAActive',
  label: 'Activate Google Analytics',
  type: 'switch',
  path: siteApiTrackingGAActivePath,
  defaultValue: false
};

export const GATrackingIdField = {
  id: 'GATrackingId',
  label: 'Google Analytics Tracking ID',
  placeholder: 'GA-XXXXX-XX',
  type: 'text',
  path: siteApiTrackingGATrackingIdPath,
  defaultValue: ''
};

export const googleAdsActiveField = {
  id: 'googleAdsActive',
  label: 'Activate Google Ads',
  type: 'switch',
  path: siteApiTrackingGoogleAdsActivePath,
  defaultValue: false
};

export const googleAdsTrackingIdField = {
  id: 'googleAdsTrackingId',
  label: 'Google Ads Tracking ID',
  type: 'text',
  path: siteApiTrackingGoogleAdsTrackingIdPath,
  defaultValue: ''
};

export const FBActiveField = {
  id: 'FBActive',
  label: 'Activate Facebook Pixel',
  type: 'switch',
  path: siteApiTrackingFBActivePath,
  defaultValue: false
};

export const FBTrackingIdField = {
  id: 'FBTrackingId',
  label: 'Facebook Pixel Tracking ID',
  type: 'text',
  path: siteApiTrackingFBTrackingIdPath,
  defaultValue: ''
};

export const hotjarActiveField = {
  id: 'hotjarActive',
  label: 'Activate Hotjar',
  type: 'switch',
  path: siteApiTrackingHotjarActivePath,
  defaultValue: false
};

export const hotjarTrackingIdField = {
  id: 'hotjarTrackingId',
  label: 'Hotjar Tracking ID',
  type: 'text',
  path: siteApiTrackingHotjarTrackingIdPath,
  defaultValue: ''
};

export const googleApis = [googleApiKeyField];
export const mapApis = [mapKeyField, mapStyleField];
export const tracking = [GTMActiveField, GTMTrackingIdField, GAActiveField, GATrackingIdField, googleAdsActiveField, googleAdsTrackingIdField, FBActiveField, FBTrackingIdField, hotjarActiveField, hotjarTrackingIdField];
export const allFields = flattenArray([googleApis, mapApis, tracking]);

export const fieldGroups = [
  {
    title: 'Google APIs',
    fields: googleApis
  },
  {
    title: 'Map APIs',
    fields: mapApis
  },
  {
    title: 'Tracking',
    fields: tracking
  }
];
