webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _components_comparison_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/comparison.js */ "./components/comparison.js");
var _jsxFileName = "/Users/passarellip/CODE/PERSONAL/stt-benchmark/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var __N_SSG = true;
function Home() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      countList = _useState[0],
      setCountList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      baseText = _useState2[0],
      setBaseText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      baseMedia = _useState3[0],
      setBaseMedia = _useState3[1]; // useEffect(() => {
  // },[   ])


  var increaseCount = function increaseCount() {
    console.log('increaseCount');
    countList.push(countList.length);
    var tmpCount = JSON.parse(JSON.stringify(countList));
    setCountList(tmpCount);
  };

  var decreaseCount = function decreaseCount() {
    countList.pop();
    var tmpCount = JSON.parse(JSON.stringify(countList));
    setCountList(tmpCount);
  };

  var handleBaseTextFileInput = function handleBaseTextFileInput(e) {
    console.log(e.target.files[0].name, e.target.files[0]);
    var reader = new FileReader();

    reader.onload = function () {
      var text = reader.result; // const node = document.getElementById('output');
      // node.innerText = text;

      setBaseText(text);
      console.log(reader.result.substring(0, 200));
    };

    reader.readAsText(e.target.files[0]);
  };

  var handleSetBaseMedia = function handleSetBaseMedia(e) {
    var url = window.URL.createObjectURL(e.target.files[0]);
    setBaseMedia(url);
  };

  var handleRemoveComparison = function handleRemoveComparison(n) {
    console.log('handleRemoveComparison parent', n);
    var tmpCount = JSON.parse(JSON.stringify(countList)); // const index = tmpCount.indexOf(n);
    // if (index > -1) {
    //   tmpCount.splice(index, 1);
    // }

    delete tmpCount[n];
    setCountList(tmpCount);
  };

  return __jsx("div", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("title", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "STT Benchmark")), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, "STT Benchmarking"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].File, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].File.Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 27
    }
  }, "Base text file input", __jsx("code", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 64
    }
  }, ".txt")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].File.Input, {
    onChange: handleBaseTextFileInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 27
    }
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].File, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].File.Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 27
    }
  }, "Video or audio file ", __jsx("code", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 64
    }
  }, "mp4"), ",", __jsx("code", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 81
    }
  }, "ogg"), ",", __jsx("code", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 98
    }
  }, "webm"), ",", __jsx("code", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 116
    }
  }, "wav"), ",", __jsx("code", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 133
    }
  }, "mp3")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__["default"].File.Input, {
    onChange: handleSetBaseMedia,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 27
    }
  }))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("video", {
    src: baseMedia,
    style: {
      width: '100%',
      height: '200px'
    },
    controls: true,
    className: "jsx-337453522" + " " + 'videoPreview',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  })))), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, baseText && __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    block: true,
    onClick: increaseCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 35
    }
  }, "Add One")), " "), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, baseText && __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 30
    }
  }, __jsx("h2", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 35
    }
  }, "Base Text"), __jsx("p", {
    className: "jsx-337453522",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 53
    }
  }, baseText)), baseText && countList.map(function (n, index) {
    if (n) {
      return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: index + n,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 32
        }
      }, __jsx(_components_comparison_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        handleRemoveComparison: handleRemoveComparison,
        n: n,
        baseText: baseText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 51
        }
      }));
    }
  }), " ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "337453522",
    __self: this
  }, "<style>.equal{cursor:pointer;}.delete{display:inline-block;position:relative;cursor:no-drop;}.delete:before{content:\"~~~~~~~~~~~~\";font-size:0.6em;font-weight:700;font-family:Times New Roman,Serif;color:red;width:100%;position:absolute;top:12px;left:-1px;overflow:hidden;}.insert{-webkit-text-decoration-line:line-through;text-decoration-line:line-through;background-color:#e5e5ff;cursor:pointer;}.insert{display:inline-block;position:relative;cursor:pointer;}.insert:before{content:\"~~~~~~~~~~~~\";font-size:0.6em;font-weight:700;font-family:Times New Roman,Serif;color:blue;width:100%;position:absolute;top:12px;left:-1px;overflow:hidden;}.replaceStt{display:inline-block;position:relative;cursor:pointer;}.replaceStt:before{content:\"~~~~~~~~~~~~\";font-size:0.6em;font-weight:700;font-family:Times New Roman,Serif;color:red;width:100%;position:absolute;top:12px;left:-1px;overflow:hidden;}.replaceBaseText{display:inline-block;position:relative;cursor:no-drop;}.replaceBaseText:before{content:\"~~~~~~~~~~~~\";font-size:0.6em;font-weight:700;font-family:Times New Roman,Serif;color:#99cc99;width:100%;position:absolute;top:12px;left:-1px;overflow:hidden;}span.replaceBaseTextLine.line{background-color:#e5f2e5;}span.replaceBaseTextLine.line:after{content:\"]\";color:#99cc99;}span.replaceBaseTextLine.line:before{content:\"[\";color:#99cc99;}span.replaceSttLine.line{background-color:#ffe5e5;}span.replaceSttLine.line:after{content:\"]\";color:red;}span.replaceSttLine.line:before{content:\"[\";color:red;}.unplayedWord{color:grey!important;}video.videoPreview{margin-left:auto;margin-right:auto;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML3N0dC1iZW5jaG1hcmsvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUgrQixBQUlnQyxBQUlNLEFBU0UsQUFhVyxBQU1iLEFBTUUsQUFhRixBQU1FLEFBY0YsQUFPRSxBQWFFLEFBSWIsQUFLQSxBQUthLEFBSWIsQUFJQSxBQUtRLEFBSUgsWUExQkgsQUFLQSxBQVNKLEFBSUEsR0FqSGQsRUEwSHNCLElBdEhBLEFBNEJBLEFBbUJBLEFBb0JBLEFBK0N0QixDQVJBLEFBSUEsQ0FyR29CLEFBeUJBLEFBbUJBLEFBcUJBLEVBYXBCLEFBY0EsQ0FUQSxBQUtBLFNBc0JrQixJQW5IQyxBQU1DLEFBbUJELEFBTUMsQUFhRCxBQU1DLEFBZUQsQUFNQyxVQTZDcEIsS0FuSEEsQUF5QkEsQUFtQkEsQUFxQkEsQ0EzRHVDLEFBeUJBLEFBbUJBLEFBcUJBLHFCQXREVixhQVZmLEFBeUJDLEFBbUJBLEFBcUJJLFVBaEVKLEFBNENBLENBbkJBLENBZkksRUF1REosT0FoRU8sQUE0Q0EsQ0FuQkEsR0F3Q0EsRUF2RHRCLFlBVGEsQUE0Q0EsQ0FuQkEsR0F3Q0EsS0FoRUMsQUE0Q0EsQ0FuQkEsR0F3Q0EsTUFoRU0sQUE0Q0EsQ0FuQkEsR0F3Q0EsWUFoRXBCLEFBNENBLENBbkJBLEdBd0NBIiwiZmlsZSI6Ii9Vc2Vycy9wYXNzYXJlbGxpcC9DT0RFL1BFUlNPTkFML3N0dC1iZW5jaG1hcmsvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBDb21wYXJpc29uIGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGFyaXNvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2NvdW50TGlzdCwgc2V0Q291bnRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbYmFzZVRleHQsIHNldEJhc2VUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYmFzZU1lZGlhLCBzZXRCYXNlTWVkaWFdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIC8vIH0sWyAgIF0pXG5cbiAgICBjb25zdCBpbmNyZWFzZUNvdW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5jcmVhc2VDb3VudCcpXG4gICAgICAgIGNvdW50TGlzdC5wdXNoKGNvdW50TGlzdC5sZW5ndGgpO1xuICAgICAgICBjb25zdCB0bXBDb3VudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY291bnRMaXN0KSk7XG4gICAgICAgIHNldENvdW50TGlzdCh0bXBDb3VudCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVjcmVhc2VDb3VudCA9ICgpID0+IHtcbiAgICAgICAgY291bnRMaXN0LnBvcCgpO1xuICAgICAgICBjb25zdCB0bXBDb3VudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY291bnRMaXN0KSk7XG4gICAgICAgIHNldENvdW50TGlzdCh0bXBDb3VudCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQmFzZVRleHRGaWxlSW5wdXQgPShlKT0+e1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZmlsZXNbMF0ubmFtZSxlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKCk9PntcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAvLyBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpO1xuICAgICAgICAgIC8vIG5vZGUuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgICBzZXRCYXNlVGV4dCh0ZXh0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZWFkZXIucmVzdWx0LnN1YnN0cmluZygwLCAyMDApKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNldEJhc2VNZWRpYT0oZSk9PntcbiAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgIHNldEJhc2VNZWRpYSh1cmwpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlQ29tcGFyaXNvbiA9IChuKT0+e1xuICAgICAgY29uc29sZS5sb2coJ2hhbmRsZVJlbW92ZUNvbXBhcmlzb24gcGFyZW50JyxuKVxuICAgICAgY29uc3QgdG1wQ291bnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNvdW50TGlzdCkpO1xuICAgICAgLy8gY29uc3QgaW5kZXggPSB0bXBDb3VudC5pbmRleE9mKG4pO1xuICAgICAgLy8gaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIC8vICAgdG1wQ291bnQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIC8vIH1cbiAgICAgIGRlbGV0ZSB0bXBDb3VudFtuXTtcbiAgICAgIHNldENvdW50TGlzdCh0bXBDb3VudCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+U1RUIEJlbmNobWFyazwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+U1RUIEJlbmNobWFya2luZzwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+WW91IGNsaWNrZWQgeyBjb3VudExpc3QubGVuZ3RoIH0gIHRpbWVzPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImN1c3RvbS1maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBiYXNlIHRleHQgIGZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUuTGFiZWw+QmFzZSB0ZXh0IGZpbGUgaW5wdXQ8Y29kZT4udHh0PC9jb2RlPjwvRm9ybS5GaWxlLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWxlLklucHV0IG9uQ2hhbmdlPXtoYW5kbGVCYXNlVGV4dEZpbGVJbnB1dH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUuTGFiZWw+VmlkZW8gb3IgYXVkaW8gZmlsZSA8Y29kZT5tcDQ8L2NvZGU+LDxjb2RlPm9nZzwvY29kZT4sPGNvZGU+d2VibTwvY29kZT4sPGNvZGU+d2F2PC9jb2RlPiw8Y29kZT5tcDM8L2NvZGU+PC9Gb3JtLkZpbGUuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUuSW5wdXQgb25DaGFuZ2U9e2hhbmRsZVNldEJhc2VNZWRpYX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpbGU+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT0ndmlkZW9QcmV2aWV3JyBzcmM9e2Jhc2VNZWRpYX0gc3R5bGU9eyB7ICB3aWR0aDogJzEwMCUnLCAgaGVpZ2h0OiAnMjAwcHgnIH0gIH0gIGNvbnRyb2xzPjwvdmlkZW8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICB7IGJhc2VUZXh0ICYmICA8QnV0dG9uIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aW5jcmVhc2VDb3VudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+fVxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJsb2NrIG9uQ2xpY2s9e2RlY3JlYXNlQ291bnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZSBPbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD4gKi99IDwvUm93PlxuICAgICAgICAgICAgICAgIDxSb3c+IFxuICAgICAgICAgICAgICAgIHtiYXNlVGV4dCAmJiA8Q29sPjxoMj5CYXNlIFRleHQ8L2gyPjxwPntiYXNlVGV4dH08L3A+PC9Db2w+fVxuICAgICAgICAgICAgICAgICAgICB7YmFzZVRleHQgJiZcbiAgICAgICAgICAgICAgICAgICAgY291bnRMaXN0Lm1hcCgobiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZihuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q29sIGtleT17aW5kZXgrbn0+PENvbXBhcmlzb24gaGFuZGxlUmVtb3ZlQ29tcGFyaXNvbj17aGFuZGxlUmVtb3ZlQ29tcGFyaXNvbn0gbj17bn0gYmFzZVRleHQ9e2Jhc2VUZXh0fS8+PC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIC5lcXVhbHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNWU1O1xuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgICAgICAgICAgICAgLy8gY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuZGVsZXRlOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJ+fn5+fn5+fn5+fn5cIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRpbWVzIE5ldyBSb21hbiwgU2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuaW5zZXJ0e1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVmZjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmluc2VydCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmluc2VydDpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwifn5+fn5+fn5+fn5+XCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBUaW1lcyBOZXcgUm9tYW4sIFNlcmlmO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5yZXBsYWNlU3R0e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC5yZXBsYWNlU3R0OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJ+fn5+fn5+fn5+fn5cIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRpbWVzIE5ldyBSb21hbiwgU2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICByZWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIC5yZXBsYWNlQmFzZVRleHR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTljYzk5O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAucmVwbGFjZUJhc2VUZXh0OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJ+fn5+fn5+fn5+fn5cIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRpbWVzIE5ldyBSb21hbiwgU2VyaWY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICAjOTljYzk5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHNwYW4ucmVwbGFjZUJhc2VUZXh0TGluZS5saW5le1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWYyZTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgc3Bhbi5yZXBsYWNlQmFzZVRleHRMaW5lLmxpbmU6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJdXCI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OWNjOTk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgc3Bhbi5yZXBsYWNlQmFzZVRleHRMaW5lLmxpbmU6YmVmb3Jle1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiW1wiO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTljYzk5O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHNwYW4ucmVwbGFjZVN0dExpbmUubGluZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNWU1O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHNwYW4ucmVwbGFjZVN0dExpbmUubGluZTphZnRlcntcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIl1cIjtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Bhbi5yZXBsYWNlU3R0TGluZS5saW5lOmJlZm9yZXtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIltcIjtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC51bnBsYXllZFdvcmR7XG4gICAgICAgICAgICAgICAgY29sb3I6Z3JleSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgdmlkZW8udmlkZW9QcmV2aWV3IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7fSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/passarellip/CODE/PERSONAL/stt-benchmark/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.9e01dec673a620ec83c3.hot-update.js.map