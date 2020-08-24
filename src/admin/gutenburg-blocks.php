<?php

namespace Rentivo_Simba\Admin;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( GutenburgBlocks::class ) ) {
	class GutenburgBlocks {

	    public function __construct() {
            add_action( 'register_post_type_args', array($this, 'blocks_to_admin'), 10, 2);
        }

        public function blocks_to_admin($args, $post_type){
            if ( 'wp_block' !== $post_type ) {
                return $args;
            }
            if ($post_type == 'wp_block'){
                $block_args = array(
                    'public'				=> true,
                    'show_ui'				=> true,
                    'exclude_from_search'	=> true,
                    'query_var'				=> true,
                    'show_in_rest'			=> true,
                    'publicly_queryable'	=> true,
                    'show_in_graphql' => true,
                    'graphql_single_name' => 'CustomBlock',
                    'graphql_plural_name' => 'CustomBlocks',
                );
            }
            return array_merge( $args, $block_args );
        }

        public function add_reusable_blocks_admin_menu(){
            add_menu_page( 'Blocks', 'Blocks', 'edit_posts', 'edit.php?post_type=wp_block', '', 'dashicons-editor-table', 22 );
        }


    }
}
