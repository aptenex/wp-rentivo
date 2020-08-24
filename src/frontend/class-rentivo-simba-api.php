<?php

namespace Rentivo_Simba\Frontend;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( WPRentivoSimbaAPI::class ) ) {

    class WPRentivoSimbaAPI {

        public function register_endpoints() {

            register_rest_route( 'simba/v1', '/overview', [
                'methods' => 'GET',
                'callback' => static function(\WP_REST_Request $request) {
                    $data = [
                        'site' => get_site(get_current_blog_id()),
                        'networkId' => get_current_network_id(),
                        'mainSite' => get_current_site()
                    ];

                    return new \WP_REST_Response( $data, 200 );
                }
            ]);

            register_rest_route( 'simba/v1', '/clone/cancel', [
                'methods' => 'GET',
                'callback' => static function(\WP_REST_Request $request) {
                    $pm = ns_cloner()->process_manager;

                    $data = [
                        'wasInProgress' => $pm->is_in_progress()
                    ];

                    if ($pm->is_in_progress()) {
                        $pm->exit_processes('Manual cancel via API');
                        $data['stopped'] = true;
                        $data['error'] = $pm->get_errors();
                    } else {
                        $data['stopped'] = true;
                        $data['error'] = null;
                    }

                    return new \WP_REST_Response( $data, 200 );
                }
            ]);

            register_rest_route( 'simba/v1', '/clone/status', [
                'methods' => 'GET',
                'callback' => static function(\WP_REST_Request $request) {
                    $pm = ns_cloner()->process_manager;

                    return new \WP_REST_Response([
                        'running' => $pm->is_in_progress(),
                        'progress' => $pm->get_progress(),
                        'errors' => $pm->get_errors()
                    ], 200);
                }
            ]);

            register_rest_route( 'simba/v1', '/clone', [
                'methods' => 'GET',
                'callback' => static function(\WP_REST_Request $request) {

                    $siteData = get_site(get_current_blog_id());

                    if ($siteData === null) {
                        return new \WP_REST_Response(['error' => true, 'message' => 'Could not locate site'], 400);
                    }

                    if (!$request->has_param('title')) {
                        return new \WP_REST_Response(['error' => true, 'message' => 'title param is required'], 400);
                    }

                    if (!$request->has_param('domain')) {
                        return new \WP_REST_Response(['error' => true, 'message' => 'domain param is required'], 400);
                    }

                    $pm = ns_cloner()->process_manager;

                    if ($pm->is_in_progress()) {
                        return new \WP_REST_Response(['error' => true, 'message' => 'A site clone is currently being processed'], 400);
                    }

                    $cloneReq = [
                        'source' => get_current_blog_id(),
                        'title' => $request->get_param('title'),
                        'name' => $request->get_param('domain')
                    ];

                    $cloner = new NS_Cloner_CLI();

                    $cloner->clone_basic([], $cloneReq);

                    $data = [
                        'source' => $siteData,
                        'status' => 'CLONING',
                        'progress' => ns_cloner()->process_manager->get_progress()
                    ];

                    return new \WP_REST_Response($data, 200);
                }
            ]);

        }

    }
}