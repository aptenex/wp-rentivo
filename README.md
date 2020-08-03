# Rentivo Simba with Support for Composer, PHP Namespaces, and WordPress Customizer
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->


## Features

* The Boilerplate is based on the [Plugin API](http://codex.wordpress.org/Plugin_API), [Coding Standards](http://codex.wordpress.org/WordPress_Coding_Standards), and [Documentation Standards](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/php/).
* All classes, functions, and variables are documented so that you know what you need to change.
* The Boilerplate uses a strict file organization scheme that corresponds both to the WordPress Plugin Repository structure, and that makes it easy to organize the files that compose the plugin.
* The project includes a `.pot` file as a starting point for internationalization.

### Highlights

* Well documented throughout to help you get up and running quickly
* Uses Composer, Sass (.scss), npm, and gulp to build the plugin and its assets (minifying CSS and JS)
* Displays a wp-admin error notice to administrators if the required version of PHP is not met
* Displays a wp-admin error notice to administrators if a required third-party plugin (e.g. WooCommerce) is not active
* Easily add a new shortcode by extending the abstract `Shortcode` class and adding to the array of shortcodes in the `Manage_Shortcodes` class
* Adds a wp-admin Settings page with a link to the plugin's options in the WordPress Customizer
* Includes a custom *Sortable Checkboxes* control in the WordPress Customizer and examples how to use it (unfinished)
* Includes a number of generally-helpful utility functions, such as getting all public post types, flattening an array of unknown dimensions, and option getters

## Installation

The Boilerplate can be installed directly into your plugins folder "as-is". You will want to rename it and the classes inside of it to fit your needs.

* Copy this *rentivo-simba* repository/directory to your *wp-content/plugins* directory and rename your new plugin's directory
* Delete the `.all-contributorsrc` file
* Perform a ***case-sensitive*** *search and replace* at the project level, as follows:
    1. Rename the `rentivo-simba` directory to `rentivo-simba`. **This is your new plugin directory and must match your text domain.**
    1. Find the text `rentivo-simba` and replace with `rentivo-simba` in all files
    1. **If you will be publishing your plugin to WordPress.org,** find the text `Plugin_Data::plugin_text_domain()` and replace with `rentivo-simba` in all files &mdash; and then you might not need the `use` import of the `Plugin_Data` class and could remove it as well
    1. Find the text `rentivo_simba` and replace with `your_plugin_name` in all files
    1. Find the text `Rentivo Simba` and replace with `Your Plugin Name` in all files
    1. Find the text `Rentivo_Simba` and replace with `Your_Plugin_Name` in all files (the *namespace*)
    1. Rename the `pot` file under `languages` and replace the string `rentivo-simba` with `rentivo-simba`
    1. Find the text `https://www.rentivo.com/` and replace with your URI in all files
    1. Find the text `Rentivo` and replace with your name in all files
    1. Find the text `support@rentivo.com` and replace with your email address in `composer.json`
    1. Find the text `rentivo` and replace with your WordPress.org username (or delete it) in `readme.txt`
    1. Find the text `aptenex` and replace with whatever you want [as your vendor name](https://getcomposer.org/doc/04-schema.md#name)) in `composer.json` (such as your GitHub username)
    1. Make other edits to `readme.txt` as appropriate for your own plugin
* Make sure everything in `composer.json` is appropriate to your project.
    1. You do not need `tgmpa/tgm-plugin-activation` if your plugin does not require or recommend any other plugins or themes.
    1. Make sure to update the main plugin file's logic accordingly if you fully remove this library.
    1. Make sure to update the main plugin file's class properties:
        1. `$min_php`
        1. `$required_theme`
        1. `$required_plugins`
* Make sure everything in `package.json` is also appropriate to your project.
* Run Composer `install`
* Run npm `install`
* Activate the plugin
* Check if everything's working as it should:
    1. Plugin is able to be activated without any errors
* If it works (as it should), ***delete THIS README.md FILE***

### Using Composer

#### Getting Started

Visit https://getcomposer.org/ to learn all about it.

Here are some quick notes about Composer, in general, and this project's use of it:
1. You need to [install Composer](https://getcomposer.org/download/) on your desktop/laptop, not your server. You can download it right into your `rentivo-simba` directory.
1. The `composer.json` file is the *instructions* file that tells the `composer.phar` how to build your `vendor` directory (which includes the autoloader), and possibly do other things.
1. Run `php composer.phar install` to generate your `composer.lock` file.
1. Because `composer.json` has `"optimize-autoloader": true` inside the config key, *you will need to run Composer's `update` if you ever add a new PHP class*
    1. See https://getcomposer.org/doc/articles/autoloader-optimization.md for more details.
    1. It is set this way to lean toward distribution convenience more than development convenience.

### Using NPM

#### Getting Started

Visit https://www.npmjs.com/ to learn all about it.

### Using GULP

#### Getting Started

Visit https://gulpjs.com/docs/en/getting-started/quick-start

Here are some quick tips to use the functionality for this plugin:
1. You need NPM installed on your desktop/laptop, not your server.
1. The `package.json` file is the *instructions* file that tells NPM how to build the `node_modules` directory.
1. Run `npm install` to generate your `package-lock.json` file.
1. After that you can edit the scss files in the `development` directory and compile it by running gulp.
1. During development, run `npm run start` to have gulp watch for any changes in the `development` directories and compile the files automatically.
1. _Leave your terminal open until done with development. Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to end the watcher._
1. When done with development (before creating the production ready zip file), run `npm build` so every file gets compiled and minified into the plugin's appropriate asset folders.

#### Generating and Distributing the .zip

1. **Once ready to build the finalized .zip to distribute to your site or to others...**
    1. `php composer.phar archive --file rentivo-simba` *(name yours correctly)*
    1. Because we did not set a `--dir` argument for the `archive` command, Composer will create the .zip right in the project's directory. *#Convenient!*
1. Unzip this newly-created `rentivo-simba.zip` file to make sure it got built correctly (excluding files like `.gitignore`, `composer.json`, `package.json`, etc).
1. Upload this .zip to your production site or wherever you want to distribute it.
1. Delete this .zip file from your hard drive.

### Plugin Structure

Following is the pre-built plugin structure. You can add your own new class files (include `namespace` and `use` at the top) by naming them correctly and putting the files in the most appropriate location.

* `rentivo-simba/src/admin` - admin-specific functionality
* `rentivo-simba/src/common` - functionality shared between the admin area and the public-facing parts
* `rentivo-simba/src/core` - plugin core to register hooks, load files etc
* `rentivo-simba/src/customizer` - WordPress Customizer functionality
* `rentivo-simba/src/frontend` - public-facing functionality

### PHP Version

This plugin requires PHP 7.1.0 or newer and will display a wp-admin error notice if activated in an environment that does not meet this or other requirements (such as required plugins or other dependencies you may code).

# Developer Notes

### Updates
For each new version, don't forget to:
* Add a changelog entry to `readme.txt`
* Update the version number:
  * In your `readme.txt` file's header
  * In your main plugin file's header
  * In your main plugin file's `PLUGIN_VERSION` constant
* [Generate a fresh POT file](https://developer.wordpress.org/plugins/internationalization/localization/#generating-pot-file)

### The BoilerPlate uses a variable for the Text Domain

The Rentivo Simba uses a **variable** (e.g. `$this->plugin_text_domain`) to store the text domain, used when internationalizing strings.

If you face problems translating the strings with an automated tool/process, replace `$this->plugin_text_domain` with the literal string of your plugin's text domain throughout the plugin.

### References:
* [Here's a discussion from the original project in favor of using variables](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate/issues/59)
* [The Plugin Handbook Recommended Way (i.e. not to use variables)](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#text-domains)

# License

This Rentivo Simba is licensed under *GPL version 3 or any later version*.

> This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, version 3 or any later version, as published by the Free Software Foundation.

> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

> A copy of the GNU General Public License should be included in the root of this plugin's directory. The file is named `license.txt`; if not, obtain one before using this software by visiting https://www.gnu.org/licenses/gpl-3.0.html or writing to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA


If you opt to use third-party code that is not compatible with this software's license, then you may need to switch to using code that is compatible.

As an example, [here's a discussion](http://make.wordpress.org/themes/2013/03/04/licensing-note-apache-and-gpl/) that states GPLv2-only plugins could not bundle work licensed with Apache 2.0.


# Credits

The Rentivo Simba was started in 2011, by [Tom McFarlin](http://twitter.com/tommcfarlin/) and has since included a number of great contributions. In March of 2015, the project was handed over by Tom to Devin Vinson.

This plugin boilerplate was created by [Clifford Paulick](https://github.com/cliffordp/) in 2018, as a fork of [Rentivo Simba with Namespace and Autoloader Support](https://github.com/karannagupta/WordPress-Plugin-Boilerplate), which forked the [Rentivo Simba](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate) project to add support for Composer (including autoloading) and namespaces.

# Contributing

**[Reporting issues](https://github.com/cliffordp/WordPress-Plugin-Boilerplate/issues) -- and especially submitting [Pull Requests](https://github.com/cliffordp/WordPress-Plugin-Boilerplate/pulls) -- are welcome!** Do not contribute if you do not agree to this software's license terms.

# Boilerplate's Changelog

Documenting this project's progress...

#### January 30, 2020
* Editable JS and CSS (moved to SCSS) moved to `development` folder and NPM build process implemented

##### April 29, 2019
* Declutter main plugin file by creating new `Bootstrap` class
* Now requires PHP version 7.1.0 (up from 5.6.0)
* Added argument type and return type declarations (including scalar, which is why 7.1+ is needed, plus 7.0 was deprecated as of December 3, 2018)

##### April 27, 2019
* Refactor classes to be smaller and more intentional, including multiple _utilities_ classes and consolidating settings
* Moved *defines* and related to `Plugin_Data` class (has static methods because of hard-coded values)
* Created abstract `Shortcode()` class, which should be extended when creating your own new shortcodes (`[tk_request]` is still included as an example)
* Fix `class_exists()` checks to be namespace-aware
* Remove unused `libraries` and `views` directories throughout

##### March 13, 2019
* Fix `tk_request()` in *Common* to better support array values

##### February 5, 2019
* Added `output_to_log()` utility function to *Common* to enable writing to `WP_DEBUG_LOG` and optionally send an email, such as to the site administrator.
* Renamed `rentivo_simba_get_plugin_display_name()` to `get_plugin_display_name()` to remove prefix since we are within our own namespace.

##### February 1, 2019
* Add `string_ends_with()` and `get_string_between_two_strings()` utility functions.

##### January 31, 2019
* Simplify the CSS and JS file names to speed up initial setup by avoiding unnecessary file renaming.
* Simplify boilerplate's repository files so boilerplate can be ran as a plugin itself ("out of the box" as they say), which helps with testing things work before committing changes to the repo.
* Fix logic for Common's `get_option()` and `get_option_as_array()`.

##### January 30, 2019
* Add link to plugin options screen in the Plugins List admin screen.
* Add plugin options screen that links to WordPress Customizer panel.
* Add methods for getting all Customizer options, deleting all options, and getting a single option (as raw, string, or array).
* Add a custom Customizer Control for multiple checkboxes, optionally sortable. Big thanks to [Scott Fennell](http://scottfennell.org/) for the start to the code [and permission to use](https://twitter.com/TourKick/status/1089524933133303808). The version included here is heavily modified and follows this repository's license. *Still needs work if wanting to use `<select>` within each checkbox.*
* Add example Customizer options to help get a quick start.
* Add utility function to detect current URL. 
* Add utility function to get public post types, sorted by their labels.
* Tweak - `Common` as class constructor (dependency injection) instead of singleton instance. [These](https://akrabat.com/what-problem-does-dependency-injection-solve/) [articles](http://fabien.potencier.org/what-is-dependency-injection.html) provide simple examples and explanations if you are curious.
* Tweak - Add try/catch around DateTime(), although it shouldn't actually affect code.
* Tweak - Wrap each class within `class_exists()`.
* Tweak - Add `ABSPATH` check to top of all PHP files.
* Tweak - Remove all `@since` and `@access` tags. Remove all `@link` tags to the example link.

##### January 29, 2019
* Add `flatten_array()` utility method to Common.

##### January 23, 2019
* Fix loading logic regarding Admin and Frontend to allow both to run during Ajax.

##### January 22, 2019
* Fix to allow Admin hooks to run during Ajax.

##### December 2, 2018
* Add ability to require a parent and/or child theme.
* Implement [TGM Plugin Activation](http://tgmpluginactivation.com/) for required plugins (does not handle requiring a theme). At this time, it does not handle non-bundled premium plugins very well (adding incorrect download links to the TGMPA admin screen), but it does enhance some functionality:
  * displaying plugin nice name
  * requiring a minimum version number
  * adding the ability to mark a plugin recommended without being required
  * adding the ability to link to the plugin (the only way to tell people where to download the plugin manually)

##### December 1, 2018
* Improve main plugin class' loading, removing static methods and singleton.
* `Common` class: Use a singleton instead of static methods.
* Removed all `@author` DocBlocks, [per WordPress' best practices](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/php/#other-tags):
  * > It is WordPress policy not to use the `@author` tag, except in the case of maintaining it in external libraries. We do not want to imply any sort of "ownership" over code that might discourage contribution.
* Fix `Common::post_id_helper()` to not return `0` when passed `0`. Instead, will go through to the logic to automatically determine the Post ID.

##### October 6, 2018
* Now requires Composer. [See instructions, above.](https://github.com/cliffordp/rentivo-simba#using-composer)
* Fix `Common::tk_request()` and add new `$default` and `$escape` parameters.

##### September 13, 2018
* Added 'ABSPATH' checks at the beginning of all PHP files
* Added `rentivo_simba_get_plugin_display_name()` to main plugin file
* Removed `PLUGIN_NAME` constant and replaced all usage with `PLUGIN_TEXT_DOMAIN` since they were duplicates (as they should have been). Kept it as "plugin_text_domain" in the name instead of something like "plugin_id" or "plugin_slug" to help IDE autocomplete suggestions when using translation functions.
* Added `plugin_text_domain_underscores()` to Common

##### September 12, 2018
* Added a few nice helper methods to Common
* Improved readme.txt

##### September 3, 2018
* Initial Release

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Stefan2409"><img src="https://avatars2.githubusercontent.com/u/17899913?v=4" width="100px;" alt=""/><br /><sub><b>Stefan Jöbstl</b></sub></a><br /><a href="https://github.com/cliffordp/rentivo-simba/commits?author=Stefan2409" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
