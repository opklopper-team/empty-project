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

/***/ "./src/scripts/sections/opk-head-title.js":
/*!************************************************!*\
  !*** ./src/scripts/sections/opk-head-title.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst SELECTORS = {\n  headTetle: '.js-head-title',\n  headWords: '.js-head-words'\n};\nconst CLASSNAME = {\n  words: 'head_title__word'\n};\nconst headTitle = () => {\n  const $titles = document.querySelectorAll(SELECTORS.headTetle);\n  if (!$titles.length) return;\n  $titles.forEach($title => {\n    const splitTitle = new SplitText($title, {\n      type: 'words',\n      wordsClass: CLASSNAME.words\n    });\n    const {\n      words\n    } = splitTitle;\n    if (!words) return;\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (headTitle);\n\n//# sourceURL=webpack://padel_2_gether/./src/scripts/sections/opk-head-title.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/sections/opk-head-title.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;