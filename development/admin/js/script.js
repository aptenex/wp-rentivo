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

  let accessToken = '';
  let lastBuildJobId = '';
  let lastBuildPreviewJobId = '';
  let globalVarChecker = setInterval(checkForGlobalVars, 500);

  function checkForGlobalVars() {
    if(window && window.apps) {
      accessToken = window.apps.access_token;
      lastBuildJobId = window.apps.last_build_job_id;
      lastBuildPreviewJobId = window.apps.last_build_preview_job_id;
      clearInterval(globalVarChecker);
      manageBuildButtons();
    }
  }

  function manageBuildButtons() {
    console.log({accessToken});

    if(!accessToken) {
      console.log('No access token');
      return;
    }

    function postBuild(type = 'preview', successCallback, errorCallback) {
      $.ajax({
        url: `https://wpcmd.k8.rentivo.com/public/site/build-${type}`,
        dataType: 'json',
        method: 'POST',
        success: successCallback,
        error: errorCallback,
        headers: { 'X-Site-Token': accessToken }
      });
    }

    function getBuildStatus(jobId, successCallback, errorCallback) {
      $.ajax({
        url: `https://wpcmd.k8.rentivo.com/public/site/build-preview/${jobId}`,
        dataType: 'json',
        method: 'GET',
        success: successCallback,
        error: errorCallback,
        headers: { 'X-Site-Token': accessToken }
      });
    }

    function postUpdateBuildStatus(type = 'preview', jobId, successCallback, errorCallback) {
      $.ajax({
        url: `/wp-json/simba/v1/${type === 'preview' ? 'last_build_preview_job_id' : 'last_build_job_id'}`,
        dataType: 'json',
        data: {
          job_id: jobId
        },
        method: 'POST',
        success: successCallback,
        error: errorCallback,
        headers: { 'X-Site-Token': accessToken }
      });
    }
  
    // Headers: $headers = X-Site-Token = accessToken
    // Build Preview: POST: `https://wpcmd.k8.rentivo.com/public/site/build-preview`
    // Build Release: POST: `https://wpcmd.k8.rentivo.com/public/site/build-release`
    // Build Status: GET: `https://wpcmd.k8.rentivo.com/public/site/build-preview/${lastBuildJobId}`


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
  

    // Check build statuses
    const checkLatestBuildIntv = setInterval(() => checkLatestBuildStatus(lastBuildJobId), 10000);
    const checkLatestBuildPreviewIntv = setInterval(() => checkLatestBuildStatus(lastBuildPreviewJobId), 10000);

    function checkLatestBuildStatus(jobId) {
      if(jobId) {
        getBuildStatus(jobId, (response) => {
          console.log('Checking latest build job id', response);
        })
      }
    }

    // Button listeners
    $buildPreviewButton.addEventListener('click', (e) => {
      e.preventDefault();
      runBuild('preview', $buildPreviewButton);
    });

    // Button listeners
    $buildButton.addEventListener('click', (e) => {
      e.preventDefault();
      runBuild('release', $buildButton);
    });

    function runBuild(type = 'preview', $buttonEl) {
      postBuild(type, (resp) => {
        $buttonEl.innerText = 'Building...';
        $buttonEl.setAttribute('disabled');
        console.log(resp);
        // TODO: Update build_ids for checker...
        // postUpdateBuildStatus(type, )

      }, (e) => {
        console.error(e);
        $buttonEl.innerText = 'Oops, error';
        $buttonEl.removeAttribute('disabled');
      })
    }


  }

  

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