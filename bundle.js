/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_travelBg2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_travelBg2_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody, main {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'Prompt';\n}\n\nh1, h2 {\n  margin: 0;\n  \n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  width: 90%;\n  height: 90%;\n  \n  border-radius: .6rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.login-page {\n  background: rgba(255, 255, 255, 0.92);\n  padding: 2rem;\n  border-radius: 2%;\n}\n\n.login-form{\n  margin: 2rem;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  width: 85%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, .90);\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: .6rem;\n\n}\n\nnav button {\n  background: none;\n  border: none;\n  border-bottom: 2px rgb(96, 96, 96) solid;\n}\n\nnav button:hover {\n  background: none;\n  border: none;\n  font-size: 17px;\n  color: rgb(34, 99, 20);\n  border-bottom: 4px rgb(28, 255, 115) solid;\n}\n/* Card display styles */\n.trip-card {\n  height: 15rem;\n  min-width: 25rem;\n  margin: 1rem;\n  border-radius: 0.6rem;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  \n}\n\n.trip-header {\n color: black;\n}\n\n.trip-details {\n  background-color: rgba(74, 74, 74, 0.67);\n  padding: 1rem;\n  border-radius: 0 0 0.6rem 0.6rem;\n}\n\n.trip-details h2, .trip-details p {\n  margin: 0;\n}\n\n#past-trips, #upcoming-trips, #pending-trips {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n\n#past-trips .trip-card,\n#upcoming-trips .trip-card,\n#pending-trips .trip-card {\n  flex: 0 0 calc(33.33%);\n}\n\n.trip-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  max-height: 95%;\n  padding: 2rem;\n  overflow-y: scroll;\n  color: white;\n}\n\n.trip-bar {\n \n  padding: 2rem;\n  margin: 1rem;\n}\n\n/* FORM STYLES */\n\n.form-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  width: 25%;\n  height: 55%;\n  background-color: rgba(255, 255, 255, .85);\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: .6rem;\n  margin: 2rem;\n}\n\n.new-trip-form {\n  width: 80%;\n  margin: 1.25rem;\n}\n\n.new-trip-form h2 {\n  text-align: center;\n}\n\n.estimate-box {\n  margin-top: 1rem;\n}\n\n\n.hidden {\n  display: none;\n}\n\n::-webkit-scrollbar {\n  width: 1rem;\n}\n\n::-webkit-scrollbar-track {\n  background-color: rgb(82, 82, 82);\n  border-radius: 20rem;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgb(5, 5, 5);\n  border:solid 3px rgb(82, 82, 82);\n  border-radius:20rem;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":";AACA;EACE,yDAAkD;EAClD,sBAAsB;EACtB,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,SAAS;;AAEX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;;EAEX,oBAAoB;EACpB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,0CAA0C;EAC1C,iDAAiD;EACjD,oBAAoB;;AAEtB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,0CAA0C;AAC5C;AACA,wBAAwB;AACxB;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,4CAA4C;;AAE9C;;AAEA;CACC,YAAY;AACb;;AAEA;EACE,wCAAwC;EACxC,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;AAClB;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,YAAY;AACd;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,0CAA0C;EAC1C,iDAAiD;EACjD,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;;AAGA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;EAC9B,gCAAgC;EAChC,mBAAmB;AACrB","sourcesContent":["\nbody, main {\n  background-image: url('/src/images/travelBg2.jpg');\n  background-size: cover;\n  background-position: center;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-family: 'Prompt';\n}\n\nh1, h2 {\n  margin: 0;\n  \n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  width: 90%;\n  height: 90%;\n  \n  border-radius: .6rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.login-page {\n  background: rgba(255, 255, 255, 0.92);\n  padding: 2rem;\n  border-radius: 2%;\n}\n\n.login-form{\n  margin: 2rem;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  width: 85%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, .90);\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: .6rem;\n\n}\n\nnav button {\n  background: none;\n  border: none;\n  border-bottom: 2px rgb(96, 96, 96) solid;\n}\n\nnav button:hover {\n  background: none;\n  border: none;\n  font-size: 17px;\n  color: rgb(34, 99, 20);\n  border-bottom: 4px rgb(28, 255, 115) solid;\n}\n/* Card display styles */\n.trip-card {\n  height: 15rem;\n  min-width: 25rem;\n  margin: 1rem;\n  border-radius: 0.6rem;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  \n}\n\n.trip-header {\n color: black;\n}\n\n.trip-details {\n  background-color: rgba(74, 74, 74, 0.67);\n  padding: 1rem;\n  border-radius: 0 0 0.6rem 0.6rem;\n}\n\n.trip-details h2, .trip-details p {\n  margin: 0;\n}\n\n#past-trips, #upcoming-trips, #pending-trips {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n\n#past-trips .trip-card,\n#upcoming-trips .trip-card,\n#pending-trips .trip-card {\n  flex: 0 0 calc(33.33%);\n}\n\n.trip-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  max-height: 95%;\n  padding: 2rem;\n  overflow-y: scroll;\n  color: white;\n}\n\n.trip-bar {\n \n  padding: 2rem;\n  margin: 1rem;\n}\n\n/* FORM STYLES */\n\n.form-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  width: 25%;\n  height: 55%;\n  background-color: rgba(255, 255, 255, .85);\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: .6rem;\n  margin: 2rem;\n}\n\n.new-trip-form {\n  width: 80%;\n  margin: 1.25rem;\n}\n\n.new-trip-form h2 {\n  text-align: center;\n}\n\n.estimate-box {\n  margin-top: 1rem;\n}\n\n\n.hidden {\n  display: none;\n}\n\n::-webkit-scrollbar {\n  width: 1rem;\n}\n\n::-webkit-scrollbar-track {\n  background-color: rgb(82, 82, 82);\n  border-radius: 20rem;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: rgb(5, 5, 5);\n  border:solid 3px rgb(82, 82, 82);\n  border-radius:20rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/travelBg2.jpg");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   fetchDestinations: () => (/* binding */ fetchDestinations),
/* harmony export */   fetchTravelerById: () => (/* binding */ fetchTravelerById),
/* harmony export */   fetchTripsData: () => (/* binding */ fetchTripsData),
/* harmony export */   submitNewTrip: () => (/* binding */ submitNewTrip)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


function fetchData() {
    return fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json());
}

function fetchTravelerById(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
        .then(response => response.json());
}

function fetchTripsData() {
    return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json());
}

function fetchDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json());
}

// POST

const bookNewTrip = (newTripObj) => {
    return fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST',
        body: JSON.stringify(newTripObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Error Booking Trip!')
        }
        return response.json();
    });
}

const submitNewTrip = (e, userId, destinationsData) => {
   
    e.preventDefault();
    const formElement = e.target;
    const estimateBox = document.querySelector('.estimate-box')
    const newTripObj = {
        id: Date.now(),
        userID: userId, 
        destinationID: Number(formElement.querySelector('#destinations-list').value), 
        travelers: Number(formElement.querySelector('#num-of-travelers').value), 
        date: formElement.querySelector('#trip-date').value.replace(/-/g, '/'),
        duration: Number(formElement.querySelector('#duration').value), 
        status: 'pending',
        suggestedActivities: ['activities']
    };

    bookNewTrip(newTripObj)
        .then(data =>{
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayNewPendingTrip)(data, destinationsData)
            formElement.reset();
            estimateBox.innerHTML = `
            <p>Your Trip was sent to the travel agent for approval!</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        }); 
    
}


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destinationOptions: () => (/* binding */ destinationOptions),
/* harmony export */   displayNewPendingTrip: () => (/* binding */ displayNewPendingTrip),
/* harmony export */   displayTotalEstimate: () => (/* binding */ displayTotalEstimate),
/* harmony export */   renderTrips: () => (/* binding */ renderTrips)
/* harmony export */ });
/* harmony import */ var _travelerFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


const renderTrips = (trips, container, destinationsData) => {
    let totalAmount = 0;
    const currentDate = new Date('2022/06/12');
    const currentYear = currentDate.getFullYear()
    trips.forEach(trip => {
        const destination = destinationsData.destinations.find(dest => dest.id === trip.destinationID);
        const tripElement = document.createElement('div');
        tripElement.classList.add('trip-card');
        tripElement.style.backgroundImage = `url(${destination.image})`;
        tripElement.innerHTML = `
            <div class='trip-details'>
                <h2>${destination.destination}</h2>
                <p>Date: ${trip.date}</p>
                
            </div>
        `;
        container.appendChild(tripElement);
        totalAmount = (0,_travelerFunctions__WEBPACK_IMPORTED_MODULE_0__.calculateTotalAmount)(trips, currentYear, destinationsData);
    });

    return totalAmount;
};

const displayNewPendingTrip = (data, destinationsData) => {
    const pending = document.getElementById('pending-trips');
    const destination = destinationsData.destinations.find(dest => dest.id === data.newTrip.destinationID);
    const tripElement = document.createElement('div');
    tripElement.classList.add('trip-card');
    tripElement.style.backgroundImage = `url(${destination.image})`;
    tripElement.innerHTML = `
        <div class='trip-details'>
            <h2>${destination.destination}</h2>
            <p>Date: ${data.newTrip.date}</p>
        </div>
    `;

    pending.appendChild(tripElement)
}

function destinationOptions(destinationsData) {
    const destinationSelect = document.getElementById('destinations-list');
    destinationsData.destinations.forEach(destination => {
        const option = document.createElement('option');
        option.value = destination.id;
        option.text = destination.destination;
        destinationSelect.appendChild(option);
    });
}
    

const displayTotalEstimate = (e, destinationsData) => {
    e.preventDefault();
    const estimateBox = document.querySelector('.estimate-box')
    const destinationId = Number(document.getElementById('destinations-list').value);
    const numOfTravelers = Number(document.getElementById('num-of-travelers').value);
    const duration = Number(document.getElementById('duration').value);
    const selectedDestination = destinationsData.destinations.find(dest => dest.id === destinationId);

    const estimate = (0,_travelerFunctions__WEBPACK_IMPORTED_MODULE_0__.calculateTripEstimate)(selectedDestination, numOfTravelers, duration);

    estimateBox.innerHTML =`
    <p>Total estimate is for this trip: $${estimate} </p>
    `
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTotalAmount: () => (/* binding */ calculateTotalAmount),
/* harmony export */   calculateTripEstimate: () => (/* binding */ calculateTripEstimate),
/* harmony export */   findTravelersTrips: () => (/* binding */ findTravelersTrips),
/* harmony export */   getTravelerById: () => (/* binding */ getTravelerById)
/* harmony export */ });
const getTravelerById = (travelersID, travelersArray) => {
    if (!travelersArray) {
        return undefined;
    }
    return travelersArray.find(user => user.id === travelersID);
}

const calculateTotalAmount = (trips, currentYear, destinationsData) => {
    if (!trips || !destinationsData || !destinationsData.destinations) {
        return 0;
    }

    let totalAmount = 0;

    trips.forEach(trip => {
        const tripDate = new Date(trip.date);
        const tripYear = tripDate.getFullYear();
        if (tripYear === currentYear && trip.status === 'approved') {
            const destination = destinationsData.destinations.find(dest => dest.id === trip.destinationID);
            totalAmount += (trip.duration * destination.estimatedLodgingCostPerDay);
            totalAmount += (trip.travelers * destination.estimatedFlightCostPerPerson);
        }
    });

    return totalAmount * 1.1;
};

const findTravelersTrips = (userId, trips) => {
    const past = [];
    const upcoming = [];
    const pending = [];

    const currentDate = new Date('2022/03/12');

    trips.forEach(trip => {
        if (trip.userID === userId) {
            const tripDate = new Date(trip.date);
            if (trip.status === 'approved') {
                if (tripDate < currentDate) {
                    past.push(trip);
                } else {
                    upcoming.push(trip);
                }
            } else if (trip.status === 'pending') {
                pending.push(trip);
            }
        }
    });

    return { past, upcoming, pending };
}

const calculateTripEstimate = (destination, numOfTravelers, duration) => {
    if (!destination || !destination.estimatedLodgingCostPerDay || !destination.estimatedFlightCostPerPerson) {
        return 0;
    }

    if (numOfTravelers <= 0 || duration <= 0) {
        return 0;
    }

    const lodgingCostPerDay = destination.estimatedLodgingCostPerDay
    const flightCostPerPerson = destination.estimatedFlightCostPerPerson

    const totalLodgingCost = lodgingCostPerDay * duration
    const totalFlightsCost = flightCostPerPerson * numOfTravelers

    const estimateTotal = (totalLodgingCost + totalFlightsCost)

    return estimateTotal * 1.1
}


/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _travelerFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);





document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const dashboard = document.getElementById('dashboard');
    const userIdElement = document.getElementById('user-id');
    const totalAmountElement = document.getElementById('total-amount');
    const travelForm = document.querySelector('.form-card');
    const newTripForm = document.querySelector('.new-trip-form');
    const estimateButton = document.querySelector('.estimate-bttn')
    
    let userId;
    let destinationsData;
    

    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchDestinations)()
        .then(destinations => {
            destinationsData = destinations; 
            (0,_dom__WEBPACK_IMPORTED_MODULE_3__.destinationOptions)(destinations);
        });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        userId = username.slice(8);

        if (userId && password === 'travel') {
            (0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchTravelerById)(userId)
                .then(traveler => {
                    loginForm.parentElement.classList.add('hidden');
                    dashboard.classList.remove('hidden');
                    travelForm.classList.remove('hidden');
                    userIdElement.innerText = `Hi, ${traveler.name}`;
                    fetchTravelersData(userId);
                })
                .catch(error => {
                    alert('Invalid username or password');
                });
        } else {
            alert('Invalid username or password');
        }
    });

    newTripForm.addEventListener('submit', (e) => (0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.submitNewTrip)(e, Number(userId), destinationsData)); // Pass destinationsData to submitNewTrip
    estimateButton.addEventListener('click', e => (0,_dom__WEBPACK_IMPORTED_MODULE_3__.displayTotalEstimate)(e, destinationsData))
    


    function fetchTravelersData(userId) {
        Promise.all([(0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchTripsData)(), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchDestinations)()])
            .then(([tripsData, destinationsData]) => {
                const travelerTrips = (0,_travelerFunctions__WEBPACK_IMPORTED_MODULE_2__.findTravelersTrips)(Number(userId), tripsData.trips);

                const pastTrips = document.getElementById('past-trips');
                const upcomingTrips = document.getElementById('upcoming-trips');
                const pendingTrips = document.getElementById('pending-trips');

                pastTrips.innerHTML = '';
                upcomingTrips.innerHTML = '';
                pendingTrips.innerHTML = '';

                let totalAmount = 0;

                totalAmount += (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTrips)(travelerTrips.past, pastTrips, destinationsData);
                totalAmount += (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTrips)(travelerTrips.upcoming, upcomingTrips, destinationsData);
                totalAmount += (0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTrips)(travelerTrips.pending, pendingTrips, destinationsData);

                totalAmount *= 1.1;
                totalAmountElement.innerText = `You spent $${totalAmount.toFixed(2)} on all trips this year!`;
            })
            .catch(error => console.error('Error fetching trip data:', error));
    }

    const buttons = document.querySelectorAll('.trip-nav button');
    const sections = document.querySelectorAll('.trip-bar');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active'); 
        sections.forEach(section => section.classList.add('hidden'));
        const targetId = button.getAttribute('data-target') + '-section';
        document.getElementById(targetId).classList.remove('hidden');
      });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map