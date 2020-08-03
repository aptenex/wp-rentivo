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

                        if(count($data) == 0 and count($languages) == 1) {
                            $localePieces = explode("_", $languages[0]);
                            $code = $localePieces[0];

                            $translationWithoutLocale = get_field('translations', 'options');
                            array_push($data, [
                                'translationsString' => $translationWithoutLocale,
                                'lang' => $code
                            ]);
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
