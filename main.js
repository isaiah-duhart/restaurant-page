/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout(){\n    const about = document.querySelector('#content')\n\n    const founded = document.createElement('div')\n    founded.textContent = 'Homecook Restaurant was founded Feb 8th, 2025 for a coding project!'\n\n    const contact = document.createElement('div')\n    contact.textContent = \"Contact us at (555) 784 - 9830\"\n\n    about.replaceChildren(founded, contact)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWJvdXQuanM/NTg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVBYm91dCgpe1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgY29uc3QgZm91bmRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm91bmRlZC50ZXh0Q29udGVudCA9ICdIb21lY29vayBSZXN0YXVyYW50IHdhcyBmb3VuZGVkIEZlYiA4dGgsIDIwMjUgZm9yIGEgY29kaW5nIHByb2plY3QhJ1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1cyBhdCAoNTU1KSA3ODQgLSA5ODMwXCJcblxuICAgIGFib3V0LnJlcGxhY2VDaGlsZHJlbihmb3VuZGVkLCBjb250YWN0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const content = document.querySelector('#content')\n\n    const title = document.createElement('div')\n    title.setAttribute('class', 'title')\n    title.textContent = 'Homecook Restaurant'\n\n    const description = document.createElement('div')\n    description.setAttribute('class', 'description')\n    description.textContent = 'We serve hot and ready home cook classics! From Chipotle Barbacoa Tacos to Spaghetti and Meatballs. Find all your homestyle favorites here!'\n\n    const hours = document.createElement('div')\n    hours.setAttribute('class', 'hours')\n    hours.textContent = 'Hours\\nMonday-Thursday: 12pm - 10pm Friday-Sunday: 11am - 12am'\n\n    const location = document.createElement('div')\n    location.setAttribute('class', 'location')\n    location.textContent = 'Location\\n1234 Restaurant lane'\n\n    content.replaceChildren(title, description, hours, location)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ob21lLmpzPzdiNDEiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0hvbWVjb29rIFJlc3RhdXJhbnQnXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnV2Ugc2VydmUgaG90IGFuZCByZWFkeSBob21lIGNvb2sgY2xhc3NpY3MhIEZyb20gQ2hpcG90bGUgQmFyYmFjb2EgVGFjb3MgdG8gU3BhZ2hldHRpIGFuZCBNZWF0YmFsbHMuIEZpbmQgYWxsIHlvdXIgaG9tZXN0eWxlIGZhdm9yaXRlcyBoZXJlISdcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob3Vycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hvdXJzJylcbiAgICBob3Vycy50ZXh0Q29udGVudCA9ICdIb3Vyc1xcbk1vbmRheS1UaHVyc2RheTogMTJwbSAtIDEwcG0gRnJpZGF5LVN1bmRheTogMTFhbSAtIDEyYW0nXG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbG9jYXRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2NhdGlvbicpXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnTG9jYXRpb25cXG4xMjM0IFJlc3RhdXJhbnQgbGFuZSdcblxuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKHRpdGxlLCBkZXNjcmlwdGlvbiwgaG91cnMsIGxvY2F0aW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\nconst nav = document.querySelector('nav')\nnav.addEventListener('click', (event) => {\n    // Clear content to load new page\n    const content = document.querySelector(\"#content\")\n    content.replaceChildren()\n\n    switch (event.target.id){\n        case 'homeButton':\n            ;(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n            break\n        case 'menuButton':\n            ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n            break\n        case 'aboutButton':\n            ;(0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n            break\n        default:\n            console.log(`ERROR: Unnrecognized button id: ${event.target.id}`)\n    }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QjtBQUNBO0FBQ0U7O0FBRTNCLGlEQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksa0RBQUk7QUFDaEI7QUFDQTtBQUNBLFlBQVksa0RBQUk7QUFDaEI7QUFDQTtBQUNBLFlBQVksbURBQUs7QUFDakI7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0I7QUFDM0U7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51J1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnXG5cbmhvbWUoKVxuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgLy8gQ2xlYXIgY29udGVudCB0byBsb2FkIG5ldyBwYWdlXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKClcblxuICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmlkKXtcbiAgICAgICAgY2FzZSAnaG9tZUJ1dHRvbic6XG4gICAgICAgICAgICBob21lKClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ21lbnVCdXR0b24nOlxuICAgICAgICAgICAgbWVudSgpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdhYm91dEJ1dHRvbic6XG4gICAgICAgICAgICBhYm91dCgpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVSUk9SOiBVbm5yZWNvZ25pemVkIGJ1dHRvbiBpZDogJHtldmVudC50YXJnZXQuaWR9YClcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuItems = [\n    {\n        name : \"Spaghetti and Meatballs\",\n        description : \"Freshly squeeze whole tomatoes simmer for hours in sauteed onions and garlic to create our homemade spaghetti sauce paired with fried meatballs. Topped with fresh basil and grated parmesean\",\n    },\n    {\n        name : \"Chipotle Barbacoa\",\n        description : \"A bed of cliantro lime rice is topped with chuck roast, slow-cooked in chipotle peppers, thinly sliced onions, and spices. Finished with fresh guacamole and rolled in a house made tortilla\",\n    },\n    {\n        name : \"Chicken Tikka Masala\",\n        description : \"Chicken marinated in yogurt, lemon, and spices is pan fried to perfection, and tossed in a house made tomato sauce and cream reduction. Paired with fresh naan and a bed of rice.\"\n    }\n]\n\nfunction createMenu() {\n    const content = document.querySelector('#content')\n\n    const menu = document.createElement('div')\n    menu.setAttribute('class', 'menu')\n\n    menuItems.forEach((item) => menu.appendChild(createMenuItem(item)))\n\n    content.appendChild(menu)\n}\n\nfunction createMenuItem(item){\n    const itemContainer = document.createElement('div')\n    itemContainer.setAttribute('class', 'menu-item')\n    \n    const title = document.createElement('div')\n    title.setAttribute('class', 'item-title')\n    title.textContent = item.name\n\n    const description = document.createElement('div')\n    description.setAttribute('class', 'item-description')\n    description.textContent = item.description\n\n    itemContainer.replaceChildren(title, description)\n\n    return itemContainer\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIlNwYWdoZXR0aSBhbmQgTWVhdGJhbGxzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uIDogXCJGcmVzaGx5IHNxdWVlemUgd2hvbGUgdG9tYXRvZXMgc2ltbWVyIGZvciBob3VycyBpbiBzYXV0ZWVkIG9uaW9ucyBhbmQgZ2FybGljIHRvIGNyZWF0ZSBvdXIgaG9tZW1hZGUgc3BhZ2hldHRpIHNhdWNlIHBhaXJlZCB3aXRoIGZyaWVkIG1lYXRiYWxscy4gVG9wcGVkIHdpdGggZnJlc2ggYmFzaWwgYW5kIGdyYXRlZCBwYXJtZXNlYW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZSA6IFwiQ2hpcG90bGUgQmFyYmFjb2FcIixcbiAgICAgICAgZGVzY3JpcHRpb24gOiBcIkEgYmVkIG9mIGNsaWFudHJvIGxpbWUgcmljZSBpcyB0b3BwZWQgd2l0aCBjaHVjayByb2FzdCwgc2xvdy1jb29rZWQgaW4gY2hpcG90bGUgcGVwcGVycywgdGhpbmx5IHNsaWNlZCBvbmlvbnMsIGFuZCBzcGljZXMuIEZpbmlzaGVkIHdpdGggZnJlc2ggZ3VhY2Ftb2xlIGFuZCByb2xsZWQgaW4gYSBob3VzZSBtYWRlIHRvcnRpbGxhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWUgOiBcIkNoaWNrZW4gVGlra2EgTWFzYWxhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uIDogXCJDaGlja2VuIG1hcmluYXRlZCBpbiB5b2d1cnQsIGxlbW9uLCBhbmQgc3BpY2VzIGlzIHBhbiBmcmllZCB0byBwZXJmZWN0aW9uLCBhbmQgdG9zc2VkIGluIGEgaG91c2UgbWFkZSB0b21hdG8gc2F1Y2UgYW5kIGNyZWFtIHJlZHVjdGlvbi4gUGFpcmVkIHdpdGggZnJlc2ggbmFhbiBhbmQgYSBiZWQgb2YgcmljZS5cIlxuICAgIH1cbl1cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKVxuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaXRlbSkpKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShpdGVtKXtcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJylcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtLXRpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS1kZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uXG5cbiAgICBpdGVtQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbih0aXRsZSwgZGVzY3JpcHRpb24pXG5cbiAgICByZXR1cm4gaXRlbUNvbnRhaW5lclxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;