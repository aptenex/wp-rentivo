<?php

namespace Rentivo_Simba\Admin;

use Rentivo_Simba\Plugin_Data as Plugin_Data;
use Rentivo_Simba\Common\Settings as Common_Settings;
use Rentivo_Simba\Admin as Admin;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( Settings::class ) ) {
    /**
     * The admin-specific settings.
     */
    class Settings {

        /**
         * Get the Settings instance from Common.
         *
         * @var Common_Settings
         */
        private $settings;
        private $users;
        private $blockedItems;

        /**
         * Initialize the class and set its properties.
         */
        public function __construct() {
            $this->settings = new Common_Settings();
            $this->users = new Admin\Users();
            $this->blockedItems = [
                ['id' => 'wp-graphql-gutenberg-admin', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'wp-graphiql/wp-graphiql.php', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'ns-cloner', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'edit-comments.php', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'plugins.php', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'tools.php', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'edit.php?post_type=acf-field-group', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'edit.php?post_type=lazyblocks', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'index.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'my-sites.php'],
                ['id' => 'tools.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'site-health.php'],
                ['id' => 'tools.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'export-personal-data.php'],
                ['id' => 'tools.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'erase-personal-data.php'],
                ['id' => 'tools.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'ms-delete-site.php'],
                ['id' => 'options-general.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'options-discussion.php'],
                ['id' => 'options-general.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'options-permalink.php'],
                ['id' => 'options-general.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'options-privacy.php'],
                ['id' => 'options-general.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'duplicate_page_settings'],
                ['id' => 'options-general.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'svg-support'],
                ['id' => 'mlang', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'mlang_strings'],
                ['id' => 'mlang', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'mlang_settings'],
                ['id' => 'wp-logo', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'comments', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'updates', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'about', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'wporg', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'support-forums', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'documentation', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'feedback', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'my-sites', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'my-sites-list', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'site-name', 'removePage' => false, 'type' => 'admin_bar'],
                ['id' => 'graphql', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'graphiql-ide', 'removePage' => true, 'type' => 'admin_bar'],
                ['id' => 'edit.php?post_type=action_monitor', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'mlang', 'removePage' => true, 'type' => 'menu'],
                ['id' => 'themes.php', 'removePage' => true, 'type' => 'menu'],
     
                ['id' => 'index.php', 'removePage' => true, 'type' => 'submenu', 'submenuId' => 'update-core.php'],      
                ['id' => 'options-general.php', 'removePage' => true, 'type' => 'menu'],
            ];

            $this->blockedEditorItems = [
              ['id' => 'users.php', 'removePage' => true, 'type' => 'menu']
            ];
        }

        /**
         * Add Settings link within Plugins List page.
         *
         * @param array $links
         *
         * @return array
         */
        public function add_action_links( array $links ): array {
            $mylinks = [
                '<a href="' . esc_url( $this->settings->get_main_settings_page_url() ) . '">' . $this->settings->get_settings_word() . '</a>',
            ];

            return array_merge( $mylinks, $links );
        }

        /**
         * Add the Settings page to the wp-admin menu.
         */
        public function add_plugin_admin_menu(): void {
            // add_options_page(
            //     Plugin_Data::get_plugin_display_name(),
            //     Plugin_Data::get_plugin_display_name(),
            //     $this->settings->common->required_capability(),
            //     $this->settings->get_settings_page_slug(),
            //     [ $this, 'settings_page' ]
            // );

            add_menu_page(
              'Menus',
              'Menus',
              'edit_theme_options',
              'nav-menus.php',
              '',
              'dashicons-list-view',
              68
           );
        }

        public function dashboard_setup() {
            global $wp_meta_boxes;
            unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_site_health']);
            unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
            unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
            unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
            unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
            unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_drafts']);
            unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
            unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
            unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
            unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);

            //echo '<pre>'; print_r( $wp_meta_boxes ); echo '</pre>';
            //die();
        }

        public function admin_notices() {
            if($this->users->is_user()) {
                remove_all_actions('admin_notices');
                remove_all_actions('all_admin_notices');
            }
        }

        public function admin_menu() {
            global $submenu, $menu, $pagenow;
            $siteUrl = get_site_url();

            /*
            echo '<pre>'; print_r( $menu ); echo '</pre>'; // TOP LEVEL MENUS
            echo '<pre>'; print_r( $submenu ); echo '</pre>'; // SUBMENUS
            die();
            */
            // echo "<pre>";
            // print_r($menu);
            // print_r($submenu);
            // echo "</pre>";
            // die();

            if($this->users->is_user()) {

                foreach ($this->blockedItems as $item) {
                    //print_r($item);
                    if($item['removePage']) {
                        if($item['type'] === 'menu' and isset($_GET['page'])) {
                            if($pagenow === $item['id'] or $pagenow . '?page=' . $_GET['page'] === 'admin.php?page=' . $item['id']) {
                                header("Location: $siteUrl/wp-admin/index.php", true, 301);
                                exit();
                            }
                        }

                        if($item['type'] === 'submenu' and !empty($item['submenuId']) and isset($_GET['page'])) {
                            if($pagenow === $item['submenuId'] or $pagenow . '?page=' . $_GET['page'] === 'admin.php?page=' . $item['submenuId']) {
                                header("Location: $siteUrl/wp-admin/index.php", true, 301);
                                exit();
                            }
                        }
                    }

                    if($item['type'] === 'menu') {
                        remove_menu_page($item['id']);
                    }

                    if($item['type'] === 'submenu' and !empty($item['submenuId'])) {
                        remove_submenu_page($item['id'], $item['submenuId']);
                    }
                }
            }


            if($this->users->is_editor_or_below()) {

              foreach ($this->blockedEditorItems as $item) {
                  //print_r($item);
                  if($item['removePage']) {
                      if($item['type'] === 'menu' and isset($_GET['page'])) {
                          if($pagenow === $item['id'] or $pagenow . '?page=' . $_GET['page'] === 'admin.php?page=' . $item['id']) {
                              header("Location: $siteUrl/wp-admin/index.php", true, 301);
                              exit();
                          }
                      }

                      if($item['type'] === 'submenu' and !empty($item['submenuId']) and isset($_GET['page'])) {
                          if($pagenow === $item['submenuId'] or $pagenow . '?page=' . $_GET['page'] === 'admin.php?page=' . $item['submenuId']) {
                              header("Location: $siteUrl/wp-admin/index.php", true, 301);
                              exit();
                          }
                      }
                  }

                  if($item['type'] === 'menu') {
                      remove_menu_page($item['id']);
                  }

                  if($item['type'] === 'submenu' and !empty($item['submenuId'])) {
                      remove_submenu_page($item['id'], $item['submenuId']);
                  }
              }
          }
        }

        public function admin_bar($admin_bar) {
            
            // echo "<pre>";
            // print_r($admin_bar);
            // echo "</pre>";
            // die();
            

            if($this->users->is_user()) {
                foreach ($this->blockedItems as $item) {
                    if($item['type'] === 'admin_bar') {
                        $admin_bar->remove_node($item['id']);
                    }
                }
            }
        }

        /**
         * Outputs HTML for the plugin's Settings page.
         */
        public function settings_page(): void {
            if ( ! current_user_can( $this->settings->common->required_capability() ) ) {
                wp_die( esc_html__( 'You do not have sufficient permissions to access this page.', Plugin_Data::plugin_text_domain() ) );
            }

            $link_to_customizer_panel = $this->settings->get_link_to_customizer_panel();

            ?>
            <div class="wrap">
                <h1><?php echo Plugin_Data::get_plugin_display_name() . ' ' . $this->settings->get_settings_word();
                    ?></h1>

                <p><?php esc_html_e( "This plugin uses the WordPress Customizer to set its options.", Plugin_Data::plugin_text_domain() ); ?></p>
                <p><?php esc_html_e( "Click the button below to be taken directly to this plugin's section within the WordPress Customizer.", Plugin_Data::plugin_text_domain() ); ?></p>
                <p>
                    <?php esc_html_e( "TODO: Add more text here", Plugin_Data::plugin_text_domain() ); ?>
                </p>
                <p>
                    <a href="<?php echo esc_url( $link_to_customizer_panel ); ?>"
                       class="button-primary">
                        <?php esc_html_e( 'Edit Plugin Settings in WP Customizer', Plugin_Data::plugin_text_domain() ) ?>
                    </a>
                </p>
                <br><br>
                <?php
                ?>
            </div>
            <?php
        }
    }
}

