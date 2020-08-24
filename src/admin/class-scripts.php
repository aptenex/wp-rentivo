<?php

namespace Rentivo_Simba\Admin;

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( Scripts::class ) ) {
	class Scripts {
	    public function run_scripts() {
	        /*
            $allposts= get_posts( array('post_type'=>'collections','numberposts'=>-1) );
            echo "<pre>";
            foreach ($allposts as $post) {
                print_r($post->ID);
                $value = get_field( "field_5e7c99b9768e8", $post->ID);

                if($value and $value[0]) {
                    if($value[0]['filter_value']) {
                        $fv = explode('~', $value[0]['filter_value']);

                        if(count($fv) == 5) {
                            $value[0]['filter_value'] = "$fv[0]~[[$fv[1],$fv[2]],[$fv[3],$fv[4]]]";

                            update_field("field_5e7c99b9768e8", $value, $post->ID);

                            print_r($value);//echo $value[0]['filter_value'] . " -> " . $newFv . "<br>";
                        }

                    }
                }
                //print_r($value);
            }
            echo "</pre>";

            die();
            */

        }
	}
}
