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

  function checkForGlobalVars() {
    if (window && window.apps) {
      accessToken = window.apps.access_token;
      lastBuildJobId = window.apps.last_build_job_id;
      lastBuildPreviewJobId = window.apps.last_build_preview_job_id;
      clearInterval(globalVarChecker);
      manageBuildButtons();
    }
  }

  function manageBuildButtons() {
    console.log({
      accessToken: accessToken
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
        url: "https://wpcmd.k8.rentivo.com/public/site/build-".concat(type),
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
        url: "https://wpcmd.k8.rentivo.com/public/site/build-preview/".concat(jobId),
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
      var $button = document.createElement("button");
      $button.classList.add('button');
      $button.classList.add('button-primary');
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
    }

    var $buildButton = createNewButton('build-site', 'Build & Publish');
    var $menuItemBuildButton = createNewMenuButton('menu-build-site', $buildButton);
    var $buildPreviewButton = createNewButton('build-preview-site', 'Build Preview');
    var $menuItemBuildPreviewButton = createNewMenuButton('menu-build-preview-site', $buildPreviewButton);
    $adminBarMenuSecondary.appendChild($menuItemBuildButton);
    $adminBarMenuSecondary.appendChild($menuItemBuildPreviewButton); // Check build statuses

    var checkLatestBuildIntv = setInterval(function () {
      return checkLatestBuildStatus(lastBuildJobId);
    }, 10000);
    var checkLatestBuildPreviewIntv = setInterval(function () {
      return checkLatestBuildStatus(lastBuildPreviewJobId);
    }, 10000);

    function checkLatestBuildStatus(jobId) {
      if (jobId) {
        getBuildStatus(jobId, function (response) {
          console.log('Checking latest build job id', response);
        });
      }
    } // Button listeners


    $buildPreviewButton.addEventListener('click', function (e) {
      e.preventDefault();
      runBuild('preview', $buildPreviewButton);
    }); // Button listeners

    $buildButton.addEventListener('click', function (e) {
      e.preventDefault();
      runBuild('release', $buildButton);
    });

    function runBuild() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'preview';
      var $buttonEl = arguments.length > 1 ? arguments[1] : undefined;
      $buttonEl.innerText = 'Verifying...';
      $buttonEl.setAttribute('disabled');
      postBuild(type, function (resp) {
        $buttonEl.innerText = 'Building...';
        console.log(resp); // TODO: Update build_ids for checker...
        // postUpdateBuildStatus(type, )
      }, function (e) {
        console.error(e);
        $buttonEl.innerText = 'Oops, error';
        $buttonEl.removeAttribute('disabled');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvYWRtaW4vanMvc2NyaXB0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiYWNjZXNzVG9rZW4iLCJsYXN0QnVpbGRKb2JJZCIsImxhc3RCdWlsZFByZXZpZXdKb2JJZCIsImdsb2JhbFZhckNoZWNrZXIiLCJzZXRJbnRlcnZhbCIsImNoZWNrRm9yR2xvYmFsVmFycyIsIndpbmRvdyIsImFwcHMiLCJhY2Nlc3NfdG9rZW4iLCJsYXN0X2J1aWxkX2pvYl9pZCIsImxhc3RfYnVpbGRfcHJldmlld19qb2JfaWQiLCJjbGVhckludGVydmFsIiwibWFuYWdlQnVpbGRCdXR0b25zIiwiY29uc29sZSIsImxvZyIsInBvc3RCdWlsZCIsInR5cGUiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwibWV0aG9kIiwic3VjY2VzcyIsImVycm9yIiwiaGVhZGVycyIsImdldEJ1aWxkU3RhdHVzIiwiam9iSWQiLCJwb3N0VXBkYXRlQnVpbGRTdGF0dXMiLCJkYXRhIiwiam9iX2lkIiwiJGFkbWluQmFyTWVudVNlY29uZGFyeSIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlTmV3QnV0dG9uIiwiaWQiLCJsYWJlbCIsIiRidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwicGFkZGluZyIsIm1hcmdpblJpZ2h0IiwiaW5uZXJUZXh0IiwiY3JlYXRlTmV3TWVudUJ1dHRvbiIsIiRidXR0b25FbCIsIiRsaSIsImFwcGVuZENoaWxkIiwiJGJ1aWxkQnV0dG9uIiwiJG1lbnVJdGVtQnVpbGRCdXR0b24iLCIkYnVpbGRQcmV2aWV3QnV0dG9uIiwiJG1lbnVJdGVtQnVpbGRQcmV2aWV3QnV0dG9uIiwiY2hlY2tMYXRlc3RCdWlsZEludHYiLCJjaGVja0xhdGVzdEJ1aWxkU3RhdHVzIiwiY2hlY2tMYXRlc3RCdWlsZFByZXZpZXdJbnR2IiwicmVzcG9uc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicnVuQnVpbGQiLCJzZXRBdHRyaWJ1dGUiLCJyZXNwIiwicmVtb3ZlQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNB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QUNGLFNBQVYsR0FBc0IsY0FBdEI7QUFDQUUsZUFBUyxDQUFDZSxZQUFWLENBQXVCLFVBQXZCO0FBRUFqRCxlQUFTLENBQUNDLElBQUQsRUFBTyxVQUFDaUQsSUFBRCxFQUFVO0FBQ3hCaEIsaUJBQVMsQ0FBQ0YsU0FBVixHQUFzQixhQUF0QjtBQUNBbEMsZUFBTyxDQUFDQyxHQUFSLENBQVltRCxJQUFaLEVBRndCLENBR3hCO0FBQ0E7QUFDRCxPQUxRLEVBS04sVUFBQ0osQ0FBRCxFQUFPO0FBQ1JoRCxlQUFPLENBQUNXLEtBQVIsQ0FBY3FDLENBQWQ7QUFDQVosaUJBQVMsQ0FBQ0YsU0FBVixHQUFzQixhQUF0QjtBQUNBRSxpQkFBUyxDQUFDaUIsZUFBVixDQUEwQixVQUExQjtBQUNELE9BVFEsQ0FBVDtBQVVEO0FBR0Y7QUFJRixDQXZKRDtBQTBKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQ2hOQSx3QiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RldmVsb3BtZW50L2FkbWluL2pzL3NjcmlwdC5qc1wiKTtcbiIsIi8qKlxuICogQWxsIG9mIHRoZSBjb2RlIGZvciB5b3VyIGFkbWluLWZhY2luZyBKYXZhU2NyaXB0IHNvdXJjZVxuICogc2hvdWxkIHJlc2lkZSBpbiB0aGUgZmlsZSBcImRldmVsb3BtZW50L2FkbWluL2pzL3NjcmlwdC5qc1wiLlxuICpcbiAqIE5vdGU6IEl0IGhhcyBiZWVuIGFzc3VtZWQgeW91IHdpbGwgd3JpdGUgalF1ZXJ5IGNvZGUgaGVyZSwgc28gdGhlXG4gKiAkIGZ1bmN0aW9uIHJlZmVyZW5jZSBoYXMgYmVlbiBwcmVwYXJlZCAoaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jylmb3IgdXNhZ2Ugd2l0aGluIHRoZSBzY29wZVxuICogb2YgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBUaGlzIGVuYWJsZXMgeW91IHRvIGRlZmluZSBoYW5kbGVycywgZm9yIHdoZW4gdGhlIERPTSBpcyByZWFkeTpcbiAqXG4gKiAkKGZ1bmN0aW9uKCkge1xuICpcbiAqIH0pO1xuICpcbiAqIFdoZW4gdGhlIHdpbmRvdyBpcyBsb2FkZWQ6XG4gKlxuICogJCggd2luZG93ICkubG9hZChmdW5jdGlvbigpIHtcbiAqXG4gKiB9KTtcbiAqXG4gKiAuLi5hbmQvb3Igb3RoZXIgcG9zc2liaWxpdGllcy5cbiAqXG4gKiBJZGVhbGx5LCBpdCBpcyBub3QgY29uc2lkZXJlZCBiZXN0IHByYWN0aXNlIHRvIGF0dGFjaCBtb3JlIHRoYW4gYVxuICogc2luZ2xlIERPTS1yZWFkeSBvciB3aW5kb3ctbG9hZCBoYW5kbGVyIGZvciBhIHBhcnRpY3VsYXIgcGFnZS5cbiAqIEFsdGhvdWdoIHNjcmlwdHMgaW4gdGhlIFdvcmRQcmVzcyBjb3JlLCBQbHVnaW5zIGFuZCBUaGVtZXMgbWF5IGJlXG4gKiBwcmFjdGlzaW5nIHRoaXMsIHdlIHNob3VsZCBzdHJpdmUgdG8gc2V0IGEgYmV0dGVyIGV4YW1wbGUgaW4gb3VyIG93biB3b3JrLlxuICpcbiAqIFRoZSBmaWxlIGlzIGVucXVldWVkIGZyb20gc3JjL2FkbWluL2NsYXNzLWFzc2V0cy5waHAuXG4gKi9cbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5Jztcbi8vIC8vIEBUT0RPIFRoaXMgaXMgYW4gZXhhbXBsZSBpbXBvcnQuIFJlbW92ZSBmb3IgcHJvZHVjdGlvblxuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvdGVzdCc7XG5cblxualF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbiAoJCkge1xuXG4gIGxldCBhY2Nlc3NUb2tlbiA9ICcnO1xuICBsZXQgbGFzdEJ1aWxkSm9iSWQgPSAnJztcbiAgbGV0IGxhc3RCdWlsZFByZXZpZXdKb2JJZCA9ICcnO1xuICBsZXQgZ2xvYmFsVmFyQ2hlY2tlciA9IHNldEludGVydmFsKGNoZWNrRm9yR2xvYmFsVmFycywgNTAwKTtcblxuICBmdW5jdGlvbiBjaGVja0Zvckdsb2JhbFZhcnMoKSB7XG4gICAgaWYod2luZG93ICYmIHdpbmRvdy5hcHBzKSB7XG4gICAgICBhY2Nlc3NUb2tlbiA9IHdpbmRvdy5hcHBzLmFjY2Vzc190b2tlbjtcbiAgICAgIGxhc3RCdWlsZEpvYklkID0gd2luZG93LmFwcHMubGFzdF9idWlsZF9qb2JfaWQ7XG4gICAgICBsYXN0QnVpbGRQcmV2aWV3Sm9iSWQgPSB3aW5kb3cuYXBwcy5sYXN0X2J1aWxkX3ByZXZpZXdfam9iX2lkO1xuICAgICAgY2xlYXJJbnRlcnZhbChnbG9iYWxWYXJDaGVja2VyKTtcbiAgICAgIG1hbmFnZUJ1aWxkQnV0dG9ucygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hbmFnZUJ1aWxkQnV0dG9ucygpIHtcbiAgICBjb25zb2xlLmxvZyh7YWNjZXNzVG9rZW59KTtcblxuICAgIGlmKCFhY2Nlc3NUb2tlbikge1xuICAgICAgY29uc29sZS5sb2coJ05vIGFjY2VzcyB0b2tlbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvc3RCdWlsZCh0eXBlID0gJ3ByZXZpZXcnLCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYGh0dHBzOi8vd3BjbWQuazgucmVudGl2by5jb20vcHVibGljL3NpdGUvYnVpbGQtJHt0eXBlfWAsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBzdWNjZXNzQ2FsbGJhY2ssXG4gICAgICAgIGVycm9yOiBlcnJvckNhbGxiYWNrLFxuICAgICAgICBoZWFkZXJzOiB7ICdYLVNpdGUtVG9rZW4nOiBhY2Nlc3NUb2tlbiB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCdWlsZFN0YXR1cyhqb2JJZCwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGBodHRwczovL3dwY21kLms4LnJlbnRpdm8uY29tL3B1YmxpYy9zaXRlL2J1aWxkLXByZXZpZXcvJHtqb2JJZH1gLFxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzOiBzdWNjZXNzQ2FsbGJhY2ssXG4gICAgICAgIGVycm9yOiBlcnJvckNhbGxiYWNrLFxuICAgICAgICBoZWFkZXJzOiB7ICdYLVNpdGUtVG9rZW4nOiBhY2Nlc3NUb2tlbiB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3N0VXBkYXRlQnVpbGRTdGF0dXModHlwZSA9ICdwcmV2aWV3Jywgam9iSWQsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgL3dwLWpzb24vc2ltYmEvdjEvJHt0eXBlID09PSAncHJldmlldycgPyAnbGFzdF9idWlsZF9wcmV2aWV3X2pvYl9pZCcgOiAnbGFzdF9idWlsZF9qb2JfaWQnfWAsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBqb2JfaWQ6IGpvYklkXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBzdWNjZXNzQ2FsbGJhY2ssXG4gICAgICAgIGVycm9yOiBlcnJvckNhbGxiYWNrLFxuICAgICAgICBoZWFkZXJzOiB7ICdYLVNpdGUtVG9rZW4nOiBhY2Nlc3NUb2tlbiB9XG4gICAgICB9KTtcbiAgICB9XG4gIFxuICAgIC8vIEhlYWRlcnM6ICRoZWFkZXJzID0gWC1TaXRlLVRva2VuID0gYWNjZXNzVG9rZW5cbiAgICAvLyBCdWlsZCBQcmV2aWV3OiBQT1NUOiBgaHR0cHM6Ly93cGNtZC5rOC5yZW50aXZvLmNvbS9wdWJsaWMvc2l0ZS9idWlsZC1wcmV2aWV3YFxuICAgIC8vIEJ1aWxkIFJlbGVhc2U6IFBPU1Q6IGBodHRwczovL3dwY21kLms4LnJlbnRpdm8uY29tL3B1YmxpYy9zaXRlL2J1aWxkLXJlbGVhc2VgXG4gICAgLy8gQnVpbGQgU3RhdHVzOiBHRVQ6IGBodHRwczovL3dwY21kLms4LnJlbnRpdm8uY29tL3B1YmxpYy9zaXRlL2J1aWxkLXByZXZpZXcvJHtsYXN0QnVpbGRKb2JJZH1gXG5cblxuICAgIGNvbnN0ICRhZG1pbkJhck1lbnVTZWNvbmRhcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3AtYWRtaW4tYmFyLXRvcC1zZWNvbmRhcnknKTtcbiAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3QnV0dG9uKGlkLCBsYWJlbCkge1xuICAgICAgY29uc3QgJGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAkYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgICAgJGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tcHJpbWFyeScpO1xuICAgICAgJGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tc21hbGwnKTtcbiAgICAgICRidXR0b24uc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xuICAgICAgJGJ1dHRvbi5zdHlsZS5taW5IZWlnaHQgPSAnMjBweCc7XG4gICAgICAkYnV0dG9uLnN0eWxlLmxpbmVIZWlnaHQgPSAnMjBweCc7XG4gICAgICAkYnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9ICc1cHgnO1xuICAgICAgJGJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzAgNnB4JztcbiAgICAgICRidXR0b24uc3R5bGUubWFyZ2luUmlnaHQgPSAnN3B4JztcbiAgICAgICRidXR0b24uaWQgPSBgJHtpZH1gO1xuICAgICAgJGJ1dHRvbi5pbm5lclRleHQgPSBsYWJlbDtcbiAgXG4gICAgICByZXR1cm4gJGJ1dHRvbjtcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld01lbnVCdXR0b24oaWQsICRidXR0b25FbCkge1xuICAgICAgY29uc3QgJGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgJGxpLmNsYXNzTGlzdC5hZGQoJ21lbnVwb3AnKVxuICAgICAgJGxpLmlkID0gYCR7aWR9YDtcbiAgICAgICRsaS5hcHBlbmRDaGlsZCgkYnV0dG9uRWwpO1xuICBcbiAgICAgIHJldHVybiAkbGk7XG4gICAgfVxuICBcbiAgICBjb25zdCAkYnVpbGRCdXR0b24gPSBjcmVhdGVOZXdCdXR0b24oJ2J1aWxkLXNpdGUnLCAnQnVpbGQgJiBQdWJsaXNoJyk7XG4gICAgY29uc3QgJG1lbnVJdGVtQnVpbGRCdXR0b24gPSBjcmVhdGVOZXdNZW51QnV0dG9uKCdtZW51LWJ1aWxkLXNpdGUnLCAkYnVpbGRCdXR0b24pO1xuICBcbiAgICBjb25zdCAkYnVpbGRQcmV2aWV3QnV0dG9uID0gY3JlYXRlTmV3QnV0dG9uKCdidWlsZC1wcmV2aWV3LXNpdGUnLCAnQnVpbGQgUHJldmlldycpO1xuICAgIGNvbnN0ICRtZW51SXRlbUJ1aWxkUHJldmlld0J1dHRvbiA9IGNyZWF0ZU5ld01lbnVCdXR0b24oJ21lbnUtYnVpbGQtcHJldmlldy1zaXRlJywgJGJ1aWxkUHJldmlld0J1dHRvbik7XG4gIFxuICAgICRhZG1pbkJhck1lbnVTZWNvbmRhcnkuYXBwZW5kQ2hpbGQoJG1lbnVJdGVtQnVpbGRCdXR0b24pO1xuICAgICRhZG1pbkJhck1lbnVTZWNvbmRhcnkuYXBwZW5kQ2hpbGQoJG1lbnVJdGVtQnVpbGRQcmV2aWV3QnV0dG9uKTtcbiAgXG5cbiAgICAvLyBDaGVjayBidWlsZCBzdGF0dXNlc1xuICAgIGNvbnN0IGNoZWNrTGF0ZXN0QnVpbGRJbnR2ID0gc2V0SW50ZXJ2YWwoKCkgPT4gY2hlY2tMYXRlc3RCdWlsZFN0YXR1cyhsYXN0QnVpbGRKb2JJZCksIDEwMDAwKTtcbiAgICBjb25zdCBjaGVja0xhdGVzdEJ1aWxkUHJldmlld0ludHYgPSBzZXRJbnRlcnZhbCgoKSA9PiBjaGVja0xhdGVzdEJ1aWxkU3RhdHVzKGxhc3RCdWlsZFByZXZpZXdKb2JJZCksIDEwMDAwKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrTGF0ZXN0QnVpbGRTdGF0dXMoam9iSWQpIHtcbiAgICAgIGlmKGpvYklkKSB7XG4gICAgICAgIGdldEJ1aWxkU3RhdHVzKGpvYklkLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ2hlY2tpbmcgbGF0ZXN0IGJ1aWxkIGpvYiBpZCcsIHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCdXR0b24gbGlzdGVuZXJzXG4gICAgJGJ1aWxkUHJldmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBydW5CdWlsZCgncHJldmlldycsICRidWlsZFByZXZpZXdCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgLy8gQnV0dG9uIGxpc3RlbmVyc1xuICAgICRidWlsZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBydW5CdWlsZCgncmVsZWFzZScsICRidWlsZEJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBydW5CdWlsZCh0eXBlID0gJ3ByZXZpZXcnLCAkYnV0dG9uRWwpIHtcblxuICAgICAgJGJ1dHRvbkVsLmlubmVyVGV4dCA9ICdWZXJpZnlpbmcuLi4nO1xuICAgICAgJGJ1dHRvbkVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgICAgcG9zdEJ1aWxkKHR5cGUsIChyZXNwKSA9PiB7XG4gICAgICAgICRidXR0b25FbC5pbm5lclRleHQgPSAnQnVpbGRpbmcuLi4nO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgLy8gVE9ETzogVXBkYXRlIGJ1aWxkX2lkcyBmb3IgY2hlY2tlci4uLlxuICAgICAgICAvLyBwb3N0VXBkYXRlQnVpbGRTdGF0dXModHlwZSwgKVxuICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgJGJ1dHRvbkVsLmlubmVyVGV4dCA9ICdPb3BzLCBlcnJvcic7XG4gICAgICAgICRidXR0b25FbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9KVxuICAgIH1cblxuXG4gIH1cblxuICBcblxufSApO1xuXG5cbi8qXG5yZWdpc3Rlcl9yZXN0X3JvdXRlKCdzaW1iYS92MScsICcvbGFzdF9idWlsZF9qb2JfaWQnLCBbXG4gICdtZXRob2RzJyA9PiAnUE9TVCcsXG4gICdjYWxsYmFjaycgPT4gc3RhdGljIGZ1bmN0aW9uIChcXFdQX1JFU1RfUmVxdWVzdCAkcmVxdWVzdCkge1xuICAgICRkYXRhID0gW107XG4gICAgJHN0YXR1cyA9IDIwMDtcbiAgICBpZigkcmVxdWVzdC0+Z2V0X3BhcmFtKCdqb2JfaWQnKSkge1xuICAgICAgdXBkYXRlX29wdGlvbignJywgJHJlcXVlc3QtPmdldF9wYXJhbSgnam9iX2lkJykpO1xuICAgICAgJGRhdGFbJ2pvYl9pZCddID0gJHJlcXVlc3QtPmdldF9wYXJhbSgnam9iX2lkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBcXFdQX1JFU1RfUmVzcG9uc2UoJGRhdGEsICRzdGF0dXMpO1xuICB9XG5dKTtcbiovXG5cblxuXG5cbi8vIEBUT0RPIFRoaXMgaXMgYW4gZXhhbXBsZSBjb25zb2xlLmxvZygpLiBSZW1vdmUgZm9yIHByb2R1Y3Rpb25cbi8vY29uc29sZS5sb2coICdhZG1pbl9zY3JpcHQuanMnICk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==