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

/***/ "./src/styles/sections/opk-shop-the-look.scss":
/*!****************************************************!*\
  !*** ./src/styles/sections/opk-shop-the-look.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://padel_2_gether/./src/styles/sections/opk-shop-the-look.scss?");

/***/ }),

/***/ "./src/scripts/sections/opk-shop-the-look.js":
/*!***************************************************!*\
  !*** ./src/scripts/sections/opk-shop-the-look.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_sections_opk_shop_the_look_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/sections/opk-shop-the-look.scss */ \"./src/styles/sections/opk-shop-the-look.scss\");\n\nconst SELECTORS = {\n  section: '.js-shop-the-look',\n  wrap: '.js-shop-the-look-wrap',\n  cart: '.Cart-Drawer',\n  btnShowCart: '.js-show-cart-drawer'\n};\nconst ATTRIBUTES = {\n  dots: 'data-dots-index',\n  item: 'data-item-index'\n};\nconst CLASSNAME = {\n  activeState: 'shop_the_look__products_item--active',\n  activeStateCart: 'show'\n};\nconst handleActiveItem = () => {\n  const $sections = document.querySelectorAll(SELECTORS.section);\n  if (!$sections.length) return;\n  $sections.forEach($section => {\n    const $wrap = $section.querySelector(SELECTORS.wrap);\n    const $dots = $wrap.querySelectorAll(`[${ATTRIBUTES.dots}]`);\n    const $btnsShowCart = $section.querySelectorAll(SELECTORS.btnShowCart);\n    const $cart = document.querySelector(SELECTORS.cart);\n    if ($cart) {\n      $btnsShowCart.forEach($btnShowCart => {\n        $btnShowCart.addEventListener('click', e => {\n          // e.preventDefault();\n\n          // setTimeout(() => {\n          //     $cart.classList.add('show');\n          //     document.querySelector('body').classList.add('show_overlay');\n          // });                    \n        });\n      });\n    }\n    const handleActiveClass = dot => {\n      if (!dot.getAttribute(ATTRIBUTES.dots)) return;\n      const $items = $section.querySelectorAll(`[${ATTRIBUTES.item}]`);\n      $items.forEach($item => {\n        const itemIndex = $item.getAttribute(ATTRIBUTES.item);\n        const dotIndex = dot.getAttribute(ATTRIBUTES.dots);\n        if (itemIndex == dotIndex) {\n          $item.classList.add(CLASSNAME.activeState);\n        } else {\n          $item.classList.remove(CLASSNAME.activeState);\n        }\n      });\n    };\n    $wrap.addEventListener('mouseover', e => {\n      handleActiveClass(e.target);\n    });\n    $dots.forEach($dot => {\n      $dot.addEventListener('mouseleave', () => {\n        const $items = $section.querySelectorAll(`[${ATTRIBUTES.item}]`);\n        $items.forEach($item => {\n          $item.classList.remove(CLASSNAME.activeState);\n        });\n      });\n    });\n  });\n};\nhandleActiveItem();\n\n//# sourceURL=webpack://padel_2_gether/./src/scripts/sections/opk-shop-the-look.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/sections/opk-shop-the-look.js");
/******/ 	
/******/ })()
;