<?php

namespace Rentivo_Simba\Admin;
use Rentivo_Simba\Plugin_Data as Plugin_Data;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( WebConfigPage::class ) ) {
	class WebConfigPage {

        public function __construct() {
            // add_action( 'admin_menu', array($this, 'add_menu_item') );
            add_action( 'admin_head', array($this, 'add_admin_head_code') );
            add_action( 'admin_enqueue_scripts', array($this, 'register_page_scripts') );
            add_action( 'admin_enqueue_scripts', array($this, 'load_page_scripts') );
        }

        public function add_menu_item() {
            add_menu_page(
                __( 'Web Config', Plugin_Data::plugin_text_domain() ),
                __( 'Web config', Plugin_Data::plugin_text_domain() ),
                'manage_options',
                'web-config',
                array($this, 'add_page_contents'),
                'dashicons-schedule',
                3
            );
        }

        public function add_admin_head_code() {
            $graphql = function_exists('get_graphql_setting') ? get_graphql_setting( 'graphql_endpoint', 'graphql' ) : 'graphql';

            if( is_user_logged_in() ) { // check if there is a logged in user 
              $user = wp_get_current_user(); // getting & setting the current user 
              $roles = ( array ) $user->roles; // obtaining the role 
              $rolesReadyForJs = [];
              foreach ($roles as $role_name) {
                  array_push($rolesReadyForJs, "'$role_name'");
              }

              $rolesReadyForJs = join(', ', $rolesReadyForJs);
            } else {
              $rolesReadyForJs = '';
            }

            $access_token = get_option('wpcmd_site_access_token');

            ?>
            <script>
                window.apps = window.apps === undefined ? {} : window.apps;
                window.apps.base_url = "<?php echo site_url(); ?>/<?php echo $graphql; ?>";
                window.apps.user_roles = [<?php echo $rolesReadyForJs; ?>];
                window.apps.access_token = "<?php if($access_token) { echo $access_token; } else { echo ''; } ?>";
            </script>
            <?php
        }

        public function add_page_contents() {
            ?>
            <div id="root"></div>
            <?php
        }

        public function register_page_scripts() {
            wp_register_style( "web-config", plugin_dir_url( __FILE__ ) . "css/webconfig/main.css", [], time(), false );
            wp_register_script( "web-config", plugin_dir_url( __FILE__ ) . "js/webconfig/main.js", [], time(), true );
        }

        function load_page_scripts( $hook ) {
            // Load only on ?page=web-config
            if( $hook != 'toplevel_page_web-config' ) {
                return;
            }

            // Load style & scripts.
            wp_enqueue_style( 'web-config' );
            wp_enqueue_script( 'web-config' );
        }


    }
}
