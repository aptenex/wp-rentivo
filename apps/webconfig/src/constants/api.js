export const WP_API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:10013/' : '/wp-json/simba/v1/';
export const WP_API_SITE_CONFIG = `${WP_API_BASE_URL}siteConfig`;
export const WP_API_TRANSLATIONS = `${WP_API_BASE_URL}translations`;
export const WP_API_REDIRECTS = `${WP_API_BASE_URL}redirects`;
export const WP_API_CUSTOM_CODE = `${WP_API_BASE_URL}customCode`;
export const WP_API_ALL = `${WP_API_BASE_URL}webconfig`;