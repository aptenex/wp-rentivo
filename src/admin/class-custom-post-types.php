<?php

namespace Rentivo_Simba\Admin;

use Rentivo_Simba\Common\Utilities\TextDomain as TextDomain;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( CustomPostTypes::class ) ) {
	class CustomPostTypes {

	    public function __construct() {
            add_action( 'init', array($this, 'register_collections'), 1 );
            add_action( 'init', array($this, 'register_experiences'), 1 );
        }

        /**
         * Register collection post type
         */
        public function register_collections() {
            $labels = array(
                'name'                  => TextDomain::_xw( 'Collections'),
                'singular_name'         => TextDomain::_xw( 'Collection'),
                'menu_name'             => TextDomain::__w( 'Collections'),
                'name_admin_bar'        => TextDomain::__w( 'Collections'),
                'archives'              => TextDomain::__w( 'Collection Archives'),
                'attributes'            => TextDomain::__w( 'Collection Attributes'),
                'parent_item_colon'     => TextDomain::__w( 'Parent Collection:'),
                'all_items'             => TextDomain::__w( 'All Collections'),
                'add_new_item'          => TextDomain::__w( 'Add New Collection'),
                'add_new'               => TextDomain::__w( 'Add New'),
                'new_item'              => TextDomain::__w( 'New Collection'),
                'edit_item'             => TextDomain::__w( 'Edit Collection'),
                'update_item'           => TextDomain::__w( 'Update Collection'),
                'view_item'             => TextDomain::__w( 'View Collection'),
                'view_items'            => TextDomain::__w( 'View Collection'),
                'search_items'          => TextDomain::__w( 'Search Collection'),
                'not_found'             => TextDomain::__w( 'Not found'),
                'not_found_in_trash'    => TextDomain::__w( 'Not found in Trash'),
                'featured_image'        => TextDomain::__w( 'Featured Image'),
                'set_featured_image'    => TextDomain::__w( 'Set featured image'),
                'remove_featured_image' => TextDomain::__w( 'Remove featured image'),
                'use_featured_image'    => TextDomain::__w( 'Use as featured image'),
                'insert_into_item'      => TextDomain::__w( 'Insert into Collections'),
                'uploaded_to_this_item' => TextDomain::__w( 'Uploaded to this Collection'),
                'items_list'            => TextDomain::__w( 'Experiences list'),
                'items_list_navigation' => TextDomain::__w( 'Experiences list navigation'),
                'filter_items_list'     => TextDomain::__w( 'Filter Collections list'),
            );
            $rewrite = array(
                'slug'                  => '/collections',
                'with_front'            => true
            );
            $args = array(
                'label'                 => TextDomain::__w( 'Collection' ),
                'description'           => TextDomain::__w( 'Posts for collections'),
                'labels'                => $labels,
                'supports'              => array( 'title', 'thumbnail', 'revisions', 'page-attributes', 'editor' ),
                'hierarchical'          => false,
                'public'                => true,
                'show_in_rest'          => true,
                'show_ui'               => true,
                'show_in_menu'          => true,
                'menu_position'         => 4,
                'menu_icon'             => 'dashicons-admin-multisite',
                'show_in_admin_bar'     => true,
                'show_in_nav_menus'     => true,
                'can_export'            => true,
                'has_archive'           => 'collections',
                'exclude_from_search'   => false,
                'publicly_queryable'    => true,
                'rewrite' => array('slug' => 'search', 'with_front' => false),
                'capability_type'       => 'post',
                'show_in_graphql' => true,
                'graphql_single_name' => 'Collection',
                'graphql_plural_name' => 'Collections',
            );

            register_post_type( 'collections', $args );
        }

        /**
         * Register experience post type
         */
        public function register_experiences() {

            $labels = array(
                'name'                  => TextDomain::_xw( 'Experiences'),
                'singular_name'         => TextDomain::_xw( 'Experience'),
                'menu_name'             => TextDomain::__w( 'Experiences'),
                'name_admin_bar'        => TextDomain::__w( 'Experiences'),
                'archives'              => TextDomain::__w( 'Experience Archives'),
                'attributes'            => TextDomain::__w( 'Experience Attributes'),
                'parent_item_colon'     => TextDomain::__w( 'Parent Experience:'),
                'all_items'             => TextDomain::__w( 'All Experiences'),
                'add_new_item'          => TextDomain::__w( 'Add New Experience'),
                'add_new'               => TextDomain::__w( 'Add New'),
                'new_item'              => TextDomain::__w( 'New Experience'),
                'edit_item'             => TextDomain::__w( 'Edit Experience'),
                'update_item'           => TextDomain::__w( 'Update Experience'),
                'view_item'             => TextDomain::__w( 'View Experience'),
                'view_items'            => TextDomain::__w( 'View Experience'),
                'search_items'          => TextDomain::__w( 'Search Experience'),
                'not_found'             => TextDomain::__w( 'Not found'),
                'not_found_in_trash'    => TextDomain::__w( 'Not found in Trash'),
                'featured_image'        => TextDomain::__w( 'Featured Image'),
                'set_featured_image'    => TextDomain::__w( 'Set featured image'),
                'remove_featured_image' => TextDomain::__w( 'Remove featured image'),
                'use_featured_image'    => TextDomain::__w( 'Use as featured image'),
                'insert_into_item'      => TextDomain::__w( 'Insert into Experiences'),
                'uploaded_to_this_item' => TextDomain::__w( 'Uploaded to this Experience'),
                'items_list'            => TextDomain::__w( 'Experiences list'),
                'items_list_navigation' => TextDomain::__w( 'Experiences list navigation'),
                'filter_items_list'     => TextDomain::__w( 'Filter Experiences list'),
            );
            $rewrite = array(
                'slug'                  => '/experiences',
                'with_front'            => true
            );

            $args = array(
                'label'                 => TextDomain::__w( 'Experience' ),
                'description'           => TextDomain::__w( 'Posts for experiences'),
                'labels'                => $labels,
                'supports'              => array( 'title', 'thumbnail', 'revisions', 'page-attributes', 'editor' ),
                'hierarchical'          => false,
                'public'                => true,
                'show_in_rest'          => true,
                'show_ui'               => true,
                'show_in_menu'          => true,
                'menu_position'         => 4,
                'menu_icon'             => 'dashicons-tickets-alt',
                'show_in_admin_bar'     => true,
                'show_in_nav_menus'     => true,
                'can_export'            => true,
                'has_archive'           => 'experiences',
                'exclude_from_search'   => false,
                'publicly_queryable'    => true,
                //'rewrite'               => $rewrite,
                'capability_type'       => 'post',
                'show_in_graphql' => true,
                'graphql_single_name' => 'Experience',
                'graphql_plural_name' => 'Experiences',
            );

            register_post_type( 'experiences', $args );
        }
    }
}
