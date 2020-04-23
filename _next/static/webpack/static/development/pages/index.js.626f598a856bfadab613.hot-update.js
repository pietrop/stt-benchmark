webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _components_comparison_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/comparison.js */ "./components/comparison.js");
var _jsxFileName = "/Users/passarellip/CODE/PERSONAL/stt-benchmark/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var __N_SSG = true;
function Home() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([0]),
      countList = _useState[0],
      setCountList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      baseText = _useState2[0],
      setBaseText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      baseMedia = _useState3[0],
      setBaseMedia = _useState3[1];

  var videoElRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // useEffect(() => {
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

  var handleWordClick = function handleWordClick(e) {
    if (e.target.classList.contains('word')) {
      var startTime = e.target.dataset.start;

      if (videoElRef && videoElRef.current) {
        videoElRef.current.currentTime = startTime;
        videoElRef.current.play();
      }
    }
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "STT Benchmark")), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "STT Benchmarking"), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].File, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].File.Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 27
    }
  }, "Base text file input", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 64
    }
  }, ".txt")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].File.Input, {
    onChange: handleBaseTextFileInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 27
    }
  })), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].File, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].File.Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 27
    }
  }, "Video or audio file ", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 64
    }
  }, "mp4"), ",", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 81
    }
  }, "ogg"), ",", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 98
    }
  }, "webm"), ",", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 116
    }
  }, "wav"), ",", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 133
    }
  }, "mp3")), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].File.Input, {
    onChange: handleSetBaseMedia,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 27
    }
  }))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, "Equal: Some equal text", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }), "Inserted (by STT): ", __jsx("span", {
    "class": "insert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 40
    }
  }, "an"), " ", __jsx("span", {
    "class": "insert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 71
    }
  }, "inserted"), " ", __jsx("span", {
    "class": "insert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 108
    }
  }, "word"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }), "Deleted (not recognised by STT):", __jsx("span", {
    "class": "delete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 53
    }
  }, "a"), "  ", __jsx("span", {
    "class": "delete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 84
    }
  }, "deleted"), " ", __jsx("span", {
    "class": "delete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 120
    }
  }, "word"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }), "Replaced:", __jsx("span", {
    "class": "replaceBaseTextLine line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 30
    }
  }, __jsx("span", {
    "class": "replaceBaseText ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, "Some"), __jsx("span", {
    "class": "replaceBaseText ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, "base"), __jsx("span", {
    "class": "replaceBaseText ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, "text"), __jsx("span", {
    "class": "replaceBaseText ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, "line")), __jsx("span", {
    "class": "replaceSttLine line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("span", {
    "class": "replaceStt ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, "replaced"), __jsx("span", {
    "class": "replaceStt ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, "by"), __jsx("span", {
    "class": "replaceStt ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, "stt"), __jsx("span", {
    "class": "replaceStt ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, "hypothesis"))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("video", {
    ref: videoElRef,
    className: "videoPreview",
    src: baseMedia,
    style: {
      width: '100%',
      height: '200px'
    },
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  })))), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, baseText && __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    block: true,
    onClick: increaseCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 35
    }
  }, "Add a new comparison")), " "), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleWordClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, baseText && countList.map(function (n, index) {
    if (n) {
      return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: index + n,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 32
        }
      }, __jsx(_components_comparison_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        handleRemoveComparison: handleRemoveComparison,
        n: n,
        baseText: baseText,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 51
        }
      }));
    }
  }), " ")));
}

/***/ })

})
//# sourceMappingURL=index.js.626f598a856bfadab613.hot-update.js.map