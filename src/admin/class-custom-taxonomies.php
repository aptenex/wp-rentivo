<?php

namespace Rentivo_Simba\Admin;

use Rentivo_Simba\Common\Utilities\TextDomain as TextDomain;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( CustomTaxonomies::class ) ) {
	class CustomTaxonomies {

	    public function __construct() {
            add_action( 'init', array($this, 'register_experience_taxonomy'), 1 );
            add_action( 'init', array($this, 'register_experience_tags'), 1 );
        }

        /**
         * Register experience categories
         */
        public function register_experience_taxonomy() {
            $labels = array(
                'name' => TextDomain::_xw('Experience Types'),
                'singular_name' => TextDomain::_xw('Experience Type'),
                'menu_name' => TextDomain::__w('Experience Types'),
                'all_items' => TextDomain::__w('All Items'),
                'parent_item' => TextDomain::__w('Parent Item'),
                'parent_item_colon' => TextDomain::__w('Parent Item:'),
                'new_item_name' => TextDomain::__w('New Item Name'),
                'add_new_item' => TextDomain::__w('Add New Item'),
                'edit_item' => TextDomain::__w('Edit Item'),
                'update_item' => TextDomain::__w('Update Item'),
                'view_item' => TextDomain::__w('View Item'),
                'separate_items_with_commas' => TextDomain::__w('Separate items with commas'),
                'add_or_remove_items' => TextDomain::__w('Add or remove items'),
                'choose_from_most_used' => TextDomain::__w('Choose from the most used'),
                'popular_items' => TextDomain::__w('Popular Items'),
                'search_items' => TextDomain::__w('Search Items'),
                'not_found' => TextDomain::__w('Not Found'),
                'no_terms' => TextDomain::__w('No items'),
                'items_list' => TextDomain::__w('Items list'),
                'items_list_navigation' => TextDomain::__w('Items list navigation')
            );
            $args = array(
                'labels' => $labels,
                'hierarchical' => true,
                'public' => true,
                'show_ui' => true,
                'show_admin_column' => true,
                'show_in_nav_menus' => true,
                'show_tagcloud' => true,
                'rewrite' => array('slug' => 'experiences/type', 'with_front' => false),
                'show_in_rest' => true,
                'show_in_graphql' => true,
                'graphql_single_name' => 'ExperienceType',
                'graphql_plural_name' => 'ExperienceTypes',
            );
            register_taxonomy('experience_taxonomy', array('experiences'), $args);

        }

        /**
         * Register experience tags
         */
        public function register_experience_tags() {

            $labels = array(
                'name' => TextDomain::_xw('Experience Tags'),
                'singular_name' => TextDomain::_xw('Experience Tag'),
                'menu_name' => TextDomain::__w('Experience Tags'),
                'all_items' => TextDomain::__w('All Items'),
                'parent_item' => TextDomain::__w('Parent Item'),
                'parent_item_colon' => TextDomain::__w('Parent Item:'),
                'new_item_name' => TextDomain::__w('New Item Name'),
                'add_new_item' => TextDomain::__w('Add New Item'),
                'edit_item' => TextDomain::__w('Edit Item'),
                'update_item' => TextDomain::__w('Update Item'),
                'view_item' => TextDomain::__w('View Item'),
                'separate_items_with_commas' => TextDomain::__w('Separate items with commas'),
                'add_or_remove_items' => TextDomain::__w('Add or remove items'),
                'choose_from_most_used' => TextDomain::__w('Choose from the most used'),
                'popular_items' => TextDomain::__w('Popular Items'),
                'search_items' => TextDomain::__w('Search Items'),
                'not_found' => TextDomain::__w('Not Found'),
                'no_terms' => TextDomain::__w('No items'),
                'items_list' => TextDomain::__w('Items list'),
                'items_list_navigation' => TextDomain::__w('Items list navigation'),
            );
            $args = array(
                'labels' => $labels,
                'hierarchical' => false,
                'public' => true,
                'show_ui' => true,
                'show_admin_column' => true,
                'show_in_nav_menus' => true,
                'show_tagcloud' => true,
                'rewrite' => array('slug' => 'experiences/tags', 'with_front' => false),
                'show_in_rest' => true,
                'show_in_graphql' => true,
                'graphql_single_name' => 'ExperienceTag',
                'graphql_plural_name' => 'ExperienceTags',
            );

            register_taxonomy('experience_tags', array('experiences'), $args);
        }
    }
}
