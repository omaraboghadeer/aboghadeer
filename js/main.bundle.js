/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./skills.js":
/*!*******************!*\
  !*** ./skills.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skills": () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var _src_images_skills_html5_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/images/skills/html5.svg */ "./src/images/skills/html5.svg");
/* harmony import */ var _src_images_skills_css3_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/images/skills/css3.svg */ "./src/images/skills/css3.svg");
/* harmony import */ var _src_images_skills_js_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/images/skills/js.svg */ "./src/images/skills/js.svg");
/* harmony import */ var _src_images_skills_ts_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/images/skills/ts.svg */ "./src/images/skills/ts.svg");
/* harmony import */ var _src_images_skills_angular_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/images/skills/angular.svg */ "./src/images/skills/angular.svg");
/* harmony import */ var _src_images_skills_react_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/images/skills/react.svg */ "./src/images/skills/react.svg");
/* harmony import */ var _src_images_skills_webpack_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/images/skills/webpack.svg */ "./src/images/skills/webpack.svg");
/* harmony import */ var _src_images_skills_flutter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/images/skills/flutter.svg */ "./src/images/skills/flutter.svg");
/* harmony import */ var _src_images_skills_ionic_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/images/skills/ionic.svg */ "./src/images/skills/ionic.svg");
/* harmony import */ var _src_images_skills_nodejs_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/images/skills/nodejs.svg */ "./src/images/skills/nodejs.svg");
/* harmony import */ var _src_images_skills_next_js_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/images/skills/next-js.svg */ "./src/images/skills/next-js.svg");
/* harmony import */ var _src_images_skills_sass_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/images/skills/sass.svg */ "./src/images/skills/sass.svg");












var Skills = [{
  name: 'html',
  logo: _src_images_skills_html5_svg__WEBPACK_IMPORTED_MODULE_0__,
  exp: "90%",
  color: "#e34c26"
}, {
  name: 'css3',
  logo: _src_images_skills_css3_svg__WEBPACK_IMPORTED_MODULE_1__,
  exp: "85%",
  color: "#264de4"
}, {
  name: 'sass',
  logo: _src_images_skills_sass_svg__WEBPACK_IMPORTED_MODULE_11__,
  exp: "80%",
  color: "#cd6799"
}, {
  name: 'js',
  logo: _src_images_skills_js_svg__WEBPACK_IMPORTED_MODULE_2__,
  exp: "70%",
  color: "#f0db4f"
}, {
  name: 'ts',
  logo: _src_images_skills_ts_svg__WEBPACK_IMPORTED_MODULE_3__,
  exp: "70%",
  color: "#007acc"
}, {
  name: 'angular',
  logo: _src_images_skills_angular_svg__WEBPACK_IMPORTED_MODULE_4__,
  exp: "65%",
  color: "#b52e31"
}, {
  name: 'ionic',
  logo: _src_images_skills_ionic_svg__WEBPACK_IMPORTED_MODULE_8__,
  exp: "65%",
  color: "#498aff"
}, {
  name: 'react',
  logo: _src_images_skills_react_svg__WEBPACK_IMPORTED_MODULE_5__,
  exp: "30%",
  color: "#61dbfb"
}, {
  name: 'wepback',
  logo: _src_images_skills_webpack_svg__WEBPACK_IMPORTED_MODULE_6__,
  exp: "50%",
  color: "#1c78c0"
}, {
  name: 'nodeJS',
  logo: _src_images_skills_nodejs_svg__WEBPACK_IMPORTED_MODULE_9__,
  exp: "30%",
  color: "#68a063"
}, {
  name: 'nextjs',
  logo: _src_images_skills_next_js_svg__WEBPACK_IMPORTED_MODULE_10__,
  exp: "30%",
  color: "#e3e3e3"
}, {
  name: 'flutter',
  logo: _src_images_skills_flutter_svg__WEBPACK_IMPORTED_MODULE_7__,
  exp: "20%",
  color: "#46d1fd"
}];

/***/ }),

/***/ "./src/components/firebase_docs.js":
/*!*****************************************!*\
  !*** ./src/components/firebase_docs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var firebaseConfig = {
  apiKey: "AIzaSyC_B8_Qh-6QFkCJGIvxtimEitpqDSIxSe0",
  authDomain: "webpack-test-firebase.firebaseapp.com",
  projectId: "webpack-test-firebase",
  storageBucket: "webpack-test-firebase.appspot.com",
  messagingSenderId: "59335444510",
  appId: "1:59335444510:web:30392c4ed95b577340c60f"
}; // init firebase app

(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig); // init services

var db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(); // collection ref

var colRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'projects'); // get collection data

var projects_arr = [];

var myProjects = function myProjects() {
  return new Promise(function (resolve, reject) {
    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(colRef).then(function (snapshot) {
      snapshot.docs.forEach(function (doc) {
        projects_arr.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        }));
      });
      return resolve(projects_arr);
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myProjects);

/***/ }),

/***/ "./src/components/my-skills/MySkills.jsx":
/*!***********************************************!*\
  !*** ./src/components/my-skills/MySkills.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MySkills": () => (/* binding */ MySkills),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _MySkills_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MySkills.scss */ "./src/components/my-skills/MySkills.scss");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../skills */ "./skills.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var MySkills = /*#__PURE__*/function (_Component) {
  _inherits(MySkills, _Component);

  var _super = _createSuper(MySkills);

  function MySkills(props) {
    var _this;

    _classCallCheck(this, MySkills);

    _this = _super.call(this, props);
    _this.state = {
      active_skill: {
        index: 0,
        exp: "90%",
        color: "#e34c26"
      }
    };
    return _this;
  }

  _createClass(MySkills, [{
    key: "_showSkillValue",
    value: function _showSkillValue(skill, i) {
      skill.index = i;
      this.setState({
        active_skill: skill
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "skills-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: "My Skills"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "d-flex justify-content-between flex-wrap",
          children: _skills__WEBPACK_IMPORTED_MODULE_2__.Skills.map(function (skill, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              onClick: function onClick() {
                return _this2._showSkillValue(skill, i);
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: skill.logo,
                alt: skill.name,
                className: _this2.state.active_skill.index == i ? 'active' : ''
              })
            }, i);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "bar",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "value",
            style: {
              width: this.state.active_skill.exp,
              background: this.state.active_skill.color
            }
          })
        })]
      });
    }
  }]);

  return MySkills;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MySkills);

/***/ }),

/***/ "./src/components/projects-list/Projects.jsx":
/*!***************************************************!*\
  !*** ./src/components/projects-list/Projects.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/react-splide */ "./node_modules/@splidejs/react-splide/dist/js/react-splide.esm.js");
/* harmony import */ var _splidejs_splide_dist_css_splide_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @splidejs/splide/dist/css/splide.min.css */ "./node_modules/@splidejs/splide/dist/css/splide.min.css");
/* harmony import */ var _projects_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.scss */ "./src/components/projects-list/projects.scss");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var _firebase_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase_docs */ "./src/components/firebase_docs.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var Projects = /*#__PURE__*/function (_Component) {
  _inherits(Projects, _Component);

  var _super = _createSuper(Projects);

  function Projects(props) {
    var _this;

    _classCallCheck(this, Projects);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      projects: [],
      showModal: false,
      single_project: {}
    };
    return _this;
  }

  _createClass(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.state.projects = [];
      (0,_firebase_docs__WEBPACK_IMPORTED_MODULE_4__["default"])().then(function (res) {
        _this2.setState({
          projects: res,
          loading: false
        }, function () {
          return _this2.state = [];
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "componentWillmount",
    value: function componentWillmount() {
      this.state.projects = [];
    } // Modal Functions
    // open modal function

  }, {
    key: "_openPopup",
    value: function _openPopup(project) {
      this.setState({
        showModal: true,
        single_project: project
      });
    } // close modal function

  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        showModal: false,
        single_project: {}
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          projects = _this$state.projects,
          loading = _this$state.loading,
          showModal = _this$state.showModal,
          single_project = _this$state.single_project;
      var splideOptions = {
        type: 'loop',
        autoplay: true,
        perPage: 4,
        breakpoints: {
          1200: {
            perPage: 3,
            type: 'loop'
          },
          991: {
            type: 'loop',
            perPage: 3
          },
          768: {
            type: 'loop',
            perPage: 1
          }
        },
        gap: 10,
        focus: 'center',
        interval: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        resetProgress: true,
        lazyLoad: true
      };
      return loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: "loading..."
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.Splide, {
          options: splideOptions,
          children: projects.map(function (project, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__.SplideSlide, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                onClick: function onClick() {
                  return _this3._openPopup(project);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "for__projectItem",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "body",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: project.defult_image
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "details",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
                      children: project.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", {
                      children: project.type
                    })]
                  })]
                })
              })
            }, index);
          })
        }), showModal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
          show: showModal,
          onHide: function onHide() {
            return _this3.handleClose();
          },
          size: "xl",
          centered: true,
          "aria-labelledby": "contained-modal-title-vcenter",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Header, {
            className: "border-0",
            closeButton: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Title, {
              className: "modalTitle",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h4", {
                children: [single_project.name, " Project"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                children: single_project.type
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Body, {
            className: "modalBody",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "container-fluid",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "row mb-4",
                children: single_project.images.map(function (img, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-md-4 col-12 mb-2",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                      src: img,
                      alt: "".concat(single_project.name, " project, img ").concat(index)
                    })
                  }, index);
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "row g-2 aboutProject",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-md-2 col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: "Link: "
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-md-10 col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: single_project.link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: single_project.link,
                      target: '_blank',
                      children: single_project.link
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      children: "404 link not found \uD83D\uDE13"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-md-2 col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: "Description: "
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-md-10 col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: single_project.description
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-md-2 col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: "My Rule: "
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-md-10 col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: single_project.my_rule
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-md-2 col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: "Worked At: "
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "col-md-10 col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
                      href: single_project.worked_in.website,
                      target: "_blank",
                      children: single_project.worked_in.name
                    })
                  })
                })]
              })]
            })
          })]
        }) : null]
      });
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ (() => {



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Direction;

(function (Direction) {
  Direction["Up"] = "up";
  Direction["Right"] = "right";
  Direction["Down"] = "down";
  Direction["Left"] = "left";
})(Direction || (Direction = {}));

var Renderer = /*#__PURE__*/function () {
  function Renderer(screenElement, gridWidth, gridHeight, gridSize, scale) {
    _classCallCheck(this, Renderer);

    this._screen = screenElement;
    this._ctx = this._screen.getContext("2d");
    this._gridWidth = gridWidth;
    this._gridHeight = gridHeight;
    this._gridSize = gridSize;
    this._scale = scale;
    this.pixelcolor = "#000000";

    this._initScreen();
  }

  _createClass(Renderer, [{
    key: "clearScreen",
    value: function clearScreen() {
      this._ctx.clearRect(0, 0, this._screen.width, this._screen.height);
    }
  }, {
    key: "drawStraight_horizontal",
    value: function drawStraight_horizontal(xgrid, ygrid, flip) {
      this._prepareDraw(xgrid, ygrid, flip);

      this._drawPixel(0, 1);

      this._drawPixel(1, 1);

      this._drawPixel(3, 1);

      this._drawPixel(0, 2);

      this._drawPixel(2, 2);

      this._drawPixel(3, 2);

      this._resetScreen();
    }
  }, {
    key: "drawStraight_vertical",
    value: function drawStraight_vertical(xgrid, ygrid, flip) {
      this._prepareDraw(xgrid, ygrid, flip);

      this._drawPixel(1, 0);

      this._drawPixel(1, 2);

      this._drawPixel(1, 3);

      this._drawPixel(2, 0);

      this._drawPixel(2, 1);

      this._drawPixel(2, 3);

      this._resetScreen();
    }
  }, {
    key: "drawStraight_digest",
    value: function drawStraight_digest(xgrid, ygrid) {
      this._prepareDraw(xgrid, ygrid);

      this._drawPixel(0, 1);

      this._drawPixel(0, 2);

      this._drawPixel(1, 0);

      this._drawPixel(2, 0);

      this._drawPixel(1, 3);

      this._drawPixel(2, 3);

      this._drawPixel(3, 1);

      this._drawPixel(3, 2);

      this._resetScreen();
    }
  }, {
    key: "drawCorner",
    value: function drawCorner(xgrid, ygrid, flipx, flipy) {
      this._prepareDraw(xgrid, ygrid, flipx, flipy);

      this._drawPixel(2, 1);

      this._drawPixel(3, 1);

      this._drawPixel(1, 2);

      this._drawPixel(3, 2);

      this._drawPixel(1, 3);

      this._drawPixel(2, 3);

      this._resetScreen();
    }
  }, {
    key: "drawCorner_digest",
    value: function drawCorner_digest(xgrid, ygrid, flipx, flipy) {
      this._prepareDraw(xgrid, ygrid, flipx, flipy);

      this._drawPixel(3, 3);

      this._resetScreen();
    }
  }, {
    key: "drawHead_horizontal",
    value: function drawHead_horizontal(xgrid, ygrid, flip) {
      this._prepareDraw(xgrid, ygrid, flip);

      this._drawPixel(0, 0);

      this._drawPixel(1, 1);

      this._drawPixel(2, 1);

      this._drawPixel(0, 2);

      this._drawPixel(1, 2);

      this._drawPixel(2, 2);

      this._resetScreen();
    }
  }, {
    key: "drawHead_horizontalreach",
    value: function drawHead_horizontalreach(xgrid, ygrid, flip) {
      this._prepareDraw(xgrid, ygrid, flip);

      this._drawPixel(0, 0);

      this._drawPixel(1, 1);

      this._drawPixel(2, 0);

      this._drawPixel(0, 2);

      this._drawPixel(1, 2);

      this._drawPixel(2, 3);

      this._resetScreen();
    }
  }, {
    key: "drawHead_vertical",
    value: function drawHead_vertical(xgrid, ygrid, flip) {
      this._prepareDraw(xgrid, ygrid, false, flip);

      this._drawPixel(0, 0);

      this._drawPixel(1, 2);

      this._drawPixel(1, 1);

      this._drawPixel(2, 2);

      this._drawPixel(2, 1);

      this._drawPixel(2, 0);

      this._resetScreen();
    }
  }, {
    key: "drawHead_verticalreach",
    value: function drawHead_verticalreach(xgrid, ygrid, flip) {
      this._prepareDraw(xgrid, ygrid, false, flip);

      this._drawPixel(0, 0);

      this._drawPixel(1, 1);

      this._drawPixel(0, 2);

      this._drawPixel(2, 0);

      this._drawPixel(2, 1);

      this._drawPixel(3, 2);

      this._resetScreen();
    }
  }, {
    key: "drawTail_horizontal",
    value: function drawTail_horizontal(xgrid, ygrid, flip) {
      this._prepareDraw(xgrid, ygrid, flip, false);

      this._drawPixel(2, 1);

      this._drawPixel(3, 1);

      this._drawPixel(0, 2);

      this._drawPixel(1, 2);

      this._drawPixel(2, 2);

      this._drawPixel(3, 2);

      this._resetScreen();
    }
  }, {
    key: "drawTail_vertical",
    value: function drawTail_vertical(xgrid, ygrid, flip) {
      this._prepareDraw(xgrid, ygrid, false, flip);

      this._drawPixel(1, 3);

      this._drawPixel(1, 2);

      this._drawPixel(2, 3);

      this._drawPixel(2, 2);

      this._drawPixel(2, 1);

      this._drawPixel(2, 0);

      this._resetScreen();
    }
  }, {
    key: "drawFood",
    value: function drawFood(xgrid, ygrid) {
      this._prepareDraw(xgrid, ygrid, false, false);

      this._drawPixel(0, 1);

      this._drawPixel(1, 0);

      this._drawPixel(2, 1);

      this._drawPixel(1, 2);

      this._resetScreen();
    }
  }, {
    key: "drawBonus",
    value: function drawBonus(xgrid, ygrid) {
      this._prepareDraw(xgrid, ygrid, false, false);

      this._drawPixel(1, 0);

      this._drawPixel(3, 0);

      this._drawPixel(5, 0);

      this._drawPixel(0, 1);

      this._drawPixel(2, 1);

      this._drawPixel(3, 1);

      this._drawPixel(4, 1);

      this._drawPixel(5, 1);

      this._drawPixel(6, 1);

      this._drawPixel(0, 2);

      this._drawPixel(1, 2);

      this._drawPixel(2, 2);

      this._drawPixel(3, 2);

      this._drawPixel(4, 2);

      this._drawPixel(5, 2);

      this._drawPixel(6, 2);

      this._drawPixel(7, 2);

      this._drawPixel(2, 3);

      this._drawPixel(5, 3);

      this._resetScreen();
    }
  }, {
    key: "_initScreen",
    value: function _initScreen() {
      this._screen.width = this._gridWidth * this._gridSize * this._scale;
      this._screen.height = this._gridHeight * this._gridSize * this._scale;
      this._ctx.fillStyle = this.pixelcolor;
    }
  }, {
    key: "_resetScreen",
    value: function _resetScreen() {
      this._ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
  }, {
    key: "_prepareDraw",
    value: function _prepareDraw(xgrid, ygrid) {
      var flipx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var flipy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var translatex = (flipx ? xgrid + 1 : xgrid) * this._gridSize * this._scale;
      var translatey = (flipy ? ygrid + 1 : ygrid) * this._gridSize * this._scale;
      var scalex = flipx ? -1 : 1;
      var scaley = flipy ? -1 : 1;

      this._ctx.translate(translatex, translatey);

      this._ctx.scale(scalex, scaley);
    }
  }, {
    key: "_drawPixel",
    value: function _drawPixel(xpixel, ypixel) {
      this._ctx.fillRect(xpixel * this._scale, ypixel * this._scale, this._scale, this._scale);
    }
  }]);

  return Renderer;
}();

var Game = /*#__PURE__*/function () {
  function Game(settings) {
    _classCallCheck(this, Game);

    this._renderer = new Renderer(settings.canvas, settings.gridWidth, settings.gridHeight, settings.gridSize, settings.pixelSize);
    this._currentGame = null;
    this._width = settings.gridWidth;
    this._height = settings.gridHeight;
    this._previousTickTime = 0;
    this._onGameStart = this._noOp;
    this._onGameEnd = this._noOp;
    this._onScore = this._noOp;
    this._onBonusStart = this._noOp;
    this._onBonusEnd = this._noOp;
    this._onBonusTick = this._noOp;
  }

  _createClass(Game, [{
    key: "running",
    get: function get() {
      return this._currentGame && this._currentGame.running;
    }
  }, {
    key: "new",
    value: function _new(speed, initialLength) {
      speed = Math.min(Math.max(speed, Game.MIN_SPEED), Game.MAX_SPEED);
      initialLength = Math.min(Math.max(initialLength, Game.MIN_INITIAL), Game.MAX_INITIAL);
      this._currentGame = {
        running: true,
        score: 0,
        speed: speed,
        snake: this._constructInitialSnake(initialLength),
        direction: Direction.Right,
        food: this._constructFoodLocation(),
        bonus: null,
        bonustimer: 0,
        bonusappear: Game.BONUS_APPEARANCE,
        win: false
      };

      this._setScore(0);

      this._onGameStart();

      this._tick();
    }
  }, {
    key: "setDirection",
    value: function setDirection(direction) {
      if (!this._currentGame) return;
      var previousDirection = this._currentGame.snake[this._currentGame.snake.length - 1].previous;
      if (direction !== this._oppositeDirectionOf(previousDirection)) this._currentGame.direction = direction;
    }
  }, {
    key: "onGameStart",
    value: function onGameStart(fn) {
      this._onGameStart = fn;
    }
  }, {
    key: "onGameEnd",
    value: function onGameEnd(fn) {
      this._onGameEnd = fn;
    }
  }, {
    key: "onScore",
    value: function onScore(fn) {
      this._onScore = fn;
    }
  }, {
    key: "onBonusStart",
    value: function onBonusStart(fn) {
      this._onBonusStart = fn;
    }
  }, {
    key: "onBonusEnd",
    value: function onBonusEnd(fn) {
      this._onBonusEnd = fn;
    }
  }, {
    key: "onBonusTick",
    value: function onBonusTick(fn) {
      this._onBonusTick = fn;
    }
  }, {
    key: "_noOp",
    value: function _noOp() {}
  }, {
    key: "_oppositeDirectionOf",
    value: function _oppositeDirectionOf(direction) {
      switch (direction) {
        case Direction.Up:
          return Direction.Down;

        case Direction.Down:
          return Direction.Up;

        case Direction.Left:
          return Direction.Right;

        case Direction.Right:
          return Direction.Left;
      }
    }
  }, {
    key: "_constructInitialSnake",
    value: function _constructInitialSnake(length) {
      var parts = [];
      var x = Math.floor((this._width - length) / 2);
      var y = Math.floor(this._height / 2);
      parts.push({
        xgrid: x,
        ygrid: y,
        previous: null,
        next: Direction.Right,
        digest: false
      });

      for (var i = 1; i < length - 1; i++) {
        parts.push({
          xgrid: x + i,
          ygrid: y,
          previous: Direction.Right,
          next: Direction.Right,
          digest: false
        });
      }

      parts.push({
        xgrid: x + length - 1,
        ygrid: y,
        previous: Direction.Right,
        next: null,
        digest: false
      });
      return parts;
    }
  }, {
    key: "_constructFoodLocation",
    value: function _constructFoodLocation() {
      var position = this._constructRandomPosition(0, this._width - 1, 0, this._height - 1);

      while (this._isSnakePosition(position.xgrid, position.ygrid)) {
        position = this._constructRandomPosition(0, this._width - 1, 0, this._height - 1);
      }

      return position;
    }
  }, {
    key: "_constructBonusLocation",
    value: function _constructBonusLocation() {
      var position = this._constructRandomPosition(0, this._width - 2, 0, this._height - 2);

      var tries = 0;

      while (this._isSnakePosition(position.xgrid, position.ygrid) || this._isSnakePosition(position.xgrid + 1, position.ygrid) || this._isFoodPosition(position.xgrid, position.ygrid) || this._isSnakePosition(position.xgrid + 1, position.ygrid)) {
        if (tries === Game.BONUS_MAXTRIES) break;
        position = this._constructRandomPosition(0, this._width - 2, 0, this._height - 2);
        tries++;
      }

      if (tries === Game.BONUS_MAXTRIES) return null;
      return position;
    }
  }, {
    key: "_constructRandomPosition",
    value: function _constructRandomPosition(xmin, xmax, ymin, ymax) {
      return {
        xgrid: this._randomBetween(xmin, xmax),
        ygrid: this._randomBetween(ymin, ymax)
      };
    }
  }, {
    key: "_randomBetween",
    value: function _randomBetween() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (min === 0 && max === 0) return 0;
      return Math.round(Math.random() * (max - min)) + min;
    }
  }, {
    key: "_tick",
    value: function _tick() {
      if (!this._currentGame) return;
      var time = Date.now();

      if (time - this._previousTickTime > Game.MAX_TIMESTEP / this._currentGame.speed) {
        this._update();

        this._render();

        this._previousTickTime = time;
      }

      if (this._currentGame.running) {
        window.requestAnimationFrame(this._tick.bind(this));
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      if (!this._currentGame) return;
      var previousPart = this._currentGame.snake[this._currentGame.snake.length - 1];

      var _this$_movePosition = this._movePosition(previousPart.xgrid, previousPart.ygrid, this._currentGame.direction),
          xnext = _this$_movePosition.xgrid,
          ynext = _this$_movePosition.ygrid;

      if (this._isSnakePosition(xnext, ynext, true)) {
        this._removeBonus();

        this._currentGame.running = false;

        this._onGameEnd(this._currentGame);

        return;
      }

      var foodDigest = this._isFoodPosition(xnext, ynext);

      var bonusDigest = this._isBonusPosition(xnext, ynext);

      previousPart.next = this._currentGame.direction;

      this._currentGame.snake.push({
        xgrid: xnext,
        ygrid: ynext,
        previous: this._currentGame.direction,
        next: null,
        digest: foodDigest || bonusDigest
      });

      if (bonusDigest) {
        var bonusScore = Game.BONUS_BASE + Game.BONUS_MULTIPLIER * this._currentGame.bonustimer;

        this._setScore(this._currentGame.score += bonusScore);

        this._removeBonus();
      }

      if (this._currentGame.bonus) {
        this._currentGame.bonustimer--;

        this._onBonusTick(this._currentGame.bonustimer);

        if (this._currentGame.bonustimer <= 0) this._removeBonus();
      }

      if (foodDigest) {
        this._setScore(this._currentGame.score + 1);

        this._currentGame.speed += Game.SPEED_INCEASE;
        if (!this._currentGame.bonus && this._currentGame.bonusappear > 0) this._currentGame.bonusappear--;
        var spacesToGo = this._width * this._height - this._currentGame.snake.length;

        if (spacesToGo === 0) {
          this._removeBonus();

          this._currentGame.running = false;
          this._currentGame.win = true;

          this._onGameEnd(this._currentGame);

          return;
        }

        this._currentGame.food = this._constructFoodLocation();

        if (!this._currentGame.bonus && this._currentGame.bonusappear === 0 && spacesToGo > Game.BONUS_TIME + 2) {
          this._spawnBonus();
        }
      } else {
        this._currentGame.snake.shift();

        this._currentGame.snake[0].previous = null;
      }
    }
  }, {
    key: "_movePosition",
    value: function _movePosition(xgrid, ygrid, direction) {
      var distance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

      switch (direction) {
        case Direction.Up:
          ygrid -= distance;
          break;

        case Direction.Down:
          ygrid += distance;
          break;

        case Direction.Left:
          xgrid -= distance;
          break;

        case Direction.Right:
          xgrid += distance;
          break;
      }

      return this._wrapPosition(xgrid, ygrid);
    }
  }, {
    key: "_wrapPosition",
    value: function _wrapPosition(xgrid, ygrid) {
      xgrid = xgrid % this._width;
      ygrid = ygrid % this._height;
      if (xgrid < 0) xgrid = this._width + xgrid;
      if (ygrid < 0) ygrid = this._height + ygrid;
      return {
        xgrid: xgrid,
        ygrid: ygrid
      };
    }
  }, {
    key: "_isSnakePosition",
    value: function _isSnakePosition(xgrid, ygrid) {
      var ignoreTail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!this._currentGame) return false;

      var _iterator = _createForOfIteratorHelper(this._currentGame.snake),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;
          if (ignoreTail && !part.previous) continue;
          if (part.xgrid === xgrid && part.ygrid === ygrid) return true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }, {
    key: "_isFoodPosition",
    value: function _isFoodPosition(xgrid, ygrid) {
      if (!this._currentGame) return false;
      return this._currentGame.food.xgrid === xgrid && this._currentGame.food.ygrid == ygrid;
    }
  }, {
    key: "_isBonusPosition",
    value: function _isBonusPosition(xgrid, ygrid) {
      if (!this._currentGame || !this._currentGame.bonus) return false;
      return (this._currentGame.bonus.xgrid === xgrid || this._currentGame.bonus.xgrid + 1 == xgrid) && this._currentGame.bonus.ygrid == ygrid;
    }
  }, {
    key: "_setScore",
    value: function _setScore(score) {
      if (!this._currentGame) return;
      this._currentGame.score = score;

      this._onScore(score);
    }
  }, {
    key: "_spawnBonus",
    value: function _spawnBonus() {
      if (!this._currentGame) return;

      var newBonusLocation = this._constructBonusLocation();

      if (newBonusLocation) {
        this._currentGame.bonus = newBonusLocation;
        this._currentGame.bonustimer = Game.BONUS_TIME;

        this._onBonusTick(this._currentGame.bonustimer);

        this._onBonusStart();
      }
    }
  }, {
    key: "_removeBonus",
    value: function _removeBonus() {
      if (!this._currentGame) return;
      this._currentGame.bonus = null;
      this._currentGame.bonustimer = 0;
      this._currentGame.bonusappear = Game.BONUS_APPEARANCE;

      this._onBonusEnd();
    }
  }, {
    key: "_render",
    value: function _render() {
      this._renderer.clearScreen();

      if (!this._currentGame) return;

      this._renderSnake(this._currentGame.snake);

      this._renderFood(this._currentGame.food.xgrid, this._currentGame.food.ygrid);

      if (this._currentGame.bonus) this._renderBonus(this._currentGame.bonus.xgrid, this._currentGame.bonus.ygrid);
    }
  }, {
    key: "_renderSnake",
    value: function _renderSnake(parts) {
      if (parts.length === 0) return;

      var _iterator2 = _createForOfIteratorHelper(parts),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var part = _step2.value;
          if (part.previous === null && part.next === null) continue;else if (part.previous === null) this._renderTail(part);else if (part.next === null) this._renderHead(part);else if (part.previous === part.next) this._renderStraight(part);else this._renderCorner(part);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_renderTail",
    value: function _renderTail(part) {
      switch (part.next) {
        case Direction.Right:
          this._renderer.drawTail_horizontal(part.xgrid, part.ygrid, false);

          break;

        case Direction.Left:
          this._renderer.drawTail_horizontal(part.xgrid, part.ygrid, true);

          break;

        case Direction.Up:
          this._renderer.drawTail_vertical(part.xgrid, part.ygrid, true);

          break;

        case Direction.Down:
          this._renderer.drawTail_vertical(part.xgrid, part.ygrid, false);

          break;
      }
    }
  }, {
    key: "_renderHead",
    value: function _renderHead(part) {
      var _a;

      var reachPosition = this._movePosition(part.xgrid, part.ygrid, (_a = this._currentGame) === null || _a === void 0 ? void 0 : _a.direction);

      var reach = this._isFoodPosition(reachPosition.xgrid, reachPosition.ygrid) || this._isBonusPosition(reachPosition.xgrid, reachPosition.ygrid);

      switch (part.previous) {
        case Direction.Right:
          if (reach) this._renderer.drawHead_horizontalreach(part.xgrid, part.ygrid, false);else this._renderer.drawHead_horizontal(part.xgrid, part.ygrid, false);
          break;

        case Direction.Left:
          if (reach) this._renderer.drawHead_horizontalreach(part.xgrid, part.ygrid, true);else this._renderer.drawHead_horizontal(part.xgrid, part.ygrid, true);
          break;

        case Direction.Up:
          if (reach) this._renderer.drawHead_verticalreach(part.xgrid, part.ygrid, true);else this._renderer.drawHead_vertical(part.xgrid, part.ygrid, true);
          break;

        case Direction.Down:
          if (reach) this._renderer.drawHead_verticalreach(part.xgrid, part.ygrid, false);else this._renderer.drawHead_vertical(part.xgrid, part.ygrid, false);
          break;
      }
    }
  }, {
    key: "_renderStraight",
    value: function _renderStraight(part) {
      switch (part.next) {
        case Direction.Right:
          this._renderer.drawStraight_horizontal(part.xgrid, part.ygrid, false);

          break;

        case Direction.Left:
          this._renderer.drawStraight_horizontal(part.xgrid, part.ygrid, true);

          break;

        case Direction.Up:
          this._renderer.drawStraight_vertical(part.xgrid, part.ygrid, true);

          break;

        case Direction.Down:
          this._renderer.drawStraight_vertical(part.xgrid, part.ygrid, false);

          break;
      }

      if (part.digest) this._renderer.drawStraight_digest(part.xgrid, part.ygrid);
    }
  }, {
    key: "_renderCorner",
    value: function _renderCorner(part) {
      if (part.previous === Direction.Up && part.next === Direction.Right || part.previous === Direction.Left && part.next === Direction.Down) {
        this._renderer.drawCorner(part.xgrid, part.ygrid, false, false);

        if (part.digest) this._renderer.drawCorner_digest(part.xgrid, part.ygrid, false, false);
      } else if (part.previous === Direction.Up && part.next === Direction.Left || part.previous === Direction.Right && part.next === Direction.Down) {
        this._renderer.drawCorner(part.xgrid, part.ygrid, true, false);

        if (part.digest) this._renderer.drawCorner_digest(part.xgrid, part.ygrid, true, false);
      } else if (part.previous === Direction.Down && part.next === Direction.Right || part.previous === Direction.Left && part.next === Direction.Up) {
        this._renderer.drawCorner(part.xgrid, part.ygrid, false, true);

        if (part.digest) this._renderer.drawCorner_digest(part.xgrid, part.ygrid, false, true);
      } else if (part.previous === Direction.Down && part.next === Direction.Left || part.previous === Direction.Right && part.next === Direction.Up) {
        this._renderer.drawCorner(part.xgrid, part.ygrid, true, true);

        if (part.digest) this._renderer.drawCorner_digest(part.xgrid, part.ygrid, true, true);
      }
    }
  }, {
    key: "_renderFood",
    value: function _renderFood(xgrid, ygrid) {
      this._renderer.drawFood(xgrid, ygrid);
    }
  }, {
    key: "_renderBonus",
    value: function _renderBonus(xgrid, ygrid) {
      this._renderer.drawBonus(xgrid, ygrid);
    }
  }]);

  return Game;
}();

Game.MIN_SPEED = 1;
Game.MAX_SPEED = 9;
Game.MIN_INITIAL = 3;
Game.MAX_INITIAL = 6;
Game.MAX_TIMESTEP = 1000;
Game.SPEED_INCEASE = 0.1;
Game.BONUS_APPEARANCE = 5;
Game.BONUS_TIME = 20;
Game.BONUS_MAXTRIES = 20;
Game.BONUS_BASE = 8;
Game.BONUS_MULTIPLIER = 2;
var canvasEl = document.querySelector("#screen");
var scoreEl = document.querySelector("#score");
var overlayEl = document.querySelector("#overlay");
var SNAKE_START_LENGTH = 5;
var speedSetting = 1;
var settings = {
  pixelSize: 6,
  gridSize: 4,
  gridWidth: 23,
  gridHeight: 13,
  canvas: canvasEl
};

var connectIO = function connectIO() {
  var mobile_buttons_toggle = document.querySelector("#show_mobile");
  var mobile_buttons_container = document.querySelector("#mobile_io");
  var btn_up = document.querySelector("#btn_up");
  var btn_left = document.querySelector("#btn_left");
  var btn_right = document.querySelector("#btn_right");
  var btn_down = document.querySelector("#btn_down");
  var btn_start = document.querySelector("#start");
  var btn_speedup = document.querySelector("#speed_up");
  var btn_speeddown = document.querySelector("#speed_down");
  mobile_buttons_toggle.addEventListener("click", function () {
    mobile_buttons_container.style.display = "block";
    mobile_buttons_toggle.style.display = "none";
  });
  btn_up.addEventListener("click", function () {
    game.setDirection(Direction.Up);
  });
  btn_left.addEventListener("click", function () {
    game.setDirection(Direction.Left);
  });
  btn_right.addEventListener("click", function () {
    game.setDirection(Direction.Right);
  });
  btn_down.addEventListener("click", function () {
    game.setDirection(Direction.Down);
  });
  btn_start.addEventListener("click", function () {
    if (!game.running) game.new(speedSetting, SNAKE_START_LENGTH);
  });
  btn_speedup.addEventListener("click", function () {
    setSpeed(speedSetting + 1);
  });
  btn_speeddown.addEventListener("click", function () {
    setSpeed(speedSetting - 1);
  });
  window.addEventListener("keydown", function (e) {
    // e.preventDefault();
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        game.setDirection(Direction.Up);
        break;

      case "ArrowRight":
      case "KeyD":
        game.setDirection(Direction.Right);
        break;

      case "ArrowDown":
      case "KeyS":
        game.setDirection(Direction.Down);
        break;

      case "ArrowLeft":
      case "KeyA":
        game.setDirection(Direction.Left);
        break;
    }
  });
};

var setScore = function setScore(score) {
  scoreEl.innerText = ("" + score).padStart(4, "0");
};

var showBonus = function showBonus() {
  var bonusEl = document.querySelector("#bonus");
  bonusEl.style.display = "block";
};

var setBonus = function setBonus(time) {
  var bonusEl = document.querySelector("#bonus");
  bonusEl.innerText = ("" + time).padStart(2, "0");
};

var hideBonus = function hideBonus() {
  var bonusEl = document.querySelector("#bonus");
  bonusEl.style.display = "none";
};

var setSpeed = function setSpeed(speed) {
  var speed_up = document.querySelector("#speed_up");
  var speed_down = document.querySelector("#speed_down");
  var speed_value = document.querySelector("#speed_value");
  speed = Math.min(Math.max(speed, Game.MIN_SPEED), Game.MAX_SPEED);

  if (speed === Game.MIN_SPEED) {
    speed_down.style.visibility = "hidden";
  } else {
    speed_down.style.visibility = "visible";
  }

  if (speed === Game.MAX_SPEED) {
    speed_up.style.visibility = "hidden";
  } else {
    speed_up.style.visibility = "visible";
  }

  speedSetting = speed;
  speed_value.innerText = "" + speed;
};

var showOverlay = function showOverlay() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var displayStatus = document.querySelector("#overlay_status");
  var displayScore = document.querySelector("#overlay_score");

  if (data === null) {
    displayStatus.style.display = "none";
    displayScore.style.display = "none";
  } else {
    displayStatus.innerText = data.win ? "You win!" : "Game over";
    displayScore.innerText = "Score: ".concat(data.score);
    displayStatus.style.display = "block";
    displayScore.style.display = "block";
  }

  overlayEl.style.display = "flex";
};

var hideOverlay = function hideOverlay() {
  overlayEl.style.display = "none";
};

var game = new Game(settings);
setSpeed(5);
connectIO();
game.onScore(setScore);
game.onGameStart(hideOverlay);
game.onGameEnd(showOverlay);
game.onBonusStart(showBonus);
game.onBonusEnd(hideBonus);
game.onBonusTick(setBonus);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/game.js */ "./src/game/game.js");
/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_game_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/game.css */ "./src/styles/game.css");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_projects_list_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects-list/Projects */ "./src/components/projects-list/Projects.jsx");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_my_skills_MySkills_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/my-skills/MySkills.jsx */ "./src/components/my-skills/MySkills.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










/**
 * Menu Burger Animation
*/


var burger = document.querySelector('.svgburg');
var path1 = document.querySelector('.path1');
var path2 = document.querySelector('.path2');
var mline = document.querySelector('.mline');

var burgAnimation = function burgAnimation() {
  burger.addEventListener('click', function () {
    path1.classList.toggle('cross');
    path2.classList.toggle('cross');
    mline.classList.toggle('hide');
  });
};

burgAnimation();
/**
 * END:: Menu Burger Animation
*/

/**
 * Window on scroll 
*/

var sections = document.querySelectorAll("section");
var navLi = document.querySelectorAll(".nav_link");

window.onscroll = function () {
  var current = "";
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 77) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(function (link) {
    link.classList.remove("active");

    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
};
/**
 * END:: Window on scroll 
*/


jquery__WEBPACK_IMPORTED_MODULE_5___default()('.nav_link').on('click', function (e) {
  // e.preventDefault();
  var curLink = jquery__WEBPACK_IMPORTED_MODULE_5___default()(this);
  var scrollPoint = jquery__WEBPACK_IMPORTED_MODULE_5___default()(curLink.attr('href')).position().top - 60;
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('html, body').animate({
    scrollTop: scrollPoint
  }, 700);
});
/**
 * Sidebar 
*/

var openSidebar = jquery__WEBPACK_IMPORTED_MODULE_5___default()('#openSidebar');
openSidebar.on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('body').toggleClass('overflow-hidden');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.overlay').toggleClass('show');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.links_sidebar').toggleClass('show');
});
var closeSidebar = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.close');
closeSidebar.on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.overlay').removeClass('show');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('.links_sidebar').removeClass('show');
  jquery__WEBPACK_IMPORTED_MODULE_5___default()('body, .wrapper').removeClass('overflow-hidden');
  path1.classList.toggle('cross');
  path2.classList.toggle('cross');
  mline.classList.toggle('hide');
});
/**
 * END:: Sidebar 
*/

/**
 * Form "Sending Message"
*/

var sendMsg = jquery__WEBPACK_IMPORTED_MODULE_5___default()('.msgForm');
sendMsg.on('submit', function (e) {
  e.preventDefault();
  var payload = {
    from: jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].elements['email'].value,
    subject: jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].elements['subject'].value,
    text: jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].elements['message'].value + "<br><br> " + jquery__WEBPACK_IMPORTED_MODULE_5___default()(this)[0].elements['name'].value
  };
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "0c516fbf3d9b41",
    Password: "88749b9e62d9b3",
    To: 'omar@aboghadeer.com',
    From: payload.from,
    Subject: payload.subject,
    Body: payload.text
  }).then(function (message) {
    if (message == 'OK') {
      toastr__WEBPACK_IMPORTED_MODULE_8___default().success('Mail has been sent Successfully!', 'Success');
      sendMsg[0].reset();
    } else {
      toastr__WEBPACK_IMPORTED_MODULE_8___default().error(message, 'Error');
    }
  });
});
(toastr__WEBPACK_IMPORTED_MODULE_8___default().options) = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
/**
 * END:: Form "Sending Message"
*/
// Top Button

jquery__WEBPACK_IMPORTED_MODULE_5___default()('.top__btn').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_5___default()("html, body").animate({
    scrollTop: 0
  }, 1000);
}); // RENDER REACT COMPONENTS
// 1- PROJECTS

(0,react_dom__WEBPACK_IMPORTED_MODULE_6__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_projects_list_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {}), document.getElementById('myProjects'));
(0,react_dom__WEBPACK_IMPORTED_MODULE_6__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_my_skills_MySkills_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {}), document.getElementById('mySkills'));

/***/ }),

/***/ "./src/components/my-skills/MySkills.scss":
/*!************************************************!*\
  !*** ./src/components/my-skills/MySkills.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/projects-list/projects.scss":
/*!****************************************************!*\
  !*** ./src/components/projects-list/projects.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/game.css":
/*!*****************************!*\
  !*** ./src/styles/game.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/skills/angular.svg":
/*!***************************************!*\
  !*** ./src/images/skills/angular.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/angular.svg";

/***/ }),

/***/ "./src/images/skills/css3.svg":
/*!************************************!*\
  !*** ./src/images/skills/css3.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/css3.svg";

/***/ }),

/***/ "./src/images/skills/flutter.svg":
/*!***************************************!*\
  !*** ./src/images/skills/flutter.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/flutter.svg";

/***/ }),

/***/ "./src/images/skills/html5.svg":
/*!*************************************!*\
  !*** ./src/images/skills/html5.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/html5.svg";

/***/ }),

/***/ "./src/images/skills/ionic.svg":
/*!*************************************!*\
  !*** ./src/images/skills/ionic.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ionic.svg";

/***/ }),

/***/ "./src/images/skills/js.svg":
/*!**********************************!*\
  !*** ./src/images/skills/js.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/js.svg";

/***/ }),

/***/ "./src/images/skills/next-js.svg":
/*!***************************************!*\
  !*** ./src/images/skills/next-js.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/next-js.svg";

/***/ }),

/***/ "./src/images/skills/nodejs.svg":
/*!**************************************!*\
  !*** ./src/images/skills/nodejs.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/nodejs.svg";

/***/ }),

/***/ "./src/images/skills/react.svg":
/*!*************************************!*\
  !*** ./src/images/skills/react.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/react.svg";

/***/ }),

/***/ "./src/images/skills/sass.svg":
/*!************************************!*\
  !*** ./src/images/skills/sass.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sass.svg";

/***/ }),

/***/ "./src/images/skills/ts.svg":
/*!**********************************!*\
  !*** ./src/images/skills/ts.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ts.svg";

/***/ }),

/***/ "./src/images/skills/webpack.svg":
/*!***************************************!*\
  !*** ./src/images/skills/webpack.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/webpack.svg";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_website_webpack"] = self["webpackChunkmy_website_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_splidejs_react-splide_dist_js_react-splide_esm_js-node_modules_bootstrap-8c00cc"], () => (__webpack_require__("./src/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map