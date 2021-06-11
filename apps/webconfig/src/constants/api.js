export const WP_API_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:10013/' : '/wp-json/simba/v1/';
export const WP_API_SITE_CONFIG = `${WP_API_BASE_URL}siteConfig`;
