<?php

namespace Rentivo_Simba\Shortcodes;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Manage_Shortcodes::class ) ) {
	/**
	 * Handle all the shortcodes.
	 */
	class Manage_Shortcodes {
		/**
		 * Shortcodes to register.
		 *
		 * Enter the name of each class (without namespace) from within the `Rentivo_Simba\Shortcodes` namespace.
		 */
		public $shortcode_classes = [
			'TK_Request',
		];

		/**
		 * Register all of the hard-coded shortcode classes.
		 *
		 * @see \Rentivo_Simba\Shortcodes\Shortcode::register()
		 */
		public function register_all_shortcodes(): void {
			foreach ( $this->shortcode_classes as $shortcode_class ) {
				$shortcode_class = __NAMESPACE__ . '\\' . $shortcode_class;

				( new $shortcode_class )->register();
			}

		}
	}
}
