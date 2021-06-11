<?php

namespace Rentivo_Simba\Admin;

use Rentivo_Simba\Plugin_Data as Plugin_Data;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Assets::class ) ) {
	/**
	 * Enqueues the admin-specific assets.
	 */
	class Assets {

		/**
		 * Register the stylesheets for the admin area.
		 */
		public function enqueue_styles(): void {
			$ext = 'css';
			//$ext = 'min.css'; // TODO: ---- This needs to be minified

			if (
				defined( 'SCRIPT_DEBUG' )
				&& SCRIPT_DEBUG
			) {
				$ext = 'css';
			}

			wp_enqueue_style( Plugin_Data::plugin_text_domain(), plugin_dir_url( __FILE__ ) . "css/style.$ext", [], Plugin_Data::plugin_version(), 'all' );
		}

		/**
		 * Register the JavaScript for the admin area.
		 */
		public function enqueue_scripts(): void {
			$ext = 'min.js';

			if (
				defined( 'SCRIPT_DEBUG' )
				&& SCRIPT_DEBUG
			) {
				$ext = 'js';
			}

			wp_enqueue_script( Plugin_Data::plugin_text_domain(), plugin_dir_url( __FILE__ ) . "js/script.$ext", [ 'jquery' ], Plugin_Data::plugin_version(), false );
		}

		/*
        public function enqueue_webconfig_scripts() {
            wp_enqueue_style( Plugin_Data::plugin_text_domain(), plugin_dir_url( __FILE__ ) . "css/webconfig/main.css", [], time(), 'all' );
            wp_enqueue_script( Plugin_Data::plugin_text_domain(), plugin_dir_url( __FILE__ ) . "js/webconfig/main.js", [], time(), false );
        }*/

	}
}
