<?php

namespace Rentivo_Simba\Admin;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( WPGraphQl::class ) ) {
	class WPGraphQl {


        public function register_endpoints() {
            if( function_exists('register_graphql_field') ) {


                register_graphql_object_type( 'Dog', [
                    'description' => __( "Man's best friend", 'rentivo-simba' ),
                    'fields' => [
                        'name' => [
                            'type' => 'String',
                            'description' => __( 'The name of the dog', 'rentivo-simba' ),
                        ],
                        'breed' => [
                            'type' => 'String',
                            'description' => __( 'The Breed of the dog', 'rentivo-simba' ),
                        ],
                        'age' => [
                            'type' => 'Integer',
                            'description' => __( 'The age, in years, of the dog', 'rentivo-simba' ),
                        ],
                    ],
                ] );


                register_graphql_field( 'RootQuery', 'getDog', [
                    'description' => __( 'Get a dog', 'rentivo-simba' ),
                    'type' => 'Dog',
                    'resolve' => function() {

                        // Here you need to return data that matches the shape of the "Dog" type. You could get
                        // the data from the WP Database, an external API, or static values. For example sake,
                        // we will just return a hard-coded array.
                        return [
                            'name' => 'Sparky',
                            'breed' => 'Golden Retriever',
                            'age' => 8
                        ];

                    }
                ] );
            }
        }
	}
}

/*
 * print_r('TESTING');
            print_r(get_field('en_site_config', 'options'));
 */
