<?php

namespace Rentivo_Simba\Admin;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( ActivityMonitor::class ) ) {
	class ActivityMonitor {
	    public function filter_activity_actions($null, $log_data) {
            if ($log_data['graphql_single_name'] == 'none') {
                return false;
            }

	        return $null;
        }
	}
}
