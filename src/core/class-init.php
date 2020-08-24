<?php

namespace Rentivo_Simba\Core;

use Rentivo_Simba\Admin as Admin;
use Rentivo_Simba\Common as Common;
use Rentivo_Simba\Customizer as Customizer;
use Rentivo_Simba\Frontend as Frontend;
use Rentivo_Simba\Shortcodes as Shortcodes;
use Rentivo_Simba\Plugin_Data as Plugin_Data;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
//$plugin_dir = ABSPATH . 'wp-content/plugins/rentivo-simba';
//$plugin_url = plugins_url( '../../inc/lzb/', __FILE__ );
//define( 'THEME_LZB_PATH', $plugin_dir . '/inc/lzb/' );
//define( 'THEME_LZB_URL', $plugin_url);
//equire_once THEME_LZB_PATH . 'lazy-blocks.php';

if ( ! class_exists( Init::class ) ) {
	/**
	 * The core plugin class.
	 * Defines internationalization, admin-specific hooks, and public-facing site hooks.
	 */
	class Init {

		/**
		 * The loader that's responsible for maintaining and registering all hooks that power
		 * the plugin.
		 *
		 * @var      Loader $loader Maintains and registers all hooks for the plugin.
		 */
		protected $loader;

		/**
		 * Initialize and define the core functionality of the plugin.
		 */
		public function __construct() {
			$this->load_dependencies();
			$this->set_locale();
			$this->define_common_hooks();
			$this->define_customizer_hooks();
			$this->define_admin_hooks();
			$this->define_public_hooks();
			$this->register_shortcodes();


			new Admin\CustomPostTypes();
            new Admin\CustomTaxonomies();

            $lzb = new Admin\CustomLazyBlocks();
            //$this->loader->add_filter( 'lzb/plugin_url', $lzb, 'theme_lzb_url' );
            $this->loader->add_action( 'plugins_loaded', $lzb, 'register_lazy_blocks' );

            /*
            // Custom Post Custom
            $this->loader->add_action( 'init', $customPostTypes, 'register_collections' );
            $this->loader->add_action( 'init', $customPostTypes, 'register_experiences' );

            // Custom Taxonomies
            $this->loader->add_action( 'init', $customTaxonomies, 'register_experience_taxonomy' );
            $this->loader->add_action( 'init', $customTaxonomies, 'register_experience_tags' );
            */

		}

		/**
		 * Loads the following required dependencies for this plugin.
		 *
		 * - Loader - Orchestrates the hooks of the plugin.
		 * - Internationalization_I18n - Defines internationalization functionality.
		 * - Admin - Defines all hooks for the admin area.
		 * - Frontend - Defines all hooks for the public side of the site.
		 */
		private function load_dependencies(): void {
			$this->loader = new Loader();
		}

		/**
		 * Define the locale for this plugin for internationalization.
		 *
		 * Uses the Internationalization_I18n class in order to set the domain and to register the hook
		 * with WordPress.
		 */
		private function set_locale(): void {
			$plugin_i18n = new Internationalization_I18n();

			$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
		}

		/**
		 * Register all of the hooks related to both the admin area and the public-facing functionality of the plugin.
		 */
		private function define_common_hooks(): void {
			$plugin_common = new Common\Common();

			// Example: $this->loader->add_filter( 'gform_currencies', $plugin_common, 'gf_currency_usd_whole_dollars', 50 );
		}

		/**
		 * Register all of the hooks related to the WordPress Customizer.
		 *
		 * Customizer must not be within Admin or Frontend or else it won't load properly.
		 * We could have included in Common, since it is the same loading logic, but we separate it out for sanity.
		 */
		private function define_customizer_hooks(): void {
			$plugin_customizer = new Customizer\Customizer();

			$this->loader->add_action( 'admin_menu', $plugin_customizer, 'remove_customizer_menu' );
		}

		/**
		 * Register all of the hooks related to the admin area functionality of the plugin.
		 * Also works during Ajax.
		 */
		private function define_admin_hooks(): void {
			if ( ! is_admin() ) {
				return;
			}

			$assets = new Admin\Assets();
			$acf = new Admin\Acf();
			$users = new Admin\Users();
            $scripts = new Admin\Scripts();
            $wpGraphQl = new Frontend\WPGraphQl();


            $this->loader->add_action( 'after_setup_theme', $scripts, 'run_scripts' );

			// Set up user stuff (including new roles)
            $this->loader->add_action( 'admin_init', $users, 'set_user_roles' );

			// Enqueue plugin's admin assets
			$this->loader->add_action( 'admin_enqueue_scripts', $assets, 'enqueue_styles' );
			$this->loader->add_action( 'admin_enqueue_scripts', $assets, 'enqueue_scripts' );


            // Settings
            $settings = new Admin\Settings();
            //$this->loader->add_action( 'admin_menu', $settings, 'add_plugin_admin_menu' );
            //$this->loader->add_action( 'admin_menu', $settings, 'hide_admin_sub_menu_items' );
            $this->loader->add_action( 'admin_menu', $settings, 'admin_menu', 100 );
            $this->loader->add_action( 'in_admin_header', $settings, 'admin_notices', 100 );
            $this->loader->add_action( 'admin_bar_menu', $settings, 'admin_bar', 999 );
            $this->loader->add_action( 'wp_dashboard_setup', $settings, 'dashboard_setup', 999 );

            // Gutenburg
			$gutenburgBlocks = new Admin\GutenburgBlocks();
            $this->loader->add_action( 'admin_menu', $gutenburgBlocks, 'add_reusable_blocks_admin_menu' );

			// Plugin action links
			$this->loader->add_filter( 'plugin_action_links_' . Plugin_Data::plugin_basename(), $settings, 'add_action_links' );

			// Acf
			$this->loader->add_action( 'acf/init', $acf, 'init' );
			//$this->loader->add_action( 'acf/init', $acf, 'build_core_string_translations' );
			$this->loader->add_action( 'acf/settings/default_language', $acf, 'settings_default_language' );
			$this->loader->add_action( 'acf/settings/show_admin', $acf, 'show_admin' );
			$this->loader->add_filter( 'acf/settings/save_json', $acf, 'json_save_point' );
			$this->loader->add_filter( 'acf/settings/load_json', $acf, 'json_load_point' );
			$this->loader->add_filter( 'acf/location/rule_types', $acf, 'pageOptions_rule_types' );
			$this->loader->add_filter( 'acf/location/rule_values/page_type', $acf, 'pageOptions_rules_values' );
			$this->loader->add_filter( 'acf/location/rule_match/page_type', $acf, 'pageOptions_rules_match', 10, 4 );

            // GraphQl
            $this->loader->add_filter( 'wpgraphql_acf_supported_fields', $wpGraphQl, 'support_custom_acf_fields' );
		}

		/**
		 * Register all of the hooks related to the public-facing functionality of the plugin.
		 * Also works during Ajax.
		 */
		private function define_public_hooks(): void {
			if (
				is_admin()
				&& ! wp_doing_ajax()
			) {
				return;
			}

			$assets = new Frontend\Assets();
			$polylang = new Frontend\Polylang();
            $wpGraphQl = new Frontend\WPGraphQl();
            $simbaApi = new Frontend\WPRentivoSimbaAPI();

			// Polylang...
            $this->loader->add_action( 'init', $polylang, 'modify_taxonomy', 11 );
            $this->loader->add_action( 'rest_api_init', $polylang, 'json_api_languages' );

            // GraphQl
            $this->loader->add_action( 'graphql_register_types', $wpGraphQl, 'register_endpoints' );
            $this->loader->add_action( 'plugins_loaded', $wpGraphQl, 'testStuff' );
            $this->loader->add_filter( 'wpgraphql_acf_register_graphql_field', $wpGraphQl, 'register_custom_acf_fields', 10, 4 );

            // Simba API
            $this->loader->add_action('rest_api_init', $simbaApi, 'register_endpoints');

			// Enqueue plugin's front-end assets
			$this->loader->add_action( 'wp_enqueue_scripts', $assets, 'enqueue_styles' );
			$this->loader->add_action( 'wp_enqueue_scripts', $assets, 'enqueue_scripts' );


            //echo '<pre>';
            //print_r(get_post_custom(284));
            //echo '</pre>';
            //die();
		}

		/**
		 * Register all of the shortcodes.
		 */
		private function register_shortcodes(): void {
			( new Shortcodes\Manage_Shortcodes() )->register_all_shortcodes();
		}

		/**
		 * Run the loader to execute all of the hooks with WordPress.
		 */
		public function run(): void {
			$this->loader->run();
		}

		/**
		 * The reference to the class that orchestrates the hooks with the plugin.
		 *
		 * @return Loader Orchestrates the hooks of the plugin.
		 */
		public function get_loader(): Loader {
			return $this->loader;
		}
	}
}
