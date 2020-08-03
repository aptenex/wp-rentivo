<?php

namespace Rentivo_Simba\Common\Utilities;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( TextDomain::class ) ) {
	class TextDomain {
		public function __w($string, $textdomain = 'rentivo-simba') {
            if(function_exists('pll__')) {
                return pll__($string);
            } else {
                return __($string, $textdomain);
            }
        }

        public function _xw($string, $context = null, $textdomain = 'rentivo-simba') {
            if(function_exists('pll__')) {
                return pll__($string);
            } else {
                return _x($string, $context, $textdomain);
            }
        }
	}
}
