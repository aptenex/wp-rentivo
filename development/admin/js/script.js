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

  let latestBuildViewLink = null;
  let latestPreviewViewLink = null;

  function checkForGlobalVars() {
    if(window && window.apps) {
      accessToken = window.apps.access_token;
      lastBuildJobId = window.apps.last_build_job_id;
      lastBuildPreviewJobId = window.apps.last_build_preview_job_id;
      latestBuildViewLink = window.apps.web_url;
      console.log(window.apps);
      clearInterval(globalVarChecker);
      manageBuildButtons();
    }
  }

  //console.log('TEST');

  function manageBuildButtons() {
    console.log({accessToken});
    console.log({lastBuildJobId});
    console.log({lastBuildPreviewJobId});

    if(!accessToken) {
      console.log('No access token');
      return;
    }

    function postBuild(type = 'preview', successCallback, errorCallback) {
      $.ajax({
        url: `https://wpcmd.k8.rentivo.com/internal/site/build-${type}`,
        dataType: 'json',
        method: 'POST',
        success: successCallback,
        error: errorCallback,
        headers: { 'X-Site-Token': accessToken }
      });
    }

    function getBuildStatus(jobId, successCallback, errorCallback) {
      $.ajax({
        url: `https://wpcmd.k8.rentivo.com/internal/site/build-preview/${jobId}`,
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
  
    function createNewButton(id, label, primary = true) {
      const $button = document.createElement("button");
      $button.classList.add('button');
      $button.classList.add(`button-${(primary) ? 'primary' : 'secondary'}`);
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
  
    // Build buttons
    const $buildButton = createNewButton('build-site', 'Publish', true);
    const $menuItemBuildButton = createNewMenuButton('menu-build-site', $buildButton);

    const $viewBuildButton = createNewButton('view-build', 'View Latest', true);
    $viewBuildButton.style.display = 'none';
    const $menuItemViewBuildButton = createNewMenuButton('menu-view-build', $viewBuildButton);
    
    // Preview buttons
    const $buildPreviewButton = createNewButton('build-preview-site', 'Build Preview', false);
    const $menuItemBuildPreviewButton = createNewMenuButton('menu-build-preview-site', $buildPreviewButton);

    const $viewPreviewBuildButton = createNewButton('view-preview-build', 'View Latest', false);
    $viewPreviewBuildButton.style.display = 'none';
    const $menuItemViewPreviewBuildButton = createNewMenuButton('menu-view-preview-build', $viewPreviewBuildButton);
    
    // Add to menu
    $adminBarMenuSecondary.appendChild($menuItemViewBuildButton);
    $adminBarMenuSecondary.appendChild($menuItemBuildButton);
    
    $adminBarMenuSecondary.appendChild($menuItemViewPreviewBuildButton);
    $adminBarMenuSecondary.appendChild($menuItemBuildPreviewButton);
    

    // Check build statuses
    const checkLatestBuildIntv = setInterval(() => checkLatestBuildStatus(lastBuildJobId, 'build'), 12000);
    const checkLatestBuildPreviewIntv = setInterval(() => checkLatestBuildStatus(lastBuildPreviewJobId, 'preview'), 12000);

    checkLatestBuildStatus(lastBuildJobId, 'build');
    checkLatestBuildStatus(lastBuildPreviewJobId, 'preview');

    function checkLatestBuildStatus(jobId, type = 'preview') {
      if(jobId) {
        getBuildStatus(jobId, (response) => {
          console.log(type, jobId, response.Job.Status, response);
          if(response && response.Job && response.Job.Status === 'RUNNING' || response.Job.Status === 'CREATED') {
            if(type === 'preview') {
              $viewPreviewBuildButton.style.display = 'none';
              $buildPreviewButton.innerText = 'Building preview...';
              $buildPreviewButton.setAttribute('disabled', false);
            } else {
              $viewBuildButton.style.display = 'none';
              $buildButton.innerText = 'Building...';
              $buildButton.setAttribute('disabled', false);
            }
          }

          if(response && response.Job && (response.Job.Status === 'FAILURE' || response.Job.Status === 'TERMINATED') ) {
            if(type === 'preview') {
              $viewPreviewBuildButton.style.display = 'none';
              $buildPreviewButton.innerText = 'Preview Failed. Try Again.';
              $buildPreviewButton.removeAttribute('disabled', false);
            } else {
              $viewBuildButton.style.display = 'none';
              $buildButton.innerText = 'Publish Failed. Try Again.';
              $buildButton.removeAttribute('disabled', false);
            }
          }

          if(response && response.Job && response.PreviewUrl && response.Job.Status === 'SUCCESS') {
            if(type === 'preview') {
              latestPreviewViewLink = response.PreviewUrl;
              $viewPreviewBuildButton.style.display = 'block';
              $buildPreviewButton.innerText = 'Build Preview';
              $buildPreviewButton.removeAttribute('disabled', false);
            } else {
              $viewBuildButton.style.display = 'block';
              $buildButton.innerText = 'Publish';
              $buildButton.removeAttribute('disabled', false);
            }
          }

        }, (error) => {
          console.error(error);
        })
      } else {
        console.log(type, 'No job ID to check')
      }
    }

    // Preview Button listeners
    $buildPreviewButton.addEventListener('click', (e) => {
      e.preventDefault();
      runBuild('preview', $buildPreviewButton);
    });

    $viewPreviewBuildButton.addEventListener('click', (e) => {
      e.preventDefault();

      if(latestPreviewViewLink) {
        window.open(latestPreviewViewLink, "_blank") || window.location.replace(latestPreviewViewLink);
      }
    });

    // Build Button listeners
    $buildButton.addEventListener('click', (e) => {
      e.preventDefault();
      runBuild('release', $buildButton);
    });

    $viewBuildButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      if(latestBuildViewLink) {
        window.open(latestBuildViewLink, "_blank") || window.location.replace(latestBuildViewLink);
      }
    });

    function runBuild(type = 'preview', $buttonEl) {

      $buttonEl.innerText = 'Verifying...';
      $buttonEl.setAttribute('disabled', false);

      postBuild(type, (resp) => {
        if(type === 'preview') {
          $buttonEl.innerText = 'Building preview...';
        } else {
          $buttonEl.innerText = 'Publishing...';
        }

        console.log(resp);

        const jobID = resp && resp.Uuid ? resp.Uuid : resp && resp.Job && resp.Job.Uuid ? resp.Job.Uuid : null;

        // TODO: Update build_ids for checker...
        if(jobID) {
          postUpdateBuildStatus(type, jobID, () => {
            console.log('updated wp options');
            if(type === 'preview') {
              lastBuildPreviewJobId = jobID
            } else {
              lastBuildJobId = jobID
            }
            console.log({lastBuildPreviewJobId, lastBuildJobId})
          }, (error) => {
            console.log(error);
          })
        } else {
          console.error('Could not find job id');
        }
        

        
      }, (e) => {
        console.error(e);
        $buttonEl.innerText = 'Oops, error';
        $buttonEl.removeAttribute('disabled', false);
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