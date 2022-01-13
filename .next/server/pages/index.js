module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Common/FacilitySlider.js":
/*!*********************************************!*\
  !*** ./components/Common/FacilitySlider.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right-arrow'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

class FacilitySlider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx("div", {
      className: "facility-area pb-70"
    }, __jsx("div", {
      className: "container"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "facility-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-tracking"
    })), __jsx("h3", null, "Free Shipping Worldwide")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-return"
    })), __jsx("h3", null, "Easy Return Policy")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-shuffle"
    })), __jsx("h3", null, "7 Day Exchange Policy")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-sale"
    })), __jsx("h3", null, "Weekend Discount Coupon")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-credit-card"
    })), __jsx("h3", null, "Secure Payment Methods")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-location"
    })), __jsx("h3", null, "Track Your Order")), __jsx("div", {
      className: "single-facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "flaticon-customer-service"
    })), __jsx("h3", null, "24/7 Customer Support"))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FacilitySlider);

/***/ }),

/***/ "./components/Common/InstagramFeed.js":
/*!********************************************!*\
  !*** ./components/Common/InstagramFeed.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right-arrow'></i>"],
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
};

class InstagramFeed extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx("div", {
      className: "instagram-area"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "instagram-title"
    }, __jsx("a", {
      href: "#",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-instagram"
    }), " Follow us on @livani")), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "instagram-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta1.jpg */ "./images/instagram/insta1.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta2.jpg */ "./images/instagram/insta2.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta3.jpg */ "./images/instagram/insta3.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta4.jpg */ "./images/instagram/insta4.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta5.jpg */ "./images/instagram/insta5.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta6.jpg */ "./images/instagram/insta6.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta7.jpg */ "./images/instagram/insta7.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta8.jpg */ "./images/instagram/insta8.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta9.jpg */ "./images/instagram/insta9.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    }))), __jsx("div", {
      className: "single-instagram-post"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/instagram/insta10.jpg */ "./images/instagram/insta10.jpg"),
      alt: "image"
    }), __jsx("i", {
      className: "bx bxl-instagram"
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank",
      className: "link-btn"
    })))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (InstagramFeed);

/***/ }),

/***/ "./components/Common/OfferStyleOne.js":
/*!********************************************!*\
  !*** ./components/Common/OfferStyleOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class OfferStyleOne extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "offer-area bg-image1 ptb-100 jarallax"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-5 col-md-6"
    }, __jsx("div", {
      className: "offer-content"
    }, __jsx("span", {
      className: "sub-title"
    }, "Limited Time Offer!"), __jsx("h2", null, "-40% OFF"), __jsx("p", null, "Get The Best Deals Now"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-one-row"
    }, __jsx("a", {
      className: "default-btn"
    }, "Discover Now")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OfferStyleOne);

/***/ }),

/***/ "./components/Common/Partner.js":
/*!**************************************!*\
  !*** ./components/Common/Partner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right-arrow'></i>"],
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 4
    },
    768: {
      items: 4
    },
    1200: {
      items: 7
    }
  }
};

class Partner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx("div", {
      className: "partner-area ptb-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Our Partners")), this.state.display ? __jsx(OwlCarousel, _extends({
      className: "partner-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner1.png */ "./images/partner/partner1.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner2.png */ "./images/partner/partner2.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner3.png */ "./images/partner/partner3.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner4.png */ "./images/partner/partner4.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner5.png */ "./images/partner/partner5.png"),
      alt: "image"
    })))), __jsx("div", {
      className: "partner-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/partner/partner6.png */ "./images/partner/partner6.png"),
      alt: "image"
    }))))) : ''));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Partner);

/***/ }),

/***/ "./components/Common/RecentBlogPost.js":
/*!*********************************************!*\
  !*** ./components/Common/RecentBlogPost.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class RecentBlogPost extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "blog-area pt-100 pb-70"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("span", {
      className: "sub-title"
    }, "Recent Story"), __jsx("h2", null, "From The Livani Blog")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "post-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog/blog1.jpg */ "./images/blog/blog1.jpg"),
      alt: "image"
    }))), __jsx("div", {
      className: "date"
    }, __jsx("span", null, "January 29, 2020"))), __jsx("div", {
      className: "post-content"
    }, __jsx("span", {
      className: "category"
    }, "Ideas"), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", null, "The #1 eCommerce blog to grow your business"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", {
      className: "details-btn"
    }, "Read Story"))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "post-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog/blog2.jpg */ "./images/blog/blog2.jpg"),
      alt: "image"
    }))), __jsx("div", {
      className: "date"
    }, __jsx("span", null, "January 29, 2020"))), __jsx("div", {
      className: "post-content"
    }, __jsx("span", {
      className: "category"
    }, "Advice"), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", null, "Latest ecommerce trend: The rise of shoppable posts"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", {
      className: "details-btn"
    }, "Read Story"))))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-blog-post"
    }, __jsx("div", {
      className: "post-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/blog/blog3.jpg */ "./images/blog/blog3.jpg"),
      alt: "image"
    }))), __jsx("div", {
      className: "date"
    }, __jsx("span", null, "January 29, 2020"))), __jsx("div", {
      className: "post-content"
    }, __jsx("span", {
      className: "category"
    }, "Social"), __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", null, "Building eCommerce wave: Social media shopping"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/single-blog-1"
    }, __jsx("a", {
      className: "details-btn"
    }, "Read Story"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RecentBlogPost);

/***/ }),

/***/ "./components/Common/SingleProduct.js":
/*!********************************************!*\
  !*** ./components/Common/SingleProduct.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SingleProduct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      QuickViewModal: false
    });

    _defineProperty(this, "handleAddToCart", id => {
      this.props.onHandleAddToCart(id);
    });

    _defineProperty(this, "toggleModal", () => {
      this.setState({
        QuickViewModal: !this.state.QuickViewModal
      });
      this.props.ontoggleModal(this.state.QuickViewModal);
    });

    _defineProperty(this, "handleModalProduct", product => {
      this.props.onhandleModalProduct(product);
    });
  }

  render() {
    let {
      product,
      styleCls,
      styleClsTwo
    } = this.props;
    return __jsx("div", {
      className: styleCls
    }, __jsx("div", {
      className: styleClsTwo || "single-products-box"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/product?id=${product.id}`
    }, __jsx("a", null, __jsx("img", {
      src: product.imageUrl,
      className: "main-image",
      alt: "image"
    }), __jsx("img", {
      src: product.imageHoverUrl,
      className: "hover-image",
      alt: "image"
    }))), __jsx("div", {
      className: "products-button"
    }, __jsx("ul", null, __jsx("li", null, __jsx("div", {
      className: "wishlist-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => e.preventDefault()
    }, __jsx("i", {
      className: "bx bx-heart"
    }), __jsx("span", {
      className: "tooltip-label"
    }, "Add to Wishlist"))))), __jsx("li", null, __jsx("div", {
      className: "compare-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => e.preventDefault()
    }, __jsx("i", {
      className: "bx bx-refresh"
    }), __jsx("span", {
      className: "tooltip-label"
    }, "Compare"))))), __jsx("li", null, __jsx("div", {
      className: "quick-view-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.toggleModal();
        this.handleModalProduct(product);
      }
    }, __jsx("i", {
      className: "bx bx-search-alt"
    }), __jsx("span", {
      className: "tooltip-label"
    }, "Quick View"))))))), product.onSale ? __jsx("div", {
      className: "sale-tag"
    }, "Sale!") : null, product.newProduct ? __jsx("div", {
      className: "new-tag"
    }, "New!") : null), __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx("a", {
      href: `/products-type-1?id=${product.id}`
    }, product.title)), __jsx("div", {
      className: "price"
    }, product.offer ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      className: "old-price"
    }, "$", product.oldPrice), __jsx("span", {
      className: "new-price"
    }, "$", product.newPrice)) : __jsx("span", {
      className: "new-price"
    }, "$", product.oldPrice)), __jsx("div", {
      className: "star-rating"
    }, __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    })), __jsx("a", {
      className: "add-to-cart",
      onClick: e => {
        e.preventDefault();
        this.handleAddToCart(product.id);
      }
    }, "Add To Cart")), product.discount ? __jsx("span", {
      className: "products-discount"
    }, __jsx("span", null, product.discountOff, "% OFF")) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SingleProduct);

/***/ }),

/***/ "./components/HomeOne/BestSellingProducts.js":
/*!***************************************************!*\
  !*** ./components/HomeOne/BestSellingProducts.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modals_QuickViewModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modals/QuickViewModal */ "./components/Modals/QuickViewModal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/SingleProduct */ "./components/Common/SingleProduct.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class BestSellingProducts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      QuickViewModal: false,
      modalProduct: {},
      products: []
    });

    _defineProperty(this, "toggleModal", () => {
      this.setState({
        QuickViewModal: !this.state.QuickViewModal
      });
    });

    _defineProperty(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "passDataToModal", product => {
      this.setState({
        modalProduct: product
      });
    });
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "products-area pb-70"
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], null), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("span", {
      className: "sub-title"
    }, "See Our Collection"), __jsx("h2", null, "Best Selling Products")), __jsx("div", {
      className: "row"
    }, !!this.state.products.length && this.state.products.map((product, idx) => __jsx(_Common_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], {
      styleCls: "col-lg-4 col-sm-6",
      styleClsTwo: "products-box",
      product: product,
      key: idx,
      onHandleAddToCart: this.handleAddToCart,
      onhandleModalProduct: this.passDataToModal,
      ontoggleModal: this.toggleModal
    }))))), __jsx(_Modals_QuickViewModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: this.toggleModal,
      active: this.state.QuickViewModal ? 'active' : '',
      product: this.state.modalProduct
    }));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__["addToCart"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(BestSellingProducts));

/***/ }),

/***/ "./components/HomeOne/CategoriesBanner.js":
/*!************************************************!*\
  !*** ./components/HomeOne/CategoriesBanner.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class CategoriesBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "categories-banner-area pt-100 pb-70"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-categories-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/categories/categories1.jpg */ "./images/categories/categories1.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "content text-white"
    }, __jsx("span", null, "Don\u2019t Miss Today"), __jsx("h3", null, "50% OFF"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: "default-btn"
    }, "Discover Now"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: "link-btn"
    })))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-categories-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/categories/categories2.jpg */ "./images/categories/categories2.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "content"
    }, __jsx("span", null, "New Collection"), __jsx("h3", null, "Need Now"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: "default-btn"
    }, "Discover Now"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: "link-btn"
    })))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-categories-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/categories/categories3.jpg */ "./images/categories/categories3.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "content"
    }, __jsx("span", null, "Your Looks"), __jsx("h3", null, "Must Haves"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: "default-btn"
    }, "Discover Now"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: "link-btn"
    })))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-categories-box"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/categories/categories4.jpg */ "./images/categories/categories4.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "content text-white"
    }, __jsx("span", null, "Take 20% OFF"), __jsx("h3", null, "Winter Spring!"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: "default-btn"
    }, "Discover Now"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: "link-btn"
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CategoriesBanner);

/***/ }),

/***/ "./components/HomeOne/MainBanner.js":
/*!******************************************!*\
  !*** ./components/HomeOne/MainBanner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 500,
  items: 1,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right-arrow'></i>"]
};

class MainBanner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.setState({
      display: true
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "home-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "main-banner banner-bg1"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, null, ({
      isVisible
    }) => __jsx("div", {
      className: "main-banner-content text-center"
    }, __jsx("span", {
      className: isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
    }, "Limited Time Offer!"), __jsx("h1", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "Winter-Spring!"), __jsx("p", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "Take 20% Off \u2018Sale Must-Haves'"), __jsx("div", {
      className: "btn-box"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-left-sidebar"
    }, __jsx("a", {
      className: `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Women's")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Men's"))))))))), __jsx("div", {
      className: "main-banner banner-bg2"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, null, ({
      isVisible
    }) => __jsx("div", {
      className: "main-banner-content"
    }, __jsx("span", {
      className: isVisible ? "sub-title animated fadeInUp slow opacityOne" : 'opacityZero'
    }, "Exclusive Offer!"), __jsx("h1", {
      className: isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
    }, "Spring-Show!"), __jsx("p", {
      className: isVisible ? "animated fadeInUp slow opacityOne" : 'opacityZero'
    }, "Leap year offer \u2018Sale Must-Haves'"), __jsx("div", {
      className: "btn-box"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-left-sidebar"
    }, __jsx("a", {
      className: `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Women's")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Men's"))))))))), __jsx("div", {
      className: "main-banner banner-bg3"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, null, ({
      isVisible
    }) => __jsx("div", {
      className: "main-banner-content"
    }, __jsx("span", {
      className: isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
    }, "Buy Now From Livani!"), __jsx("h1", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "New Season Canvas"), __jsx("p", {
      className: isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
    }, "Take 20% Off \u2018Sale Must-Haves'"), __jsx("div", {
      className: "btn-box"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-left-sidebar"
    }, __jsx("a", {
      className: `default-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Women's")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-right-sidebar"
    }, __jsx("a", {
      className: `optional-btn ${isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'}`
    }, "Shop Men's")))))))))) : '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainBanner);

/***/ }),

/***/ "./components/HomeOne/PopularProducts.js":
/*!***********************************************!*\
  !*** ./components/HomeOne/PopularProducts.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modals_QuickViewModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modals/QuickViewModal */ "./components/Modals/QuickViewModal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/SingleProduct */ "./components/Common/SingleProduct.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PopularProducts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      QuickViewModal: false,
      modalProduct: {},
      products: []
    });

    _defineProperty(this, "toggleModal", () => {
      this.setState({
        QuickViewModal: !this.state.QuickViewModal
      });
    });

    _defineProperty(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "passDataToModal", product => {
      this.setState({
        modalProduct: product
      });
    });
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "products-area pt-100 pb-70"
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], null), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("span", {
      className: "sub-title"
    }, "See Our Collection"), __jsx("h2", null, "Popular Products")), __jsx("div", {
      className: "row"
    }, !!this.state.products.length && this.state.products.map((product, idx) => __jsx(_Common_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], {
      styleCls: "col-lg-4 col-sm-6",
      styleClsTwo: "products-box",
      product: product,
      key: idx,
      onHandleAddToCart: this.handleAddToCart,
      onhandleModalProduct: this.passDataToModal,
      ontoggleModal: this.toggleModal
    }))))), __jsx(_Modals_QuickViewModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: this.toggleModal,
      active: this.state.QuickViewModal ? 'active' : '',
      product: this.state.modalProduct
    }));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__["addToCart"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(PopularProducts));

/***/ }),

/***/ "./components/HomeOne/RecentProducts.js":
/*!**********************************************!*\
  !*** ./components/HomeOne/RecentProducts.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modals_QuickViewModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modals/QuickViewModal */ "./components/Modals/QuickViewModal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/SingleProduct */ "./components/Common/SingleProduct.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class RecentProducts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      QuickViewModal: false,
      modalProduct: {},
      products: []
    });

    _defineProperty(this, "toggleModal", () => {
      this.setState({
        QuickViewModal: !this.state.QuickViewModal
      });
    });

    _defineProperty(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "passDataToModal", product => {
      this.setState({
        modalProduct: product
      });
    });
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "products-area pb-70"
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], null), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("span", {
      className: "sub-title"
    }, "See Our Collection"), __jsx("h2", null, "Recent Products")), __jsx("div", {
      className: "row"
    }, !!this.state.products.length && this.state.products.map((product, idx) => __jsx(_Common_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], {
      styleCls: "col-lg-4 col-sm-6",
      product: product,
      key: idx,
      onHandleAddToCart: this.handleAddToCart,
      onhandleModalProduct: this.passDataToModal,
      ontoggleModal: this.toggleModal
    }))))), __jsx(_Modals_QuickViewModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: this.toggleModal,
      active: this.state.QuickViewModal ? 'active' : '',
      product: this.state.modalProduct
    }));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__["addToCart"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(RecentProducts));

/***/ }),

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let currentYear = new Date().getFullYear();
    return __jsx("footer", {
      className: "footer-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "About The Store"), __jsx("div", {
      className: "about-the-store"
    }, __jsx("p", null, "One of the most popular on the web is shopping."), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "bx bx-map"
    }), "Wonder Street, USA, New York"), __jsx("li", null, __jsx("i", {
      className: "bx bx-phone-call"
    }), "+1-541-754-3010"), __jsx("li", null, __jsx("i", {
      className: "bx bx-envelope"
    }), "hello@livani.com"))), __jsx("ul", {
      className: "social-link"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-linkedin"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-pinterest-alt"
    }))))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-4"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "quick-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-left-sidebar"
    }, __jsx("a", null, "Shop Now!"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-left-sidebar-2"
    }, __jsx("a", null, "Woman's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faqs"
    }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/customer-service"
    }, __jsx("a", null, "Customer Services")))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Customer Support"), __jsx("ul", {
      className: "customer-support"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login"
    }, __jsx("a", null, "My Account"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/checkout"
    }, __jsx("a", null, "Checkout"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/cart"
    }, __jsx("a", null, "Cart"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faqs"
    }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/track-order"
    }, __jsx("a", null, "Order Tracking"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Help & Support")))))), __jsx("div", {
      className: "col-lg-3 col-md-6 col-sm-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Newsletter"), __jsx("div", {
      className: "footer-newsletter-box"
    }, __jsx("p", null, "To get the latest news and latest updates from us."), __jsx("form", {
      className: "newsletter-form"
    }, __jsx("label", null, "Your E-mail Address:"), __jsx("input", {
      type: "email",
      className: "input-newsletter",
      placeholder: "Enter your email",
      name: "email",
      required: true
    }), __jsx("button", {
      type: "submit"
    }, "Subscribe")))))), __jsx("div", {
      className: "footer-bottom-area"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Copyright ", __jsx("i", {
      className: "bx bx-copyright"
    }), currentYear, " Livani Designed By ", __jsx("a", {
      href: "https://envytheme.com/",
      target: "_blank"
    }, "EnvyTheme"), " - All rights reserved.")), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", {
      className: "payment-types"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/payment/visa.png */ "./images/payment/visa.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/payment/mastercard.png */ "./images/payment/mastercard.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/payment/mastercard2.png */ "./images/payment/mastercard2.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/payment/visa2.png */ "./images/payment/visa2.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/payment/expresscard.png */ "./images/payment/expresscard.png"),
      alt: "image"
    }))))))))), __jsx("div", {
      className: "lines"
    }, __jsx("div", {
      className: "line"
    }), __jsx("div", {
      className: "line"
    }), __jsx("div", {
      className: "line"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _Modals_SearchModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modals/SearchModal */ "./components/Modals/SearchModal.js");
/* harmony import */ var _Modals_ShoppingCartModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modals/ShoppingCartModal */ "./components/Modals/ShoppingCartModal.js");
/* harmony import */ var _Modals_SidebarModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modals/SidebarModal */ "./components/Modals/SidebarModal.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      display: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    _defineProperty(this, "toggleModalSearch", () => {
      this.setState({
        SearchModal: !this.state.SearchModal
      });
    });

    _defineProperty(this, "toggleModalCart", () => {
      this.setState({
        ShoppingCartModal: !this.state.ShoppingCartModal
      });
    });

    _defineProperty(this, "toggleModalSidebar", () => {
      this.setState({
        SidebarModal: !this.state.SidebarModal
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  } // Search Modal


  render() {
    const {
      products
    } = this.props;
    const {
      collapsed
    } = this.state;
    const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classNameTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      id: "navbar",
      className: "navbar-area"
    }, __jsx("div", {
      className: "main-nav"
    }, __jsx("div", {
      className: "container"
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/"
    }, __jsx("a", {
      className: "navbar-brand"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
      alt: "logo"
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classNameTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "icon-bar top-bar"
    }), __jsx("span", {
      className: "icon-bar middle-bar"
    }), __jsx("span", {
      className: "icon-bar bottom-bar"
    })), __jsx("div", {
      className: classNameOne,
      id: "navbarSupportedContent"
    }, __jsx("ul", {
      className: "navbar-nav"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Fashion Style One"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/fashion-style-two",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Fashion Style Two"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/fashion-style-three",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Fashion Style Three"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/fashion-style-four",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Fashion Style Four"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/fashion-style-five",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Fashion Style Five"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/covid19",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Covid-19 Store", __jsx("span", null, "New")))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/grocery",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Grocery Store", __jsx("span", null, "New")))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/electronics",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Electronics Store", __jsx("span", null, "New")))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/furniture",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Furniture Store", __jsx("span", null, "New")))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/jewelry",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Jewelry Store", __jsx("span", null, "New")))))), __jsx("li", {
      className: "nav-item megamenu"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Shop ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-left-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Left Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-left-sidebar-with-categories",
      activeClassName: "active"
    }, __jsx("a", null, "Left Sidebar With Categories"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-1",
      activeClassName: "active"
    }, __jsx("a", null, "Categories (2 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-4",
      activeClassName: "active"
    }, __jsx("a", null, "Categories Full Width (3 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles 2"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-right-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Right Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-right-sidebar-with-categories",
      activeClassName: "active"
    }, __jsx("a", null, "Right Sidebar With Categories"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-2",
      activeClassName: "active"
    }, __jsx("a", null, "Categories Fullwidth"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/lookbook-1",
      activeClassName: "active"
    }, __jsx("a", null, "Grid (3 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles 3"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-without-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Without Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-sidebar-fullwidth",
      activeClassName: "active"
    }, __jsx("a", null, "With Sidebar Full Width"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-3",
      activeClassName: "active"
    }, __jsx("a", null, "Categories (1 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/lookbook-2",
      activeClassName: "active"
    }, __jsx("a", null, "Grid Full Width (4 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Product Pages"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/cart",
      activeClassName: "active"
    }, __jsx("a", null, "Cart"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/checkout",
      activeClassName: "active"
    }, __jsx("a", null, "Checkout"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/login",
      activeClassName: "active"
    }, __jsx("a", null, "My Account"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/sizing-guide",
      activeClassName: "active"
    }, __jsx("a", null, "Sizing Guide")))))))))), __jsx("li", {
      className: "nav-item megamenu"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pages ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Pages"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/about",
      activeClassName: "active"
    }, __jsx("a", null, "About Us"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/customer-service",
      activeClassName: "active"
    }, __jsx("a", null, "Customer Service"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/login",
      activeClassName: "active"
    }, __jsx("a", null, "Login"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/signup",
      activeClassName: "active"
    }, __jsx("a", null, "Signup"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/faqs",
      activeClassName: "active"
    }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/error-404",
      activeClassName: "active"
    }, __jsx("a", null, "404 Error"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/coming-soon",
      activeClassName: "active"
    }, __jsx("a", null, "Coming Soon"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/track-order",
      activeClassName: "active"
    }, __jsx("a", null, "Tracking Order"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/contact",
      activeClassName: "active"
    }, __jsx("a", null, "Contact Us"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Gallery"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/gallery-1",
      activeClassName: "active"
    }, __jsx("a", null, "Grid (2 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/gallery-2",
      activeClassName: "active"
    }, __jsx("a", null, "Grid (3 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/gallery-3",
      activeClassName: "active"
    }, __jsx("a", null, "Grid Full Width (3 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/gallery-4",
      activeClassName: "active"
    }, __jsx("a", null, "Grid Full Width (4 in Row)")))), __jsx("h6", {
      className: "submenu-title"
    }, "My Account"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/login",
      activeClassName: "active"
    }, __jsx("a", null, "Login"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/signup",
      activeClassName: "active"
    }, __jsx("a", null, "Signup"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Categories"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-1",
      activeClassName: "active"
    }, __jsx("a", null, "Categories (2 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-2",
      activeClassName: "active"
    }, __jsx("a", null, "Categories Fullwidth"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-3",
      activeClassName: "active"
    }, __jsx("a", null, "Categories (1 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-4",
      activeClassName: "active"
    }, __jsx("a", null, "Categories Full Width (3 in Row)")))), __jsx("h6", {
      className: "submenu-title"
    }, "Lookbook"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/lookbook-1",
      activeClassName: "active"
    }, __jsx("a", null, "Grid (3 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/lookbook-2",
      activeClassName: "active"
    }, __jsx("a", null, "Grid Full Width (4 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/cart",
      activeClassName: "active"
    }, __jsx("a", null, "Cart"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/checkout",
      activeClassName: "active"
    }, __jsx("a", null, "Cehckout"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/compare",
      activeClassName: "active"
    }, __jsx("a", null, "Compare"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/login",
      activeClassName: "active"
    }, __jsx("a", null, "My Account"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/sizing-guide",
      activeClassName: "active"
    }, __jsx("a", null, "Sizing Guide"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/track-order",
      activeClassName: "active"
    }, __jsx("a", null, "Tracking Order"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/customer-service",
      activeClassName: "active"
    }, __jsx("a", null, "Customer Service"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/contact",
      activeClassName: "active"
    }, __jsx("a", null, "Contact Us")))))))))), __jsx("li", {
      className: "nav-item megamenu"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Women's ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-left-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Left Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-left-sidebar-with-categories",
      activeClassName: "active"
    }, __jsx("a", null, "Left Sidebar With Categories"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-1",
      activeClassName: "active"
    }, __jsx("a", null, "Categories (2 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-4",
      activeClassName: "active"
    }, __jsx("a", null, "Categories Full Width (3 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles 2"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-right-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Right Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-right-sidebar-with-categories",
      activeClassName: "active"
    }, __jsx("a", null, "Right Sidebar With Categories"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-2",
      activeClassName: "active"
    }, __jsx("a", null, "Categories Fullwidth"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/lookbook-1",
      activeClassName: "active"
    }, __jsx("a", null, "Grid (3 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles 3"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-without-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Without Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-sidebar-fullwidth",
      activeClassName: "active"
    }, __jsx("a", null, "With Sidebar Full Width"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-3",
      activeClassName: "active"
    }, __jsx("a", null, "Categories (1 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/lookbook-2",
      activeClassName: "active"
    }, __jsx("a", null, "Grid Full Width (4 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx("div", {
      className: "aside-trending-products"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/categories/categories3.jpg */ "./images/categories/categories3.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "category"
    }, __jsx("h4", null, "Popular Products")), __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "link-btn"
    }))))))))))), __jsx("li", {
      className: "nav-item megamenu"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Men's ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-left-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Left Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-left-sidebar-with-categories",
      activeClassName: "active"
    }, __jsx("a", null, "Left Sidebar With Categories"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-1",
      activeClassName: "active"
    }, __jsx("a", null, "Categories (2 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-4",
      activeClassName: "active"
    }, __jsx("a", null, "Categories Full Width (3 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles 2"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-right-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Right Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-right-sidebar-with-categories",
      activeClassName: "active"
    }, __jsx("a", null, "Right Sidebar With Categories"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-2",
      activeClassName: "active"
    }, __jsx("a", null, "Categories Fullwidth"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/lookbook-1",
      activeClassName: "active"
    }, __jsx("a", null, "Grid (3 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Shop Styles 3"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-without-sidebar",
      activeClassName: "active"
    }, __jsx("a", null, "Without Sidebar"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/products-sidebar-fullwidth",
      activeClassName: "active"
    }, __jsx("a", null, "With Sidebar Full Width"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/categories-3",
      activeClassName: "active"
    }, __jsx("a", null, "Categories (1 in Row)"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/lookbook-2",
      activeClassName: "active"
    }, __jsx("a", null, "Grid Full Width (4 in Row)"))))), __jsx("div", {
      className: "col"
    }, __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx("div", {
      className: "aside-trending-products"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/categories/categories4.jpg */ "./images/categories/categories4.jpg"),
      alt: "image"
    }), __jsx("div", {
      className: "category"
    }, __jsx("h4", null, "Popular Products")), __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "link-btn"
    }))))))))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/blog-1",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Grid (2 in Row)"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/blog-2",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Grid (3 in Row)"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/blog-3",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Grid (4 in Row)"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/blog-4",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Grid (Full Width)"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/blog-5",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Right Sidebar"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Single Post ", __jsx("i", {
      className: "bx bx-chevron-right"
    }))), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/single-blog-1",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "Default"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/single-blog-2",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "With Video"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/single-blog-3",
      activeClassName: "active"
    }, __jsx("a", {
      className: "nav-link"
    }, "With Image Slider")))))))), __jsx("div", {
      className: "others-option"
    }, __jsx("div", {
      className: "option-item"
    }, __jsx("div", {
      className: "search-btn-box",
      onClick: this.toggleModalSearch
    }, __jsx("i", {
      className: "search-btn bx bx-search-alt"
    }))), __jsx("div", {
      className: "option-item"
    }, __jsx("div", {
      className: "cart-btn"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "#toggleModalCart"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.toggleModalCart();
      }
    }, __jsx("i", {
      className: "bx bx-shopping-bag"
    }), __jsx("span", null, products.length))))), __jsx("div", {
      className: "option-item"
    }, __jsx("div", {
      className: "burger-menu",
      onClick: this.toggleModalSidebar
    }, __jsx("span", {
      className: "top-bar"
    }), __jsx("span", {
      className: "middle-bar"
    }), __jsx("span", {
      className: "bottom-bar"
    }))))))))), __jsx(_Modals_SearchModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: this.toggleModalSearch,
      active: this.state.SearchModal ? 'active' : ''
    }), __jsx(_Modals_ShoppingCartModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: this.toggleModalCart,
      active: this.state.ShoppingCartModal ? 'active' : ''
    }), __jsx(_Modals_SidebarModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: this.toggleModalSidebar,
      active: this.state.SidebarModal ? 'active' : ''
    }));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Navbar));

/***/ }),

/***/ "./components/Layouts/TopHeader.js":
/*!*****************************************!*\
  !*** ./components/Layouts/TopHeader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var _Modals_WishlistModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modals/WishlistModal */ "./components/Modals/WishlistModal.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class TopHeader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      WishlistModal: false
    });

    _defineProperty(this, "toggleModalWishlist", () => {
      this.setState({
        WishlistModal: !this.state.WishlistModal
      });
    });

    _defineProperty(this, "handleLogout", () => {
      this.props.userLogout();
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    });
  }

  render() {
    const {
      user
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "top-header"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("ul", {
      className: "header-contact-info"
    }, __jsx("li", null, "Welcome to Livani"), __jsx("li", null, "Call: +1-541-754-3010"), __jsx("li", null, __jsx("div", {
      className: "dropdown language-switcher d-inline-block"
    }, __jsx("button", {
      className: "dropdown-toggle",
      type: "button"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/us-flag.jpg */ "./images/us-flag.jpg"),
      alt: "image"
    }), __jsx("span", null, "Eng ", __jsx("i", {
      className: "bx bx-chevron-down"
    }))), __jsx("div", {
      className: "dropdown-menu"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/germany-flag.jpg */ "./images/germany-flag.jpg"),
      className: "shadow-sm",
      alt: "flag"
    }), __jsx("span", null, "Ger"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/france-flag.jpg */ "./images/france-flag.jpg"),
      className: "shadow-sm",
      alt: "flag"
    }), __jsx("span", null, "Fre"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/spain-flag.jpg */ "./images/spain-flag.jpg"),
      className: "shadow-sm",
      alt: "flag"
    }), __jsx("span", null, "Spa"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/russia-flag.jpg */ "./images/russia-flag.jpg"),
      className: "shadow-sm",
      alt: "flag"
    }), __jsx("span", null, "Rus"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "dropdown-item d-flex align-items-center"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/italy-flag.jpg */ "./images/italy-flag.jpg"),
      className: "shadow-sm",
      alt: "flag"
    }), __jsx("span", null, "Ita")))))))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("ul", {
      className: "header-top-menu"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login"
    }, __jsx("a", null, __jsx("i", {
      className: "bx bxs-user"
    }), " My Account"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#toggleModalWishlist"
    }, __jsx("a", {
      onClick: this.toggleModalWishlist
    }, __jsx("i", {
      className: "bx bx-heart"
    }), " Wishlist"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/compare"
    }, __jsx("a", null, __jsx("i", {
      className: "bx bx-shuffle"
    }), " Compare"))), __jsx("li", null, user ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.handleLogout();
      }
    }, __jsx("i", {
      className: "bx bx-log-in"
    }), " Logout")) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login"
    }, __jsx("a", null, __jsx("i", {
      className: "bx bx-log-in"
    }), " Login")))))))), __jsx(_Modals_WishlistModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: this.toggleModalWishlist,
      active: this.state.WishlistModal ? 'active' : ''
    }));
  }

}

const mapStateToProps = state => {
  return {
    user: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["userLogout"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(TopHeader));

/***/ }),

/***/ "./components/Modals/QuickViewModal.js":
/*!*********************************************!*\
  !*** ./components/Modals/QuickViewModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QuickViewModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false,
      qty: 1,
      max: 10,
      min: 1
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
      this.setState({
        qty: 1
      });
    });

    _defineProperty(this, "handleAddToCartFromView", () => {
      this.props.addQuantityWithNumber(this.props.product.id, this.state.qty);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setTimeout(() => {
        this.closeModal();
      }, 2000);
    });

    _defineProperty(this, "IncrementItem", () => {
      this.setState(prevState => {
        if (prevState.qty < 10) {
          return {
            qty: prevState.qty + 1
          };
        } else {
          return null;
        }
      });
    });

    _defineProperty(this, "DecreaseItem", () => {
      this.setState(prevState => {
        if (prevState.qty > 1) {
          return {
            qty: prevState.qty - 1
          };
        } else {
          return null;
        }
      });
    });
  }

  render() {
    let {
      product
    } = this.props;
    return __jsx("div", {
      className: `modal fade productsQuickView ${this.props.active}`
    }, __jsx("div", {
      className: "modal-dialog modal-dialog-centered"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "bx bx-x"
    }))), __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx("img", {
      src: product["imageUrl"],
      alt: "image"
    }), product.onSale ? __jsx("div", {
      className: "sale-tag"
    }, "Sale!") : null)), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, product.title))), __jsx("div", {
      className: "price"
    }, product.offer ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
      className: "old-price"
    }, "$", product.oldPrice), __jsx("span", {
      className: "new-price"
    }, "$", product.newPrice)) : __jsx("span", {
      className: "new-price"
    }, "$", product.oldPrice)), __jsx("div", {
      className: "products-review"
    }, __jsx("div", {
      className: "rating"
    }, __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    }), __jsx("i", {
      className: "bx bxs-star"
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "rating-count"
    }, "3 reviews"))), __jsx("ul", {
      className: "products-info"
    }, __jsx("li", null, __jsx("span", null, "Vendor:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "Lereve"))), __jsx("li", null, __jsx("span", null, "Availability:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "In stock (7 items)"))), __jsx("li", null, __jsx("span", null, "Products Type:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "T-Shirt")))), __jsx("div", {
      className: "products-color-switch"
    }, __jsx("h4", null, "Color:"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Black",
      className: "color-black"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "White",
      className: "color-white"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Green",
      className: "color-green"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Yellow Green",
      className: "color-yellowgreen"
    }))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Teal",
      className: "color-teal"
    }))))), __jsx("div", {
      className: "products-size-wrapper"
    }, __jsx("h4", null, "Size:"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XS"))), __jsx("li", {
      className: "active"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "S"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "M"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XL"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, "XXL"))))), __jsx("div", {
      className: "products-add-to-cart"
    }, __jsx("div", {
      className: "input-counter"
    }, __jsx("span", {
      className: "minus-btn",
      onClick: this.DecreaseItem
    }, __jsx("i", {
      className: "bx bx-minus"
    })), __jsx("input", {
      type: "text",
      value: this.state.qty,
      min: this.state.min,
      max: this.state.max,
      onChange: e => this.setState({
        qty: e.target.value
      })
    }), __jsx("span", {
      className: "plus-btn",
      onClick: this.IncrementItem
    }, __jsx("i", {
      className: "bx bx-plus"
    }))), __jsx("button", {
      type: "submit",
      className: "default-btn",
      onClick: this.handleAddToCartFromView
    }, "Add to Cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "view-full-info"
    }, "View Full Info"))))))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addQuantityWithNumber: (id, qty) => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_3__["addQuantityWithNumber"])(id, qty));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(QuickViewModal));

/***/ }),

/***/ "./components/Modals/SearchModal.js":
/*!******************************************!*\
  !*** ./components/Modals/SearchModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SearchModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return __jsx("div", {
      className: `search-overlay ${this.props.active}`
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "search-overlay-layer"
    }), __jsx("div", {
      className: "search-overlay-layer"
    }), __jsx("div", {
      className: "search-overlay-layer"
    }), __jsx("div", {
      className: "search-overlay-close",
      onClick: this.closeModal
    }, __jsx("span", {
      className: "search-overlay-close-line"
    }), __jsx("span", {
      className: "search-overlay-close-line"
    })), __jsx("div", {
      className: "search-overlay-form"
    }, __jsx("form", null, __jsx("input", {
      type: "text",
      className: "input-search",
      placeholder: "Search here..."
    }), __jsx("button", {
      type: "submit"
    }, __jsx("i", {
      className: "bx bx-search-alt"
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchModal);

/***/ }),

/***/ "./components/Modals/ShoppingCartModal.js":
/*!************************************************!*\
  !*** ./components/Modals/ShoppingCartModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/cartActions */ "./store/actions/cartActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ShoppingCartModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "handleRemove", id => {
      this.props.removeItem(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error('Removed from cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    let cartItems = this.props.products.length ? this.props.products.map((product, idx) => {
      return __jsx("div", {
        className: "products-cart-content",
        key: idx
      }, __jsx("div", {
        className: "products-cart"
      }, __jsx("div", {
        className: "products-image"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#"
      }, __jsx("a", null, __jsx("img", {
        src: product.imageUrl,
        alt: "image"
      })))), __jsx("div", {
        className: "products-content"
      }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#"
      }, __jsx("a", null, product.title))), __jsx("div", {
        className: "products-price"
      }, __jsx("span", null, product.quantity), __jsx("span", null, "x"), __jsx("span", {
        className: "price"
      }, "$", product.newPrice)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#"
      }, __jsx("a", {
        className: "remove-btn",
        onClick: e => {
          e.preventDefault();
          this.handleRemove(product.id);
        }
      }, __jsx("i", {
        className: "bx bx-trash"
      }))))));
    }) : __jsx("div", {
      className: "products-cart-content"
    }, __jsx("p", null, "Empty."));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: `shoppingCartModal right ${this.props.active}`
    }, __jsx("div", {
      className: "modal-innter-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "bx bx-x"
    }))), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "My Cart (", this.props.products.length, ")"), cartItems, __jsx("div", {
      className: "products-cart-subtotal"
    }, __jsx("span", null, "Subtotal"), __jsx("span", {
      className: "subtotal"
    }, "$", this.props.total)), __jsx("div", {
      className: "products-cart-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/checkout"
    }, __jsx("a", {
      className: "default-btn"
    }, "Proceed to Checkout")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/cart"
    }, __jsx("a", {
      className: "optional-btn"
    }, "View Shopping Cart")))))));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["removeItem"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ShoppingCartModal));

/***/ }),

/***/ "./components/Modals/SidebarModal.js":
/*!*******************************************!*\
  !*** ./components/Modals/SidebarModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SidebarModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: `sidebarModal right ${this.props.active}`
    }, __jsx("div", {
      className: "modal-innter-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "bx bx-x"
    }))), __jsx("div", {
      className: "modal-body"
    }, __jsx("div", {
      className: "sidebar-about-content"
    }, __jsx("h3", null, "About The Store"), __jsx("div", {
      className: "about-the-store"
    }, __jsx("p", null, "One of the most popular on the web is shopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit."), __jsx("ul", {
      className: "sidebar-contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "bx bx-map"
    }), "Wonder Street, USA, New York"), __jsx("li", null, __jsx("i", {
      className: "bx bx-phone-call"
    }), "+1-541-754-3010"), __jsx("li", null, __jsx("i", {
      className: "bx bx-envelope"
    }), "hello@livani.com"))), __jsx("ul", {
      className: "social-link"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-linkedin"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "d-block",
      target: "_blank"
    }, __jsx("i", {
      className: "bx bxl-pinterest-alt"
    })))))), __jsx("div", {
      className: "sidebar-new-in-store"
    }, __jsx("h3", null, "New In Store"), __jsx("ul", {
      className: "products-list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/products/img1.jpg */ "./images/products/img1.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/products/img2.jpg */ "./images/products/img2.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/products/img3.jpg */ "./images/products/img3.jpg"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/products/img4.jpg */ "./images/products/img4.jpg"),
      alt: "image"
    }))))), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-without-sidebar"
    }, __jsx("a", {
      className: "shop-now-btn"
    }, "Shop Now")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SidebarModal);

/***/ }),

/***/ "./components/Modals/WishlistModal.js":
/*!********************************************!*\
  !*** ./components/Modals/WishlistModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class WishlistModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      modal: false
    });

    _defineProperty(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return __jsx("div", {
      className: `shoppingWishlistModal right ${this.props.active}`
    }, __jsx("div", {
      className: "modal-innter-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "bx bx-x"
    }))), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "My Wish List (3)"), __jsx("div", {
      className: "products-cart-content"
    }, __jsx("div", {
      className: "products-cart"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/products/img1.jpg */ "./images/products/img1.jpg"),
      alt: "image"
    })))), __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Long Sleeve Leopard T-Shirt"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "products-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$250.00")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "remove-btn"
    }, __jsx("i", {
      className: "bx bx-trash"
    }))))), __jsx("div", {
      className: "products-cart"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/products/img2.jpg */ "./images/products/img2.jpg"),
      alt: "image"
    })))), __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Causal V-Neck Soft Raglan"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "products-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$200.00")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "remove-btn"
    }, __jsx("i", {
      className: "bx bx-trash"
    }))))), __jsx("div", {
      className: "products-cart"
    }, __jsx("div", {
      className: "products-image"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/products/img3.jpg */ "./images/products/img3.jpg"),
      alt: "image"
    })))), __jsx("div", {
      className: "products-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Hanes Men's Pullover"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "products-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$200.00")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "remove-btn"
    }, __jsx("i", {
      className: "bx bx-trash"
    })))))), __jsx("div", {
      className: "products-cart-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products-left-sidebar"
    }, __jsx("a", {
      className: "optional-btn"
    }, "Go Shopping!"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WishlistModal);

/***/ }),

/***/ "./images/blog/blog1.jpg":
/*!*******************************!*\
  !*** ./images/blog/blog1.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog1-f3c35ed2f365198cdb7bbac248168f95.jpg";

/***/ }),

/***/ "./images/blog/blog2.jpg":
/*!*******************************!*\
  !*** ./images/blog/blog2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog2-e4eebc52c3cf5e8c0fd8da319c63d643.jpg";

/***/ }),

/***/ "./images/blog/blog3.jpg":
/*!*******************************!*\
  !*** ./images/blog/blog3.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog3-f612a4dc73f481621ba9cc8b9d492a14.jpg";

/***/ }),

/***/ "./images/categories/categories1.jpg":
/*!*******************************************!*\
  !*** ./images/categories/categories1.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/categories1-b467ebb8485559cdbc1530b3c8175d33.jpg";

/***/ }),

/***/ "./images/categories/categories2.jpg":
/*!*******************************************!*\
  !*** ./images/categories/categories2.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/categories2-576415a29304115e08be923ddebafca5.jpg";

/***/ }),

/***/ "./images/categories/categories3.jpg":
/*!*******************************************!*\
  !*** ./images/categories/categories3.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/categories3-d589e5d06fb3ebd48d28f804250e9371.jpg";

/***/ }),

/***/ "./images/categories/categories4.jpg":
/*!*******************************************!*\
  !*** ./images/categories/categories4.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/categories4-4805bf91a67631aa07c7ca2c541ef131.jpg";

/***/ }),

/***/ "./images/france-flag.jpg":
/*!********************************!*\
  !*** ./images/france-flag.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMEY3OTk0MDYxM0MxMUU3ODQ3Rjk5RTY5NjQzOEY2MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMEY3OTk0MTYxM0MxMUU3ODQ3Rjk5RTY5NjQzOEY2MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEwRjc5OTNFNjEzQzExRTc4NDdGOTlFNjk2NDM4RjYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEwRjc5OTNGNjEzQzExRTc4NDdGOTlFNjk2NDM4RjYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAIAAAAMBAAMAAAAAAAAAAAAAAAAGBwgBAgMBAAIDAQEBAAAAAAAAAAAAAAAHAwUGBAECEAABAwAIBAMJAAAAAAAAAAAAAQIDMbEyM3Q2BwgRUbM0kgREIWFxEkJicwYWEQEAAAMJAQEAAAAAAAAAAAAAATGBwTKCAzMENAUGEQL/2gAMAwEAAhEDEQA/AEB8sj3ue96ue5VVzlVVVVWlVU2PxyOvzO5qAU3b2qr+9zcV9BN1Iyu7PSqky5tIGfTgAjWrKr/VJ7fTR1uKzd3zE8xxcUbCXxXmcrRfHLXva5HNcrXNXiiovBUVAeRhCKcjOI8AFO2957mwE3UjK7tNKqTLm0gZ9OACM6s5rTDR1uKzd3zE8xxcUbCYcrRAAnQziOABTtvee5sBN1Iyu7TSqky5tIGfTgAjOrOa0w0dbis3d8xPMcXFGwmHK0QAJ0M4jgAU7b3nubATdSMru00qpMubSBn04AIzqzmtMNHW4rN3fMTzHFxRsJhytEACdDOI4AFO2957mwE3UjK7tNKqTLm0gZ9OACM6s5rTDR1uKzd3zE8xxcUbCYcrRAAQ/N91Nc23XV3Stj7eQzISI55eA9Cmbfc9S2exmo/JGV3Z6VUmXNo8oE4AI1qxmpKO2jp+Lis3d8w/McXFGwmeE5Whenl7+O7tNvLFP1e7mewfP7uxnSb/2Q=="

/***/ }),

/***/ "./images/germany-flag.jpg":
/*!*********************************!*\
  !*** ./images/germany-flag.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENEQyQjUxRTYxM0IxMUU3QThGRDlFNzgyMDM4RjBCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENEQyQjUxRjYxM0IxMUU3QThGRDlFNzgyMDM4RjBCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0RDJCNTFDNjEzQjExRTdBOEZEOUU3ODIwMzhGMEJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ0RDJCNTFENjEzQjExRTdBOEZEOUU3ODIwMzhGMEJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAHkAAQEBAAMAAAAAAAAAAAAAAAABBgIFBwEBAAIDAQAAAAAAAAAAAAAAAAEFAgQGBxAAAQIBDQADAQAAAAAAAAAAAAECAzFRkRKi0qPjVAVVFhchQYEyEQEAAAMHBQEAAAAAAAAAAAAA4WKiUaGx0QJSFgEDBBQVMf/aAAwDAQACEQMRAD8A82fFive573uc9yqrnKqqqqvyqqqmwhKzp1JCs6dQFZ06gKzp1AVnTqArOnUCsixWPa9j3Ne1UVrkVUVFT5RUVCB2XWd701uHeNb3O1biuePebsq05nWd701uHeHudq3E495uyrTmdZ3vTW4d4e52rcTj3m7KtOZ1ne9Nbh3h7natxOPebsq05nWd701uHeHudq3E495uyrTmdZ3vTW4d4e52rcTj3m7KtOZ1ne9Nbh3h7natxOPebsq05nWd701uHeHudq3E495uyrTm3RRvTgAAAAAAADd+XpyeBmFJ9iS+Dm+QyVQPL05PAzB9iS+ByGSqB5enJ4GYPsSXwOQyVQPL05PAzB9iS+ByGSqB5enJ4GYPsSXwOQyVQPL05PAzB9iS+ByGSqB5enJ4GYPsSXwOQyVQPL05PAzB9iS+ByGSqDdlI5sAAAAAAAA5O/pZJfqT8M9f71/EdEoMQoAUAKAFACgCt/pJJfuT9MtH70/Dq//Z"

/***/ }),

/***/ "./images/instagram/insta1.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta1.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta1-0042285234e1e56409cb5f01e56a584c.jpg";

/***/ }),

/***/ "./images/instagram/insta10.jpg":
/*!**************************************!*\
  !*** ./images/instagram/insta10.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta10-042700f23ca12981ba23abf90200b805.jpg";

/***/ }),

/***/ "./images/instagram/insta2.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta2.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta2-3335085f018c87906af73ceaab7caae0.jpg";

/***/ }),

/***/ "./images/instagram/insta3.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta3.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta3-41106b40806c997a7f6c26db7d1a3955.jpg";

/***/ }),

/***/ "./images/instagram/insta4.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta4.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta4-9d7ddbf34ce03c4f9c12f543f0fa1a57.jpg";

/***/ }),

/***/ "./images/instagram/insta5.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta5.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta5-78a5109229d118d173247ceca4867ea5.jpg";

/***/ }),

/***/ "./images/instagram/insta6.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta6.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta6-a7e97921a2a81d6835ac186e600065a4.jpg";

/***/ }),

/***/ "./images/instagram/insta7.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta7.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta7-0c2b171dc17a25ab1fbaa420c4cba6cf.jpg";

/***/ }),

/***/ "./images/instagram/insta8.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta8.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta8-792f785c95118d9beabbdbcb7e4682ef.jpg";

/***/ }),

/***/ "./images/instagram/insta9.jpg":
/*!*************************************!*\
  !*** ./images/instagram/insta9.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/insta9-4ddd891648d404233d33ced77794aff7.jpg";

/***/ }),

/***/ "./images/italy-flag.jpg":
/*!*******************************!*\
  !*** ./images/italy-flag.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMUM1QUQyRDYxM0MxMUU3QTE2RkM2RkVEMTY1NUZGQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMUM1QUQyRTYxM0MxMUU3QTE2RkM2RkVEMTY1NUZGQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxQzVBRDJCNjEzQzExRTdBMTZGQzZGRUQxNjU1RkZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxQzVBRDJDNjEzQzExRTdBMTZGQzZGRUQxNjU1RkZCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAHsAAAMBAQEBAAAAAAAAAAAAAAAGBwQBAgMBAAIDAQEBAAAAAAAAAAAAAAAGBAUHAwECEAABAwEGBAYDAAAAAAAAAAAAAQIDBxExsTN0NiFRMrJhQpI0RBZxcgQRAQABAwUBAAMAAAAAAAAAAAABwTI0coIDBAYxEYEC/9oADAMBAAIRAxEAPwDc573OVznKrlW1VVbVVVMnmZlWuWrzAHKlKr9mk4/Fk72F/wCcyJ0zR24LldHlMABGqsqv2pOPxo8XFZ272ieYxd00Jdq8yKYvw6172uRzXK1zVtRUWxUVAeTES0CIwgADnSnc0mlk72F95zInTNHbguV0ekwAEZqzutNNHi4rO3e0TzGLumhMIpiABpERg4AHOlO5pNLJ3sL7zmROmaO3Bcro9JgAIzVndaaaPFxWdu9onmMXdNCYRTEADSIjBwAOdKdzSaWTvYX3nMidM0duC5XR6TAARmrO6000eLis7d7RPMYu6aEwimIAGkRGDgAc6U7mk0snewvvOZE6Zo7cFyuj0mAAjNWd1ppo8XFZ272ieYxd00JhFMQAN8+fJl9S5fRf5fDkI/8Af2fjB5ePSfIONKtzSXe2ku/ZhfecyJ0zR24LldHlMABGqsbqS720d/5cVnbvaH5jF3TQmekimF9P58+PL6m5nRf5vDmew+f7tn7+vr//2Q=="

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAgCAYAAADZubxIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNDRGNkQ1ODNDMDExRUFCQzQ3RUY5MTRFODI2N0Y2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwNDRGNkQ2ODNDMDExRUFCQzQ3RUY5MTRFODI2N0Y2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjA0NEY2RDM4M0MwMTFFQUJDNDdFRjkxNEU4MjY3RjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjA0NEY2RDQ4M0MwMTFFQUJDNDdFRjkxNEU4MjY3RjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz676aWAAAAGFklEQVR42uxb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"

/***/ }),

/***/ "./images/partner/partner1.png":
/*!*************************************!*\
  !*** ./images/partner/partner1.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAYAAACZM2JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMjlDRUFEREE2MEMxMUU5OEE1RUZBRkVGNDM1MzlBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMjlDRUFERUE2MEMxMUU5OEE1RUZBRkVGNDM1MzlBNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIyOUNFQURCQTYwQzExRTk4QTVFRkFGRUY0MzUzOUE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIyOUNFQURDQTYwQzExRTk4QTVFRkFGRUY0MzUzOUE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uXhGeAAAFRJJREFUeNrsnHmQHVd1h/u91/Nm3zSjXRrttjyyLVteQN4U2UkENjEGQ8qFQ6ACMUlVSCop/ogrCSSVVCqQALEroUgBIpCw2BAWGzmxkYyNJdnYSF5kLbY2y7KkGc1Imn3e3jln+I58qv1mNAInlRTdVUfd7/btu5x7lt85945SURQFyfU/f6UTFiSMThidXAmjE0YnjE6uhNEJo5MrYXTC6ITRyZUwOmF0ciWMThj9y32F+s/cuXPPZ2FmC9UJDQidmUb77xFaIfQFvnu30OeE7hK6TOjDURRdk0ql1snzPwt9RGhc6F7auEje/57cPy11WuT+L0K/K7RHyt8mZX8ozx8SukDoTin7jJTdJM9NQhWhotAPhJZrW0KvSZ1GqfOwPP+V0CGhXqE1Qp8QOn2OOTUKzRQqC50QKk1VWfP90tfPGD3NKyW0SOgqGLYTxiuzuoTyQq8KHRDq4RsdxE9g3Dh1XhTKCR0VulXofUI/FFoplBHq0/G5fntloIdkwMMwqF3K7pDnj8vzbBa8wP24lOnzQwjEMqFnGE8tTH+J8Y8zp4NCP2Khsq5f7Wep0BIhXeB+5qx1rqaOzmXfuZh9VqKnyWRdyTZWUQd9u1AHnehgFgh1Cj0m9CmhvXw7KkwZFAaUkbBhyvX5izpoeTcidU7IPW0MMEmg/RG+1zF8X6VTfi+UOrVyVwmNYPaY/NbFPCZUw7iOymttsyzvLlbBkPuDch+krwJM3KxjZWy6SKopv0kdFYrDQuvgxWNoQSsL0h8Tjp+b0ZEzG8ZUJbU5M4ReEfpPmHsE6UrxXQMqH8G8dtqsR5r2CP2llD8q9y1IdZk6TW6hdWGaqa/ffVi+eU7us+ReS52M9JFigTJ8WyO/x2lTpfk1FrsuNv95TqJ1sb6DNnRjcq6kXBfxBrS3l/lGb5ZEBwzuGSY7R2i30FaYfBD1HKvynZbNF7oRBoxT3gFzvoHqNiFdM2HCb3D/CYvaALN0YZ8Qug4pnIMQ6LgWOmZpn4vdHLtkEXRRhuQ+l0VKIzg3UL9CXRWUHdAm+ujCvMzAlIwIPenM5NQmQaXsPJyhSVfKqf90naj/JnKIp+LaPVvuJLPi3nnpTnM3DdDytHxXke+qtZ82c8S94upY+5VpzsW0fCpJVtPVKn2pRvWdj0QH0+yg2lWZRlk0Rd1oinplV16eov3KNMf188zFX4ZILsLOq/Tffd6Mdk7qTbmqtTfVEQhfv9q3k43N130zx++uWdAwluIu6ed2wMOG/7MBi6n4/4NLkdZanKna7SMy7ttk/AoB75a7opVbqkl0rbN/+di7TMzWmv1Mo7qpKqYl4+xyytnUCnYsFbO90RS4tIHxmckYBxvHx9jM3cYyDnY325l19j3inqGt3DRwcQ19dDMOHdONQo8C9W4Telzo73Hk14YxI7+BSlnQwlZw6xiTfAdeNwANPIunX4en1vZexkvPY+ANrLThcG37v4R2Cf0OkDF09rUVb69Ydyg2tvfz/REQwGGw+AvUW0HUuIY2FCu/FTRzD2hFA6yP0/Z2EFMHjHqL0CNCfwvD4lfWza2FKFIl93oW8zGCujx9BWDzMHQw7wYmspCIZwHhsK74fUy2W1RhLrboJSdBV8DUIXDuWxn4uKiR4s2SfKcDvJD3TyNRCrdWAuO+yyIqDHwHjPwHbN410o6OrVne3cMivUee7yJg+GMm/VtS73Yp/4o8/w19aArgM0J/znMfkE4XfSPYPY10riIWyFZh8mqEoIZ5diJ4jZBpyBzpv9UFZoq1B9NOiq5hJR5lRe9HEn6d8Fil+hWZyCm+GeF+AglrYQCKq2u1ntDjCrWEGsl1bMdEmPSeYcX1/l2pfw/qpr9/hckHPKelnf1ojA7+22ic4t+l8q2ZtR4k3dCBpgQG5NtVUudS6s+A3iZlqil/J/RR5r+ZxbBLNeDXYOYrLMwKcjXa12eRXgvxZ2rE6uaoApA2RjfJyw4Y9TAh54+F9kt5E5BFB15gtfrM5sn7EhKRZmEiFu45mFFh9Y+TEMqyEGZndYEa5XcdaECl9WX5PUZEqe3Wy/OYlJWR/oC+Gmi7EZysGrIabTDbf52Ur0Tym/muFkHpkfpqXh6AwbXkXxah2RqCz4I37S6JdgIBeRLt34NdzyAQZ2LxQb2ZDs0ZtBEkHHfR0RH5rXhwsbz7MWigiU4Kzuw0MFH9Pkunu2HkaSRgKRGg2j5japFFy8jvosPDtbwP+a19rSKas35V9S9G3bvw7tfAdI0CQ9o8JXdlwHOaF2E8B/hW/cxTTkP3ElqvQ2t0EDej0TbPb2EWSi5FoHMakD5VIGrMqQMpQx/lmMMqK7Nc5q0MM3TQARHXGPa7zTG6FmkfZXDjJIhS1B+BQVo2T/roj8GjARxXgKYYE9tpY77LNzQ5x7fKOakRJ3FbHRrZ75JMhkiO01+7S33q2Leh1VvxJ2rz+2UuOyjvZq4lKO0QkJZ3SP007dU7/rRbxVAqnNE8gIokal3R8FFXT+5FBllykK6ChFdgZkHqFZxTDJFKNRM5oSEG1IvNtqSR2sjl8t7nKCaSVlJ2LabFUqizYViAX3iNcbyApL6GOTvpgpI6+T3A8zi2eT757BEwsDrby82xaS6E/PUJcuf/ijA007/Ot1/Nm9NCDf1bkGDNsSxgDDqm+y2vEGESSkimloUmtap66mxwOHWo1bBbTZWGFmxq4BZEGa8JHE1NNujAhL6Ms9JRXMUiKpq50hgtZfPpN2QBT6J125FOvdTZmnqb3W3iu1ofFKpfoe4x/JGawUekXLWrCxO5WZ7V8V9B6vUQzDOnPe5iggpaW3D9dDhcPps08kTaWNr667SbUBZ1Klpkpg4IJmZRgRxOosXZyhKrvJ4V1zrPY6O1rnr6ZdLZWqfWB1mwLvLMWbVvvLf0Y2AZQakz4JL2OZf+DH3CyDlYH8TMYbz3820Ntvppqa9w0XBvnu8KaGSOMdZjInIusKm4GCFw3x0k/55CC7uQ/rG0G2iFRjPOq1fAj226empasJPdjtEpvPxC1LAFiLgP9dPVzcu3ndjtwNninTCiKO9MUnUD4CBMyzmsHrkoNMCflM3uIhjmE8wma+Byp9BX5JVi9w8gDM8jrbfSf8QYBjB/6qzb0BIzmeZHyoxhOWYphc2/R+EsGnQciHelCa2ZDg0oLpHHmxyji0xstbxfSGfddNJB0j8A/F+HM5oHYyMk7FWH019ll8Nn4SyXO+RwuZbnqJd3i5mObSbrhCrAyxzUAyN1X/IWIs/ngKqriQHW864OpvU5rc3ic2ro6zQLl2FuzfAhZBFbsMd1ONI8/LQoeIM5RZ9bXYUXLjpsvYKPu4kG1WnsRZqXGCzCqbTI/SDqY6anF3usbZycZFMgcNJqY6phwLXOJIRMIPV6Qm4CPp1G0iKiy43gXoVoO+RZMbna6KVS9/3MM80eZA4Ga1tp/IX6kSI+SX+X2ArrQKBUirOM693S5hUIl107FGri564HcgZmo1thrK7ClTSyALORBhvqpd78Qlb0sDklKTtKO6er5GtzMHS0CqNzgefa61c97Q2xYKrSAwQX1o5K3wx8gUVyusm7GTOhwcReeZ4p9AGht+uYpZ3PKaNUcoWGWbgJzI00N+IXukgPaL060IrOvUN+z2dceWlrkeNjQJC3yeWm/0iF1CT6D9Sm6kpIpW4ayaFaNUCUPtS/HQntdyZmDGadqbIbk4GPZSedgXOkE6aDSQcuczjmnGKZxRx0oe167OtGEND15GaOwpRbkNYrpM+d2GX1FS/SdhazM4SG6ljVfK78GcKNZoPdFe514oN6MHFj9PESkl6JpXi/CT/VtKnEv8UYvcPlAbbBjCHHzDFUs9fZ1IoTRkMqxck2dhUisoD+XZ1jeImFMOHWPk+5emfcmYrLSIB9CVP1+zD9q4Twy4B6lkbdQp5C286hGe1yX0y9Io6vFVt8MYimCdiqpmQm2nOahdXxXSLvVnjNtGMIUn8j/Wt7GwwePY/k6Yqbg1L1eQU7WI7tUgz5bSOHJytV9tey3DOTpB2Vq3kQhGmBJagMiSh+vkXqvJ3o8xJC5/3g7jyHZl4i9zDoctIaIO3GNudo9zTpggvcPNrZGdGjEe1yb6EvXeC1xAgPOtQxQvTaR8wRv/5N7bN89069n4V3MHDQrU6eQQaElQaf7F0US7R7CfXSbMmW+iqDyQCnck7iNTGkuZV9QpZ32STPfyHl2/D224nMsjgfDTSuVuYoTGW8NTi2PTB3ImunZ0jUliPVraCDeeDfGcxxD+dD1NFr5u5PNNkmzw/HHLZqz1GNdKtoaw+OWftbGbrQ1A63FByTxmHwaBXbW3KxfB0SPxbbkyth10uo/RuOMEhdg0sm8ZYY+gJMCThAo2PYiVatJprMgoJekGfF0s0uUkwR5Z5ikS/CnipqOAD2VlQzgn8oYFNrwNRp7jfy7Ysa3TrNrZe62wimwkn2LZ+U55+qP4lvt5fj21Au2vL3UXc+o2z4UdODsVXNYBIKk2wJeXiXw7ZqnveL0s4DMGgDuWK9FmITe5moIoIS2TmLQm1r6kLu28gR18GgJqSvj+CognmIMJfma8YRkP/gcJDmxNfjR4rYdYODHoZ6h9/PLlQxjJ/xmGSHuOgO0YzH9g4jHFlEds93lGVnJeXhm+tjkTtvcTWHFTV1+XmizHUwQQ8pfgosfIeLOi9zmqOTbVU4R46hE8e5G1jahnPtdSavD3NZQCtLTlst2/gjzmao813M2NNY0gqIKTfJDn6K8RfSk5ydmGz7vuySRRVnOhqxbbUuWFFSJrajgsNV7FiWpP4sTiaNckBxDXY/JBEfOhM27ELmiERVF+Ymg1a0oS1m3o4jXWFMQEZcCiKN2fCbzLXkMw6CNma4RdJyRSNPY6snO2zUo0gn9GjCnJ1bleh1fp89z5bBuZiUqwq3sasQt+VFbORgbHvIcsBzCI8fQyN24pi+xjg+qXkPZRTIIudsuW6EbpKykyRwcgQwDTC5023umla2wDw7SZpCWjNMMHS55lHLo9PvqMuPl1xkahFvC4KomnE5234HMEep8BxSXIkdg8oDxc4e8cJcaAeHbD/RfZ92xwviRxfmkVTSCHM3GbWPIo0PstijmIkSjq6egGouUMucbAqJ05Ojc4CbfeZHLL9Oednt0MwHQhadpFsWr4JzL8OsUbfIJaCwRcyL2X1/VqGwfPdnbAgfYAHTPnRMxc7VWX7hbEDioqlZ7nxFhcaGLWQ2x0Dqs5n70tj5jEuxof0w5CCJqnU4rA4YeoQF60Si7gSZ+LMXBUzKfqQ6hGFlZ8rSlPnvQsyPwVA7xmuQ1L6tOA02s3LKtaX7iu8DncyT+pobaoCvE2dXwipHsSK3X6er1u8abCWp7g/J1KMu7T6X7dRVO55HKrUb23sdbY7hAJs43fMQjL4Ee7jYIRPdAFgA85/yJoHdoQ6gZJs53tQbPXszfkGPQQxj1kJ3DnsYO11DbBHCB8vmhW4fc8xpacheac7tJ1bcLnghjKUd4xIduE5MlY1BFZcCzWMP91Y59bTHHVS5gEzXhUSjP6D9T+jBctRYpXCtOjhgVi9aVCLqOxxL7HvB6LXFDd749zkFv89HIm2Gc35ZTFSFZx8rGJTLeADgttVqaH+UvHVkZ0PUzKZcIj6NKpxwx2bLbjsr4wz+KRq2TdKlNLrN5SbOpjbZUfkq9vh7JOw1T3xA06qkIOvYbN3FYFdo9gyzcoKzISHZwY0w3DttXdAa9gYnQmscmBeacdrLOMzb6xJiFr32E81ZIGZMzLtv00SlGZfvSWESm9EoC/Ym0JChjgzG/rjbdI0s9Hbqq5mswyRkZrIwC7DZW9ykWomo7LyGOqa9TK6NBV7ibFjAdr166ZelfC2DfoJkUArTsZws3n7s9HxQSxHUMYJZUCE4ZLg+5tDNrAwyrzRakeFPNexPLuqcZJs21+EAI7d3GJA6bYPZpVi/E9m9tEMO6Tieth1xpE6vp1TlQACNdtqHPPAT7vfNmIZflbp6FOuDBC8BtizloNcZiz7JET+Lk2wEwg3b7orlHzAvuvl5NxqXN+niKEMJiQ5j6CfvNlxPEWjNNtMBE/MIwigLYSbkjIO3aYTQkm0XORN6lG/a3K5+mHYOpRSL+DIwrgBsCjiOdQA1f6/Qn6JyD5HJugk7/Q2kfD3qeBuBRMBAxnESZsPyDoNrilEhZA8HFb2nD9z45jqnc8xh2JPY9g7H6GbqjTj7PoJZsvxIHfVeZO4F27nBlBzj3EbIQZlGdmh0Y+Fm+i8RTxTcVp8KzYCZjjFWMWvpSrWJuiUEvj3gTMjXaeR6wPy3YdwQp3gsi/cxmKcnR3V341oWIWJbyxJQDZa65NuXQToDliZ1ICKDZ18BOvkpfbQxuRo2kAcdOrD0QjuQq+Si3O26Oy9llxPSD3KaqoWd+5yrq0L2XtKlaiZmkCbQHMjl8nu3+4swneetmvCSMp33Lgtth9nesczVxAkiHNKxWFLoESZxLTBrp9vWsutd7HB8DKnUPMYdnEptxSwsIyd8O5HgXneuzQKQHrcYrRzz+m3abuT42gVMWBk4W+oolta89Bq0Tb9fRJivmbsJxMMct5DD+CwpUc0hvyplS0hY1TDWfgKkG0gsqRR/j/bUbzwo9H20VaX/n6T8H6XsXr79sqnWAFHTHGfI1zDYe6VsH3aujSO6RzmBeWqSGH8ZC/Ad6tzHebhOHI9Kok7+MtDKp92BnDE2WftdFKfm53FyJ8vRsq/L8y7w8w9dBjGP6drnEIW2c18VXK3B0Ofl/Yf0j0YVFVFFNfVroJmcM3lfAjOrX9kBzu5E459xxyIekHeXcnxZQcKj9ldZHRx7uopjutrpJ1GrjyBtl8LsXc4hTXbZ3/3lHO4MSfJn3Lk8O5hSqbLPGLi0bdrBzgw7PiVyDZnYXxpUXB4jcjg5RdQaOext2KyWXHQxFiUHVf6CIeXzQ9yrJeQyLv1QDh0g3wVk+iB2T09v/juM6MZJDE3z7zrieY2SA//n+quman9a4aFU/F15kjaiKX6fa7xT1Z/uH9aU/dj8DsuTsjpLSKyP49g2A+oHguT6hS4v0VsJS+3c8JbzkODkmiajbWdbPeum+C53cv3iVyr5/6P/d67kf6BJGJ0wOrkSRieMThidsCBhdMLo5EoYnTA6YXRyJYxOGJ1cCaMTRv+SX/8twAA/Vx4H2c2M2gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./images/partner/partner2.png":
/*!*************************************!*\
  !*** ./images/partner/partner2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAYAAACZM2JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRDdDNkIyQkE2MEMxMUU5OTIxMkFDMTYxMjU0QUJBQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRDdDNkIyQ0E2MEMxMUU5OTIxMkFDMTYxMjU0QUJBQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEN0M2QjI5QTYwQzExRTk5MjEyQUMxNjEyNTRBQkFCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVEN0M2QjJBQTYwQzExRTk5MjEyQUMxNjEyNTRBQkFCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HnLLsAAAE8BJREFUeNrsnQl4VcUVxyeARGUtKjbRKlJcKiJxgbpAfaUClbqgKCoqvKpFWy2y2M9Kscb1c6NGWqFVtBFBQKzGQpGqaLS41xIrUiAUU6SkFbURISwK9JzmN2YY7n33vpf3kth2vu/wXu67987Mf878zzJzL3k7duww/y+5L630n4KCgubWroNEjhU5UuSrIgeKdBbZS6SNSGuR7SIfi3wi8r7IeyKrRJaI/InP7c2hM9XV1SZPNboZAN1J5Nsi3xLpJ/IlkT+KvC1SKfI3kX+I/AtgPxNp68jeDMhhIoeI9BDZTeR5ZL5I1f8q0ArEGSJJwF0k8pTIMyJLRTqK9AS8g9DmdhxXcDeLfCryocg6gKxkcHRguokkRE5hEPX4NJEZzIT/eqB16l8mcrW2QeRBkdlo6UDkRJGviKxAlgPeh2i0lnwA78AgHMKgHMoALGLQnuI6HdSLRXqL3CcyUWRtYwHdqhEB3kNkrMgokZdEzhZ5Q+R0wP4mfz8nMlXkdcDPpBzO/QaI3MpgTRcZIlJIO5Zx7ObGALxFI4GsYP5FpA+dHy5yHFqqmj0Pg9ePjr+sILdu3dqo2GL/do+F/KbUc6/IWWrrRW6B/5VeLhcphsd3p12jrWOQq5Jr6thPZApcq51ZgDZdJbJQ5C6RN4NAy1bZunWr+2chM+pSkTIAP0BkMr9fihHOOnXkUqMHAOIKprLy5jtw5Eki51uQXW10QO6IMevo3NOCkwyor0vA+f49lSJ+DJfXiPxZ5Hhm1zRoa4wq4BdBo1sy/Ycj2plfiRyFNs21AKi2hWivglUOGFUOsBXMjKoAd62G35IAboEvTaHl3dFmrW8ENmE2yvFd7tksNVq9gCfpoGruVoKHNWj1XJcaHJAHe1pa5GhvlTcAFkS/lHKfYgf4Iq4vDdHyd7jfJKjsBJGvE+i8jFvZ7IxhJxprMDzDRB4X+SGavMkDt6MHbAlAGcAZzGcR4tOEWxJoeznfLdA1AF/s1FPk2QLNQTwAnV3F9+EYaAX7iOYE9F6AvBy37R40tDea6XNlsT3uaWSpp4WlDvCGe5YDqlsqADjB7+5MKXOuL3EGqovXLg3Ze/H7cxjqu7lfj6zkOhpYOhDiqrW+kshrf5FvECj4PFzuGDYTQAvFAFTiAONfawL4ORmg9RUOzyYB3Gr+TrSEzaiVr+cB8gvMzBYOraxsKqBb4vT/VeQKQG5LAzd6IHehY9YzqEBj7RQv4djgLM2yKg/8BHUkqM8O2minHZZKxolsIE+ivv++RJgnEO43utdxN+7RSXw/mqCjNgDkckCscDQsEeKq5aLYWVLj8H8JbbOzyfe7bydX0pcAaH+UaFtj5jrOFfmZyDEYj4tp0DoP5FLHVSt2NMoap4omSqolAdwOflGA+6f+9MMksy7AOKpXdV1jAd0FTj6LMPZh3KKqAE62blc5iZ23AryIpihWs4v4TIT42q2hkGdFZpKDGULCKud+9P0EIeplPISzXxXgG7ueQhl55qRpHqWIthR5bS3z+qGIDyXjWIC7qsrTPtccrZRxPZHebAzhuAAfuRwOLOXv0riGzuXJVHkPj08bmiNJYhhdanPr0MTYLwi8nsAdHJMr6mhHtutCvItJVLw5wLvo6FjzZDrghhUXyDjnpzEISSc6rXEMZIVX10PYoPvJ05wIFWadOsaLvCLyGiBrxLfZO6fM0YrBTsNDy5YtW9LKxKULsr3GSkApc9pawt8lAQqiM/ciU7c6NAlnIOvUob5kJe7cELyNMwK0pQhNTsRJymjHtQ15eXmNStBaZ35+vgkI5Uc7xtF+dwdoFP1WDN4VOdXULWRkTaNHYWnXwk0/CTB+FbhwNUFZM1+LM9HMbJYADa+BMpJodHHAZb8k2XQ0mb/x2dRo5WNdzj8ZB/5oXLsg7rPpySI0IlKLm0qj3To9hbGzsirEJozEEzkfrdb4YXE2jOHFBCUDqFynzhuZWHvb4OYGdJoezh4ArAvJlxMpXpkN6rgES6vL9qtckBswTf2yOzNGXSfdvzHL1C2FxSl2b4dfDsNoLcUd+wOGfAX9OdpktpqyCQ8kSVr1PAKbBqVJdU3tSCyxavWD6bYqhldRSFg7BU2Zgb9+YkyQx+Dj7u8c19k3l3vcS8BxiWiyKs2Nos0HUs/gKJcx5PjDUIfapQ9EBjUUaG3IAkasv6lL5sf2gWMYvK8DklpvXc8bS4pyE5FkVNH9H98XOdMZmF4oxAYCjXvxDFag2dMFcAWmmgj3iDRmni1LcAwUkzlodYOA/g5x/kAaW5MuH6fQROX+SaJdH5D1+42p2xgzCB6MU9ee0M5HAt57fB8H7dwm8vdALyAvT9cHdT1zH7lulE8hEX63LXMYyHkA3jJToFtjURfiSSyIctdiNlB3Fd0hHbwMrlMr/iG/9YSrjYm3sWW93Ec1d5WA95qp3zyjFPROAMC79F2O6YbKDhlw9UJTv/EnD87PCOij4J+V5GHLs2DwdYbcJ53rhG8+2fu9P9q4gqm9i7fgilp8BU++v4z172rqdp7q5pz1KdqxHZ6tYeDbZdCXN0k0qY151dQtDAQWu8LSGT7UBJG7DasXOdgCzlkS5irFzJOMhMt06UuXiz7xzlFtHIZ/fx++exT1XYDm/4pjNtxrL/fIT6HR/wFKzhkvx/qYzLYW6MC+aOpWYV419WuOoUCPYbrOIPKx+YseWNWe8Nn2DEHWmXEDmnorXBzk154L2KsYjC0pQNJr+jF43zP163nqGuoymm52PEKuqYxom3o6jwUMetyi2ym683l2FHWoxipP/cDU7fZ0uXQ5N1qSYUN0CX8m0/hyF2QPuK/Z3InOIvnt7/q7K34EKsd+zoC4tmM1OZk28vtpGN2osq4BVKg++sGmbtNktyigZ3FBV3xm26uuRIIHYVzSKb3xY0ehNT9MEehoNmyEaKi6Wbp3+XcRGqYz8SY5X6fuBG/QVjKNDS5fvxw/PvIuSlKFp1SQCmjlmam4J0k6bjN2ayH7uFtbNUK7G83dTTqpqy/3MKXDilrrEQJWSyI3Nbqp0LkB43xegDZuxtdfQ4JopPH242W5vEegtIk+pgS6VgC5n3D1Ihz/NhiWjwBvfYwIbTTaZPcl6/61RRHXtZG6hwnIX1ZOlu+zRP7peRZuUX/+Cjl+TQo604DnKceLGYu/nYuibmknZpn9HmoMDVHUBOlAC+m0cupEjNGnaMQnIckfpZfvynEdoPa4TJPhyTgP63R3jIgapdmuNnv1dSXZrjPmEdcYe+dtleP3yLFjmC1q7H8flDfOQjJrKzi1Qavzo4A28OI1EPtN/D6Ki7ehFe0gfd3q2kca2pegQXl+jvy9lArjFKWmsXJNoVy/jilfGwJCW60DL+JOE7G3gnbcJ9fcId9VAW6EFt/LgVZvhm5rwwKfoJ1KtfikalR+a+p2IB2Ipm6Cx1ugrcuYls8S2MTO5DM71D0bAjCzqC+snVMwNmPsYERoo6r6DDmnP3UkCJammswf2UhVPgPsjXGBthe9we+6dKV7Gaw2fUbU9RdT/yja9gjtCjrcBXdS63iLJNBnIXbkLuzGAOqOm2PeQNbxm3DnCNKw/8wyyO3AYLcwb6mVD4bT0A10cjOuy6skT9IqISDviX/dB3AfMcE7lloyGJoHnyz3OoV2LSQ8/zRGE2bKAAyVa0+F7s5mxmZLq9sA8nps2YZ0cx1bGZ19cKE6Z1EDiqTjF/BdZ8ujIW27kCBHNf40bEN/zlcK2StOmCx13e1k8QZCQdkq+zoJsb3DNDoqqbSGfO/qVFFPmqUQKtiHKVxidn1MQqfgUDyfqeRh5jILNBdynYCXIE2ZSJWepKywYIh2fyXDBFJY6Qad7cUArs0E6Cq49F1yBw0trfCtj99R55c9Blh+my4BYN3NOQ1+/ZNzzjNEfa+xaDAyIs25Uar7F1TWyaS5nSuiHEJupisBy8eZAL2UkHwJN2xo6YlWGoztPSEDMR6tv1MA0kRUK/lc7wUw6rteS5Q4Dpeva1hKVADe5hj6bD6Mfxj4dA/Kf8cF+i3AqWCKtMvA8LmheTGU8bGcq09uVTrA7QFgli6Kuaee0Eo+80OSS3NIlXZH+48LyF+3cpJLH5ksPW1FOYa8dBEZzoyAfhW3agtTt0+GIGu5Ujp8KsA+QOLIHYSJBEu3EFx8nksAqMIU7X1NzjlT2rCSqHSYTYzRrm7yeyHnLgvzDDJ063qSZjjeSWbtkkKOArqSRvUi0dMvwwbpEwFXopFKGdc707cbGjyEXMmd3rU1cs1afOFUo6nv7EhK59Ro3gH16AC2k+uvEtmPYGK62XW/YKhfHlH0OZ3FTmJsUaYareVpANYnlU7OZNSlwT/DKm+Q7xMcjTqdgOIAgJ4Wco/H0dIDYtSngzhW6ulFGkF5/iz6Oo0oNjZHR4B9Mj79yXge74ZdFwfo+YSuL+LqHZwm0Feb+kXLKaJZT8PTt+lylfy9XD7Pj8jyzcLgTIFCQqmLz0fJ0WigowvAujL+MpS0LQ2NTWmSUI4yFGZuqpPjAD0Pz6MQzbowjcaoa3gZnVdt+jGN0kzaUAIJzfotj7jPB7h8SjMzfYPnFZ0558i9r0ExNpM66EgOO1tvMTiJ3M8SXM3pAefsZxUj7t67mbh6T2Plu8YMYZVyntXMnHT2BoBSCnhBjk2UY6+H5ChSuYcTmCGv4yKuIYFUSLt0EHpzT6W7hwBDQ+/z+K4D/HxUvSEpWFtm4GWswkPq7qYO5Npz5TqdVR9VV1cPigv0tzBYB9PBiVQUVTQ4mCF19JBK38et0o6XybGPM9zkqAZukFyTkGsOJ1BpASXUwpMV8vvr8vsyJy2aj9eUZKD+KOdMZi9IukAXkFTrRp5mIcGVLYdCtZq2eEmA7hMX6Dw04Qb+vg46iUNyusxzOJb+bzb71tDdpHJNJ7lmX/xjm/zaSHSmu5Z2hNyzE4M0nHYtIXP4jPFW3VMAfQcDrFGpPgFxELPWBjBTcYt1p9SjAvTidHb8K0d+n6mpU+YnpBwzKlkAOnLah/3Ob51xW89gxlYzW+dimD8NAboAGj0Kn19n6hg591g5b6h8DpbPLSijejgb0n1YaDeM1lgMiq4J9vC1IB2g9NEGuyk94DGHlNvKsgC0/bM93N4fm7I//Vsm56mPXCnnVkN7W9DSrdgr3Tw5G37W7XOr5RpdZVpgnF1WmTyVdQHG6EhGS6fbzemCnO5jakGANwRo+1IW/zC55ULC6iPg2v3kXrpHpAWD0hkDuC8p0d8StCwmpfCJk1fJGOg8IkSdXrrK/BKGZVWuQA4DPC7QUfXF2aLLvfRG+rTwJDJ095Joq4ka4Ewef1PSugJ+rsX7eChGPjj07V7Zngn2HKWiuOdHnQdwt5Jrno17+KN0klOZPKKsVlqXgn7tuDTX5xLgoPtZIINefBWjPt1cX2qc578jrtFlMI1eR6DRlSnSBVkDWstPSWteTQNGmvp9c3FKsfHeKNDIpRQpMbu++scv3cg2akQ8ANAviunaNhhoJbZz8UAOB+SppAqjin0sbrSvVY1YahyAR6c4rwMu7G14EZPR6jXpVtiQdypVmbrtsrOxvpeQF+kRYWzsy0kSdLbcGYAuOQC1i6l/fZsFN0Huo8Q4+/K8trYlJzOPKHgu58/PpBENfXnVE/D0PBYGrqZxYZSQdDpf43RysDOdRzewTR0D6iw19U/DWiUppp3FIZr8FHHD7biyb0OZpimANkyrJ2jMAvzs50jU+5pSBsBlZuf3GLlGKuEAVOGA3zEFFbnaW2F2fp+SBXk0GTe36LEK75mbAtq/GA9LM5briCF2NCXQNuc8n5yvhq/6tNVjTmdtR+wbD9wpa4EqN/VvGXABKvK03we1xDtWZupfemK1N8F5b/mD79GFhuS6HPUkCjMfjE4z8fcT5hToHRhGNYh/wFho/mA8buCetlN0rNzsvJejGIBOCtBWq/1VAQbNN6T2LWPl3mypYhCSIfZDHWW74/RakkyLsD2DjLPxsqmBtuUWwFUa0V3wxxLWarKmt9tBp5P2faMJEug+0BUpPIcajzrsu0GCqKY0gCYMIbd9Kvg40qpvMDvPyAbIuQDa4HNaergdLdI1Q131/rlv5R0Nt1qdCuiiAABrQgKSwX49HsCaOPoBXLyUXPXZ0IUueelWtKztOs3Va43LAeWrdGQ1bp9SyAr4r0MQEB4gCY8ygoAuDqAC1eiakAdLWxF8qBdxDnXMJkE2nL+nZBuQXL4/Wh38geQFHkPDJ5CO7A2AN5uQxVYXJAesz7naO7bTuSEAtyWCXYbxvhat18XbV6AKTZC9mQswcv3qeTWSv4SvN+KXDiW6+gau1NsEAxeagP1zQQDGANVNfQ6EzlbDuVcQwR5Ie3Qd8gTAr80VEI31jv9qIse+UEgVf+tmGU2063aCYWTHXoQjTwnT9oiQWesYh4v2AVk3TYTpEpOuENkXISpNXIq/vzjXADTV/8OiYF9FvmQ5038OWt8PbVdAdIFhG8DoIOjWW10b1JWOfPhavZpOeBttsQEapWqufCG547OYMX3xiEr4zP4UDslHN/X/LLQnLt0INEt3Yz5PZPYKGqlarQ+U7gOQbRyDqB7HembMSvz39riV/bin2gNd45xOzuL9nHJlMwXaz1H0JdBRgLoDSiUa/T4avQnpYOr/CyfVaN0u1hXu1S0HLzBoC00j/cc2XxSg/bI7YHeDFnSNzu6qt8X9L5wqoaEVJuTJqCYH+v8l9+XfAgwAWQvByhUS/L8AAAAASUVORK5CYII="

/***/ }),

/***/ "./images/partner/partner3.png":
/*!*************************************!*\
  !*** ./images/partner/partner3.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAYAAACZM2JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGOTNDMzQ1NEE2MEMxMUU5QjEzM0UzQjQ0Q0U1RDgxOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGOTNDMzQ1NUE2MEMxMUU5QjEzM0UzQjQ0Q0U1RDgxOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY5M0MzNDUyQTYwQzExRTlCMTMzRTNCNDRDRTVEODE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY5M0MzNDUzQTYwQzExRTlCMTMzRTNCNDRDRTVEODE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3wDDiwAADcdJREFUeNrsnAe0FdUV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"

/***/ }),

/***/ "./images/partner/partner4.png":
/*!*************************************!*\
  !*** ./images/partner/partner4.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAYAAACZM2JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNjU2M0VGNEE2MEMxMUU5QTEwOUIxQjg3NTc4MDk5RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNjU2M0VGNUE2MEMxMUU5QTEwOUIxQjg3NTc4MDk5RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM2NTYzRUYyQTYwQzExRTlBMTA5QjFCODc1NzgwOTlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM2NTYzRUYzQTYwQzExRTlBMTA5QjFCODc1NzgwOTlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AiB8vAAAFBVJREFUeNrsmgd0VtWW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"

/***/ }),

/***/ "./images/partner/partner5.png":
/*!*************************************!*\
  !*** ./images/partner/partner5.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAYAAACZM2JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzAxRTA3MEE2MEMxMUU5QkQ1OUNDNjNBNjJFQzJDMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzAxRTA3MUE2MEMxMUU5QkQ1OUNDNjNBNjJFQzJDMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzMDFFMDZFQTYwQzExRTlCRDU5Q0M2M0E2MkVDMkMxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzMDFFMDZGQTYwQzExRTlCRDU5Q0M2M0E2MkVDMkMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Hr6FnwAAEVJJREFUeNrsnXlwlOUd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"

/***/ }),

/***/ "./images/partner/partner6.png":
/*!*************************************!*\
  !*** ./images/partner/partner6.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABQCAYAAACZM2JkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMDIwNEIwNEE2MEMxMUU5ODY2OUE3Qzk3QjY4Rjg4NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDIwNEIwNUE2MEMxMUU5ODY2OUE3Qzk3QjY4Rjg4NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwMjA0QjAyQTYwQzExRTk4NjY5QTdDOTdCNjhGODg3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUwMjA0QjAzQTYwQzExRTk4NjY5QTdDOTdCNjhGODg3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UfxtdQAAEXdJREFUeNrsnQlw3UUdxzcvac42JG160RbapAdt00toAcFylipyigxyKGgHBEFUBHEU1BERkRFEERREHK5BxRbKXY4WqEVomzZp0yvpCT2SNs3VpE3SvOf+5n123i/bJD3ykveSujO/SfL+1+53v79z9/+SEAqFzODBg02ctAQrIX6fbGW3lb5W+ltZbmVnG9flWsnknLhr27dvN0lx0A+Z5WlWAlY+AFwB+2YrWwF/mJVGK++3cY9zrYy38j3+7mflPCvVVhZZqYr1IANxAPTnrVxvpRlAHKP3Wplg5cuw+5h27pFuxZEm0UqelRuYALlHRqwHmdSFEzrAyolWjrPyoZXVgNtEP0ZaGWulGLBXWJloZZyVz6z0aWcM9VY2qWcNt/IFPheQ93NMWP9FK+VWnumJjJbnDLJyuZXrrJyiWLYWUIWFexSjZQLSxMTx+bh2TI/Y8RrF7mOtfIQpWmOlwUqylXw05PSexOihMGmHlSBmodJKjpXpAFEMWzcxCeL0aq1UAPA7/B5UQPpNJqPMymb+zgHoB6z8F/aKOUllEnZZeVldP4jnVnJuk5rsuAda2Hc2TH7PykoAFcd0FiZkipX1VuowIzLA0wBaHOJCK0UAXNfOs2QiX+U6w6SU8tw9fCYgD7RyvJVeVt5Q10/HT3yq+trUXYCewaBkcGOs3EHUsMHK89jeobBJ2PwxzqtCMbfuIAC75jN9o5XHvc+EoZOsTIW5/WB2lpURMD2fz1YroANMXFzY6AREt/8A2i4GdhFmZCk/F+EQaxWoG9sxDx1t9WiUmKpX6FciWtcbwsnxZVb2cWwAJigxHhidSNglqrlNfb4Mh5MNOwToFzj2BNFGIz+7qi0moWlWY8/CXIn/+Ddsdnb7HivrrDxMqNkhdneU0SFCsh8QrzpmN6uOj8DeulYLw/Z3htNppzXDVmcWGunfLkzXUo5lkSxNR8u+T6iYHEtGh1A5GcBt2OJdHBPn8qyVeSrGjacmfS+0cjcZZDnRh4Sf3+D4pfiTYibGxJLRAvSLmA9xaLeSyQUAeyn2Oh5bPXG8C0GziUCGQMKZVp62sqSjTjEQJZUUZjyJ5z4bZnTHJto4B1Mi8fk/rTzi+Z+Yh3fvkCY3Ev8GuyHQu2GwJEsXWvm1isU7FprFWZk0nlpCtJy1lEkD/8ezXf/T7YpKR8KmHtXiofCfSHYWIMxKxNbXAXgq5zWQOLhrklXik8bf1RzPIl5v5t5Brg0dzUBLmnuCCS9T7VY1kCLAnwBgnyigBdRTcVqyCpNHyryeRGgidZVKIiHnoCt6MtA5FJYCyEbCJVeMzwbcHer8PvStSmWQu9U9GykECdvHE04K+NOIjYXFo3leGveqBXhht9TCpcKYwnVbkMbOAqErbHQarB0CoH08G5zI4CsZaKVKhRuIbatUscfF7hJ29QLYOsAewPm9eaZbSBjGcWc65LqBql9Z0SoexZLRlWSHrspX4RWT9gFoJqYhAcal83sVzEs3kcK94XM5Xso4hN0lFIJOIqVeSXFrL9eFVEZYxHWJ3KupuwO95yBB/y7saQKMriF13wJTt6HevTzWbeVnHZMn1bk1gFhIfaWciSgl1damZ0uXhlFxkrAkIk0AHlA23DdzwTZMYNALDUPRTjw6krDEQ9ThbG6zAqg1MNtL6YPtJBpdCXLAe24onsK7aCU2sWRtKtFSBv1o5me1Cym7M9CDcHoSPUgBvwDH2tVN1h+lfn0jEcwKQJbcQBaBZffUru4MtDDoDgYkDlC2FzwapXsfR6RTyf1PIA5fqJywNHFu95vw9jOZ8A/ow1QSqtMJLbs10LK4MILYWZqshsiCbxnRxpFmqVcD3DEkURKTD4els608SEYqsffPrFxG2CltDpHPpSp0rY2W6RA7KTuFRtGpBtSnqo3kxe2lmw8wh5uNSSZ5jZVrea5rsvvpPit/Mi33bfQjBAzQx2yAWuvdV5h3u5Wvqckrhqk5/C016re4/nwrX1cgy0qTrMTIztZzsdPLOTcqQCdRT7iLQTSSoDxpWm6jlQ7JavhPSMmHEy+vO8xJzTaR3aOp6lhvMs8ypdZuc0w1BJjIc6UM8FcT3p3aRLL0LSuzcGjNjEFWwH/BZCUQzyeTZX7btNw8+SqadD7n12BK6qMFdEiBPYjPTqUTd2PTAqj5LRSJDH/3O8IE6A0T2TTZi5h7OYwuwATcBjuHMOhdgJ9GTSSDQpUAfQZakqGy2ZdMeOfSr1R08ykTKc/9gheeSpI0FqClyZa3t100FDgEBvXHGZxswjuQpnPDTM6RQa6iU9oMiIk4W7E+jw66VurUqp2YtD8MzFKTKlW+eaqMahj8n7GhMnk/NOEtEEOIsWWZbZFKguQ+I3mGaMVXTHhnlc5WFwFmlvp8DXb3dC+0rMSBXgwu8ryH0NaU9hjtasL5GPaTUc1BfC7lyL+Y8PpaLYzZ4NUwBgCuSygaOdfVjd8lDU5CQrArSOcmwch8GPwo6u9s7VjVfzEFyzg2A5AdELL58ffY2osUA3fSp8kwvJeahDKIcIUDis9L+Xuqh1cJAItfutOEd0PtQ0NkAlcltcHiKaj55QxethM8hh27BvX/ORPyBzpR0Ur2plkvQLwAEI/BviCATqBjS6hRyB7me7HDzt5KrPwmz5yMCdB1j7Wcd53HtgLs5EjVnybY2Ugsrp1qAxoqfTtNAV3FMwKYJqPuNR97rqOdPviEpLYYfQ2zMgqVELv3FKq6nkpYJp54qrKRNe2kyQNh9zycZAmDT0Ftb2XQH2MCLlGe30UOTjuyYHOKZ4bqUPWzvGevRIsmeHZ+qapn67cJyjjm6uiJSjM2wdJsxfI92Odqz+xNZaKeaA3o75LJ5MGwFwHZbT4cqsKZBADvg0kImQPX+tyKhkQJv2QiVjB5i1W1zjHNbfV9AnAuUeXSBGWSJquIo4wwrDdOLdmrgRQCzFj1eRWhZV/GmuoBXcAz9GRugbEjVV8SwDADTXDR1SzCzaccyx3QycSINyrmLGHANdwwB5ZneLXkPSaytqeBFubvVjOfy++5RAirYbVmUwpmQFh4lQKtzkTeyBrGPQKKzSvwH6d5E10KC09Szi6IEy7hXplev4twYj/y7rUZQn2KGTxWmYgb6GsIUskEPo9DDWqghUk3q1lvIjwpUg8aT0gWUA5lq4ksK/XzOrzdRHb4JHtqNZifQ3F2rtVgXgajtklKM1ZjpsZ59nk9MsVjrcEE7IUgWYoAbg90b2UGDOq/kWfPUJ/XqYhjK4FADn3PgL3HQ4bNBAlzXAytgb4Km+KA2klnQl7KO9BTsdUKyEFeuFgCMzM8MN3964m38xXTtsLOGZ6N3sL9+sFO3TYov9HXi23fM5H1wYAiwFz6fLKnoQHsfL4X4ztn66KqN9DkM2B2Gv1fBVGWtbXCcqL3wCrTcjE0FWeS7g2wUDmo4zygi2DHWC8c2odK74dpw5QWlfLc8bDNRSxrAdPdK1Exfa1ymPr5tQB0omn5olEj510A2EtMZHG3D+P0l7XWk2Ib1af5FJky1Lj2tZc+uxpEgheaHKMM/hBASfYevprjQzmepAZZwCznEea4tk6ZgdHqnnthRG/OT/ecnauq5al7LUcDUpiEkFpRETBmtuI7hpE+b8BBF6MNoyHHUuLq4Uoz2toR22QO8WXRgFINPRtDVRqdSGY4XAEZRJVrGWQuALj7zQfoAPZOZ1drmaQRHNP2cTmf5ypwSpmApFZM0Cq8/RRYuUORQ2zomSb8msdzOLFqTIfY29/hEwqJ66Wm8U0r/2BCtdlaYCKLwkdcEDIY7wBqlkJHL2PWH8DQ56jrtgG0S0omqszKUKxZp5ya8YCuBoQ8zw6uxG4mebZeTNDnvPqCQYvuQ4X/DvtuAvxKoqbZ9O19tGQFkUgK5uMmxv4Q2jMZdrv2ttKoDgP9LLbqMtgRBBBnv/JNyxXoUibBqfOZHsgfqsLRRBXi1dLpZq7r7znCdWSFGui+ZHt9ietPUIyTmoO8Afs64FVj4xtxhIUm8mbXAgjUhGn8DjmD9OG3VNqS8QFOMxeT+pdHC+i9qO0WbGRIxchjACvRY2UxHZ/kqfQLsMZNwkhl6wpQ5X6AlKkcSTl2dbsX7ZzHBD0Cu6vw9jXcq5BrmjEJD3F9lZepagcnzvHH+KGdxLu1xOHXco5oyU8ZZzBaQBtVr6jwiku5dEwDvZrJGeEVXp4h9Nmn2KjT1WbU1UUe61DTdBVlzMd+nsJ5n6C+RVz/MsA0tcK0oDm0/XUB5YT7E04K0Odw34cxRVH7WoqD1aMzUdUsLxFxNmsG7HIAPWhabkwpVyl2L8ATMP5GzaNYLfssZjJ3oK4vMeiNXvm10Vu3O5JWwgKEK4MmM85S1iEXR8NcHA7Q6Z5jcM5hKbb8Zjq5gFDJZ8ASPPoMANrO9e/gxTfCzl5emLTbi+Oj3Xay5PUampRoIruXOuW7PZKO4JwaQr8bYIGo8m9M+AV3v20iankTM7DBY8p+Qr1YtCYVOXV6OxjQtTDuHDx1ACd2Ko7wfphR1s49KmD84fSpL3a/ykReY05UzGtvRShguvaN3KgAXUPoV0OdNw2VLiR8Ko1iX1wFcCIhXi4rFXM5Npr+LjNt76dzq/GFaFCouwDtMrbniGGNt+QUzZZJ/flC4uJGgMsEvFuIz4vwHXWt9EGc7V0kKnM7ms1Fsx3qRnT3DshemNLcCWyRePtLJvwS5evY8jxq5HcSq7vwMEel6C7snMT1C5mcFI4lmTh4+SiediqlEn1cSYo/F6DuJZW/F3udgAkbg7aNx9wcT+r9ilpiugDAC3C6R/XLQhkAlQ2TL8DZLgTEAH5CkiRZ3X6XesQeE3l7axogvozpkbDS7SIq5+d+E8OX/2MNdH8K+aNgaznJzARi75lkj5LSz2JCKlTKv4zYt5SJmsAkpXHfz7hv0ETW9OLaRndWk2rhdNhZBePcN8RcCVOrqdxdQdZ4BmC792FGMY50imIyKQMpoa6gHvKhKqEelYwWBziM8uhgEprTyDa3Ueqs4+93CdumYSLSyOrGcO56bPpsmC3HPyKdro21fYz1OyxXk8qXUHfYDuALADOIg2wAxP38vdtEFnnTmJAGiFMJu4cCflOsQZZ3WGINdIaJbAfL8opR+0wPafHwslCdl+4blRT1qBZPcXSPAzeeoo6jpnUU6IQeiovb3e/S+96m5T68LjcdSdQd+hPvSiFopznwrdfu1kJEM+dRX6kkjW+IJdCSQFxHKPUioVd3B1qYLBty7mGMC02kPBwToLNIeWcSNXyMyjV0c6BlDCPQVlmx32wimzhDsQDaffVDMeC6ylptNwE0oY2IJ0i2KlsSvmrC395b0BGgO5qwJJGdye4iKXO+hYo1m8iyknO67msi4qllkjTVQ5igaVlrF9LkQ6T6WCYsYotl6f817Fq9iax65JAGu8HUmJZfBhsPTfoor3aMw/7Knma9XULAX2qisJoUjTjarb7s8TokFbgzTXjT4O3UKJLizGzILll5IUr2h09sw7fEzRd1t9Vku9VwEy5ZisOUtwqObeOZaZ1sHlJbifvTcebuu5r09rVulYLL4ObxDCmFSjVO/5+VQXj3k0gInu6kflzEBItzk1WajXzuXqWWhQbZ0COLvhu6I9DVDGA5bFniHRe7PQsgKvDqa1QMngwYuZidtW08x22QXw9j96pjso54Mdokten7FNBSPpU69mwT+XLDbllUcgPealrfKycgjkdkwHkwar8yPZJxXo9p+aMJr8DUqaRCNOUmtGMOk1riaVUKJqJvG2arS0LRWDqnAOCkEZEs8xyP/C4LA7eayP9zedwDWmz/pfiCzFYyN1lvfJtrC03n7ueLW6DrUNtFsNf/erQK1FvAKTcHbil2myaLVJK0oZWaxb9MeM92rXKIoaMJaLeLqKYdZzof2yz9LGsl/JLP5Hs3nmMyss2B/4ovpouyrv1PgAEAoNEKo2OAC1UAAAAASUVORK5CYII="

/***/ }),

/***/ "./images/payment/expresscard.png":
/*!****************************************!*\
  !*** ./images/payment/expresscard.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEVEQ0JEOTRBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEVEQ0JEOTNBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/payment/mastercard.png":
/*!***************************************!*\
  !*** ./images/payment/mastercard.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEVBRjZDNjFBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEVBRjZDNjBBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/payment/mastercard2.png":
/*!****************************************!*\
  !*** ./images/payment/mastercard2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM0RTIzQTdBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzM0RTIzQTZBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/payment/visa.png":
/*!*********************************!*\
  !*** ./images/payment/visa.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAlCAYAAADSvLDKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ3MkI5QzFBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQ3MkI5QzBBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/payment/visa2.png":
/*!**********************************!*\
  !*** ./images/payment/visa2.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAkCAYAAAAZ4GNvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RjFBNUNBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RjFBNUJBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/products/img1.jpg":
/*!**********************************!*\
  !*** ./images/products/img1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img1-a7be1081b9e0d9b9b4f2da00121a0c23.jpg";

/***/ }),

/***/ "./images/products/img2.jpg":
/*!**********************************!*\
  !*** ./images/products/img2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img2-f798b134dec99836ebf59fa336cdf267.jpg";

/***/ }),

/***/ "./images/products/img3.jpg":
/*!**********************************!*\
  !*** ./images/products/img3.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img3-3c15080eb6266b41690b3596ade60cad.jpg";

/***/ }),

/***/ "./images/products/img4.jpg":
/*!**********************************!*\
  !*** ./images/products/img4.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/img4-0d69769318217b935aae5cb3aaedee23.jpg";

/***/ }),

/***/ "./images/russia-flag.jpg":
/*!********************************!*\
  !*** ./images/russia-flag.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MjI1RDJEQjYxM0MxMUU3ODE3M0YwMkM1MjgyRTVFMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MjI1RDJEQzYxM0MxMUU3ODE3M0YwMkM1MjgyRTVFMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyMjVEMkQ5NjEzQzExRTc4MTczRjAyQzUyODJFNUUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyMjVEMkRBNjEzQzExRTc4MTczRjAyQzUyODJFNUUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAHUAAQEBAQAAAAAAAAAAAAAAAAADBggBAQADAQEAAAAAAAAAAAAAAAABAgYEAxAAAQAHBwUBAAAAAAAAAAAAAAHio9MEVKQykjNVFgcXMVFhAkIDEQEAAAQHAQADAAAAAAAAAAAAAaLiY6HRUgMTFRYxgQIy/9oADAMBAAIRAxEAPwDpwAAAAAAAABiOats85pop0dnX72nGGanJA5q2zzmminQ6/e04wzOSBzVtnnNNFOh1+9pxhmckDmrbPOaaKdDr97TjDM5IHNW2ec00U6HX72nGGZyQOats85pop0Ov3tOMMzkgc1bZ5zTRTodfvacYZnJA5q2zzmminQ6/e04wzOSDlg0rnAAAAAAAANHpFE0zWMx6O3NS3HjLslRpFE0zWHo7c1J4y7JUaRRNM1h6O3NSeMuyVGkUTTNYejtzUnjLslRpFE0zWHo7c1J4y7JUaRRNM1h6O3NSeMuyVGkUTTNYejtzUnjLslRpFE0zWHo7c1J4y7JU0RmG5AAAAAAAALRGP+mHa9sOx1+fHYmLz/T+Yffz9TukLF0BdAXQF0BdApD4/wCeHa9cSx1+vHcmCv7/AMx+/j6//9k="

/***/ }),

/***/ "./images/spain-flag.jpg":
/*!*******************************!*\
  !*** ./images/spain-flag.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODQ3Mjc2MTYxM0MxMUU3ODJENDgwMDE3MDIxNjRGOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyODQ3Mjc2MjYxM0MxMUU3ODJENDgwMDE3MDIxNjRGOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI4NDcyNzVGNjEzQzExRTc4MkQ0ODAwMTcwMjE2NEY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI4NDcyNzYwNjEzQzExRTc4MkQ0ODAwMTcwMjE2NEY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAI4AAQACAgMAAAAAAAAAAAAAAAAEBQEDAgYHAQEAAgMBAQAAAAAAAAAAAAAAAgYDBAUBBxAAAQMBBgMFCAMAAAAAAAAAAQIDBAAREpMFVQZR0RYyktIzFTFBIkJiExQ0YXGREQACAQEGBQMDBQAAAAAAAAAAAQIDETGRUhMUIUFREgRxoSJhgTLwscHRBf/aAAwDAQACEQMRAD8ApFOOLUVKUVKUbVKJJJJ95rln0xIxeVxNALyuJoBeVxNALyuJoBeVxNALyuJoDKXHEKCkqKVJNqVAkEEe8UDR7x6BkWnRcFvw1R9zVzSxZXdafV4nFeS7babW7Ihw2GGkqW46tlsJSlItJPw1m8edarNRU2rfqzx1qnJybKyBL2JNnrhNxGmXb9xhciGGkOKtu3bxT8JvggBVnD2105+FUsfbVeN/D1/SJz14xUndzslbYWvoGRadFwW/DXG3NXNLFkdafV4j0DItOi4LfhpuauaWLGtPq8R6BkWnRcFvw03NXNLFjWn1eI9AyLTouC34abmrmlixrT6vEegZFp0XBb8NNzVzSxY1p9XiT6wGM6vuF8QkFMWJLiflvoVmMlX47iS2oFF5KG1POAKCRZeb/wAqwLxYqEJW2vstSfX6Xe7Njxvm+Li+26/+bFgzOxsz2q4p9qQuL+XFlqBelXY6xHKQEFJIZBVeCrRZaKsFD/LhoRlWj+azP+zR8rynOpKFNy+KuSt+XuXMERVyHpbUKQw7IN2Q+6uOptZaN1ASGnHFAhJ+YCqr53jqnRptO3jL0v5cLfW37Gbul+LaaXrbx9V+xOrkgUAoBQCgKSREczGG9CGVpyq8QtUkfaV91YcCiVhtRUSeJrt1/JppU7JqXarOCljxSRHx6s1NuSl92vYhP7FQiOlMaW0VvtluaS0oG0qcsWiwi8brtnxe8A/xWat51Hsj8pSceXLl1uuNil5Vkm3CzD3LmKsmXc9ITF+2lSDmFrRW6kKF0KuEr/q2tTy6sJUIRU4uUeSUrePHmrOF15pwlPudttnqrPtx5k+uSZhQCgFAeFdUbj1OVjL51dtnRyRwLDoU8qHVG49TlYy+dNnRyRwGhTyodUbj1OVjL502dHJHAaFPKh1RuPU5WMvnTZ0ckcBoU8qHVG49TlYy+dNnRyRwGhTyodUbj1OVjL502dHJHAaFPKh1RuPU5WMvnTZ0ckcBoU8qHVG49TlYy+dNnRyRwGhTyohyf2XfK7avK7Ht+T6eFbTJRuV5r7teEh3aAd2gHdoB3aAd2gNkb9lryu2nzex7fn+njXqIyud5/9k="

/***/ }),

/***/ "./images/us-flag.jpg":
/*!****************************!*\
  !*** ./images/us-flag.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NTM4RDUxQjYxM0IxMUU3ODM5NTg5Qjc3NkUwNEZFMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NTM4RDUxQzYxM0IxMUU3ODM5NTg5Qjc3NkUwNEZFMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1MzhENTE5NjEzQjExRTc4Mzk1ODlCNzc2RTA0RkUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1MzhENTFBNjEzQjExRTc4Mzk1ODlCNzc2RTA0RkUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAKgBAAwERAAIRAQMRAf/EAJkAAQABBQEAAAAAAAAAAAAAAAAHAgMEBQYBAQEAAgMBAQAAAAAAAAAAAAAAAgYBBAUDBxAAAAQBBwkHBAMBAAAAAAAAAQIDBAAREhMFBhYHMaHRkpPTFVVWIUGRIjIzFFFhQtKCIyVFEQAAAgMQAgIBBQAAAAAAAAAAAfACAxEhMVGBoRJSghNTBBRUBRVBcZHRMmHhIkJD/9oADAMBAAIRAxEAPwDlhqtFarm7o4qNFlE3Cx3LoRonRkzgAJthKQRE/b2zhyxa6ThuQwQePY1hmjZ9nxYyXx3cwFDJ8G/6QACFJSiFHMmTs0RvDo+PfiEHBjN6jaGamEywqz/iDxFKcLVr8gRA5HUpJwGCT8YkbQ3fl7yfoBubIVNU94KpSrBVdk0cJuqesREKBaiE4EM3ESAM3ygAy98c7lHFmC1I3nvZDp8O2as8wqbJWku+9G8JNuvhv1Ep4l/SKpdMqwufZcjgFP8AYXXw36iU8S/pC6ZVg7LkcAp/sLr4b9RKeJf0hdMqwdlyOAU/2PS2Zw5KYDFtGoBgGUBASgICH8IXTKsMHyPIn/gSSiHmhQQqZFU4fFBw1dkKu7AF0nAgoUJjYkwaFQMk+XL3hF6WfWjfKDx7jHzobIW3+gNX/GXpQcnPwmcXiRQ+JLSfMo5BT75mbvjzdedd8Q/1hiAWG5iHTSdgoRQjYtXFO/RSAjVsM4fK8b0f95gk9XfJ3xI4o6T3k/R+AGdZo9UNLRVO8rZis4q5Ur0xjJmCgX8yhSnbJf1URSmylljR5JZUmC1J8v4vefEI6fDs2y+YVJidFd9w5PRiR7w4V8iceAb6KreMaqfIueg5TGVSyF4cK+ROPAN9C8Y1U+Q0HKYyqWQvDhXyJx4BvoXjGqnyGg5TGVSyF4cK+ROPAN9C8Y1U+Q0HKYyqWRGhLF2+aNSt2lnHiLgyazd8vNFUqyahgEAKUQEpJACScUe2LrqGRm6axfoPndAxfGylsxcCldR7walFctXeeeCgpUc75E2ky+aTJEb9m5+ZUo/2CgcQoTsviKBSrK2eeKVi2BuWr3YJzQRK2ERApkwLMVl7O02eMm3Y1icfdlCgsNvZCobb1XaJhWwWXcA6blcC7UVA1GsdedIYCSABJANJIWNPkMwrcmSp0jecIb3HZdRdsRNFqCj7piSr0W96YLqH0xXL1pVFk63I7icgvRb3pguofTC9aVQ63I7icgvRb3pguofTC9aVQ63I7icgvRb3pguofTC9aVQ63I7ichXwTFnnTXNuIUG0ZJII6zisJdLYcExZ501zbiFBtGSSBrOKwl0thwTFnnTXNuIUG0ZJIGs4rCXS2HBMWedNc24hQbRkkgazisJdLYcExZ501zbiFBtGSSBrOKwl0thwTFnnTXNuIUG0ZJIGs4rCXS2HBMWedNc24hQbRkkgazisJdLYcExZ501zbiFBtGSSBrOKwl0tjT3Xsd1aO0JpjzulKw6HZZzbTGF17HdWjtCaYXSlYOyzm2mMLr2O6tHaE0wulKwdlnNtMYXXsd1aO0JphdKVg7LObaYwuvY7q0doTTC6UrB2Wc20xhdex3Vo7QmmF0pWDss5tpjC69jurR2hNMLpSsHZZzbTGF17HdWjtCaYXSlYOyzm2mMcE499T2/Ub2/Rl/H7fSNMxaVPxKGWEW9WMCQasADVgAasADVgAasAFxv76ft+ovuejL+X2+sZIRX/ABOGSEf/2Q=="

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts/TopHeader */ "./components/Layouts/TopHeader.js");
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_HomeOne_MainBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeOne/MainBanner */ "./components/HomeOne/MainBanner.js");
/* harmony import */ var _components_HomeOne_CategoriesBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeOne/CategoriesBanner */ "./components/HomeOne/CategoriesBanner.js");
/* harmony import */ var _components_HomeOne_RecentProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HomeOne/RecentProducts */ "./components/HomeOne/RecentProducts.js");
/* harmony import */ var _components_Common_OfferStyleOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Common/OfferStyleOne */ "./components/Common/OfferStyleOne.js");
/* harmony import */ var _components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/FacilitySlider */ "./components/Common/FacilitySlider.js");
/* harmony import */ var _components_Common_Partner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/Partner */ "./components/Common/Partner.js");
/* harmony import */ var _components_Common_RecentBlogPost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/RecentBlogPost */ "./components/Common/RecentBlogPost.js");
/* harmony import */ var _components_Common_InstagramFeed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Common/InstagramFeed */ "./components/Common/InstagramFeed.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_HomeOne_PopularProducts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/HomeOne/PopularProducts */ "./components/HomeOne/PopularProducts.js");
/* harmony import */ var _components_HomeOne_BestSellingProducts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/HomeOne/BestSellingProducts */ "./components/HomeOne/BestSellingProducts.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const Index = ({
  products
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_HomeOne_MainBanner__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_HomeOne_CategoriesBanner__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_HomeOne_RecentProducts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    products: products
  }), __jsx(_components_Common_OfferStyleOne__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_HomeOne_PopularProducts__WEBPACK_IMPORTED_MODULE_13__["default"], {
    products: products
  }), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_HomeOne_BestSellingProducts__WEBPACK_IMPORTED_MODULE_14__["default"], {
    products: products
  }), __jsx(_components_Common_Partner__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_Common_RecentBlogPost__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_Common_InstagramFeed__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], null));
};

const mapStateToProps = state => {
  return {
    products: state.products.filter(product => product.type == 'Women Clothes')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Index));

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_PRODUCTS, USRER_LOGIN, CHECK_USRER_LOGIN, USRER_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCTS", function() { return ADD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGIN", function() { return USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_USRER_LOGIN", function() { return CHECK_USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGOUT", function() { return USRER_LOGOUT; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_PRODUCTS = 'ADD_PRODUCTS';
const USRER_LOGIN = 'USRER_LOGIN';
const CHECK_USRER_LOGIN = 'CHECK_USRER_LOGIN';
const USRER_LOGOUT = 'USRER_LOGOUT';

/***/ }),

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: checkUserLogin, userLogout, userLogin, addProducts, addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProducts", function() { return addProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
 //CHECK_USRER_LOGIN

const checkUserLogin = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["CHECK_USRER_LOGIN"]
  };
}; // USRER_LOGOUT

const userLogout = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["USRER_LOGOUT"]
  };
}; // USRER_LOGIN

const userLogin = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["USRER_LOGIN"]
  };
}; //add products

const addProducts = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCTS"]
  };
}; //add cart action

const addToCart = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY_WITH_NUMBER"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
};

/***/ }),

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = _ref => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5U2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL0luc3RhZ3JhbUZlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tb24vT2ZmZXJTdHlsZU9uZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9QYXJ0bmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL1JlY2VudEJsb2dQb3N0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL1NpbmdsZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lT25lL0Jlc3RTZWxsaW5nUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lT25lL0NhdGVnb3JpZXNCYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lT25lL01haW5CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lT25lL1BvcHVsYXJQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVPbmUvUmVjZW50UHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dHMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0cy9Ub3BIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbHMvUXVpY2tWaWV3TW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbHMvU2VhcmNoTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbHMvU2hvcHBpbmdDYXJ0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbHMvU2lkZWJhck1vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWxzL1dpc2hsaXN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2Jsb2cvYmxvZzEuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9ibG9nL2Jsb2cyLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYmxvZy9ibG9nMy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllczEuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMyLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzMy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllczQuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9mcmFuY2UtZmxhZy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2dlcm1hbnktZmxhZy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2luc3RhZ3JhbS9pbnN0YTEuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGExMC5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2luc3RhZ3JhbS9pbnN0YTIuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGEzLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW5zdGFncmFtL2luc3RhNC5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2luc3RhZ3JhbS9pbnN0YTUuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGE2LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW5zdGFncmFtL2luc3RhNy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2luc3RhZ3JhbS9pbnN0YTguanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGE5LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaXRhbHktZmxhZy5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wYXJ0bmVyL3BhcnRuZXIxLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGFydG5lci9wYXJ0bmVyMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXIvcGFydG5lcjMucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wYXJ0bmVyL3BhcnRuZXI0LnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGFydG5lci9wYXJ0bmVyNS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BhcnRuZXIvcGFydG5lcjYucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wYXltZW50L2V4cHJlc3NjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGF5bWVudC9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcGF5bWVudC9tYXN0ZXJjYXJkMi5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BheW1lbnQvdmlzYS5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3BheW1lbnQvdmlzYTIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9wcm9kdWN0cy9pbWcxLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcHJvZHVjdHMvaW1nMi5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL3Byb2R1Y3RzL2ltZzMuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9wcm9kdWN0cy9pbWc0LmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvcnVzc2lhLWZsYWcuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9zcGFpbi1mbGFnLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvdXMtZmxhZy5qcGciLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvQWN0aXZlTGluay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCIiXSwibmFtZXMiOlsiT3dsQ2Fyb3VzZWwiLCJkeW5hbWljIiwib3B0aW9ucyIsImxvb3AiLCJuYXYiLCJkb3RzIiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwiYXV0b3BsYXkiLCJtYXJnaW4iLCJuYXZUZXh0IiwicmVzcG9uc2l2ZSIsIml0ZW1zIiwiRmFjaWxpdHlTbGlkZXIiLCJDb21wb25lbnQiLCJkaXNwbGF5IiwiY29tcG9uZW50RGlkTW91bnQiLCJfaXNNb3VudGVkIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInN0YXRlIiwiSW5zdGFncmFtRmVlZCIsInJlcXVpcmUiLCJPZmZlclN0eWxlT25lIiwiUGFydG5lciIsIlJlY2VudEJsb2dQb3N0IiwiU2luZ2xlUHJvZHVjdCIsIlF1aWNrVmlld01vZGFsIiwiaWQiLCJwcm9wcyIsIm9uSGFuZGxlQWRkVG9DYXJ0Iiwib250b2dnbGVNb2RhbCIsInByb2R1Y3QiLCJvbmhhbmRsZU1vZGFsUHJvZHVjdCIsInN0eWxlQ2xzIiwic3R5bGVDbHNUd28iLCJpbWFnZVVybCIsImltYWdlSG92ZXJVcmwiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVNb2RhbCIsImhhbmRsZU1vZGFsUHJvZHVjdCIsIm9uU2FsZSIsIm5ld1Byb2R1Y3QiLCJ0aXRsZSIsIm9mZmVyIiwib2xkUHJpY2UiLCJuZXdQcmljZSIsImhhbmRsZUFkZFRvQ2FydCIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJCZXN0U2VsbGluZ1Byb2R1Y3RzIiwibW9kYWxQcm9kdWN0IiwicHJvZHVjdHMiLCJhZGRUb0NhcnQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsImxlbmd0aCIsIm1hcCIsImlkeCIsInBhc3NEYXRhVG9Nb2RhbCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29ubmVjdCIsIkNhdGVnb3JpZXNCYW5uZXIiLCJzbWFydFNwZWVkIiwiTWFpbkJhbm5lciIsImlzVmlzaWJsZSIsIlBvcHVsYXJQcm9kdWN0cyIsIlJlY2VudFByb2R1Y3RzIiwiRm9vdGVyIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJOYXZiYXIiLCJjb2xsYXBzZWQiLCJTZWFyY2hNb2RhbCIsIlNob3BwaW5nQ2FydE1vZGFsIiwiU2lkZWJhck1vZGFsIiwiZWxlbWVudElkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsVG8iLCJjbGFzc05hbWVPbmUiLCJjbGFzc05hbWVUd28iLCJ0b2dnbGVOYXZiYXIiLCJ0b2dnbGVNb2RhbFNlYXJjaCIsInRvZ2dsZU1vZGFsQ2FydCIsInRvZ2dsZU1vZGFsU2lkZWJhciIsIm1hcFN0YXRlVG9Qcm9wcyIsImFkZGVkSXRlbXMiLCJUb3BIZWFkZXIiLCJXaXNobGlzdE1vZGFsIiwidXNlckxvZ291dCIsIlJvdXRlciIsInB1c2giLCJ1c2VyIiwidG9nZ2xlTW9kYWxXaXNobGlzdCIsImhhbmRsZUxvZ291dCIsImxvZ2luIiwibW9kYWwiLCJxdHkiLCJtYXgiLCJtaW4iLCJvbkNsaWNrIiwiYWRkUXVhbnRpdHlXaXRoTnVtYmVyIiwic2V0VGltZW91dCIsImNsb3NlTW9kYWwiLCJwcmV2U3RhdGUiLCJhY3RpdmUiLCJEZWNyZWFzZUl0ZW0iLCJ0YXJnZXQiLCJ2YWx1ZSIsIkluY3JlbWVudEl0ZW0iLCJoYW5kbGVBZGRUb0NhcnRGcm9tVmlldyIsInJlbW92ZUl0ZW0iLCJlcnJvciIsImNhcnRJdGVtcyIsInF1YW50aXR5IiwiaGFuZGxlUmVtb3ZlIiwidG90YWwiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiZGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSW5kZXgiLCJmaWx0ZXIiLCJ0eXBlIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfSVRFTSIsIlNVQl9RVUFOVElUWSIsIkFERF9RVUFOVElUWSIsIkFERF9TSElQUElORyIsIkFERF9RVUFOVElUWV9XSVRIX05VTUJFUiIsIk9SREVSX0ZPUk0iLCJDSEVDS09VVF9DSEFSR0UiLCJSRVNFVF9DQVJUIiwiQUREX1BST0RVQ1RTIiwiVVNSRVJfTE9HSU4iLCJDSEVDS19VU1JFUl9MT0dJTiIsIlVTUkVSX0xPR09VVCIsImNoZWNrVXNlckxvZ2luIiwidXNlckxvZ2luIiwiYWRkUHJvZHVjdHMiLCJzdWJ0cmFjdFF1YW50aXR5IiwiYWRkUXVhbnRpdHkiLCJyZXNldENhcnQiLCJBY3RpdmVMaW5rIiwib25seSIsImNsYXNzTmFtZSIsImFjdGl2ZUNsYXNzTmFtZSIsInRyaW0iLCJjbG9uZUVsZW1lbnQiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7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QUFvQjlJLEtBQUssQ0FBQ3NILElBQTFCLElBQWtDdEgsS0FBSyxDQUFDb2EsZUFBNUMsRUFBNkQ7QUFDekRELGFBQVMsR0FBSSxHQUFFQSxTQUFVLElBQUduYSxLQUFLLENBQUNvYSxlQUFnQixFQUF0QyxDQUF3Q0MsSUFBeEMsRUFBWjtBQUNIOztBQUVELFNBQU9yYSxLQUFLLENBQUNvYSxlQUFiO0FBRUEsU0FBTyxNQUFDLGdEQUFELEVBQVVwYSxLQUFWLGVBQWtCNEksNENBQUssQ0FBQzBSLFlBQU4sQ0FBbUJuUixLQUFuQixFQUEwQjtBQUFFZ1I7QUFBRixHQUExQixDQUFsQixDQUFQO0FBQ0gsQ0FYRDs7QUFhZUksNkhBQVUsQ0FBQ04sVUFBRCxDQUF6QixFOzs7Ozs7Ozs7OztBQ2pCQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoJ3JlYWN0LW93bC1jYXJvdXNlbDMnKSk7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBuYXY6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIG1hcmdpbjogMzAsXG4gICAgbmF2VGV4dDogW1xuICAgICAgICBcIjxpIGNsYXNzPSdmbGF0aWNvbi1sZWZ0Jz48L2k+XCIsXG4gICAgICAgIFwiPGkgY2xhc3M9J2ZsYXRpY29uLXJpZ2h0LWFycm93Jz48L2k+XCJcbiAgICBdLFxuICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgMDoge1xuICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIDU3Njoge1xuICAgICAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgIH0sXG4gICAgICAgIDc2ODoge1xuICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBGYWNpbGl0eVNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBfaXNNb3VudGVkID0gZmFsc2U7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpeyBcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSkgXG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXR5LWFyZWEgcGItNzBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gPE93bENhcm91c2VsIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjaWxpdHktc2xpZGVzIG93bC1jYXJvdXNlbCBvd2wtdGhlbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZhY2lsaXR5LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZsYXRpY29uLXRyYWNraW5nJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkZyZWUgU2hpcHBpbmcgV29ybGR3aWRlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mYWNpbGl0eS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmbGF0aWNvbi1yZXR1cm4nPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+RWFzeSBSZXR1cm4gUG9saWN5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mYWNpbGl0eS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmbGF0aWNvbi1zaHVmZmxlJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjcgRGF5IEV4Y2hhbmdlIFBvbGljeTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmFjaWxpdHktYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmxhdGljb24tc2FsZSc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XZWVrZW5kIERpc2NvdW50IENvdXBvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmFjaWxpdHktYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmxhdGljb24tY3JlZGl0LWNhcmQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2VjdXJlIFBheW1lbnQgTWV0aG9kczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmFjaWxpdHktYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmxhdGljb24tbG9jYXRpb24nPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VHJhY2sgWW91ciBPcmRlcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZmFjaWxpdHktYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmxhdGljb24tY3VzdG9tZXItc2VydmljZSc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4yNC83IEN1c3RvbWVyIFN1cHBvcnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+IDogJyd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2lsaXR5U2xpZGVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoJ3JlYWN0LW93bC1jYXJvdXNlbDMnKSk7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBuYXY6IGZhbHNlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBuYXZUZXh0OiBbXG4gICAgICAgIFwiPGkgY2xhc3M9J2ZsYXRpY29uLWxlZnQnPjwvaT5cIixcbiAgICAgICAgXCI8aSBjbGFzcz0nZmxhdGljb24tcmlnaHQtYXJyb3cnPjwvaT5cIlxuICAgIF0sXG4gICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgfSxcbiAgICAgICAgNTc2OiB7XG4gICAgICAgICAgICBpdGVtczogMyxcbiAgICAgICAgfSxcbiAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBpdGVtczogNCxcbiAgICAgICAgfSxcbiAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgaXRlbXM6IDYsXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIEluc3RhZ3JhbUZlZWQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHN0YXRlID0ge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXsgXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5OiB0cnVlIH0pIFxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWdyYW0tYXJlYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFncmFtLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhsLWluc3RhZ3JhbSc+PC9pPiBGb2xsb3cgdXMgb24gQGxpdmFuaVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gPE93bENhcm91c2VsIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zdGFncmFtLXNsaWRlcyBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGExLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGEyLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGEzLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGE0LmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGE1LmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGE2LmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGE3LmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGE4LmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGE5LmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaW5zdGFncmFtLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pbnN0YWdyYW0vaW5zdGExMC5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhsLWluc3RhZ3JhbSc+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwibGluay1idG5cIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvT3dsQ2Fyb3VzZWw+IDogJyd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhZ3JhbUZlZWQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIE9mZmVyU3R5bGVPbmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9mZmVyLWFyZWEgYmctaW1hZ2UxIHB0Yi0xMDAgamFyYWxsYXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5MaW1pdGVkIFRpbWUgT2ZmZXIhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+LTQwJSBPRkY8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgVGhlIEJlc3QgRGVhbHMgTm93PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtb25lLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5EaXNjb3ZlciBOb3c8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9mZmVyU3R5bGVPbmU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydCgncmVhY3Qtb3dsLWNhcm91c2VsMycpKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdjogZmFsc2UsXG4gICAgZG90czogZmFsc2UsXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIG5hdlRleHQ6IFtcbiAgICAgICAgXCI8aSBjbGFzcz0nZmxhdGljb24tbGVmdCc+PC9pPlwiLFxuICAgICAgICBcIjxpIGNsYXNzPSdmbGF0aWNvbi1yaWdodC1hcnJvdyc+PC9pPlwiXG4gICAgXSxcbiAgICByZXNwb25zaXZlOiB7XG4gICAgICAgIDA6IHtcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICB9LFxuICAgICAgICA1NzY6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICB9LFxuICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICB9LFxuICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICBpdGVtczogNyxcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgUGFydG5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBfaXNNb3VudGVkID0gZmFsc2U7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpeyBcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSkgXG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItYXJlYSBwdGItNzBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5PdXIgUGFydG5lcnM8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyA8T3dsQ2Fyb3VzZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXJ0bmVyLXNsaWRlcyBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGFydG5lci9wYXJ0bmVyMS5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGFydG5lci9wYXJ0bmVyMi5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGFydG5lci9wYXJ0bmVyMy5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGFydG5lci9wYXJ0bmVyNC5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGFydG5lci9wYXJ0bmVyNS5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcnRuZXItaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGFydG5lci9wYXJ0bmVyNi5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPiA6ICcnfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0bmVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBSZWNlbnRCbG9nUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmxvZy1hcmVhIHB0LTEwMCBwYi03MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+UmVjZW50IFN0b3J5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkZyb20gVGhlIExpdmFuaSBCbG9nPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1ibG9nLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpbmdsZS1ibG9nLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvYmxvZy9ibG9nMS5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkphbnVhcnkgMjksIDIwMjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+SWRlYXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaW5nbGUtYmxvZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlRoZSAjMSBlQ29tbWVyY2UgYmxvZyB0byBncm93IHlvdXIgYnVzaW5lc3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaW5nbGUtYmxvZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGV0YWlscy1idG5cIj5SZWFkIFN0b3J5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtYmxvZy1wb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaW5nbGUtYmxvZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2Jsb2cvYmxvZzIuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5KYW51YXJ5IDI5LCAyMDIwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkFkdmljZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpbmdsZS1ibG9nLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TGF0ZXN0IGVjb21tZXJjZSB0cmVuZDogVGhlIHJpc2Ugb2Ygc2hvcHBhYmxlIHBvc3RzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2luZ2xlLWJsb2ctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRldGFpbHMtYnRuXCI+UmVhZCBTdG9yeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWJsb2ctcG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2luZ2xlLWJsb2ctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9ibG9nL2Jsb2czLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SmFudWFyeSAyOSwgMjAyMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5Tb2NpYWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaW5nbGUtYmxvZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJ1aWxkaW5nIGVDb21tZXJjZSB3YXZlOiBTb2NpYWwgbWVkaWEgc2hvcHBpbmc8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaW5nbGUtYmxvZy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGV0YWlscy1idG5cIj5SZWFkIFN0b3J5PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VudEJsb2dQb3N0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBTaW5nbGVQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgUXVpY2tWaWV3TW9kYWw6IGZhbHNlXG4gICAgfVxuXG4gICAgaGFuZGxlQWRkVG9DYXJ0ID0gKGlkKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25IYW5kbGVBZGRUb0NhcnQoaWQpOyBcbiAgICB9XG5cbiAgICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBRdWlja1ZpZXdNb2RhbDogIXRoaXMuc3RhdGUuUXVpY2tWaWV3TW9kYWxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvcHMub250b2dnbGVNb2RhbCh0aGlzLnN0YXRlLlF1aWNrVmlld01vZGFsKTsgXG4gICAgfVxuXG4gICAgaGFuZGxlTW9kYWxQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbmhhbmRsZU1vZGFsUHJvZHVjdChwcm9kdWN0KTsgXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBsZXQge3Byb2R1Y3QsIHN0eWxlQ2xzLCBzdHlsZUNsc1R3b30gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVDbHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZUNsc1R3byB8fCBcInNpbmdsZS1wcm9kdWN0cy1ib3hcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdD9pZD0ke3Byb2R1Y3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlVXJsfSAgY2xhc3NOYW1lPVwibWFpbi1pbWFnZVwiIGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2VIb3ZlclVybH0gY2xhc3NOYW1lPVwiaG92ZXItaW1hZ2VcIiBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LWhlYXJ0Jz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLWxhYmVsXCI+QWRkIHRvIFdpc2hsaXN0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXJlZnJlc2gnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtbGFiZWxcIj5Db21wYXJlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpY2stdmlldy1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTW9kYWxQcm9kdWN0KHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1zZWFyY2gtYWx0Jz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLWxhYmVsXCI+UXVpY2sgVmlldzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qub25TYWxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhbGUtdGFnXCI+U2FsZSE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXdQcm9kdWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy10YWdcIj5OZXchPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48YSBocmVmPXtgL3Byb2R1Y3RzLXR5cGUtMT9pZD0ke3Byb2R1Y3QuaWR9YH0+e3Byb2R1Y3QudGl0bGV9PC9hPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm9mZmVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7cHJvZHVjdC5vbGRQcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHtwcm9kdWN0Lm5ld1ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3Byb2R1Y3Qub2xkUHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXItcmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgdGhpcy5oYW5kbGVBZGRUb0NhcnQocHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydFwiPkFkZCB0byBDYXJ0PC9hPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRpc2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdHMtZGlzY291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGlzY291bnRPZmZ9JSBPRkZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFF1aWNrVmlld01vZGFsIGZyb20gJy4uL01vZGFscy9RdWlja1ZpZXdNb2RhbCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSAnLi4vQ29tbW9uL1NpbmdsZVByb2R1Y3QnO1xuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XG5cbmNsYXNzIEJlc3RTZWxsaW5nUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIHN0YXRlID0ge1xuICAgICAgICBRdWlja1ZpZXdNb2RhbDogZmFsc2UsXG4gICAgICAgIG1vZGFsUHJvZHVjdDoge30sXG4gICAgICAgIHByb2R1Y3RzOiBbXVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLnByb3BzLnByb2R1Y3RzXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgUXVpY2tWaWV3TW9kYWw6ICF0aGlzLnN0YXRlLlF1aWNrVmlld01vZGFsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUFkZFRvQ2FydCA9IChpZCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmFkZFRvQ2FydChpZCk7IFxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdBZGRlZCB0byB0aGUgY2FydCcsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDUwMDAsXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhc3NEYXRhVG9Nb2RhbCA9IChwcm9kdWN0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWxQcm9kdWN0OiBwcm9kdWN0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0cy1hcmVhIHBiLTcwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+U2VlIE91ciBDb2xsZWN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5CZXN0IFNlbGxpbmcgUHJvZHVjdHM8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhdGhpcy5zdGF0ZS5wcm9kdWN0cy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2luZ2xlUHJvZHVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlQ2xzPVwiY29sLWxnLTQgY29sLXNtLTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVDbHNUd289XCJwcm9kdWN0cy1ib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IYW5kbGVBZGRUb0NhcnQ9e3RoaXMuaGFuZGxlQWRkVG9DYXJ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25oYW5kbGVNb2RhbFByb2R1Y3Q9e3RoaXMucGFzc0RhdGFUb01vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb250b2dnbGVNb2RhbD17dGhpcy50b2dnbGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICB7LyogUXVpY2sgVmlldyBNb2RhbCAqL31cbiAgICAgICAgICAgICAgICA8UXVpY2tWaWV3TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVNb2RhbH0gYWN0aXZlPXt0aGlzLnN0YXRlLlF1aWNrVmlld01vZGFsID8gJ2FjdGl2ZScgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17dGhpcy5zdGF0ZS5tb2RhbFByb2R1Y3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUb0NhcnQ6IChpZCkgPT4geyBkaXNwYXRjaChhZGRUb0NhcnQoaWQpKSB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG51bGwsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKEJlc3RTZWxsaW5nUHJvZHVjdHMpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBDYXRlZ29yaWVzQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzLWJhbm5lci1hcmVhIHB0LTEwMCBwYi03MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtY2F0ZWdvcmllcy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzMS5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RG9u4oCZdCBNaXNzIFRvZGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjUwJSBPRkY8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXJpZ2h0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPkRpc2NvdmVyIE5vdzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy1yaWdodC1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1jYXRlZ29yaWVzLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMyLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV3IENvbGxlY3Rpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TmVlZCBOb3c8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXJpZ2h0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPkRpc2NvdmVyIE5vdzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXJpZ2h0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmstYnRuXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWNhdGVnb3JpZXMtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllczMuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Zb3VyIExvb2tzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk11c3QgSGF2ZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXJpZ2h0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPkRpc2NvdmVyIE5vdzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXJpZ2h0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmstYnRuXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWNhdGVnb3JpZXMtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllczQuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRha2UgMjAlIE9GRjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XaW50ZXIgU3ByaW5nITwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtcmlnaHQtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+RGlzY292ZXIgTm93PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtcmlnaHQtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluay1idG5cIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXNCYW5uZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBPd2xDYXJvdXNlbCA9IGR5bmFtaWMoaW1wb3J0KCdyZWFjdC1vd2wtY2Fyb3VzZWwzJykpO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICAgIGxvb3A6IHRydWUsXG4gICAgbmF2OiB0cnVlLFxuICAgIGRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIHNtYXJ0U3BlZWQ6IDUwMCxcbiAgICBpdGVtczogMSxcbiAgICBuYXZUZXh0OiBbXG4gICAgICAgIFwiPGkgY2xhc3M9J2ZsYXRpY29uLWxlZnQnPjwvaT5cIixcbiAgICAgICAgXCI8aSBjbGFzcz0nZmxhdGljb24tcmlnaHQtYXJyb3cnPjwvaT5cIlxuICAgIF0sXG59XG5cbmNsYXNzIE1haW5CYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIF9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7IFxuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheTogdHJ1ZSB9KSBcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IDxPd2xDYXJvdXNlbCBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG9tZS1zbGlkZXMgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5vcHRpb25zfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJhbm5lciBiYW5uZXItYmcxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGlzVmlzaWJsZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1iYW5uZXItY29udGVudCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGUgPyBcInN1Yi10aXRsZSBhbmltYXRlZCBmYWRlSW5VcCBvcGFjaXR5T25lXCIgOiAnb3BhY2l0eVplcm8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbWl0ZWQgVGltZSBPZmZlciFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZSA/IFwiYW5pbWF0ZWQgZmFkZUluVXAgb3BhY2l0eU9uZVwiIDogJ29wYWNpdHlaZXJvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaW50ZXItU3ByaW5nIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlID8gXCJhbmltYXRlZCBmYWRlSW5VcCBvcGFjaXR5T25lXCIgOiAnb3BhY2l0eVplcm8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRha2UgMjAlIE9mZiDigJhTYWxlIE11c3QtSGF2ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtbGVmdC1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGVmYXVsdC1idG4gJHtpc1Zpc2libGUgPyBcImFuaW1hdGVkIGZhZGVJblVwIG9wYWNpdHlPbmVcIiA6ICdvcGFjaXR5WmVybyd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wIFdvbWVuJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtcmlnaHQtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYG9wdGlvbmFsLWJ0biAke2lzVmlzaWJsZSA/IFwiYW5pbWF0ZWQgZmFkZUluVXAgb3BhY2l0eU9uZVwiIDogJ29wYWNpdHlaZXJvJ31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgTWVuJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmFubmVyIGJhbm5lci1iZzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZS1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgaXNWaXNpYmxlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJhbm5lci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZSA/IFwic3ViLXRpdGxlIGFuaW1hdGVkIGZhZGVJblVwIHNsb3cgb3BhY2l0eU9uZVwiIDogJ29wYWNpdHlaZXJvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGNsdXNpdmUgT2ZmZXIhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGUgPyBcImFuaW1hdGVkIGZhZGVJblVwIHNsb3cgb3BhY2l0eU9uZVwiIDogJ29wYWNpdHlaZXJvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTcHJpbmctU2hvdyFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZSA/IFwiYW5pbWF0ZWQgZmFkZUluVXAgc2xvdyBvcGFjaXR5T25lXCIgOiAnb3BhY2l0eVplcm8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlYXAgeWVhciBvZmZlciDigJhTYWxlIE11c3QtSGF2ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtbGVmdC1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGVmYXVsdC1idG4gJHtpc1Zpc2libGUgPyBcImFuaW1hdGVkIGZhZGVJblVwIG9wYWNpdHlPbmVcIiA6ICdvcGFjaXR5WmVybyd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wIFdvbWVuJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtcmlnaHQtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYG9wdGlvbmFsLWJ0biAke2lzVmlzaWJsZSA/IFwiYW5pbWF0ZWQgZmFkZUluVXAgb3BhY2l0eU9uZVwiIDogJ29wYWNpdHlaZXJvJ31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgTWVuJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmFubmVyIGJhbm5lci1iZzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZS1jZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgaXNWaXNpYmxlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJhbm5lci1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZSA/IFwic3ViLXRpdGxlIGFuaW1hdGVkIGZhZGVJblVwIG9wYWNpdHlPbmVcIiA6ICdvcGFjaXR5WmVybydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5IE5vdyBGcm9tIExpdmFuaSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZSA/IFwiYW5pbWF0ZWQgZmFkZUluVXAgb3BhY2l0eU9uZVwiIDogJ29wYWNpdHlaZXJvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgU2Vhc29uIENhbnZhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlID8gXCJhbmltYXRlZCBmYWRlSW5VcCBvcGFjaXR5T25lXCIgOiAnb3BhY2l0eVplcm8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRha2UgMjAlIE9mZiDigJhTYWxlIE11c3QtSGF2ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtbGVmdC1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZGVmYXVsdC1idG4gJHtpc1Zpc2libGUgPyBcImFuaW1hdGVkIGZhZGVJblVwIG9wYWNpdHlPbmVcIiA6ICdvcGFjaXR5WmVybyd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9wIFdvbWVuJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtcmlnaHQtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYG9wdGlvbmFsLWJ0biAke2lzVmlzaWJsZSA/IFwiYW5pbWF0ZWQgZmFkZUluVXAgb3BhY2l0eU9uZVwiIDogJ29wYWNpdHlaZXJvJ31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3AgTWVuJ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPiA6ICcnfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5CYW5uZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFF1aWNrVmlld01vZGFsIGZyb20gJy4uL01vZGFscy9RdWlja1ZpZXdNb2RhbCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IFNpbmdsZVByb2R1Y3QgZnJvbSAnLi4vQ29tbW9uL1NpbmdsZVByb2R1Y3QnO1xuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XG5cbmNsYXNzIFBvcHVsYXJQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIFF1aWNrVmlld01vZGFsOiBmYWxzZSxcbiAgICAgICAgbW9kYWxQcm9kdWN0OiB7fSxcbiAgICAgICAgcHJvZHVjdHM6IFtdXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMucHJvcHMucHJvZHVjdHNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBRdWlja1ZpZXdNb2RhbDogIXRoaXMuc3RhdGUuUXVpY2tWaWV3TW9kYWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQWRkVG9DYXJ0ID0gKGlkKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkVG9DYXJ0KGlkKTsgXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0FkZGVkIHRvIHRoZSBjYXJ0Jywge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFzc0RhdGFUb01vZGFsID0gKHByb2R1Y3QpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RhbFByb2R1Y3Q6IHByb2R1Y3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3RzLWFyZWEgcHQtMTAwIHBiLTcwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+U2VlIE91ciBDb2xsZWN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qb3B1bGFyIFByb2R1Y3RzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIXRoaXMuc3RhdGUucHJvZHVjdHMubGVuZ3RoICYmIHRoaXMuc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpbmdsZVByb2R1Y3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUNscz1cImNvbC1sZy00IGNvbC1zbS02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlQ2xzVHdvPVwicHJvZHVjdHMtYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGFuZGxlQWRkVG9DYXJ0PXt0aGlzLmhhbmRsZUFkZFRvQ2FydH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uaGFuZGxlTW9kYWxQcm9kdWN0PXt0aGlzLnBhc3NEYXRhVG9Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9udG9nZ2xlTW9kYWw9e3RoaXMudG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgey8qIFF1aWNrIFZpZXcgTW9kYWwgKi99XG4gICAgICAgICAgICAgICAgPFF1aWNrVmlld01vZGFsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9IGFjdGl2ZT17dGhpcy5zdGF0ZS5RdWlja1ZpZXdNb2RhbCA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3RoaXMuc3RhdGUubW9kYWxQcm9kdWN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVG9DYXJ0OiAoaWQpID0+IHsgZGlzcGF0Y2goYWRkVG9DYXJ0KGlkKSkgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBudWxsLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShQb3B1bGFyUHJvZHVjdHMpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVpY2tWaWV3TW9kYWwgZnJvbSAnLi4vTW9kYWxzL1F1aWNrVmlld01vZGFsJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgU2luZ2xlUHJvZHVjdCBmcm9tICcuLi9Db21tb24vU2luZ2xlUHJvZHVjdCc7XG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zJztcbmNsYXNzIFJlY2VudFByb2R1Y3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgUXVpY2tWaWV3TW9kYWw6IGZhbHNlLFxuICAgICAgICBtb2RhbFByb2R1Y3Q6IHt9LFxuICAgICAgICBwcm9kdWN0czogW11cbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwcm9kdWN0czogdGhpcy5wcm9wcy5wcm9kdWN0c1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFF1aWNrVmlld01vZGFsOiAhdGhpcy5zdGF0ZS5RdWlja1ZpZXdNb2RhbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVBZGRUb0NhcnQgPSAoaWQpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRUb0NhcnQoaWQpOyBcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnQWRkZWQgdG8gdGhlIGNhcnQnLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXNzRGF0YVRvTW9kYWwgPSAocHJvZHVjdCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1vZGFsUHJvZHVjdDogcHJvZHVjdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdHMtYXJlYSBwYi03MFwiPlxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Yi10aXRsZVwiPlNlZSBPdXIgQ29sbGVjdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UmVjZW50IFByb2R1Y3RzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIXRoaXMuc3RhdGUucHJvZHVjdHMubGVuZ3RoICYmIHRoaXMuc3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpbmdsZVByb2R1Y3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUNscz1cImNvbC1sZy00IGNvbC1zbS02XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGFuZGxlQWRkVG9DYXJ0PXt0aGlzLmhhbmRsZUFkZFRvQ2FydH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uaGFuZGxlTW9kYWxQcm9kdWN0PXt0aGlzLnBhc3NEYXRhVG9Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9udG9nZ2xlTW9kYWw9e3RoaXMudG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgey8qIFF1aWNrIFZpZXcgTW9kYWwgKi99XG4gICAgICAgICAgICAgICAgPFF1aWNrVmlld01vZGFsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9IGFjdGl2ZT17dGhpcy5zdGF0ZS5RdWlja1ZpZXdNb2RhbCA/ICdhY3RpdmUnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3RoaXMuc3RhdGUubW9kYWxQcm9kdWN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVG9DYXJ0OiAoaWQpID0+IHsgZGlzcGF0Y2goYWRkVG9DYXJ0KGlkKSkgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBudWxsLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShSZWNlbnRQcm9kdWN0cyk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3Rlci1hcmVhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BYm91dCBUaGUgU3RvcmU8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdGhlLXN0b3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5PbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBvbiB0aGUgd2ViIGlzIHNob3BwaW5nLjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtbWFwJz48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXb25kZXIgU3RyZWV0LCBVU0EsIE5ldyBZb3JrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtcGhvbmUtY2FsbCc+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKzEtNTQxLTc1NC0zMDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtZW52ZWxvcGUnPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvQGxpdmFuaS5jb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNvY2lhbC1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtZmFjZWJvb2snPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtdHdpdHRlcic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWJsb2NrXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4bC1pbnN0YWdyYW0nPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtbGlua2VkaW4nPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtcGludGVyZXN0LWFsdCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldCBwbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5RdWljayBMaW5rczwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInF1aWNrLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5BYm91dCBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtbGVmdC1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNob3AgTm93ITwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtbGVmdC1zaWRlYmFyLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+V29tYW4nczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFxc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5GQVEnczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lci1zZXJ2aWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkN1c3RvbWVyIFNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkN1c3RvbWVyIFN1cHBvcnQ8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjdXN0b21lci1zdXBwb3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5NeSBBY2NvdW50PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DaGVja291dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXJ0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZBUSdzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90cmFjay1vcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5PcmRlciBUcmFja2luZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5IZWxwICYgU3VwcG9ydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5OZXdzbGV0dGVyPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1uZXdzbGV0dGVyLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VG8gZ2V0IHRoZSBsYXRlc3QgbmV3cyBhbmQgbGF0ZXN0IHVwZGF0ZXMgZnJvbSB1cy48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Zb3VyIEUtbWFpbCBBZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImlucHV0LW5ld3NsZXR0ZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiBuYW1lPVwiZW1haWxcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1YnNjcmliZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b20tYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcHlyaWdodCA8aSBjbGFzc05hbWU9J2J4IGJ4LWNvcHlyaWdodCc+PC9pPntjdXJyZW50WWVhcn0gTGl2YW5pIERlc2lnbmVkIEJ5IDxhIGhyZWY9XCJodHRwczovL2Vudnl0aGVtZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RW52eVRoZW1lPC9hPiAtIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBheW1lbnQtdHlwZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BheW1lbnQvdmlzYS5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9wYXltZW50L21hc3RlcmNhcmQucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcGF5bWVudC9tYXN0ZXJjYXJkMi5wbmdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9wYXltZW50L3Zpc2EyLnBuZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3BheW1lbnQvZXhwcmVzc2NhcmQucG5nXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi91dGlscy9BY3RpdmVMaW5rJztcbmltcG9ydCBTZWFyY2hNb2RhbCBmcm9tICcuLi9Nb2RhbHMvU2VhcmNoTW9kYWwnO1xuaW1wb3J0IFNob3BwaW5nQ2FydE1vZGFsIGZyb20gJy4uL01vZGFscy9TaG9wcGluZ0NhcnRNb2RhbCc7XG5pbXBvcnQgU2lkZWJhck1vZGFsIGZyb20gJy4uL01vZGFscy9TaWRlYmFyTW9kYWwnO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIE5hdmJhciBcbiAgICBfaXNNb3VudGVkID0gZmFsc2U7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWVcbiAgICB9O1xuICAgIHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5hZGQoXCJpcy1zdGlja3lcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gU2VhcmNoIE1vZGFsXG4gICAgdG9nZ2xlTW9kYWxTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgU2VhcmNoTW9kYWw6ICF0aGlzLnN0YXRlLlNlYXJjaE1vZGFsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBTaG9wcGluZyBDYXJ0IE1vZGFsXG4gICAgdG9nZ2xlTW9kYWxDYXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFNob3BwaW5nQ2FydE1vZGFsOiAhdGhpcy5zdGF0ZS5TaG9wcGluZ0NhcnRNb2RhbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyIE1vZGFsXG4gICAgdG9nZ2xlTW9kYWxTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFNpZGViYXJNb2RhbDogIXRoaXMuc3RhdGUuU2lkZWJhck1vZGFsXG4gICAgICAgIH0pO1xuICAgIH1cbiBcbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZU9uZSA9IGNvbGxhcHNlZCA/ICdjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UnIDogJ2NvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93JztcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lVHdvID0gY29sbGFwc2VkID8gJ25hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0IGNvbGxhcHNlZCcgOiAnbmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHQnO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhci1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ28ucG5nXCIpfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU5hdmJhcn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZVR3b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhciB0b3AtYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgbWlkZGxlLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyIGJvdHRvbS1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVPbmV9IGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZSA8aSBjbGFzc05hbWU9J2J4IGJ4LWNoZXZyb24tZG93bic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RmFzaGlvbiBTdHlsZSBPbmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXNoaW9uLXN0eWxlLXR3b1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZhc2hpb24gU3R5bGUgVHdvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFzaGlvbi1zdHlsZS10aHJlZVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkZhc2hpb24gU3R5bGUgVGhyZWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXNoaW9uLXN0eWxlLWZvdXJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5GYXNoaW9uIFN0eWxlIEZvdXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXNoaW9uLXN0eWxlLWZpdmVcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5GYXNoaW9uIFN0eWxlIEZpdmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3ZpZDE5XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3ZpZC0xOSBTdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ncm9jZXJ5XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcm9jZXJ5IFN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2VsZWN0cm9uaWNzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbGVjdHJvbmljcyBTdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mdXJuaXR1cmVcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1cm5pdHVyZSBTdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TmV3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9qZXdlbHJ5XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKZXdlbHJ5IFN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5OZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcCA8aSBjbGFzc05hbWU9J2J4IGJ4LWNoZXZyb24tZG93bic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+U2hvcCBTdHlsZXM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy1sZWZ0LXNpZGViYXJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5MZWZ0IFNpZGViYXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy1sZWZ0LXNpZGViYXItd2l0aC1jYXRlZ29yaWVzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlZnQgU2lkZWJhciBXaXRoIENhdGVnb3JpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yaWVzLTFcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXRlZ29yaWVzICgyIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yaWVzLTRcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXRlZ29yaWVzIEZ1bGwgV2lkdGggKDMgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5TaG9wIFN0eWxlcyAyPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtcmlnaHQtc2lkZWJhclwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJpZ2h0IFNpZGViYXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy1yaWdodC1zaWRlYmFyLXdpdGgtY2F0ZWdvcmllc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJpZ2h0IFNpZGViYXIgV2l0aCBDYXRlZ29yaWVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcmllcy0yXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2F0ZWdvcmllcyBGdWxsd2lkdGg8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb29rYm9vay0xXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+R3JpZCAoMyBpbiBSb3cpPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPlNob3AgU3R5bGVzIDM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy13aXRob3V0LXNpZGViYXJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5XaXRob3V0IFNpZGViYXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy1zaWRlYmFyLWZ1bGx3aWR0aFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPldpdGggU2lkZWJhciBGdWxsIFdpZHRoPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcmllcy0zXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2F0ZWdvcmllcyAoMSBpbiBSb3cpPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9va2Jvb2stMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkdyaWQgRnVsbCBXaWR0aCAoNCBpbiBSb3cpPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPlByb2R1Y3QgUGFnZXM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2FydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2hlY2tvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk15IEFjY291bnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpemluZy1ndWlkZVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNpemluZyBHdWlkZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VzIDxpIGNsYXNzTmFtZT0nYnggYngtY2hldnJvbi1kb3duJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5QYWdlczwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQgVXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lci1zZXJ2aWNlXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q3VzdG9tZXIgU2VydmljZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaWdudXA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+RkFRJ3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lcnJvci00MDRcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT40MDQgRXJyb3I8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21pbmctc29vblwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbWluZyBTb29uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdHJhY2stb3JkZXJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5UcmFja2luZyBPcmRlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPkdhbGxlcnk8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYWxsZXJ5LTFcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5HcmlkICgyIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYWxsZXJ5LTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5HcmlkICgzIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYWxsZXJ5LTNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5HcmlkIEZ1bGwgV2lkdGggKDMgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dhbGxlcnktNFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkdyaWQgRnVsbCBXaWR0aCAoNCBpbiBSb3cpPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPk15IEFjY291bnQ8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxvZ2luPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2lnbnVwPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPkNhdGVnb3JpZXM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yaWVzLTFcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXRlZ29yaWVzICgyIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yaWVzLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXRlZ29yaWVzIEZ1bGx3aWR0aDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3JpZXMtM1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNhdGVnb3JpZXMgKDEgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3JpZXMtNFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNhdGVnb3JpZXMgRnVsbCBXaWR0aCAoMyBpbiBSb3cpPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPkxvb2tib29rPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9va2Jvb2stMVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkdyaWQgKDMgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvb2tib29rLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5HcmlkIEZ1bGwgV2lkdGggKDQgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5TaG9wPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNhcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNlaGNrb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcGFyZVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbXBhcmU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk15IEFjY291bnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaXppbmctZ3VpZGVcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TaXppbmcgR3VpZGU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90cmFjay1vcmRlclwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlRyYWNraW5nIE9yZGVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tZXItc2VydmljZVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkN1c3RvbWVyIFNlcnZpY2U8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCBVczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdvbWVuJ3MgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9uLWRvd24nPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPlNob3AgU3R5bGVzPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtbGVmdC1zaWRlYmFyXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TGVmdCBTaWRlYmFyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtbGVmdC1zaWRlYmFyLXdpdGgtY2F0ZWdvcmllc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWZ0IFNpZGViYXIgV2l0aCBDYXRlZ29yaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcmllcy0xXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2F0ZWdvcmllcyAoMiBpbiBSb3cpPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcmllcy00XCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2F0ZWdvcmllcyBGdWxsIFdpZHRoICgzIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+U2hvcCBTdHlsZXMgMjwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXJpZ2h0LXNpZGViYXJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SaWdodCBTaWRlYmFyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtcmlnaHQtc2lkZWJhci13aXRoLWNhdGVnb3JpZXNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SaWdodCBTaWRlYmFyIFdpdGggQ2F0ZWdvcmllczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3JpZXMtMlwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNhdGVnb3JpZXMgRnVsbHdpZHRoPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9va2Jvb2stMVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkdyaWQgKDMgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5TaG9wIFN0eWxlcyAzPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtd2l0aG91dC1zaWRlYmFyXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+V2l0aG91dCBTaWRlYmFyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMtc2lkZWJhci1mdWxsd2lkdGhcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5XaXRoIFNpZGViYXIgRnVsbCBXaWR0aDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3JpZXMtM1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNhdGVnb3JpZXMgKDEgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvb2tib29rLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5HcmlkIEZ1bGwgV2lkdGggKDQgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZS10cmVuZGluZy1wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllczMuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Qb3B1bGFyIFByb2R1Y3RzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmstYnRuXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbidzIDxpIGNsYXNzTmFtZT0nYnggYngtY2hldnJvbi1kb3duJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5TaG9wIFN0eWxlczwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLWxlZnQtc2lkZWJhclwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxlZnQgU2lkZWJhcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLWxlZnQtc2lkZWJhci13aXRoLWNhdGVnb3JpZXNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVmdCBTaWRlYmFyIFdpdGggQ2F0ZWdvcmllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3JpZXMtMVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNhdGVnb3JpZXMgKDIgaW4gUm93KTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3JpZXMtNFwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNhdGVnb3JpZXMgRnVsbCBXaWR0aCAoMyBpbiBSb3cpPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPlNob3AgU3R5bGVzIDI8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy1yaWdodC1zaWRlYmFyXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UmlnaHQgU2lkZWJhcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXJpZ2h0LXNpZGViYXItd2l0aC1jYXRlZ29yaWVzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UmlnaHQgU2lkZWJhciBXaXRoIENhdGVnb3JpZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yaWVzLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXRlZ29yaWVzIEZ1bGx3aWR0aDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvb2tib29rLTFcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5HcmlkICgzIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+U2hvcCBTdHlsZXMgMzwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXdpdGhvdXQtc2lkZWJhclwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPldpdGhvdXQgU2lkZWJhcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzLXNpZGViYXItZnVsbHdpZHRoXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+V2l0aCBTaWRlYmFyIEZ1bGwgV2lkdGg8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXRlZ29yaWVzLTNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXRlZ29yaWVzICgxIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb29rYm9vay0yXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+R3JpZCBGdWxsIFdpZHRoICg0IGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtdHJlbmRpbmctcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXM0LmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UG9wdWxhciBQcm9kdWN0czwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rLWJ0blwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nIDxpIGNsYXNzTmFtZT0nYnggYngtY2hldnJvbi1kb3duJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLTFcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5HcmlkICgyIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLTJcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5HcmlkICgzIGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLTNcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5HcmlkICg0IGluIFJvdyk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nLTRcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5HcmlkIChGdWxsIFdpZHRoKTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2ctNVwiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlJpZ2h0IFNpZGViYXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpbmdsZSBQb3N0IDxpIGNsYXNzTmFtZT0nYnggYngtY2hldnJvbi1yaWdodCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpbmdsZS1ibG9nLTFcIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkRlZmF1bHQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaW5nbGUtYmxvZy0yXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5XaXRoIFZpZGVvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2luZ2xlLWJsb2ctM1wiIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+V2l0aCBJbWFnZSBTbGlkZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzLW9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYnRuLWJveFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWxTZWFyY2h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic2VhcmNoLWJ0biBieCBieC1zZWFyY2gtYWx0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiN0b2dnbGVNb2RhbENhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb2RhbENhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1zaG9wcGluZy1iYWcnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb2R1Y3RzLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXJnZXItbWVudVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWxTaWRlYmFyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvcC1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGUtYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm90dG9tLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgey8qIFNlYXJjaCBNb2RhbCAqL31cbiAgICAgICAgICAgICAgICA8U2VhcmNoTW9kYWwgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWxTZWFyY2h9IFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuU2VhcmNoTW9kYWwgPyAnYWN0aXZlJyA6ICcnfSBcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgey8qIFNob3BwaW5nIENhcnQgTW9kYWwgKi99XG4gICAgICAgICAgICAgICAgPFNob3BwaW5nQ2FydE1vZGFsIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsQ2FydH0gXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5TaG9wcGluZ0NhcnRNb2RhbCA/ICdhY3RpdmUnIDogJyd9IFxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogU2lkZWJhciBNb2RhbCAqL31cbiAgICAgICAgICAgICAgICA8U2lkZWJhck1vZGFsIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1vZGFsU2lkZWJhcn0gXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5TaWRlYmFyTW9kYWwgPyAnYWN0aXZlJyA6ICcnfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSk9PntcbiAgICByZXR1cm57XG4gICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5hZGRlZEl0ZW1zXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTmF2YmFyKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZXJMb2dvdXQgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zJztcbmltcG9ydCBXaXNobGlzdE1vZGFsIGZyb20gJy4uL01vZGFscy9XaXNobGlzdE1vZGFsJztcblxuY2xhc3MgVG9wSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBXaXNobGlzdE1vZGFsOiBmYWxzZVxuICAgIH07XG5cbiAgICB0b2dnbGVNb2RhbFdpc2hsaXN0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFdpc2hsaXN0TW9kYWw6ICF0aGlzLnN0YXRlLldpc2hsaXN0TW9kYWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnVzZXJMb2dvdXQoKTtcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgdXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXItY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2VsY29tZSB0byBMaXZhbmk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNhbGw6ICsxLTU0MS03NTQtMzAxMDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGxhbmd1YWdlLXN3aXRjaGVyIGQtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvdXMtZmxhZy5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVuZyA8aSBjbGFzc05hbWU9J2J4IGJ4LWNoZXZyb24tZG93bic+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9nZXJtYW55LWZsYWcuanBnXCIpfSBjbGFzc05hbWU9XCJzaGFkb3ctc21cIiBhbHQ9XCJmbGFnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R2VyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvZnJhbmNlLWZsYWcuanBnXCIpfSBjbGFzc05hbWU9XCJzaGFkb3ctc21cIiBhbHQ9XCJmbGFnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RnJlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvc3BhaW4tZmxhZy5qcGdcIil9IGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiIGFsdD1cImZsYWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TcGE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9ydXNzaWEtZmxhZy5qcGdcIil9IGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiIGFsdD1cImZsYWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SdXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9pdGFseS1mbGFnLmpwZ1wiKX0gY2xhc3NOYW1lPVwic2hhZG93LXNtXCIgYWx0PVwiZmxhZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkl0YTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXItdG9wLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtdXNlcic+PC9pPiBNeSBBY2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiN0b2dnbGVNb2RhbFdpc2hsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWxXaXNobGlzdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LWhlYXJ0Jz48L2k+IFdpc2hsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wYXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1zaHVmZmxlJz48L2k+IENvbXBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2UgPT4ge2UucHJldmVudERlZmF1bHQoKTsgdGhpcy5oYW5kbGVMb2dvdXQoKTt9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LWxvZy1pbic+PC9pPiBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtbG9nLWluJz48L2k+IExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBXaXNobGlzdCBNb2RhbCAqL31cbiAgICAgICAgICAgICAgICA8V2lzaGxpc3RNb2RhbCBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVNb2RhbFdpc2hsaXN0fSBcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLldpc2hsaXN0TW9kYWwgPyAnYWN0aXZlJyA6ICcnfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSk9PntcbiAgICByZXR1cm57XG4gICAgICAgIHVzZXI6IHN0YXRlLmxvZ2luXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VyTG9nb3V0OiAoKSA9PiB7ZGlzcGF0Y2godXNlckxvZ291dCgpKX1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRvcEhlYWRlcik7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgYWRkUXVhbnRpdHlXaXRoTnVtYmVyIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuY2xhc3MgUXVpY2tWaWV3TW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG1vZGFsOiBmYWxzZSxcbiAgICAgICAgcXR5OiAxLFxuICAgICAgICBtYXg6IDEwLFxuICAgICAgICBtaW46IDFcbiAgICB9O1xuXG4gICAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMuc3RhdGUubW9kYWwpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHF0eTogMVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUFkZFRvQ2FydEZyb21WaWV3ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmFkZFF1YW50aXR5V2l0aE51bWJlcih0aGlzLnByb3BzLnByb2R1Y3QuaWQsIHRoaXMuc3RhdGUucXR5KTsgXG5cbiAgICAgICAgdG9hc3Quc3VjY2VzcygnQWRkZWQgdG8gdGhlIGNhcnQnLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt0aGlzLmNsb3NlTW9kYWwoKX0sMjAwMCk7IFxuICAgIH1cblxuICAgIEluY3JlbWVudEl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIGlmKHByZXZTdGF0ZS5xdHkgPCAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHF0eTogcHJldlN0YXRlLnF0eSArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBEZWNyZWFzZUl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIGlmKHByZXZTdGF0ZS5xdHkgPiAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5OiBwcmV2U3RhdGUucXR5IC0gMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHsgcHJvZHVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWwgZmFkZSBwcm9kdWN0c1F1aWNrVmlldyAke3RoaXMucHJvcHMuYWN0aXZlfWB9PiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngteCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0W1wiaW1hZ2VVcmxcIl19IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm9uU2FsZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWxlLXRhZ1wiPlNhbGUhPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwcm9kdWN0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm9mZmVyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7cHJvZHVjdC5vbGRQcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHtwcm9kdWN0Lm5ld1ByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3Byb2R1Y3Qub2xkUHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyYXRpbmctY291bnRcIj4zIHJldmlld3M8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0cy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5WZW5kb3I6PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkxlcmV2ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BdmFpbGFiaWxpdHk6PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkluIHN0b2NrICg3IGl0ZW1zKTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qcm9kdWN0cyBUeXBlOjwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5ULVNoaXJ0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY29sb3Itc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNvbG9yOjwvaDQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkJsYWNrXCIgY2xhc3NOYW1lPVwiY29sb3ItYmxhY2tcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIldoaXRlXCIgY2xhc3NOYW1lPVwiY29sb3Itd2hpdGVcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkdyZWVuXCIgY2xhc3NOYW1lPVwiY29sb3ItZ3JlZW5cIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIlllbGxvdyBHcmVlblwiIGNsYXNzTmFtZT1cImNvbG9yLXllbGxvd2dyZWVuXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwidG9wXCIgdGl0bGU9XCJUZWFsXCIgY2xhc3NOYW1lPVwiY29sb3ItdGVhbFwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtc2l6ZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNpemU6PC9oND5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5YUzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPk08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+WEw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+WFhMPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1hZGQtdG8tY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY291bnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbnVzLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLkRlY3JlYXNlSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1taW51cyc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17dGhpcy5zdGF0ZS5taW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e3RoaXMuc3RhdGUubWF4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBxdHk6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGx1cy1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5JbmNyZW1lbnRJdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXBsdXMnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkVG9DYXJ0RnJvbVZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidmlldy1mdWxsLWluZm9cIj5WaWV3IEZ1bGwgSW5mbzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcz0gKGRpc3BhdGNoKT0+e1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFF1YW50aXR5V2l0aE51bWJlcjogKGlkLCBxdHkpID0+IHtkaXNwYXRjaChhZGRRdWFudGl0eVdpdGhOdW1iZXIoaWQsIHF0eSkpfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBudWxsLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShRdWlja1ZpZXdNb2RhbCkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZWFyY2hNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbW9kYWw6IGZhbHNlXG4gICAgfTtcblxuICAgIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnN0YXRlLm1vZGFsKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlYXJjaC1vdmVybGF5ICR7dGhpcy5wcm9wcy5hY3RpdmV9YH0+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1sYXllclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1sYXllclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1sYXllclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5LWNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1jbG9zZS1saW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5LWNsb3NlLWxpbmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0LXNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmUuLi5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtc2VhcmNoLWFsdCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaE1vZGFsOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvY2FydEFjdGlvbnMnO1xuXG5jbGFzcyBTaG9wcGluZ0NhcnRNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbW9kYWw6IGZhbHNlXG4gICAgfTtcblxuICAgIGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUl0ZW0oaWQpO1xuICAgICAgICB0b2FzdC5lcnJvcignUmVtb3ZlZCBmcm9tIGNhcnQnLCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5zdGF0ZS5tb2RhbCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMucHJvZHVjdHMubGVuZ3RoID8gXG4gICAgICAgIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY2FydC1jb250ZW50XCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2VVcmx9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Byb2R1Y3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9kdWN0LnF1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPiR7cHJvZHVjdC5uZXdQcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PntlLnByZXZlbnREZWZhdWx0KCk7dGhpcy5oYW5kbGVSZW1vdmUocHJvZHVjdC5pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtdHJhc2gnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jYXJ0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cD5FbXB0eS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2hvcHBpbmdDYXJ0TW9kYWwgcmlnaHQgJHt0aGlzLnByb3BzLmFjdGl2ZX1gfT4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaW5udGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC14Jz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NeSBDYXJ0ICh7dGhpcy5wcm9wcy5wcm9kdWN0cy5sZW5ndGh9KTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jYXJ0LXN1YnRvdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN1YnRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJ0b3RhbFwiPiR7dGhpcy5wcm9wcy50b3RhbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNhcnQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+UHJvY2VlZCB0byBDaGVja291dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcHRpb25hbC1idG5cIj5WaWV3IFNob3BwaW5nIENhcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb2R1Y3RzOiBzdGF0ZS5hZGRlZEl0ZW1zLFxuICAgICAgICB0b3RhbDogc3RhdGUudG90YWxcbiAgICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZUl0ZW06IChpZCkgPT4ge2Rpc3BhdGNoKHJlbW92ZUl0ZW0oaWQpKX1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLCBcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbikoU2hvcHBpbmdDYXJ0TW9kYWwpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIFNpZGViYXJNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbW9kYWw6IGZhbHNlXG4gICAgfTtcblxuICAgIGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnN0YXRlLm1vZGFsKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyTW9kYWwgcmlnaHQgJHt0aGlzLnByb3BzLmFjdGl2ZX1gfT4gXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaW5udGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC14Jz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1hYm91dC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5BYm91dCBUaGUgU3RvcmU8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdGhlLXN0b3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5PbmUgb2YgdGhlIG1vc3QgcG9wdWxhciBvbiB0aGUgd2ViIGlzIHNob3BwaW5nLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LW1hcCc+PC9pPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV29uZGVyIFN0cmVldCwgVVNBLCBOZXcgWW9ya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXBob25lLWNhbGwnPjwvaT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsxLTU0MS03NTQtMzAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LWVudmVsb3BlJz48L2k+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxsb0BsaXZhbmkuY29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhsLWZhY2Vib29rJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhsLXR3aXR0ZXInPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1ibG9ja1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieGwtaW5zdGFncmFtJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhsLWxpbmtlZGluJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtYmxvY2tcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhsLXBpbnRlcmVzdC1hbHQnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmV3LWluLXN0b3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5OZXcgSW4gU3RvcmU8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0cy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9wcm9kdWN0cy9pbWcxLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcHJvZHVjdHMvaW1nMi5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3Byb2R1Y3RzL2ltZzMuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9wcm9kdWN0cy9pbWc0LmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy13aXRob3V0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNob3Atbm93LWJ0blwiPlNob3AgTm93PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck1vZGFsOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBXaXNobGlzdE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBtb2RhbDogZmFsc2VcbiAgICB9O1xuXG4gICAgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMuc3RhdGUubW9kYWwpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2hvcHBpbmdXaXNobGlzdE1vZGFsIHJpZ2h0ICR7dGhpcy5wcm9wcy5hY3RpdmV9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1pbm50ZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXgnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+TXkgV2lzaCBMaXN0ICgzKTwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY2FydC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3Byb2R1Y3RzL2ltZzEuanBnXCIpfSBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Mb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJsdWUgLyBYUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4kMjUwLjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXRyYXNoJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9wcm9kdWN0cy9pbWcyLmpwZ1wiKX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q2F1c2FsIFYtTmVjayBTb2Z0IFJhZ2xhbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CbHVlIC8gWFM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj54PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+JDIwMC4wMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJlbW92ZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC10cmFzaCc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvcHJvZHVjdHMvaW1nMy5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkhhbmVzIE1lbidzIFB1bGxvdmVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CbHVlIC8gWFM8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtcHJpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4kMjAwLjAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXRyYXNoJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNhcnQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy1sZWZ0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3B0aW9uYWwtYnRuXCI+R28gU2hvcHBpbmchPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2lzaGxpc3RNb2RhbDsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvZzEtZjNjMzVlZDJmMzY1MTk4Y2RiN2JiYWMyNDgxNjhmOTUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2cyLWU0ZWViYzUyYzNjZjVlOGMwZmQ4ZGEzMTljNjNkNjQzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ibG9nMy1mNjEyYTRkYzczZjQ4MTYyMWJhOWNjOGI5ZDQ5MmExNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2F0ZWdvcmllczEtYjQ2N2ViYjg0ODU1NTljZGJjMTUzMGIzYzgxNzVkMzMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhdGVnb3JpZXMyLTU3NjQxNWEyOTMwNDExNWUwOGJlOTIzZGRlYmFmY2E1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jYXRlZ29yaWVzMy1kNTg5ZTVkMDZmYjNlYmQ0OGQyOGY4MDQyNTBlOTM3MS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2F0ZWdvcmllczQtNDgwNWJmOTFhNjc2MzFhYTA3YzdjYTJjNTQxZWYxMzEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRRQVlSWGhwWmdBQVNVa3FBQWdBQUFBQUFBQUFBQUFBQVAvc0FCRkVkV05yZVFBQkFBUUFBQUE4QUFELzRRTXBhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMd0E4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QaUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pCWkc5aVpTQllUVkFnUTI5eVpTQTFMakF0WXpBMk1DQTJNUzR4TXpRM056Y3NJREl3TVRBdk1ESXZNVEl0TVRjNk16STZNREFnSUNBZ0lDQWdJQ0krSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJSGh0Ykc1ek9uaHRjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEVXpVZ1YybHVaRzkzY3lJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRveE1FWTNPVGswTURZeE0wTXhNVVUzT0RRM1JqazVSVFk1TmpRek9FWTJNeUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG94TUVZM09UazBNVFl4TTBNeE1VVTNPRFEzUmprNVJUWTVOalF6T0VZMk15SStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPakV3UmpjNU9UTkZOakV6UXpFeFJUYzRORGRHT1RsRk5qazJORE00UmpZeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qRXdSamM1T1ROR05qRXpRekV4UlRjNE5EZEdPVGxGTmprMk5ETTRSall6SWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4Ky8rNEFEa0ZrYjJKbEFHVEFBQUFBQWYvYkFJUUFCZ1FFQkFVRUJnVUZCZ2tHQlFZSkN3Z0dCZ2dMREFvS0N3b0tEQkFNREF3TURBd1FEQTRQRUE4T0RCTVRGQlFURXh3Ykd4c2NIeDhmSHg4Zkh4OGZId0VIQndjTkRBMFlFQkFZR2hVUkZSb2ZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmLzhBQUVRZ0FLZ0JBQXdFUkFBSVJBUU1SQWYvRUFJQUFBQU1CQUFNQUFBQUFBQUFBQUFBQUFBQUdCd2dCQWdNQkFBSURBUUVCQUFBQUFBQUFBQUFBQUFBSEF3VUdCQUVDRUFBQkF3QUlCQU1KQUFBQUFBQUFBQUFBQVFJRE1iRXlNM1EyQndnUlViTTBrZ1JFSVdGeEVrSmljd1lXRVFFQUFBTUpBUUVBQUFBQUFBQUFBQUFBQVRHQndUS0NBek1FTkFVR0VRTC8yZ0FNQXdFQUFoRURFUUEvQUVCOHNqM3VlOTZ1ZTVWVnpsVlZWVldsVlUyUHh5T3Z6TzVxQVUzYjJxcis5emNWOUJOMUl5dTdQU3FreTV0SUdmVGdBaldyS3IvVko3ZlRSMXVLemQzekU4eHhjVWJDWHhYbWNyUmZITFh2YTVITmNyWE5YaWlvdkJVVkFlUmhDS2NqT0k4QUZPMjk1N213RTNVaks3dE5LcVRMbTBnWjlPQUNNNnM1clREUjF1S3pkM3pFOHh4Y1ViQ1ljclJBQW5RemlPQUJUdHZlZTVzQk4xSXl1N1RTcWt5NXRJR2ZUZ0FqT3JPYTB3MGRiaXMzZDh4UE1jWEZHd21ISzBRQUowTTRqZ0FVN2IzbnViQVRkU01ydTAwcXBNdWJTQm4wNEFJenF6bXRNTkhXNHJOM2ZNVHpIRnhSc0poeXRFQUNkRE9JNEFGTzI5NTdtd0UzVWpLN3ROS3FUTG0wZ1o5T0FDTTZzNXJURFIxdUt6ZDN6RTh4eGNVYkNZY3JSQUFRL045MU5jMjNYVjNTdGo3ZVF6SVNJNTVlQTlDbWJmYzlTMmV4bW8vSkdWM1o2VlVtWE5vOG9FNEFJMXF4bXBLTzJqcCtMaXMzZDh3L01jWEZHd21lRTVXaGVubDcrTzd0TnZMRlAxZTdtZXdmUDd1eG5TYi8yUT09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFNcGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqQXRZekEyTUNBMk1TNHhNelEzTnpjc0lESXdNVEF2TURJdk1USXRNVGM2TXpJNk1EQWdJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRVelVnVjJsdVpHOTNjeUlnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBFTkVReVFqVXhSVFl4TTBJeE1VVTNRVGhHUkRsRk56Z3lNRE00UmpCQ1F5SWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEVORVF5UWpVeFJqWXhNMEl4TVVVM1FUaEdSRGxGTnpneU1ETTRSakJDUXlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rUTBSREpDTlRGRE5qRXpRakV4UlRkQk9FWkVPVVUzT0RJd016aEdNRUpESWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2tRMFJESkNOVEZFTmpFelFqRXhSVGRCT0VaRU9VVTNPREl3TXpoR01FSkRJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrLys0QURrRmtiMkpsQUdUQUFBQUFBZi9iQUlRQUJnUUVCQVVFQmdVRkJna0dCUVlKQ3dnR0JnZ0xEQW9LQ3dvS0RCQU1EQXdNREF3UURBNFBFQThPREJNVEZCUVRFeHdiR3hzY0h4OGZIeDhmSHg4Zkh3RUhCd2NOREEwWUVCQVlHaFVSRlJvZkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGYvOEFBRVFnQUtnQkFBd0VSQUFJUkFRTVJBZi9FQUhrQUFRRUJBQU1BQUFBQUFBQUFBQUFBQUFBQkJnSUZCd0VCQUFJREFRQUFBQUFBQUFBQUFBQUFBQUVGQWdRR0J4QUFBUUlCRFFBREFRQUFBQUFBQUFBQUFBRUNBekZSa1JLaTBxUGpWQVZWRmhjaFFZRXlFUUVBQUFNSEJRRUFBQUFBQUFBQUFBQUE0V0tpVWFHeDBRSlNGZ0VEQkJRVk1mL2FBQXdEQVFBQ0VRTVJBRDhBODJmRml2ZTU3M3VjOXlxcm5LcXFxcXZ5cXFxbXdoS3pwMUpDczZkUUZaMDZnS3pwMUFWblRxQXJPblVDc2l4V1BhOWozTmUxVVZya1ZVVkZUNVJVVkNCMlhXZDcwMXVIZU5iM08xYml1ZVBlYnNxMDVuV2Q3MDF1SGVIdWRxM0U0OTV1eXJUbWRaM3ZUVzRkNGU1MnJjVGozbTdLdE9aMW5lOU5iaDNoN25hdHhPUGVic3EwNW5XZDcwMXVIZUh1ZHEzRTQ5NXV5clRtZFozdlRXNGQ0ZTUycmNUajNtN0t0T1oxbmU5TmJoM2g3bmF0eE9QZWJzcTA1bldkNzAxdUhlSHVkcTNFNDk1dXlyVG0zUlJ2VGdBQUFBQUFBRGQrWHB5ZUJtRko5aVMrRG0rUXlWUVBMMDVQQXpCOWlTK0J5R1NxQjVlbko0R1lQc1NYd09ReVZRUEwwNVBBekI5aVMrQnlHU3FCNWVuSjRHWVBzU1h3T1F5VlFQTDA1UEF6QjlpUytCeUdTcUI1ZW5KNEdZUHNTWHdPUXlWUVBMMDVQQXpCOWlTK0J5R1NxRGRsSTVzQUFBQUFBQUE1Ty9wWkpmcVQ4TTlmNzEvRWRFb01Rb0FVQUtBRkFDZ0N0L3BKSmZ1VDlNdEg3MC9EcS8vWlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhMS0wMDQyMjg1MjM0ZTFlNTY0MDljYjVmMDFlNTZhNTg0Yy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW5zdGExMC0wNDI3MDBmMjNjYTEyOTgxYmEyM2FiZjkwMjAwYjgwNS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW5zdGEyLTMzMzUwODVmMDE4Yzg3OTA2YWY3M2NlYWFiN2NhYWUwLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbnN0YTMtNDExMDZiNDA4MDZjOTk3YTdmNmMyNmRiN2QxYTM5NTUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhNC05ZDdkZGJmMzRjZTAzYzRmOWMxMmY1NDNmMGZhMWE1Ny5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW5zdGE1LTc4YTUxMDkyMjlkMTE4ZDE3MzI0N2NlY2E0ODY3ZWE1LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbnN0YTYtYTdlOTc5MjFhMmE4MWQ2ODM1YWMxODZlNjAwMDY1YTQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhNy0wYzJiMTcxZGMxN2EyNWFiMWZiYWE0MjBjNGNiYTZjZi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW5zdGE4LTc5MmY3ODVjOTUxMThkOWJlYWJiZGJjYjdlNDY4MmVmLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbnN0YTktNGRkZDg5MTY0OGQ0MDQyMzNkMzNjZWQ3Nzc5NGFmZjcuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRRQVlSWGhwWmdBQVNVa3FBQWdBQUFBQUFBQUFBQUFBQVAvc0FCRkVkV05yZVFBQkFBUUFBQUE4QUFELzRRTXBhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMd0E4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QaUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pCWkc5aVpTQllUVkFnUTI5eVpTQTFMakF0WXpBMk1DQTJNUzR4TXpRM056Y3NJREl3TVRBdk1ESXZNVEl0TVRjNk16STZNREFnSUNBZ0lDQWdJQ0krSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJSGh0Ykc1ek9uaHRjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEVXpVZ1YybHVaRzkzY3lJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvd01VTTFRVVF5UkRZeE0wTXhNVVUzUVRFMlJrTTJSa1ZFTVRZMU5VWkdRaUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG93TVVNMVFVUXlSVFl4TTBNeE1VVTNRVEUyUmtNMlJrVkVNVFkxTlVaR1FpSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPakF4UXpWQlJESkNOakV6UXpFeFJUZEJNVFpHUXpaR1JVUXhOalUxUmtaQ0lpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qQXhRelZCUkRKRE5qRXpRekV4UlRkQk1UWkdRelpHUlVReE5qVTFSa1pDSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4Ky8rNEFEa0ZrYjJKbEFHVEFBQUFBQWYvYkFJUUFCZ1FFQkFVRUJnVUZCZ2tHQlFZSkN3Z0dCZ2dMREFvS0N3b0tEQkFNREF3TURBd1FEQTRQRUE4T0RCTVRGQlFURXh3Ykd4c2NIeDhmSHg4Zkh4OGZId0VIQndjTkRBMFlFQkFZR2hVUkZSb2ZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmLzhBQUVRZ0FLZ0JBQXdFUkFBSVJBUU1SQWYvRUFIc0FBQU1CQVFFQkFBQUFBQUFBQUFBQUFBQUdCd1FCQWdNQkFBSURBUUVCQUFBQUFBQUFBQUFBQUFBR0JBVUhBd0VDRUFBQkF3RUdCQVlEQUFBQUFBQUFBQUFBQVFJREJ4RXhzVE4wTmlGUk1ySmhRcEkwUkJaeGNnUVJBUUFCQXdVQkFBTUFBQUFBQUFBQUFBQUJ3VEkwY29JREJBWXhFWUVDLzlvQURBTUJBQUlSQXhFQVB3RGM1NzNPVnpuS3JsVzFWVmJWVlZNbm1abFd1V3J6QUhLbEtyOW1rNC9GazcyRi93Q2N5SjB6UjI0TGxkSGxNQUJHcXNxdjJwT1B4bzhYRloyNzJpZVl4ZDAwSmRxOHlLWXZ3NjE3MnVSelhLMXpWdFJVV3hVVkFlVEVTMENJd2dBRG5TbmMwbWxrNzJGOTV6SW5UTkhiZ3VWMGVrd0FFWnF6dXROTkhpNHJPM2UwVHpHTHVtaE1JcGlBQnBFUmc0QUhPbE81cE5MSjNzTDd6bVJPbWFPM0Jjcm85SmdBSXpWbmRhYWFQRnhXZHU5b25tTVhkTkNZUlRFQURTSWpCd0FPZEtkelNhV1R2WVgzbk1pZE0wZHVDNVhSNlRBQVJtck82MDAwZUxpczdkN1JQTVl1NmFFd2ltSUFHa1JHRGdBYzZVN21rMHNuZXd2dk9aRTZabzdjRnl1ajBtQUFqTldkMXBwbzhYRloyNzJpZVl4ZDAwSmhGTVFBTjgrZkpsOVM1ZlJmNWZEa0kvOEFmMmZqQjVlUFNmSU9OS3R6U1hlMmt1L1poZmVjeUowelIyNExsZEhsTUFCR3FzYnFTNzIwZC81Y1ZuYnZhSDVqRjNUUW1la2ltRjlQNTgrUEw2bTVuUmY1dkRtZXcrZjd0bjcrdnIvLzJRPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUhnQUFBQWdDQVlBQUFEWnVieElBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUTFJRGM1TGpFMk16UTVPU3dnTWpBeE9DOHdPQzh4TXkweE5qbzBNRG95TWlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0ZkcGJtUnZkM01wSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tJd05EUkdOa1ExT0RORE1ERXhSVUZDUXpRM1JVWTVNVFJGT0RJMk4wWTJJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa0l3TkRSR05rUTJPRE5ETURFeFJVRkNRelEzUlVZNU1UUkZPREkyTjBZMklqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZRakEwTkVZMlJETTRNME13TVRGRlFVSkRORGRGUmpreE5FVTRNalkzUmpZaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlFqQTBORVkyUkRRNE0wTXdNVEZGUVVKRE5EZEZSamt4TkVVNE1qWTNSallpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo2NzZhV0FBQUFHRmtsRVFWUjQydXhiYTJ3VVZSUytzeTJFUGtoclFKUUtFaXhOeXlJaVlscWFHQVJpUkZIRXFFV0IrRWhVME1RZkpoZ0tQM3hoUTZJR0ZWTVEwUjhhVVFFeGd2NVFVMUZNTEtMRVNFTXIyNGcxUGxBYUVkTGRRZ3V0dTU1anZ5WEg0OHpPN0xMZDNhNzdKVi9ZZStmZU16UDMzSHRlVTR6NUx4NGs5aEFqU1dBMzhVNHAzTy8zbTNBNGJDS1JTSTRwb0U4cGR3YnhhZUlJa3h3VUVaOW52Wm9jMGdLcDRCTGlGdUxJSk45akZPUVc1cFk3OWNnWHZ6Y1NxMFI3SmZFQTBVcEFMcHZubWNRMWFFOG5Qa2Q4SUxmazZWSHdNdUlTMGY4UzhkbHpsTjFFckJBK2VEbXhtZmlHbDhrdExTMFZ2YjI5UlcxdGJaSDI5bmEyTkQ4Umo4ZjVESXVKbGNRd3JGV0F1RFdMOVRtRldJZjNQWXRaeEpBSWpIWW4rYVo3aGV3Z0JWbFQzWUtzL3Y1K1UxNWV2bGNGYkhjbmNPL1BsSXpkV1g1Z2wrcEFsMC93bThSaU1lZ2tjWjB5MzRtaWo1VXEyaU5oR2E1em01aVhsNmNEd0VSY3hVbVhkcmFoejg1RWoxWjlDd2I1SVVaNUdXUlpWdGpHcnljU3hjZHFaeHVHMlNtNFA4VVBrY3I3YlNCK0xIenc5MW11NEcrSXEvbDlhMnBxekx4NTgvN3BEQ1dwcU9HSjVJTy85T0tES3lzcmsrR0QvN2VvcjYrM0xYVGtrQ1ZnNVpva0JWS1pqRXVJNWNKRS8wZzhUSnhNSENmNmZ5ZTJ1c2dxaDd3dzFpMkExRTBXamFZUnF5SC9QRmllSThTdmtUYWVjcEI5T2ZGOEVXZDhCY3M2bm5nRHJoY1FUeEQzRVQ5d0NCaUxVSCt3QW9HQWFXcHFPaDNMUlBOTDd3Y1BlelRCN1dKT1p3YVk2QVlsWXgzNkY2bitYMXdDTUFzTEsrZFU0OW9GeEVlSTMwTDVUbXZ6SGZFYUIvbWZxTEdYb1RieHA0T3NWbXdtamNseVhHbHA2YkZZQ200UUUyLzJxT0M1WXM3NkRGRHdrMHJHTStnZlRqeWtydFhGa0ROVGpmMUlYSHN2amhqa0ZLcDZHaCtLTVh6cTN2WWdpd1BHRWlXblNtNnlzckt5MzdMZEIwY2MybWRRclpPNEw0YWNaYXE5WGlrbkNqNHh1NGhQRUI4aXJsV1JPNXZaTlM3UHladnZqbWhCajdqSkRKU1JENm81azhRNEoxa1JyejdZbCtSeG1RQXU4RHdtOHZJNU9BRUJOWTVOOEMyaWZSRCtOSXAzaVhjUjN6RURaZEJPTmY5RnVLenhhTThtWGtnODZzSDZOSWkwY2dRMno3VmlET2RCTHllcUVKazA5M2hjdE5PeGt1NE1BL3UzTGVwNTdkekFZbVVLTjZwY251VmNoVlBkYVRPL0U3bDRGTVVJMW1LaENWWkEzcWVYK0lKTkVHa2xxdUFKNG5jcmJoQUxYV3IzVHhnQ3AzaVRLdTh0VmNFV1c3aDdSZnNvL0tOWDVHUGpkS24rVXBkNTJ4MzZmemIvL3BEQXB6clA3UUdjVUFzQnZZZ3lYNFZmY1FMN3REL3dtM2Y4bFVOQXdRSDQwSnZRWmpONlBYR0hNTnVYaXZHdjJTZ3J1bzZ6Y1pMOU1NRWw4TGsrNDdFOHE2eUNVeFV3TEE1bXhNc09jOExGaUo2am45ZFdZUUVXMm96ZENwTmlSQm95Wm9qNDRrYWhZTWI5UXNITGxadmFiRE8vR3B2N2lpUStreTlHdWhZWDNJS3NwN0REdTVCWXM4S1g0Tit4eEY4UlpPd1FjOFlnZUJrcStCUTU3SFJ4YWlkQ29mUEZ1SjBvbEJqMXJydHdZcVBZQTUvYmdYWHJ3MFpabEk2WGMxUHdKQVFpZGNJSHZ3WGFvUmcrYXR3UVV2QmZDSnhlRWNIVzdYamZBblhTTmVZcjVXNXpTRjBXcE92bHZLUTFOeUt4bitveWJnWXFNbk1INlZrSDh5dlVkbFR1b3VCWVk0Vm9mMkVHL25CQlk2SnFmKzRnZjA2NkZPdzFENzRhOWRGdE1GVmNCZUkvaWVVUCtGT1FKOVloU1I4c2pNV0N1dmtoVHRXT3hDazdpQUJxTmRvWDJmaHBPNXl3T1F5NmdNS3h5N1JNVjNDMENuTVAyQWNmVlpEQ2ZIY3Rxa0J1Q3VhaXdxd0U1SE9XOExBeXk0d2Y0R2Z0RUswaFc4Sms3NFJGeUVmd2RtczYvVStpWDVPR3BhR1E0ZldlQlFuSzc0QWl0US9kSEtNR3dQVUIvaE9rbGFKdm9jbzB1UDdjZ3JRekdiRGl1WjZ4cGNYdTd1NUVGVFhjNGJmeDRFSTI2TWNndnU0eVp4VXNTOGptMm5FVVQvYW8vanlYVFprZkkyYVNjd3R0cnA5VmNDZ1VLc3JJNzhFK244ODBOamF1Q0FhRG8xdGJXeVA4YlRPTzNYMU10RGtET0NETTZDR1grYzN3bzRVWXo0RlhwOHNjbHYwNE5nTFhocXN3bHo4eXZHOEd2aGwzcU9mWXIyUThTaXdUMTVzZDdzVUZwOXZFd1F3aUM1RFhPUmF5S2lvcVRHMXRiWStGblZlY0t1WDUvZjU5cExSYXk3Sk1EcWxKazN4cHVHY09LVnpzTXltK1ozOXUyVk1iUmRjakNreUZtZTQyNS81ZlluS0lBMzhMTUFCU1puTnJWbnNvbmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQVlBQUFDWk0ySmtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcENNamxEUlVGRVJFRTJNRU14TVVVNU9FRTFSVVpCUmtWR05ETTFNemxCTlNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwQ01qbERSVUZFUlVFMk1FTXhNVVU1T0VFMVJVWkJSa1ZHTkRNMU16bEJOU0krSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tJeU9VTkZRVVJDUVRZd1F6RXhSVGs0UVRWRlJrRkdSVVkwTXpVek9VRTFJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa0l5T1VORlFVUkRRVFl3UXpFeFJUazRRVFZGUmtGR1JVWTBNelV6T1VFMUlpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCt1WGhHZUFBQUZSSkpSRUZVZU5yc25IbVFIVmQxaC91OTEvTm0zelNqWFJydHRqeXlMVnRlUU40VTJVa0VOakVHUThxRlE2QUNNVWxWU0NvcC9vZ3JDU1NWVkNxUUFMRXJvVWdCSXBDdzJCQVdHem14a1l5TkpkbllTRjVrTGJZMnk3S2tHYzFJbW4zZTNqbG4rSTU4cXYxbU5BSW5sUlRkVlVmZDcvYnR1NXg3bHQ4NTk0NVNVUlFGeWZVL2Y2VVRGaVNNVGhpZFhBbWpFMFluakU2dWhORUpvNU1yWVhUQzZJVFJ5WlV3T21GMGNpV01UaGo5eTMyRitzL2N1WFBQWjJGbUM5VUpEUWlkbVViNzd4RmFJZlFGdm51MzBPZUU3aEs2VE9qRFVSUmRrMHFsMXNuelB3dDlSR2hjNkY3YXVFamUvNTdjUHkxMVd1VCtMMEsvSzdSSHl0OG1aWDhveng4U3VrRG9UaW43akpUZEpNOU5RaFdob3RBUGhKWnJXMEt2U1oxR3FmT3dQUCtWMENHaFhxRTFRcDhRT24yT09UVUt6UlFxQzUwUUtrMVZXZlA5MHRmUEdEM05LeVcwU09ncUdMWVR4aXV6dW9UeVFxOEtIUkRxNFJzZHhFOWczRGgxWGhUS0NSMFZ1bFhvZlVJL0ZGb3BsQkhxMC9HNWZudGxvSWRrd01Nd3FGM0s3cERuajh2emJCYTh3UDI0bE9uelF3akVNcUZuR0U4dFRIK0o4WTh6cDROQ1AyS2hzcTVmN1dlcDBCSWhYZUIrNXF4MXJxYU96bVhmdVpoOVZxS255V1JkeVRaV1VRZDl1MUFIbmVoZ0ZnaDFDajBtOUNtaHZYdzdLa3daRkFhVWtiQmh5dlg1aXpwb2VUY2lkVTdJUFcwTU1FbWcvUkcrMXpGOFg2VlRmaStVT3JWeVZ3bU5ZUGFZL05iRlBDWlV3N2lPeW10dHN5enZMbGJCa1B1RGNoK2tyd0pNM0t4alpXeTZTS29wdjBrZEZZckRRdXZneFdOb1FTc0wwaDhUanArYjBaRXpHOFpVSmJVNU00UmVFZnBQbUhzRTZVcnhYUU1xSDhHOGR0cXNSNXIyQ1AybGxEOHE5eTFJZFprNlRXNmhkV0dhcWEvZmZWaStlVTd1cytSZVM1Mk05SkZpZ1RKOFd5Ty94MmxUcGZrMUZyc3VOdjk1VHFKMXNiNkROblJqY3E2a1hCZnhCclMzbC9sR2I1WkVCd3p1R1NZN1IyaTMwRmFZZkJEMUhLdnluWmJORjdvUkJveFQzZ0Z6dm9IcU5pRmRNMkhDYjNEL0NZdmFBTE4wWVo4UXVnNHBuSU1RNkxnV09tWnBuNHZkSEx0a0VYUlJodVErbDBWS0l6ZzNVTDlDWFJXVUhkQW0rdWpDdk16QWxJd0lQZW5NNU5RbVFhWHNQSnloU1ZmS3FmOTBuYWovSm5LSXArTGFQVnZ1SkxQaTNubnBUbk0zRGREeXRIeFhrZStxdFo4MmM4Uzk0dXBZKzVWcHpzVzBmQ3BKVnRQVktuMnBSdldkajBRSDAreWcybFdaUmxrMFJkMW9pbnBsVjE2ZW92M0tOTWYxODh6Rlg0WklMc0xPcS9UZmZkNk1kazdxVGJtcXRUZlZFUWhmdjlxM2s0M04xMzB6eCsrdVdkQXdsdUl1NmVkMndNT0cvN01CaTZuNC80TkxrZFphbktuYTdTTXk3dHRrL0FvQjc1YTdvcFZicWtsMHJiTi8rZGk3VE16V212MU1vN3FwS3FZbDQreHl5dG5VQ25Zc0ZiTzkwUlM0dElIeG1ja1lCeHZIeDlqTTNjWXlEblkzMjVsMTlqM2lucUd0M0RSd2NRMTlkRE1PSGRPTlFvOEM5VzRUZWx6bzczSGsxNFl4STcrQlNsblF3bFp3NnhpVGZBZGVOd0FOUEl1blg0ZW4xdlpleGt2UFkrQU5yTFRoY0czN3Y0UjJDZjBPa0RGMDlyVVZiNjlZZHlnMnR2ZnovUkVRd0dHdytBdlVXMEhVdUlZMkZDdS9GVFJ6RDJoRkE2eVAwL1oyRUZNSGpIcUwwQ05DZnd2RDRsZld6YTJGS0ZJbDkzb1c4ekdDdWp4OUJXRHpNSFF3N3dZbXNwQ0lad0hoc0s3NGZVeTJXMVJoTHJib0pTZEJWOERVSVhEdVd4bjR1S2lSNHMyU2ZLY0R2SkQzVHlOUkNyZFdBdU8reXlJcURId0hqUHdIYk40MTBvNk9yVm5lM2NNaXZVZWU3eUpnK0dNbS9WdFM3M1lwLzRvOC93MTlhQXJnTTBKL3puTWZrRTRYZlNQWVBZMTByaUlXeUZaaDhtcUVvSVo1ZGlKNGpaQnB5QnpwdjlVRlpvcTFCOU5PaXE1aEpSNWxSZTlIRW42ZDhGaWwraFdaeUNtK0dlRitBZ2xyWVFDS3EydTFudERqQ3JXRUdzbDFiTWRFbVBTZVljWDEvbDJwZncvcXByOS9oY2tIUEtlbG5mMW9qQTcrMjJpYzR0K2w4cTJadFI0azNkQ0JwZ1FHNU50VlV1ZFM2cytBM2labHFpbC9KL1JSNXIrWnhiQkxOZURYWU9ZckxNd0tjalhhMTJlUlhndnhaMnJFNnVhb0FwQTJSamZKeXc0WTlUQWg1NCtGOWt0NUU1QkZCMTVndGZyTTVzbjdFaEtSWm1FaUZ1NDVtRkZoOVkrVEVNcXlFR1puZFlFYTVYY2RhRUNsOVdYNVBVWkVxZTNXeS9PWWxKV1Ivb0MrR21pN0VaeXNHcklhYlREYmY1MlVyMFR5bS9tdUZrSHBrZnBxWGg2QXdiWGtYeGFoMlJxQ3o0STM3UzZKZGdJQmVSTHQzNE5kenlBUVoyTHhRYjJaRHMwWnRCRWtISGZSMFJINXJYaHdzYno3TVdpZ2lVNEt6dXcwTUZIOVBrdW51MkhrYVNSZ0tSR2cyajVqYXBGRnk4anZvc1BEdGJ3UCthMTlyU0thczM1VjlTOUczYnZ3N3RmQWRJMENROW84SlhkbHdIT2FGMkU4Qi9oVy9jeFRUa1AzRWxxdlEydDBFRGVqMFRiUGIyRVdTaTVGb0hNYWtENVZJR3JNcVFNcFF4L2xtTU1xSzdOYzVxME1NM1RRQVJIWEdQYTd6VEc2Rm1rZlpYRGpKSWhTMUIrQlFWbzJUL3JvajhHakFSeFhnS1lZRTl0cFk3N0xOelE1eDdmS09ha1JKM0ZiSFJyWjc1Sk1oa2lPMDErN1MzM3EyTGVoMVZ2eEoycnorMlV1T3lqdlpxNGxLTzBRa0paM1NQMDA3ZFU3L3JSYnhWQXFuTkU4Z0lva2FsM1I4RkZYVCs1RkJsbHlrSzZDaEZkZ1prSHFGWnhUREpGS05STTVvU0VHMUl2TnRxU1Iyc2psOHQ3bktDYVNWbEoyTGFiRlVxaXpZVmlBWDNpTmNieUFwTDZHT1R2cGdwSTYrVDNBOHppMmVUNzU3QkV3c0RyYnk4MnhhUzZFL1BVSmN1Zi9pakEwMDcvT3QxL05tOU5DRGYxYmtHRE5zU3hnRERxbSt5MnZFR0VTU2tpbWxvVW10YXA2Nm14d09IV28xYkJiVFpXR0ZteHE0QlpFR2E4SkhFMU5OdWpBaEw2TXM5SlJYTVVpS3BxNTBoZ3RaZlBwTjJRQlQ2SjEyNUZPdmRUWm1ucWIzVzNpdTFvZkZLcGZvZTR4L0pHYXdVZWtYTFdyQ3hPNVdaN1Y4VjlCNnZVUXpET25QZTVpZ2dwYVczRDlkRGhjUHBzMDhrVGFXTnI2NjdTYlVCWjFLbHBrcGc0SUptWlJnUnhPb3NYWnloS3J2SjRWMXpyUFk2TzFybnI2WmRMWldxZldCMW13THZMTVdiVnZ2TGYwWTJBWlFha3o0SkwyT1pmK0RIM0N5RGxZSDhUTVliejM4MjBOdHZwcHFhOXcwWEJ2bnU4S2FHU09NZFpqSW5JdXNLbTRHQ0Z3M3gway81NUNDN3VRL3JHMEcyaUZSalBPcTFmQWoyMjZlbXBhc0pQZGp0RXB2UHhDMUxBRmlMZ1A5ZFBWemN1M25kanR3Tm5pblRDaUtPOU1VblVENENCTXl6bXNIcmtvTk1DZmxNM3VJaGptRTh3bWErQnlwOUJYNUpWaTl3OGdETThqcmJmU2Y4UVlCakIvNnF6YjBCSXptZVpIeW94aE9XWXBoYzIvUitFc0duUWNpSGVsQ2EyWkRnMG9McEhIbXh5amkweHN0YnhmU0dmZGROSkIwajhBL0YrSE01b0hZeU1rN0ZXSDAxOWxsOE5uNFN5WE8rUnd1WmJucUpkM2k1bU9iU2JyaENyQXl4elVBeU4xWC9JV0lzL25nS3FyaVFIVzg2NE9wdlU1cmMzaWMycm82elFMbDJGdXpmQWhaQkZic01kMU9OSTgvTFFvZUlNNVJaOWJYWVVYTGpwc3ZZS1B1NGtHMVduc1JacVhHQ3pDcWJUSS9TRHFZNmFuRjN1c2JaeWNaRk1nY05KcVk2cGh3TFhPSklSTUlQVjZRbTRDUHAxRzBpS2l5NDNnWG9Wb08rUlpNYm5hNktWUzkvM01NODBlWkE0R2ExdHAvSVg2a1NJK1NYK1gyQXJyUUtCVWlyT002OTNTNWhVSWwxMDdGR3JpNTY0SGNnWm1vMXRocks3Q2xUU3lBTE9SQmh2cXBkNzhRbGIwc0RrbEtUdEtPNmVyNUd0ek1IUzBDcU56Z2VmYTYxYzk3UTJ4WUtyU0F3UVgxbzVLM3d4OGdVVnl1c203R1RPaHdjUmVlWjRwOUFHaHQrdVlwWjNQS2FOVWNvV0dXYmdKekkwME4rSVh1a2dQYUwwNjBJck92VU4rejJkY2VXbHJrZU5qUUpDM3llV20vMGlGMUNUNkQ5U202a3BJcFc0YXlhRmFOVUNVUHRTL0hRbnRkeVptREdhZHFiSWJrNEdQWlNlZGdYT2tFNmFEU1FjdWN6am1uR0taeFJ4MG9lMTY3T3RHRU5EMTVHYU93cFJia05ZcnBNK2QyR1gxRlMvU2RoYXpNNFNHNmxqVmZLNzhHY0tOWm9QZEZlNTE0b042TUhGajlQRVNrbDZKcFhpL0NUL1Z0S25FdjhVWXZjUGxBYmJCakNISHpERlVzOWZaMUlvVFJrTXF4Y2syZGhVaXNvRCtYWjFqZUltRk1PSFdQays1ZW1mY21ZckxTSUI5Q1ZQMSt6RDlxNFR3eTRCNmxrYmRRcDVDMjg2aEdlMXlYMHk5SW82dkZWdDhNWWltQ2RpcXBtUW0ybk9haGRYeFhTTHZWbmpOdEdNSVVuOGovV3Q3R3d3ZVBZL2s2WXFiZzFMMWVRVTdXSTd0VWd6NWJTT0hKeXRWOXRleTNET1RwQjJWcTNrUWhHbUJKYWdNaVNoK3ZrWHF2SjNvOHhKQzUvM2c3anlIWmw0aTl6RG9jdElhSU8zR051ZG85elRwZ2d2Y1BOclpHZEdqRWUxeWI2RXZYZUMxeEFnUE90UXhRdlRhUjh3UnYvNU43Yk44OTA2OW40VjNNSERRclU2ZVFRYUVsUWFmN0YwVVM3UjdDZlhTYk1tVytpcUR5UUNuY2s3aU5UR2t1WlY5UXBaMzJTVFBmeUhsMi9EMjI0bk1zamdmRFRTdVZ1WW9UR1c4TlRpMlBUQjNJbXVuWjBqVWxpUFZyYUNEZWVEZkdjeHhEK2REMU5GcjV1NVBOTmttencvSEhMWnF6MUdOZEt0b2F3K09XZnRiR2JyUTFBNjNGQnlUeG1Id2FCWGJXM0t4ZkIwU1B4YmJreXRoMTB1by9SdU9NRWhkZzBzbThaWVkrZ0pNQ1RoQW8yUFlpVmF0SnByTWdvSmVrR2ZGMHMwdVVrd1I1WjVpa1MvQ25pcHFPQUQyVmxRemduOG9ZRk5yd05ScDdqZnk3WXNhM1RyTnJaZTYyd2ltd2tuMkxaK1U1NStxUDRsdnQ1ZmoyMUF1MnZMM1VYYytvMno0VWRPRHNWWE5ZQklLazJ3SmVYaVh3N1pxbnZlTDBzNERNR2dEdVdLOUZtSVRlNW1vSW9JUzJUbUxRbTFyNmtMdTI4Z1IxOEdnSnFTdmorQ29nbm1JTUpmbWE4WVJrUC9nY0pEbXhOZmpSNHJZZFlPREhvWjZoOS9QTGxReGpKL3htR1NIdU9nTzBZekg5ZzRqSEZsRWRzOTNsR1ZuSmVYaG0rdGprVHR2Y1RXSEZUVjErWG1pekhVd1FROHBmZ29zZkllTE9pOXptcU9UYlZVNFI0NmhFOGU1RzFqYWhuUHRkU2F2RDNOWlFDdExUbHN0Mi9nanptYW84MTNNMk5OWTBncUlLVGZKRG42SzhSZlNrNXlkbUd6N3Z1eVNSUlZuT2hxeGJiVXVXRkZTSnJhamdzTlY3RmlXcFA0c1RpYU5ja0J4RFhZL0pCRWZPaE0yN0VMbWlFUlZGK1ltZzFhMG9TMW0zbzRqWFdGTVFFWmNDaUtOMmZDYnpMWGtNdzZDTm1hNFJkSnlSU05QWTZzbk8yelVvMGduOUdqQ25KMWJsZWgxZnA4OXo1YkJ1WmlVcXdxM3Nhc1F0K1ZGYk9SZ2JIdkljc0J6Q0k4ZlF5TjI0cGkreGpnK3FYa1BaUlRJSXVkc3VXNkVicEt5a3lSd2NnUXdEVEM1MDIzdW1sYTJ3RHc3U1pwQ1dqTk1NSFM1NWxITG85UHZxTXVQbDF4a2FoRnZDNEtvbW5FNTIzNEhNRWVwOEJ4U1hJa2RnOG9EeGM0ZThjSmNhQWVIYkQvUmZaOTJ4d3ZpUnhmbWtWVFNDSE0zR2JXUElvMFBzdGlqbUlrU2pxNmVnR291VU11Y2JBcUowNU9qYzRDYmZlWkhMTDlPZWRudDBNd0hRaGFkcEZzV3I0SnpMOE9zVWJmSUphQ3dSY3lMMlgxL1ZxR3dmUGRuYkFnZllBSFRQblJNeGM3VldYN2hiRURpb3FsWjdueEZoY2FHTFdRMngwRHFzNW43MHRqNWpFdXhvZjB3NUNDSnFuVTRyQTRZZW9RRjYwU2k3Z1NaK0xNWEJVektmcVE2aEdGbFo4clNsUG52UXN5UHdWQTd4bXVRMUw2dE9BMDJzM0xLdGFYN2l1OERuY3lUK3BvYmFvQ3ZFMmRYd2lwSHNTSzNYNmVyMXU4YWJDV3A3Zy9KMUtNdTdUNlg3ZFJWTzU1SEtyVWIyM3NkYlk3aEFKczQzZk1Rakw0RWU3allJUlBkQUZnQTg1L3lKb0hkb1E2Z1pKczUzdFFiUFhzemZrR1BRUXhqMWtKM0Ruc1lPMTFEYkJIQ0I4dm1oVzRmYzh4cGFjaGVhYzd0SjFiY0xuZ2hqS1VkNHhJZHVFNU1sWTFCRlpjQ3pXTVA5MVk1OWJUSEhWUzVnRXpYaFVTalA2RDlUK2pCY3RSWXBYQ3RPamhnVmk5YVZDTHFPeHhMN0h2QjZMWEZEZDc0OXprRnY4OUhJbTJHYzM1WlRGU0ZaeDhyR0pUTGVBRGd0dFZxYUgrVXZIVmtaMFBVektaY0lqNk5LcHh3eDJiTGJqc3I0d3orS1JxMlRkS2xOTHJONVNiT3BqYlpVZmtxOXZoN0pPdzFUM3hBMDZxa0lPdlliTjNGWUZkbzlneXpjb0t6SVNIWndZMHczRHR0WGRBYTlnWW5RbXNjbUJlYWNkckxPTXpiNnhKaUZyMzJFODFaSUdaTXpMdHYwMFNsR1pmdlNXRVNtOUVvQy9ZbTBKQ2hqZ3pHL3JqYmRJMHM5SGJxcTVtc3d5Umtackl3QzdEWlc5eWtXb21vN0x5R09xYTlUSzZOQlY3aWJGakFkcjE2NlplbGZDMkRmb0prVUFyVHNad3MzbjdzOUh4UVN4SFVNWUpaVUNFNFpMZys1dEROckF3eXJ6UmFrZUZQTmV4UEx1cWNaSnMyMStFQUk3ZDNHSkE2YllQWnBWaS9FOW05dEVNTzZUaWV0aDF4cEU2dnAxVGxRQUNOZHRxSFBQQVQ3dmZObUlaZmxicDZGT3VEQkM4QnRpemxvTmNaaXo3SkVUK0xrMndFd2czYjdvcmxIekF2dXZsNU54cVhOK25pS0VNSmlRNWo2Q2Z2Tmx4UEVXak5OdE1CRS9NSXdpZ0xZU2JraklPM2FZVFFrbTBYT1JONmxHL2EzSzUrbUhZT3BSU0wrREl3cmdCc0NqaU9kUUExZjYvUW42SnlENUhKdWdrNy9RMmtmRDNxZUJ1QlJNQkF4bkVTWnNQeURvTnJpbEVoWkE4SEZiMm5EOXo0NWpxbmM4eGgySlBZOWc3SDZHYnFqVGo3UG9KWnN2eElIZlZlWk80RjI3bkJsQnpqM0ViSVFabEdkbWgwWStGbStpOFJUeFRjVnA4S3pZQ1pqakZXTVd2cFNyV0p1aVVFdmozZ1RNalhhZVI2d1B5M1lkd1FwM2dzaS9jeG1LY25SM1YzNDFvV0lXSmJ5eEpRRFphNjVOdVhRVG9EbGlaMUlDS0RaMThCT3ZrcGZiUXh1Um8ya0FjZE9yRDBRanVRcStTaTNPMjZPeTlsbHhQU0QzS2Fxb1dkKzV5cnEwTDJYdEtsYWlabWtDYlFITWpsOG51Mys0c3duZWV0bXZDU01wMzNMZ3R0aDluZXNjelZ4QWtpSE5LeFdGTG9FU1p4TFRCcnA5dldzdXRkN0hCOERLblVQTVlkbkVwdHhTd3NJeWQ4TzVIZ1huZXV6UUtRSHJjWXJSenorbTNhYnVUNDJnVk1XQms0Vytvb2x0YTg5QnEwVGI5ZlJKaXZtYnNKeE1NY3Q1REQrQ3dwVWMwaHZ5cGxTMGhZMVREV2ZnS2tHMGdzcVJSL2ovYlViendvOUgyMFZhWC9uNlQ4SDZYc1hyNzlzcW5XQUZIVEhHZkkxekRZZTZWc0gzYXVqU082UnptQmVXcVNHSDhaQy9BZDZ0ekhlYmhPSEk5S29rNytNdERLcDkyQm5ERTJXZnRkRktmbTUzRnlKOHZSc3EvTDh5N3c4dzlkQmpHUDZkcm5FSVcyYzE4VlhLM0IwT2ZsL1lmMGowWVZGVkZGTmZWcm9KbWNNM2xmQWpPclg5a0J6dTVFNDU5eHh5SWVrSGVYY254WlFjS2o5bGRaSFJ4N3VvcGp1dHJwSjFHcmp5QnRsOExzWGM0aFRYYlozLzNsSE80TVNmSm4zTGs4TzVoU3FiTFBHTGkwYmRyQnpndzdQaVZ5RFpuWVh4cFVYQjRqY2pnNVJkUWFPZXh0Mkt5V1hIUXhGaVVIVmY2Q0llWHpROXlySmVReUx2MVFEaDBnM3dWaytpQjJUMDl2L2p1TTZNWkpERTN6N3pyaWVZMlNBLy9uK3F1bWFuOWE0YUZVL0YxNWtqYWlLWDZmYTd4VDFaL3VIOWFVL2RqOERzdVRzanBMU0t5UDQ5ZzJBK29IZ3VUNmhTNHYwVnNKUyszYzhKYnprT0RrbWlhamJXZGJQZXVtK0M1M2N2M2lWeXI1LzZQL2Q2N2tmNkJKR0owd09ya1NSaWVNVGhpZHNDQmhkTUxvNUVvWW5UQTZZWFJ5Sll4T0dKMWNDYU1UUnYrU1gvOHR3QUEvVng0SDJjMk0yZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRm9BQUFCUUNBWUFBQUNaTTJKa0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESUNoWGFXNWtiM2R6S1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRlJEZEROa0l5UWtFMk1FTXhNVVU1T1RJeE1rRkRNVFl4TWpVMFFVSkJRaUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBGUkRkRE5rSXlRMEUyTUVNeE1VVTVPVEl4TWtGRE1UWXhNalUwUVVKQlFpSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1ZFTjBNMlFqSTVRVFl3UXpFeFJUazVNakV5UVVNeE5qRXlOVFJCUWtGQ0lpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rVkVOME0yUWpKQlFUWXdRekV4UlRrNU1qRXlRVU14TmpFeU5UUkJRa0ZDSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K0huTExzQUFBRThCSlJFRlVlTnJzblFsNFZjVVZ4eWVBUkdVdEtqYlJLbEpjS2lKeGdicEFmYVVDbGJxZ0tDb3F2S3BGV3kyeTJNOUtzY2IxYzZOR1dxRlZ0QkZCUUt6R1FwR3FhTFM0MXhJclVpQVVVNlNrRmJVUklTd0s5SnptTjJZWTduMzN2cGYza3RoMnZ1L3dYdTY3OTg3TWY4Nzh6ekp6TDNrN2R1d3cveSs1TDYzMG40S0NndWJXcm9ORWpoVTVVdVNySWdlS2RCYlpTNlNOU0d1UjdTSWZpM3dpOHI3SWV5S3JSSmFJL0luUDdjMmhNOVhWMVNaUE5ib1pBTjFKNU5zaTN4THBKL0lsa1QrS3ZDMVNLZkkza1grSS9BdGdQeE5wNjhqZURNaGhJb2VJOUJEWlRlUjVaTDVJMWY4cTBBckVHU0pKd0YwazhwVElNeUpMUlRxSzlBUzhnOURtZGh4WGNEZUxmQ3J5b2NnNmdLeGtjSFJndW9ra1JFNWhFUFg0TkpFWnpJVC9lcUIxNmw4bWNyVzJRZVJCa2RsbzZVRGtSSkd2aUt4QWxnUGVoMmkwbG53QTc4QWdITUtnSE1vQUxHTFFudUk2SGRTTFJYcUwzQ2N5VVdSdFl3SGRxaEVCM2tOa3JNZ29rWmRFemhaNVErUjB3UDRtZno4bk1sWGtkY0RQcEJ6Ty9RYUkzTXBnVFJjWklsSklPNVp4N09iR0FMeEZJNEdzWVA1RnBBK2RIeTV5SEZxcW1qMFBnOWVQanIrc0lMZHUzZHFvMkdML2RvK0YvS2JVYzYvSVdXcnJSVzZCLzVWZUxoY3Boc2QzcDEyanJXT1FxNUpyNnRoUFpBcGNxNTFaZ0RaZEpiSlE1QzZSTjROQXkxYlp1bldyKzJjaE0rcFNrVElBUDBCa01yOWZpaEhPT25Ya1VxTUhBT0lLcHJMeTVqdHc1RWtpNTF1UVhXMTBRTzZJTWV2bzNOT0Nrd3lvcjB2QStmNDlsU0orREpmWGlQeFo1SGhtMXpSb2E0d3E0QmRCbzFzeS9ZY2oycGxmaVJ5Rk5zMjFBS2kyaFdpdmdsVU9HRlVPc0JYTWpLb0FkNjJHMzVJQWJvRXZUYUhsM2RGbXJXOEVObUUyeXZGZDd0a3NOVnE5Z0NmcG9HcnVWb0tITldqMVhKY2FISkFIZTFwYTVHaHZsVGNBRmtTL2xIS2ZZZ2Y0SXE0dkRkSHlkN2pmSktqc0JKR3ZFK2k4akZ2WjdJeGhKeHByTUR6RFJCNFgrU0dhdk1rRHQ2TUhiQWxBR2NBWnpHY1I0dE9FV3hKb2V6bmZMZEExQUYvczFGUGsyUUxOUVR3QW5WM0Y5K0VZYUFYN2lPWUU5RjZBdkJ5MzdSNDB0RGVhNlhObHNUM3VhV1NwcDRXbER2Q0dlNVlEcWxzcUFEakI3KzVNS1hPdUwzRUdxb3ZYTGczWmUvSDdjeGpxdTdsZmo2emtPaHBZT2hEaXFyVytrc2hyZjVGdkVDajRQRnp1R0RZVFFBdkZBRlRpQU9OZmF3TDRPUm1nOVJVT3p5WUIzR3IrVHJTRXphaVZyK2NCOGd2TXpCWU9yYXhzS3FCYjR2VC9WZVFLUUc1TEF6ZDZJSGVoWTlZenFFQmo3UlF2NGRqZ0xNMnlLZy84QkhVa3FNOE8ybWluSFpaS3hvbHNJRStpdnYrK1JKZ25FTzQzdXRkeE4rN1JTWHcvbXFDak5nRGtja0NzY0RRc0VlS3E1YUxZV1ZMajhIOEpiYk96eWZlN2J5ZFgwcGNBYUgrVWFGdGo1anJPRmZtWnlERVlqNHRwMERvUDVGTEhWU3QyTk1vYXA0b21TcW9sQWR3T2ZsR0ErNmYrOU1Na3N5N0FPS3BYZFYxakFkMEZUajZMTVBaaDNLS3FBRTYyYmxjNWlaMjNBcnlJcGloV3M0djRUSVQ0MnEyaGtHZEZacEtER1VMQ0t1ZCs5UDBFSWVwbFBJU3pYeFhnRzd1ZVFobDU1cVJwSHFXSXRoUjViUzN6K3FHSUR5WGpXSUM3cXNyVFB0Y2NyWlJ4UFpIZWJBemh1QUFmdVJ3T0xPWHYwcmlHenVYSlZIa1BqMDhibWlOSlloaGRhblByME1UWUx3aThuc0FkSEpNcjZtaEh0dXRDdkl0SlZMdzV3THZvNkZqelpEcmdoaFVYeURqbnB6RUlTU2M2clhFTVpJVlgxMFBZb1B2SjA1d0lGV2FkT3NhTHZDTHlHaUJyeExmWk82Zk0wWXJCVHNORHk1WXRXOUxLeEtVTHNyM0dTa0FwYzlwYXd0OGxBUXFpTS9jaVU3YzZOQWxuSU92VW9iNWtKZTdjRUx5Tk13SzBwUWhOVHNSSnltakh0UTE1ZVhtTlN0QmFaMzUrdmdrSTVVYzd4dEYrZHdkb0ZQMVdETjRWT2RYVUxXUmtUYU5IWVduWHdrMC9DVEIrRmJod05VRlpNMStMTTlITWJKWUFEYStCTXBKb2RISEFaYjhrMlhRMG1iL3gyZFJvNVdOZHpqOFpCLzVvWExzZzdyUHB5U0kwSWxLTG0wcWozVG85aGJHenNpckVKb3pFRXprZnJkYjRZWEUyak9IRkJDVURxRnluemh1WldIdmI0T1lHZEpvZXpoNEFyQXZKbHhNcFhwa042cmdFUzZ2TDlxdGNrQnN3VGYyeU96TkdYU2ZkdnpITDFDMkZ4U2wyYjRkZkRzTm9MY1VkK3dPR2ZBWDlPZHBrdHBxeUNROGtTVnIxUEFLYkJxVkpkVTN0U0N5eGF2V0Q2YllxaGxkUlNGZzdCVTJaZ2I5K1lreVF4K0RqN3U4YzE5azNsM3ZjUzhCeGlXaXlLczJOb3MwSFVzL2dLSmN4NVBqRFVJZmFwUTlFQmpVVWFHM0lBa2FzdjZsTDVzZjJnV01Zdks4RGtscHZYYzhiUzRweUU1RmtWTkg5SDk4WE9kTVptRjRveEFZQ2pYdnhERmFnMmRNRmNBV21tZ2ozaURSbW5pMUxjQXdVa3psb2RZT0EvZzV4L2tBYVc1TXVINmZRUk9YK1NhSmRINUQxKzQycDJ4Z3pDQjZNVTllZTBNNUhBdDU3ZkI4SDdkd204dmRBTHlBdlQ5Y0hkVDF6SDdsdWxFOGhFWDYzTFhNWXlIa0EzakpUb0Z0alVSZmlTU3lJY3RkaU5sQjNGZDBoSGJ3TXJsTXIvaUcvOVlTcmpZbTNzV1c5M0VjMWQ1V0E5NXFwM3p5akZQUk9BTUM3OUYyTzZZYktEaGx3OVVKVHYvRW5EODdQQ09pajRKK1Y1R0hMczJEd2RZYmNKNTNyaEc4KzJmdTlQOXE0Z3FtOWk3ZmdpbHA4QlUrK3Y0ejE3MnJxZHA3cTVwejFLZHF4SFo2dFllRGJaZENYTjBrMHFZMTUxZFF0REFRV3U4TFNHVDdVQkpHN0Rhc1hPZGdDemxrUzVpckZ6Sk9NaE10MDZVdVhpejd4emxGdEhJWi9meCsrZXhUMVhZRG0vNHBqTnR4ckwvZklUNkhSL3dGS3poa3Z4L3FZekxZVzZNQythT3BXWVY0MTlXdU9vVUNQWWJyT0lQS3grWXNlV05XZThObjJERUhXbVhFRG1ub3JYQnprMTU0TDJLc1lqQzBwUU5KcitqRjQzelAxNjNucUd1b3ltbTUyUEVLdXFZeG9tM282andVTWV0eWkyeW02ODNsMkZIV294aXBQL2NEVTdmWjB1WFE1TjFxU1lVTjBDWDhtMC9oeUYyUVB1Sy9aM0luT0l2bnQ3L3E3SzM0RUtzZCt6b0M0dG1NMU9aazI4dnRwR04yb3NxNEJWS2crK3NHbWJ0Tmt0eWlnWjNGQlYzeG0yNnV1UklJSFlWelNLYjN4WTBlaE5UOU1FZWhvTm15RWFLaTZXYnAzK1hjUkdxWXo4U1k1WDZmdUJHL1FWaktORFM1ZnZ4dy9Qdkl1U2xLRnAxU1FDbWpsbWFtNEowazZiak4yYXlIN3VGdGJOVUs3RzgzZFRUcXBxeS8zTUtYRGlscnJFUUpXU3lJM05icXAwTGtCNDN4ZWdEWnV4dGRmUTRKb3BQSDI0Mlc1dkVlZ3RJaytwZ1M2VmdDNW4zRDFJaHovTmhpV2p3QnZmWXdJYlRUYVpQY2w2LzYxUlJIWHRaRzZod25JWDFaT2x1K3pSUDdwZVJadVVYLytDamwrVFFvNjA0RG5LY2VMR1l1L25ZdWlibWtuWnBuOUhtb01EVkhVQk9sQUMrbTBjdXBFak5HbmFNUW5JY2tmcFpmdnluRWRvUGE0VEpQaHlUZ1A2M1IzaklnYXBkbXVObnYxZFNYWnJqUG1FZGNZZStkdGxlUDN5TEZqbUMxcTdIOGZsRGZPUWpKckt6aTFRYXZ6bzRBMjhPSTFFUHROL0Q2S2k3ZWhGZTBnZmQzcTJrY2EycGVnUVhsK2p2eTlsQXJqRktXbXNYSk5vVnkvamlsZkd3SkNXNjBETCtKT0U3RzNnbmJjSjlmY0lkOVZBVzZFRnQvTGdWWnZobTVyd3dLZm9KMUt0ZmlrYWxSK2ErcDJJQjJJcG02Q3gxdWdyY3VZbHM4UzJNVE81RE03MUQwYkFqQ3pxQytzblZNd05tUHNZRVJvbzZyNkREbW5QM1VrQ0phbW1zd2YyVWhWUGdQc2pYR0J0aGU5d2UrNmRLVjdHYXcyZlViVTlSZFQveWphOWdqdENqcmNCWGRTNjNpTEpOQm5JWGJrTHV6R0FPcU9tMlBlUU5ieG0zRG5DTkt3Lzh3eXlPM0FZTGN3YjZtVkQ0YlQwQTEwY2pPdXk2c2tUOUlxSVNEdmlYL2RCM0FmTWNFN2xsb3lHSm9Ibnl6M09vVjJMU1E4L3pSR0UyYktBQXlWYTArRjdzNW14bVpMcTlzQThucHMyWVowY3gxYkdaMTljS0U2WjFFRGlxVGpGL0JkWjh1aklXMjdrQ0JITmY0MGJFTi96bGNLMlN0T21DeDEzZTFrOFFaQ1Fka3Erem9Kc2IzRE5Eb3FxYlNHZk8vcVZGRlBtcVVRS3RpSEtWeGlkbjFNUXFmZ1VEeWZxZVJoNWpJTE5CZHluWUNYSUUyWlNKV2VwS3l3WUloMmZ5WERCRkpZNlFhZDdjVUFyczBFNkNxNDlGMXlCdzB0cmZDdGo5OVI1NWM5QmxoK215NEJZTjNOT1ExKy9aTnp6ak5FZmEreGFEQXlJczI1VWFyN0YxVFd5YVM1blN1aUhFSnVwaXNCeThlWkFMMlVrSHdKTjJ4bzZZbFdHb3p0UFNFRE1SNnR2MU1BMGtSVUsvbGM3d1V3NnJ0ZVM1UTREcGV2YTFoS1ZBRGU1aGo2YkQ2TWZ4ajRkQS9LZjhjRitpM0FxV0NLdE12QThMbWhlVEdVOGJHY3EwOXVWVHJBN1FGZ2xpNkt1YWVlMEVvKzgwT1NTM05JbFhaSCs0OEx5RiszY3BKTEg1a3NQVzFGT1lhOGRCRVp6b3lBZmhXM2FndFR0MCtHSUd1NVVqcDhLc0ErUU9MSUhZU0pCRXUzRUZ4OG5rc0FxTUlVN1gxTnpqbFQyckNTcUhTWVRZelJybTd5ZXlIbkxndnpEREowNjNxU1pqamVTV2J0a2tLT0FycVNSdlVpMGRNdnd3YnBFd0ZYb3BGS0dkYzcwN2NiR2p5RVhNbWQzclUxY3MxYWZPRlVvNm52N0VoSzU5Um8zZ0gxNkFDMmsrdXZFdG1QWUdLNjJYVy9ZS2hmSGxIME9aM0ZUbUpzVWFZYXJlVnBBTllubFU3T1pOU2x3VC9ES20rUTd4TWNqVHFkZ09JQWdKNFdjby9IMGRJRFl0U25nemhXNnVsRkdrRjUvaXo2T28wb05qWkhSNEI5TWo3OXlYZ2U3NFpkRndmbytZU3VMK0xxSFp3bTBGZWIra1hMS2FKWlQ4UFR0K2x5bGZ5OVhEN1BqOGp5emNMZ1RJRkNRcW1MejBmSjBXaWdvd3ZBdWpMK01wUzBMUTJOVFdtU1VJNHlGR1p1cXBQakFEMFB6Nk1RemJvd2pjYW9hM2dablZkdCtqR04wa3phVUFJSnpmb3RqN2pQQjdoOFNqTXpmWVBuRlowNTU4aTlyMEV4TnBNNjZFZ09PMXR2TVRpSjNNOFNYTTNwQWVmc1p4VWo3dDY3bWJoNlQyUGx1OFlNWVpWeW50WE1uSFQyQm9CU0NuaEJqazJVWTYrSDVDaFN1WWNUbUNHdjR5S3VJWUZVU0x0MEVIcHpUNlc3aHdCRFErL3orSzREL0h4VXZTRXBXRnRtNEdXc3drUHE3cVlPNU5wejVUcWRWUjlWVjFjUGlndjB0ekJZQjlQQmlWUVVWVFE0bUNGMTlKQkszOGV0MG82WHliR1BNOXprcUFadWtGeVRrR3NPSjFCcEFTWFV3cE1WOHZ2cjh2c3lKeTJhajllVVpLRCtLT2RNWmk5SXVrQVhrRlRyUnA1bUljR1ZMWWRDdFpxMmVFbUE3aE1YNkR3MDRRYit2ZzQ2aVVOeXVzeHpPSmIrYnpiNzF0RGRwSEpOSjdsbVgveGptL3phU0hTbXU1WjJoTnl6RTRNMG5IWXRJWFA0alBGVzNWTUFmUWNEckZHcFBnRnhFTFBXQmpCVGNZdDFwOVNqQXZUaWRIYjhLMGQrbjZtcFUrWW5wQnd6S2xrQU9uTGFoLzNPYjUxeFc4OWd4bFl6VytkaW1EOE5BYm9BR2owS24xOW42aGc1OTFnNWI2aDhEcGJQTFNpamVqZ2IwbjFZYURlTTFsZ01pcTRKOXZDMUlCMmc5TkVHdXlrOTRER0hsTnZLc2dDMC9iTTkzTjRmbTdJLy9Wc201Nm1QWENublZrTjdXOURTcmRncjNUdzVHMzdXN1hPcjVScGRaVnBnbkYxV21UeVZkUUhHNkVoR1M2ZmJ6ZW1Dbk81amFrR0FOd1JvKzFJVy96QzU1VUxDNmlQZzJ2M2tYcnBIcEFXRDBoa0R1QzhwMGQ4U3RDd21wZkNKazFmSkdPZzhJa1NkWHJySy9CS0daVld1UUE0RFBDN1FVZlhGMmFMTHZmUkcrclR3SkRKMDk1Sm9xNGthNEV3ZWYxUFN1Z0orcnNYN2VDaEdQamowN1Y3Wm5nbjJIS1dpdU9kSG5RZHd0NUpybm8xNytLTjBrbE9aUEtLc1ZscVhnbjd0dURUWDV4TGdvUHRaSUlOZWZCV2pQdDFjWDJxYzU3OGpydEZsTUkxZVI2RFJsU25TQlZrRFdzdFBTV3RlVFFOR212cDljM0ZLc2ZIZUtORElwUlFwTWJ1KytzY3YzY2cyYWtROEFOQXZpdW5hTmhob0piWno4VUFPQitTcHBBcWppbjBzYnJTdlZZMVlhaHlBUjZjNHJ3TXU3RzE0RVpQUjZqWHBWdGlRZHlwVm1icnRzck94dnBlUUYra1JZV3pzeTBrU2RMYmNHWUF1T1FDMWk2bC9mWnNGTjBIdW84UTQrL0s4dHJZbEp6T1BLSGd1NTgvUHBCRU5mWG5WRS9EMFBCWUdycVp4WVpTUWREcGY0M1J5c0RPZFJ6ZXdUUjBENml3MTlVL0RXaVVwcHAzRklacjhGSEhEN2JpeWIwT1pwaW1BTmt5ckoyak1BdnpzNTBqVSs1cFNCc0JsWnVmM0dMbEdLdUVBVk9HQTN6RUZGYm5hVzJGMmZwK1NCWGswR1RlMzZMRUs3NW1iQXRxL0dBOUxNNWJyaUNGMk5DWFFOdWM4bjV5dmhxLzZ0TlZqVG1kdFIrd2JEOXdwYTRFcU4vVnZHWEFCS3ZLMDN3ZTF4RHRXWnVwZmVtSzFOOEY1Yi9tRDc5R0ZodVM2SFBVa0NqTWZqRTR6OGZjVDVoVG9IUmhHTlloL3dGaG8vbUE4YnVDZXRsTjByTnpzdkplakdJQk9DdEJXcS8xVkFRYk5ONlQyTFdQbDNteXBZaENTSWZaREhXVzc0L1Jha2t5THNEMkRqTFB4c3FtQnR1VVd3RlVhMFYzd3h4TFdhckttdDl0QnA1UDJmYU1KRXVnKzBCVXBQSWNhanpyc3UwR0NxS1kwZ0NZTUliZDlLdmc0MHFwdk1EdlB5QWJJdVFEYTRITmFlcmdkTGRJMVExMzEvcmx2NVIwTnQxcWRDdWlpQUFCclFnS1N3WDQ5SHNDYU9Qb0JYTHlVWFBYWjBJVXVlZWxXdEt6dE9zM1ZhNDNMQWVXcmRHUTFicDlTeUFyNHIwTVFFQjRnQ1k4eWdvQXVEcUFDMWVpYWtBZExXeEY4cUJkeERuWE1Ka0UybkwrblpCdVFYTDQvV2gzOGdlUUZIa1BESjVDTzdBMkFONXVReFZZWEpBZXN6N25hTzdiVHVTRUF0eVdDWFlieHZoYXQxOFhiVjZBS1RaQzltUXN3Y3YzcWVUV1N2NFN2TitLWERpVzYrZ2F1MU5zRUF4ZWFnUDF6UVFER0FOVk5mUTZFemxiRHVWY1F3UjVJZTNRZDhnVEFyODBWRUkzMWp2OXFJc2UrVUVnVmYrdG1HVTIwNjNhQ1lXVEhYb1FqVHduVDlvaVFXZXNZaDR2MkFWazNUWVRwRXBPdUVOa1hJU3BOWElxL3Z6alhBRFRWLzhPaVlGOUZ2bVE1MDM4T1d0OFBiVmRBZElGaEc4RG9JT2pXVzEwYjFKV09mUGhhdlpwT2VCdHRzUUVhcFdxdWZDRzU0N09ZTVgzeGlFcjR6UDRVRHNsSE4vWC9MTFFuTHQwSU5FdDNZejVQWlBZS0dxbGFyUStVN2dPUWJSeURxQjdIZW1iTVN2ejM5cmlWL2JpbjJnTmQ0NXhPenVMOW5ISmxNd1hhejFIMEpkQlJnTG9EU2lVYS9UNGF2UW5wWU9yL0N5ZlZhTjB1MWhYdTFTMEhMekJvQzAwai9jYzJYeFNnL2JJN1lIZURGblNOenU2cXQ4WDlMNXdxb2FFVkp1VEpxQ1lIK3Y4bDkrWGZBZ3dBV1F2QnloVVMvTDhBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRm9BQUFCUUNBWUFBQUNaTTJKa0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESUNoWGFXNWtiM2R6S1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwR09UTkRNelExTkVFMk1FTXhNVVU1UWpFek0wVXpRalEwUTBVMVJEZ3hPU0lnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBHT1RORE16UTFOVUUyTUVNeE1VVTVRakV6TTBVelFqUTBRMFUxUkRneE9TSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa1k1TTBNek5EVXlRVFl3UXpFeFJUbENNVE16UlROQ05EUkRSVFZFT0RFNUlpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rWTVNME16TkRVelFUWXdRekV4UlRsQ01UTXpSVE5DTkRSRFJUVkVPREU1SWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4KzN3RERpd0FBRGNkSlJFRlVlTnJzbkFlMEZkVVZodTlybEFjWUlIUVhLQklSRWFOR1VURkdVVUdXR2dzV0xMRWpOcUpSSXlnV1ZBS0lCU3hSVklLNkVCc1dZcU1ZSW9Ja1lJMExCUnRnVkVDcUVBU0UxL1AvNWhzNUdlOTk4QXBGMXB5MTlqb3paMmJPblBPZmZmYis5NTc3WGxaWldWa3FLWnUvWkNjUUpFQW5RQ2NsQVRvQk9nRTZLUW5RQ2RCSlNZQk9nRTZBVGtvQ2RBSjBVaEtnRTZBVG9KT1NBSjBBblpRS2x0em16WnRYNmtGL0Fzdkt5dHFrZHAvbjVlVnRqdkUza2hSdzNFM3lYSFNodExRMFZWUlU5S1A3TlpZWFZMZVhIQ3Y1Wit5NndlZ3NlVnN5YjJQekQrY1h0cVhEWlZ2WDZIcVNtc0g1cnlYWFNYcHpmcTdrVU05TmN2Z205T2ZuOXhFZ3kxUXZqMTJyTDdsYjhwamtZaXZoOW1nNkdsRzNENDVkVHBiOGt1TVdraDZTaFpMdUxNSjZTVW1rWkdHSEpTVWw4WGZVbDZaZHFEcGZNa0x5YWV4NlF5K1dGc0VBMTBpbnVadFlHcUFBOTBpTzN4cEE1Nko1ZGRpaUxwZEluZ0ZRbCtNa3Z3aWVNYmkxZ3NWWUtYbEpzaFNRRjBpK2tSU3kzVk9oNmZBV0RzVHZPRm95V1RMYUFNWkE5QUplci9zR3FuNUFVcHhoSGpWUWlNWnByaDJ0NS8rdXVxOWtaOG5sa3ArbHFudDcwTi9QMllZRzlTdkpkMXl6RmhZQmtyWDBRUWJ6dnVRdDdza0o3by9PZmUvWGtzVXMwdjFvWTVHQStnL2dHL1FKY2I4UWxCMGxmK0Q5ZHpDR2VDbEEwOFBTa2gzek5lZDdTLzRrNmFUK1I2cnV4MDZ5QTdwSWJiZXAvbEJ5Qmd0eGs4YTRSdTF0cWd2b2ZMYWROYktUNnBicTNBTVlKZWt2K1phVjdjd2s1L0pjSHRxOVE2QzFGNkoxWXlYL2xod29XYVQreHFyZi9talRlOFhGeFRZUFU5UmVIOGMycTV6eDlkV3pIVlEvb2ZzbmVoRmkybHhMNTkzVXZsejFkSTlkeGI3aFhoMFhBcHpmZXluTzNzcTBDeGJCeW5BdDgxeW82MmZvK2pJVTZUa2QxMWJiNWRWaE9vNlMvRlh5b2pydGhmT2FESmdlWUp0QTI5MzJEb056V1VIZGpQb0pya2RhUFFiSE43YXdzTkRtWUozZThUM0lOZzBxSFZtUVVacE11elRtd0tXVHBLZWVteTJ4TnA4dmVVaXlmMkNIZDBORGIxWmRpeDNoTnB1YTJpejI3eVZQU3BidzJEdG91M2RxUDJ1dTVGdzk0MTN6dE9SejNtUGdWMVJGbzIyci91anRBYmpqOWFJSDFlbGJxbGRLdW1Mdm9tTHRuTWtBZDZidGZwelFLczdmdFJnc083UGMzRnhyMC9jMHpjQmEzQTZZTzZuL1lhb1B4aHk4bG1hTTNqRlhNRmJ2aUhQMHpFWGVnYXB0S3Q2bXIwUFlUY3N4SWQ2aE4vT2N6ZFBwdXU5UlBiTzNwQ2U3WndSYWZhTjNoTm8vMHoySFlFNm02UGdPdGYxR3g0ZDVESlVGdWhhVDh5cS9KN2xGOGtyTTg3ZkdjVVhlL2RXQVk4KzFWdHErNXVUa3JJeWNsOXRDMjJvdERteXV0NkJ1S3kzZ25zT2hhMSt5RXdyVDJPYlRZQ3B2NnRrV1ZnSWRUNWQwNGJrVVpzZDJkNjN1ZVZyM2VLdGNnNmF1eEF3T2xSandHendHSGQvUCt3Wko5dURacFdxdnE3cVA2cG5ZNkROaEgwc3FBN1MzL2RYcUxOcEtWOXVHQnBPc2pXUFlTZlVRbTRFd2VNak96djZCRllSMThId05GcXdvZU44cG5yaXV6OUZFQm1OYTZ1RncxNmx0WFpweGRsTzdXVVF4ZlkvRVVSL2tYYVZybzYwTWFyOEovL0d3elova0FNa0ZBU1YwMjk4SWhuYlUrUmgyN2xVNlA1VWRNVjduRitDTFhPcEt2SnVuZVpFcnl6cE0rUHVxNHdrUSs5V0JwdHBoWElLekdheDZTV1F6b3pyZ3R6blF0OVZzejZoY3htUjdZOE92Z0piWjJYNnBQaC9HREVYUDFGSGJEckV4dHNhUnRWVzlSaklZNXZBMFpzN1hscW8vMjlCOVZac2lqbEJiY3loWlUvcVpwR3R1UHdmTm40T3AyTSs3UmRkVzgrNVpFY2plZWRaODFhc0lmaXJOb3c5VEovWDBrbW1BbEVKVExtSUwydUZkcTNzV0JZNnBIcmEwYWRDUFYvMHZlT2Y4SURvN2lVazFrVnpKZldPNC9yRmtHWGI5RUdoZG84RGhSc1crb3kzdk41Z1RKYmZicmdQMlU3cDJNZ0FhbkZHU1dmRDU1dXdVNzlJcllCZzJKYVZvYWE3YUxqVUJZTGVzbFh6QWUydkRvVjBQNEpsS0E5MGdDR2NiTStINzhPNERzVWxyWTgvc3lXVHZDRUJ0UVh2SElCS3pYZHdMcDNncXZQa3B0Q3pGOWwyRHRyOHZzTjVnVXUyRFJiVk5Qb3ZqYWZpUDgraHZHV05zNWVBRTdmYmkzVXV3MUo3NWxmSGN4enpuaFp5c2Q4d0d3QW40cEd5MTFTSEk4bHdHRUZuZXdEaXJGSUk3a3B1cjFUeFM5ZU0yK0RwK0JvMStQeDQwSUljQ1duNWdObm9EOWd1WWdYM3Q2VFhRV2t6VUduMGJwc01PeDV6Wm1uMDY0MzRHS3BVS29zbTJzQVZ2NTJXNjNoZkgzWS9yUTZGbi9YU3REZzdONzJpcDkrN3FjOVY3cytVZndlUkZ1OFVzcHorTCt5eG1aSWphRmpMM2EwaEVEUWwyK3Y5RmNoVXRueER1ZW5JRyszbTB0YUNjSFhBeEsvd1Fqc3hhMTRzUWVqaWFaZWZTaWtBblZ4TzZVY2RkVlYrZytqdk1RUXNIUlRxL2t0RDdPOEJvUWhSbkxkeWQ5dzZBYmRoeDd3ejlORVc3VG5WajFmbXFQNFFwbkdKNjVvQUVMUjRRT1dPMXo2Yy9POHhYR1c4S3MzVW50TEl4ZnVPVDZrb3FIY0ZLZndaMU11ZnRqbGEyeS9DTTdXQXIzVGREOWV2bW5qcStYVktEeU5GYWNEWlp1QlE1aGx1ei91ZGRCOE9GWGM5bXdSeWNMSTRZQjJEa3czNStTeC9qc2YrNXNJd1V1KzFpT1B0MDlXRUdZWk56SW5hN0xXRGEyWDBSalA5UnllOGtKd1FnLzVDN3dzeE5LQS9raW1oMFhkakFZVVNCajJHSFo1SmE3QVpvWjdFSVVkbU5yVjlBVkZhTVI3WlRtazgvdHNsZGd5emNYWktYQWJlRDdwMGhNTXhqKytIWkp3WXNwaVpzcHdPT0o1ZWN5QzNzTURPU0tCdDRPWXlsSDZac0hpekdVVjJVa0hwSjU1TmpjMThFamExU3lhbGJ0KzdHN3RtVnlUY21uaDhYY0Z4SFVwTTFPR3Zza1FEbzdiWGV0dFljVlhVWDFVK29Ib2FYOThSS21LQzE5Q3JDWGxPNk4zQjhMWEN3UlN6ZUVicW5IVnJkQXZ2WVRtMTlzTWNqZGR3UXJieVNoVXFSZUNwRDR4LzNUdEx4V2t5VytiSFp4angyeFFLMi8wWkx1c1QreHE1dkRPaURJZklmWXlQblkzUDN3N2w5bzA1dCtLZXEza01UOGRaZHBlTi9BSTY1dEczWnFTekNLSUtBcWVRVnpzUCtucWhuQzhtVnpJRm0yZWw5cnZZOHRYY0NRQjhQbCt4SndOQ1VoTTR3SXJoSnBEaExna25QeExTOXhzNkt0dnozV2I4SWxJMkJWMVdneXpNZEhiRnpwakY5c0lsOWlKb2FrUDdyaWQxMVJtNlF6Zy9BMXY2WjhMTU9JV2tLYjF5UENkNm45Z3RwYjBQRVpZWXdJNWJFM3gyV2NDblViQm9zb1F0MitOa29OMEwvQlNGM0RmcGF2ZFcvR1dab2I0TW1UNE8ybUJXTXhoazZmK0ZVWWpiSjhxak13VW1Wb1hFRzQyM1ZVNkJ5czNWOWY1M1h4TXQvb0hvQkMvUlNSS2NvNDNBODYrRzRYd2JPWnlSakt3czFLRU1ZdnUxOG5FM1RacE13QkJzN0VBMFpySFBuQlk2Sll2YzBIMlFkTWRVQS9DTklmYTRrUVBCMlhrcEVWWUpkTkRVNmlBVE52ZEMxMEFIMUxtZWIxaUdaM3hEbTVQVHBjajQwVkhyTGIybWdUZHRPMHFCdVp1QW5FSGIzQ0JMMlA1cUFhUkp4L3loQVhnc0lqK2phaXppOEhuRGYxNFBJYmRvbWpMTW1pK2Rkc2c4aGZ3TUF6eUx3V01OaWVaZE1oZDh2MkpZMStoZ28wdGdBK0lseGtJTkVra1BnODhrTmp3UTRjOStQc0svTEE0SS9yZ0pqcXd2MU80dmNSNHZnMmdwMjFwdWthUmRpaDNQSWZiUW03N0tRTVgyeHRUVThOMDBLdEJPT0p3Sm9KNEZxa0xMSjFVYWxNUTZ6SjlvOFR2VWdKbEFFRmF1TTkyNko1dllrbnhLVmo5RFVWeUlHa2FIYk9UalZKOGxUM0luVEhMTTFUVXB1N0xPNjM5aEFMM1pna0UvYlYxQ3QxV2hRTFJJb3Z3SUlKOEx2SWp1MnVBb1QyWTMzZEE5K1lsQUdOWHVaNkd0eEJlYzNoZysvZzdEbkQyd3QwNUhWckZtenJHQlNPWHhnYkNod0xpTTMwUlhHWWM1YXJHdlpNSTRTTkd3WXBxV2t2Ri9xbEZNNlFOK09DajV4cGNqYVBVaGVaWDBWNTltRW9PdHVQcVZ0dHBMcEYxeVJSbWNCZEFuQlI1UnFmSVhrOXpuOCtLUWxDZTEvc1gybng5T0Jtd2h5OU5zSUIwSEh3NjlUT0VxSHdMY0NTRkVGNXBpZGhrTkhaU2twMXJNM045RGxtWTRzRXU3Zmtvc1lEZ2dGcVEwL3gzb1ZwdERJZ1lydmpRT2FhU1hUZkdzOG1DL1JQWUt2NFg3WEpHamVwRXJNb3p0anppV0tmVDZNRGlsZjhQN2NWT1lmeDJ4V29FdlJITnZkRDNFa3ZkRHdCWUdXRnFZMi9KQ2tvbmE0QWQvOWpvUFZSS1VVUnpXNmdvd2tGZnYwdFNlS2tNK0hpQVBKUWNjZFpoYXkxZWpkYXBqR2FZUzJiMVlUOFQrQVVQeHdOQzVNTDBZMitCMFdzVkkrQm9iaVBNam5RZHNOcEVUdmlVVzdoUlUwUnhVZlVBWnNRbnEzQUlBZHFIeUtyVndRenhOazZDaVA0S0VlSHdRNnczM2J3Yk9qOGczc1lTaTdwNlNxdmdmd2RvaTFqU1NrdjQ5M05JSHFEZDJhckNPZG83cUdMZTVKek1MdUxRdzBJZzk3VjU5UXVEVWEyeUVHYkNwSXVrOEZnTm5WUElkak1Vdlh4a3piOVNUbEY1SU1tOEVPS3M5Qk40VkNGbTBKb0tPeUl3NnJDK0Z2elFyMi9SN2dtc2RPU2FYL1lXRjFsVjZNY1JhTHVpNUtIV0M3cCtFTE1wVXp5THRiKzV2VHp3TmJDdWpRTExSaUFQNUl1a3Rxd3c4VEkrMzlGaUJ0YWo3RFhpNnFSSUJSbGJJWFRyQXBnTmtzK2lkWi9hR2htY3FaekdjYzgvRHh1WXgvNEpZRU9oTm56UTQ4ZU1UQnQ0Vi9PWmJIdUR3ZS93cnBrMVRtVDFFMmRXMkR2RTVJUTBkQU45K3Rqa0Z0eXFlc1RFNm9OQ2JiU2ltTkxYbzN6RWM2N3R5WVZHNW5UTTFzekU0eERyUlZkUVU0Mi90ZlpVM0Z2QjJYNGZwY0hPaHd6RVRINEpxemdLczJaNXAwZXlyV2JuL2k4c2VGZVduTVFBRU1JL3IrR0gxS3k4ZStQMXhkQTZtczZmZ3BsUlU0NXhzeENRdGlFYU5OekV3Y1p0VGVqNnpsK0FUb2lwWDVCR1ArdVlPemtRMEp4RmJHN3ZPWG05NndxNXRTbVhQZVc0eDEvSlJMTnhKYkRWSWJmb3U5RHJxYXphSTRvbHl5cFhuMDlscGF4ZUtCdFhEbmp6WkxDSjc4dDkwdFU1SS91aytBVG9CT1NnSjBBblFDZEFKQkFuUUNkRklTb0JPZ0U2Q1RrZ0NkQUoyVUJPZ0U2QVRvcENSQWIwZmx2d0lNQUc3bUhQb1Z0M3lHQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRm9BQUFCUUNBWUFBQUNaTTJKa0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUZwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESUNoWGFXNWtiM2R6S1NJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwRE5qVTJNMFZHTkVFMk1FTXhNVVU1UVRFd09VSXhRamczTlRjNE1EazVSQ0lnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBETmpVMk0wVkdOVUUyTUVNeE1VVTVRVEV3T1VJeFFqZzNOVGM0TURrNVJDSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPa00yTlRZelJVWXlRVFl3UXpFeFJUbEJNVEE1UWpGQ09EYzFOemd3T1RsRUlpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09rTTJOVFl6UlVZelFUWXdRekV4UlRsQk1UQTVRakZDT0RjMU56Z3dPVGxFSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K0FpQjh2QUFBRkJWSlJFRlVlTnJzbWdkMFZ0V1d4OC8zcFZJam5kQkNEUjBsZ0loMENDSUNBa3B2RDBVQnkxS1k1NGpqY2ducXlPaGJER0I3UGtWUUZBdFBtaWp0MFh1VkdycVUwQkpKZ0FDQkJGSysrZjJ2NXpJZk1RbzZ1c1o1Yzg5YWU5MTJ5dDcvWGM0KzV4NWZJQkF3WHZuOWk5K0R3QVBhQTlvckh0QWUwQjdRWHZHQTlvRDJpZ2UwQjdRSHRGYzhvRDJndmVJQjdRSHRBZTBWRDJnUGFLOTRRSHRBZTBCN3hRUGFBOW9ydjZ5RVJrZEgzM0xsUzVjdW1SZGZmTkgwN2R2WE5HclV5SVNHaGpydmRUYkU3L2ViSzFldW1NaklTT1B6K1c2bHUwaW9CSFFPeW9BYVFBMmhqZEJSNkZFb0RrcUYzb0JPUXpXaC90QjcwRFhHZllheHRuS2RxUTY1ajlkN2FIV2VjVEp2eGt4V1ZwYXBYcjI2ZWZqaGg4M0lrU05OVkZUVWRka2s1ODZkTzAySkVpV2NkNDBiTnpaSGp4NDE0ZUhoenZlODhycnZMbCsrYk9MajQ4Mm9VYU4rTzR1K2R1MmFhZEdpaGNuTnpiMlY2aTJoZjRINlFxVkZNTmVIYXkyb0dwUmpBYTRPbllBdTIzWlZxSGMvMTNDb0VjSlU0dHJHdHFrTXRZSWVGQlpRR05RTmVocXFmek9HQkV6VHBrM043M1dnNkRjRnVuUG56bWI4K1BFbVBUMzlabFpkRmJvZDJnRWxRd1dvWHdBaGkzSmZEd3FCNWtHN29HWFFCUXZjTWVxbGM0MlE0UWg0NkE3ZUZZYUtjVjhJYW00VldSRnFDNVdEUnQ0SzBES1VQenpRWWpRek05TzBhdFhLY1RHNXpjK0F2UldLc2FHaUdzS2RoVTVSdjR6Q21RVlI1WUFGdVRiVUd2b2VtcU1vQnAyeUllWlRhQStVQmtWYnhmMkQvcTVBRmJqdmJNUEpUWXY0LzkxaTlHL1ptYXk2WXNXS1p0YXNXYVpuejU3bTNMbHpwbURCZ3ZsVkZVZ2ZRNjUxcGdQeVhLNExvRU5RTmlCbDgwNnhPQXM2YTBPSTZrK3dmWnltemlEcTVOam40OUMvQ1dEZXBjaEw3Qml6ODhUcy81M0o4TGZ1VUdIampqdnVjTUR1MWF1WEE3WW15RHhGMXZmWFBPOE81M2tPV0pCVnJscktXM0x5M0NjR1BXZlk4UFBQbWQ0cFhGeTRjTUhVcjEvZnpKNDkyeWlydWNVSjhyKzFrSlptTWpJeWJqVjcrZEg0Q2x2S2tQTExCdjZwOG1nSktFRWJOR2hnWG4vOWRRZjRtOVVQVGhPSERSdG1HalpzYUpLU2tuNnhrckt6czAySERoMU1seTVkbkhGL2piTCt6eTFZSkxUaTlxMEtLNkJEUWtMTUcyKzhZVDc3N0RNemJkbzBVNmhRSVpPVGsvT3pDZ291VjY5ZU5TTkdqSERhdDIzYjFzbnR2WlhoejRTT2N1WEttY0dEQjVzWk0yYjhKTkEvQmY3NTgrY2RoZDErKyswTzhIK0lsV0UrNzByWkJZU3lnV3hjTncxQlQwRTVpcHR5WlpGU29TSVU2a1h5bkl0QW1WUzUvQXZHVnM1YmlLWlo5QkVBSUQ4ZUVNQUR6Z2V2cmdSNFBrWDhsYlFMbDZ2MGNaYTJaNlFROFJoczNVRldyOXc4bW5hM3ljQzRYb1ZTYUh0TzlWeGxTaTc2Q0xtTjRzcktjeHAxZjByYlNxdks4YjN3RDJ3SE1taVRCRCtYRkQ1ZGo4NExkQXRlUGdRMTQ3NDRTODlzc1B5K1RKa3lPMHVWS3JXQ2hsdUtGU3QybUhkWnpaczNOMXUyYkdsVm9FQ0JCNHRTYXRTb2NZeHZLeGhnci9KYmQrSlIrSEN0S3M5a1ZFZGowYlFJZlVSUUw0enh6aEJmbC9GOHlDNVdjc0xDd3ZJSzFwcDJnN0hZcHR3WDQ1b0pKaWNxVktpd0RhV3NQSFBtek5hSWlJalQrUURTblhhRG1BUHFjbzFrakN1RkN4ZE9wTzJtZXZYcUxZTzNiU3pETDdaczJkSzBiOTgrRE5tRzhhMG15K3dpY1hGeHk2bS9uVG9KdEwyb2VjVEtVNGJuSVZBWCtJZ0ovYUdrazlMdXIxbXo1dnFTSlV1dUFyZDl5SjhXR3JRZk1BcE5QQWFWbzNLSTF2ZlNCREd1L01tVEorTkkyd2JGeE1Uc1o1S2FRcWNibWVnMnJsKy9QZ05HdXZHdE9BeW0zWGZmZmUxaDdtVzdrSEFtdHZ2dnY5ODg5ZFJUNXQxMzN6VW9JbGh3QmMvMjlCOHJSV2l2b1h2Mzdtbmp4bzFyRGxBVDZIT0hlSGowMFVkZHE1UjBUOFBmS0ZrbWZZZnF2WWk2VlJNVEUxdHpIVTY0V0gvMzNYZFB3VUkzVURmUjV0T2plWDZjNTVJQTVwUHlOQjRoSmhhTDY0QjhqN0VxWEZpK2ZQbHBnTC9uemp2dlRGNnpaazFGckhzd1lKblJvMGMzWXE1WXB4WG15eSsvYkE0ZE9tVGdzUjNQTDlDK0dmMUZ1dnNlc21ENnJuSDgrUEd1OGpMNFhJUUJmQkZxdzhkL1VHbWtCS3RidDY0emlUUnUzUGdNTG5OeStmTGxPY3VXTGF1eWYvLytrcXo2NnJIcW0zajQ4T0d4V01GR09qd0s4d29aaHVmYlVFUVpoRDNwWmdxS2szSWZrZTd6bExLMGkwYVFqT3JWcTRldlc3Y3U1T0xGaTdjUm42UG9Jd2xHQStKbno1NDlMdEQzd3VNNEJJcHMxcXhacmphMXlOZFBBTXlKYjc3NUptem16Sm14Q1FrSlVYMzc5bzBIbEdaNzkrN3RTM3NCUFFCK3htamgxTFZyVnljYlljeURtemR2VHQyNmRXdUJsU3RYMXVPK1JKTW1UUVlpVzF0NDZZRmNTY3JKQWRwWHBVcVZRTldxVldPKy8vNzcrWUNmTW4vK2ZBRXFyNW9LcURIVnFsVXp2WHYzTnBVclY4NDZkZXJVWVF6bkF2MFczN2h4WTQyelo4K1docC9CV0hkZGdkd1BHa0hEM0U2ZE9wa0JBd2I0R2ZSTEJQaFBLdTdWeExKOSsvWTdBT29oZ0s3RWMybEN4NGRmZmZXVndUcEMzWlJNZ2pESTVRMGJObVFvWEFnYzZoa0dORk9uVGpXNDBBMVpBdTA2VWs5dWViNVBuejVoUjQ0Y3ViaHExYXJDVEg3K3BrMmJEa2JnRmZTYnFYNDFPVkxpcVIrSmRlVDI2OWZQRDY5TDRPbUpWMTk5OVREV0hBbW9MUWdmUSt2VXFWTnJ4NDRkbHdCb0xjRDVVR1k3eGUzNCtQaWN0OTU2S3dmUUo0NGRPM1lTSVNhRjk0V3d4bTYwYTNmWFhYZTFqSTJOM1VpZkNUSVVlSFV0STREU2ZlVG1hU2pGMEhmcDRzV0xqME1KTWZDZTgrYWJiNGF3R2o1NjRNQ0JjUmphZkpSNGdURkxnVmtmRkJ2WHJWdTNwbEtLZ0g2Q0Q1Rmx5NVlONExvK3JHVXRLN21SZ0haYUFNb1NrNU9UMTFCNUhReFVocG5DZkRzdXpUS2dFNE5sZWJKYU5PN0gvZnh5STVSZzBMQ1pOR21TZWVXVlZ3d2dLcWE3MjZpVkFicTNWbThJR0U2OFR3TFFnOGVPSFd2LzdiZmZta0dEQnJVaHpGUm52QVM1dUR1M2lSY0E4cytiTjAvakZWeXdZRUh0TDcvOHNoUkdrWVlycjJuZHV2V3FvMGVQVm12VHBrMG8xelRTUXg5emdETkI3TjY5TzRTd1pPUTE3Ny8vZmwzQ2xaYjlaekdHVDdISTZYaElUZXFlMDJUbXppVWFUN240ZDk5OVo5cTFheGVDOHNSN0hXUnV4SmdLYTM3d1NGK3laTWxJNUowbnVTMlBpWGpBWDBxWExxMlFVZ2NqT2l5Z3l3dXNXclZxK2JDa0FFRE00L20wR21HZHppQUNIQkJ5c2JZam1nVFhybDNyNUxkVzg4NFZaUmkwWjhTTVZZNTUvUEhIRGZIUDJlZFZlTUdsWE5BZVFkQVlZdW1WQng1NG9CQk1mZ0Z6MDdDdTJyaC9PWmJ0cGFGT0tTa3BDZkNsc1JYZlo5UHZnL1JUUTk2RW9wdmp1bk94b0d1QW5JUGdGN0hRRFJqTSs3anhTaW1mZVNQdzBVY2Z6Y1NiT3NOUHFkZGVlNDB1UW9ZajJ5UEltYzE5Tm5La3dzdGlhTXEyYmRzT1NPN1UxTlFiOXRxMXBZQjNCNlNvcUtpbytpZy9IQkFOU1lLUGtMY0ZqMWlsZWpJaUZPcTBGeTdrOHBrOWUvYmNwcjc4ZHZQRythQ0tDSmlxRDNQbXpGRVlNUk1uVG5UeVVqY01hQThEaGh6dzNWQWdSV25TSUpZNUlCTWZ6YjMzM3V0TUd1cExyajltekJqRFJDbkdpNkNZTmhKSUt6ak4wbSsvL2ZZUzR2SkJnTjRuTHdBY1ArQjJSc0NpNG9QUW9yQzBCWkM3VTM4UzRlRUFibXB3WFIrS2lJRHZnaWlsTEpOemp4VXJWaXpFQ21jaVJ3WDFUM3ljajBLNjRERlRhdGV1ZlVKN3premtJWUFVQVMrRkFERG00NDgvSHNZS2RnUGg0RzhBR0tWdzVhWjJzbHlGUGUzWmFHbVBmT25JN3FTNmhBc0RINm53a0tPY0hjdVZOeG84emNGTHNreWZQdDB4UHMzY3UybGNXWTJvNENPNHh5b2tMRnEwNlBwbWtBQ0ZxU1lJbWN1N1hjOCsrMnpXQng5OGNNUGZCR2tZQmdJQWsvM0NDeThZNHFiQkZSM20zTW5SMXRVR2Z4TTl3MFJCSnJGcktHYXMrdVo3UlNsTll6T0pOR1dzYmlqckUrMFRmLzc1NStFSWZKWlFOQXIzSDQ5d3NZQlZEbENMMHM5dGMrZk9IWWozMUxIRzBCbVFoeUxYU3dBVVRwK0hVTllqVHo3NVpCWEdxWVdobEdHc0FzaGM0YjMzM3ZzVDNsU2VkLzdISG50c0dISnNCZHpKOE96RUQ3ekY4Y3FrcENSZng0NGR6ZXJWcXhNd2tnemFGRGw5K3JSQWpNVUFpc0J6dWl4ZUJxaXNodjdMY2grUERBdjE0MEwrOFRvTTNRWDZwU1pQbm15WUtIcGpQZk53cVEwMlgxUWlmamNEdjBhSDJjVGcvVmptcEdlZWVXWWJxVTRBN1Fkc1hGSWNEZ0dZWXZRVmhiSjhXRklWK2tuai9uanVEMmhyZ25IK2tNQmdMbTdvcDA0NG9OVFNXRXFObEdXb0w2d2prbkJ4UHhuT0RHTC9OUmh1Q01EdmZ2MzExMy92MzcvL3dmSGp4ODhtRGpwekE2NWFDdGVQVS95RTl3Q2h3OGNFVlYrclNzRG9pTGY5S3p6UG92N3VDUk1tTEJSQWFvY1J4RUx0VVVSNWxPWllMb0RXVnFnQ3JGenhwSHJ3NFB3VTBPOHJ4dDlIZVBvYUxQcHpyN0RZQUV3R0kvTkU3UlRUem8rbyt1WDJGQ0dtTjRvZWdoTFhDV2psaDZPcE1KRVpOUW9BaVFCVlAyTEFyN1VhZ3VyQlNEc2FSMXFYYW9MYmxBYVU3akpTUUhZeWp5KysrTUlzWGJxMERBTk9BS0RMYWt1N3FrT0dETmxFSEU3azI5OFl1Q3p2V3dGSWdEVExEOERuY0xFM3NhRGpmUE5qRlg2RTZnWFFIWlIzUC8zMDAyMklmdzBKWFpzWXB4ZGpOeVEyTjBTWm1RQzZBaUZPYVMrRHRuSHdFMGVkQUxtOFQvTUlkUmZRRG9PTWVJZ3hXeEllV2k1ZXZQZ2lTdm1IVnArRWlVaW9DUXFxaFNJQ1BYcjA4QkYrc2xEbU9uazA3Y01rbDFJOGhTbU1JbHVLQU9SMDJveWgzMmhrYmZ2Y2M4LzU2dGV2L3dwdDRzRGxvTHdTSmJUa1dsWHpHRGkybHlHN0M1WVA5V2NDclQrUHRsc3dJY1hTMForVk9TaEdhYUdoSEJUQXNsSElUalMwaVlFallLWVdZRjdGMnE1aUdSRUlYUUFydU5OMUg0VWU0bXhWK2p1UGU2OUJ3RUc0cmw4TXFGOWk1UW1lMzBIQVZKVHMvQVlEbkFxMGJVSjZWSlFNcENUdStpSXVQd1NBOXhBdVp0Rlc0VVFnZGRJNGNtM3hwLzZJajc2aFE0ZG0wdWVuNVAwekdDOEtwVzdHZXdwaG1mY1FLb3JTcHFjYkR2VURsbFRXREI4KzNFZklPRXNhOTFjV0s5OFE4a0tSSzRhK0x6QjNPSDlwTlVITEtURkVRMHIzSGJJT1FMN1JZUFR3cmwyN2lzQlBiODFId2t3L1AvUURWOXNIOUhlYWVXSkZxQnM3b1lVd3N3czM2TVVTdEMvUE5XbFlHQzM2eUVIUE1ZUHZZZEFadU04c0JrbFJqcXJzQkRkOUNXdm9YS2xTcFdxOHowQlJQazBFREpKejhPREJTUHIwRWRPeXNZcGNtSmhENnBYTVpOYVdkQ3BEa3g5Z0ZGQUtwei9QeE5zd21GL0t4SEwybm52dTZjRjhVWVNzcHpEZzNBNFBId0xLSE9wUHg1TGFBVzVMK2kwUEZRVDhYREtZVlBMOG5WamJkSVUrRmxwWlRLcVp0UGxMcjE2OVBrTnhMYWtYVC8zbVRJREZNYW9JSnNaY0ZtZkoxRjhIMzFNSkgrc0lmd0htbndpVU1Cc2NEakx1QXdwbFRPaTU4RldXUHBMeERvV1VKUGgrRnQ0V2sxYitpWEh2cGsxcFpBdGowcjJDck1mQWJoRXlUR2ZNaEJ2Mk9oRDBGT25JcEhmZWVlY1ROQmkzYjkrK0tyaUVHcDVob1AxTVd2dnBQRXZXZ0hzRXVOMysvUFBQYndmb2xkeEhFRitkMlZqNzBMSmEydWZTVHdpZ1YyTVoreTE1ZE1xb1VhTldSMGRIVDhFRnN3a1R1Y1ROVk56Vm1UUmhLQXZscmlIVDJRVERpd0hFanplRWtxdW1ZQlh5a2pUR21rdWRyM0RYU2doWkhXc3Fnelg1OFJ4dEVCMUFNVnJSaVRjdHpYTmtaZFE5UG5EZ3dFOVJ6Z3lzdHNhSkV5ZGlDSS9GNGNPSDBwS0l5ZnNJVVVuS0R1aFB1ZlpWeGx2SUJMd0tRT2ZEUTRDeEE0QjJ5VW5WN0Y0SDQxMGpMQ3drT1ZpTVlUWmdkVndmTDRqQ205SUpHVWVRZXhmaE51MUh1M2R1VHF4L2RGak9FakVyVWliZ3JnRGRwYlE3bUw3VDVvaXV5cFZGYnNMdlppUzBPV0M5Um5XVHVTWTdnOE8wWEQvdldSRDYwTS9VQTNxbkVHU3pIdmViazkxd1RlUmRvdmdOWG1Db1QvV245REc0VHl1WGRpUDNpZHpkT3NuaGdoZDhyejZwY3dXNTl0NndyK3ozNTNjbVJIUDlEcXg2aDNod01YQjUrOUh1blY2NnUyVnlmMDErc2t3TnJtYzNONVFGdW44dkZKUGNKYmppcEFEWHJLNTdZcTlUVjM5S1ZFZmZsTXk3T2Jpc0dPL1JpdklHeHRWTzdxcTZJaWxEbnFJdFRMWFZONDJoZTMzWHBwVEdjUC9zYU9PSHNPWHdxd1dYRms5S1B3V0EydUlwamx5U1ZkLzA3Q3BkT2IvTG4wQlRINm9yNWFrOTNuQjlvZVlhcDd0NFUxMDlTM2IxR2J4YmVRUFFzZ0pjeXl4Y3VOQlpwQWhVTlZKd2w2QnFyQVJjN3FXQk5RbHQyclRwT29oS3Q1UUtrWnM2ZlFYbDROY3REaGZPZDFOWDMyeEljazVDNWYyLzUwNWV5akswZHlKUTNJV1dhN0h1czl0VzRDbGwxTzVoY0grdTV3YUQ1WDdYdmVSU08yMHp5QmlrVkkydENWdXk2YnZObFIxdlg3WnNtWE52ZC9XY2xTeHpsNlBjNi8wU0syOWdRTmFoUDlsdW1CQkRFbDdmOU02MUJOY2xWTmZkWUhkZFQ4cHhROFZQSFpmSzd6Zld6ZDY3UHh6a1BYbnIzK3o1VnNjTC9pNWpjeTNiOVhiSkg2dzAzY3VMM0xEbWdxOFVrd25kYVBIMkk2Qi93MUlENnEyL0x6Q3FjeFhiOVd3UHkremhuVTRmOWJFSFhuU1c0d0x2Uy9GK0MvY0Q3WUdaUmRyODUzMG4zcXVPTnZvM1ErZDVWOUJ1NUZlMTlWSjUxMDhubHJoZm9yQ3B6U0dlaFVBUmUvU2d0ejJ5TU4xK2I4ajM1YlpmTGFMMlFaOEVIWEg0SC8yY2x1Y0plS1Y1K2YzS0ttK1BXZjNTLy9JK3kyQ0NQU2VubFZFSExlL3RvY1FqVUR1RUs4RzdJeGJnZnZiUWl6UmRrUGNWN0dGRUhlZkt0WFYwQkd5RWZhNWlUeTZkNTUwVU5zU2V6OVBmbUdUZXhkbStGdHY5WWsyNmlmWjgza1Y3UEV5N1dscG9yZUo5YmZ1REl0N0txK3RYOXJDT2l2NVMxUGsxT0d0YzVxNFRzbTZGbS95QXJtVUJ5UDZGbllmWVkxb25MZEQ2SDNnUTByTDBMWHZXem85d0dueVh0YlR2ckxWVnRnRG9DRmNEdnUyM0cxMENJb0g3NDl4MzFkNEV6OU9zdTEvbWVzQXFRd2NZWjlwallORzhYNjM2VWhyWE0vYWZub3hnSnpRWitqTzBUY2ZRdEdTM2YyQmVncDZ4L3lDRGpXN1FyekE0cFNXemRMTEszYWpMRCtoVjl0anNyN0hvUU5EeDJCUnJFVThnMEJJR1ZJcWtINXhsdVc5bnc4VWxXeWZkbmpMSzVkdDYvUzdpcWgrdjhnYmw3QnV0WlE4T2NtdS9EUWNoOW15ZXhyNUluUWo3ZmJFTlRUS2N2OXZ2T3ZRNFhBcUJ6bEJYeDRTWDJ2Zi9EbS9oOXZlYUc3djMyUk92dndhSGEvbVp1ZkhLLzlOekhSN1FYdkdBOW9EMmlnZTBCN1FIdEZjOG9EMmd2ZUlCN1FIdEFlMFZEMmdQYUs5NFFIdEFlMEI3eFFQYUE5b3JIdEFlMEI3UVh2R0EvaU9YL3hKZ0FBMGY1T2dZbVBxQUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQVlBQUFDWk0ySmtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEVNekF4UlRBM01FRTJNRU14TVVVNVFrUTFPVU5ETmpOQk5qSkZRekpETVNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRU16QXhSVEEzTVVFMk1FTXhNVVU1UWtRMU9VTkROak5CTmpKRlF6SkRNU0krSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tRek1ERkZNRFpGUVRZd1F6RXhSVGxDUkRVNVEwTTJNMEUyTWtWRE1rTXhJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa1F6TURGRk1EWkdRVFl3UXpFeFJUbENSRFU1UTBNMk0wRTJNa1ZETWtNeElpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtIcjZGbndBQUVWSkpSRUZVZU5yc25YbHdsT1VkeDk4OUVuSnVFbU1nUUNCQUVpQW9TTVhFa0NDSElFZzlhRzNWMWxiYnFiVk83ZDFPcDhkTVcyMW50TlArWTdYanROTkRXOXV4dFljVmFCVzhnRmFKVUs0UWppQWg1SUxjc0RrMmUyVzM3ek4rbnRsZmQ3SUhzQ3dSOTUxNUpwdTgxL044bisvdisvditudmRkc0FTRFFTTzFYZnpObW9JZ0JYUUs2TlNXQWpvRmRBcm8xSllDK25MYTdGT25UcDFJL1NrejIybXp1U0wxMTJ4THpMYmJiSUVJeDF4aHRueXpuVWd4T3ZLMndtemxVZmFubTIwZGdFZmE1cGx0OVVSanRDMG5KeWNwa1dPMlRMUDVZaHczYURhMzJad1I5Z2ZaZDRyUDQyM3FIZ05tNjRseHIyeXVFYmljR0cwejIxS3pWY1c0WjdQWnhzeVdGbUcvMm5jZ0NqaVR1RmRqakw1OHdHelhKVE9pazNVamo5bjZ6VlpBK0VmYk1xSXczNHEwV0tOTVJLd1FWWk5SYXJZelp2TW1DMmhMY1hGeE1xVXFFekM4TVJpbk1uVEhlUDAxVzY3WmhpSkl4Mnl6dFp2TkgybThRc2FHa3lVYmx5SVpqcHF0RXJEQ0FiQUlScThXQ2M4bVBsdUlDbm1lSE12TkltS3M0NHhQT1pMNTVJSkFNZ2VlS0tBdDUzQnNFd25QSWY1V2ptNWEyZGVCQTlHV2J4VzZyZHFIT0U1SnhQVm1LK1M0aFZoREwvS3dISWJyTFF1QWo3Mlg3VjBlUUJYRWNheWJRZDhrd0ZiZ1hHTzJFcVJGdVlxNVl0OVp3Y0JKZkZiaGZ4V2UyU0RaTmlBYmFZek5LNkprUFQ4OWNaRG1TaVl1ZTZJQjdRR1l1aWlPUWQ3TGhVYmV6bUJhU1phVkhOZGx0bTBjZTRiSnlVU1hmWUFSQk1neGp0dUpwYk14QVQzb3RaclVPNUF0ZDFndWlPVFZielJiUlNLVFphSjh0RitBNWVCMzN6aGV1cHg5THNKOEh2dE8wNVJjdEptdHoyd2pnQlJnQXExSVNpOCt1WWgybU9PNnVPNU1zeTNENGltcHVCcUdib0VRbWJBMUhIaUQzT0hnV2dmSDJUOGhDaFl2TE5VWG5NYkFOT0FCQU5DTTlWRW02eUxGZzk1T3hVL253N3F6Z0tNbXFCdUdLMFl2NXBxSGtDNGI0RTNobkNPaWdEbkVKS2pKM3NDMUQ0bG9TR2VDTEdKQ2ZZblU2SXRSR1E0Qm1tTHZTbjQvdzc1V0JsVkhVdkl4c0ZJbVNRRjhxOW1PVWdGT1k3OW11ZExuQmJCYWdkd0pDM1BSZFFWZ3RkbGVnK1V6bVJ3UDE5a0FtQzh6S1FiSDNFby85Y1MvWjByd0lBTzBrZjNIa0FZdEd3dG9SeGg0QURDMDVOU1k3VGdKMGdXd0tocld3dDVhV0hjU1djamorbXNBNnFUSUNXNnUvMkh1OVU4QjhtTDBXTEY3bjJENGhBZmFMdHhCQUpacHk2VzlzaHNRRFRUMkRHeXFSU0tPQXZBQkprc3g3amJPM2M3ZlZTNjRnZU5PRXgxamdMNmJ4RnpLMzRNa1EzWCt2NFRyY2REZnc3U0FjQjFwaWZiWnNZQytoczRQUkZuRWtadUQwTTNubkFBTVU1bzVHWWZoWjdCOUFxeEdXSGsxOG5HWXp3cjhHUUQ4TnNDa0lVRTZHbFpnQzRjRXNOWGNzeGVRcllMSkdlaTRIZVk3aFNzcXhDWU9rWXpqSWRaOHhuczJHa2F4Z0o1SHB3WUF5QkZtcjhaYk9Tdmh2RXJrWUpSem5ZQ3VRblVXK3RvTXdObGsrUkdxdDFWYzV6aDZPZ0RBUHpIYlYvaXNqbS9CT3hlelNLUTErU2pYWDRldWI2YS91b2paS3dDMlVSUXRFNlY3YTRReVhwZndPVVJwS1E3R3hYM1BHK2hXc2FLV0x0WXFLa2hBNmJBektMUzVqWE95ME1DNUpMcFJ3ZVo1Z3IxSDZiUXVFcTZDbVp2eHdVcXZ2OHVFdERJQjl3SGFFUGM3Z21aZlNaUmtpQXJ6QUdEZXhqVWFrS3NNb213NlVkWEw1SjBNQTluS2NVVXcxOFZuRjhmcGV3Y3ZWS09ESWttTjhIa0dESmdEaUFNd0p5aUtpallZbDA1NFQ0RVJKd0F5bThIYVlPTU5zT0lWbUYvT2dOVFBlOHoyQUNBM3d0WmwvTDBjelQ1Q0JIUXh1VXNBZTRCSUhLTUk2aVZxVmpDeExTVEM0d0pnQy8wS0VwbXIrTmxOM25FSjBzU1ZRQzlrOVM1RExIdDI0WDlQRTFaRFlWVlZOcnBad2FCMk01ajFnTmN2QUZZZy9RSUF0UWYrRytmZXpkK2RhR0lwMTFlZmYyZTJYNHUxNkRuSWxQYmFiL1AzUXE1aDUxajVrRUd2cCtneVhDOEZPSmtnejZWd0hYN1k3Q1M4L01oREthdHZDd0I3QU1CT3dycHNPcitPY3hUby94SGhxR2IrVVNZeGoxSmFIZk16b2lFTGZ6MGR4dlV5dVhYWXYyd1dyanJSWWh0U1ZRMEIzQURZTElDcjROeXJtUFJCeGpRS2l3Y3YxUHJGQy9Ra0JoQ3A5ZytJVGcvemVVUmtZMTB3bEFDSUFuQVhicUtmQmFsbnpQWVJHRjhQTURrdzlVblkvRzNPclFlc3lWeDdNMXBjeGpWV0lRVW5PZTQ0azFMSEJIVUtWekVaNTlCTER1amdtcTRZdXBzSDgvMkpsSTRLV05nQTRMa2tLcTNiN2lqeU1nYkxhOURHSFREVFFhVldUSEs2a3Q4VnM1OUZoamFRTkY4MDIxdFVtdFdBMEF3d2k5RFAxODMyS3VmUFpIS2F3dm96bVdPWDBJZDZVWEdPUkZsa21rTGZiY0xHcW43dk1kczdpUVE2QThlUlNTY0xDZWNDT3Q4QzJETmcwQ0ZtdTVCcWJUSk0zY2VBVkFSOEVrMU5SMzUrQzZ0Vmtub0lyWHdKVnEvaG5KZGhuT3JIbDJIaGt4ejdVZlkvaWxUY1N2OTBmK3FGSGs4aG1SWXpXVHRFNlYyS2hHZ0xhMlVpN0RRL09ha1pXZkZkakdSb0VhVnRFR2FYQ2xjeUMzYTJZTDlLNk5BdVpFY2x2N3NBU01uR1p3QzJGOUQzOExtWUpkUVZoUGsrN3J1R1FYdkZldlViWnZzRWt1VUQzSC9BZkYyQ2o4Szh2NWp0ajBTTEFURnFCVHNQTXJFTDJEOUdmOXJSZHltVjUvUmllYUtmR1JiQWhxVms5RjFvc0FISVQ4TW10ZjNiYk44RWtJY0FjREtzNlNCeEhpUFVyOFp2YndMa1dnb1BCZXh6WnR2SVdvYmF0OVZzM3hEWDNDYjJWM0h0SnppdlQwampVdnEvRlcwZm5ZaHJIWGE4OEZvUzRDYjBmRDZKYVRaSnNVa0E2cVFzZGpNWlBUREZpN3prY2MwbWdGS0o3bDRZOWpXei9SS3cvb3QyM3NQZmE1R2NmaEtmaXJybnpmWUQrcVNrNzdNVVUrMUl4d0JsLzFuYzBCelkzSk1vb0JXalY1QmxqNkYxUTl4STI2ZCtPcEdMUkpTUkRPcEpTb3Q0ZGhlQXdRMWMrOGRtKzZKNEhLUWs0RTFDdUFBUTUzT3RmdGorQlBkY3o3NEh1SzhDN2hGQXlnUGdheWx5OGltT0drbUV0eEJWTzJIbEV2cXNuTWxUdUpNZm92RktZNytEbkhoRkpWaUhmSXhnUFUrS0pRa2xBZnZKTFVQY3E0aCtuK0pZQjBTNkJoTHMxK0x1RjdvakswSDlXYi9SRStCM3I5Q282YmlCcHdUSVZwalh4U0QxZzRGOG1EZkFzZThJR2ZpWTJmNEFrSXVaUUgyUEdqcjhGTCt2SVhIS3ArbTZoRzRBOURwa3FnV0hVVU1DcklkUWZ2WS9pU3p0RlBwYno3aldBNm9oTk5zWGhwVjhmV0pNL0Mwb2NVMkVScWNUQVhYSVFqMkZnc0ZzMzBlb1dsa1VVb3k2azhrNWhvYVdFN0xhNW8wUjBrOERrcC96N2tKNzk1SFE2c1I2OTYrUXNCdVJnQzMwYlRVUjlDYWF2SlJveVJGRnlUcHlSamFSVWsyVTdPWm5ZQ0pvOUJnRGFDYnpYOHRBZ3RpcUhUaU1LYkMyaE5EM3dPNFNwT0d2SkQ3OTlGbjU0c2RKaW9yMWo4SHFicEphT1U5UzltQWpwM09kMzFNNTNrM29QNHQxVzA5RS9abEoyWVpqZVpUeXZKcEpLaUIzN0dWY3dVUnA5SG1kRi9ZVU9SMmJWMFlDeWFkb2NMT0cwWTMzVmQ3MnEyVDVIaGh2QU1qWHpmWW40OTJYWUhUcGU0ZDROamlWZTJ3bkY2aDczWVFtN21UQ1ZyRlBzZk1MU0ZJVHEzL0Q1SXdLOXIyQmhPaUh1WFprcDUwSlA0RkRzUXJaTk00WCtIaUJ0c015RzZET3B1V0kxd2NHQUt5WnBKQ0hMdXBPdnc2emlvUUVWQWk5Zkp3UzJ3WkRYeURKYXQxOGxTY2tkOExlMTlEaU5lajUyNEM2Qk1ibkN6SjBBMllIQ2EyTmlWL05HQnFSQ1RmbnpTT1pGUkZobmVqL0RDSk1QekIyeDd2UUZDL1F4U0wwK3Vod2h5aTl2V0pOSTN3cndoMlV3elRkVWNYUSt3blhqVlIxdFREWVM4bDdMVC9UbU9qdkVkWWZOTnVYbUlDTmdQSTUyUGMwclB3VW9IdHhEdmVqNjFNQXJ3cjI3elRHZi9IZHduZ2RSSmdQcDVTTkMxdksrVWNTQ2JRVkpsdU04ZC9aR0M5QlZwQWNqektRNlNTZEFBemFHNVprVmdKYUxuL2ZoTFBRNzIxOEhvMC9pSzZxS1BrMHBid1RiZFZmWDFCNi9uT2tad0JKeWdUY1NoektGdXhaSmpuRmh3dnl4QkhkUVZHT2p5VXlHUWJEYkdBa3pRNmlvM1ZvWmdaaDYySlF1cFJlUkxXbncxcmJzM1NTVWhxTFNGMjRFQzlGeDNhODZjTXcvUm5XU05JNGJwSVJlaDNzT1JMZVFhNjVISFp1eFJscFM1WkRYNlpERGcvdXh4WmxwVkphdUtTVTRGUG9zSnVPbmhJTFRZMkMrZWxpRUFNd3NFWjQ3SG9qOVBMaHZTU3JjczdMWmFJYVllYkx5TXVQdUkrcUVIL0R0ZWNBWEJOTG8xb2luSVI0QStzeHRXaHlpMWptdExOYzI4WHhKVnpId1FSMlhRcDdWNForWGsvb2FhL3JRWCs3QlBQellIZ05vZWtVNjlONjlhdUs1RHFNanIrQ3p1b0hERDJjOTNHdXRRbFByaUxwUVFCK0hwbHBZckxYNGlnYUtOTzlSSldWODJxTTBOdW12ZUwxaUVIeG9ObUZGdGR3VGJzUmVobm9vdGs3QitIYUJpT3lZSmtMY01PM3VVaEVNL3ZkQUJzZ3NVN0ZTYlF4Y1F0eEd3TUE2WWZOUldoN0dZNWpKaFA1SUdYMUlvQnJ4QlZVMDlkakZEbG5tT3piK2J4WkpPbTVPSXdSL1BqeGNjYVJiNFRlMTNPVEFQWDdLTU9KWW5RNUhmVGdOckxJd0oyRW5UTnMwZDhDZ0E0QU9Bdkx1dWhVRU5DeXNXcE92RzgrMnRtQkhLMWtVbzh3b0JHY3hrSzBNNXQ5TzdoMlAwKzVLMkhsRmtETGdZa0RUT2g4aXBrVEVLUlRQQjViaUNTZENsdTVjOVAzTm80UGNyeVRmSFNMV0U0OWIwYlBBYlIyQm1PSmtRQUtTVHA3aEsvV3gwOFQ3MUdjcG5QNkhZKy9FOUxYWThYeWtKTVNDb3Rta3R3TTJPV2xVQWt5b2RVd2VnOEFMSVlZclR3UTZPTTYrbXNiT3JIM0NZSVVNbEY1V0w3K0dBVmJrR05Ma1ptbWFLVjZvdGVqN1NTd1VRRndEczFEUjV6Q3pwVlJlanVwQ0lkWmt5aURrYVg4M1lVTGFlRWFHU1RYWlRCK0t4T3IzM3JTMHJZVitWbUwrMmdTTW1nVmZaV0wrdnByZXY1emtXQWpBZTkxbk1zV0VFN0RBbERyR2V3NzRybmNjZ0h5SUd4dGdhWGxBTE9mUW1rMzV5MG5Lb29vSE1vQThvQVIrdkxQellUNkhoSm9rRWs2VExrL0F3blFMMVJXa2VqT0NBTDRqWXZ3L1phTCtZWE9TdFlpamxGK2EyTy9LZ3prYkt5aGt3SFc0anlHWWEwYjBGb0k3MmxJMll2a2dKbDQ2Tk9FK3kwa0xBT1owS0FPQW1wQVBHUm9FYThxZUJPNTBKOE1vRE1KN1RRQTJSdFcvWldqeVU2T3lSS1A5K2NDbm42bHJJc2tzNUtrOWlvUzBJNjJGM0tzQ3lrWVJOY0xPRVorbDJXVVNaL0RNZHFDdG90SjlvaG5rZ25kRXYzMU53ZXV3VUVpa28vN3N4akFSa0xWamh6TWdvbHBoUDZnMFBZQzhVQlk2K2hzY2IwcWZ1WXp1WDRrWndHQTlkQ2ZPcUhIKzdtWGZHaHduRW5JSldJS0ppclFhcEFiV0R6cWkyQjFQS3l3OVFocDBTdDdCaEp3Z0tTV0FjTzZBV29TekZPdVFYLzk3UlQzeVVRMnNnQ3pqY21xNHJwdDNHYyt2dy9oS3NaN3M3OFBDN2VVKzZSUE5LQXRETHpSQ0QzMkgrOEJ3WmdvQXE0VE9uc0ZTVzQvckN0Qkxyd2t4QXpDMjJhRTNvM3ppUVRtUmZzTCtieFBhTGVMSW1XRkVmcXFuRGVDcS9EUi80TklpMjJpQVQyS08yaU5KeTh3K0kyaXpDNUZia1lBc1VqWUpmMUdxRi84SG9EbE0yR3lmdmhieWZtZFJ1ajFXZ01Tdk1EZjR2bnlhVHZSbDdCWERwTDF6MGpJYlFhTWttOXg5aGloOTdDektHUmVZcUQ5eUl1T2hyTUE3d0VRL1dYUExwN2dOREJoVGFJZ01aQ0tERmcvbk94QjI1TjhQNHNSK3JwYnVQK1duMXRFWlJZVTdBNEFla0RvclN5Vjl4ci8vM1c3OGU1dmo2ZkFtT2l1STlvMkc1ZmhqVkYxT2ZEZGtXU25MRXEvdDZQM2tiWmhaS1FHbTNkWkFsMkdaWXRWZFdWRVNVSmpZbzBqMHJtVDRvaXFYQ3hnMGlJNldScHRSVmViak9pUGl2TERQUE40VWpjUFd4ZU1NQkZwc0hvd3lqSkJKOW8rYWx6RTd4WmVDa1lIS1ZKaVBZOWJoeVdMeE5oMGxrTnRVZTR6RzZzWGJkTnYvZnVTeFdoN0VvR09aK3VQc2Q3Z1l4MGtHZ3U3amNqL3dzTDU5dXZDWFVDUy82bWZlQ1krMWtOUFN4ejdMVWFTLzRXWmlXYnZZbTMrQkxBd21HenJOdEZjeC90NlN3RjltZG03U0xJMWkrYW1xYldMYVZoQmxUd1dHYUVIb1ZwekoyTUQ5ZlBJNmZ5dTdWd0ZHcTJzV3pZdVpEU1pEbU9pQWEzV1BOUzNBdFJ6dmgwQTlqREF2MFhsOWdnQTdSYTZxNTdhcVBmb3RtRUZ2Mis4dXpLblZ1elVRNFdmVXJpb2xVVDFlc0szS050YjM2L1NrVXZ4TVV3Qm9oMkhmbWRQK2R3T2lndnBJRTRab2UrbTJHRCtXaVl1RFFiZnlINTFUYlhvUC9mOTdEcFU4YUlXN0RORlJhaEN2SWgralJxaGI3NldBYTVhc0ZlcmRHMkFyQ1poRjlmbzUxajE4S0NQdGc5bW43blVRRnRTL3c5THluV2tnRTV0S2FCVFFLZUFUbTBwb0ZOQXA3WnozdjRud0FCYktaa0dFbGE3T0FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZvQUFBQlFDQVlBQUFDWk0ySmtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlGcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElDaFhhVzVrYjNkektTSWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcEZNREl3TkVJd05FRTJNRU14TVVVNU9EWTJPVUUzUXprM1FqWTRSamc0TnlJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwRk1ESXdORUl3TlVFMk1FTXhNVVU1T0RZMk9VRTNRemszUWpZNFJqZzROeUkrSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2tVd01qQTBRakF5UVRZd1F6RXhSVGs0TmpZNVFUZERPVGRDTmpoR09EZzNJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa1V3TWpBMFFqQXpRVFl3UXpFeFJUazROalk1UVRkRE9UZENOamhHT0RnM0lpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtVZnh0ZFFBQUVYZEpSRUZVZU5yc25RbHczVVVkeHpjdmFjNDJKRzE2MFJiYXBBZHQwMHRvQWNGeWxpcHlpZ3h5S0dnSEJFRlVCSEVVMUJFUmtSRkVFUlJFSEs1QnhSYktYWTRXcUVWb216WnAweXZwQ1QyU05zM1ZwRTNTdk9mKzVuMTIzaS9iSkQzeWt2ZVN1ak8vU2ZMKzErNTN2Nzl6OS8rU0VBcUZ6T0RCZzAyY3RBUXJJWDZmYkdXM2xiNVcrbHRaYm1Wbkc5ZmxXc25rbkxocjI3ZHZOMGx4MEErWjVXbFdBbFkrQUZ3QisyWXJXd0YvbUpWR0srKzNjWTl6cll5MzhqMys3bWZsUEN2VlZoWlpxWXIxSUFOeEFQVG5yVnh2cFJsQUhLUDNXcGxnNWN1dys1aDI3cEZ1eFpFbTBVcWVsUnVZQUxsSFJxd0htZFNGRXpyQXlvbFdqclB5b1pYVmdOdEVQMFphR1d1bEdMQlhXSmxvWlp5Vno2ejBhV2NNOVZZMnFXY050L0lGUGhlUTkzTk1XUDlGSytWV251bUpqSmJuRExKeXVaWHJySnlpV0xZV1VJV0ZleFNqWlFMU3hNVHgrYmgyVEkvWThSckY3bU90ZklRcFdtT2x3VXF5bFh3MDVQU2V4T2loTUdtSGxTQm1vZEpLanBYcEFGRU1XemN4Q2VMMGFxMVVBUEE3L0I1VVFQcE5KcVBNeW1iK3pnSG9CNno4Ri9hS09VbGxFblpaZVZsZFA0am5Wbkp1azVyc3VBZGEySGMyVEg3UHlrb0FGY2QwRmlaa2lwWDFWdW93SXpMQTB3QmFIT0pDSzBVQVhOZk9zMlFpWCtVNnc2U1U4dHc5ZkNZZ0Q3Unl2SlZlVnQ1UTEwL0hUM3lxK3RyVVhZQ2V3YUJrY0dPczNFSFVzTUhLODlqZW9iQkoyUHd4enF0Q01iZnVJQUM3NWpOOW81WEh2YytFb1pPc1RJVzUvV0IybHBVUk1EMmZ6MVlyb0FOTVhGelk2QVJFdC84QTJpNEdkaEZtWkNrL0YrRVFheFdvRzlzeER4MXQ5V2lVbUtwWDZGY2lXdGNid3NueFpWYjJjV3dBSmlneEhoaWRTTmdscXJsTmZiNE1oNU1OT3dUb0Z6ajJCTkZHSXorN3FpMG1vV2xXWTgvQ1hJbi8rRGRzZG5iN0hpdnJyRHhNcU5raGRuZVUwU0ZDc2g4UXJ6cG1ONnVPajhEZXVsWUx3L1ozaHROcHB6WERWbWNXR3VuZkxrelhVbzVsa1N4TlI4dStUNmlZSEV0R2gxQTVHY0J0Mk9KZEhCUG44cXlWZVNyR2phY21mUyswY2pjWlpEblJoNFNmMytENHBmaVRZaWJHeEpMUkF2U0xtQTl4YUxlU3lRVUFleW4yT2g1YlBYRzhDMEd6aVVDR1FNS1pWcDYyc3FTalRqRVFKWlVVWmp5SjV6NGJablRISnRvNEIxTWk4ZmsvclR6aStaK1loM2Z2a0NZM0V2OEd1eUhRdTJHd0pFc1hXdm0xaXNVN0ZwckZXWmswbmxwQ3RKeTFsRWtELzhlelhmL1Q3WXBLUjhLbUh0WGlvZkNmU0hZV0lNeEt4TmJYQVhncTV6V1FPTGhya2xYaWs4YmYxUnpQSWw1djV0NUJyZzBkelVCTG1udUNDUzlUN1ZZMWtDTEFud0JnbnlpZ0JkUlRjVnF5Q3BOSHlyeWVSR2dpZFpWS0lpSG5vQ3Q2TXRBNUZKWUN5RWJDSlZlTXp3YmNIZXI4UHZTdFNtV1F1OVU5R3lrRUNkdkhFMDRLK05PSWpZWEZvM2xlR3ZlcUJYaGh0OVRDcGNLWXduVmJrTWJPQXFFcmJIUWFyQjBDb0gwOEc1ekk0Q3NaYUtWS2hSdUliYXRVc2NmRjdoSjI5UUxZT3NBZXdQbTllYVpiU0JqR2NXYzY1THFCcWw5WjBTb2V4WkxSbFdTSHJzcFg0UldUOWdGb0pxWWhBY2FsODNzVnpFczNrY0s5NFhNNVhzbzRoTjBsRklKT0lxVmVTWEZyTDllRlZFWll4SFdKM0t1cHV3Tzk1eUJCL3k3c2FRS01yaUYxM3dKVHQ2SGV2VHpXYmVWbkhaTW4xYmsxZ0ZoSWZhV2NpU2dsMWRhbVowdVhobEZ4a3JBa0lrMEFIbEEyM0RkendUWk1ZTkFMRFVQUlRqdzZrckRFUTlUaGJHNnpBcWcxTU50TDZZUHRKQnBkQ1hMQWUyNG9uc0s3YUNVMnNXUnRLdEZTQnYxbzVtZTFDeW03TTlDRGNIb1NQVWdCdndESDJ0Vk4xaCtsZm4wakVjd0tRSmJjUUJhQlpmZlVydTRNdEREb0RnWWtEbEMyRnp3YXBYc2ZSNlJUeWYxUElBNWZxSnl3TkhGdTk1dnc5ak9aOEEvb3cxUVNxdE1KTGJzMTBMSzRNSUxZV1pxc2hzaUNieG5SeHBGbXFWY0QzREVrVVJLVEQ0ZWxzNjA4U0VZcXNmZlByRnhHMkNsdERwSFBwU3AwclkyVzZSQTdLVHVGUnRHcEJ0U25xbzNreGUybG13OHdoNXVOU1NaNWpaVnJlYTVyc3Z2cFBpdC9NaTMzYmZRakJBelF4MnlBV3V2ZFY1aDN1NVd2cWNrcmhxazUvQzAxNnJlNC9ud3JYMWNneTBxVHJNVEl6dFp6c2RQTE9UY3FRQ2RSVDdpTFFUU1NvRHhwV202amxRN0phdmhQU01tSEV5K3ZPOHhKelRhUjNhT3A2bGh2TXM4eXBkWnVjMHcxQkpqSWM2VU04RmNUM3AzYVJMTDBMU3V6Y0dqTmpFRld3SC9CWkNVUXp5ZVRaWDdidE53OCtTcWFkRDduMTJCSzZxTUZkRWlCUFlqUFRxVVRkMlBUQXFqNUxSU0pESC8zTzhJRTZBMFQyVFRaaTVoN09Zd3V3QVRjQmp1SE1PaGRnSjlHVFNTRFFwVUFmUVpha3FHeTJaZE1lT2ZTcjFSMDh5a1RLYy85Z2hlZVNwSTBGcUNseVphM3QxMDBGRGdFQnZYSEdaeHN3anVRcG5QRFRNNlJRYTZpVTlvTWlJazRXN0Uranc2NlZ1clVxcDJZdEQ4TXpGS1RLbFcrZWFxTWFoajhuN0doTW5rL05PRXRFRU9Jc1dXWmJaRktndVErSTNtR2FNVlhUSGhubGM1V0Z3Rm1sdnA4RFhiM2RDKzByTVNCWGd3dThyeUgwTmFVOWhqdGFzTDVHUGFUVWMxQmZDN2x5TCtZOFBwYUxZelo0TlV3QmdDdVN5Z2FPZGZWamQ4bERVNUNRckFyU09jbXdjaDhHUHdvNnU5czdWalZmekVGeXpnMkE1QWRFTEw1OGZmWTJvc1VBM2ZTcDhrd3ZKZWFoREtJY0lVRGlzOUwrWHVxaDFjSkFJdGZ1dE9FZDBQdFEwTmtBbGNsdGNIaUthajU1UXhldGhNOGhoMjdCdlgvT1JQeUJ6cFIwVXIycGxrdlFMd0FFSS9CdmlDQVRxQmpTNmhSeUI3bWU3SER6dDVLclB3bXo1eU1DZEIxajdXY2Q1M0h0Z0xzNUVqVm55YlkyVWdzcnAxcUF4b3FmVHROQVYzRk13S1lKcVB1TlI5N3JxT2RQdmlFcExZWWZRMnpNZ3FWRUx2M0ZLcTZua3BZSnA1NHFyS1JOZTJreVFOaDl6eWNaQW1EVDBGdGIyWFFIMk1DTGxHZTMwVU9UanV5WUhPS1o0YnFVUFd6dkdldlJJc21lSForcWFwbjY3Y0p5amptNnVpSlNqTTJ3ZEpzeGZJOTJPZHF6K3hOWmFLZWFBM283NUxKNU1Hd0Z3SFpiVDRjcXNLWkJBRHZnMGtJbVFQWCt0eUtoa1FKdjJRaVZqQjVpMVcxempITmJmVjlBbkF1VWVYU0JHV1NKcXVJbzR3d3JEZE9MZG1yZ1JRQ3pGajFlUldoWlYvR211b0JYY0F6OUdSdWdiRWpWVjhTd0RBRFRYRFIxU3pDemFjY3l4M1F5Y1NJTnlybUxHSEFOZHd3QjVabmVMWGtQU2F5dHFlQkZ1YnZWak9meSsrNVJBaXJZYlZtVXdwbVFGaDRsUUt0emtUZXlCckdQUUtLelN2d0g2ZDVFMTBLQzA5U3ppNklFeTdoWHBsZXY0dHdZai95N3JVWlFuMktHVHhXbVlnYjZHc0lVc2tFUG85RERXcWdoVWszcTFsdklqd3BVZzhhVDBnV1VBNWxxNGtzSy9Yek9yemRSSGI0Skh0cU5aaWZRM0YycnRWZ1hnYWp0a2xLTTFaanBzWjU5bms5TXNWanJjRUU3SVVnV1lvQWJnOTBiMlVHRE9xL2tXZlBVSi9YcVloaks0RkFEbjNQZ0wzSFE0Yk5CQWx6WEF5dGdiNEttK0tBMmtsblFsN0tPOUJUc2RVS3lFRmV1RmdDTXpNOE1OMzk2NG0zOHhYVHRzTE9HWjZOM3NMOStzRk8zVFlvdjlIWGkyM2ZNNUgxd1lBaXdGejZmTEtub1FIc2ZMNFg0enRuNjZLcU45RGtNMkIyR3YxZkJWR1d0YlhDY3FMM3dDclRjakUwRldlUzdnMndVRG1vNHp5Z2kyREhXQzhjMm9kSzc0ZHB3NVFXbGZMYzhiRE5SU3hyQWRQZEsxRXhmYTF5bVByNXRRQjBvbW41b2xFajUxMEEyRXRNWkhHM0QrUDBsN1hXazJJYjFhZjVGSmt5MUxqMnRaYyt1eHBFZ2hlYUhLTU0vaEJBU2ZZZXZwcmpRem1lcEFaWndDem5FZWE0dGs2WmdkSHFubnRoUkcvT1QvZWNuYXVxNWFsN0xVY0RVcGlFa0ZwUkVUQm10dUk3aHBFK2I4QkJGNk1Ob3lISFV1THE0VW96MnRvUjIyUU84V1hSZ0ZJTlBSdERWUnFkU0dZNFhBRVpSSlZyR1dRdUFMajd6UWZvQVBaT1oxZHJtYVFSSE5QMmNUbWY1eXB3U3BtQXBGWk0wQ3E4L1JSWXVVT1JRMnpvbVNiOG1zZHpPTEZxVElmWTI5L2hFd3FKNjZXbThVMHIvMkJDdGRsYVlDS0x3a2RjRURJWTd3QnFsa0pITDJQV0g4RFE1NmpydGdHMFMwb21xc3pLVUt4WnA1eWE4WUN1Qm9ROHp3NnV4RzRtZWJaZVRORG52UHFDUVl2dVE0WC9EdnR1QXZ4S29xYlo5TzE5dEdRRmtVZ0s1dU1teHY0UTJqTVpkcnYydHRLb0RnUDlMTGJxTXRnUkJCQm52L0pOeXhYb1VpYkJxZk9aSHNnZnFzTFJSQlhpMWRMcFpxN3I3em5DZFdTRkd1aStaSHQ5aWV0UFVJeVRtb084QWZzNjRGVmo0eHR4aElVbThtYlhBZ2pVaEduOERqbUQ5T0czVk5xUzhRRk9NeGVUK3BkSEMraTlxTzBXYkdSSXhjaGpBQ3ZSWTJVeEhaL2txZlFMc01aTndraGw2d3BRNVg2QWxLa2NTVGwyZGJzWDdaekhCRDBDdTZ2dzlqWGNxNUJybWpFSkQzRjlsWmVwYWdjbnp2SEgrS0dkeEx1MXhPSFhjbzVveVU4Wlp6QmFRQnRWcjZqd2lrdTVkRXdEdlpySkdlRVZYcDRoOU5tbjJLalQxV2JVMVVVZTYxRFRkQlZsek1kK25zSjVuNkMrUlZ6L01zQTB0Y0swb0RtMC9YVUI1WVQ3RTA0SzBPZHczNGN4UlZIN1dvcUQxYU16VWRVc0x4RnhObXNHN0hJQVBXaGFia3dwVnlsMkw4QVRNUDVHemFOWUxmc3Naakozb0s0dk1laU5Ydm0xMFZ1M081Sld3Z0tFSzRNbU04NVMxaUVYUjhOY0hBN1E2WjVqY001aEtiYjhaanE1Z0ZESlo4QVNQUG9NQU5yTzllL2d4VGZDemw1ZW1MVGJpK09qM1hheTVQVWFtcFJvSXJ1WE91VzdQWktPNEp3YVFyOGJZSUdvOG05TStBVjN2MjBpYW5rVE03REJZOHArUXIxWXRDWVZPWFY2T3hqUXRURHVIRHgxQUNkMktvN3dmcGhSMXM0OUttRDg0ZlNwTDNhL3lrUmVZMDVVekd0dlJTaGd1dmFOM0tnQVhVUG9WME9kTncyVkxpUjhLbzFpWDF3RmNDSWhYaTRyRlhNNU5wcitMak50NzZkenEvR0ZhRkNvdXdEdE1yYm5pR0dOdCtRVXpaWkovZmxDNHVKR2dNc0V2RnVJejR2d0hYV3Q5RUdjN1Ywa0tuTTdtczFGc3gzcVJuVDNEc2hlbU5MY0NXeVJlUHRMSnZ3UzVldlk4anhxNUhjU3E3dndNRWVsNkM3c25NVDFDNW1jRkk0bG1UaDQrU2llZGlxbEVuMWNTWW8vRjZEdUpaVy9GM3VkZ0FrYmc3YU54OXdjVCtyOWlscGl1Z0RBQzNDNlIvWExRaGtBbFEyVEw4RFpMZ1RFQUg1Q2tpUlozWDZYZXNRZUUzbDdheG9ndm96cGtiRFM3U0lxNStkK0U4T1gvMk1OZEg4SythTmdhem5KekFSaTc1bGtqNUxTejJKQ0tsVEt2NHpZdDVTSm1zQWtwWEhmejdodjBFVFc5T0xhUm5kV2sycmhkTmhaQmVQY044UmNDVk9ycWR4ZFFkWjRCbUM3OTJGR01ZNTBpbUl5S1FNcG9hNmdIdktoS3FFZWxZd1dCemlNOHVoZ0VwclR5RGEzVWVxczQrOTNDZHVtWVNMU3lPckdjTzU2YlBwc21DM0hQeUtkcm8yMWZZejFPeXhYazhxWFVIZllEdUFMQURPSWcyd0F4UDM4dmR0RUZublRtSkFHaUZNSnU0Y0NmbE9zUVpaM1dHSU5kSWFKYkFmTDhvcFIrMHdQYWZId3NsQ2RsKzRibFJUMXFCWlBjWFNQQXplZW9vNmpwblVVNklRZWlvdmIzZS9TKzk2bTVUNjhMamNkU2RRZCtoUHZTaUZvcHpud3JkZnUxa0pFTStkUlg2a2tqVytJSmRDU1FGeEhLUFVpb1ZkM0IxcVlMQnR5N21HTUMwMmtQQndUb0xOSWVXY1NOWHlNeWpWMGM2QmxEQ1BRVmxteDMyd2ltemhEc1FEYWZmVkRNZUM2eWxwdE53RTBvWTJJSjBpMktsc1N2bXJDMzk1YjBCR2dPNXF3SkpHZHllNGlLWE8raFlvMW04aXlrbk82N21zaTRxbGxralRWUTVpZ2FWbHJGOUxrUTZUNldDWXNZb3RsNmY4MTdGcTlpYXg2NUpBR3U4SFVtSlpmQmhzUFRmb29yM2FNdy83S25tYTlYVUxBWDJxaXNKb1VqVGphcmI3czhUb2tGYmd6VFhqVDRPM1VLSkxpekd6SUxsbDVJVXIyaDA5c3c3ZkV6UmQxdDlWa3U5VndFeTVaaXNPVXR3cU9iZU9aYVoxc0hsSmJpZnZUY2VidXU1cjA5clZ1bFlMTDRPYnhEQ21GU2pWTy81K1ZRWGozazBnSW51NmtmbHpFQkl0emsxV2FqWHp1WHFXV2hRYlowQ09Mdmh1Nkk5RFZER0E1YkZuaUhSZTdQUXNnS3ZEcWExUU1uZ3dZdVppZHRXMDh4MjJRWHc5ajk2cGpzbzU0TWRva3RlbjdGTkJTUHBVNjltd1QrWExEYmxsVWNnUGVhbHJmS3ljZ2prZGt3SGt3YXI4eVBaSnhYbzlwK2FNSnI4RFVxYVJDTk9VbXRHTU9rMXJpYVZVS0pxSnZHMmFyUzBMUldEcW5BT0NrRVpFczh4eVAvQzRMQTdlYXlQOXplZHdEV216L3BmaUN6Rll5TjFsdmZKdHJDMDNuN3VlTFc2RHJVTnRGc05mL2VyUUsxRnZBS1RjSGJpbDJteWFMVkpLMG9aV2F4YjlNZU05MnJYS0lvYU1KYUxlTHFLWWRaem9mMnl6OUxHc2wvSkxQNUhzM25tTXlzczJCLzRvdnBvdXlydjFQZ0FFQW9ORUtvMk9BQzFVQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQWtDQVlBQUFEUFJia0tBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTNacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvek9UUm1NR1JqTXkxbU5qYzJMVGt3TkRjdE9USXpOaTFoTVdJMlpXUTNOR1kwWm1FaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9FVkVRMEpFT1RSQk5qQTNNVEZGT1VKRU1qSkdNalJDUmtSQlFUVTROVGdpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2T0VWRVEwSkVPVE5CTmpBM01URkZPVUpFTWpKR01qUkNSa1JCUVRVNE5UZ2lJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tGZHBibVJ2ZDNNcElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV1ZpTldSaFl6Z3ROR00xT1MxaE1qUTBMVGxrWVRjdFkyUTBNREl6WVRObE1qSXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPak01TkdZd1pHTXpMV1kyTnpZdE9UQTBOeTA1TWpNMkxXRXhZalpsWkRjMFpqUm1ZU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHJlQU4zb0FBQXVqU1VSQlZIamF4RmxwYkJUbkdYNW1abWNQNzNwOW40QnRpS0V4S0JCelJKeHBDSWxRMGlZb1ZkdWtyZFQraUNKVmFrSE5qeDVwVTZsU3FGVFNIRzJWa0IrNUQ5SUdRcE5BRG9nSnR6RVl6R0d3TVdEamMyMnYxOWV1OTVqZDJkM3BNNXQxTkptc3VacTBsajU5NDkxdnZubWY5MzNlNTMyL1dRRTMvaWRNY2EzL2FSbldhL2dHL29RYnZNYzh6SHRwR1dadENpRGEveEpBeXVEK2NlV1JVOE40SXE0SlJXNnJvRG9sOUR1RXBNY21KbnBsSWRFakp0V3VtQkx4S0tIdzRMRFA0OTM4d3ViaGJkdTJxUVlnWHhzdzRUcU5GM3U4NDNmdDgxbTNqeWlhMDIyVklQQlRnWS9TWjAzVElIR1dSRUNXdEFtbm1QUTVMSm8zUzRiWEtjUTc3RkM3b2FvZUxSYnNiV3RyODZ4YnQyN1VCT3Bxd0xRYkJaRHkvSVgyeXhVQngvUVBUdy9INXlXNWxVaXI5UzhTbXBaYUVlZUgwU1FRamljUlVqV0VFMGtFT1NMOE1zWjFpb1M0MDZJRlp0bmhyN0poYktaRDdDdTNhNWNkU2JXSDREb0dod2E3NnV2ckJ6WnMyRERCNWNrTTRMNENTcmdPem92ZU1lVzFKcC8yazBxM0JWYTZlaUNVZ0MvNitWNkJXQkpqdEQ1QTQ1VTRnU1EwQkFrc3dPdGhndW5tNTcwY3lYZ0Mxa1FDV2Z6T1RjRDVrb1pwTmpFNjNTR0ZLbHhTdUNyYk1sS1dKZlNWT2NVT09SYllVVmxWZVNRTkpwa0IxRFVERUQzRHdWOWNDRmcyWFE2bzlua0ZWclNOeHJDZ3lKYmFKa0l2dTZ3aS9BU2owaWhmSkluTG9UZ3VFV0NYa2tRM3dYbVRTUWdFSlNmaXNIQzlUQ0FpWjMwSUJDbm9NNGVWKzluSlNUYzUrUGpLWWwrZXYrV1h0NjFZdFlzMnhQVmdtNEZJMTJMODRJQjM2ZG1BL2VtMjhYZ0I3VVFzUlJNTkxvdUlWZ0laVmpRMCtlUG9qeVNRNzVEZzVkNU91NGpWSlRiTXo3Vmdta3VDUkkrN09IVGpOVFVKTlVaN3VJZklZZFZvT085eGtKSVdQbEZWRXdnVHhrekxpSFBueTgva25qNTc3Z05USG53UkFjdlZxTE52Nzc2OEVUSG5DWXVzVmR3eHpZWm1Yd3psV1dLSzR4NTZPTWNtMGNzSkpyS0diOVBnZDN4UjlCQUlQMEk1djd1OVVNWjNpNnlva29GODJVN1FBbHJHb3VnYUkvQndBZ1ArR0hyR2xaUlB3MUZTaXk2TlVLOGVyQzNHNVoxUDRFSjdSeWZ0c0J2c21veUFicDltdVpMeDY5ZXZsKzF6bHZ6MnFiYklhaDN2Mm5JYkNsd1dPS2sraTRwRTVETWNod2xvZ2c5Y21DL2phQ0NPMW1BYzVYWUpsUTRCU1ZMbXMwRUZEYnk1aHBId1REQm5nakZVNTFqeDVJcGlmSHg1QXNRSUJnV2VBSUVRMks0TFl5Z3FMRVd4NXlBK1BkWFFraFNsYmJURmxqWmFwNUNVbmxOMlNsZWl6aHM3Nis3Nzg0WDR4alBqQ1p2TVQwNk94UkZoNU5zQ0tpNEVrL0RUd0FLSGlEd0NtVU5nNHpUMG9YSTdJNkNsMXBRejBYc0o2RmMxMlNqaEJnZjdJMGp3SGwzQjlJaHRxT3ZEbkh3NzFzNXk0UklqOTBCTkxuYTJLMWhScXFGbHk4YVlJenZ2bVYyN2RyZWtqWTlueUlPTUZFcDV2Nk83WithenZkajA3K0ZZOW55WERBK0p2eVJQeGxMU1FXRkNVa2l3Mnh0REwrbVNRNzY3ckFKdVl2ekxPUCtRa1JvdXNNREduYnhCRlMrMWpLY2VOQnBTVTY2Y3h2Vkgrb0tveVNQemlXYmpnVUhNeXJQaHhlUER5SE01SVoxNkd4UEJ3Tjc5OVkxTmFSdkY5UGlLNkVpWmpOKzZkV3RXZC9HOFovL1lHcnJkUnUrTzBtc3VXY1I5OUc0ZnBkSkRaVW5RdXorb3NLZm9VazN2QjhpRDNRTUt0blNGMERTa1lFS0p3OG1rWEZsaVJibkRnbGxjYy85TUZ3NzFodEE4R01iM2FuSlF5SHZmYXgxSEliOWZVdWJBcTgxaGZDZTNIMmQydkRqZ0dRNjgxTm5aT1VSNzlBb2VNNHk0VVlreVJxQjY1ZHBIZm5RMDlLQ05ZYmJTMndFQ1dGZnB3bGw2YzV3SzhyTVpXWGk5TjR6UldBSkJKdk53Tkk1RjVQaFBhM014eE94dFpvSWVIZ3hoZTdzZjVYVEFMS2VNMWhFRmp5MHV4S09MQ2pEQzVMK0x0SG1OQ2piQ25IaGdWU21lTytyRGtsSWJ2SWUySUtCcW56WTJObllZZUo4d1VNZFkwTDVFb1JUdmUvdTlLeDQ5RzM3Y0U0b0picHVNRVJyMDhFd25jaGlyQ1JwOGY0a2RwMGVqVEVnVlMxblFndlQwbWtJclB2R0VvVEE2RTF6dnBOTDhlbTR1Y3EzNWFQSkYwTXlJbE5oRS9PV0lGMldVMlVxM2pETURJU3laN3NTMmg2cngzcmxSREFRWkxaekVCNDNIV3IxandicTBwMVhEeUZRSHZxQlFpam85L1VNTC8ra1IvcmFsUFZTZFI2V0preGI2Z2pYRk5xd29zTEZOME5BWFRGQkdwWlIrUjZuWFFWWlhQL1BnSnFjRnh3Y2pxTXFXRVNIUXVwNGdzbmx6TDJWeVlhRWQ2eGNWb2lwSHBvS0o2UGVyT05RVndONUxmalIyQjFEWFBvRWZ6N1BqeEZzYm83SXo3NVVEQnc2YzUyT2pldmZCRVVuUFVST0Z2dFJLNkxQMDF3YnZKNXRiQTNjbFJBRXlpeFJySTVLOERwRkNNNW5JYThzZDFHa1JjM05sV09qbE5sS2xNc3RDSlpKWW1SV2NwS2NkWEs4WHVBSW02dTZPQ1N3dno0S2JSdWN3dVVmQ0t1eWlpSHZtNUtTY2M3ZzdpRTRmSTJmTlJrN3pXOWoxN3B0N2p4NXZlaXB0Y01nMEZCT0FWQVJFWTEvZkY1TFdaRm50Q0xFbENGRXY5VEt2NTRDTGF6dFpiUDUrZGd5Ynpvemc5MVFMblJaNjZYK3VlUlMwRGNVMkN4NnJMVVFGZStzaDhscGxGSmFVT2xCS2dLc3JYSGk1eWNjdVZZQ1RWRHJVR2NDZWkzNE1qQ2xZTUxNQTM2OWdGTFp2R1phczluOFpralpxR0VZS2FXWVZFaVpsNnZuZi9MeDhjYTVXUFMzUGJZdG9NdnJKYzRVSm12SXFWK2dqaTlkaGNyM0JFMEVqS2FNeXFaTUVXVXBhRmJOdnJxWWNXcWsrNzdXTllYYXVGY3VZOENXa2xaMVJPZGNmd3ZJWlZLS09BQzZOUkhEN0xEZkNGZ2UyUGYwN2doUGZxZHV6cHlGdGNNUkVIOVhrZWMwTUlFVWhXMUk1WWduMDE5ZklBV1hOZE1lMHhUTUtYSUlsaTBEaUNESWlGdDVtNVVMZDQzckRKWE1ma1gxTWkwL0IwYjRRampHUmRmN1BZNU8zb3NLSklvZU1BSlA2OWFaaHhBaTBmU2lDTzJmbm9vYVJPZEl4QmxkK0VkdzkrL0R4dHJmYlRqVTN2NkFvU2lSdGRNVEVmZFdrUWw5dGxkT0twTnRuTHlzdHlWbDRhMjNGM1hmZWNjKzgydHZ1VTRxL1ZYMXcxQ29kcElZUEJSV2lwdkdpanY3ejg0QytkWUpBRW95RXhtdGRoVzVtMHErcXlNYjhzcXhVc2VvZWo2S1lpVjUzY1J5bG5FZFVHYklRd2FFbkgwNjQzYTQvdmYvQmpzYTAwVHJmZytuWkdJR0UyZnZtQ0FqcC82VmdNQ1JjYW0rUDdLcmJjLzZ6UGJ2M1NQNytpNnVLTmR1OXN3dHlLNHZ5Yk9Ha0xQalpNc2YwMHd0THNwN3UxcFFIbVB5a2owWWdlcE4ycE5PUC9hd0YzZVM2M3ZUZFJ2ck15TFhoSXFVMXB6QWZ2Ui85QThySXdLNzlodzUvRkkxR2piU0ptSkkyby9GR0FEQkV3aml6cEFmVkUwMG5lN2UrdTMxL3lOZHplbUZPSXJKbXVzMDFkMXErVTNBNEpML0t6cFF5cWlldDNqTHI3YkEreTd5ZFFzU29hT2dkaitFWTVmTFQxakdNc1oxWXZhQUMwNE5uOGU0cnovc0M0ZWptam80T1h3YmpqY2s3NWZsWU1sSEpmS2cybm9TUzU5c3UrdDcvOEtNVDUwNmZxSytVQWtNclM1TGl3aGs1N3BLQ0hGdENzcEx2UElHRm9qeWdKSGdtL254THZXblRUMjkyamdnamRtcVF3c0JEVGVOYm16VC82TWliUnhxT0hqTnAvbFVUOTBxOTBGVEdKd3loVEF4NnZjSFBEaDQrejA3eFlKNDYxbjZMVTFFV2xjdXV1VFB5M2E3c2JPaFJHZkpIRVZmWnZLWFB6ZnFPK3BuNWxsbWxtRHU2RitmcmR6ZTNkblMrRVFvR2cxZndmc2JFblNvQ3lIRHFTV2JvUjc0QW9rU2pzZU1uVC9lK3YzTm5RMko4NkV5ZU1qQ3dwRlMwclpoZFZGSlJsbzlJa2xMTTVOV2xXSTNIWVhPNmNXK1ZpbE5ibnd6NGxlU3JyUzB0N1JtTU4zdi91bDZybUY5WWlaT0piUmh5V3JFbVZVczJqa1czTGlpcXJiMTE3ckpseSsrZVhyTjQrWUJZWm0vd3hIbGVGckcwakVmUE4vOEFiNzluNThGRDlicHNobmxQMkZCdHcxTlYzT3Q5TDVRSnlDUVkwUURBWWdEMEpURGxaYVhaaXhmV3psaTJiTm1hbStjdnVzTXpPRnBjdCtNZGRIVjNIUWlHSXk4d2NVZlRYZytiakora3p4VzVmNjJ2VllRTTljSUlSTG9ha1BTUURQZE1VaktXTm5neUNwSHI0ZjdWa25pcXhEYm5oalpWZmhpdWpmTmtpeHcxS0krU1FmT3Z5ZmovNXVXdXVXNUlwbnd4UjhWaVdEUHBBSFBUcGw2dGFIMWRBSzVFTHlGRDBsc00xNExoMVVqY2RHaUptdzhyM3pTQWEwbDZZNzRZRCtXYVNaNXZ5UGl2RThEVm9qSUpBQmxlVUNXbmVJSDdmd0dRQ1FneS9CaWlaWHBOZUNNL2RueFRBSzczR1RmOEs4MS9CQmdBejVzcUZBYWNCVUlBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBbENBWUFBQUFFR1dxdkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM1pwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG96T1RSbU1HUmpNeTFtTmpjMkxUa3dORGN0T1RJek5pMWhNV0kyWldRM05HWTBabUVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TkVWQlJqWkROakZCTmpBM01URkZPVUZFUWpCQ05USkVNalUzT0RJNE9USWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZORVZCUmpaRE5qQkJOakEzTVRGRk9VRkVRakJDTlRKRU1qVTNPREk0T1RJaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0ZkcGJtUnZkM01wSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpXVmlOV1JoWXpndE5HTTFPUzFoTWpRMExUbGtZVGN0WTJRME1ESXpZVE5sTWpJeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qTTVOR1l3WkdNekxXWTJOell0T1RBME55MDVNak0yTFdFeFlqWmxaRGMwWmpSbVlTSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QcmZSR0d3QUFBcjdTVVJCVkhqYXZGbDVjQlBYR2YrdGRuVjVmVWtZMnhpTVQ4TGhLOVFHa2dBQk1nM3BoSW1iUURMdEg4MUZrMmxUTWprbms1bGtNa0RUSEtWTkFrdzdUZnBIQnBxbUV5QUdPdzAwMEJnN3h2Z0FFb2hOTUFaOFNwWmxTYlpzV2ZkcTkvVkpsc3hhU09aTWQrYnpldCsrZmUvN2ZkL3ZPM2JGNE1ZTzVpclg1Q3JYdCt4Z2JuQStFeVh5ZStRYXo3Y0VHSE9kYzVtelp6dDBoWVh6dHFsVTdFWkN0NWNrTWs0VXhCUUlCTG9rVWV6MStueVhQQjVQdjlQcE1vMk5PRWJOWnJQOXdRZlhqZEpucFNnUXR3UVlkejNLYjkrK1UxbFFVUGhHVUhtR2pnUkZvV0NTaUYrWUw1MC9QMSswV3FHaGcwbDVlU1Nyc0dCWUVNUUJ3VjlrSExXN0RENUI2UEY1dlgwdXQ5TXlaTEdhdnoxNTB2Ynl5OCtOWHdjd2NqTWVDTTVUakk0NmY1bVV4UDlkb1VCQ2NGQ3kyekc2L3dBY2h3N0JjL1lzUktzbGhFcVZuNCswalJ1aGYrYVpLVm9SUXZ3U0liYUFLQTZKa21RVEJiSFg1eFl1K2YwK2s4UGhNSnBNcG9FUFAvekxZRlhWUGtIK1dKUk1BY05jcS9XTlJuTlJabWI2QVpabENvS0RqcG9hV041N0Q2N1dFeEQ5dmluQkVGeWRTVWhFM3NmL1Fzb3ZIZ0R4RElBTU5VQWEvUUZFR0tPbVVJTkpXUUEydXhKRW5RNGlrbkZSSkdPaUtJMVNTbG9FUWVpamxPeDNPRVliQ3dweWpvZTlKTW04TlFtR3VSYmxXMXBPNmN2S3lqN1NhTGoxeE9mRDBEdnZ3THB6SndMVUE0clFwQ3VYRWVuNjZVK3NST1lyZDBHNHNCL0VhYWFLam9kbWhnQXlXaWowQzZCYThoNllqRFdYeVgrWktLSWdTUFl6WjA2L3VteFp4VDU2SFFndEd3WGtXbUpBc1doUjBkTlUrWWVrWVJ1TW01NkZkYzhlc1BRR0cwTnhFaHhTQVVvbFErT2pFZjdUMUlCRW1yQUdKM003OFVDMG5JYXY1UVdvVjM5S1BWSThjZS95a3F6UDUwNXJhV2wraXY1ZkU5U0RpaEFHTXVrQnhkVjRiemJiVnZHSjZsY2x5eEJqK01NZjRUaDFCcHFNRENoWWxxNHdsWjVCTmRsRUlPTnhRTCtlN2pSTVIwVUpqREs4a3p6eDBtdEdUZThQdDBIc3I0NFpvM1YxOWFpdVBoQlVXRHRobGxEU1lXV3J4UVVRb1U3NmpKbTZQeXU4bnBTZWJUdGcwMldEM2ZreGRQL1lpOVIxNjBMbWtrZVZlaTZCT2cvdzl0SHJBRUh5U3JwQlFoQkUvRjFDMEVmYUtGclhsRnMyMnpCMjdkcmwwK3QxUVhRYUdZQXBwdURpS1IrY1dGcFcraFlIY3J2dDgvMHdDbHJ3RC8wS0NwOERodloyNko1NkFhblp1UkJ0VnJoR2ZOQ1FNU1RyYXFHWlQrQTFVbDlURUVJdmdXWjJHQUFYdzhoaHVoQy9rN0xiUytja1RzYkJKNS84RTRPRHBxOHZYcnpRUkllVVlmcE1zZjUwZFlBWkczTTlvZEVvSDNPWkxPZ3h1S0Y1NEdHYTR5VndRMGI0QndjeFdQUnpaRy9NeGxEVFNmQmw1VkQydHROTWN6ZnNwNzVBZ3NvTTliSlI4R3RYUVpXWUEwL3ZGMkJjQXhNMmpIVW9FMEtaS1hKMGRKeEhWVldWVmFOUjdSc2VIaVpSaWpQVEZiS1E1UTBHY3dYUGE5K2dGMnpmNXdmUjI5S09SSklJejVJS3pNNlloYUpWS3RSK3VodjhJdy9TMURnR3Nic1QwbTNGc00xYkFsL3FIZkJvRStDRmszcEVCVUZNeGNKY0gveWR1MmdLbFVKeEV0dzFWQVFwdXdOVUZDbUZkSXlmU0QwMFpuYnMyQ25TZEgyb3Z2NGJRd3lscC9pUmphYk8wYU1OTXhZc3VHMm5Vc21XQjVVYjN2UWJhSnFPUUd5dGhlWGJkcGpkTEZ6cHVaaWRtMGJ6ZUQ2U0V0V3dHOHl3RHcxRDROUklWdnZSVDNnc1hqb0E3dmlMYUQxeEVVenhGaVJtNUNJZ3FxSGtLVTI4UXhBRUFoZC9KOVJwZWVDeTEwR2hLdzBwY2Zqd1llemV2YXV6cDZmN3IyNjMyME9IL0ZSOFlmRkhwZE1ybWpQRitMaG5NODlyWHFjV1lweTFSOUg5czdWZ0F1SmsvblpSSmEyNlhLZ3owekJTc2dZa1l3N20zbjh2MU9kYXdURUU1cFkyek4vMFUrUU1QUW8zbVltQmxGL0RpbFhROG1xazZKTEFNeGFrcU8yd1dOMGhhK2R5L3dWVHVJbDZZU0VjRGljcUt5djlPbDNLTzlYVjFVSHV1NE5iVW5HR3orNHdFQ0ZTRCtRVVlrWkdIUGRydGVwbm1YQmw4cHorRHJSQm8rU2J5RGJCdjN6QWgyUnJKMjBiT2pIYmNCek1vd25vL3ZjOTBGQnJwamNlUWwvNm5Tak9LME8zLzExb014ZkNhM05EcDU4RHRhY0RscTR1NUdReE9GaHZ4Nm9ObFVodGV4SmtSaGxZcW56dzJMNzlBMG90NlJ1cWZHdlkybklSWkphZnJBT2NyRlZZbEpqSWI2SGNTNDBnRWl4V2VXV2tUMHc0TEZKSldDWEJqQ0UzNXVSOENZSDVFdXA3YWZxREEzMWZBZDJ1bjZBaWhZZkVKbE5MbUdEck9ZR3M0bnVRMlBjMlpzOTZCTWtYTjFPYmRvTmQvbEZvemJhMnM2aXBxUjVScTlWN3c4cEdVMGVRMFlkRUJ6R2oxK3RmVmlvVmk2ZEUrTXkwK0gwdHhjSXZaZUF5QWZaMllOWmpORm1YRTl3ejFnN2ZlRHZtVU9lYURpOEs4VHczellRemw3SWg1anlPaEpMM1VlNmw3RGk1Rzl5YUdqQ3FOUGo5Zm16WnNnV3pabVh1T1hqd2tGRm05VmpjSnpFOTRQUDVSeGpLWVpxNkpuVk1YcnNXM08rM1FuUzZKcU05OHFSSS94QUhrUGswSlpaRVF1bEFzRTZZU1VIclprNVNBSE9GTnZqOGJhRVVYOHpQZ2FIT0NjdkMrZEFycTRDS0Q2QklYeGxhODdQUDlzSmlHVHJiMjl0VEcwZjVpUFdscVBZN3BGY29lSXVLaXRxTlJzT0F6V2JMMG1yNURKNVBBSmVaQ1pWZUQyZHpNd0llejBUWUJ4K2ltU1IxWFNYNFVpV1VhV1p3K3FuTEJta25pQlBtWXFrOVdHcW0yYWtPWk9GNzhLTkhvU2w3QmR6ODM0Ym05dmYzWS9QbXpSN2FVbi9ZMGRIUlE0ZTh3ZkFMaXpjc2NnQlg1djB3a0tEcDFldlhiOGhmdlBqMmxTVWxaWlVscGFWMzVlVGxxTVMyTnJnYWo4TS9hb2N5UFlNcVVBYjF2SG1BZVFmOHJac242dVRWRG1wSFRwc0s1WkkvQWJsUDBsMG5mUHJhYTYrRE5td0htNXFhL3VieitWeFJtY2NkQnVDWEFTRHhBQVRWVUljYko3NmdvRUMvYk5teVJYY3NYN0Z1K2VvMWQ5OVdrSitXd0xGTXNJbUxITkxvR2ZqL3M1SVdLR2ZzbWs0aWVVTkI2YklFeW9yMzZmbXV5ZHZIanpmaitlZWZNNmhVeW5lYm01c3Z4RkRlRTVVMlNheENKdXNQTDR2ZGJoZmIyOXR0Unc1L2RmSlVTM1BENElCcEpDQ1NaSlZLeFd1MUdpVkxnVENhVENnMEtSQk5qZFJHdm9tbHBjdUtFNktCSW1rdWxDV3ZRcldVcHNqa2VaTWJPeHpqMkxwMUs2RXBlMDk5ZlgxVFdGSHZOTlFoc1ZwV05zN1hCbHgrQ3lRU2ZkVWJQM2FzNFljRCs2dStzbHB0OUlYZHlRYmZ1ZWpCYTdKV1FKbFZBVWFpK3pJVWxGb0hKakVYYk1ZS2NBdCtCMVhGbjZESXVvL3VwSm15OGI1OSs3RjM3NTQyK2hhNWE0dzJYakc0NzR1UisrTjJuaEVQY0dGUmhrVVY1OHl0WFh0ZjBlclZxKzh1TDY5WVdsUmFYcGlacWFQcVU4Lzd4eWRZcUVxTkd3NG0weUEyYkhqWVRZdm1XM1YxZGFkazFISEZxTGhpUE92TEtSUUJJOCt4a2d4OUpBY0hJaTd0NnVxeTFOYldmdGZSY2U2RTBkRFhiNkc5a0ZxYnF0Y21aYWxVbW9ScDQvbk5OOSttSUF5MURRME5OVkhVOFVRRjdiVEtSMU5JUGttS0FpR1hnRXpFd2NGQlIydExTK2VKMXVhV3Jrc1gyd2VNZlM3YTQrZ3B2Uko1bnI5aXcvcjZCbXpiOXU0UXgzRWZVR3FPVFVPZHdMVjhIMkxqNUE0UzlTVkFpZ0ZtQ2hBYUY5NXo1ODZaamgwN2R1ckNoYzZXL242anlXS3g4QlRIek9Ua0ZFYWhZR2luZVFRdnZmU2lTTlAwUjBlT0hQaytyS3c4YUdPbFRISWpYK2FZT0RIQ1Jra2tYamhaZkV4S1hsNWU2dkxsSzBxS2kwc2ZPSC8rZkdsZDNkZjIvUHo4UFkyTmpWOExnaEJSMkMzamZTejYzUFNuUlNZR0VJVU1FQ2VySTF4VXNDdGw0NnlNcW1KWVVZOHMzM3VpdWs1eXF3REU4MG8wRURZcWkzRlJJQ0t2aFhJQThnQ085RURUcHMyYi9UbzlIYjBVMDlCTC9qa0VZU1dGc01ScTJNaVBDU0FlbU1oTE54c0hqRUxtQVNKTEFQSStYN3dlNVc4RmdPbm9GUTFHL2psRWlxb3pZcXhXK2Y4SllMcWdaK0o4RXBHaTZnM0JEZnpnOFdNQXdEVDlGUk9qM3VCR2xmK3hBVnpyUGpmMU05UC9CQmdBOGFzMlNsMFZ4ZjhBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBbENBWUFBQUFFR1dxdkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM1pwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG96T1RSbU1HUmpNeTFtTmpjMkxUa3dORGN0T1RJek5pMWhNV0kyWldRM05HWTBabUVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TnpNMFJUSXpRVGRCTmpBM01URkZPVGhHTWpsQk1VRXdRelUwTUVVNE1qTWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOek0wUlRJelFUWkJOakEzTVRGRk9UaEdNamxCTVVFd1F6VTBNRVU0TWpNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0ZkcGJtUnZkM01wSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpXVmlOV1JoWXpndE5HTTFPUzFoTWpRMExUbGtZVGN0WTJRME1ESXpZVE5sTWpJeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qTTVOR1l3WkdNekxXWTJOell0T1RBME55MDVNak0yTFdFeFlqWmxaRGMwWmpSbVlTSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QcWhOOG9RQUFBckNTVVJCVkhqYXpGa0xjRlRWR2Y3dVkxOTNzNXRObGlRRUlrOHhHWkZHaElDT2lLZ2dWdHFoanE4cFkydXJqclpqT3pyYTZkQ1JxZHFSbG1KSHB4MEhSTWNnVW8wUFdzZWdEQkloSmdxQm1OQ0VWeElncjAyeW01QjlaTFB2Kyt6WjVlNXlzOWxOZ28vYU8zTnk3KzY5ZTgvMy9mLzNQODRKaFc5MlVKUGNWL0FkSDlRMytBMlZkcDBKdkpLRmpQSjlFVWlBZGpoY3N3b0xDemJSTkwxRWttU1hJSWpuWTdIWStVZ2swak02Nm5lNTNSNWZTOHR4MzVOUC9pYW9JYUo4RjhTb3l3WGYzTnc2N1pwckZsYnA5Y3l0cVZtVml6Y1ZLREZGVWR5U0lQWHpndHdYNDRWK1Fxd3JHbzBNa1BPZ3krVWEzTFZyNS9DdVhaWDh0MFdNdWh6d1pORGhNUCtTeWFUN2JhYUhCa01DWXBLTTRod2Q5RFNkK0U2VzR3U1ZrQ3dyRjBSUkdpSWVJMmV4T3hLSmRRc0NQeEFJQlBvNk84OFByRjkvcHp1TlZEWnl5dGNsUUkrTUJPKzNXTXh2RUd6RzVBMFhBYjJuM1k5RGpnQjYvRHhFU1VHQm1jVjlaVFk4V200SFRWSFpvbHVVSlNVZ1NjcUlKRWtqb2lnUEVvS2RoRlFQOFZpUDF6dlNYVlgxVnZmV3JWdkNjVHRrSTBkTjFmb0RBeGQrVUZCZ3I5THA2TEw0bDRLc1lFZUxHOXVhM2VqMHhzREhYNWNFUys0WmFRVWJieXZCczBzTGdIQUVrYzRPOEwwOWtFTWhzTFo4R0s1WkJQM01FbWhsZU5GakNrK3V3K1FjSWQ0YTZ1N3VmSGJod3JLRDVKYWtqakZrMkttQXI2N2VsMk8zNXozRHNoZkJEd1FGUEZIVGo0ODYvQkJwOGdoTGd5TG5wRFZrbWtGVXBGRjdwQU1QTmIwSDNaRkRHRG5YQ2ZDUnhMVHhKMm1yRmJhN044RCs4R09nT1M3Rm5XRW9QVG1SUWRtSTA0dEZVZmdiK2J5Y0RGSEZreVNTb014T3dRUDB6VGV2K3JWZXo5NFRuK1NjTDRxZlZmZmhXRzhBRk1jbXJKMEFSVjIwb2tLenlCWEN5SmNpS09rOUNXZGpKYVpIUGFCTVZsQUdZOG9zY2lpQTRYLzhGVEl2b3ZESnAwQXh6TGlKU2F4ZzU4NmRDOGlsaVl4WXBoUk5UNlo3bDh1OTBtdzJQaDBIT0JRVzhQTzlEaHpyOHVNWGkzT3haaGFIK1JZV05oTURPU29sZmhFUDNoWHVkanpWK2k2dURMa1F6aThHWXlMeng0TTYvaExxWWo2Z2pDYlFPV2I0Ly8wdVltMXRHUUY4K09GSE9IR2lwWkZjeHBrYnlOREZuYVN0UWZSRTBtbHBPVG1EU0djclRWTUZFVkhHN3c0TjR1ZzVQeDRxTmVJdlMrMTRaSzRSYjY4dHhpL0xyQ2kwbUtBUGpPTEJocmR3OVdBN0dtMVhFa2VMbU9ucGhoQVRDTzYwY0NQcGlUWnhrSHpEaUo3ckdBZGdlSGdZbFpXVllaYlZ2YWtTMEt1S29kVkJaWk5RS21WZWRWVnBYUGRMNG5PL1MvUmUxZXJHK2dWR1BMRTRINzZ3aUJLT1J0ZHdDRXZwS0dZdnowZGRHNDkxdGpLMHRiWWpQOVNQMmI0K1NBWU9iSTRWQ0FiSWJPeWxRRTlFTFUxT01zUndjQnlJSFR0ZVF5Z1VPSERpeElsVEtrNUdBenhsald3eFFQbDh3UWNNQnQzRDhma0dReUplSjluR1JuUjlVNzROSTZJQ1NvaUJNK294elBNb3QraHdZeEdENWJhWjBKbXV4T21LRUs0U3ZMaTZvUnBjNllPZy85TUEvb1BkQ1FpS0tKR2dOUk1KR2FFUUQ5RU1DNTNOTm1ieTV1YmpPSERnd0FEUDg5Vit2MS9PQkR3YmdZVGxuYzRMaXl3VzdnVWkyOFQ5Qm1jSWpVTVJzTVRsTDU2Tm9LZ3JqSEpPd1owa0Jpcm1Gc0xyaTZETEcwR2JPNEplcHgvckY4K0U1MlFYUWlXbEJGd1I2QnZYSXYrR2xZZ2QvUUpzTklqUTZaT1FMamloRVBKMHZoMzZ1Zk5TQUlMQklMWnQyeTZaVElaOVgzeFIzNWVXOTlQcndSZ0NDWVpWVmUrYjh2THl0cEIwTmpONW85RVZoc1JMa0VqV0dWSVlESkdrZnpvaVlaODNqSUl6UFpnZkhjR0c2K2VTK3ptSTVWUGdpWlhMeSthQVAvWWxRa1A5MEplV3dUV3RCQVUvK1NsY2dnNXo3bkJpK09sSElZLzZrWFBUTGRCZk1Uc0Y0dURCV2pRMk5wN3hldDJmYWxLbXFJNWtIWkF6WnFIcnJsdkNyRnYzNDQwR0E3c20rVjJNQk8rRklKOUlsd24za0Q4MFEwSFdzL0NZYkVSQ0ZGWWMzNHZZaTgraDU1L3ZZWm56TkhTZmZBQ25YNFN3WUJGeTdGWU1OemFoU0tmQTkrS2ZFZXJ0Z3pMVUJ6bmdCMlBKUSs2UDdpWm5xeHE0Ym16ZnZpMDRmWHJodjV4T1p5QmVMOG5nMVNHa0VZQzJrQ1d3MWRUVS9wRGpETDhpdWs4Ull3aGlvNDYrVkNvMVAxQmtFUllwaklZNUZaZ1dIY1ZkNXo3RGpNUGJRY3NTdkhVMVFHa3BUR2VhNEtxNEM3TzVYRXg3NURGTUp4aTh6NzVFMmo0ZTFudld3N3ppNXRRN1gzMTFCMGhIZTZTK3ZxNVJBenltSVNCcWl0Z1lDU1hrazVQRC9ZRkl4ejRtU0FpQkZTVm12TW9TcXhQWndNUmNTaUlpQmF2bkF1N3ZyTUdBcFJBc0k2SEFSRUZnVE1qMWRrRDYvQ1FVUm9lQ3c5WG9EZzVpZGo0TDhkUUo4SDI5NENxdWgvM1J4MGtxdlZqY1dsdFBZcytlOTRjNWpudFBZL25ZQkFUR3BNejRZRWp2NFNZNTM1b2U2UUdpLzgySFhYaWx5WTFRVEw3NE9IRktBWkhIRFJqRzQ5V2JjWlBqS0pGVUhrSTYwaFlrUzNPaVBhS2dFeUxnZ3lTTzVFUjVoVzcrQXN6WThqSzQ4dXVTL1EvdXZmYytDRUpzMjk2OWU2dkpWNlRuUUx5SmkrZlhrSG9kVFpQUk9BL1FIUjFudHpJTTgvU3NXYlB5akVaOWlvQkZ6K0M1bFROdzZ6d3J2aUlCSFJZVWxKQ1dlZkZNSytZTmtrWnRqd2M5dEJXMGdhUkhXUjdUblpGV0dyeU9WR0tyRHRUSUNFelhMa1hoTTMrQ3FmemExUHQzNzk2Ti9uNUhhMmRuNTJjVFdIOWNBQ090TERNMU5UVXRwTEI4MmQvZjV4TUVZYnJaYkxFWmpZYVVsT2JiREZoWmtvTmJaMXRRVWN5aHhNekFQQzBQL0lBTG9hOGFDQUU5S0phNTlQcTRGd2doYVhRMDBjQVoxOTBOMDFQUHdMYnc2aFI0aDZNUEd6ZHVqTnJ0OWxkSTBYS29sbzZvSTZxeHZLZ0pYbVFpUUhzOEhxcXVyczVUVzF2YjJ0cmFjb2g4ZGdRQ1FhdkpaTGFielJ4RHE0dVVNZFdFZEo2R1JlVWtxNHlTbnVZTWxFaUVGQ3N4a2VOQlJyeUJNMSsvRWtXLy95UHNHeDZBcWFod1RPcDcvdmtYNFBONTlwSjVQeVhyZ21nR0FueW00QjNYTnFoazlHclRGTy8rdVBnNU56YzNaKzNhTzVhc1diTjYzYkpseTVmTW5Uc256MncyMDBreXFZTUlQTlRjaEhEallkTGZlRUhwamRETm1nTnU2VElZNXMzTDJHM3UzMzhBbXplLzBPZnh1Sjl2YTJ2clZiVWVVclVmVmtuRVZBL0lFeEdnVkFLc1NpTFovUmsxMS9wVnExYk51ZjMyTzFaWFZDeTlzYlMwN0FxeXNEY2FEUHF2dFp0QTBpVTJiSGhBSXRiZlRxei9zUW8ycEJsWkF6ZGRRdW1xb0RLVTcwUkY3T25wOFIwOCtGa0xLZkYxWHE5dmdFaE1JVmttaDZRK3ptQXdYQmFCeXNvMzhmbm50VTB1bDdOcWhLeFZNMGdubGxaOU15N3NtVWsycGFTMGNwNjRKaE5HamgwN2V2NlRUejZ1ZDdsY0hVTkRnLzVvTk1hWlRGeWV4Wkl6S2ZqdTdoNXMyclFwU0FMM3RhYW1wbTRWckRab0p3emNxUkFZWi8xTVE1WmxzYjI5elVteVY1UEQ0V2pwNnVycWNiczlqRjV2S0xKYXJUVERaSDc5bGkxYmNlYk1xZjFIamh6NVdBM1NTTm9RSmdyY3FSTFE1bHdwbXplMDhqcDZ0S0g5MUtsVFg1MDkyM0c4cjgvQmt3dzYzV3JOTlNaVGNmeDQvZlUzOE00N2J6dUk5UDQrTkRUa1Q1T09ObWpGcVd4MFVWUFlQcVExUVo3TVZzbUFaOVZsM3JpUm0ydmp5c3BLaTIrN2JmVXRGUlhMVit2MXVwTDkrL2VUekxOdm9MaTRlRnQ5ZlgyekNqYXNDZHB3QmdMS045bVpvektrV3pvTGtheGswbFpVVUwwbWFLeXZCYzluNm5teUhaUHRTbWgzd3lpTnRKTGJHN1E2MldSZVlUWHJXUzBCUG9Oc3BNa0M5OXZlbmRaNmhOWllXNWRHU09zQldRV2JxV1dlTUcxK0d3U3lFYUhTaURBYU10cmRCRzJLRmxYUVFvWVZGNzVyQXBrcU9ySUVQWjIyTUU5UDBXSmExbFArMXdRbWtoZVZ2cGVUVm1ma1RJdjE3NHRBTnE5UUdiWkZzbTJqNC8rRndPWE04YlgvNWZSZkFRWUEzQ0UvMU9mMkdLTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDOEFBQUFsQ0FZQUFBRFN2TERLQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUEzWnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFF5SURjNUxqRTJNRGt5TkN3Z01qQXhOeTh3Tnk4eE15MHdNVG93Tmpvek9TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3pPVFJtTUdSak15MW1OamMyTFRrd05EY3RPVEl6TmkxaE1XSTJaV1EzTkdZMFptRWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZORFEzTWtJNVF6RkJOakEzTVRGRk9Ua3pPVVJFTUVFMU5EYzNNRFV5UkRnaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk5EUTNNa0k1UXpCQk5qQTNNVEZGT1Rrek9VUkVNRUUxTkRjM01EVXlSRGdpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01Ua2dLRmRwYm1SdmQzTXBJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2WldWaU5XUmhZemd0TkdNMU9TMWhNalEwTFRsa1lUY3RZMlEwTURJellUTmxNakl6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pNNU5HWXdaR016TFdZMk56WXRPVEEwTnkwNU1qTTJMV0V4WWpabFpEYzBaalJtWVNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BrSkYyaG9BQUF1alNVUkJWSGpheEZrTFVGVG5HVDM3WHBZM3kwdEFqS0RnQ3hSRlJGQ0RHcHMwRTQxSk96Vk4xVFROMDhZbWFXTW1hV3FWeEtTa05xTzFrNm14bVVSTWc0bGl6R05Fa1NoS0JCRVZFUlZRSHN0N1lVRmdlZXg3Nzk1KzkrNXVjbDBCTVRITm5mbG45KzU5bmZQOTV6dmZkLzhWNFlkdG9sc2NaL0VqYnFJZmNJM3dVelFDYUhZRUV1eFBBWjRIV2xWZEU5UnU4UDVUZktSNlVhaS92TnRxWityTUZuTzkyV1JzN3UzcjFYWHB1dlhGeFVYNkxWc3lUUzZnckFlUk8wSktkTHZBQ3dzTFZkY0d4djJ6cHMzNnhLYlZVK0dybE1IdWNENVhCTmJnWU5sT3h1N1FNZzU3SzJPM05WdXRsaVlhMnNIQm9jNm1wc2JPZGV1ZTdtbHZiM1BjQmluMlRvRVhuNzZzWGIvMWs2dmJNdGRNRU0rY0VnTUxRM2UzT3g4aEZ0TUhmVG9jemllS3ZzUFN6ekNNam83cEhBNm13MmF6TmRydDlpYXoyZFN1MSt2YnlzcE9hNTk5OXFsK0QwTHNDSVRZMndYUEE2K3FiVW5QeW0zSmZTRDFydEJWczBxZ2Ivb2NyTjhTS0tPZWdGSXVob2pBT3hqbkJXSUpmU2RTVnJ1VDBBMDNFM0VFV1NzZEdXQlpWaytFYURoYWlWUURrV28ybVF3YXJiYTlhY0dDVkEyZDdwNmxtMlpMTkdhZDE5Ukc1WllhOXBqdGJNYVczeVdodGEwRnVoTXpFRDl0TVFKVHZrUlRod0ViUDZoQWZMUS9WdDhUZythdUljU0creUlxUk1XVGNqL0pUZWdtVzJMZG42eFpKR0lOdEcreVdJeUhnNEo4WDZLZkdkZHdDRW1JeHdJOE16TlRYdFVoZnZGYTIxREd1aFZ4a0ZKVWR4NjFvTHduSFlFelg4TFZWaE1lZWVNYlhOYjBZZDdVWUd6Y1hZSEhzMDZqcTk4TWc4V09JMlZhdlBkbExmYWZhSVpHTy9UdHpFdnA2UW81RFJrZ2tUaG5SQ3dXS1VVaXNWcXBGRWRacmVhbjZEUUZEVGwzT2plaHJzSGprbzRsOGcrdWVucjVXNS9VUGZmTWlzbUlEdk5HaTg2QUkyZXFrZlh3S2x6cVNNQ2pyeGNpMkUrR2Zac1dJanUvQVlkT3QySFhIMU1KSW91VmZ6MkJTNDE2THFMUUQ5bHcvOXdJWkw5S3BQM2tNRlBDYU5xTUlLQUk5RkZBTHBIeU0rQWtBWlNVRkhNZ3ZXaFlCSGhzTHZDczlGWlJQMXRSRy9QQjBaYXMrZE9ENWZmTUdjY2YySHU4aWFKUFlHVHo4ZkxtWXNSSCtTQm40MExzUGRhSXQzS3VZTXZqc3pBN1hvMEhYajBPcFVLQzkxNmNCNGxZaEFQZnRPRFhpKy9pZ2ZjT1dQRDNUNnB3OEZRTHZPUVN2UGFiQkt5aVl6YUNKcWRZdDdTMFl2LytmWDB1OENLQjd0MnlnWFEwNEx0MjdWSmViSFc4TTJCa1l0Yy9OSVUvME5WcndlRXo3UVJHZ1MwZjF5SjloaHJ2YjBqRllaTEcraDFuU2U4VHNlR1JhWGhqenlWb09vZnc4NVFJWk13S1E1Q2ZBc3RUeDBOTVQyenJOdUxsbmVkeGlPNmpVa2hoTk50cDVoUjhidkJKNzJDeDU2T1AySzZ1emp5WGJCaFh4TzJ1NFRTRlVTSXZUcGkvL0lXRHA5cFdiSDRzRVhLWjg5UlBDeHRSMWFRbjdRN2lvUVdSK1BDVk5GeW83Y05qV1NWWVBEc2MyNTVMSnYyS01ESGNCOEgrQ3BUWDllS2RmZFV3V3gwODhHcTY5dkczUzNDeVVvZDdreU5oczdOWWxoeUI5TVJRM21LbHBQL3k4Z3NvT0pwUFZtbzVRSStVdVlJczhhem00cEZzc2JGVmw3SHRzOW9Oenl5UFEweUVEMWppYmpEYWNmWmFENi9KemI5TnhGdFBKcUcrYlJDUEVaZ0pCSGJIK3JrSThKWHpOL25Wa2duNEdZRzZycmZ3WkpWRS9tek5kYXo1V3drdTAvNzJkY253OFpMQXhqQzRsL0xBaStURjJhemRac2YyN2R0c2FuWFFaNldscGIyQ0JMMXBrdzRubDRhR2hzZ1A4dHV6cGtYN0I2MUlqNExGN0R3aUp2UGV0RFlSTHp3OEJiUGpnakJJWk5adEwrT25mZmNyNmNnLzE0NnNuTXRZOTJBY2FWMkticjBaM2tvcGZyRW9HaWN2ZG1MOXY4N3lTWG9nODI1S1VEbis4TzU1SkUxU0kyMUdNSzlpTHVvNU9ibG9iTlJVVkZkWG5mU292SjVGNndid1BQQTVjK1pJcWpva3IyVVhhSkszUFpzTWtoOFVwRHFXcHRUT2lCQVg2Y3VmYWFjb2lXa0tOcXlhanRCQUJROHlPMStESzQxOU9IRlJ4N3NMMXpDOC9NaDAza0dlZk9jTXV2ck1tQkx0aDVMTFhhaHA3aWNwTVZnNko1d2N6SWNIb05OMVkrZk9mdy81Ky92bkRBd01XbHhhZCt1YzhTaFV2STV1a0V0aFNlWGF6RDFWZjI3ck1jb3UxUGZoL05WZXFoWjJlS3RrVUhtSkllTzBMM0tTa1ZCMnhVZjdZbHlRRi94VkNxUk1VU004MEl1M3ZlU3BhcXhmR1krT0hoTmV6NjRrL1NzUk45NFBXdG8vZGFrTDllVDNrV292UEUrenlOa3Z0MjNhdEJrR3crQVhSNDdrSDNmWm8xa3dMSUtrZFFnanowZTl2cmtqWmNjWG1sY3YxdmQ1Y2U1Z01OdHc1R3c3OHNyYUVCbXNRdHIwRUN4TkNzZU1tQUNFRTJBL2J4bC9zZDNtbklrNWNXb2tFd0gzeGpuVDUyU0ZDeFBEc0hGTkFrWGRIMmVxdTdIOVFBMktLZm9KTWVIOE5keFc5RTB4VHAwcW9rYk8rcFVMcE5VMWhLQVpvWHlFUGJrNHI3VGw0TnEzeTFiWTdIYUVCU2pKRHNYOEFRWmNyV1pnTXRNM0Nua3NTV2RKMGpna1RRNUNZbXdBWWlOOElaTTZjOTlHajJNY3puTFBWV0laNWEvVnlwSmJpYjVOdTBlM0ZPTlFhU3ZlZlQ0RmErK0xCVWtFcTFldlpxakgyWnFYbDFkRXB4aHBHQVRENkNKaEZSSVFSbDRjSGFMb2VlTGVpU2k1NnJSQ204MENYeThwbFc4eHIya0ZBVFRiR0l3UDhVRXplZmlKaWc2bzZQY0ZDV0dZUklTNHhKc1U2UWVaNjZaY29uTmtwR1NkWm91emNqTEVqRXZvWmJQSGtSdEY4dWRsWjMrRTN0NmUwdXJxNmpKQnhLMEN3S05xbmdlL2RHRks1ZFF3VzgvY1dHVjRZbHg0aUVUdUJWMmZCWDJEWmo0QnhSSXhTU2NVRTBpalVxa0lSZ3RIUkFWTnh4RHEyZ2RSUklsYVZOa0pFM202bXR6RW4xb0dybWNoTi94Mk5yZ2FFQlBwalNSeUt4K1ZGTFcxMTdCMTZ6OTZUQ2JqZnpRYVRidEwzeWJYR0ZicjdrMW8vSkw5dWJubS8rYmtWSGpMN0tjbUJEbnE1OGVyVkhjblJZV0hxQU1sMmo0cmpDWWI3elpCNU9VY3FSQ1NWbWlRa25jZC9hQ1ZhNm9RUmdsN3BLd2RYNTF1UldXRG5vcVFBeEhCM3BUd2xPeFNaNi9QdFFCYzcyS2phWG56elN4UVgvOUZVVkZSSWRkUkRnUGU2Z0x2OExSS0lYaDN4eWFwcUx4a09wUjN1UDdTeGZKaXh0QlJQbSt5aWwyNVlFTG9wT2hRWldXVFFYU2xlUUJ5a2xBRUpUSG41UU5EZHB5bVJKd3hNUUFEQmhzbUUwSE8vbzZjMWZJVmRlK0pKdFMyREZBcklDRnlTc2lwOStmQUh6dCtBdG03UDZ3ZEdPai9VS3ZWNmtlSXVtZWkzdlFtSlhZUmticmFUNldySWVLR1VpS1JLTlBTVXFOK3VYTEZzbW1KS1VzNnpPcUlrelVHcjhxR2ZyN1krSkNGbXNpWk9QMVBwQjUrVm13Z3JqVDFVL0d5VWI2STBEdG9vMW5vZzRueVpSSlY2NHlrS0N5Zkc0RE12N3hncWF0cjJISHUzTG5qTHNDM1RGSlAyV0NFVlFCM0owZXp5VExVNVEzbUZ4eTdWRkNRLzNWa0FOTjIzK3dnK2FMRU1KVlU1cVdxN3pTamsyVEZTVWxOT3RmMkdJbVFER1ZYcnlQQVc0SFo1RXFjeC90U3JUaEZGdG5ZVGM3VmVBemxaMDZlT1Y5KzRXTzZ2K1Yybys2WnNKNXZWdTRMM0ZuT3Y4MFlEQVpMeWVrem1yMmY3aXVVMlB0clVtTGxnOHVTUWxSVEpvWUVpcVVLWEc0MjhGRVBJUklSVkF0VTVGWW1pNE92RStldlhZZTJqOEh2bC9tajhNQ09YcEZVOFc1VFUxT1hBTGl3S05tSFM5TFJ3SHN1UXpBZXd5N2N2M3lscXZQenIvTE9hMXMxNXljRTJkdFRZaFdpUlRNajFPR2hnYktHVGlzdWF2UzRXTjlEYjB3aXlnc3Jjb3Rhc09iK0JQU1V2MC9XYVRsNHRPRHJrNEpLT3FZa0hXbjE0SWFDSlV4Z1FUNUlYQzJxVEpBZjduMVpiR3hNNE5LTWhkT1RrNU1YaE44MU03M2JGaGhjV21kQldVMDNkTDFXM0pNYWg1bnlVdVR1MmRiUXF1MStSYWZUOVhrVUpLT0xnRVVRZGNmdExIMTRraEM1UUhzU2tRcUJDNGVmbjU4cVBXMWUxTUswdFBScE0rY3NabFRqNDdVOVZuVFZsZUR3d2QzWGcwUEdiVDFhVUZEaEFpb0ViN3BWa281MTNjWnpPVTlJUkRoa294RkpUSmdlbkpGeGQycW5WcHRlVlZWbFV2a0dIQ0ozcVJISXhTZ1laa0ZGZGR4cUJlMTIxbTFFdzlXRXNjNkdZUGJjdVdUMTBMckpveFZnN3hUNDBXWkRMQUFtSFdFMnBJS2xDL2VMdE0yajdYVW5LVE9XcUgvZlZlTGhTSWc4U0FoblFpb2c1WDd0ZExnaWJCV0F0Z21jakwwZEVIZGlwWG0wQkpkNHRDSU9qN2VrWWJ2Ry93ZjRXMGxLN0xIUzVWa0FiMXJHK3pIL1hQZytDZTQ1aEMvVHd5MTMvNlRnUi9zWFphei9udnprNEcvMXZCLzA5ODcvQkJnQTBQR2I5SnZWU0Y0QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM4QUFBQWtDQVlBQUFBWjRHTnZBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTNacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvek9UUm1NR1JqTXkxbU5qYzJMVGt3TkRjdE9USXpOaTFoTVdJMlpXUTNOR1kwWm1FaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk4wUTBSakZCTlVOQk5qQTNNVEZGT1VGRVFqSTROemxHT1VKQlJURTBNamNpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TjBRMFJqRkJOVUpCTmpBM01URkZPVUZFUWpJNE56bEdPVUpCUlRFME1qY2lJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tGZHBibVJ2ZDNNcElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV1ZpTldSaFl6Z3ROR00xT1MxaE1qUTBMVGxrWVRjdFkyUTBNREl6WVRObE1qSXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPak01TkdZd1pHTXpMV1kyTnpZdE9UQTBOeTA1TWpNMkxXRXhZalpsWkRjMFpqUm1ZU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGxTK3pzOEFBQXMxU1VSQlZIamF4RmtKY0JSbEZ2NjY1ejR5bVNSTUxuSWhBVms1SWdubmdvVWNyZ1dscTJ1aGU2TjQxS0tnaGE2RkNDNjdLNTdBb3FLVUtLaTFxeGF5c0ZJcUZKQ0Vhd05CTUJnZ0xBUnlrVEJKSnNja2s3bDdlcVo3WDNkbTJIWk1TRlJ3dTNqVlRYZlAvMy9mZTk5NzcvODdETDcvd1F6aUhSSFg4V0Ird0c4WWhTbnZpd09jcnhrcDVudTh6OWp0TFZscGFhbHJ1cnFDdDJnMGJGdENncWFXNS9tNlFDQlE3L1Y2RzlyYjJ4Mm5UcDNxZU9TUlIzcm9mVUVCV0x5V3BKanZDbnovL29QR0dUTnUrZWowbWZhN2xxOG9nVFZSajFHamJNak5zU0k3MjhKblpKaTYwOUpNamlTcnZvTUkyY1BoY0IzSGNaZUptTDJscGFWNTY5WnRyUnMydkI2OEZxUytLM2lXZ0t6eUI0UlZEenkwRTd0MlhZQWxRUStHbm1pMUtwaE1XbGl0ZXRoc0ppS1NpTHhjSzI0WVprVnVicEovYUpiWmxUckUxS05Tb1pNSVhTSmk5VFJXVTQrcnA2NnV2dkh5d29VTEhLMnRMVUtVVkR5WnZzZ05HcndNdkx2YlBWZW5OM3o4L09wRGxqZmVQSWEwVkROWWxrRWtJa1pOUUVRUUlRcTljekVNSzVNeW0zdEpaYVluSUNjM0VmbkRrNUdmbnhMSnpyRUVNOUxNUG90RjZ4WUVvWTFJMVV1a2dzRmduZFBwcW43ODhjWG45dTh2NWFPQWhYZ2l6R0RsVWx2YmtKT2JtL081dmRrNzlwbmwrM0MrdWdNZWR4QkJUb0FvaWpJSmxZb2w2LzJKRkEyNkRZR0lTQ2E5MDB0TWVpeUNjb1dpcG9NdDFZUThrdHh3SWpSeTVCQU1INVljU1U4M2g1T1NqTHpmNzM0ckxTM2xSZnBGSkdyZmlBd3pHT0RyMXEzWExWcTArQjJWU3Z0N0NSVExDdWpvOEtQNlFpZk9ubTNEbWFvMjFEZDB3ZW4wbzZzcmdIQllBaW9RQVFacUZabWFsWW5GQ01teEp4YmtiZmxkbnUrOVpsaUtsSWFCM3FEQnBvMzN3VGFrUFRSK2ZHRW12UjRtNDZQbkt3VFVnL0g4d3c4dmVraXQxc3lYSnU0MUZwbVpadFRVZEtLeHlZVlhYcnFOWktIRHdZTU42TzRKNHZRcEI4NmQ2NEN6dTVkTVo2Y2ZvVkNJd0FFYWRhK1VKRUpxdFpvTTBPdHBFa2FLRG9PMk5nL0dqQm1LQ1JQUzhOeUs1NlU0R3NnNEJSNCtkcUVlU09mTnpZN0pPcDN1R1JyWUVIc2dTWVBuSTNoM1N3VWNEaS9jbmlDMmI2K0NTcTJpWkRWanl0UnN2UGpDYkpTWFgwYjF4VTY0M1J5cXpqZ29PdDF3RURpbk00QmdNRXdSbEJKZERaMU9MUk1LQkVJZ3VXRE55ei9Ic2ZMUGNhblJ2ajhLSGdyZFJ3Ynl2Q3lYc3JLaktVbEpLUzhRaDZ3ckQ1aGU4Si91dklBR0FyUDBpYW5ZOU01WDBCTUlqb3ZnclkzSDhlU1RVN0h4N1JNNGNxUVJQUlNKWDl3OUdtKytNUTllTHc5N2l4c1hpTkRYSjF0d2dXUlhmNmtiN2UwK2RMdUlFSUZmdG13T1ZTY09LMWR1Y1lYRHdsYWFVcWVRRFJzMXBqL1B5OENYTEhsY1UxQlF1SlJoMURPVkQ3VmF3RzUzWThPR1kyQkp4d2NPWGNKdHMyOGdqM3J4MGNlbjhlZFZNM0gwYUNQMkg2aVg1ZlIxcFFNK1B3OGpsZEhhK201OCtPRXBqQm1kaHIrc21nV3ZqNlBJK2RCQUJDcFB0Wks4Z2xpOGFDSTJiVnBMMFRCK1VWcTZxMFlLZE5UWXdSUVk2UVZWVjVmNzdnQW4rb05oVVF6eW9oZ0lpQ0lYcEd1NnNlU0ozU0pVcThRSEg5NHAxdFYzaWU5dXJoQUx4bThVUzBycXhKWldqNWhzZTBXYzg3Ty9peUV1SWtvSGVWQjg3NzJUNHRoeGI0b3E3U3B4MmZKaU1mNGdHWXArZjFnOGR1eW9PRzNhOUpvcFU2YjhsbkJNSTd1WmJBUlpCcGsxS2lQSjZWSUtmZHZyRFExTmVRYXphUTN2S0RiNEt4NEYzN3FYU3B5Ynlsc0VYNTl4NGVEaFpyejY4dTM0MjdxNTJMbnpQTmEvVm83WDFzL0ZuRGszd0dMUlllellWSnlyYnBmTEtRSEg4aFhGS0NtdGhkR29RVUZCQnBZc25pUlBGZ2lBdEUvWnlFR3VSdUd3ajd5K2hVOU1UUGo4eXkrL2JGUFU5RytWeVhqWnlNRFhybDJ2czJWa3JJa0Vta1lFcXA1R3BMc0tYT01XcU13andhWGRqaEhXV2RpN2N4YXk4bkt3OTRBVFgreTVqTmRmdXhQbHh5N0xjc3JQVDRaQWdHK2JuUTkvSUF5S2dFeG0vdnd4V1ByVUhxeis2eXhrWnlYS29CbUZDS1Ryeno3N0F2WDFkUlVuVDFZY2pBS09hYjJ2T3YvTkZlSUhIL3pEY004OTh4L1Q2dmhYZlJXUE1hR21qOEhxU09SaWhQNUY1S0ZZRFpXMjVMRVFyYlBCR2FmRGxGRUluU1VYVHo5ekhDVWx0VEFiQmZ6a1JndEczelFFdS9mV29MM1Zpd21UcytUeW1VZmRkZnMvZjBWZVZsSHAvQjk0RFkzWjJtckhnZ1gzdStqZUN3Y09IRGhEdC8xa1BqSnY5QnlJbGt3K1JrSUpublgxK1A2Z014aFdjelZ2SlB1L2VoSU00V2FvRTFKbTl2WXo2UzJCSjgrS3NoODBWQWZVaVdQQkprMkhNV01tYWpwR1FqVGtnUXVic0didFFkdzFMNHNpa0lkZi91WVR1V3p1TDFtSXFWT3laYm5FZ0V0bkhZM3o3TE1yY2ZwMDVZNDllL2E4RndYcVZ3Q1hycVhGWEtpL1Vzbm85WWFsYWpXVEhMR01nbmJrUWtRNmp5RGlxU0hNMVAwMFVocHJKRGF5OTZHUnVtZ1lmR2NWeERaSld1OWdlSG9oV0gwUlBPd1V2UFhTRktSa2pwSm5HWlkvREJNbjVzbkFKWDNIZ0VzTlQycFF4NCtmd042OWU1cENJZTdUcUdkRFVTOXowV3RlQ1RwZU5sTGlxaHlPenRXVStBOG0yNGJZcUdlQWMvMEhRY2NSU3RqUGlFZ3B4QkNOSWVHWFNGd0pXRysvRnlraVlyajN2eHE5RHZyRUVRZ2J4cEM4WnNDdElpTFpOME52SkFSaFdZWHlHa2NxdXdJNTRMNzc1b3ZVd2RmczJMSGpvRUl1UG9YWE9ZWFhyNEJYS1haRFZCNmRGZDNkWFVkYlc1cDVNT3BNaTIyVTJadytBYnFoYzZHeXpTT3YyaUFHMnlFRU8rVFpwWlllSzFnTW95SlNaTlQyQlNMQ2Vkc1I3amtMZ1VoYitXS0lya1BnUEIwVU5RdUZlSWc4bzVaOHNIbnpadkw4OGZMRGh3OXZwVlZsSUNxUFlGUTZNYW1FNDRISGIrVWtDV21sanBhWm1Xa3BLaXJLdmZYV21mTW1USng0NTAyang0OUlUaktwSk5lRy9FN3c3YVhnbXJZaDNQbHZHdFpOK0VYSXZaNko3eVBTc2pMU3UwU1dwbVMxUkM0QnJMVUlReWF0UTExSEtoWXVtTy9XNi9VclMwdExML1RoZFdXU2ZndThLbzZBM01rOEhnOXo4ZUxGUUhIeHZuUEYrL2FWdERRMzF2aDlmcjFPWjBvMFc5TjFSdHZOakM3djE5Q216eU9xVmdpY2k2YWczQkk0ZWJVb2F6cEdoTTRNSzBWRldsWFNlai9vZzg2UURPMk5qMkxsYzYrQ1pjTGJTa3BLeWlLUmlOTGpTcS96Zld4UXJvQlhSb0NOSThNUWtYQkZSY1ZsU1k5MmU5TXBuOWNUb1BBbUdIUjZreWxsbU1xWU1SdTZuQWZBV0c2a2tlbm5JUjlFbnJhdWtkNzhrcGE1VjRZamZUTnFBMnd6dG1EM1lUZTJmN0xsSXUxMzM2ZnRZVThmd0xuKzVCSVBQbjVqd3ZTeGtvdFVWMWQzN042OXE2S3lzdktvMCtsczgzbTl0THhSVzh5SlNUcVRyUURHbkh2QnBzNm0zTWlCSkRHUklpS0dBbEpXeW9FUWFMZVZOUEorZUZNVzQwOHIvc2hwVk16N1I4dkx6MFdCS29FSG94NVhlaDM5Z1dmNitlWVNVWUtQV1d0cnE2ZXNyT3g4U1VseG1iT3JzN2E3eXhrSWhYaXowV2kySkNUblFwODJIZXFoZDVPMkoxQmxUU1llWG9pK0RxaE1tVWljdmhWdmI5NkcwNVVueXFxcXF2N2w5L3NEL1hpZHY1clgrL0kybzFoMnhsWnphb1ZwRkltdFVkb2RkOXd4b3JDd2FOTGtTWk9tanhrM2JteG1WaGJVTkpyVXo0TGQ1eEZ4bENMQmxvY2FUeUVlK04yOW5VYUQ0WG5xcE9lamdHT2QxQisxMEdEQXE2N3lwVXVJczRoaUd4Wlc2RkUyU25BbmxidXpKSzBURjZxcnF6cmJPeGlOUnBOaHNhU296WlkwNkcyVDBlYlB3TEtubGdnZWQ4OE9pdHlocUllVlh1Y0dTdExCZlBwZzRpdytHcXFCb3BHZW5wRlFWRlNZL2RPcDArYU1LeWlZWWJmYlU3ZnYyQkgyZW5wMkU5RVBYQzZYVDdFTVVDNEJ1TGk5NnZmKzZNUmNSVkxzWUVoRVRibWhpRVV1cFBDNGY2Q2EzdGN4MEFZOC9xdVZzdnJFd0llalp6NTZEc1VSVVNzSU1JcENFRkpVRnE2LzljdjEvTkRLS3B2YlZTU2xWcndUQTY5Y2dJVVV5NERyQ3Y1cWttTGk4a0tsQUs3MHZLQWd3TWNWZ0VFQi82SGdCNVBneXZ4ZzQ1cGZKTTZFcXpXazZ3bCtvR2pFd0NzUElRNnc4RjAvYzE5cjhIMlJRQjkvaEJqd0MvRC9FL3lQOHVlZi93b3dBR3E2dUd1WHRZZUxBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1nMS1hN2JlMTA4MWI5ZTBkOWI5YjRmMmRhMDAxMjFhMGMyMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1nMi1mNzk4YjEzNGRlYzk5ODM2ZWJmNTlmYTMzNmNkZjI2Ny5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1nMy0zYzE1MDgwZWI2MjY2YjQxNjkwYjM1OTZhZGU2MGNhZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW1nNC0wZDY5NzY5MzE4MjE3YjkzNWFhZTVjYjNhYWVkZWUyMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNFFBWVJYaHBaZ0FBU1VrcUFBZ0FBQUFBQUFBQUFBQUFBUC9zQUJGRWRXTnJlUUFCQUFRQUFBQThBQUQvNFFNcGFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x3QThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqQXRZekEyTUNBMk1TNHhNelEzTnpjc0lESXdNVEF2TURJdk1USXRNVGM2TXpJNk1EQWdJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRVelVnVjJsdVpHOTNjeUlnZUcxd1RVMDZTVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRG8wTWpJMVJESkVRall4TTBNeE1VVTNPREUzTTBZd01rTTFNamd5UlRWRk1pSWdlRzF3VFUwNlJHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEbzBNakkxUkRKRVF6WXhNME14TVVVM09ERTNNMFl3TWtNMU1qZ3lSVFZGTWlJK0lEeDRiWEJOVFRwRVpYSnBkbVZrUm5KdmJTQnpkRkpsWmpwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qUXlNalZFTWtRNU5qRXpRekV4UlRjNE1UY3pSakF5UXpVeU9ESkZOVVV5SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pReU1qVkVNa1JCTmpFelF6RXhSVGM0TVRjelJqQXlRelV5T0RKRk5VVXlJaTgrSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGlBOEwzSmtaanBTUkVZK0lEd3ZlRHA0YlhCdFpYUmhQaUE4UDNod1lXTnJaWFFnWlc1a1BTSnlJajgrLys0QURrRmtiMkpsQUdUQUFBQUFBZi9iQUlRQUJnUUVCQVVFQmdVRkJna0dCUVlKQ3dnR0JnZ0xEQW9LQ3dvS0RCQU1EQXdNREF3UURBNFBFQThPREJNVEZCUVRFeHdiR3hzY0h4OGZIeDhmSHg4Zkh3RUhCd2NOREEwWUVCQVlHaFVSRlJvZkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGYvOEFBRVFnQUtnQkFBd0VSQUFJUkFRTVJBZi9FQUhVQUFRRUJBUUFBQUFBQUFBQUFBQUFBQUFBREJnZ0JBUUFEQVFFQUFBQUFBQUFBQUFBQUFBQUJBZ1lFQXhBQUFRQUhCd1VCQUFBQUFBQUFBQUFBQUFIaW85TUVWS1F5a2pOVkZnY1hNVkZoQWtJREVRRUFBQVFIQVFBREFBQUFBQUFBQUFBQUFhTGlZNkhSVWdNVEZSWXhnUUl5LzlvQURBTUJBQUlSQXhFQVB3RHB3QUFBQUFBQUFCaU9hdHM4NXBvcDBkblg3Mm5HR2FuSkE1cTJ6em1taW5RNi9lMDR3ek9TQnpWdG5uTk5GT2gxKzlweGhtY2tEbXJiUE9hYUtkRHI5N1RqRE01SUhOVzJlYzAwVTZIWDcybkdHWnlRT2F0czg1cG9wME92M3RPTU16a2djMWJaNXpUUlRvZGZ2YWNZWm5KQTVxMnp6bW1pblE2L2UwNHd6T1NEbGcwcm5BQUFBQUFBQU5IcEZFMHpXTXg2TzNOUzNIakxzbFJwRkUweldIbzdjMUo0eTdKVWFSUk5NMWg2TzNOU2VNdXlWR2tVVFROWWVqdHpVbmpMc2xScEZFMHpXSG83YzFKNHk3SlVhUlJOTTFoNk8zTlNlTXV5VkdrVVRUTlllanR6VW5qTHNsUnBGRTB6V0hvN2MxSjR5N0pVMFJtRzVBQUFBQUFBQUxSR1ArbUhhOXNPeDErZkhZbUx6L1QrWWZmejlUdWtMRjBCZEFYUUYwQmRBcEQ0L3dDZUhhOWNTeDErdkhjbUN2Ny9BTXgrL2o2Ly85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80UUFZUlhocFpnQUFTVWtxQUFnQUFBQUFBQUFBQUFBQUFQL3NBQkZFZFdOcmVRQUJBQVFBQUFBOEFBRC80UU1wYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THdBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpBdFl6QTJNQ0EyTVM0eE16UTNOemNzSURJd01UQXZNREl2TVRJdE1UYzZNekk2TURBZ0lDQWdJQ0FnSUNJK0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0QwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5SWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFV6VWdWMmx1Wkc5M2N5SWdlRzF3VFUwNlNXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3lPRFEzTWpjMk1UWXhNME14TVVVM09ESkVORGd3TURFM01ESXhOalJHT0NJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveU9EUTNNamMyTWpZeE0wTXhNVVUzT0RKRU5EZ3dNREUzTURJeE5qUkdPQ0krSUR4NGJYQk5UVHBFWlhKcGRtVmtSbkp2YlNCemRGSmxaanBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pJNE5EY3lOelZHTmpFelF6RXhSVGM0TWtRME9EQXdNVGN3TWpFMk5FWTRJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPakk0TkRjeU56WXdOakV6UXpFeFJUYzRNa1EwT0RBd01UY3dNakUyTkVZNElpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCsvKzRBRGtGa2IySmxBR1RBQUFBQUFmL2JBSVFBQmdRRUJBVUVCZ1VGQmdrR0JRWUpDd2dHQmdnTERBb0tDd29LREJBTURBd01EQXdRREE0UEVBOE9EQk1URkJRVEV4d2JHeHNjSHg4Zkh4OGZIeDhmSHdFSEJ3Y05EQTBZRUJBWUdoVVJGUm9mSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zi84QUFFUWdBS2dCQUF3RVJBQUlSQVFNUkFmL0VBSTRBQVFBQ0FnTUFBQUFBQUFBQUFBQUFBQUFFQlFFREFnWUhBUUVBQWdNQkFRQUFBQUFBQUFBQUFBQUFBZ1lEQkFVQkJ4QUFBUU1CQmdNRkNBTUFBQUFBQUFBQUFRSURCQUFSRXBNRlZRWlIwUll5a3RJekZURkJJa0ppRXhRMFlYR1JFUUFDQVFFR0JRTURCUUFBQUFBQUFBQUFBUUlERVRHUlVoTVVJVUZSRWdSeG9TSmhnVEx3c2NIUkJmL2FBQXdEQVFBQ0VRTVJBRDhBcEZPT0xVVktVVktVYlZLSkpKSjk1cmxuMHhJeGVWeE5BTHl1Sm9CZVZ4TkFMeXVKb0JlVnhOQUx5dUpvREtYSEVLQ2txS1ZKTnFWQWtFRWU4VURSN3g2QmtXblJjRnZ3MVI5elZ6U3haWGRhZlY0bkZlUzdiYWJXN0lodzJHR2txVzQ2dGxzSlNsSXRKUHcxbThlZGFyTlJVMnJmcXp4MXFuSnliS3lCTDJKTm5yaE54R21YYjl4aGNpR0drT0t0dTNieFQ4SnZnZ0JWbkQyMTA1K0ZVc2ZiVmVOL0QxL1NKejE0eFVuZHpzbGJZV3ZvR1JhZEZ3Vy9EWEczTlhOTEZrZGFmVjRqMERJdE9pNExmaHB1YXVhV0xHdFBxOFI2QmtXblJjRnZ3MDNOWE5MRmpXbjFlSTlBeUxUb3VDMzRhYm1ybWxpeHJUNnZFZWdaRnAwWEJiOE5OelZ6U3hZMXA5WGlUNndHTTZ2dUY4UWtGTVdKTGlmbHZvVm1NbFg0N2lTMm9GRjVLRzFQT0FLQ1JaZWIvd0Fxd0x4WXFFSlcydnN0U2ZYNlhlN05qeHZtK0xpKzI2LytiRmd6T3hzejJxNHA5cVF1TCtYRmxxQmVsWFk2eEhLUUVGSklaQlZlQ3JSWmFLc0ZEL0xob1JsV2orYXpQK3pSOHJ5bk9wS0ZOeStLdVN0K1h1WE1FUlZ5SHBiVUtRdzdJTjJRKzZ1T3B0WmFOMUFTR25IRkFoSitZQ3FyNTNqcW5ScHRPM2pMMHY1Y0xmVzM3R2J1bCtMYWFYcmJ4OVYreE9ya2dVQW9CUUNnS1NSRWN6R0c5Q0dWcHlxOFF0VWtmYVY5MVljQ2lWaHRSVVNlSnJ0MS9KcHBVN0pxWGFyT0NsanhTUkh4NnMxTnVTbDkydlloUDdGUWlPbE1hVzBWdnRsdWFTMG9HMHFjc1dpd2k4YnJ0bnhlOEEveFdhdDUxSHNqOHBTY2VYTGwxdXVOaWw1VmttM0N6RDNMbUtzbVhjOUlURisybFNEbUZyUlc2a0tGMEt1RXIvcTJ0VHk2c0pVSVJVNHVVZVNVcmVQSG1yT0YxNXB3bFB1ZHR0bnFyUHR4NWsrdVNaaFFDZ0ZBZUZkVWJqMU9Wakw1MWR0blJ5UndMRG9VOHFIVkc0OVRsWXkrZE5uUnlSd0doVHlvZFViajFPVmpMNTAyZEhKSEFhRlBLaDFSdVBVNVdNdm5UWjBja2NCb1U4cUhWRzQ5VGxZeStkTm5SeVJ3R2hUeW9kVWJqMU9Wakw1MDJkSEpIQWFGUEtoMVJ1UFU1V012blRaMGNrY0JvVThxSFZHNDlUbFl5K2ROblJ5UndHaFR5b2h5ZjJYZks3YXZLN0h0K1Q2ZUZiVEpSdVY1cjd0ZUVoM2FBZDJnSGRvQjNhQWQyZ05rYjlscnl1Mm56ZXg3Zm4rbmpYcUl5dWQ1LzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRRQVlSWGhwWmdBQVNVa3FBQWdBQUFBQUFBQUFBQUFBQVAvc0FCRkVkV05yZVFBQkFBUUFBQUE4QUFELzRRTXBhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMd0E4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QaUE4ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pCWkc5aVpTQllUVkFnUTI5eVpTQTFMakF0WXpBMk1DQTJNUzR4TXpRM056Y3NJREl3TVRBdk1ESXZNVEl0TVRjNk16STZNREFnSUNBZ0lDQWdJQ0krSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlJSGh0Ykc1ek9uaHRjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEVXpVZ1YybHVaRzkzY3lJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvNU5UTTRSRFV4UWpZeE0wSXhNVVUzT0RNNU5UZzVRamMzTmtVd05FWkZNU0lnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG81TlRNNFJEVXhRell4TTBJeE1VVTNPRE01TlRnNVFqYzNOa1V3TkVaRk1TSStJRHg0YlhCTlRUcEVaWEpwZG1Wa1JuSnZiU0J6ZEZKbFpqcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPamsxTXpoRU5URTVOakV6UWpFeFJUYzRNemsxT0RsQ056YzJSVEEwUmtVeElpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qazFNemhFTlRGQk5qRXpRakV4UlRjNE16azFPRGxDTnpjMlJUQTBSa1V4SWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4Ky8rNEFEa0ZrYjJKbEFHVEFBQUFBQWYvYkFJUUFCZ1FFQkFVRUJnVUZCZ2tHQlFZSkN3Z0dCZ2dMREFvS0N3b0tEQkFNREF3TURBd1FEQTRQRUE4T0RCTVRGQlFURXh3Ykd4c2NIeDhmSHg4Zkh4OGZId0VIQndjTkRBMFlFQkFZR2hVUkZSb2ZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmLzhBQUVRZ0FLZ0JBQXdFUkFBSVJBUU1SQWYvRUFKa0FBUUFCQlFFQUFBQUFBQUFBQUFBQUFBQUhBZ01FQlFZQkFRRUFBZ01CQVFBQUFBQUFBQUFBQUFBQUFnWUJCQVVEQnhBQUFBUUJCd2tIQkFNQkFBQUFBQUFBQVFJREJBQVJFaE1GQmhZSE1hSFJrcFBURlZWV0lVR1JJakl6RkZGaFF0S0NJeVZGRVFBQUFnTVFBZ0lCQlFBQUFBQUFBQUFBQWZBQ0F4RWhNVkdCb1JKU2doTlRCQlJVQlJWQmNaSFJNbUhoSWtKRC85b0FEQU1CQUFJUkF4RUFQd0RsaHF0RmFybTdvNHFORmxFM0N4M0xvUm9uUmt6Z0FKdGhLUVJFL2Iyemh5eGE2VGh1UXdRZVBZMWhtalo5bnhZeVh4M2N3RkRKOEcvNlFBQ0ZKU2lGSE1tVHMwUnZEbytQZmlFSEJqTjZqYUdhbUV5d3F6L2lEeEZLY0xWcjhnUkE1SFVwSndHQ1Q4WWtiUTNmbDd5Zm9CdWJJVk5VOTRLcFNyQlZkazBjSnVxZXNSRUtCYWlFNEVNM0VTQU0zeWdBeTk4YzdsSEZtQzFJM252WkRwOE8yYXM4d3FiSldrdSs5RzhKTnV2aHYxRXA0bC9TS3BkTXF3dWZaY2pnRlA4QVlYWHczNmlVOFMvcEM2WlZnN0xrY0FwL3NMcjRiOVJLZUpmMGhkTXF3ZGx5T0FVLzJQUzJadzVLWURGdEdvQmdHVUJBU2dJQ0g4SVhUS3NNSHlQSW4vZ1NTaUhtaFFRcVpGVTRmRkJ3MWRrS3U3QUYwbkFnb1VKallrd2FGUU1rK1hMM2hGNldmV2pmS0R4N2pIem9iSVczK2dOWC9HWHBRY25Qd21jWGlSUStKTFNmTW81QlQ3NW1idmp6ZGVkZDhRLzFoaUFXRzVpSFRTZGdvUlFqWXRYRk8vUlNBalZzTTRmSzhiMGY5NWdrOVhmSjN4STRvNlQzay9SK0FHZFpvOVVOTFJWTzhyWmlzNHE1VXIweGpKbUNnWDh5aFNuYkpmMVVSU215bGxqUjVKWlVtQzFKOHY0dmVmRUk2ZkRzMnkrWVZKaWRGZDl3NVBSaVI3dzRWOGljZUFiNktyZU1hcWZJdWVnNVRHVlN5RjRjSytST1BBTjlDOFkxVStRMEhLWXlxV1F2RGhYeUp4NEJ2b1hqR3FueUdnNVRHVlN5RjRjSytST1BBTjlDOFkxVStRMEhLWXlxV1JHaExGMithTlN0MmxuSGlMZ3lhemQ4dk5GVXF5YWhnRUFLVVFFcEpBQ1NjVWUyTHJxR1JtNmF4Zm9QbmRBeGZHeWxzeGNDbGRSN3dhbEZjdFhlZWVDZ3BVYzc1RTJreSthVEpFYjltNStaVW8vMkNnY1FvVHN2aUtCU3JLMmVlS1ZpMkJ1V3IzWUp6UVJLMkVSQXBrd0xNVmw3TzAyZU1tM1kxaWNmZGxDZ3NOdlpDb2JiMVhhSmhXd1dYY0E2YmxjQzdVVkExR3NkZWRJWUNTQUJKQU5KSVdOUGtNd3JjbVNwMGplY0liM0haZFJkc1JORnFDajdwaVNyMFc5NllMcUgweFhMMXBWRms2M0k3aWNndlJiM3BndW9mVEM5YVZRNjNJN2ljZ3ZSYjNwZ3VvZlRDOWFWUTYzSTdpY2d2UmIzcGd1b2ZUQzlhVlE2M0k3aWNoWHdURm5uVFhOdUlVRzBaSklJNnppc0pkTFljRXhaNTAxemJpRkJ0R1NTQnJPS3dsMHRod1RGbm5UWE51SVVHMFpKSUdzNHJDWFMySEJNV2VkTmMyNGhRYlJra2dhemlzSmRMWWNFeFo1MDF6YmlGQnRHU1NCck9Ld2wwdGh3VEZublRYTnVJVUcwWkpJR3M0ckNYUzJIQk1XZWROYzI0aFFiUmtrZ2F6aXNKZExZY0V4WjUwMXpiaUZCdEdTU0JyT0t3bDB0alQzWHNkMWFPMEpwanp1bEt3NkhaWnpiVEdGMTdIZFdqdENhWVhTbFlPeXptMm1NTHIyTzZ0SGFFMHd1bEt3ZGxuTnRNWVhYc2QxYU8wSnBoZEtWZzdMT2JhWXd1dlk3cTBkb1RUQzZVckIyV2MyMHhoZGV4M1ZvN1FtbUYwcFdEc3M1dHBqQzY5anVyUjJoTk1McFNzSFpaemJUR0YxN0hkV2p0Q2FZWFNsWU95em0ybU1jRTQ5OVQyL1ViMi9SbC9IN2ZTTk14YVZQeEtHV0VXOVdNQ1Fhc0FEVmdBYXNBRFZnQWFzQUZ4djc2ZnQrb3Z1ZWpMK1gyK3NaSVJYL0FCT0dTRWYvMlE9PVwiIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFRvcEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvVG9wSGVhZGVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhcic7XG5pbXBvcnQgTWFpbkJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVPbmUvTWFpbkJhbm5lcic7XG5pbXBvcnQgQ2F0ZWdvcmllc0Jhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVPbmUvQ2F0ZWdvcmllc0Jhbm5lcic7XG5pbXBvcnQgUmVjZW50UHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lT25lL1JlY2VudFByb2R1Y3RzJztcbmltcG9ydCBPZmZlclN0eWxlT25lIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL09mZmVyU3R5bGVPbmUnO1xuaW1wb3J0IEZhY2lsaXR5U2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5U2xpZGVyJztcbmltcG9ydCBQYXJ0bmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhcnRuZXInO1xuaW1wb3J0IFJlY2VudEJsb2dQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1JlY2VudEJsb2dQb3N0JztcbmltcG9ydCBJbnN0YWdyYW1GZWVkIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0luc3RhZ3JhbUZlZWQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvRm9vdGVyJztcbmltcG9ydCBQb3B1bGFyUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lT25lL1BvcHVsYXJQcm9kdWN0cyc7XG5pbXBvcnQgQmVzdFNlbGxpbmdQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVPbmUvQmVzdFNlbGxpbmdQcm9kdWN0cyc7XG5cbmNvbnN0IEluZGV4ID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxUb3BIZWFkZXIgLz5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxNYWluQmFubmVyIC8+XG4gICAgICAgICAgICA8Q2F0ZWdvcmllc0Jhbm5lciAvPlxuICAgICAgICAgICAgPFJlY2VudFByb2R1Y3RzIHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgICAgICAgIDxPZmZlclN0eWxlT25lIC8+XG4gICAgICAgICAgICA8UG9wdWxhclByb2R1Y3RzIHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgICAgICAgIDxGYWNpbGl0eVNsaWRlciAvPlxuICAgICAgICAgICAgPEJlc3RTZWxsaW5nUHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgICAgICAgPFBhcnRuZXIgLz5cbiAgICAgICAgICAgIDxSZWNlbnRCbG9nUG9zdCAvPlxuICAgICAgICAgICAgPEluc3RhZ3JhbUZlZWQgLz5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9kdWN0czogc3RhdGUucHJvZHVjdHMuZmlsdGVyKCBwcm9kdWN0ID0+IHByb2R1Y3QudHlwZSA9PSAnV29tZW4gQ2xvdGhlcycgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEluZGV4KTsiLCIvL1R5cGVzIHNob3VsZCBiZSBpbiBjb25zdCB0byBhdm9pZCB0eXBvcyBhbmQgZHVwbGljYXRpb24gc2luY2UgaXQncyBhIHN0cmluZyBhbmQgY291bGQgYmUgZWFzaWx5IG1pc3Mgc3BlbGxlZFxuZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gJ0FERF9UT19DQVJUJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTSA9ICdSRU1PVkVfSVRFTSc7XG5leHBvcnQgY29uc3QgU1VCX1FVQU5USVRZID0gJ1NVQl9RVUFOVElUWSc7XG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZID0gJ0FERF9RVUFOVElUWSc7XG5leHBvcnQgY29uc3QgQUREX1NISVBQSU5HID0gJ0FERF9TSElQUElORyc7XG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSID0gJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUic7XG5leHBvcnQgY29uc3QgT1JERVJfRk9STSA9ICdPUkRFUl9GT1JNJztcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9DSEFSR0UgPSAnQ0hFQ0tPVVRfQ0hBUkdFJztcbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJUID0gJ1JFU0VUX0NBUlQnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUUyA9ICdBRERfUFJPRFVDVFMnO1xuZXhwb3J0IGNvbnN0IFVTUkVSX0xPR0lOID0gJ1VTUkVSX0xPR0lOJztcbmV4cG9ydCBjb25zdCBDSEVDS19VU1JFUl9MT0dJTiA9ICdDSEVDS19VU1JFUl9MT0dJTic7XG5leHBvcnQgY29uc3QgVVNSRVJfTE9HT1VUID0gJ1VTUkVSX0xPR09VVCc7IiwiaW1wb3J0IHsgXG4gICAgQUREX1RPX0NBUlQsXG4gICAgUkVNT1ZFX0lURU0sXG4gICAgU1VCX1FVQU5USVRZLFxuICAgIEFERF9RVUFOVElUWSxcbiAgICBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXG4gICAgUkVTRVRfQ0FSVCxcbiAgICBBRERfUFJPRFVDVFMsXG4gICAgVVNSRVJfTE9HSU4sXG4gICAgQ0hFQ0tfVVNSRVJfTE9HSU4sXG4gICAgVVNSRVJfTE9HT1VUXG59IGZyb20gJy4vYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucydcblxuLy9DSEVDS19VU1JFUl9MT0dJTlxuZXhwb3J0IGNvbnN0IGNoZWNrVXNlckxvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IENIRUNLX1VTUkVSX0xPR0lOXG4gICAgfVxufVxuXG4vLyBVU1JFUl9MT0dPVVRcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFVTUkVSX0xPR09VVFxuICAgIH1cbn1cblxuLy8gVVNSRVJfTE9HSU5cbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVVNSRVJfTE9HSU5cbiAgICB9XG59XG5cbi8vYWRkIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX1BST0RVQ1RTXG4gICAgfVxufVxuLy9hZGQgY2FydCBhY3Rpb25cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfVE9fQ0FSVCxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL3JlbW92ZSBpdGVtIGFjdGlvblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSRU1PVkVfSVRFTSxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL3N1YnRyYWN0IHF0IGFjdGlvblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UXVhbnRpdHkgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTVUJfUVVBTlRJVFksXG4gICAgICAgIGlkXG4gICAgfVxufVxuLy9hZGQgcXQgYWN0aW9uXG5leHBvcnQgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfUVVBTlRJVFksXG4gICAgICAgIGlkXG4gICAgfVxufVxuXG4vL2FkZCBxdCBhY3Rpb24gd2l0aCBxdWFudGl0eSBudW1iZXJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eVdpdGhOdW1iZXIgPSAoaWQsIHF0eSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICAgICAgaWQsXG4gICAgICAgIHF0eVxuICAgIH1cbn1cblxuLy8gUmVzZXQgY2FydCBhZnRlciBmb3JtIHN1Ym1pdFxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FydCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSRVNFVF9DQVJUXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyByb3V0ZXIsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgY2hpbGQgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyc7XG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gcHJvcHMuaHJlZiAmJiBwcm9wcy5hY3RpdmVDbGFzc05hbWUpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAke3Byb3BzLmFjdGl2ZUNsYXNzTmFtZX1gLnRyaW0oKTtcbiAgICB9XG5cbiAgICBkZWxldGUgcHJvcHMuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgcmV0dXJuIDxMaW5rIHsuLi5wcm9wc30+e1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBjbGFzc05hbWUgfSl9PC9MaW5rPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZlTGluayk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW93bC1jYXJvdXNlbDNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==