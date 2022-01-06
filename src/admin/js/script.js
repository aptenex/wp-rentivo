/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./development/admin/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./development/admin/js/script.js":
/*!****************************************!*\
  !*** ./development/admin/js/script.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
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
 // // @TODO This is an example import. Remove for production
// import './components/test';

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function ($) {
  var accessToken = '';
  var lastBuildJobId = '';
  var lastBuildPreviewJobId = '';
  var globalVarChecker = setInterval(checkForGlobalVars, 500);
  var latestBuildViewLink = null;
  var latestPreviewViewLink = null;

  function checkForGlobalVars() {
    if (window && window.apps) {
      accessToken = window.apps.access_token;
      lastBuildJobId = window.apps.last_build_job_id;
      lastBuildPreviewJobId = window.apps.last_build_preview_job_id;
      latestBuildViewLink = window.apps.web_url;
      console.log(window.apps);
      clearInterval(globalVarChecker);
      manageBuildButtons();
    }
  } //console.log('TEST');


  function manageBuildButtons() {
    console.log({
      accessToken: accessToken
    });
    console.log({
      lastBuildJobId: lastBuildJobId
    });
    console.log({
      lastBuildPreviewJobId: lastBuildPreviewJobId
    });

    if (!accessToken) {
      console.log('No access token');
      return;
    }

    function postBuild() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'preview';
      var successCallback = arguments.length > 1 ? arguments[1] : undefined;
      var errorCallback = arguments.length > 2 ? arguments[2] : undefined;
      $.ajax({
        url: "https://wpcmd.k8.rentivo.com/internal/site/build-".concat(type),
        dataType: 'json',
        method: 'POST',
        success: successCallback,
        error: errorCallback,
        headers: {
          'X-Site-Token': accessToken
        }
      });
    }

    function getBuildStatus(jobId, successCallback, errorCallback) {
      $.ajax({
        url: "https://wpcmd.k8.rentivo.com/internal/site/build-preview/".concat(jobId),
        dataType: 'json',
        method: 'GET',
        success: successCallback,
        error: errorCallback,
        headers: {
          'X-Site-Token': accessToken
        }
      });
    }

    function postUpdateBuildStatus() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'preview';
      var jobId = arguments.length > 1 ? arguments[1] : undefined;
      var successCallback = arguments.length > 2 ? arguments[2] : undefined;
      var errorCallback = arguments.length > 3 ? arguments[3] : undefined;
      $.ajax({
        url: "/wp-json/simba/v1/".concat(type === 'preview' ? 'last_build_preview_job_id' : 'last_build_job_id'),
        dataType: 'json',
        data: {
          job_id: jobId
        },
        method: 'POST',
        success: successCallback,
        error: errorCallback,
        headers: {
          'X-Site-Token': accessToken
        }
      });
    } // Headers: $headers = X-Site-Token = accessToken
    // Build Preview: POST: `https://wpcmd.k8.rentivo.com/public/site/build-preview`
    // Build Release: POST: `https://wpcmd.k8.rentivo.com/public/site/build-release`
    // Build Status: GET: `https://wpcmd.k8.rentivo.com/public/site/build-preview/${lastBuildJobId}`


    var $adminBarMenuSecondary = document.getElementById('wp-admin-bar-top-secondary');

    function createNewButton(id, label) {
      var primary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var $button = document.createElement("button");
      $button.classList.add('button');
      $button.classList.add("button-".concat(primary ? 'primary' : 'secondary'));
      $button.classList.add('button-small');
      $button.style.height = '20px';
      $button.style.minHeight = '20px';
      $button.style.lineHeight = '20px';
      $button.style.marginTop = '5px';
      $button.style.padding = '0 6px';
      $button.style.marginRight = '7px';
      $button.id = "".concat(id);
      $button.innerText = label;
      return $button;
    }

    function createNewMenuButton(id, $buttonEl) {
      var $li = document.createElement("li");
      $li.classList.add('menupop');
      $li.id = "".concat(id);
      $li.appendChild($buttonEl);
      return $li;
    } // Build buttons


    var $buildButton = createNewButton('build-site', 'Publish', true);
    var $menuItemBuildButton = createNewMenuButton('menu-build-site', $buildButton);
    var $viewBuildButton = createNewButton('view-build', 'View Latest', true);
    $viewBuildButton.style.display = 'none';
    var $menuItemViewBuildButton = createNewMenuButton('menu-view-build', $viewBuildButton); // Preview buttons

    var $buildPreviewButton = createNewButton('build-preview-site', 'Build Preview', false);
    var $menuItemBuildPreviewButton = createNewMenuButton('menu-build-preview-site', $buildPreviewButton);
    var $viewPreviewBuildButton = createNewButton('view-preview-build', 'View Latest', false);
    $viewPreviewBuildButton.style.display = 'none';
    var $menuItemViewPreviewBuildButton = createNewMenuButton('menu-view-preview-build', $viewPreviewBuildButton); // Add to menu

    $adminBarMenuSecondary.appendChild($menuItemViewBuildButton);
    $adminBarMenuSecondary.appendChild($menuItemBuildButton);
    $adminBarMenuSecondary.appendChild($menuItemViewPreviewBuildButton);
    $adminBarMenuSecondary.appendChild($menuItemBuildPreviewButton); // Check build statuses

    var checkLatestBuildIntv = setInterval(function () {
      return checkLatestBuildStatus(lastBuildJobId, 'build');
    }, 12000);
    var checkLatestBuildPreviewIntv = setInterval(function () {
      return checkLatestBuildStatus(lastBuildPreviewJobId, 'preview');
    }, 12000);
    checkLatestBuildStatus(lastBuildJobId, 'build');
    checkLatestBuildStatus(lastBuildPreviewJobId, 'preview');

    function checkLatestBuildStatus(jobId) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'preview';

      if (jobId) {
        getBuildStatus(jobId, function (response) {
          console.log(type, jobId, response.Job.Status, response);

          if (response && response.Job && response.Job.Status === 'RUNNING' || response.Job.Status === 'CREATED') {
            if (type === 'preview') {
              $viewPreviewBuildButton.style.display = 'none';
              $buildPreviewButton.innerText = 'Building preview...';
              $buildPreviewButton.setAttribute('disabled', false);
            } else {
              $viewBuildButton.style.display = 'none';
              $buildButton.innerText = 'Building...';
              $buildButton.setAttribute('disabled', false);
            }
          }

          if (response && response.Job && (response.Job.Status === 'FAILURE' || response.Job.Status === 'TERMINATED')) {
            if (type === 'preview') {
              $viewPreviewBuildButton.style.display = 'none';
              $buildPreviewButton.innerText = 'Preview Failed. Try Again.';
              $buildPreviewButton.removeAttribute('disabled', false);
            } else {
              $viewBuildButton.style.display = 'none';
              $buildButton.innerText = 'Publish Failed. Try Again.';
              $buildButton.removeAttribute('disabled', false);
            }
          }

          if (response && response.Job && response.PreviewUrl && response.Job.Status === 'SUCCESS') {
            if (type === 'preview') {
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
        }, function (error) {
          console.error(error);
        });
      } else {
        console.log(type, 'No job ID to check');
      }
    } // Preview Button listeners


    $buildPreviewButton.addEventListener('click', function (e) {
      e.preventDefault();
      runBuild('preview', $buildPreviewButton);
    });
    $viewPreviewBuildButton.addEventListener('click', function (e) {
      e.preventDefault();

      if (latestPreviewViewLink) {
        window.open(latestPreviewViewLink, "_blank") || window.location.replace(latestPreviewViewLink);
      }
    }); // Build Button listeners

    $buildButton.addEventListener('click', function (e) {
      e.preventDefault();
      runBuild('release', $buildButton);
    });
    $viewBuildButton.addEventListener('click', function (e) {
      e.preventDefault();

      if (latestBuildViewLink) {
        window.open(latestBuildViewLink, "_blank") || window.location.replace(latestBuildViewLink);
      }
    });

    function runBuild() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'preview';
      var $buttonEl = arguments.length > 1 ? arguments[1] : undefined;
      $buttonEl.innerText = 'Verifying...';
      $buttonEl.setAttribute('disabled', false);
      postBuild(type, function (resp) {
        if (type === 'preview') {
          $buttonEl.innerText = 'Building preview...';
        } else {
          $buttonEl.innerText = 'Publishing...';
        }

        console.log(resp);
        var jobID = resp && resp.Uuid ? resp.Uuid : resp && resp.Job && resp.Job.Uuid ? resp.Job.Uuid : null; // TODO: Update build_ids for checker...

        if (jobID) {
          postUpdateBuildStatus(type, jobID, function () {
            console.log('updated wp options');

            if (type === 'preview') {
              lastBuildPreviewJobId = jobID;
            } else {
              lastBuildJobId = jobID;
            }

            console.log({
              lastBuildPreviewJobId: lastBuildPreviewJobId,
              lastBuildJobId: lastBuildJobId
            });
          }, function (error) {
            console.log(error);
          });
        } else {
          console.error('Could not find job id');
        }
      }, function (e) {
        console.error(e);
        $buttonEl.innerText = 'Oops, error';
        $buttonEl.removeAttribute('disabled', false);
      });
    }
  }
});
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

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvYWRtaW4vanMvc2NyaXB0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiYWNjZXNzVG9rZW4iLCJsYXN0QnVpbGRKb2JJZCIsImxhc3RCdWlsZFByZXZpZXdKb2JJZCIsImdsb2JhbFZhckNoZWNrZXIiLCJzZXRJbnRlcnZhbCIsImNoZWNrRm9yR2xvYmFsVmFycyIsImxhdGVzdEJ1aWxkVmlld0xpbmsiLCJsYXRlc3RQcmV2aWV3Vmlld0xpbmsiLCJ3aW5kb3ciLCJhcHBzIiwiYWNjZXNzX3Rva2VuIiwibGFzdF9idWlsZF9qb2JfaWQiLCJsYXN0X2J1aWxkX3ByZXZpZXdfam9iX2lkIiwid2ViX3VybCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckludGVydmFsIiwibWFuYWdlQnVpbGRCdXR0b25zIiwicG9zdEJ1aWxkIiwidHlwZSIsInN1Y2Nlc3NDYWxsYmFjayIsImVycm9yQ2FsbGJhY2siLCJhamF4IiwidXJsIiwiZGF0YVR5cGUiLCJtZXRob2QiLCJzdWNjZXNzIiwiZXJyb3IiLCJoZWFkZXJzIiwiZ2V0QnVpbGRTdGF0dXMiLCJqb2JJZCIsInBvc3RVcGRhdGVCdWlsZFN0YXR1cyIsImRhdGEiLCJqb2JfaWQiLCIkYWRtaW5CYXJNZW51U2Vjb25kYXJ5IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVOZXdCdXR0b24iLCJpZCIsImxhYmVsIiwicHJpbWFyeSIsIiRidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwicGFkZGluZyIsIm1hcmdpblJpZ2h0IiwiaW5uZXJUZXh0IiwiY3JlYXRlTmV3TWVudUJ1dHRvbiIsIiRidXR0b25FbCIsIiRsaSIsImFwcGVuZENoaWxkIiwiJGJ1aWxkQnV0dG9uIiwiJG1lbnVJdGVtQnVpbGRCdXR0b24iLCIkdmlld0J1aWxkQnV0dG9uIiwiZGlzcGxheSIsIiRtZW51SXRlbVZpZXdCdWlsZEJ1dHRvbiIsIiRidWlsZFByZXZpZXdCdXR0b24iLCIkbWVudUl0ZW1CdWlsZFByZXZpZXdCdXR0b24iLCIkdmlld1ByZXZpZXdCdWlsZEJ1dHRvbiIsIiRtZW51SXRlbVZpZXdQcmV2aWV3QnVpbGRCdXR0b24iLCJjaGVja0xhdGVzdEJ1aWxkSW50diIsImNoZWNrTGF0ZXN0QnVpbGRTdGF0dXMiLCJjaGVja0xhdGVzdEJ1aWxkUHJldmlld0ludHYiLCJyZXNwb25zZSIsIkpvYiIsIlN0YXR1cyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlByZXZpZXdVcmwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicnVuQnVpbGQiLCJvcGVuIiwibG9jYXRpb24iLCJyZXBsYWNlIiwicmVzcCIsImpvYklEIiwiVXVpZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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QTtBQUtBO0FBQ0EsbUM7Ozs7Ozs7Ozs7O0FDMVRBLHdCIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGV2ZWxvcG1lbnQvYWRtaW4vanMvc2NyaXB0LmpzXCIpO1xuIiwiLyoqXG4gKiBBbGwgb2YgdGhlIGNvZGUgZm9yIHlvdXIgYWRtaW4tZmFjaW5nIEphdmFTY3JpcHQgc291cmNlXG4gKiBzaG91bGQgcmVzaWRlIGluIHRoZSBmaWxlIFwiZGV2ZWxvcG1lbnQvYWRtaW4vanMvc2NyaXB0LmpzXCIuXG4gKlxuICogTm90ZTogSXQgaGFzIGJlZW4gYXNzdW1lZCB5b3Ugd2lsbCB3cml0ZSBqUXVlcnkgY29kZSBoZXJlLCBzbyB0aGVcbiAqICQgZnVuY3Rpb24gcmVmZXJlbmNlIGhhcyBiZWVuIHByZXBhcmVkIChpbXBvcnQgJCBmcm9tICdqcXVlcnknKWZvciB1c2FnZSB3aXRoaW4gdGhlIHNjb3BlXG4gKiBvZiB0aGlzIGZ1bmN0aW9uLlxuICpcbiAqIFRoaXMgZW5hYmxlcyB5b3UgdG8gZGVmaW5lIGhhbmRsZXJzLCBmb3Igd2hlbiB0aGUgRE9NIGlzIHJlYWR5OlxuICpcbiAqICQoZnVuY3Rpb24oKSB7XG4gKlxuICogfSk7XG4gKlxuICogV2hlbiB0aGUgd2luZG93IGlzIGxvYWRlZDpcbiAqXG4gKiAkKCB3aW5kb3cgKS5sb2FkKGZ1bmN0aW9uKCkge1xuICpcbiAqIH0pO1xuICpcbiAqIC4uLmFuZC9vciBvdGhlciBwb3NzaWJpbGl0aWVzLlxuICpcbiAqIElkZWFsbHksIGl0IGlzIG5vdCBjb25zaWRlcmVkIGJlc3QgcHJhY3Rpc2UgdG8gYXR0YWNoIG1vcmUgdGhhbiBhXG4gKiBzaW5nbGUgRE9NLXJlYWR5IG9yIHdpbmRvdy1sb2FkIGhhbmRsZXIgZm9yIGEgcGFydGljdWxhciBwYWdlLlxuICogQWx0aG91Z2ggc2NyaXB0cyBpbiB0aGUgV29yZFByZXNzIGNvcmUsIFBsdWdpbnMgYW5kIFRoZW1lcyBtYXkgYmVcbiAqIHByYWN0aXNpbmcgdGhpcywgd2Ugc2hvdWxkIHN0cml2ZSB0byBzZXQgYSBiZXR0ZXIgZXhhbXBsZSBpbiBvdXIgb3duIHdvcmsuXG4gKlxuICogVGhlIGZpbGUgaXMgZW5xdWV1ZWQgZnJvbSBzcmMvYWRtaW4vY2xhc3MtYXNzZXRzLnBocC5cbiAqL1xuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuLy8gLy8gQFRPRE8gVGhpcyBpcyBhbiBleGFtcGxlIGltcG9ydC4gUmVtb3ZlIGZvciBwcm9kdWN0aW9uXG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy90ZXN0JztcblxualF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbiAoJCkge1xuXG4gIGxldCBhY2Nlc3NUb2tlbiA9ICcnO1xuICBsZXQgbGFzdEJ1aWxkSm9iSWQgPSAnJztcbiAgbGV0IGxhc3RCdWlsZFByZXZpZXdKb2JJZCA9ICcnO1xuICBsZXQgZ2xvYmFsVmFyQ2hlY2tlciA9IHNldEludGVydmFsKGNoZWNrRm9yR2xvYmFsVmFycywgNTAwKTtcblxuICBsZXQgbGF0ZXN0QnVpbGRWaWV3TGluayA9IG51bGw7XG4gIGxldCBsYXRlc3RQcmV2aWV3Vmlld0xpbmsgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRm9yR2xvYmFsVmFycygpIHtcbiAgICBpZih3aW5kb3cgJiYgd2luZG93LmFwcHMpIHtcbiAgICAgIGFjY2Vzc1Rva2VuID0gd2luZG93LmFwcHMuYWNjZXNzX3Rva2VuO1xuICAgICAgbGFzdEJ1aWxkSm9iSWQgPSB3aW5kb3cuYXBwcy5sYXN0X2J1aWxkX2pvYl9pZDtcbiAgICAgIGxhc3RCdWlsZFByZXZpZXdKb2JJZCA9IHdpbmRvdy5hcHBzLmxhc3RfYnVpbGRfcHJldmlld19qb2JfaWQ7XG4gICAgICBsYXRlc3RCdWlsZFZpZXdMaW5rID0gd2luZG93LmFwcHMud2ViX3VybDtcbiAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5hcHBzKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZ2xvYmFsVmFyQ2hlY2tlcik7XG4gICAgICBtYW5hZ2VCdWlsZEJ1dHRvbnMoKTtcbiAgICB9XG4gIH1cblxuICAvL2NvbnNvbGUubG9nKCdURVNUJyk7XG5cbiAgZnVuY3Rpb24gbWFuYWdlQnVpbGRCdXR0b25zKCkge1xuICAgIGNvbnNvbGUubG9nKHthY2Nlc3NUb2tlbn0pO1xuICAgIGNvbnNvbGUubG9nKHtsYXN0QnVpbGRKb2JJZH0pO1xuICAgIGNvbnNvbGUubG9nKHtsYXN0QnVpbGRQcmV2aWV3Sm9iSWR9KTtcblxuICAgIGlmKCFhY2Nlc3NUb2tlbikge1xuICAgICAgY29uc29sZS5sb2coJ05vIGFjY2VzcyB0b2tlbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc3RCdWlsZCh0eXBlID0gJ3ByZXZpZXcnLCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vd3BjbWQuazgucmVudGl2by5jb20vaW50ZXJuYWwvc2l0ZS9idWlsZC0ke3R5cGV9YCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3M6IHN1Y2Nlc3NDYWxsYmFjayxcbiAgICAgICAgZXJyb3I6IGVycm9yQ2FsbGJhY2ssXG4gICAgICAgIGhlYWRlcnM6IHsgJ1gtU2l0ZS1Ub2tlbic6IGFjY2Vzc1Rva2VuIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJ1aWxkU3RhdHVzKGpvYklkLCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vd3BjbWQuazgucmVudGl2by5jb20vaW50ZXJuYWwvc2l0ZS9idWlsZC1wcmV2aWV3LyR7am9iSWR9YCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgc3VjY2Vzczogc3VjY2Vzc0NhbGxiYWNrLFxuICAgICAgICBlcnJvcjogZXJyb3JDYWxsYmFjayxcbiAgICAgICAgaGVhZGVyczogeyAnWC1TaXRlLVRva2VuJzogYWNjZXNzVG9rZW4gfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zdFVwZGF0ZUJ1aWxkU3RhdHVzKHR5cGUgPSAncHJldmlldycsIGpvYklkLCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYC93cC1qc29uL3NpbWJhL3YxLyR7dHlwZSA9PT0gJ3ByZXZpZXcnID8gJ2xhc3RfYnVpbGRfcHJldmlld19qb2JfaWQnIDogJ2xhc3RfYnVpbGRfam9iX2lkJ31gLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgam9iX2lkOiBqb2JJZFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgc3VjY2Vzczogc3VjY2Vzc0NhbGxiYWNrLFxuICAgICAgICBlcnJvcjogZXJyb3JDYWxsYmFjayxcbiAgICAgICAgaGVhZGVyczogeyAnWC1TaXRlLVRva2VuJzogYWNjZXNzVG9rZW4gfVxuICAgICAgfSk7XG4gICAgfVxuICBcbiAgICAvLyBIZWFkZXJzOiAkaGVhZGVycyA9IFgtU2l0ZS1Ub2tlbiA9IGFjY2Vzc1Rva2VuXG4gICAgLy8gQnVpbGQgUHJldmlldzogUE9TVDogYGh0dHBzOi8vd3BjbWQuazgucmVudGl2by5jb20vcHVibGljL3NpdGUvYnVpbGQtcHJldmlld2BcbiAgICAvLyBCdWlsZCBSZWxlYXNlOiBQT1NUOiBgaHR0cHM6Ly93cGNtZC5rOC5yZW50aXZvLmNvbS9wdWJsaWMvc2l0ZS9idWlsZC1yZWxlYXNlYFxuICAgIC8vIEJ1aWxkIFN0YXR1czogR0VUOiBgaHR0cHM6Ly93cGNtZC5rOC5yZW50aXZvLmNvbS9wdWJsaWMvc2l0ZS9idWlsZC1wcmV2aWV3LyR7bGFzdEJ1aWxkSm9iSWR9YFxuXG5cbiAgICBjb25zdCAkYWRtaW5CYXJNZW51U2Vjb25kYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dwLWFkbWluLWJhci10b3Atc2Vjb25kYXJ5Jyk7XG4gIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0J1dHRvbihpZCwgbGFiZWwsIHByaW1hcnkgPSB0cnVlKSB7XG4gICAgICBjb25zdCAkYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICRidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgICAkYnV0dG9uLmNsYXNzTGlzdC5hZGQoYGJ1dHRvbi0keyhwcmltYXJ5KSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknfWApO1xuICAgICAgJGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tc21hbGwnKTtcbiAgICAgICRidXR0b24uc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xuICAgICAgJGJ1dHRvbi5zdHlsZS5taW5IZWlnaHQgPSAnMjBweCc7XG4gICAgICAkYnV0dG9uLnN0eWxlLmxpbmVIZWlnaHQgPSAnMjBweCc7XG4gICAgICAkYnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9ICc1cHgnO1xuICAgICAgJGJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzAgNnB4JztcbiAgICAgICRidXR0b24uc3R5bGUubWFyZ2luUmlnaHQgPSAnN3B4JztcbiAgICAgICRidXR0b24uaWQgPSBgJHtpZH1gO1xuICAgICAgJGJ1dHRvbi5pbm5lclRleHQgPSBsYWJlbDtcbiAgXG4gICAgICByZXR1cm4gJGJ1dHRvbjtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld01lbnVCdXR0b24oaWQsICRidXR0b25FbCkge1xuICAgICAgY29uc3QgJGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgJGxpLmNsYXNzTGlzdC5hZGQoJ21lbnVwb3AnKVxuICAgICAgJGxpLmlkID0gYCR7aWR9YDtcbiAgICAgICRsaS5hcHBlbmRDaGlsZCgkYnV0dG9uRWwpO1xuICBcbiAgICAgIHJldHVybiAkbGk7XG4gICAgfVxuICBcbiAgICAvLyBCdWlsZCBidXR0b25zXG4gICAgY29uc3QgJGJ1aWxkQnV0dG9uID0gY3JlYXRlTmV3QnV0dG9uKCdidWlsZC1zaXRlJywgJ1B1Ymxpc2gnLCB0cnVlKTtcbiAgICBjb25zdCAkbWVudUl0ZW1CdWlsZEJ1dHRvbiA9IGNyZWF0ZU5ld01lbnVCdXR0b24oJ21lbnUtYnVpbGQtc2l0ZScsICRidWlsZEJ1dHRvbik7XG5cbiAgICBjb25zdCAkdmlld0J1aWxkQnV0dG9uID0gY3JlYXRlTmV3QnV0dG9uKCd2aWV3LWJ1aWxkJywgJ1ZpZXcgTGF0ZXN0JywgdHJ1ZSk7XG4gICAgJHZpZXdCdWlsZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0ICRtZW51SXRlbVZpZXdCdWlsZEJ1dHRvbiA9IGNyZWF0ZU5ld01lbnVCdXR0b24oJ21lbnUtdmlldy1idWlsZCcsICR2aWV3QnVpbGRCdXR0b24pO1xuICAgIFxuICAgIC8vIFByZXZpZXcgYnV0dG9uc1xuICAgIGNvbnN0ICRidWlsZFByZXZpZXdCdXR0b24gPSBjcmVhdGVOZXdCdXR0b24oJ2J1aWxkLXByZXZpZXctc2l0ZScsICdCdWlsZCBQcmV2aWV3JywgZmFsc2UpO1xuICAgIGNvbnN0ICRtZW51SXRlbUJ1aWxkUHJldmlld0J1dHRvbiA9IGNyZWF0ZU5ld01lbnVCdXR0b24oJ21lbnUtYnVpbGQtcHJldmlldy1zaXRlJywgJGJ1aWxkUHJldmlld0J1dHRvbik7XG5cbiAgICBjb25zdCAkdmlld1ByZXZpZXdCdWlsZEJ1dHRvbiA9IGNyZWF0ZU5ld0J1dHRvbigndmlldy1wcmV2aWV3LWJ1aWxkJywgJ1ZpZXcgTGF0ZXN0JywgZmFsc2UpO1xuICAgICR2aWV3UHJldmlld0J1aWxkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgJG1lbnVJdGVtVmlld1ByZXZpZXdCdWlsZEJ1dHRvbiA9IGNyZWF0ZU5ld01lbnVCdXR0b24oJ21lbnUtdmlldy1wcmV2aWV3LWJ1aWxkJywgJHZpZXdQcmV2aWV3QnVpbGRCdXR0b24pO1xuICAgIFxuICAgIC8vIEFkZCB0byBtZW51XG4gICAgJGFkbWluQmFyTWVudVNlY29uZGFyeS5hcHBlbmRDaGlsZCgkbWVudUl0ZW1WaWV3QnVpbGRCdXR0b24pO1xuICAgICRhZG1pbkJhck1lbnVTZWNvbmRhcnkuYXBwZW5kQ2hpbGQoJG1lbnVJdGVtQnVpbGRCdXR0b24pO1xuICAgIFxuICAgICRhZG1pbkJhck1lbnVTZWNvbmRhcnkuYXBwZW5kQ2hpbGQoJG1lbnVJdGVtVmlld1ByZXZpZXdCdWlsZEJ1dHRvbik7XG4gICAgJGFkbWluQmFyTWVudVNlY29uZGFyeS5hcHBlbmRDaGlsZCgkbWVudUl0ZW1CdWlsZFByZXZpZXdCdXR0b24pO1xuICAgIFxuXG4gICAgLy8gQ2hlY2sgYnVpbGQgc3RhdHVzZXNcbiAgICBjb25zdCBjaGVja0xhdGVzdEJ1aWxkSW50diA9IHNldEludGVydmFsKCgpID0+IGNoZWNrTGF0ZXN0QnVpbGRTdGF0dXMobGFzdEJ1aWxkSm9iSWQsICdidWlsZCcpLCAxMjAwMCk7XG4gICAgY29uc3QgY2hlY2tMYXRlc3RCdWlsZFByZXZpZXdJbnR2ID0gc2V0SW50ZXJ2YWwoKCkgPT4gY2hlY2tMYXRlc3RCdWlsZFN0YXR1cyhsYXN0QnVpbGRQcmV2aWV3Sm9iSWQsICdwcmV2aWV3JyksIDEyMDAwKTtcblxuICAgIGNoZWNrTGF0ZXN0QnVpbGRTdGF0dXMobGFzdEJ1aWxkSm9iSWQsICdidWlsZCcpO1xuICAgIGNoZWNrTGF0ZXN0QnVpbGRTdGF0dXMobGFzdEJ1aWxkUHJldmlld0pvYklkLCAncHJldmlldycpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tMYXRlc3RCdWlsZFN0YXR1cyhqb2JJZCwgdHlwZSA9ICdwcmV2aWV3Jykge1xuICAgICAgaWYoam9iSWQpIHtcbiAgICAgICAgZ2V0QnVpbGRTdGF0dXMoam9iSWQsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGUsIGpvYklkLCByZXNwb25zZS5Kb2IuU3RhdHVzLCByZXNwb25zZSk7XG4gICAgICAgICAgaWYocmVzcG9uc2UgJiYgcmVzcG9uc2UuSm9iICYmIHJlc3BvbnNlLkpvYi5TdGF0dXMgPT09ICdSVU5OSU5HJyB8fCByZXNwb25zZS5Kb2IuU3RhdHVzID09PSAnQ1JFQVRFRCcpIHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICdwcmV2aWV3Jykge1xuICAgICAgICAgICAgICAkdmlld1ByZXZpZXdCdWlsZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAkYnVpbGRQcmV2aWV3QnV0dG9uLmlubmVyVGV4dCA9ICdCdWlsZGluZyBwcmV2aWV3Li4uJztcbiAgICAgICAgICAgICAgJGJ1aWxkUHJldmlld0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJHZpZXdCdWlsZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAkYnVpbGRCdXR0b24uaW5uZXJUZXh0ID0gJ0J1aWxkaW5nLi4uJztcbiAgICAgICAgICAgICAgJGJ1aWxkQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzcG9uc2UgJiYgcmVzcG9uc2UuSm9iICYmIChyZXNwb25zZS5Kb2IuU3RhdHVzID09PSAnRkFJTFVSRScgfHwgcmVzcG9uc2UuSm9iLlN0YXR1cyA9PT0gJ1RFUk1JTkFURUQnKSApIHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICdwcmV2aWV3Jykge1xuICAgICAgICAgICAgICAkdmlld1ByZXZpZXdCdWlsZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAkYnVpbGRQcmV2aWV3QnV0dG9uLmlubmVyVGV4dCA9ICdQcmV2aWV3IEZhaWxlZC4gVHJ5IEFnYWluLic7XG4gICAgICAgICAgICAgICRidWlsZFByZXZpZXdCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICR2aWV3QnVpbGRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgJGJ1aWxkQnV0dG9uLmlubmVyVGV4dCA9ICdQdWJsaXNoIEZhaWxlZC4gVHJ5IEFnYWluLic7XG4gICAgICAgICAgICAgICRidWlsZEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJlc3BvbnNlICYmIHJlc3BvbnNlLkpvYiAmJiByZXNwb25zZS5QcmV2aWV3VXJsICYmIHJlc3BvbnNlLkpvYi5TdGF0dXMgPT09ICdTVUNDRVNTJykge1xuICAgICAgICAgICAgaWYodHlwZSA9PT0gJ3ByZXZpZXcnKSB7XG4gICAgICAgICAgICAgIGxhdGVzdFByZXZpZXdWaWV3TGluayA9IHJlc3BvbnNlLlByZXZpZXdVcmw7XG4gICAgICAgICAgICAgICR2aWV3UHJldmlld0J1aWxkQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAkYnVpbGRQcmV2aWV3QnV0dG9uLmlubmVyVGV4dCA9ICdCdWlsZCBQcmV2aWV3JztcbiAgICAgICAgICAgICAgJGJ1aWxkUHJldmlld0J1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJHZpZXdCdWlsZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgJGJ1aWxkQnV0dG9uLmlubmVyVGV4dCA9ICdQdWJsaXNoJztcbiAgICAgICAgICAgICAgJGJ1aWxkQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2codHlwZSwgJ05vIGpvYiBJRCB0byBjaGVjaycpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJldmlldyBCdXR0b24gbGlzdGVuZXJzXG4gICAgJGJ1aWxkUHJldmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBydW5CdWlsZCgncHJldmlldycsICRidWlsZFByZXZpZXdCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgJHZpZXdQcmV2aWV3QnVpbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZihsYXRlc3RQcmV2aWV3Vmlld0xpbmspIHtcbiAgICAgICAgd2luZG93Lm9wZW4obGF0ZXN0UHJldmlld1ZpZXdMaW5rLCBcIl9ibGFua1wiKSB8fCB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShsYXRlc3RQcmV2aWV3Vmlld0xpbmspO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQnVpbGQgQnV0dG9uIGxpc3RlbmVyc1xuICAgICRidWlsZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBydW5CdWlsZCgncmVsZWFzZScsICRidWlsZEJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICAkdmlld0J1aWxkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIFxuICAgICAgaWYobGF0ZXN0QnVpbGRWaWV3TGluaykge1xuICAgICAgICB3aW5kb3cub3BlbihsYXRlc3RCdWlsZFZpZXdMaW5rLCBcIl9ibGFua1wiKSB8fCB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShsYXRlc3RCdWlsZFZpZXdMaW5rKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJ1bkJ1aWxkKHR5cGUgPSAncHJldmlldycsICRidXR0b25FbCkge1xuXG4gICAgICAkYnV0dG9uRWwuaW5uZXJUZXh0ID0gJ1ZlcmlmeWluZy4uLic7XG4gICAgICAkYnV0dG9uRWwuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgcG9zdEJ1aWxkKHR5cGUsIChyZXNwKSA9PiB7XG4gICAgICAgIGlmKHR5cGUgPT09ICdwcmV2aWV3Jykge1xuICAgICAgICAgICRidXR0b25FbC5pbm5lclRleHQgPSAnQnVpbGRpbmcgcHJldmlldy4uLic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGJ1dHRvbkVsLmlubmVyVGV4dCA9ICdQdWJsaXNoaW5nLi4uJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuXG4gICAgICAgIGNvbnN0IGpvYklEID0gcmVzcCAmJiByZXNwLlV1aWQgPyByZXNwLlV1aWQgOiByZXNwICYmIHJlc3AuSm9iICYmIHJlc3AuSm9iLlV1aWQgPyByZXNwLkpvYi5VdWlkIDogbnVsbDtcblxuICAgICAgICAvLyBUT0RPOiBVcGRhdGUgYnVpbGRfaWRzIGZvciBjaGVja2VyLi4uXG4gICAgICAgIGlmKGpvYklEKSB7XG4gICAgICAgICAgcG9zdFVwZGF0ZUJ1aWxkU3RhdHVzKHR5cGUsIGpvYklELCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlZCB3cCBvcHRpb25zJyk7XG4gICAgICAgICAgICBpZih0eXBlID09PSAncHJldmlldycpIHtcbiAgICAgICAgICAgICAgbGFzdEJ1aWxkUHJldmlld0pvYklkID0gam9iSURcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxhc3RCdWlsZEpvYklkID0gam9iSURcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtsYXN0QnVpbGRQcmV2aWV3Sm9iSWQsIGxhc3RCdWlsZEpvYklkfSlcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGpvYiBpZCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgJGJ1dHRvbkVsLmlubmVyVGV4dCA9ICdPb3BzLCBlcnJvcic7XG4gICAgICAgICRidXR0b25FbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgfSlcbiAgICB9XG5cblxuICB9XG5cbiAgXG5cbn0gKTtcblxuLypcbnJlZ2lzdGVyX3Jlc3Rfcm91dGUoJ3NpbWJhL3YxJywgJy9sYXN0X2J1aWxkX2pvYl9pZCcsIFtcbiAgJ21ldGhvZHMnID0+ICdQT1NUJyxcbiAgJ2NhbGxiYWNrJyA9PiBzdGF0aWMgZnVuY3Rpb24gKFxcV1BfUkVTVF9SZXF1ZXN0ICRyZXF1ZXN0KSB7XG4gICAgJGRhdGEgPSBbXTtcbiAgICAkc3RhdHVzID0gMjAwO1xuICAgIGlmKCRyZXF1ZXN0LT5nZXRfcGFyYW0oJ2pvYl9pZCcpKSB7XG4gICAgICB1cGRhdGVfb3B0aW9uKCcnLCAkcmVxdWVzdC0+Z2V0X3BhcmFtKCdqb2JfaWQnKSk7XG4gICAgICAkZGF0YVsnam9iX2lkJ10gPSAkcmVxdWVzdC0+Z2V0X3BhcmFtKCdqb2JfaWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFxcV1BfUkVTVF9SZXNwb25zZSgkZGF0YSwgJHN0YXR1cyk7XG4gIH1cbl0pO1xuKi9cblxuXG5cblxuLy8gQFRPRE8gVGhpcyBpcyBhbiBleGFtcGxlIGNvbnNvbGUubG9nKCkuIFJlbW92ZSBmb3IgcHJvZHVjdGlvblxuLy9jb25zb2xlLmxvZyggJ2FkbWluX3NjcmlwdC5qcycgKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9