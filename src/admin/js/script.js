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

/*
height: 20px;
min-height: 20px;
line-height: 20px;
margin-top: 5px;
padding: 0 6px;
margin-right: 7px;
*/

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  // jQuery methods go here...
  var accessToken = window.app ? window.app.access_token : undefined;
  console.log({
    accessToken: accessToken
  });

  if (!accessToken) {
    console.log('No access token');
    return;
  }

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
  $adminBarMenuSecondary.appendChild($menuItemBuildPreviewButton);

  function checkStatus(accessToken, $button) {}

  setInterval(function () {
    checkStatus();
  }, 10000);
}); // @TODO This is an example console.log(). Remove for production
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvYWRtaW4vanMvc2NyaXB0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYWNjZXNzVG9rZW4iLCJ3aW5kb3ciLCJhcHAiLCJhY2Nlc3NfdG9rZW4iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiJGFkbWluQmFyTWVudVNlY29uZGFyeSIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlTmV3QnV0dG9uIiwiaWQiLCJsYWJlbCIsIiRidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwicGFkZGluZyIsIm1hcmdpblJpZ2h0IiwiaW5uZXJUZXh0IiwiY3JlYXRlTmV3TWVudUJ1dHRvbiIsIiRidXR0b25FbCIsIiRsaSIsImFwcGVuZENoaWxkIiwiJGJ1aWxkQnV0dG9uIiwiJG1lbnVJdGVtQnVpbGRCdXR0b24iLCIkYnVpbGRQcmV2aWV3QnV0dG9uIiwiJG1lbnVJdGVtQnVpbGRQcmV2aWV3QnV0dG9uIiwiY2hlY2tTdGF0dXMiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LDJCQUEyQixHQUFHUCxtQkFBbUIsQ0FBQyx5QkFBRCxFQUE0Qk0sbUJBQTVCLENBQXZEO0FBRUF2Qix3QkFBc0IsQ0FBQ29CLFdBQXZCLENBQW1DRSxvQkFBbkM7QUFDQXRCLHdCQUFzQixDQUFDb0IsV0FBdkIsQ0FBbUNJLDJCQUFuQzs7QUFHQSxXQUFTQyxXQUFULENBQXFCaEMsV0FBckIsRUFBa0NZLE9BQWxDLEVBQTJDLENBRTFDOztBQUVEcUIsYUFBVyxDQUFDLFlBQU07QUFDaEJELGVBQVc7QUFDWixHQUZVLEVBRVIsS0FGUSxDQUFYO0FBSUQsQ0F4REQsRSxDQTBEQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQ3RHQSx3QiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2RldmVsb3BtZW50L2FkbWluL2pzL3NjcmlwdC5qc1wiKTtcbiIsIi8qKlxuICogQWxsIG9mIHRoZSBjb2RlIGZvciB5b3VyIGFkbWluLWZhY2luZyBKYXZhU2NyaXB0IHNvdXJjZVxuICogc2hvdWxkIHJlc2lkZSBpbiB0aGUgZmlsZSBcImRldmVsb3BtZW50L2FkbWluL2pzL3NjcmlwdC5qc1wiLlxuICpcbiAqIE5vdGU6IEl0IGhhcyBiZWVuIGFzc3VtZWQgeW91IHdpbGwgd3JpdGUgalF1ZXJ5IGNvZGUgaGVyZSwgc28gdGhlXG4gKiAkIGZ1bmN0aW9uIHJlZmVyZW5jZSBoYXMgYmVlbiBwcmVwYXJlZCAoaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jylmb3IgdXNhZ2Ugd2l0aGluIHRoZSBzY29wZVxuICogb2YgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBUaGlzIGVuYWJsZXMgeW91IHRvIGRlZmluZSBoYW5kbGVycywgZm9yIHdoZW4gdGhlIERPTSBpcyByZWFkeTpcbiAqXG4gKiAkKGZ1bmN0aW9uKCkge1xuICpcbiAqIH0pO1xuICpcbiAqIFdoZW4gdGhlIHdpbmRvdyBpcyBsb2FkZWQ6XG4gKlxuICogJCggd2luZG93ICkubG9hZChmdW5jdGlvbigpIHtcbiAqXG4gKiB9KTtcbiAqXG4gKiAuLi5hbmQvb3Igb3RoZXIgcG9zc2liaWxpdGllcy5cbiAqXG4gKiBJZGVhbGx5LCBpdCBpcyBub3QgY29uc2lkZXJlZCBiZXN0IHByYWN0aXNlIHRvIGF0dGFjaCBtb3JlIHRoYW4gYVxuICogc2luZ2xlIERPTS1yZWFkeSBvciB3aW5kb3ctbG9hZCBoYW5kbGVyIGZvciBhIHBhcnRpY3VsYXIgcGFnZS5cbiAqIEFsdGhvdWdoIHNjcmlwdHMgaW4gdGhlIFdvcmRQcmVzcyBjb3JlLCBQbHVnaW5zIGFuZCBUaGVtZXMgbWF5IGJlXG4gKiBwcmFjdGlzaW5nIHRoaXMsIHdlIHNob3VsZCBzdHJpdmUgdG8gc2V0IGEgYmV0dGVyIGV4YW1wbGUgaW4gb3VyIG93biB3b3JrLlxuICpcbiAqIFRoZSBmaWxlIGlzIGVucXVldWVkIGZyb20gc3JjL2FkbWluL2NsYXNzLWFzc2V0cy5waHAuXG4gKi9cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyAvLyBAVE9ETyBUaGlzIGlzIGFuIGV4YW1wbGUgaW1wb3J0LiBSZW1vdmUgZm9yIHByb2R1Y3Rpb25cbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL3Rlc3QnO1xuXG5cbi8qXG5oZWlnaHQ6IDIwcHg7XG5taW4taGVpZ2h0OiAyMHB4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG5tYXJnaW4tdG9wOiA1cHg7XG5wYWRkaW5nOiAwIDZweDtcbm1hcmdpbi1yaWdodDogN3B4O1xuKi9cblxuJCggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24gKCkge1xuXHQvLyBqUXVlcnkgbWV0aG9kcyBnbyBoZXJlLi4uXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gd2luZG93LmFwcCA/IHdpbmRvdy5hcHAuYWNjZXNzX3Rva2VuIDogdW5kZWZpbmVkO1xuICBjb25zb2xlLmxvZyh7YWNjZXNzVG9rZW59KTtcbiAgXG4gIGlmKCFhY2Nlc3NUb2tlbikge1xuICAgIGNvbnNvbGUubG9nKCdObyBhY2Nlc3MgdG9rZW4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCAkYWRtaW5CYXJNZW51U2Vjb25kYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dwLWFkbWluLWJhci10b3Atc2Vjb25kYXJ5Jyk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmV3QnV0dG9uKGlkLCBsYWJlbCkge1xuICAgIGNvbnN0ICRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICRidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgJGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tcHJpbWFyeScpO1xuICAgICRidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXNtYWxsJyk7XG4gICAgJGJ1dHRvbi5zdHlsZS5oZWlnaHQgPSAnMjBweCc7XG4gICAgJGJ1dHRvbi5zdHlsZS5taW5IZWlnaHQgPSAnMjBweCc7XG4gICAgJGJ1dHRvbi5zdHlsZS5saW5lSGVpZ2h0ID0gJzIwcHgnO1xuICAgICRidXR0b24uc3R5bGUubWFyZ2luVG9wID0gJzVweCc7XG4gICAgJGJ1dHRvbi5zdHlsZS5wYWRkaW5nID0gJzAgNnB4JztcbiAgICAkYnV0dG9uLnN0eWxlLm1hcmdpblJpZ2h0ID0gJzdweCc7XG4gICAgJGJ1dHRvbi5pZCA9IGAke2lkfWA7XG4gICAgJGJ1dHRvbi5pbm5lclRleHQgPSBsYWJlbDtcblxuICAgIHJldHVybiAkYnV0dG9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmV3TWVudUJ1dHRvbihpZCwgJGJ1dHRvbkVsKSB7XG4gICAgY29uc3QgJGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICRsaS5jbGFzc0xpc3QuYWRkKCdtZW51cG9wJylcbiAgICAkbGkuaWQgPSBgJHtpZH1gO1xuICAgICRsaS5hcHBlbmRDaGlsZCgkYnV0dG9uRWwpO1xuXG4gICAgcmV0dXJuICRsaTtcbiAgfVxuXG4gIGNvbnN0ICRidWlsZEJ1dHRvbiA9IGNyZWF0ZU5ld0J1dHRvbignYnVpbGQtc2l0ZScsICdCdWlsZCAmIFB1Ymxpc2gnKTtcbiAgY29uc3QgJG1lbnVJdGVtQnVpbGRCdXR0b24gPSBjcmVhdGVOZXdNZW51QnV0dG9uKCdtZW51LWJ1aWxkLXNpdGUnLCAkYnVpbGRCdXR0b24pO1xuXG4gIGNvbnN0ICRidWlsZFByZXZpZXdCdXR0b24gPSBjcmVhdGVOZXdCdXR0b24oJ2J1aWxkLXByZXZpZXctc2l0ZScsICdCdWlsZCBQcmV2aWV3Jyk7XG4gIGNvbnN0ICRtZW51SXRlbUJ1aWxkUHJldmlld0J1dHRvbiA9IGNyZWF0ZU5ld01lbnVCdXR0b24oJ21lbnUtYnVpbGQtcHJldmlldy1zaXRlJywgJGJ1aWxkUHJldmlld0J1dHRvbik7XG5cbiAgJGFkbWluQmFyTWVudVNlY29uZGFyeS5hcHBlbmRDaGlsZCgkbWVudUl0ZW1CdWlsZEJ1dHRvbik7XG4gICRhZG1pbkJhck1lbnVTZWNvbmRhcnkuYXBwZW5kQ2hpbGQoJG1lbnVJdGVtQnVpbGRQcmV2aWV3QnV0dG9uKTtcblxuXG4gIGZ1bmN0aW9uIGNoZWNrU3RhdHVzKGFjY2Vzc1Rva2VuLCAkYnV0dG9uKSB7XG5cbiAgfVxuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBjaGVja1N0YXR1cygpXG4gIH0sIDEwMDAwKTtcblxufSApO1xuXG4vLyBAVE9ETyBUaGlzIGlzIGFuIGV4YW1wbGUgY29uc29sZS5sb2coKS4gUmVtb3ZlIGZvciBwcm9kdWN0aW9uXG4vL2NvbnNvbGUubG9nKCAnYWRtaW5fc2NyaXB0LmpzJyApOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=