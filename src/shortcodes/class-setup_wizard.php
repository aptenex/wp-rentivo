<?php

namespace Rentivo_Simba\Shortcodes;

use Rentivo_Simba\Plugin_Data as Plugin_Data;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Setup_Wizard::class ) ) {
	/**
	 * The functionality shared between the admin and public-facing areas of the plugin.
	 *
	 * Useful for things like utilities or hooking into something that affects both back-end and front-end.
	 */
	final class Setup_Wizard extends Shortcode {
		/**
		 * An array of all the shortcode's possible attributes and their default values.
		 *
		 * @return array
		 */

		public function get_defaults(): array {
			return [

			];
		}

		/**
		 * Get the specified parameter from $_REQUEST ($_GET then $_POST).
		 *
		 * @link https://secure.php.net/manual/reserved.variables.request.php About $_REQUEST
		 *
		 * @see  filter_input() We could have used this, but there were a number of things to workaround, particularly
		 *                      when manually changing _GET or _POST or modifying _GET during a _POST request.
		 *
		 * @param array  $atts    The shortcode attributes.
		 * @param string $content The value from using an enclosing (not self-closing) shortcode.
		 *
		 * @return mixed The value of the query parameter, if any.
		 */
		public function process_shortcode( array $atts = [], string $content = '' ) {
            //$atts = $this->get_atts( $atts );
            //print_r('WOO');
		    //die();
            //$version = Plugin_Data::plugin_version();

            //$content = '<div id="web-config-root">TEST</div>';
            //return $content;
            //return '<div id="web-config-root">TEST</div>';
		}
	}
}
