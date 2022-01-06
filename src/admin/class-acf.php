<?php

namespace Rentivo_Simba\Admin;

use Rentivo_Simba\Admin as Admin;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Acf::class ) ) {
	class Acf {

        public function init() {

            $this->users = new Admin\Users();

            $optionsSiteConfig = get_field('site_config', 'options');
            if($optionsSiteConfig) {
                $siteConfig = json_decode($optionsSiteConfig);
                $api = $siteConfig->site->api;
                if($api->googleApiKey) {
                    acf_update_setting('google_api_key', $api->googleApiKey);
                }
            }

            if( function_exists('acf_add_options_page') and $this->users->is_admin()) {

                // Add parent.
                $parent = acf_add_options_page(array(
                    'page_title'      => __( 'Website Settings', 'rentivo-simba' ),
                    'menu_title'      => __( 'Website Settings', 'rentivo-simba' ),
                    'menu_slug'       => 'website-settings',
                    'capability'      => 'edit_posts',
                    'redirect'		=> true,
                    'show_in_graphql' => true
                ));

                // Add sub page.
                $child = acf_add_options_sub_page(array(
                    'page_title'  => __('Config'),
                    'menu_title'  => __('Config'),
                    'parent_slug' => $parent['menu_slug'],
                    'show_in_graphql' => true
                    //'menu_slug'       => 'config-settings',
                    //'show_in_graphql' => true
                ));

                // Add sub page.
                $child = acf_add_options_sub_page(array(
                    'page_title'  => __('Translations'),
                    'menu_title'  => __('Translations'),
                    'parent_slug' => $parent['menu_slug'],
                    'show_in_graphql' => true
                    //'menu_slug'       => 'config-settings',
                    //'show_in_graphql' => true
                ));

                // Add sub page.
                $child = acf_add_options_sub_page(array(
                    'page_title'  => __('Redirects'),
                    'menu_title'  => __('Redirects'),
                    'parent_slug' => $parent['menu_slug'],
                    'show_in_graphql' => true
                    //'menu_slug'       => 'config-settings',
                    //'show_in_graphql' => true
                ));

                // Add sub page.
                $child = acf_add_options_sub_page(array(
                    'page_title'  => __('Custom HTML, CSS & JavaScript'),
                    'menu_title'  => __('HTML, CSS & JS'),
                    'parent_slug' => $parent['menu_slug'],
                    'show_in_graphql' => true
                    //'menu_slug'       => 'config-settings',
                    //'show_in_graphql' => true
                ));

                // Add sub page.
                /*
                $child = acf_add_options_sub_page(array(
                    'page_title'  => __('Footer'),
                    'menu_title'  => __('Footer'),
                    'parent_slug' => $parent['menu_slug'],
                    'show_in_graphql' => true
                    //'menu_slug'       => 'config-settings',
                    //'show_in_graphql' => true
                ));*/

                // Add sub page.
                /*
                $child = acf_add_options_sub_page(array(
                    'page_title'  => __('Theme'),
                    'menu_title'  => __('Theme'),
                    'parent_slug' => $parent['menu_slug'],
                    'show_in_graphql' => true
                    //'menu_slug'       => 'config-settings',
                    //'show_in_graphql' => true
                ));*/

                //acf_add_options_sub_page('Config');
                //acf_add_options_sub_page('Translations');
                //acf_add_options_sub_page('Footer');
                //acf_add_options_sub_page('General');
                //acf_add_options_sub_page('Search');
            }

            /*
            $optionsSettings = get_field('settings', 'option');
            $apiKey = $optionsSettings['google_maps_api_key'];
            if($apiKey) {
                acf_update_setting('google_api_key', $apiKey);
            }*/
        }

        public function settings_default_language($language) {
            return 'en';
        }

        public function show_admin( $show ) {
            $user = wp_get_current_user();
            return ($user->data->user_login == 'rentivo'); // Only show custom fields if admin is "rentivo"
        }


        public function json_save_point( $path ) {
            $path = plugin_dir_path( dirname( __FILE__ ) ) . 'acf-json';
            return $path;
        }

        public function  json_load_point( $paths ) {
            unset($paths[0]);
            $paths[] = plugin_dir_path( dirname( __FILE__ ) ) . 'acf-json';
            return $paths;
        }

        public function pageOptions_rule_types ($choices) {
            $choices['Page Options']['page_type'] = 'Page Type';
            $choices['Other']['no_show'] = 'Do Not Show';
            return $choices;
        }

        public function pageOptions_rules_values( $field ) {
            $field_key = 'field_5ddfec01b97a0'; //
            $field = get_field_object($field_key);
            return $field['choices'];
        }

        public function pageOptions_rules_match( $match, $rule, $options, $field_group ) {
            $value = get_field('page_type', $options['post_id']);

            if($rule['operator'] == "==") {
                $match = ( $value == $rule['value'] );
            } elseif($rule['operator'] == "!=") {
                $match = ( $value != $rule['value'] );
            }

            return $match;
        }


        public function build_core_string_translations() {
            $plugin_dir = ABSPATH . 'wp-content/plugins/rentivo-simba/';
            $stringsFile = file_get_contents($plugin_dir. 'src/intl/en.json');
            $strings = json_decode($stringsFile, true);

            foreach ($strings as $key => $value) {
                acf_add_local_field(array(
                	'key' => $key,
                	'label' => $key,
                	'name' => $key,
                	'type' => 'text',
                	'default_value' => $value,
                	'parent' => 'field_5e4bfa1f8ef4a'
                ));
            }


        }

        /*
        public function acf_google_map_api( $api ){

            $api['key'] = 'xxx';

            return $api;

        }*/

	}
}
