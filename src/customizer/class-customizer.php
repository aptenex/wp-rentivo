<?php

namespace Rentivo_Simba\Customizer;

use Rentivo_Simba\Common\Settings as Settings;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Customizer::class ) ) {
	class Customizer {
		private $settings;

		/**
		 * Initialize the class and set its properties.
		 */
		public function __construct() {
			$this->settings = new Settings();
		}

		public function remove_customizer_menu() {
            global $menu;
            global $submenu;
            $menu[60][0] = 'Themes';
            unset($submenu['themes.php'][6]); // remove customize link
        }

	}
}
