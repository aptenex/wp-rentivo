<?php

namespace Rentivo_Simba\Admin;

// Abort if this file is called directly.
if (!defined('ABSPATH')) {
  exit;
}

if (!class_exists(Users::class)) {
  class Users
  {
    public function set_user_roles()
    {
      add_role('owner', 'Site Owner', get_role('administrator')->capabilities);
      add_role('manager', 'Manager', get_role('editor')->capabilities);
    }

    public function user()
    {
      return \wp_get_current_user();

    }

    public function is_admin()
    {
      $user = \wp_get_current_user();
   
      if (in_array('administrator', (array) $user->roles)) {
        return true;
      } else {
        return false;
      }
    }

    public function is_user()
    {
      $user = \wp_get_current_user();
   
      if (!in_array('administrator', (array) $user->roles)) {
        return true;
      } else {
        return false;
      }
    }

    public function is_owner()
    {
      $user = \wp_get_current_user();
      if (in_array('owner', (array) $user->roles)) {
        return true;
      } else {
        return false;
      }
    }

    public function is_manager()
    {
      $user = \wp_get_current_user();
      if (in_array('administrator', (array) $user->roles) or in_array('manager', (array) $user->roles)) {
        return true;
      } else {
        return false;
      }
    }

    public function is_editor()
    {
      $user = \wp_get_current_user();

      if (in_array('administrator', (array) $user->roles) or in_array('manager', (array) $user->roles) or in_array('editor', (array) $user->roles)) {
        return true;
      } else {
        return false;
      }
    }

    public function is_editor_or_below()
    {
      $user = \wp_get_current_user();

      if (in_array('editor', (array) $user->roles) or in_array('subscriber', (array) $user->roles) or in_array('author', (array) $user->roles)) {
        return true;
      } else {
        return false;
      }
    }


  }
}
