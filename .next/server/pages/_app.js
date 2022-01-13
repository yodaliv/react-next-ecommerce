module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GoTop = props => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return __jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop
    }, __jsx("i", {
      className: "bx bx-up-arrow-alt"
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderGoTopIcon());
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/GoTop */ "./components/Shared/GoTop.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Livani - React Next eCommerce Template"), __jsx("meta", {
    name: "description",
    content: "Livani - React Next eCommerce Template. This has been built with React, Next.js, Express.js, and ES6+"
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "Livani - React Next eCommerce Template"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "Livani - React Next eCommerce Template"
  }), __jsx("link", {
    rel: "canonical",
    href: "https://livani-react.envytheme.com/"
  }), __jsx("meta", {
    property: "og:image",
    content: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg"
  })), loader ? 'Loading' : children, __jsx(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: auth, firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);


 // Need to update below config

const config = {
  apiKey: "api_key",
  authDomain: "example_id.firebaseapp.com",
  databaseURL: "database-url.firebaseio.com",
  projectId: "project-id",
  storageBucket: "bucket-id.appspot.com",
  messagingSenderId: "321313132",
  appId: "12313131313323"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/cartActions */ "./store/actions/cartActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const MyApp = ({
  Component,
  pageProps,
  store
}) => {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    store.dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["checkUserLogin"])());
    store.dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addProducts"])());
  });
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store
  }, __jsx(Component, pageProps)));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__["initStore"])(MyApp));

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

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const db = _firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].firestore();
const dbOrderRef = db.collection('products');


const token = '76483461103103918uhkjdkjc';
const initState = {
  products: [],
  addedItems: [],
  total: 0,
  shipping: 0,
  login: false
};

const cartReducer = (state = initState, action) => {
  // User Logout
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["USRER_LOGOUT"]) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('_livani_token_');
    return _objectSpread(_objectSpread({}, state), {}, {
      login: false
    });
  } // Check if user login


  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["CHECK_USRER_LOGIN"]) {
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('_livani_token_');

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  } // User Login


  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["USRER_LOGIN"]) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('_livani_token_', token);
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('_livani_token_'); // console.log('token', getToken)

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_PRODUCTS"]) {
    let productsArray = [];
    dbOrderRef.get().then(res => {
      res.forEach(doc => {
        let productsObj = doc.data();
        productsObj.id = doc.id;
        productsArray.push(productsObj);
      });
    }); // console.log('www', productsArray)

    return _objectSpread(_objectSpread({}, state), {}, {
      products: productsArray
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_TO_CART"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_QUANTITY_WITH_NUMBER"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.newPrice * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.newPrice * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.newPrice;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["SUB_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 30
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 30
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
};

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJwcm9wcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwidGltZW91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJvblNjcm9sbFN0ZXAiLCJwYWdlWU9mZnNldCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50Iiwic2Nyb2xsIiwic2Nyb2xsU3RlcEluUHgiLCJzY3JvbGxUb1RvcCIsInNldEludGVydmFsIiwiZGVsYXlJbk1zIiwicmVuZGVyR29Ub3BJY29uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJzZXRUaW1lb3V0IiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXV0aCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsImNoZWNrVXNlckxvZ2luIiwiYWRkUHJvZHVjdHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9JVEVNIiwiU1VCX1FVQU5USVRZIiwiQUREX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwiT1JERVJfRk9STSIsIkNIRUNLT1VUX0NIQVJHRSIsIlJFU0VUX0NBUlQiLCJBRERfUFJPRFVDVFMiLCJVU1JFUl9MT0dJTiIsIkNIRUNLX1VTUkVSX0xPR0lOIiwiVVNSRVJfTE9HT1VUIiwidHlwZSIsInVzZXJMb2dvdXQiLCJ1c2VyTG9naW4iLCJhZGRUb0NhcnQiLCJpZCIsInJlbW92ZUl0ZW0iLCJzdWJ0cmFjdFF1YW50aXR5IiwiYWRkUXVhbnRpdHkiLCJhZGRRdWFudGl0eVdpdGhOdW1iZXIiLCJxdHkiLCJyZXNldENhcnQiLCJkYiIsImZpcmVzdG9yZSIsImRiT3JkZXJSZWYiLCJjb2xsZWN0aW9uIiwidG9rZW4iLCJpbml0U3RhdGUiLCJwcm9kdWN0cyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsInNoaXBwaW5nIiwibG9naW4iLCJjYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29va2llIiwicmVtb3ZlIiwiZ2V0VG9rZW4iLCJnZXQiLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwidGhlbiIsInJlcyIsImZvckVhY2giLCJkb2MiLCJwcm9kdWN0c09iaiIsImRhdGEiLCJwdXNoIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsIm5ld1ByaWNlIiwibmV3VG90YWwiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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SUMsV0FBSyxFQUFFLENBSFg7QUFJSUMsY0FBUSxFQUFFO0FBSmQ7QUFNSCxHQVBELE1BU0s7QUFDRCxXQUFPRyxLQUFQO0FBQ0g7QUFDSixDQWhNRDs7QUFrTU8sTUFBTXJDLFNBQVMsR0FBRyxDQUFDOEQsWUFBWSxHQUFHaEMsU0FBaEIsS0FBOEI7QUFDbkQsU0FBT2lDLHlEQUFXLENBQ2QzQixXQURjLEVBRWQwQixZQUZjLEVBR2RFLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDQyxrREFBRCxDQUFoQixDQUhMLENBQWxCO0FBS0gsQ0FOTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE9QLHlDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHb1RvcCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3RoZVBvc2l0aW9uLCBzZXRUaGVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24odHJ1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24oZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zdCBvblNjcm9sbFN0ZXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgd2luZG93LnBhZ2VZT2Zmc2V0IC0gcHJvcHMuc2Nyb2xsU3RlcEluUHgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChvblNjcm9sbFN0ZXAsIHByb3BzLmRlbGF5SW5Ncyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyR29Ub3BJY29uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bnby10b3AgJHt0aGVQb3NpdGlvbiA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LXVwLWFycm93LWFsdFwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3JlbmRlckdvVG9wSWNvbigpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9TaGFyZWQvR29Ub3AnO1xuXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSwgMjAwMCk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MaXZhbmkgLSBSZWFjdCBOZXh0IGVDb21tZXJjZSBUZW1wbGF0ZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkxpdmFuaSAtIFJlYWN0IE5leHQgZUNvbW1lcmNlIFRlbXBsYXRlLiBUaGlzIGhhcyBiZWVuIGJ1aWx0IHdpdGggUmVhY3QsIE5leHQuanMsIEV4cHJlc3MuanMsIGFuZCBFUzYrXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkxpdmFuaSAtIFJlYWN0IE5leHQgZUNvbW1lcmNlIFRlbXBsYXRlXCI+PC9tZXRhPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiTGl2YW5pIC0gUmVhY3QgTmV4dCBlQ29tbWVyY2UgVGVtcGxhdGVcIj48L21ldGE+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vbGl2YW5pLXJlYWN0LmVudnl0aGVtZS5jb20vXCI+PC9saW5rPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTItMTU4OTIxNjA5MzExMy5qcGdcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAge2xvYWRlciA/ICdMb2FkaW5nJyA6IGNoaWxkcmVufVxuICAgICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbi8vIE5lZWQgdG8gdXBkYXRlIGJlbG93IGNvbmZpZ1xuY29uc3QgY29uZmlnID0ge1xuICAgIGFwaUtleTogXCJhcGlfa2V5XCIsXG4gICAgYXV0aERvbWFpbjogXCJleGFtcGxlX2lkLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIGRhdGFiYXNlVVJMOiBcImRhdGFiYXNlLXVybC5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJwcm9qZWN0LWlkXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJidWNrZXQtaWQuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMjEzMTMxMzJcIixcbiAgICBhcHBJZDogXCIxMjMxMzEzMTMxMzMyM1wiXG59O1xuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbn1cbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKCk7XG5leHBvcnQge1xuICAgIGF1dGgsXG4gICAgZmlyZWJhc2Vcbn07IiwiaW1wb3J0ICcuLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy9jYXJ0UmVkdWNlcic7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9fQXBwL0xheW91dCc7XG5pbXBvcnQgeyBjaGVja1VzZXJMb2dpbiwgYWRkUHJvZHVjdHMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zJztcblxuY29uc3QgTXlBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZX0pID0+IHtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChjaGVja1VzZXJMb2dpbigpKVxuICAgICAgICBzdG9yZS5kaXNwYXRjaChhZGRQcm9kdWN0cygpKVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG4gICAgaWYoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIH1cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShNeUFwcCkiLCIvL1R5cGVzIHNob3VsZCBiZSBpbiBjb25zdCB0byBhdm9pZCB0eXBvcyBhbmQgZHVwbGljYXRpb24gc2luY2UgaXQncyBhIHN0cmluZyBhbmQgY291bGQgYmUgZWFzaWx5IG1pc3Mgc3BlbGxlZFxuZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gJ0FERF9UT19DQVJUJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTSA9ICdSRU1PVkVfSVRFTSc7XG5leHBvcnQgY29uc3QgU1VCX1FVQU5USVRZID0gJ1NVQl9RVUFOVElUWSc7XG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZID0gJ0FERF9RVUFOVElUWSc7XG5leHBvcnQgY29uc3QgQUREX1NISVBQSU5HID0gJ0FERF9TSElQUElORyc7XG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSID0gJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUic7XG5leHBvcnQgY29uc3QgT1JERVJfRk9STSA9ICdPUkRFUl9GT1JNJztcbmV4cG9ydCBjb25zdCBDSEVDS09VVF9DSEFSR0UgPSAnQ0hFQ0tPVVRfQ0hBUkdFJztcbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJUID0gJ1JFU0VUX0NBUlQnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUUyA9ICdBRERfUFJPRFVDVFMnO1xuZXhwb3J0IGNvbnN0IFVTUkVSX0xPR0lOID0gJ1VTUkVSX0xPR0lOJztcbmV4cG9ydCBjb25zdCBDSEVDS19VU1JFUl9MT0dJTiA9ICdDSEVDS19VU1JFUl9MT0dJTic7XG5leHBvcnQgY29uc3QgVVNSRVJfTE9HT1VUID0gJ1VTUkVSX0xPR09VVCc7IiwiaW1wb3J0IHsgXG4gICAgQUREX1RPX0NBUlQsXG4gICAgUkVNT1ZFX0lURU0sXG4gICAgU1VCX1FVQU5USVRZLFxuICAgIEFERF9RVUFOVElUWSxcbiAgICBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXG4gICAgUkVTRVRfQ0FSVCxcbiAgICBBRERfUFJPRFVDVFMsXG4gICAgVVNSRVJfTE9HSU4sXG4gICAgQ0hFQ0tfVVNSRVJfTE9HSU4sXG4gICAgVVNSRVJfTE9HT1VUXG59IGZyb20gJy4vYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucydcblxuLy9DSEVDS19VU1JFUl9MT0dJTlxuZXhwb3J0IGNvbnN0IGNoZWNrVXNlckxvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IENIRUNLX1VTUkVSX0xPR0lOXG4gICAgfVxufVxuXG4vLyBVU1JFUl9MT0dPVVRcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFVTUkVSX0xPR09VVFxuICAgIH1cbn1cblxuLy8gVVNSRVJfTE9HSU5cbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVVNSRVJfTE9HSU5cbiAgICB9XG59XG5cbi8vYWRkIHByb2R1Y3RzXG5leHBvcnQgY29uc3QgYWRkUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX1BST0RVQ1RTXG4gICAgfVxufVxuLy9hZGQgY2FydCBhY3Rpb25cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfVE9fQ0FSVCxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL3JlbW92ZSBpdGVtIGFjdGlvblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSRU1PVkVfSVRFTSxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL3N1YnRyYWN0IHF0IGFjdGlvblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UXVhbnRpdHkgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTVUJfUVVBTlRJVFksXG4gICAgICAgIGlkXG4gICAgfVxufVxuLy9hZGQgcXQgYWN0aW9uXG5leHBvcnQgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfUVVBTlRJVFksXG4gICAgICAgIGlkXG4gICAgfVxufVxuXG4vL2FkZCBxdCBhY3Rpb24gd2l0aCBxdWFudGl0eSBudW1iZXJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eVdpdGhOdW1iZXIgPSAoaWQsIHF0eSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICAgICAgaWQsXG4gICAgICAgIHF0eVxuICAgIH1cbn1cblxuLy8gUmVzZXQgY2FydCBhZnRlciBmb3JtIHN1Ym1pdFxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FydCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSRVNFVF9DQVJUXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcbmNvbnN0IGRiT3JkZXJSZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9kdWN0cycpO1xuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5pbXBvcnQgeyBcbiAgICBBRERfVE9fQ0FSVCxcbiAgICBSRU1PVkVfSVRFTSxcbiAgICBTVUJfUVVBTlRJVFksXG4gICAgQUREX1FVQU5USVRZLCBcbiAgICBBRERfU0hJUFBJTkcsXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxuICAgIFJFU0VUX0NBUlQsXG4gICAgQUREX1BST0RVQ1RTLFxuICAgIFVTUkVSX0xPR0lOLFxuICAgIENIRUNLX1VTUkVSX0xPR0lOLFxuICAgIFVTUkVSX0xPR09VVFxufSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcy9jYXJ0LWFjdGlvbnMnXG5cbmNvbnN0IHRva2VuID0gJzc2NDgzNDYxMTAzMTAzOTE4dWhramRramMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gICAgcHJvZHVjdHM6IFtdLFxuICAgIGFkZGVkSXRlbXM6W10sXG4gICAgdG90YWw6IDAsXG4gICAgc2hpcHBpbmc6IDAsXG4gICAgbG9naW46IGZhbHNlXG59XG5cbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcblxuICAgIC8vIFVzZXIgTG9nb3V0XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBVU1JFUl9MT0dPVVQpe1xuICAgICAgICBjb29raWUucmVtb3ZlKCdfbGl2YW5pX3Rva2VuXycpXG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgbG9naW46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIGxvZ2luXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBDSEVDS19VU1JFUl9MT0dJTil7XG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX2xpdmFuaV90b2tlbl8nKVxuXG4gICAgICAgIGlmIChnZXRUb2tlbiA9PSB0b2tlbil7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVzZXIgTG9naW5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gVVNSRVJfTE9HSU4pe1xuICAgICAgICBjb29raWUuc2V0KCdfbGl2YW5pX3Rva2VuXycsIHRva2VuKTtcblxuICAgICAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19saXZhbmlfdG9rZW5fJylcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygndG9rZW4nLCBnZXRUb2tlbilcblxuICAgICAgICBpZiAoZ2V0VG9rZW4gPT0gdG9rZW4pe1xuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9QUk9EVUNUUyl7XG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XG4gICAgICAgIGRiT3JkZXJSZWYuZ2V0KClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHJlcy5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RzT2JqID0gZG9jLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0c09iai5pZCA9IGRvYy5pZDtcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0FycmF5LnB1c2gocHJvZHVjdHNPYmopXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3d3dycsIHByb2R1Y3RzQXJyYXkpXG4gICAgICAgIFxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XG4gICAgICAgIH1cbiAgICB9XG4gICBcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NBUlQpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFTU9WRV9JVEVNKXtcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxuICAgICAgICBcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLm5ld1ByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFNVQl9RVUFOVElUWSl7ICBcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgICBpZihhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpe1xuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1NISVBQSU5HKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRVNFVF9DQVJUKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXG4gICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSBpbml0U3RhdGUpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgICAgIGNhcnRSZWR1Y2VyLFxuICAgICAgICBpbml0aWFsU3RhdGUsXG4gICAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9