/**
 * All of the code for your admin-facing JavaScript source
 * should reside in the file "development/admin/js/script.js".
 *
 * Note: It has been assumed you will write jQuery code here, so the
 * $ function reference has been prepared (import $ from 'jquery')for usage within the scope
 * of this function.
 *
 * This enables you to define handlers, for when the DOM is ready:
 *
 * $(function() {
 *
 * });
 *
 * When the window is loaded:
 *
 * $( window ).load(function() {
 *
 * });
 *
 * ...and/or other possibilities.
 *
 * Ideally, it is not considered best practise to attach more than a
 * single DOM-ready or window-load handler for a particular page.
 * Although scripts in the WordPress core, Plugins and Themes may be
 * practising this, we should strive to set a better example in our own work.
 *
 * The file is enqueued from src/admin/class-assets.php.
 */
import jQuery from 'jquery';
// // @TODO This is an example import. Remove for production
// import './components/test';

jQuery( document ).ready( function ($) {

  

  

} );


/*
register_rest_route('simba/v1', '/last_build_job_id', [
  'methods' => 'POST',
  'callback' => static function (\WP_REST_Request $request) {
    $data = [];
    $status = 200;
    if($request->get_param('job_id')) {
      update_option('', $request->get_param('job_id'));
      $data['job_id'] = $request->get_param('job_id');
    }

    return new \WP_REST_Response($data, $status);
  }
]);
*/




// @TODO This is an example console.log(). Remove for production
//console.log( 'admin_script.js' );