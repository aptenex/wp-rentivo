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
  var $adminBarMenuSecondary = document.getElementById('wp-admin-bar-top-secondary');

  function createNewButton(id) {
    var $button = document.createElement("button");
    $button.classList.add('button button-primary button-small');
    $button.style.height = '20px';
    $button.style.minHeight = '20px';
    $button.style.lineHeight = '20px';
    $button.style.marginTop = '5px';
    $button.style.padding = '0 6px';
    $button.style.marginRight = '7px';
    $button.id = "".concat(id);
  }

  function createNewMenuButton(id, $button) {
    var $li = document.createElement("li");
    $li.classList.add('menupop');
    $li.id = "".concat(id);
    $li.appendChild($button);
    return $li;
  }

  var $publishButton = createNewButton('publish-site');
  var $menuItemButton = createNewMenuButton('menu-publish-site', $publishButton);
  $adminBarMenuSecondary.appendChild($menuItemButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2ZWxvcG1lbnQvYWRtaW4vanMvc2NyaXB0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiJGFkbWluQmFyTWVudVNlY29uZGFyeSIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlTmV3QnV0dG9uIiwiaWQiLCIkYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsImNyZWF0ZU5ld01lbnVCdXR0b24iLCIkbGkiLCJhcHBlbmRDaGlsZCIsIiRwdWJsaXNoQnV0dG9uIiwiJG1lbnVJdGVtQnV0dG9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLDZDQUFDLENBQUVDLFFBQUYsQ0FBRCxDQUFjQyxLQUFkLENBQXFCLFlBQVk7QUFDaEM7QUFHQyxNQUFNQyxzQkFBc0IsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLDRCQUF4QixDQUEvQjs7QUFFQSxXQUFTQyxlQUFULENBQXlCQyxFQUF6QixFQUE2QjtBQUMzQixRQUFNQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixRQUF2QixDQUFoQjtBQUNBRCxXQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLG9DQUF0QjtBQUNBSCxXQUFPLENBQUNJLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QixNQUF2QjtBQUNBTCxXQUFPLENBQUNJLEtBQVIsQ0FBY0UsU0FBZCxHQUEwQixNQUExQjtBQUNBTixXQUFPLENBQUNJLEtBQVIsQ0FBY0csVUFBZCxHQUEyQixNQUEzQjtBQUNBUCxXQUFPLENBQUNJLEtBQVIsQ0FBY0ksU0FBZCxHQUEwQixLQUExQjtBQUNBUixXQUFPLENBQUNJLEtBQVIsQ0FBY0ssT0FBZCxHQUF3QixPQUF4QjtBQUNBVCxXQUFPLENBQUNJLEtBQVIsQ0FBY00sV0FBZCxHQUE0QixLQUE1QjtBQUNBVixXQUFPLENBQUNELEVBQVIsYUFBZ0JBLEVBQWhCO0FBQ0Q7O0FBRUQsV0FBU1ksbUJBQVQsQ0FBNkJaLEVBQTdCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUN4QyxRQUFNWSxHQUFHLEdBQUdsQixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWjtBQUNBVyxPQUFHLENBQUNWLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixTQUFsQjtBQUNBUyxPQUFHLENBQUNiLEVBQUosYUFBWUEsRUFBWjtBQUNBYSxPQUFHLENBQUNDLFdBQUosQ0FBZ0JiLE9BQWhCO0FBRUEsV0FBT1ksR0FBUDtBQUNEOztBQUVELE1BQU1FLGNBQWMsR0FBR2hCLGVBQWUsQ0FBQyxjQUFELENBQXRDO0FBQ0EsTUFBTWlCLGVBQWUsR0FBR0osbUJBQW1CLENBQUMsbUJBQUQsRUFBc0JHLGNBQXRCLENBQTNDO0FBRUFsQix3QkFBc0IsQ0FBQ2lCLFdBQXZCLENBQW1DRSxlQUFuQztBQUVELENBaENELEUsQ0FrQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7QUM5RUEsd0IiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kZXZlbG9wbWVudC9hZG1pbi9qcy9zY3JpcHQuanNcIik7XG4iLCIvKipcbiAqIEFsbCBvZiB0aGUgY29kZSBmb3IgeW91ciBhZG1pbi1mYWNpbmcgSmF2YVNjcmlwdCBzb3VyY2VcbiAqIHNob3VsZCByZXNpZGUgaW4gdGhlIGZpbGUgXCJkZXZlbG9wbWVudC9hZG1pbi9qcy9zY3JpcHQuanNcIi5cbiAqXG4gKiBOb3RlOiBJdCBoYXMgYmVlbiBhc3N1bWVkIHlvdSB3aWxsIHdyaXRlIGpRdWVyeSBjb2RlIGhlcmUsIHNvIHRoZVxuICogJCBmdW5jdGlvbiByZWZlcmVuY2UgaGFzIGJlZW4gcHJlcGFyZWQgKGltcG9ydCAkIGZyb20gJ2pxdWVyeScpZm9yIHVzYWdlIHdpdGhpbiB0aGUgc2NvcGVcbiAqIG9mIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogVGhpcyBlbmFibGVzIHlvdSB0byBkZWZpbmUgaGFuZGxlcnMsIGZvciB3aGVuIHRoZSBET00gaXMgcmVhZHk6XG4gKlxuICogJChmdW5jdGlvbigpIHtcbiAqXG4gKiB9KTtcbiAqXG4gKiBXaGVuIHRoZSB3aW5kb3cgaXMgbG9hZGVkOlxuICpcbiAqICQoIHdpbmRvdyApLmxvYWQoZnVuY3Rpb24oKSB7XG4gKlxuICogfSk7XG4gKlxuICogLi4uYW5kL29yIG90aGVyIHBvc3NpYmlsaXRpZXMuXG4gKlxuICogSWRlYWxseSwgaXQgaXMgbm90IGNvbnNpZGVyZWQgYmVzdCBwcmFjdGlzZSB0byBhdHRhY2ggbW9yZSB0aGFuIGFcbiAqIHNpbmdsZSBET00tcmVhZHkgb3Igd2luZG93LWxvYWQgaGFuZGxlciBmb3IgYSBwYXJ0aWN1bGFyIHBhZ2UuXG4gKiBBbHRob3VnaCBzY3JpcHRzIGluIHRoZSBXb3JkUHJlc3MgY29yZSwgUGx1Z2lucyBhbmQgVGhlbWVzIG1heSBiZVxuICogcHJhY3Rpc2luZyB0aGlzLCB3ZSBzaG91bGQgc3RyaXZlIHRvIHNldCBhIGJldHRlciBleGFtcGxlIGluIG91ciBvd24gd29yay5cbiAqXG4gKiBUaGUgZmlsZSBpcyBlbnF1ZXVlZCBmcm9tIHNyYy9hZG1pbi9jbGFzcy1hc3NldHMucGhwLlxuICovXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gLy8gQFRPRE8gVGhpcyBpcyBhbiBleGFtcGxlIGltcG9ydC4gUmVtb3ZlIGZvciBwcm9kdWN0aW9uXG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy90ZXN0JztcblxuXG4vKlxuaGVpZ2h0OiAyMHB4O1xubWluLWhlaWdodDogMjBweDtcbmxpbmUtaGVpZ2h0OiAyMHB4O1xubWFyZ2luLXRvcDogNXB4O1xucGFkZGluZzogMCA2cHg7XG5tYXJnaW4tcmlnaHQ6IDdweDtcbiovXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uICgpIHtcblx0Ly8galF1ZXJ5IG1ldGhvZHMgZ28gaGVyZS4uLlxuXG5cbiAgY29uc3QgJGFkbWluQmFyTWVudVNlY29uZGFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cC1hZG1pbi1iYXItdG9wLXNlY29uZGFyeScpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5ld0J1dHRvbihpZCkge1xuICAgIGNvbnN0ICRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICRidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1zbWFsbCcpO1xuICAgICRidXR0b24uc3R5bGUuaGVpZ2h0ID0gJzIwcHgnO1xuICAgICRidXR0b24uc3R5bGUubWluSGVpZ2h0ID0gJzIwcHgnO1xuICAgICRidXR0b24uc3R5bGUubGluZUhlaWdodCA9ICcyMHB4JztcbiAgICAkYnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9ICc1cHgnO1xuICAgICRidXR0b24uc3R5bGUucGFkZGluZyA9ICcwIDZweCc7XG4gICAgJGJ1dHRvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICc3cHgnO1xuICAgICRidXR0b24uaWQgPSBgJHtpZH1gO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmV3TWVudUJ1dHRvbihpZCwgJGJ1dHRvbikge1xuICAgIGNvbnN0ICRsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAkbGkuY2xhc3NMaXN0LmFkZCgnbWVudXBvcCcpXG4gICAgJGxpLmlkID0gYCR7aWR9YDtcbiAgICAkbGkuYXBwZW5kQ2hpbGQoJGJ1dHRvbik7XG5cbiAgICByZXR1cm4gJGxpO1xuICB9XG5cbiAgY29uc3QgJHB1Ymxpc2hCdXR0b24gPSBjcmVhdGVOZXdCdXR0b24oJ3B1Ymxpc2gtc2l0ZScpO1xuICBjb25zdCAkbWVudUl0ZW1CdXR0b24gPSBjcmVhdGVOZXdNZW51QnV0dG9uKCdtZW51LXB1Ymxpc2gtc2l0ZScsICRwdWJsaXNoQnV0dG9uKTtcblxuICAkYWRtaW5CYXJNZW51U2Vjb25kYXJ5LmFwcGVuZENoaWxkKCRtZW51SXRlbUJ1dHRvbik7XG5cbn0gKTtcblxuLy8gQFRPRE8gVGhpcyBpcyBhbiBleGFtcGxlIGNvbnNvbGUubG9nKCkuIFJlbW92ZSBmb3IgcHJvZHVjdGlvblxuLy9jb25zb2xlLmxvZyggJ2FkbWluX3NjcmlwdC5qcycgKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9