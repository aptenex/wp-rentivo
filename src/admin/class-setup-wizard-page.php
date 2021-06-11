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
            add_action( 'admin_menu', array($this, 'add_menu_item') );
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
            ?>
            <script>
                window.apps = window.apps === undefined ? {} : window.apps;
                window.apps.base_url = "<?php echo site_url(); ?>/<?php echo $graphql; ?>";
                console.log(window.apps);
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
