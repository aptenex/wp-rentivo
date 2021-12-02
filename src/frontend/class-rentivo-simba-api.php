<?php

namespace Rentivo_Simba\Frontend;

// Abort if this file is called directly.
if (!defined('ABSPATH')) {
  exit;
}

if (!class_exists(WPRentivoSimbaAPI::class)) {

  class WPRentivoSimbaAPI
  {

    public function register_endpoints()
    {


      register_rest_route('simba/v1', '/last_build_job_id', [
        'methods' => 'POST',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [];
          $status = 200;
          if($request->get_param('job_id')) {
            update_option('last_build_job_id', $request->get_param('job_id'));
            $data['job_id'] = $request->get_param('job_id');
          }

          return new \WP_REST_Response($data, $status);
        }
      ]);

      register_rest_route('simba/v1', '/last_build_preview_job_id', [
        'methods' => 'POST',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [];
          $status = 200;
          if($request->get_param('job_id')) {
            update_option('last_build_preview_job_id', $request->get_param('job_id'));
            $data['job_id'] = $request->get_param('job_id');
          }

          return new \WP_REST_Response($data, $status);
        }
      ]);

      register_rest_route('simba/v1', '/overview', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [
            'site' => get_site(get_current_blog_id()),
            'networkId' => get_current_network_id(),
            'mainSite' => get_current_site()
          ];

          return new \WP_REST_Response($data, 200);
        }
      ]);

      register_rest_route('simba/v1', '/webconfig', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [
            'data' => [
              'defaultLang' => pll_default_language(),
              'siteConfig' => get_field('site_config', 'options'),
              'translations' => get_field('translations', 'options'),
              'redirects' => get_field('redirects', 'options'),
              'customCode' => [
                'headCustomHTML' => get_field('headCustomHTML', 'options'),
                'closingBodyCustomHTML' => get_field('closingBodyCustomHTML', 'options')
              ]
            ]
          ];

          return new \WP_REST_Response($data, 200);
        }
      ]);

      register_rest_route('simba/v1', '/siteConfig', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [
            'data' => get_field('site_config', 'options')
          ];

          return new \WP_REST_Response($data, 200);
        }
      ]);

      register_rest_route('simba/v1', '/siteConfig', [
        'methods' => 'POST',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [];
          $status = 200;

          // Update field.
          $siteConfig = $request->get_param('siteConfig');
          if ($siteConfig) {
            update_field('site_config', $siteConfig, 'option');
            $data['success'] = true;
          } else {
            $data['success'] = false;
            $data['error'] = "Code not save site config.";
          }

          return new \WP_REST_Response($data, $status);
        }
      ]);

      register_rest_route('simba/v1', '/translations', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [
            'data' => get_field('translations', 'options')
          ];

          return new \WP_REST_Response($data, 200);
        }
      ]);

      register_rest_route('simba/v1', '/translations', [
        'methods' => 'POST',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [];
          $status = 200;

          // Update field.
          $translations = $request->get_param('translations');
          if ($translations) {
            update_field('translations', $translations, 'option');
            $data['success'] = true;
          } else {
            $data['success'] = false;
            $data['error'] = "Code not save translations.";
          }

          return new \WP_REST_Response($data, $status);
        }
      ]);

      register_rest_route('simba/v1', '/redirects', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [
            'data' => get_field('redirects', 'options')
          ];

          return new \WP_REST_Response($data, 200);
        }
      ]);

      register_rest_route('simba/v1', '/redirects', [
        'methods' => 'POST',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [];
          $status = 200;

          // Update field.
          $redirects = $request->get_param('redirects');
          if ($redirects) {
            update_field('redirects', $redirects, 'option');
            $data['success'] = true;
          } else {
            $data['success'] = false;
            $data['error'] = "Code not save redirects.";
          }

          return new \WP_REST_Response($data, $status);
        }
      ]);

      register_rest_route('simba/v1', '/customCode', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [
            'data' => [
              'headCustomHTML' => get_field('headCustomHTML', 'options'),
              'closingBodyCustomHTML' => get_field('closingBodyCustomHTML', 'options')
            ]
          ];

          return new \WP_REST_Response($data, 200);
        }
      ]);

      register_rest_route('simba/v1', '/customCode', [
        'methods' => 'POST',
        'callback' => static function (\WP_REST_Request $request) {
          $data = [];
          $status = 200;

          // Update field.
          $headCustomHTML = $request->get_param('headCustomHTML');
          $closingBodyCustomHTML = $request->get_param('closingBodyCustomHTML');
          if ($headCustomHTML && $closingBodyCustomHTML) {
            update_field('headCustomHTML', $headCustomHTML, 'option');
            update_field('closingBodyCustomHTML', $closingBodyCustomHTML, 'option');
            $data['success'] = true;
          } else {
            $data['success'] = false;
            $data['error'] = "Custom code not saved.";
          }

          return new \WP_REST_Response($data, $status);
        }
      ]);

      register_rest_route('simba/v1', '/clone/cancel', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {
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

          return new \WP_REST_Response($data, 200);
        }
      ]);

      register_rest_route('simba/v1', '/clone/status', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {
          $pm = ns_cloner()->process_manager;

          return new \WP_REST_Response([
            'running' => $pm->is_in_progress(),
            'progress' => $pm->get_progress(),
            'errors' => $pm->get_errors()
          ], 200);
        }
      ]);

      register_rest_route('simba/v1', '/clone', [
        'methods' => 'GET',
        'callback' => static function (\WP_REST_Request $request) {

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
