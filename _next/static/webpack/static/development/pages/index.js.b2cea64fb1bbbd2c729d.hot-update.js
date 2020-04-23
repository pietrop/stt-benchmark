webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/comparison.js":
/*!**********************************!*\
  !*** ./components/comparison.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comparison; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
var _jsxFileName = "/Users/passarellip/CODE/PERSONAL/stt-benchmark/components/comparison.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var diffsListAsHtmlContentOnly = __webpack_require__(/*! stt-align-node */ "./node_modules/stt-align-node/index.js").diffsListAsHtmlContentOnly;

var diffsCount = __webpack_require__(/*! stt-align-node */ "./node_modules/stt-align-node/index.js").diffsCount;

function Comparison(props) {
  // Declare a new state variable, which we'll call "count"
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      comparisonData = _useState[0],
      setComparisonData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      htmlDiffContent = _useState2[0],
      setHtmlDiffContent = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      diffCount = _useState3[0],
      setDiffCount = _useState3[1];

  var handleAddComparisonData = function handleAddComparisonData(e) {
    var reader = new FileReader();

    reader.onload = function () {
      var text = reader.result; // const node = document.getElementById('output');
      // node.innerText = text;

      var tmpComparisonData = JSON.parse(text);
      console.log('tmpComparisonData', tmpComparisonData);
      setComparisonData(tmpComparisonData);
      console.log(reader.result.substring(0, 200));
      console.log('tmpComparisonData', tmpComparisonData);
      var tmpHtmlDiffContent = diffsListAsHtmlContentOnly(tmpComparisonData, props.baseText);
      setHtmlDiffContent(tmpHtmlDiffContent);
      var resultCount = diffsCount(tmpComparisonData, props.baseText);
      setDiffCount(resultCount);
    };

    reader.readAsText(e.target.files[0]);
  };

  var handleRemove = function handleRemove() {
    console.log('handleRemove', props.n);
    props.handleRemoveComparison(props.n);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Comparison ", props.n), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleRemove,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Remove"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].File, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].File.Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Base text file input", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 54
    }
  }, ".txt")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].File.Input, {
    onChange: handleAddComparisonData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, JSON.stringify(diffCount), diffCount && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "total",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "Total (base text):"), " ", diffCount.baseTextTotalWordCount), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "equal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "equal:"), " ", diffCount.equal), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "insert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "insert:"), " ", diffCount.insert), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("span", {
    "class": "replaceSTT ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "replace:"), " ", diffCount.replace), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "delete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "delete:"), " ", diffCount["delete"])))), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: htmlDiffContent
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.b2cea64fb1bbbd2c729d.hot-update.js.map