<?php
/**
 * The plugin bootstrap file
 *
 * https://github.com/cliffordp/rentivo-simba#plugin-structure
 * Introduction to the structure of this plugin's files:
 *
 * rentivo-simba/src/class-plugin_data.php - hard-coded information about the plugin, such as text domain
 * rentivo-simba/src/class-bootstrap.php - gets the plugin going, including setting required/recommended plugin dependencies
 *
 * rentivo-simba/src/frontend - public-facing functionality
 * rentivo-simba/src/admin - admin-specific functionality
 * rentivo-simba/src/common - functionality shared between the admin area and the public-facing parts
 *
 * rentivo-simba/src/common/utilities - generic functions for things like debugging, processing multidimensional arrays, handling datetimes, etc.
 * rentivo-simba/src/core - plugin core to register hooks, load files etc
 * rentivo-simba/src/customizer - WordPress Customizer functionality
 * rentivo-simba/src/shortcodes - where to create new shortcodes
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @package           Rentivo_Simba
 *
 * @wordpress-plugin
 * Plugin Name:       Rentivo Simba
 * Plugin URI:        https://www.rentivo.com/rentivo-simba-uri/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.11
 * Author:            Rentivo
 * Author URI:        https://www.rentivo.com/
 * License:           GPL version 3 or any later version
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       rentivo-simba
 * Domain Path:       /languages
 *
 ***
 *
 *     This plugin is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     any later version.
 *
 *     This plugin is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *     GNU General Public License for more details.
 *
 ***
 *
 *     This plugin was helped by Clifford Paulick's Plugin Boilerplate,
 *     available free at https://github.com/cliffordp/rentivo-simba
 *     You are invited to use it for your own WordPress projects.
 */

namespace Rentivo_Simba;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Autoloading, via Composer.
 *
 * @link https://getcomposer.org/doc/01-basic-usage.md#autoloading
 */
require_once( __DIR__ . '/vendor/autoload.php' );

// Define Constants

/**
 * Register Activation and Deactivation Hooks
 * This action is documented in src/core/class-activator.php
 */
register_activation_hook( __FILE__, [ __NAMESPACE__ . '\Core\Activator', 'activate' ] );

/**
 * The code that runs during plugin deactivation.
 * This action is documented src/core/class-deactivator.php
 */
register_deactivation_hook( __FILE__, [ __NAMESPACE__ . '\Core\Deactivator', 'deactivate' ] );

// Begin execution of the plugin.
( new Bootstrap() )->init();
