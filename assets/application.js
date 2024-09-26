/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/application.scss":
/*!*************************************!*\
  !*** ./src/styles/application.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://padel_2_gether/./src/styles/application.scss?");

/***/ }),

/***/ "./src/scripts/application.js":
/*!************************************!*\
  !*** ./src/scripts/application.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_application_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/application.scss */ \"./src/styles/application.scss\");\n/* harmony import */ var _scripts_sections_opk_head_title_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/sections/opk-head-title.js */ \"./src/scripts/sections/opk-head-title.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_scripts_sections_opk_head_title_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack://padel_2_gether/./src/scripts/application.js?");

/***/ }),

/***/ "./src/scripts/sections/opk-head-title.js":
/*!************************************************!*\
  !*** ./src/scripts/sections/opk-head-title.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst SELECTORS = {\n  headTetle: '.js-head-title',\n  headWords: '.js-head-words'\n};\nconst CLASSNAME = {\n  words: 'head_title__word'\n};\nconst headTitle = () => {\n  const $titles = document.querySelectorAll(SELECTORS.headTetle);\n  if (!$titles.length) return;\n  $titles.forEach($title => {\n    const splitTitle = new SplitText($title, {\n      type: 'words',\n      wordsClass: CLASSNAME.words\n    });\n    const {\n      words\n    } = splitTitle;\n    if (!words) return;\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (headTitle);\n\n//# sourceURL=webpack://padel_2_gether/./src/scripts/sections/opk-head-title.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/application.js");
/******/ 	
/******/ })()
;