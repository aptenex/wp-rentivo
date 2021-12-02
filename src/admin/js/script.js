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
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prevew';
      var $buttonEl = arguments.length > 1 ? arguments[1] : undefined;
      postBuild(type, function (resp) {
        $buttonEl.innerText = 'Building...';
        $buttonEl.setAttribute('disabled'); // TODO: Update build_ids for checker...
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvYWRtaW4vanMvc2NyaXB0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCIkIiwiYWNjZXNzVG9rZW4iLCJsYXN0QnVpbGRKb2JJZCIsImxhc3RCdWlsZFByZXZpZXdKb2JJZCIsImdsb2JhbFZhckNoZWNrZXIiLCJzZXRJbnRlcnZhbCIsImNoZWNrRm9yR2xvYmFsVmFycyIsIndpbmRvdyIsImFwcHMiLCJhY2Nlc3NfdG9rZW4iLCJsYXN0X2J1aWxkX2pvYl9pZCIsImxhc3RfYnVpbGRfcHJldmlld19qb2JfaWQiLCJjbGVhckludGVydmFsIiwibWFuYWdlQnVpbGRCdXR0b25zIiwiY29uc29sZSIsImxvZyIsInBvc3RCdWlsZCIsInR5cGUiLCJzdWNjZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsImVycm9yIiwiaGVhZGVycyIsImdldEJ1aWxkU3RhdHVzIiwiam9iSWQiLCIkYWRtaW5CYXJNZW51U2Vjb25kYXJ5IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVOZXdCdXR0b24iLCJpZCIsImxhYmVsIiwiJGJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImhlaWdodCIsIm1pbkhlaWdodCIsImxpbmVIZWlnaHQiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwibWFyZ2luUmlnaHQiLCJpbm5lclRleHQiLCJjcmVhdGVOZXdNZW51QnV0dG9uIiwiJGJ1dHRvbkVsIiwiJGxpIiwiYXBwZW5kQ2hpbGQiLCIkYnVpbGRCdXR0b24iLCIkbWVudUl0ZW1CdWlsZEJ1dHRvbiIsIiRidWlsZFByZXZpZXdCdXR0b24iLCIkbWVudUl0ZW1CdWlsZFByZXZpZXdCdXR0b24iLCJjaGVja0xhdGVzdEJ1aWxkSW50diIsImNoZWNrTGF0ZXN0QnVpbGRTdGF0dXMiLCJjaGVja0xhdGVzdEJ1aWxkUHJldmlld0ludHYiLCJyZXNwb25zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJydW5CdWlsZCIsInJlc3AiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBR0FBLDZDQUFNLENBQUVDLFFBQUYsQ0FBTixDQUFtQkMsS0FBbkIsQ0FBMEIs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QVksOEJBQVosRUFBNEN5QyxRQUE1QztBQUNELFNBRmEsQ0FBZDtBQUdEO0FBQ0YsS0FsRjJCLENBb0Y1Qjs7O0FBQ0FMLHVCQUFtQixDQUFDTSxnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25EQSxPQUFDLENBQUNDLGNBQUY7QUFDQUMsY0FBUSxDQUFDLFNBQUQsRUFBWVQsbUJBQVosQ0FBUjtBQUNELEtBSEQsRUFyRjRCLENBMEY1Qjs7QUFDQUYsZ0JBQVksQ0FBQ1EsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzVDQSxPQUFDLENBQUNDLGNBQUY7QUFDQUMsY0FBUSxDQUFDLFNBQUQsRUFBWVgsWUFBWixDQUFSO0FBQ0QsS0FIRDs7QUFLQSxhQUFTVyxRQUFULEdBQThDO0FBQUEsVUFBNUIzQyxJQUE0Qix1RUFBckIsUUFBcUI7QUFBQSxVQUFYNkIsU0FBVztBQUM1QzlCLGVBQVMsQ0FBQ0MsSUFBRCxFQUFPLFVBQUM0QyxJQUFELEVBQVU7QUFDeEJmLGlCQUFTLENBQUNGLFNBQVYsR0FBc0IsYUFBdEI7QUFDQUUsaUJBQVMsQ0FBQ2dCLFlBQVYsQ0FBdUIsVUFBdkIsRUFGd0IsQ0FJeEI7QUFHRCxPQVBRLEVBT04sVUFBQ0osQ0FBRCxFQUFPO0FBQ1I1QyxlQUFPLENBQUNVLEtBQVIsQ0FBY2tDLENBQWQ7QUFDQVosaUJBQVMsQ0FBQ0YsU0FBVixHQUFzQixhQUF0QjtBQUNBRSxpQkFBUyxDQUFDaUIsZUFBVixDQUEwQixVQUExQjtBQUNELE9BWFEsQ0FBVDtBQVlEO0FBR0Y7QUFJRixDQXRJRDtBQXlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQy9MQSx3QiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RldmVsb3BtZW50L2FkbWluL2pzL3NjcmlwdC5qc1wiKTtcbiIsIi8qKlxuICogQWxsIG9mIHRoZSBjb2RlIGZvciB5b3VyIGFkbWluLWZhY2luZyBKYXZhU2NyaXB0IHNvdXJjZVxuICogc2hvdWxkIHJlc2lkZSBpbiB0aGUgZmlsZSBcImRldmVsb3BtZW50L2FkbWluL2pzL3NjcmlwdC5qc1wiLlxuICpcbiAqIE5vdGU6IEl0IGhhcyBiZWVuIGFzc3VtZWQgeW91IHdpbGwgd3JpdGUgalF1ZXJ5IGNvZGUgaGVyZSwgc28gdGhlXG4gKiAkIGZ1bmN0aW9uIHJlZmVyZW5jZSBoYXMgYmVlbiBwcmVwYXJlZCAoaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jylmb3IgdXNhZ2Ugd2l0aGluIHRoZSBzY29wZVxuICogb2YgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBUaGlzIGVuYWJsZXMgeW91IHRvIGRlZmluZSBoYW5kbGVycywgZm9yIHdoZW4gdGhlIERPTSBpcyByZWFkeTpcbiAqXG4gKiAkKGZ1bmN0aW9uKCkge1xuICpcbiAqIH0pO1xuICpcbiAqIFdoZW4gdGhlIHdpbmRvdyBpcyBsb2FkZWQ6XG4gKlxuICogJCggd2luZG93ICkubG9hZChmdW5jdGlvbigpIHtcbiAqXG4gKiB9KTtcbiAqXG4gKiAuLi5hbmQvb3Igb3RoZXIgcG9zc2liaWxpdGllcy5cbiAqXG4gKiBJZGVhbGx5LCBpdCBpcyBub3QgY29uc2lkZXJlZCBiZXN0IHByYWN0aXNlIHRvIGF0dGFjaCBtb3JlIHRoYW4gYVxuICogc2luZ2xlIERPTS1yZWFkeSBvciB3aW5kb3ctbG9hZCBoYW5kbGVyIGZvciBhIHBhcnRpY3VsYXIgcGFnZS5cbiAqIEFsdGhvdWdoIHNjcmlwdHMgaW4gdGhlIFdvcmRQcmVzcyBjb3JlLCBQbHVnaW5zIGFuZCBUaGVtZXMgbWF5IGJlXG4gKiBwcmFjdGlzaW5nIHRoaXMsIHdlIHNob3VsZCBzdHJpdmUgdG8gc2V0IGEgYmV0dGVyIGV4YW1wbGUgaW4gb3VyIG93biB3b3JrLlxuICpcbiAqIFRoZSBmaWxlIGlzIGVucXVldWVkIGZyb20gc3JjL2FkbWluL2NsYXNzLWFzc2V0cy5waHAuXG4gKi9cbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5Jztcbi8vIC8vIEBUT0RPIFRoaXMgaXMgYW4gZXhhbXBsZSBpbXBvcnQuIFJlbW92ZSBmb3IgcHJvZHVjdGlvblxuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvdGVzdCc7XG5cblxualF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbiAoJCkge1xuXG4gIGxldCBhY2Nlc3NUb2tlbiA9ICcnO1xuICBsZXQgbGFzdEJ1aWxkSm9iSWQgPSAnJztcbiAgbGV0IGxhc3RCdWlsZFByZXZpZXdKb2JJZCA9ICcnO1xuICBsZXQgZ2xvYmFsVmFyQ2hlY2tlciA9IHNldEludGVydmFsKGNoZWNrRm9yR2xvYmFsVmFycywgNTAwKTtcblxuICBmdW5jdGlvbiBjaGVja0Zvckdsb2JhbFZhcnMoKSB7XG4gICAgaWYod2luZG93ICYmIHdpbmRvdy5hcHBzKSB7XG4gICAgICBhY2Nlc3NUb2tlbiA9IHdpbmRvdy5hcHBzLmFjY2Vzc190b2tlbjtcbiAgICAgIGxhc3RCdWlsZEpvYklkID0gd2luZG93LmFwcHMubGFzdF9idWlsZF9qb2JfaWQ7XG4gICAgICBsYXN0QnVpbGRQcmV2aWV3Sm9iSWQgPSB3aW5kb3cuYXBwcy5sYXN0X2J1aWxkX3ByZXZpZXdfam9iX2lkO1xuICAgICAgY2xlYXJJbnRlcnZhbChnbG9iYWxWYXJDaGVja2VyKTtcbiAgICAgIG1hbmFnZUJ1aWxkQnV0dG9ucygpO1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gbWFuYWdlQnVpbGRCdXR0b25zKCkge1xuICAgIGNvbnNvbGUubG9nKHthY2Nlc3NUb2tlbn0pO1xuXG4gICAgaWYoIWFjY2Vzc1Rva2VuKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gYWNjZXNzIHRva2VuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zdEJ1aWxkKHR5cGUgPSAncHJldmlldycsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly93cGNtZC5rOC5yZW50aXZvLmNvbS9wdWJsaWMvc2l0ZS9idWlsZC0ke3R5cGV9YCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgc3VjY2Vzczogc3VjY2Vzc0NhbGxiYWNrLFxuICAgICAgICBlcnJvcjogZXJyb3JDYWxsYmFjayxcbiAgICAgICAgaGVhZGVyczogeyAnWC1TaXRlLVRva2VuJzogYWNjZXNzVG9rZW4gfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QnVpbGRTdGF0dXMoam9iSWQsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly93cGNtZC5rOC5yZW50aXZvLmNvbS9wdWJsaWMvc2l0ZS9idWlsZC1wcmV2aWV3LyR7am9iSWR9YCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgc3VjY2Vzczogc3VjY2Vzc0NhbGxiYWNrLFxuICAgICAgICBlcnJvcjogZXJyb3JDYWxsYmFjayxcbiAgICAgICAgaGVhZGVyczogeyAnWC1TaXRlLVRva2VuJzogYWNjZXNzVG9rZW4gfVxuICAgICAgfSk7XG4gICAgfVxuICBcbiAgICAvLyBIZWFkZXJzOiAkaGVhZGVycyA9IFgtU2l0ZS1Ub2tlbiA9IGFjY2Vzc1Rva2VuXG4gICAgLy8gQnVpbGQgUHJldmlldzogUE9TVDogYGh0dHBzOi8vd3BjbWQuazgucmVudGl2by5jb20vcHVibGljL3NpdGUvYnVpbGQtcHJldmlld2BcbiAgICAvLyBCdWlsZCBSZWxlYXNlOiBQT1NUOiBgaHR0cHM6Ly93cGNtZC5rOC5yZW50aXZvLmNvbS9wdWJsaWMvc2l0ZS9idWlsZC1yZWxlYXNlYFxuICAgIC8vIEJ1aWxkIFN0YXR1czogR0VUOiBgaHR0cHM6Ly93cGNtZC5rOC5yZW50aXZvLmNvbS9wdWJsaWMvc2l0ZS9idWlsZC1wcmV2aWV3LyR7bGFzdEJ1aWxkSm9iSWR9YFxuXG5cbiAgICBjb25zdCAkYWRtaW5CYXJNZW51U2Vjb25kYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dwLWFkbWluLWJhci10b3Atc2Vjb25kYXJ5Jyk7XG4gIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0J1dHRvbihpZCwgbGFiZWwpIHtcbiAgICAgIGNvbnN0ICRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgJGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICAgICRidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXByaW1hcnknKTtcbiAgICAgICRidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXNtYWxsJyk7XG4gICAgICAkYnV0dG9uLnN0eWxlLmhlaWdodCA9ICcyMHB4JztcbiAgICAgICRidXR0b24uc3R5bGUubWluSGVpZ2h0ID0gJzIwcHgnO1xuICAgICAgJGJ1dHRvbi5zdHlsZS5saW5lSGVpZ2h0ID0gJzIwcHgnO1xuICAgICAgJGJ1dHRvbi5zdHlsZS5tYXJnaW5Ub3AgPSAnNXB4JztcbiAgICAgICRidXR0b24uc3R5bGUucGFkZGluZyA9ICcwIDZweCc7XG4gICAgICAkYnV0dG9uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzdweCc7XG4gICAgICAkYnV0dG9uLmlkID0gYCR7aWR9YDtcbiAgICAgICRidXR0b24uaW5uZXJUZXh0ID0gbGFiZWw7XG4gIFxuICAgICAgcmV0dXJuICRidXR0b247XG4gICAgfVxuICBcbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdNZW51QnV0dG9uKGlkLCAkYnV0dG9uRWwpIHtcbiAgICAgIGNvbnN0ICRsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICRsaS5jbGFzc0xpc3QuYWRkKCdtZW51cG9wJylcbiAgICAgICRsaS5pZCA9IGAke2lkfWA7XG4gICAgICAkbGkuYXBwZW5kQ2hpbGQoJGJ1dHRvbkVsKTtcbiAgXG4gICAgICByZXR1cm4gJGxpO1xuICAgIH1cbiAgXG4gICAgY29uc3QgJGJ1aWxkQnV0dG9uID0gY3JlYXRlTmV3QnV0dG9uKCdidWlsZC1zaXRlJywgJ0J1aWxkICYgUHVibGlzaCcpO1xuICAgIGNvbnN0ICRtZW51SXRlbUJ1aWxkQnV0dG9uID0gY3JlYXRlTmV3TWVudUJ1dHRvbignbWVudS1idWlsZC1zaXRlJywgJGJ1aWxkQnV0dG9uKTtcbiAgXG4gICAgY29uc3QgJGJ1aWxkUHJldmlld0J1dHRvbiA9IGNyZWF0ZU5ld0J1dHRvbignYnVpbGQtcHJldmlldy1zaXRlJywgJ0J1aWxkIFByZXZpZXcnKTtcbiAgICBjb25zdCAkbWVudUl0ZW1CdWlsZFByZXZpZXdCdXR0b24gPSBjcmVhdGVOZXdNZW51QnV0dG9uKCdtZW51LWJ1aWxkLXByZXZpZXctc2l0ZScsICRidWlsZFByZXZpZXdCdXR0b24pO1xuICBcbiAgICAkYWRtaW5CYXJNZW51U2Vjb25kYXJ5LmFwcGVuZENoaWxkKCRtZW51SXRlbUJ1aWxkQnV0dG9uKTtcbiAgICAkYWRtaW5CYXJNZW51U2Vjb25kYXJ5LmFwcGVuZENoaWxkKCRtZW51SXRlbUJ1aWxkUHJldmlld0J1dHRvbik7XG4gIFxuXG4gICAgLy8gQ2hlY2sgYnVpbGQgc3RhdHVzZXNcbiAgICBjb25zdCBjaGVja0xhdGVzdEJ1aWxkSW50diA9IHNldEludGVydmFsKCgpID0+IGNoZWNrTGF0ZXN0QnVpbGRTdGF0dXMobGFzdEJ1aWxkSm9iSWQpLCAxMDAwMCk7XG4gICAgY29uc3QgY2hlY2tMYXRlc3RCdWlsZFByZXZpZXdJbnR2ID0gc2V0SW50ZXJ2YWwoKCkgPT4gY2hlY2tMYXRlc3RCdWlsZFN0YXR1cyhsYXN0QnVpbGRQcmV2aWV3Sm9iSWQpLCAxMDAwMCk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0xhdGVzdEJ1aWxkU3RhdHVzKGpvYklkKSB7XG4gICAgICBpZihqb2JJZCkge1xuICAgICAgICBnZXRCdWlsZFN0YXR1cyhqb2JJZCwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0NoZWNraW5nIGxhdGVzdCBidWlsZCBqb2IgaWQnLCByZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnV0dG9uIGxpc3RlbmVyc1xuICAgICRidWlsZFByZXZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcnVuQnVpbGQoJ3ByZXZpZXcnLCAkYnVpbGRQcmV2aWV3QnV0dG9uKTtcbiAgICB9KTtcblxuICAgIC8vIEJ1dHRvbiBsaXN0ZW5lcnNcbiAgICAkYnVpbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcnVuQnVpbGQoJ3JlbGVhc2UnLCAkYnVpbGRCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gcnVuQnVpbGQodHlwZSA9ICdwcmV2ZXcnLCAkYnV0dG9uRWwpIHtcbiAgICAgIHBvc3RCdWlsZCh0eXBlLCAocmVzcCkgPT4ge1xuICAgICAgICAkYnV0dG9uRWwuaW5uZXJUZXh0ID0gJ0J1aWxkaW5nLi4uJztcbiAgICAgICAgJGJ1dHRvbkVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgICAgICAvLyBUT0RPOiBVcGRhdGUgYnVpbGRfaWRzIGZvciBjaGVja2VyLi4uXG5cblxuICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgJGJ1dHRvbkVsLmlubmVyVGV4dCA9ICdPb3BzLCBlcnJvcic7XG4gICAgICAgICRidXR0b25FbC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB9KVxuICAgIH1cblxuXG4gIH1cblxuICBcblxufSApO1xuXG5cbi8qXG5yZWdpc3Rlcl9yZXN0X3JvdXRlKCdzaW1iYS92MScsICcvbGFzdF9idWlsZF9qb2JfaWQnLCBbXG4gICdtZXRob2RzJyA9PiAnUE9TVCcsXG4gICdjYWxsYmFjaycgPT4gc3RhdGljIGZ1bmN0aW9uIChcXFdQX1JFU1RfUmVxdWVzdCAkcmVxdWVzdCkge1xuICAgICRkYXRhID0gW107XG4gICAgJHN0YXR1cyA9IDIwMDtcbiAgICBpZigkcmVxdWVzdC0+Z2V0X3BhcmFtKCdqb2JfaWQnKSkge1xuICAgICAgdXBkYXRlX29wdGlvbignJywgJHJlcXVlc3QtPmdldF9wYXJhbSgnam9iX2lkJykpO1xuICAgICAgJGRhdGFbJ2pvYl9pZCddID0gJHJlcXVlc3QtPmdldF9wYXJhbSgnam9iX2lkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBcXFdQX1JFU1RfUmVzcG9uc2UoJGRhdGEsICRzdGF0dXMpO1xuICB9XG5dKTtcbiovXG5cblxuXG5cbi8vIEBUT0RPIFRoaXMgaXMgYW4gZXhhbXBsZSBjb25zb2xlLmxvZygpLiBSZW1vdmUgZm9yIHByb2R1Y3Rpb25cbi8vY29uc29sZS5sb2coICdhZG1pbl9zY3JpcHQuanMnICk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==