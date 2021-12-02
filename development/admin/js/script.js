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
import $ from 'jquery';
// // @TODO This is an example import. Remove for production
// import './components/test';


/*
height: 20px;
min-height: 20px;
line-height: 20px;
margin-top: 5px;
padding: 0 6px;
margin-right: 7px;
*/

$( document ).ready( function () {
	// jQuery methods go here...
  const accessToken = window.app ? window.app.access_token : undefined;
  console.log({accessToken});
  
  if(!accessToken) {
    console.log('No access token');
    return;
  }

  const $adminBarMenuSecondary = document.getElementById('wp-admin-bar-top-secondary');

  function createNewButton(id, label) {
    const $button = document.createElement("button");
    $button.classList.add('button');
    $button.classList.add('button-primary');
    $button.classList.add('button-small');
    $button.style.height = '20px';
    $button.style.minHeight = '20px';
    $button.style.lineHeight = '20px';
    $button.style.marginTop = '5px';
    $button.style.padding = '0 6px';
    $button.style.marginRight = '7px';
    $button.id = `${id}`;
    $button.innerText = label;

    return $button;
  }

  function createNewMenuButton(id, $buttonEl) {
    const $li = document.createElement("li");
    $li.classList.add('menupop')
    $li.id = `${id}`;
    $li.appendChild($buttonEl);

    return $li;
  }

  const $buildButton = createNewButton('build-site', 'Build & Publish');
  const $menuItemBuildButton = createNewMenuButton('menu-build-site', $buildButton);

  const $buildPreviewButton = createNewButton('build-preview-site', 'Build Preview');
  const $menuItemBuildPreviewButton = createNewMenuButton('menu-build-preview-site', $buildPreviewButton);

  $adminBarMenuSecondary.appendChild($menuItemBuildButton);
  $adminBarMenuSecondary.appendChild($menuItemBuildPreviewButton);


  function checkStatus(accessToken, $button) {

  }

  setInterval(() => {
    checkStatus()
  }, 10000);

} );

// @TODO This is an example console.log(). Remove for production
//console.log( 'admin_script.js' );