<?php

namespace Rentivo_Simba\Admin;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( ActivityMonitor::class ) ) {
	class ActivityMonitor {
	    public function filter_activity_actions($null, $log_data) {
            if (strpos(strtolower($log_data['title']), 'post type') !== false) {
                return false;
            }

	        return $null;
        }
	}
}
