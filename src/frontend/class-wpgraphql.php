<?php

namespace Rentivo_Simba\Frontend;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( WPGraphQl::class ) ) {
    class WPGraphQl {
        public function testStuff() {

        }

        public function support_custom_acf_fields($supported_fields) {
            array_push($supported_fields, 'map_bbox');
            return $supported_fields;
        }

        public function register_custom_acf_fields($field_config, $type_name, $field_name, $config) {

            $acf_field = isset( $config['acf_field'] ) ? $config['acf_field'] : null;
            $acf_type  = isset( $acf_field['type'] ) ? $acf_field['type'] : null;
            if ($acf_type == 'map_bbox') {

                $field_type_name = 'ACF_GoogleMap_BoundingBox';

                $fields = [
                    'streetAddress' => [
                        'type'        => 'String',
                        'description' => __( 'The street address associated with the map', 'wp-graphql-acf' ),
                        'resolve'     => function( $root ) {
                            return isset( $root['address'] ) ? $root['address'] : null;
                        },
                    ],
                    'latitude'      => [
                        'type'        => 'Float',
                        'description' => __( 'The latitude associated with the map', 'wp-graphql-acf' ),
                        'resolve'     => function( $root ) {
                            return isset( $root['lat'] ) ? $root['lat'] : null;
                        },
                    ],
                    'longitude'     => [
                        'type'        => 'Float',
                        'description' => __( 'The longitude associated with the map', 'wp-graphql-acf' ),
                        'resolve'     => function( $root ) {
                            return isset( $root['lng'] ) ? $root['lng'] : null;
                        },
                    ],
                ];

                // ACF 5.8.6 added more data to Google Maps field value
                // https://www.advancedcustomfields.com/changelog/
                if (\acf_version_compare(acf_get_db_version(), '>=', '5.8.6')) {
                    $fields += [
                        'streetName' => [
                            'type'        => 'String',
                            'description' => __( 'The street name associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['street_name'] ) ? $root['street_name'] : null;
                            },
                        ],
                        'streetNumber' => [
                            'type'        => 'String',
                            'description' => __( 'The street number associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['street_number'] ) ? $root['street_number'] : null;
                            },
                        ],
                        'city' => [
                            'type'        => 'String',
                            'description' => __( 'The city associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['city'] ) ? $root['city'] : null;
                            },
                        ],
                        'state' => [
                            'type'        => 'String',
                            'description' => __( 'The state associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['state'] ) ? $root['state'] : null;
                            },
                        ],
                        'stateShort' => [
                            'type'        => 'String',
                            'description' => __( 'The state abbreviation associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['state_short'] ) ? $root['state_short'] : null;
                            },
                        ],
                        'postCode' => [
                            'type'        => 'String',
                            'description' => __( 'The post code associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['post_code'] ) ? $root['post_code'] : null;
                            },
                        ],
                        'country' => [
                            'type'        => 'String',
                            'description' => __( 'The country associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['country'] ) ? $root['country'] : null;
                            },
                        ],
                        'countryShort' => [
                            'type'        => 'String',
                            'description' => __( 'The country abbreviation associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['country_short'] ) ? $root['country_short'] : null;
                            },
                        ],
                        'placeId' => [
                            'type'        => 'String',
                            'description' => __( 'The country associated with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['place_id'] ) ? $root['place_id'] : null;
                            },
                        ],
                        'zoom' => [
                            'type'        => 'String',
                            'description' => __( 'The zoom defined with the map', 'wp-graphql-acf' ),
                            'resolve'     => function( $root ) {
                                return isset( $root['zoom'] ) ? $root['zoom'] : null;
                            },
                        ],
                    ];
                }

                $fields += [
                    'coordinates' => [
                        'type'        => 'String',
                        'description' => __( 'Coordinates', 'wp-graphql-acf' ),
                        'resolve'     => function( $root ) {
                            return isset( $root['coordinates'] )  ? json_encode($root['coordinates']) : null;
                        },
                    ]
                ];

                register_graphql_object_type(
                    $field_type_name,
                    [
                        'description' => __( 'Google Map (Bounding Box) field', 'wp-graphql-acf' ),
                        'fields'      => $fields,
                    ]
                );
                $field_config['type'] = $field_type_name;

            }


            return $field_config;
        }

        public function register_endpoints() {
            if( function_exists('register_graphql_field') and function_exists('register_graphql_object_type') and function_exists('pll_languages_list') ) {

                register_graphql_object_type( 'Translation', [
                    'description' => __( "Translations", 'rentivo-simba' ),
                    'fields' => [
                        'translationsString' => [
                            'type' => 'String',
                            'description' => __( 'Stringified translations', 'rentivo-simba' ),
                        ],
                        'lang' => [
                            'type' => 'String',
                            'description' => __( 'Lang', 'rentivo-simba' ),
                        ]
                    ],
                ] );

                register_graphql_object_type( 'SiteConfig', [
                    'description' => __( "Site Config", 'rentivo-simba' ),
                    'fields' => [
                        'configString' => [
                            'type' => 'String',
                            'description' => __( 'Stringified config', 'rentivo-simba' ),
                        ]
                    ],
                ] );


                register_graphql_object_type( 'Redirects', [
                    'description' => __( "Redirects", 'rentivo-simba' ),
                    'fields' => [
                        'redirectsString' => [
                            'type' => 'String',
                            'description' => __( 'Stringified redirects', 'rentivo-simba' ),
                        ]
                    ],
                ] );

                register_graphql_field( 'RootQuery', 'translations', [
                    'description' => __( 'Get the site translations', 'rentivo-simba' ),
                    'type' => [ 'list_of' => 'Translation' ],
                    'resolve' => function() {
                        $data = [];
                        $languages = pll_languages_list(['fields' => 'locale']);
                        foreach ($languages as &$locale) {
                            $localePieces = explode("_", $locale);
                            $code = $localePieces[0];

                            $translations = get_field('translations', 'options_' . $locale);
                            if($translations) {
                                array_push($data, [
                                    'translationsString' => $translations,
                                    'lang' => $code
                                ]);
                            }
                        }

                        if(count($data) == 0) {

                            $defaultCode = pll_default_language('slug');

                            //$localePieces = explode("_", $languages[0]);
                            //$code = $localePieces[0];

                            $translationWithoutLocale = get_field('translations', 'options');
                            $translationDecoded = json_decode($translationWithoutLocale, true);

                            if($translationWithoutLocale and is_array($translationDecoded)) {
                                if(count($translationDecoded) == count($translationDecoded, COUNT_RECURSIVE)) {
                                    // Just default language
                                    array_push($data, [
                                        'translationsString' => $translationWithoutLocale,
                                        'lang' => $defaultCode
                                    ]);
                                } else {
                                    // Multi-dimensional
                                    foreach($translationDecoded as $key => $value) {
                                        array_push($data, [
                                            'translationsString' => json_encode($value),
                                            'lang' => $key
                                        ]);
                                    }
                                }
                            }
                        }

                        return $data;
                    }
                ] );

                register_graphql_field( 'RootQuery', 'config', [
                    'description' => __( 'Get the site config', 'rentivo-simba' ),
                    'type' => 'SiteConfig',
                    'resolve' => function() {
                        $optionsSiteConfig = get_field('site_config', 'options');
                        return [
                            'configString' => $optionsSiteConfig
                        ];
                    }
                ] );

                register_graphql_field( 'RootQuery', 'redirects', [
                    'description' => __( 'Get the sites redirects', 'rentivo-simba' ),
                    'type' => 'Redirects',
                    'resolve' => function() {
                        $optionsSiteConfig = get_field('redirects', 'options');
                        return [
                            'redirectsString' => $optionsSiteConfig
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

/*
$languages = pll_the_languages(array('raw'=>1));

                foreach ($languages as &$lang) {
                    array_push($data, [
                        'translationsString' => 'hello',
                        'lang' => 'test'
                    ]);

                    $localePieces = explode("-", $lang['locale']);
                    $code = $localePieces[0];
                    $friendlyLocale = $code . '_' . $localePieces[1];

                    $translations = get_field('translations', 'options_' . $friendlyLocale);
                    array_push($data, [
                        'translationsString' => 'hello',
                        'lang' => $code
                    ]);
}

$translations = get_field('translations', 'options_en_GB');

array_push($data, [
    'translationsString' => $translations,
    'lang' => 'en'
]);

return $data;

register_graphql_field( 'RootQuery', 'config', [
    'description' => __( 'Get the site config', 'rentivo-simba' ),
    'type' => 'SiteConfig',
    'resolve' => function() {

        $optionsSiteConfig = get_field('site_config', 'options');

        return [
            'configString' => $optionsSiteConfig
        ];
    }
] );
 */
