<?php

namespace Rentivo_Simba\Core;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Activator::class ) ) {
	/**
	 * Fired during plugin activation
	 *
	 * This class defines all code necessary to run during the plugin's activation.
	 **/
	class Activator {

		/**
		 * Short Description.
		 *
		 * Long Description.
		 */
		public static function activate() {
		    // $siteConfig = get_field('site_config', 'options');

            $translations = get_field('translations', 'options');
            if(!$translations) {
                update_field( 'translations', "{\n  \"components.search.PageHeader.default.page.subtitle\": \" \",\n  \"components.search.PageHeader.default.page.title\": \"Holiday Homes\",\n  \"components.search.PageHeader.default.seo.desc\": \"We have an large collection of holiday homes. Book online today and get the best price guaranteed.\",\n  \"components.search.PageHeader.default.seo.title\": \"Holiday Homes {sep} {siteTitle}\",\n\n  \"components.search.PageHeader.place.page.subtitle\": \" \",\n  \"components.search.PageHeader.place.page.title\": \"{placeName} Holiday Homes\",\n  \"components.search.PageHeader.place.seo.desc\": \"We have an large collection of holiday homes in {placeName}. Book online today and get the best price guaranteed.\",\n  \"components.search.PageHeader.place.seo.title\": \"{placeName} Holiday Homes {sep} {siteTitle}\",\n\n  \"components.search.PageHeader.collection.page.subtitle\": \" \",\n  \"components.search.PageHeader.collection.page.title\": \"Holiday Homes in {collectionName}\",\n  \"components.search.PageHeader.collection.seo.desc\": \"We have an large collection of holiday homes in {collectionName}. Book online and best price guaranteed.\",\n  \"components.search.PageHeader.collection.seo.title\": \"Holiday Homes in {collectionName} {sep} {siteTitle}\",\n\n  \"components.property.PropertyHeader.page.subtitle\": \"{headline}, {bedrooms} bedroom {type} in {location}\",\n  \"components.property.PropertyHeader.page.title\": \"{headline}\",\n  \"components.property.PropertyHead.seo.desc\": \"{headline}, holiday home located in {location}. Book online today and get the best price guaranteed.\",\n  \"components.property.PropertyHead.seo.title\": \"{headline}, {location} {sep} {siteTitle}\"\n}\n", 'option' );
            }

            $redirects = get_field('redirects', 'options');
            if(!$redirects) {
                update_field('redirects', "{\n  \"redirects\": []\n}", 'options');
            }

            $headCustomHTML = get_field('headCustomHTML', 'options');
            if(!$headCustomHTML) {
                update_field('headCustomHTML', "<style type=\"text/css\">\n\n</style>\n\n<script type=\"text/javascript\">\n\t// Custom JS\n\t\n</script>", 'options');
            }

            $closingBodyHTMLString = get_field('closingBodyCustomHTML', 'options');
            if(!$closingBodyHTMLString) {
                update_field('closingBodyCustomHTML', "<script type=\"text/javascript\">\n  \n</script>", 'options');
            }

		}
	}
}
