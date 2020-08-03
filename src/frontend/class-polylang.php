<?php

namespace Rentivo_Simba\Frontend;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Polylang::class ) ) {
	class Polylang {

        public function __construct() {

        }

        public function modify_taxonomy() {
            // Expose languages in Rest API
            $language_args = get_taxonomy( 'language' ); // returns an object
            $language_args->show_in_rest = true;
            register_taxonomy( 'language', 'post', (array) $language_args );
        }

        public function json_api_languages_callback(\WP_REST_Request $request) {
            $default = pll_default_language();
            $languages = pll_languages_list();

            $data = [
                "wordpress_id" => 1,
                "defaultLang" => $default,
                "languages" => $languages
            ];

            return new \WP_REST_Response( $data, 200 );
        }

        public function json_api_languages() {
            // register_rest_route() handles more arguments but we are going to stick to the basics for now.
            register_rest_route( 'simba/v1', '/languages', array(
                'methods'  => \WP_REST_Server::READABLE,
                'callback' => array($this, 'json_api_languages_callback'),
                'update_callback' => null,
                'schema' => null,
            ) );
        }

	}
}

/*
 * print_r('TESTING');
            print_r(get_field('en_site_config', 'options'));
 */
