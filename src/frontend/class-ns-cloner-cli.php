<?php

namespace Rentivo_Simba\Frontend;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * NS_Cloner_CLI class
 *
 * Runs (or cancels) the cloner in different modes from the command line.
 */
class NS_Cloner_CLI {

	/**
	 * Runs NS Cloner in standard clone mode
	 *
	 * ## OPTIONS ##
	 *
	 * [--source=<id>]
	 * : Source id of site to clone. Required.
	 *
	 * [--title=<title>]
	 * : Title of target site. Required.
	 *
	 * [--name=<name>]
	 * : Subdomain or subdirectory of target site. Required.
	 *
	 * [--tables=<tables>]
	 * : Comma separated list of database tables to clone. All by default.
	 *
	 * [--post_types=<posttypes>]
	 * : Comma separated list of post types to clone. All by default.
	 *
	 * [--search=<search>]
	 * : Comma separated list of custom search terms.
	 *
	 * [--replace=<replace>]
	 * : Comma separated list of custom replacements.
	 *
	 * [--no_users]
	 * : Skip cloning all except current user if set.
	 *
	 * [--no_media]
	 * : Skip copying all uploads files if set.
	 *
	 * [--schedule]
	 * : String value of time to schedule future operation for.
	 *
	 * [--log]
	 * : Log debugging information if set.
	 *
	 * @param array $args Positional arguments.
	 * @param array $assoc_args Keyed arguments.
	 */
	public function clone_basic( $args, $assoc_args ) {
		// Mode specific params.
		$request = [
			'target_title' => $assoc_args['title'],
			'target_name'  => $assoc_args['name']
		];

		// Combine with generic cross-mode request args.
		$default = $this->default_request( $assoc_args );
		$this->run( 'core', array_merge( $default, $request ) );
	}

	/**
	 * Runs NS Cloner in search replace mode
	 *
	 * ## OPTIONS ##
	 *
	 * [--target=<id>]
	 * : Comma separated list of site ids to clone over. Required.
	 *
	 * [--search=<search>]
	 * : Comma separated list of custom search terms. Required.
	 *
	 * [--replace=<replace>]
	 * : Comma separated list of custom replacements. Required.
	 *
	 * [--tables=<tables>]
	 * : Comma separated list of database tables to clone. All by default.
	 *
	 * [--schedule]
	 * : String value of time to schedule future operation for.
	 *
	 * [--log]
	 * : Log debugging information if set.
	 *
	 * @param array $args Positional arguments.
	 * @param array $assoc_args Keyed arguments.
	 */
	public function search_replace( $args, $assoc_args ) {
		// Mode specific params.
		$request = [
			'search_replace_target_ids' => preg_split( '|,\s*|', $assoc_args['target'] ?? '' ),
		];

		// Combine with generic cross-mode request args.
		$default = $this->default_request( $assoc_args );
		$this->run( 'search_replace', array_merge( $default, $request ) );
	}

	/**
	 * Runs a saved cloner preset.
	 *
	 * @param array $args Positional arguments.
	 * @param array $assoc_args Keyed arguments.
	 */
	public function preset( $args, $assoc_args ) {
		$presets = get_site_option( 'ns_cloner_presets', [] );
		$name    = $args[0];
		if ( isset( $presets[ $name ] ) ) {
			$request = $presets[ $name ];
			$this->run( $request['clone_mode'], $request );
		} else {
		}
	}

	/**
	 * Cancels a running clone process.
	 *
	 * @param array $args Positional arguments.
	 * @param array $assoc_args Keyed arguments.
	 */
	public function cancel( $args, $assoc_args ) {
		$pm = ns_cloner()->process_manager;
		if ( $pm->is_in_progress() ) {
			$pm->exit_processes( 'Process canceled via CLI.' );
			ns_cloner()->report->clear_all_reports();
		} else {
		}
	}

	/**
	 * Run the Cloner process in CLI mode
	 *
	 * @param string $mode Cloner mode id.
	 * @param array  $request Array of request parameters for cloning operation.
	 */
	protected function run( $mode, $request ) {

		$pm = ns_cloner()->process_manager;

		// Add clone mode to request.
		$request = array_merge( [ 'clone_mode' => $mode ], $request );

		// Handle scheduling, if cloner is already running or if a scheduled time was specified.
		if ( $pm->is_in_progress() ) {
			$request['schedule'] = 'now';
		}
		if ( isset( $request['schedule'] ) ) {
			$time = strtotime( $request['schedule'] );
			if ( $time ) {
				ns_cloner()->schedule->add( $request, $time, 'CLI' );
			} else {
			}
			return;
		}

		// Initialize request based on command line args.
		foreach ( $request as $key => $value ) {
			ns_cloner_request()->set( $key, $value );
		}

		// Try to start cloning process.
		$pm->init();
		if ( ! empty( $pm->get_errors() ) ) {
			// Handle validation / initialization errors.
			$errors = $pm->get_errors();
			ns_cloner()->report->clear_all_reports();
			return;
		}

		// Initialize progress bar.
		$mode_details  = ns_cloner()->get_mode( $mode );
		$mode_message  = __( 'Starting', 'ns-cloner' ) . ' ' . strtolower( $mode_details->title );
		$last_progress = 0;

		// Check progress and update.
		do {
			$pm->maybe_finish();
			$progress = $pm->get_progress();
			// Pause, so we're not constantly hammering the server with progress checks.
			sleep( 3 );
		} while ( 'reported' !== $progress['status'] );

		// Operation is done - handle error or success.
		$reports = $progress['report'];
		if ( isset( $reports['_error'] ) ) {
			// Error in background process.
		} else {
			// No errors.
			foreach ( $reports as $key => $value ) {
				// Don't show underscore-prefixed hidden report items.
				if ( 0 !== strpos( $key, '_' ) ) {

				}
			}
		}
		ns_cloner()->report->clear_all_reports();

	}

	/**
	 * Prepare basic request with common shared request elements
	 *
	 * @param array $assoc_args Command line args passed in.
	 * @return array
	 */
	protected function default_request( $assoc_args ) {

		// Load all values with fallbacks.
		$request = [
			'source_id'      => $assoc_args['source'] ?? 1,
			'do_copy_posts'  => 1,
			'do_copy_users'  => isset( $assoc_args['no_users'] ) ? '' : '1',
			'do_copy_files'  => isset( $assoc_args['no_media'] ) ? '' : '1',
			'debug'          => isset( $assoc_args['log'] ) ? '1' : '',
			'custom_search'  => preg_split(
				'|(?<!\\\),\s*|',
                $assoc_args['search'] ?? ''
			),
			'custom_replace' => preg_split(
				'|(?<!\\\),\s*|',
                $assoc_args['replace'] ?? ''
			),
		];

		// Optional params.
		if ( isset( $assoc_args['tables'] ) ) {
			$tables = preg_split( '|,\s*|', $assoc_args['tables'] );
			$prefix = is_multisite() ? ns_cloner()->db->get_blog_prefix( $request['source_id'] ) : ns_cloner()->db->base_prefix;
			foreach ( $tables as $i => $table ) {
				if ( 0 !== strpos( $table, $prefix ) ) {
					$tables[ $i ] = $prefix . $table;
				}
			}
			$request['tables_to_clone'] = $tables;
		}
		if ( isset( $assoc_args['schedule'] ) ) {
			$request['schedule'] = $assoc_args['schedule'];
		}

		return $request;
	}

}
