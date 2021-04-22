<?php

namespace Rentivo_Simba\Frontend;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( WPGraphQl::class ) ) {
    class HTMLEntities {
        public function init() {

            //  Requires this to be merged https://github.com/wp-graphql/wp-graphql-acf/pull/74
            add_filter(
                'graphql_acf_field_value',
                [$this, 'decode_acf_entities'],
                10,
                2
            );
            add_filter(
                'graphql_resolve_field',
                [$this, 'decode_entities'],
                10,
                8
            );
        }

        /**
         * Decode HTML entities from ACF fields
         */
        function decode_acf_entities($value, $acf_field) {
            $text_types = ['textarea', 'text'];
            if (in_array($acf_field['type'], $text_types)) {
                return html_entity_decode($value);
            }
            if ('link' === $acf_field['type'] && !empty($value)) {
                $value['title'] = html_entity_decode($value['title']);
            }
            return $value;
        }

        /**
         * Decode HTML entities from other applicable fields.
         *
         * XXX This is not complete.
         */
        function decode_entities(
            $result,
            $source,
            $args,
            $context,
            $info,
            $type_name,
            $field_key
        ) {
            if (!\is_string($result) || !$result) {
                return $result;
            }
            $decode = false;
            if ($source instanceof \WPGraphQL\Model\Post) {
                if ('title' === $field_key) {
                    $decode = true;
                }
            }
            if ($source instanceof \WPGraphQL\Model\MenuItem) {
                if ('title' === $field_key) {
                    $decode = true;
                }
                if ('label' === $field_key) {
                    $decode = true;
                }
            }
            if ($decode) {
                return \html_entity_decode($result);
            }
            return $result;
        }
    }
}
