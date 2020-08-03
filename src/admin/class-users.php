<?php

namespace Rentivo_Simba\Admin;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Users::class ) ) {
	class Users {
	    public function set_user_roles() {
            add_role( 'owner', 'Site Owner', get_role( 'administrator' )->capabilities );
        }

        public function is_user() {
            $user = wp_get_current_user();
            if ((!is_super_admin() and !is_admin()) or in_array( 'owner', (array) $user->roles )) {
                return true;
            } else {
                return false;
            }
        }
	}
}
