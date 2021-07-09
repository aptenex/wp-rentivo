<?php

namespace Rentivo_Simba\Wpcli;

if (class_exists( WP_CLI::class )) {

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

    WP_CLI::add_command('simba', Simba_Command::class);

}