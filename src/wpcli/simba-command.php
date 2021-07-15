<?php

namespace Rentivo_Simba\Wpcli;

class Simba_Command
{

    /**
     * Run setup for a new wordpress site for Simba.
     *
     * ## EXAMPLES
     *
     *     wp simba setup
     *
     * @when after_wp_load
     */
    function setup($args, $assoc_args)
    {
        WP_CLI::sucess("I am working!");
    }
}


if (defined( 'WP_CLI' ) && WP_CLI) {
    WP_CLI::add_command('simba', Simba_Command::class);
}