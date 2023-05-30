import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __commonJS
} from "./chunk-DFKQJ226.js";

// node_modules/@fullpage/react-fullpage/dist/react-fullpage.js
var require_react_fullpage = __commonJS({
  "node_modules/@fullpage/react-fullpage/dist/react-fullpage.js"(exports, module) {
    (() => {
      var __webpack_modules__ = {
        /***/
        271: (
          /***/
          (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
            "use strict";
            __webpack_require__2.d(__webpack_exports__2, {
              /* harmony export */
              "Z": () => __WEBPACK_DEFAULT_EXPORT__
              /* harmony export */
            });
            const __WEBPACK_DEFAULT_EXPORT__ = (debug, compName) => {
              return debug ? function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                return console.log(...[`<${compName}/> Debug Log: `, ...args]);
              } : () => {
              };
            };
          }
        ),
        /***/
        88: (
          /***/
          (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
            "use strict";
            __webpack_require__2.d(__webpack_exports__2, {
              "Z": () => (
                /* binding */
                components_ReactFullpage
              )
            });
            var external_react_ = __webpack_require__2(497);
            var external_react_default = __webpack_require__2.n(external_react_);
            var injectStylesIntoStyleTag = __webpack_require__2(379);
            var injectStylesIntoStyleTag_default = __webpack_require__2.n(injectStylesIntoStyleTag);
            var styleDomAPI = __webpack_require__2(795);
            var styleDomAPI_default = __webpack_require__2.n(styleDomAPI);
            var insertBySelector = __webpack_require__2(569);
            var insertBySelector_default = __webpack_require__2.n(insertBySelector);
            var setAttributesWithoutAttributes = __webpack_require__2(565);
            var setAttributesWithoutAttributes_default = __webpack_require__2.n(setAttributesWithoutAttributes);
            var insertStyleElement = __webpack_require__2(216);
            var insertStyleElement_default = __webpack_require__2.n(insertStyleElement);
            var styleTagTransform = __webpack_require__2(589);
            var styleTagTransform_default = __webpack_require__2.n(styleTagTransform);
            var fullpage_min = __webpack_require__2(563);
            ;
            var options = {};
            options.styleTagTransform = styleTagTransform_default();
            options.setAttributes = setAttributesWithoutAttributes_default();
            options.insert = insertBySelector_default().bind(null, "head");
            options.domAPI = styleDomAPI_default();
            options.insertStyleElement = insertStyleElement_default();
            var update = injectStylesIntoStyleTag_default()(fullpage_min.Z, options);
            const dist_fullpage_min = fullpage_min.Z && fullpage_min.Z.locals ? fullpage_min.Z.locals : void 0;
            var Logger = __webpack_require__2(271);
            var selectors = __webpack_require__2(542);
            ;
            function ownKeys(object, enumerableOnly) {
              var keys = Object.keys(object);
              if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                })), keys.push.apply(keys, symbols);
              }
              return keys;
            }
            function _objectSpread(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
                  _defineProperty(target, key, source[key]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                  Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
              }
              return target;
            }
            function _defineProperty(obj, key, value) {
              if (key in obj) {
                Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
              } else {
                obj[key] = value;
              }
              return obj;
            }
            let Fullpage;
            const isFunc = (val) => typeof val === "function";
            const isEqualArray = (firstArr, secondArr) => {
              if (firstArr.length !== secondArr.length)
                return false;
              return firstArr.find((el) => !secondArr.includes(el)) == null;
            };
            const fullpageCallbacks = ["afterLoad", "afterRender", "afterResize", "afterResponsive", "afterSlideLoad", "onLeave", "onSlideLeave"];
            class ReactFullpage extends external_react_default().Component {
              constructor(props) {
                super(props);
                const { render, pluginWrapper } = this.props;
                if (!isFunc(render)) {
                  throw new Error("must provide render prop to <ReactFullpage />");
                }
                this.log = (0, Logger.Z)(this.props.debug, "ReactFullpage");
                this.log("Building component");
                this.log("Importing vendor files");
                this.importVendors();
                if (pluginWrapper) {
                  this.log("Calling plugin wrapper");
                  pluginWrapper();
                }
                this.log("Requiring fullpage.js");
                Fullpage = __webpack_require__2(933);
                this.state = { initialized: false, sectionCount: 0, slideCount: 0 };
              }
              componentDidMount() {
                const opts = this.buildOptions();
                this.log("React Lifecycle: componentDidMount()");
                if (Fullpage) {
                  this.init(opts);
                  this.markInitialized();
                }
              }
              isReRenderNecessary(prevProps) {
                const newSectionCount = this.getSectionCount();
                const newSlideCount = this.getSlideCount();
                const { sectionCount, slideCount } = this.state;
                let isReRenderNecessary = sectionCount !== newSectionCount || slideCount !== newSlideCount;
                const propertiesThatNeedReRender = ["sectionsColor", "navigationTooltips", "navigationPosition", "navigation", "scrollBar"];
                propertiesThatNeedReRender.forEach((property) => {
                  if (typeof prevProps[property] !== "undefined") {
                    if (Array.isArray(prevProps[property])) {
                      isReRenderNecessary = isReRenderNecessary || !isEqualArray(prevProps[property], this.props[property]);
                    } else {
                      isReRenderNecessary = isReRenderNecessary || prevProps[property] !== this.props[property];
                    }
                  }
                });
                return isReRenderNecessary;
              }
              componentDidUpdate(prevProps) {
                this.log("React Lifecycle: componentDidUpdate()");
                if (this.isReRenderNecessary(prevProps)) {
                  this.log("rebuilding due to a change in fullpage.js props or num sections/slides");
                  this.reRender();
                  return;
                }
              }
              componentWillUnmount() {
                this.destroy();
              }
              getSectionCount() {
                const { sectionSelector = selectors.uS } = this.props;
                const { length } = document.querySelectorAll(sectionSelector);
                return length;
              }
              getSlideCount() {
                const { slideSelector = selectors.xH } = this.props;
                const { length } = document.querySelectorAll(slideSelector);
                return length;
              }
              importVendors() {
                const { easing, css3 } = this.props;
                if (easing && !css3) {
                  __webpack_require__2(239);
                }
              }
              init(opts) {
                this.log("Reinitializing fullpage with options", opts);
                const originalAnimateAnchor = opts.animateAnchor;
                opts.animateAnchor = false;
                new Fullpage(selectors.Km, opts);
                this.fullpageApi = window.fullpage_api;
                this.fpUtils = window.fp_utils;
                this.fpEasings = window.fp_easings;
                window.fullpage_api.getFullpageData().options.animateAnchor = originalAnimateAnchor;
              }
              destroy() {
                this.log("Destroying fullpage instance");
                this.fullpageApi.destroy("all");
              }
              reRender() {
                const slideSelector = this.props.slideSelector || ".slide";
                const sectionSelector = this.props.sectionSelector || ".section";
                const activeSection = document.querySelector(sectionSelector + ".active");
                const activeSectionIndex = activeSection ? this.fpUtils.index(activeSection) : this.state.destination ? this.state.destination.index - 1 : 0;
                const activeSlide = document.querySelector(sectionSelector + ".active " + slideSelector + ".active");
                const activeSlideIndex = activeSlide ? this.fpUtils.index(activeSlide) : -1;
                this.destroy();
                if (activeSectionIndex > -1) {
                  this.fpUtils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], "active");
                }
                if (activeSlideIndex > -1) {
                  this.fpUtils.addClass(activeSlide, "active");
                }
                this.init(this.buildOptions());
              }
              markInitialized() {
                this.log("Marking initialized");
                this.setState({ initialized: true, sectionCount: this.getSectionCount(), slideCount: this.getSlideCount() });
              }
              buildOptions() {
                var _this = this;
                let listeners = null;
                if (!this.state.initialized) {
                  const filterCb = (key) => !!Object.keys(this.props).find((cb) => {
                    return cb === key;
                  });
                  const registered = fullpageCallbacks.filter(filterCb);
                  listeners = registered.reduce((result, key) => {
                    return _objectSpread(_objectSpread({}, result), {}, { [key]: function() {
                      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                      }
                      return _this.update(...[key, ...args]);
                    } });
                  }, {});
                }
                const options2 = _objectSpread(_objectSpread({}, this.props), listeners);
                this.log("Building fullpage.js options: ", options2);
                return options2;
              }
              update(lastEvent) {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                this.log("Event trigger: ", lastEvent);
                let state = _objectSpread(_objectSpread({}, this.state), {}, { sectionCount: this.getSectionCount(), slideCount: this.getSlideCount() });
                const makeState = (callbackParameters) => _objectSpread(_objectSpread(_objectSpread({}, state), callbackParameters), {}, { lastEvent });
                const fromArgs = (argList) => argList.reduce((result, key, i) => {
                  const value = args[i];
                  result[key] = value;
                  return result;
                }, {});
                switch (lastEvent) {
                  case "afterLoad":
                    state = makeState(fromArgs(["origin", "destination", "direction"]));
                    break;
                  case "afterResize":
                    state = makeState(fromArgs([""]));
                    break;
                  case "afterResponsive":
                    state = makeState(fromArgs(["isResponsive"]));
                    break;
                  case "afterSlideLoad":
                    state = makeState(fromArgs(["section", "origin", "destination", "direction"]));
                    break;
                  case "onLeave":
                    state = makeState(fromArgs(["origin", "destination", "direction"]));
                    break;
                  case "onSlideLeave":
                    state = makeState(fromArgs(["section", "origin", "slideIndex", "destination", "direction"]));
                    break;
                  default:
                    break;
                }
                const returned = this.props[lastEvent](...args);
                this.log("Called callback: Returning => ", returned);
                this.log("Updating State => ", state);
                this.setState(state);
                return returned;
              }
              render() {
                this.log("<== Rendering ==>");
                return external_react_default().createElement("div", { id: selectors.W1 }, this.props.render(this));
              }
            }
            ReactFullpage.defaultProps = { sectionsColor: [] };
            const components_ReactFullpage = ReactFullpage;
          }
        ),
        /***/
        882: (
          /***/
          (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
            "use strict";
            __webpack_require__2.d(__webpack_exports__2, {
              /* harmony export */
              "Z": () => __WEBPACK_DEFAULT_EXPORT__
              /* harmony export */
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(497);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(react__WEBPACK_IMPORTED_MODULE_0__);
            var _Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__2(271);
            var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(542);
            class ReactFullpageShell extends react__WEBPACK_IMPORTED_MODULE_0___default().Component {
              constructor(props) {
                super(props);
                this.state = {};
                this.log = (0, _Logger__WEBPACK_IMPORTED_MODULE_2__.Z)(this.props.debug, "ReactFullpageShell");
                this.log("Building component");
              }
              render() {
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: _selectors__WEBPACK_IMPORTED_MODULE_1__.W1 }, this.props.render(this));
              }
            }
            const __WEBPACK_DEFAULT_EXPORT__ = ReactFullpageShell;
          }
        ),
        /***/
        542: (
          /***/
          (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
            "use strict";
            __webpack_require__2.d(__webpack_exports__2, {
              /* harmony export */
              "W1": () => (
                /* binding */
                MAIN_SELECTOR
              ),
              /* harmony export */
              "Km": () => (
                /* binding */
                ID_SELECTOR
              ),
              /* harmony export */
              "uS": () => (
                /* binding */
                DEFAULT_SECTION
              ),
              /* harmony export */
              "xH": () => (
                /* binding */
                DEFAULT_SLIDE
              )
              /* harmony export */
            });
            const MAIN_SELECTOR = "fullpage";
            const ID_SELECTOR = `#${MAIN_SELECTOR}`;
            const DEFAULT_SECTION = ".section";
            const DEFAULT_SLIDE = ".SLIDE";
          }
        ),
        /***/
        563: (
          /***/
          (module2, __webpack_exports__2, __webpack_require__2) => {
            "use strict";
            __webpack_require__2.d(__webpack_exports__2, {
              /* harmony export */
              "Z": () => __WEBPACK_DEFAULT_EXPORT__
              /* harmony export */
            });
            var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(645);
            var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) {
              return i[1];
            });
            ___CSS_LOADER_EXPORT___.push([module2.id, "/*!\r\n * fullPage 4.0.20\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2021 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:100%;display:block}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-table{display:flex;flex-direction:column;justify-content:center;width:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-prev{left:15px}.fp-next{right:15px}.fp-arrow{width:0;height:0;border-style:solid}.fp-arrow.fp-prev{border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-arrow.fp-next{border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translate3d(0,-50%,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height.fp-section{height:auto!important}.fp-responsive .fp-is-overflow.fp-section{height:auto!important}.fp-scrollable .fp-section,.fp-scrollable .fp-slide,.fp-scrollable.fp-responsive .fp-is-overflow.fp-section{height:100vh;height:calc(var(--vh,1vh) * 100)}.fp-scrollable .fp-section:not(.fp-auto-height):not([data-percentage]),.fp-scrollable .fp-slide:not(.fp-auto-height):not([data-percentage]),.fp-scrollable.fp-responsive .fp-is-overflow.fp-section:not(.fp-auto-height):not([data-percentage]){min-height:100vh;min-height:calc(var(--vh,1vh) * 100)}.fp-overflow{justify-content:flex-start;max-height:100vh}.fp-scrollable .fp-auto-height .fp-overflow{max-height:none}.fp-is-overflow .fp-overflow.fp-auto-height,.fp-is-overflow .fp-overflow.fp-auto-height-responsive,.fp-is-overflow>.fp-overflow{overflow-y:auto}.fp-overflow{outline:0}.fp-overflow.fp-table{display:block}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important;min-height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.fp-scroll-mac .fp-overflow::-webkit-scrollbar{background-color:transparent;width:9px}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-track{background-color:transparent}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.4);border-radius:16px;border:4px solid transparent}.fp-warning,.fp-watermark{z-index:9999999;position:absolute;bottom:0}.fp-warning,.fp-watermark a{text-decoration:none;color:#000;background:rgba(255,255,255,.6);padding:5px 8px;font-size:14px;font-family:arial;color:#000;display:inline-block;border-radius:3px;margin:12px}.fp-noscroll .fp-overflow{overflow:hidden}\r\n", ""]);
            const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
          }
        ),
        /***/
        645: (
          /***/
          (module2) => {
            "use strict";
            module2.exports = function(cssWithMappingToString) {
              var list = [];
              list.toString = function toString() {
                return this.map(function(item) {
                  var content = cssWithMappingToString(item);
                  if (item[2]) {
                    return "@media ".concat(item[2], " {").concat(content, "}");
                  }
                  return content;
                }).join("");
              };
              list.i = function(modules, mediaQuery, dedupe) {
                if (typeof modules === "string") {
                  modules = [[null, modules, ""]];
                }
                var alreadyImportedModules = {};
                if (dedupe) {
                  for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (id != null) {
                      alreadyImportedModules[id] = true;
                    }
                  }
                }
                for (var _i = 0; _i < modules.length; _i++) {
                  var item = [].concat(modules[_i]);
                  if (dedupe && alreadyImportedModules[item[0]]) {
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
          }
        ),
        /***/
        933: (
          /***/
          function(module2) {
            !function(n, t) {
              true ? module2.exports = t() : 0;
            }(this, function() {
              "use strict";
              var n, t, e, i;
              Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(n2) {
                if (null == this)
                  throw new TypeError('"this" is null or not defined');
                var t2 = Object(this), e2 = t2.length >>> 0;
                if ("function" != typeof n2)
                  throw new TypeError("predicate must be a function");
                for (var i2 = arguments[1], o2 = 0; o2 < e2; ) {
                  var r2 = t2[o2];
                  if (n2.call(i2, r2, o2, t2))
                    return r2;
                  o2++;
                }
              } }), Array.from || (Array.from = (n = Object.prototype.toString, t = function(t2) {
                return "function" == typeof t2 || "[object Function]" === n.call(t2);
              }, e = Math.pow(2, 53) - 1, i = function(n2) {
                var t2 = function(n3) {
                  var t3 = Number(n3);
                  return isNaN(t3) ? 0 : 0 !== t3 && isFinite(t3) ? (t3 > 0 ? 1 : -1) * Math.floor(Math.abs(t3)) : t3;
                }(n2);
                return Math.min(Math.max(t2, 0), e);
              }, function(n2) {
                var e2 = this, o2 = Object(n2);
                if (null == n2)
                  throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var r2, a2 = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== a2) {
                  if (!t(a2))
                    throw new TypeError("Array.from: when provided, the second argument must be a function");
                  arguments.length > 2 && (r2 = arguments[2]);
                }
                for (var l2, u2 = i(o2.length), c2 = t(e2) ? Object(new e2(u2)) : new Array(u2), s2 = 0; s2 < u2; )
                  l2 = o2[s2], c2[s2] = a2 ? void 0 === r2 ? a2(l2, s2) : a2.call(r2, l2, s2) : l2, s2 += 1;
                return c2.length = u2, c2;
              }));
              var o = window, r = document, a = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), l = /(Mac|iPhone|iPod|iPad)/i.test(o.navigator.userAgent), u = "ontouchstart" in o || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, c = !!window.MSInputMethodContext && !!document.documentMode, s = { test: {}, shared: {} };
              function f(n2, t2) {
                o.console && o.console[n2] && o.console[n2]("fullPage: " + t2);
              }
              function d(n2) {
                return "none" !== o.getComputedStyle(n2).display;
              }
              function v(n2) {
                return Array.from(n2).filter(function(n3) {
                  return d(n3);
                });
              }
              function p(n2, t2) {
                return (t2 = arguments.length > 1 ? t2 : document) ? t2.querySelectorAll(n2) : null;
              }
              function h(n2) {
                n2 = n2 || {};
                for (var t2 = 1, e2 = arguments.length; t2 < e2; ++t2) {
                  var i2 = arguments[t2];
                  if (i2)
                    for (var o2 in i2)
                      i2.hasOwnProperty(o2) && "__proto__" != o2 && "constructor" != o2 && ("[object Object]" !== Object.prototype.toString.call(i2[o2]) ? n2[o2] = i2[o2] : n2[o2] = h(n2[o2], i2[o2]));
                }
                return n2;
              }
              function g(n2, t2) {
                return null != n2 && n2.classList.contains(t2);
              }
              function m() {
                return "innerHeight" in o ? o.innerHeight : r.documentElement.offsetHeight;
              }
              function w() {
                return o.innerWidth;
              }
              function b(n2, t2) {
                var e2;
                for (e2 in n2 = A(n2), t2)
                  if (t2.hasOwnProperty(e2) && null !== e2)
                    for (var i2 = 0; i2 < n2.length; i2++)
                      n2[i2].style[e2] = t2[e2];
                return n2;
              }
              function S(n2, t2) {
                if (!n2)
                  return null;
                if (null == t2)
                  return n2.previousElementSibling;
                var e2 = S(n2);
                return e2 && Q(e2, t2) ? e2 : null;
              }
              function y(n2, t2) {
                if (!n2)
                  return null;
                if (null == t2)
                  return n2.nextElementSibling;
                var e2 = y(n2);
                return e2 && Q(e2, t2) ? e2 : null;
              }
              function M(n2) {
                return n2[n2.length - 1];
              }
              function T(n2, t2) {
                n2 = k(n2) ? n2[0] : n2;
                for (var e2 = null != t2 ? p(t2, n2.parentNode) : n2.parentNode.childNodes, i2 = 0, o2 = 0; o2 < e2.length; o2++) {
                  if (e2[o2] == n2)
                    return i2;
                  1 == e2[o2].nodeType && i2++;
                }
                return -1;
              }
              function A(n2) {
                return k(n2) ? n2 : [n2];
              }
              function x(n2) {
                n2 = A(n2);
                for (var t2 = 0; t2 < n2.length; t2++)
                  n2[t2].style.display = "none";
                return n2;
              }
              function O(n2) {
                n2 = A(n2);
                for (var t2 = 0; t2 < n2.length; t2++)
                  n2[t2].style.display = "block";
                return n2;
              }
              function k(n2) {
                return "[object Array]" === Object.prototype.toString.call(n2) || "[object NodeList]" === Object.prototype.toString.call(n2);
              }
              function E(n2, t2) {
                n2 = A(n2);
                for (var e2 = 0; e2 < n2.length; e2++)
                  n2[e2].classList.add(t2);
                return n2;
              }
              function R(n2, t2) {
                n2 = A(n2);
                for (var e2 = t2.split(" "), i2 = 0; i2 < e2.length; i2++) {
                  t2 = e2[i2];
                  for (var o2 = 0; o2 < n2.length; o2++)
                    n2[o2].classList.remove(t2);
                }
                return n2;
              }
              function L(n2, t2) {
                t2.appendChild(n2);
              }
              function j(n2, t2, e2) {
                var i2;
                t2 = t2 || r.createElement("div");
                for (var o2 = 0; o2 < n2.length; o2++) {
                  var a2 = n2[o2];
                  (e2 && !o2 || !e2) && (i2 = t2.cloneNode(true), a2.parentNode.insertBefore(i2, a2)), i2.appendChild(a2);
                }
                return n2;
              }
              function z(n2, t2) {
                j(n2, t2, true);
              }
              function D(n2, t2) {
                for ("string" == typeof t2 && (t2 = K(t2)), n2.appendChild(t2); n2.firstChild !== t2; )
                  t2.appendChild(n2.firstChild);
              }
              function N(n2) {
                for (var t2 = r.createDocumentFragment(); n2.firstChild; )
                  t2.appendChild(n2.firstChild);
                n2.parentNode.replaceChild(t2, n2);
              }
              function P(n2, t2) {
                return n2 && 1 === n2.nodeType ? Q(n2, t2) ? n2 : P(n2.parentNode, t2) : null;
              }
              function H(n2, t2) {
                I(n2, n2.nextSibling, t2);
              }
              function C(n2, t2) {
                I(n2, n2, t2);
              }
              function I(n2, t2, e2) {
                k(e2) || ("string" == typeof e2 && (e2 = K(e2)), e2 = [e2]);
                for (var i2 = 0; i2 < e2.length; i2++)
                  n2.parentNode.insertBefore(e2[i2], t2);
              }
              function W() {
                var n2 = r.documentElement;
                return (o.pageYOffset || n2.scrollTop) - (n2.clientTop || 0);
              }
              function F(n2) {
                return Array.prototype.filter.call(n2.parentNode.children, function(t2) {
                  return t2 !== n2;
                });
              }
              function V(n2) {
                n2.preventDefault();
              }
              function Z(n2, t2) {
                return n2.getAttribute(t2);
              }
              function B(n2, t2, e2) {
                r.addEventListener(n2, t2, "undefined" === e2 ? null : e2);
              }
              function G(n2, t2, e2) {
                o.addEventListener(n2, t2, "undefined" === e2 ? null : e2);
              }
              function Y(n2, t2, e2) {
                r.removeEventListener(n2, t2, "undefined" === e2 ? null : e2);
              }
              function U(n2, t2, e2) {
                o.removeEventListener(n2, t2, "undefined" === e2 ? null : e2);
              }
              function X(n2) {
                if ("function" == typeof n2)
                  return true;
                var t2 = Object.prototype.toString.call(n2);
                return "[object Function]" === t2 || "[object GeneratorFunction]" === t2;
              }
              function _(n2, t2, e2) {
                var i2;
                e2 = void 0 === e2 ? {} : e2, "function" == typeof o.CustomEvent ? i2 = new CustomEvent(t2, { detail: e2 }) : (i2 = r.createEvent("CustomEvent")).initCustomEvent(t2, true, true, e2), n2.dispatchEvent(i2);
              }
              function Q(n2, t2) {
                return (n2.matches || n2.t || n2.msMatchesSelector || n2.mozMatchesSelector || n2.webkitMatchesSelector || n2.oMatchesSelector).call(n2, t2);
              }
              function J(n2, t2) {
                if ("boolean" == typeof t2)
                  for (var e2 = 0; e2 < n2.length; e2++)
                    n2[e2].style.display = t2 ? "block" : "none";
                return n2;
              }
              function K(n2) {
                var t2 = r.createElement("div");
                return t2.innerHTML = n2.trim(), t2.firstChild;
              }
              function q(n2) {
                n2 = A(n2);
                for (var t2 = 0; t2 < n2.length; t2++) {
                  var e2 = n2[t2];
                  e2 && e2.parentElement && e2.parentNode.removeChild(e2);
                }
              }
              function $(n2, t2) {
                Array.prototype.filter.call(n2, t2);
              }
              function nn(n2, t2, e2) {
                for (var i2 = n2[e2], o2 = []; i2; )
                  (Q(i2, t2) || null == t2) && o2.push(i2), i2 = i2[e2];
                return o2;
              }
              function tn(n2, t2) {
                return nn(n2, t2, "nextElementSibling");
              }
              function en(n2, t2) {
                return nn(n2, t2, "previousElementSibling");
              }
              function on(n2) {
                return Object.keys(n2).map(function(t2) {
                  return n2[t2];
                });
              }
              function rn(n2) {
                return n2[n2.length - 1];
              }
              function an(n2, t2) {
                for (var e2 = 0, i2 = n2.slice(Math.max(n2.length - t2, 1)), o2 = 0; o2 < i2.length; o2++)
                  e2 += i2[o2];
                return Math.ceil(e2 / t2);
              }
              function ln(n2, t2) {
                n2.setAttribute(t2, Z(n2, "data-" + t2)), n2.removeAttribute("data-" + t2);
              }
              function un(n2, t2) {
                var e2 = [n2];
                do {
                  n2 = n2.parentNode, e2.push(n2);
                } while (!Q(n2, t2));
                return e2;
              }
              function cn() {
                var n2 = r.activeElement;
                return Q(n2, "textarea") || Q(n2, "input") || Q(n2, "select") || "true" == Z(n2, "contentEditable") || "" == Z(n2, "contentEditable");
              }
              o.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(n2, t2) {
                t2 = t2 || window;
                for (var e2 = 0; e2 < this.length; e2++)
                  n2.call(t2, this[e2], e2, this);
              }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", { value: function(n2, t2) {
                if (null == n2)
                  throw new TypeError("Cannot convert undefined or null to object");
                for (var e2 = Object(n2), i2 = 1; i2 < arguments.length; i2++) {
                  var o2 = arguments[i2];
                  if (null != o2)
                    for (var r2 in o2)
                      Object.prototype.hasOwnProperty.call(o2, r2) && (e2[r2] = o2[r2]);
                }
                return e2;
              }, writable: true, i: true }), window.fp_utils = { $: p, deepExtend: h, hasClass: g, getWindowHeight: m, css: b, prev: S, next: y, last: M, index: T, getList: A, hide: x, show: O, isArrayOrList: k, addClass: E, removeClass: R, appendTo: L, wrap: j, wrapAll: z, wrapInner: D, unwrap: N, closest: P, after: H, before: C, insertBefore: I, getScrollTop: W, siblings: F, preventDefault: V, isFunction: X, trigger: _, matches: Q, toggle: J, createElementFromHTML: K, remove: q, filter: $, untilAll: nn, nextAll: tn, prevAll: en, showError: f };
              var sn = Object.freeze({ __proto__: null, showError: f, isVisible: d, getVisible: v, $: p, deepExtend: h, hasClass: g, getWindowHeight: m, o: w, css: b, prev: S, next: y, last: M, index: T, getList: A, hide: x, show: O, isArrayOrList: k, addClass: E, removeClass: R, appendTo: L, wrap: j, wrapAll: z, wrapInner: D, unwrap: N, closest: P, after: H, before: C, insertBefore: I, getScrollTop: W, siblings: F, preventDefault: V, l: Z, u: B, v: G, p: Y, h: U, isFunction: X, trigger: _, matches: Q, toggle: J, createElementFromHTML: K, remove: q, filter: $, untilAll: nn, nextAll: tn, prevAll: en, toArray: on, g: rn, S: an, M: ln, T: un, A: cn });
              function fn(n2) {
                return fn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n3) {
                  return typeof n3;
                } : function(n3) {
                  return n3 && "function" == typeof Symbol && n3.constructor === Symbol && n3 !== Symbol.prototype ? "symbol" : typeof n3;
                }, fn(n2);
              }
              var dn = { O: {}, R: function(n2, t2) {
                var e2 = this;
                return "object" !== fn(this.O[n2]) && (this.O[n2] = []), this.O[n2].push(t2), function() {
                  return e2.removeListener(n2, t2);
                };
              }, removeListener: function(n2, t2) {
                if ("object" === fn(this.O[n2])) {
                  var e2 = this.O[n2].indexOf(t2);
                  e2 > -1 && this.O[n2].splice(e2, 1);
                }
              }, L: function(n2) {
                for (var t2 = this, e2 = arguments.length, i2 = new Array(e2 > 1 ? e2 - 1 : 0), o2 = 1; o2 < e2; o2++)
                  i2[o2 - 1] = arguments[o2];
                "object" === fn(this.O[n2]) && this.O[n2].forEach(function(n3) {
                  return n3.apply(t2, i2);
                });
              }, once: function(n2, t2) {
                var e2 = this, i2 = this.R(n2, function() {
                  i2();
                  for (var n3 = arguments.length, o2 = new Array(n3), r2 = 0; r2 < n3; r2++)
                    o2[r2] = arguments[r2];
                  t2.apply(e2, o2);
                });
              } }, vn = { j: 0, D: 0, slides: [], N: [], P: null, H: null, C: false, I: false, W: false, F: false, V: false, Z: void 0, B: void 0, G: false, canScroll: true, Y: "none", U: "none", X: false, _: false, J: true, K: 0, q: m(), nn: false, tn: {} };
              function pn(n2) {
                Object.assign(vn, n2);
              }
              function hn() {
                return vn;
              }
              o.state = vn;
              var gn = "onAfterRenderNoAnchor", mn = "onClickOrTouch", wn = "moveSlideLeft", bn = "moveSlideRight", Sn = "onInitialise", yn = "bindEvents", Mn = "onDestroy", Tn = "contentChanged", An = "onScrollOverflowScrolled", xn = "onScrollPageAndSlide", On = "onKeyDown", kn = "onMenuClick", En = "scrollPage", Rn = "landscapeScroll", Ln = "scrollBeyondFullpage", jn = "onPerformMovement", zn = "onSlideLeave", Dn = "onLeave", Nn = "afterSectionLoads", Pn = "afterSlideLoads";
              function Hn(n2) {
                dn.L(mn, { e: n2, target: n2.target });
              }
              function Cn() {
                ["click", "touchstart"].forEach(function(n2) {
                  Y(n2, Hn, { passive: false });
                });
              }
              function In() {
                pn({ J: true });
              }
              dn.R(yn, function() {
                ["click", "touchstart"].forEach(function(n2) {
                  B(n2, Hn, { passive: false });
                }), G("focus", In), dn.R(Mn, Cn);
              });
              var Wn = "fullpage-wrapper", Fn = "." + Wn, Vn = "fp-responsive", Zn = "fp-notransition", Bn = "fp-destroyed", Gn = "fp-enabled", Yn = "active", Un = ".active", Xn = "fp-completely", _n = "fp-section", Qn = "." + _n, Jn = ".fp-tableCell", Kn = "#fp-nav", qn = "fp-slide", $n = "." + qn, nt = ".fp-slide.active", tt = "fp-slides", et = ".fp-slides", it = "fp-slidesContainer", ot = "." + it, rt = "fp-table", at = "fp-overflow", lt = "." + at, ut = "fp-is-overflow", ct = ".fp-slidesNav", st = ".fp-slidesNav a", ft = "fp-controlArrow", dt = "." + ft, vt = "fp-prev", pt = ".fp-controlArrow.fp-prev", ht = ".fp-controlArrow.fp-next", gt = { menu: false, anchors: [], lockAnchors: false, navigation: false, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: false, slidesNavigation: false, slidesNavPosition: "bottom", scrollBar: false, hybrid: false, licenseKey: "", credits: { enabled: true, label: "Made with fullPage.js", position: "right" }, css3: true, scrollingSpeed: 700, autoScrolling: true, fitToSection: true, en: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: false, loopTop: false, loopHorizontal: true, continuousVertical: false, continuousHorizontal: false, scrollHorizontally: false, interlockedSlides: false, dragAndMove: false, offsetSections: false, resetSliders: false, fadingEffect: false, normalScrollElements: null, scrollOverflow: true, scrollOverflowReset: false, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: true, animateAnchor: true, recordHistory: true, allowCorrectDirection: false, scrollOverflowMacStyle: true, controlArrows: true, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: true, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: false, parallax: false, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: false, cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: true, observer: true }, mt = null, wt = false, bt = h({}, gt), St = null;
              function yt(n2) {
                return mt;
              }
              function Mt() {
                return St || gt;
              }
              function Tt() {
                return bt;
              }
              function At(n2, t2, e2) {
                St[n2] = t2, "internal" !== e2 && (bt[n2] = t2);
              }
              function xt() {
                if (!Mt().anchors.length) {
                  var n2 = p(Mt().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", mt);
                  n2.length && n2.length === p(Mt().sectionSelector, mt).length && (wt = true, n2.forEach(function(n3) {
                    Mt().anchors.push(Z(n3, "data-anchor").toString());
                  }));
                }
                if (!Mt().navigationTooltips.length) {
                  var t2 = p(Mt().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", mt);
                  t2.length && t2.forEach(function(n3) {
                    Mt().navigationTooltips.push(Z(n3, "data-tooltip").toString());
                  });
                }
              }
              function Ot(n2) {
                return void 0 !== window["fp_" + n2 + "Extension"];
              }
              function kt(n2) {
                var t2 = Mt();
                return null !== t2[n2] && "[object Array]" === Object.prototype.toString.call(t2[n2]) ? t2[n2].length && s[n2] : t2[n2] && s[n2];
              }
              function Et(n2, t2, e2) {
                if (kt(n2))
                  return X(s[n2][t2]) ? s[n2][t2](e2) : s[n2][t2];
              }
              function Rt() {
                return Et("dragAndMove", "isAnimating");
              }
              function Lt() {
                return Et("dragAndMove", "isGrabbing");
              }
              function jt(n2) {
                if (Mt().offsetSections && s.offsetSections) {
                  var t2 = Et("offsetSections", "getWindowHeight", n2);
                  return "" !== t2 ? Math.round(t2) + "px" : t2;
                }
                return m() + "px";
              }
              function zt(n2, t2) {
                n2.insertBefore(t2, n2.firstChild);
              }
              function Dt(n2) {
                var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                function e2(n3) {
                  var e3, i3, o2, r2, a2, l2, u2 = "", c2 = 0;
                  for (n3 = n3.replace(/[^A-Za-z0-9+/=]/g, ""); c2 < n3.length; )
                    e3 = t2.indexOf(n3.charAt(c2++)) << 2 | (r2 = t2.indexOf(n3.charAt(c2++))) >> 4, i3 = (15 & r2) << 4 | (a2 = t2.indexOf(n3.charAt(c2++))) >> 2, o2 = (3 & a2) << 6 | (l2 = t2.indexOf(n3.charAt(c2++))), u2 += String.fromCharCode(e3), 64 != a2 && (u2 += String.fromCharCode(i3)), 64 != l2 && (u2 += String.fromCharCode(o2));
                  return u2 = function(n4) {
                    for (var t3, e4 = "", i4 = 0, o3 = 0, r3 = 0; i4 < n4.length; )
                      (o3 = n4.charCodeAt(i4)) < 128 ? (e4 += String.fromCharCode(o3), i4++) : o3 > 191 && o3 < 224 ? (r3 = n4.charCodeAt(i4 + 1), e4 += String.fromCharCode((31 & o3) << 6 | 63 & r3), i4 += 2) : (r3 = n4.charCodeAt(i4 + 1), t3 = n4.charCodeAt(i4 + 2), e4 += String.fromCharCode((15 & o3) << 12 | (63 & r3) << 6 | 63 & t3), i4 += 3);
                    return e4;
                  }(u2), u2;
                }
                function i2(n3) {
                  return n3.slice(3).slice(0, -3);
                }
                return function(n3) {
                  var t3 = n3.split("_");
                  if (t3.length > 1) {
                    var o2 = t3[1];
                    return e2(n3.replace(i2(t3[1]), "").split("_")[0].slice(2).slice(0, -2)) + "_" + e2(o2.slice(3).slice(0, -3));
                  }
                  return i2(n3);
                }(e2(n2));
              }
              o.fp_utils = o.fp_utils || {}, Object.assign(o.fp_utils, { prependTo: zt, toggleClass: function(n2, t2, e2) {
                if (n2.classList && null == e2)
                  n2.classList.toggle(t2);
                else {
                  var i2 = g(n2, t2);
                  i2 && null == e2 || !e2 ? R(n2, t2) : (!i2 && null == e2 || e2) && E(n2, t2);
                }
              } });
              var Nt = function(n2) {
                this.anchor = n2.anchor, this.item = n2.item, this.index = n2.index(), this.isLast = this.index === n2.item.parentElement.querySelectorAll(n2.selector).length - 1, this.isFirst = !this.index, this.isActive = n2.isActive;
              }, Pt = function(n2, t2) {
                this.parent = this.parent || null, this.selector = t2, this.anchor = Z(n2, "data-anchor") || Mt().anchors[T(n2, Mt().sectionSelector)], this.item = n2, this.isVisible = d(n2), this.isActive = g(n2, Yn), this.on = g(n2, at) || null != p(lt, n2)[0], this.rn = t2 === Mt().sectionSelector, this.container = P(n2, ot) || P(n2, Fn), this.index = function() {
                  return this.siblings().indexOf(this);
                };
              };
              function Ht(n2) {
                return n2.map(function(n3) {
                  return n3.item;
                });
              }
              function Ct(n2, t2) {
                return n2.find(function(n3) {
                  return n3.item === t2;
                });
              }
              Pt.prototype.siblings = function() {
                return this.rn ? this.isVisible ? vn.N : vn.an : this.parent ? this.parent.slides : 0;
              }, Pt.prototype.prev = function() {
                var n2 = this.siblings(), t2 = (this.rn ? n2.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
                return t2 >= 0 ? n2[t2] : null;
              }, Pt.prototype.next = function() {
                var n2 = this.siblings(), t2 = (this.rn ? n2.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
                return t2 < n2.length ? n2[t2] : null;
              }, Pt.prototype.prevPanel = function() {
                return this === this.prev() ? this.parent ? this.parent.prev() : null : this.prev() || (this.parent ? this.parent.prev() : null);
              }, Pt.prototype.nextPanel = function() {
                return this === this.next() ? this.parent ? this.parent.next() : null : this.next() || (this.parent ? this.parent.next() : null);
              }, Pt.prototype.ln = function() {
                return this.rn ? vn.N : vn.un;
              };
              var It, Wt = function(n2) {
                Nt.call(this, n2);
              }, Ft = function(n2) {
                Nt.call(this, n2);
              };
              function Vt(n2) {
                var t2 = p(nt, n2);
                return t2.length && (n2 = t2[0]), n2;
              }
              function Zt(n2) {
                return n2 ? n2.activeSlide ? n2.activeSlide : n2 : null;
              }
              function Bt(n2) {
                var t2, e2, i2 = Mt();
                return i2.autoScrolling && !i2.scrollBar ? (t2 = -n2, e2 = p(Fn)[0]) : (t2 = n2, e2 = window), { options: t2, element: e2 };
              }
              function Gt(n2, t2) {
                !Mt().autoScrolling || Mt().scrollBar || n2.self != window && g(n2, tt) ? n2.self != window && g(n2, tt) ? n2.scrollLeft = t2 : n2.scrollTo(0, t2) : n2.style.top = t2 + "px";
              }
              function Yt(n2) {
                var t2 = "transform " + Mt().scrollingSpeed + "ms " + Mt().easingcss3;
                return R(n2, Zn), b(n2, { "-webkit-transition": t2, transition: t2 });
              }
              function Ut(n2, t2) {
                var e2 = n2.index(), i2 = T(t2, Qn);
                return e2 == i2 ? "none" : e2 > i2 ? "up" : "down";
              }
              function Xt(n2) {
                return E(n2, Zn);
              }
              function _t(n2) {
                return { "-webkit-transform": n2, "-moz-transform": n2, "-ms-transform": n2, transform: n2 };
              }
              function Qt(n2, t2) {
                t2 ? Yt(yt()) : Xt(yt()), clearTimeout(It), b(yt(), _t(n2)), s.test.cn = n2, It = setTimeout(function() {
                  R(yt(), Zn);
                }, 10);
              }
              function Jt(n2) {
                var t2 = Math.round(n2);
                if (Mt().css3 && Mt().autoScrolling && !Mt().scrollBar)
                  Qt("translate3d(0px, -" + t2 + "px, 0px)", false);
                else if (Mt().autoScrolling && !Mt().scrollBar)
                  b(yt(), { top: -t2 + "px" }), s.test.top = -t2 + "px";
                else {
                  var e2 = Bt(t2);
                  Gt(e2.element, e2.options);
                }
              }
              function Kt(n2, t2) {
                "internal" !== t2 && Et("fadingEffect", "update", n2), Et("cards", "update_", n2), At("scrollingSpeed", n2, t2);
              }
              s.setScrollingSpeed = Kt;
              var qt, $t = null, ne = null, te = null;
              function ee(n2, t2, e2, i2) {
                var r2, a2 = function(n3) {
                  return n3.self != o && g(n3, tt) ? n3.scrollLeft : !Mt().autoScrolling || Mt().scrollBar ? W() : n3.offsetTop;
                }(n2), l2 = t2 - a2, u2 = false, c2 = vn.G;
                pn({ G: true }), qt && window.cancelAnimationFrame(qt), qt = function(s2) {
                  r2 || (r2 = s2);
                  var f2 = Math.floor(s2 - r2);
                  if (vn.G) {
                    var d2 = t2;
                    e2 && (d2 = o.fp_easings[Mt().easing](f2, a2, l2, e2)), f2 <= e2 && Gt(n2, d2), f2 < e2 ? window.requestAnimationFrame(qt) : void 0 === i2 || u2 || (i2(), pn({ G: false }), u2 = true);
                  } else
                    u2 || c2 || (i2(), pn({ G: false }), u2 = true);
                }, window.requestAnimationFrame(qt);
              }
              function ie(n2) {
                return n2 && !n2.item ? new Wt(new pi(n2)) : n2 ? new Wt(n2) : null;
              }
              function oe(n2) {
                return n2 ? new Ft(n2) : null;
              }
              function re(n2, t2) {
                var e2 = function(n3, t3) {
                  var e3 = { afterRender: function() {
                    return { section: ie(hn().P), sn: oe(hn().P.activeSlide) };
                  }, onLeave: function() {
                    return { origin: ie(t3.items.origin), destination: ie(t3.items.destination), direction: t3.direction, trigger: hn().H };
                  }, afterLoad: function() {
                    return e3.onLeave();
                  }, afterSlideLoad: function() {
                    return { section: ie(t3.items.section), origin: ie(t3.items.origin), destination: ie(t3.items.destination), direction: t3.direction, trigger: hn().H };
                  }, onSlideLeave: function() {
                    return e3.afterSlideLoad();
                  }, beforeLeave: function() {
                    return e3.onLeave();
                  }, onScrollOverflow: function() {
                    return { section: ie(hn().P), sn: oe(hn().P.activeSlide), position: t3.position, direction: t3.direction };
                  } };
                  return e3[n3]();
                }(n2, t2);
                return _(yt(), n2, e2), false !== Mt()[n2].apply(e2[Object.keys(e2)[0]], on(e2));
              }
              function ae(n2) {
                var t2 = Vt(n2);
                p("video, audio", t2).forEach(function(n3) {
                  n3.hasAttribute("data-autoplay") && "function" == typeof n3.play && n3.play();
                }), p('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
                  n3.hasAttribute("data-autoplay") && le(n3), n3.onload = function() {
                    n3.hasAttribute("data-autoplay") && le(n3);
                  };
                });
              }
              function le(n2) {
                n2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
              }
              function ue(n2) {
                var t2 = Vt(n2);
                p("video, audio", t2).forEach(function(n3) {
                  n3.hasAttribute("data-keepplaying") || "function" != typeof n3.pause || n3.pause();
                }), p('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
                  /youtube\.com\/embed\//.test(Z(n3, "src")) && !n3.hasAttribute("data-keepplaying") && n3.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                });
              }
              function ce(n2) {
                Mt().lazyLoading && p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Vt(n2)).forEach(function(n3) {
                  if (["src", "srcset"].forEach(function(t3) {
                    var e2 = Z(n3, "data-" + t3);
                    null != e2 && e2 && (ln(n3, t3), n3.addEventListener("load", function() {
                    }));
                  }), Q(n3, "source")) {
                    var t2 = P(n3, "video, audio");
                    t2 && (t2.load(), t2.onloadeddata = function() {
                    });
                  }
                });
              }
              function se() {
                var n2 = hn().P.item, t2 = hn().P.activeSlide, e2 = fe(n2), i2 = String(e2);
                t2 && (i2 = i2 + "-" + fe(t2.item)), i2 = i2.replace("/", "-").replace("#", "");
                var o2 = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
                $t.className = $t.className.replace(o2, ""), E($t, "fp-viewing-" + i2);
              }
              function fe(n2) {
                if (!n2)
                  return null;
                var t2 = Z(n2, "data-anchor"), e2 = T(n2);
                return null == t2 && (t2 = e2), t2;
              }
              function de(n2, t2, e2) {
                var i2 = "";
                Mt().anchors.length && !Mt().lockAnchors && (n2 ? (null != e2 && (i2 = e2), null == t2 && (t2 = n2), pn({ B: t2 }), ve(i2 + "/" + t2)) : null != n2 ? (pn({ B: t2 }), ve(e2)) : ve(e2)), se();
              }
              function ve(n2) {
                if (Mt().recordHistory)
                  location.hash = n2;
                else if (a || u)
                  o.history.replaceState(void 0, void 0, "#" + n2);
                else {
                  var t2 = o.location.href.split("#")[0];
                  o.location.replace(t2 + "#" + n2);
                }
              }
              function pe(n2, t2, e2) {
                var i2 = "Section" === t2 ? Mt().anchors[n2] : Z(e2, "data-anchor");
                return encodeURI(Mt().navigationTooltips[n2] || i2 || t2 + " " + (n2 + 1));
              }
              function he(n2) {
                n2.cancelable && V(n2), pn({ H: "horizontalNav" });
                var t2 = P(this, Qn), e2 = p(et, P(this, Qn))[0], i2 = Ct(hn().N, t2).slides[T(P(this, "li"))];
                dn.L(Rn, { slides: e2, destination: i2.item });
              }
              function ge(n2, t2) {
                Mt().slidesNavigation && null != n2 && (R(p(Un, n2), Yn), E(p("a", p("li", n2)[t2]), Yn));
              }
              var me, we = {};
              function be(n2, t2, e2) {
                "all" !== t2 ? we[e2][t2] = n2 : Object.keys(we[e2]).forEach(function(t3) {
                  we[e2][t3] = n2;
                });
              }
              function Se() {
                return we;
              }
              function ye() {
                var n2 = P(this, Qn);
                g(this, vt) ? Se().m.left && (pn({ H: "slideArrow" }), dn.L(wn, { section: n2 })) : Se().m.right && (pn({ H: "slideArrow" }), dn.L(bn, { section: n2 }));
              }
              function Me(n2) {
                !Mt().loopHorizontal && Mt().controlArrows && (J(p(pt, n2.section), 0 !== n2.slideIndex), J(p(ht, n2.section), null != y(n2.destiny)));
              }
              function Te() {
                clearTimeout(me), pn({ W: false });
              }
              function Ae(n2, t2, e2) {
                var i2 = P(n2, Qn), o2 = hn().N.filter(function(n3) {
                  return n3.item == i2;
                })[0], r2 = o2.slides.filter(function(n3) {
                  return n3.item == t2;
                })[0], a2 = { slides: n2, destiny: t2, direction: e2, destinyPos: { left: t2.offsetLeft }, slideIndex: r2.index(), section: i2, sectionIndex: o2.index(), anchorLink: o2.anchor, slidesNav: p(ct, i2)[0], slideAnchor: r2.anchor, prevSlide: o2.activeSlide.item, prevSlideIndex: o2.activeSlide.index(), items: { section: o2, origin: o2.activeSlide, destination: r2 }, localIsResizing: vn.F };
                a2.xMovement = Oe(a2.prevSlideIndex, a2.slideIndex), a2.direction = a2.direction ? a2.direction : a2.xMovement, a2.localIsResizing || pn({ canScroll: false }), Et("parallax", "applyHorizontal", a2), Et("cards", "apply", a2), Et("dropEffect", "apply", a2), Et("waterEffect", "apply", a2), Mt().onSlideLeave && !a2.localIsResizing && "none" !== a2.xMovement && X(Mt().onSlideLeave) && false === re("onSlideLeave", a2) ? pn({ W: false }) : (kt("dropEffect") && Mt().dropEffect || (E(t2, Yn), R(F(t2), Yn)), si(), a2.localIsResizing || (ue(a2.prevSlide), ce(t2)), Me(a2), o2.isActive && !a2.localIsResizing && de(a2.slideIndex, a2.slideAnchor, a2.anchorLink), Et("continuousHorizontal", "apply", a2), dn.L(zn, a2), Lt() ? Ee(a2) : xe(n2, a2, true), Mt().interlockedSlides && s.interlockedSlides && (kt("continuousHorizontal") && void 0 !== e2 && e2 !== a2.xMovement || Et("interlockedSlides", "apply", a2)));
              }
              function xe(n2, t2, e2) {
                var i2 = t2.destinyPos;
                if (ge(t2.slidesNav, t2.slideIndex), pn({ scrollX: Math.round(i2.left) }), Mt().css3) {
                  var o2 = "translate3d(-" + Math.round(i2.left) + "px, 0px, 0px)";
                  s.test.dn[t2.sectionIndex] = o2, kt("dragAndMove") && void 0 !== t2.vn || Yt(p(ot, n2)), b(p(ot, n2), _t(o2)), kt("interlockedSlides") || clearTimeout(me), me = setTimeout(function() {
                    e2 && Ee(t2);
                  }, Mt().scrollingSpeed);
                } else
                  s.test.left[t2.sectionIndex] = Math.round(i2.left), ee(n2, Math.round(i2.left), Mt().scrollingSpeed, function() {
                    e2 && Ee(t2);
                  });
              }
              function Oe(n2, t2) {
                return n2 == t2 ? "none" : n2 > t2 ? "left" : "right";
              }
              function ke() {
                clearTimeout(me);
              }
              function Ee(n2) {
                Et("continuousHorizontal", "afterSlideLoads", n2), Et("dragAndMove", "afterSlideLoads", n2), n2.localIsResizing || (Et("parallax", "afterSlideLoads"), Et("scrollOverflowReset", "setPrevious", n2.prevSlide), Et("scrollOverflowReset", "reset"), X(Mt().afterSlideLoad) && re("afterSlideLoad", n2), pn({ canScroll: true }), ae(n2.destiny), dn.L(Pn, n2)), pn({ W: false }), Et("interlockedSlides", "interlockedSlides", n2);
              }
              function Re(n2, t2) {
                Kt(0, "internal"), void 0 !== t2 && pn({ F: true }), Ae(P(n2, et), n2), void 0 !== t2 && pn({ F: false }), Kt(Tt().scrollingSpeed, "internal");
              }
              function Le(n2, t2) {
                At("recordHistory", n2, t2);
              }
              function je(n2, t2) {
                n2 || Jt(0), At("autoScrolling", n2, t2);
                var e2 = hn().P.item;
                if (Mt().autoScrolling && !Mt().scrollBar)
                  b(te, { overflow: "hidden", height: "100%" }), R($t, "fp-scrollable"), Le(Tt().recordHistory, "internal"), b(yt(), { "-ms-touch-action": "none", "touch-action": "none" }), null != e2 && Jt(e2.offsetTop);
                else if (b(te, { overflow: "visible", height: "initial" }), E($t, "fp-scrollable"), Le(!!Mt().autoScrolling && Tt().recordHistory, "internal"), b(yt(), { "-ms-touch-action": "", "touch-action": "" }), Xt(yt()), null != e2) {
                  var i2 = Bt(e2.offsetTop);
                  i2.element.scrollTo(0, i2.options);
                }
                _(yt(), "setAutoScrolling", n2);
              }
              function ze() {
                for (var n2 = p(nt), t2 = 0; t2 < n2.length; t2++)
                  Re(n2[t2], "internal");
              }
              function De() {
                var n2 = p(".fp-auto-height")[0] || $e() && p(".fp-auto-height-responsive")[0];
                Mt().lazyLoading && n2 && p(".fp-section:not(.active)").forEach(function(n3) {
                  var t2, e2, i2, o2, r2;
                  e2 = (t2 = n3.getBoundingClientRect()).top, i2 = t2.bottom, o2 = e2 + 2 < vn.q && e2 > 0, r2 = i2 > 2 && i2 < vn.q, (o2 || r2) && ce(n3);
                });
              }
              function Ne() {
                _(S(this), "click");
              }
              function Pe() {
                q(p(Kn));
                var n2 = r.createElement("div");
                n2.setAttribute("id", "fp-nav");
                var t2 = r.createElement("ul");
                n2.appendChild(t2), L(n2, $t);
                var e2 = p(Kn)[0];
                E(e2, "fp-" + Mt().navigationPosition), Mt().showActiveTooltip && E(e2, "fp-show-active");
                for (var i2 = "", o2 = 0; o2 < hn().N.length; o2++) {
                  var a2 = hn().N[o2], l2 = "";
                  Mt().anchors.length && (l2 = a2.anchor), i2 += '<li><a href="#' + encodeURI(l2) + '"><span class="fp-sr-only">' + pe(a2.index(), "Section") + "</span><span></span></a>";
                  var u2 = Mt().navigationTooltips[a2.index()];
                  void 0 !== u2 && "" !== u2 && (i2 += '<div class="fp-tooltip fp-' + Mt().navigationPosition + '">' + u2 + "</div>"), i2 += "</li>";
                }
                p("ul", e2)[0].innerHTML = i2;
                var c2 = p("li", p(Kn)[0])[hn().P.index()];
                E(p("a", c2), Yn);
              }
              function He(n2) {
                n2.preventDefault && V(n2), pn({ H: "verticalNav" });
                var t2 = T(P(this, "#fp-nav li"));
                dn.L(En, { destination: hn().N[t2] });
              }
              function Ce(n2, t2) {
                var e2;
                e2 = n2, Mt().menu && Mt().menu.length && p(Mt().menu).forEach(function(n3) {
                  null != n3 && (R(p(Un, n3), Yn), E(p('[data-menuanchor="' + e2 + '"]', n3), Yn));
                }), function(n3, t3) {
                  var e3 = p(Kn)[0];
                  Mt().navigation && null != e3 && "none" !== e3.style.display && (R(p(Un, e3), Yn), E(n3 ? p('a[href="#' + n3 + '"]', e3) : p("a", p("li", e3)[t3]), Yn));
                }(n2, t2);
              }
              we.m = { up: true, down: true, left: true, right: true }, we.k = h({}, we.m), dn.R(mn, function(n2) {
                var t2 = n2.target;
                (Q(t2, dt) || P(t2, dt)) && ye.call(t2, n2);
              }), s.landscapeScroll = Ae, dn.R(yn, function() {
                dn.R(jn, Te);
              }), s.setRecordHistory = Le, s.setAutoScrolling = je, s.test.setAutoScrolling = je, (/* @__PURE__ */ new Date()).getTime();
              var Ie, We, Fe, Ve, Ze, Be, Ge = (We = true, Fe = (/* @__PURE__ */ new Date()).getTime(), Ve = !o.fullpage_api, function(n2, t2) {
                var e2 = (/* @__PURE__ */ new Date()).getTime(), i2 = "wheel" === n2 ? Mt().scrollingSpeed : 100;
                return We = Ve || e2 - Fe >= i2, Ve = !o.fullpage_api, We && (Ie = t2(), Fe = e2), void 0 === Ie || Ie;
              });
              function Ye(n2, t2) {
                if (X(Mt().beforeLeave))
                  return Ge(hn().H, function() {
                    return re(n2, t2);
                  });
              }
              function Ue(n2, t2, e2) {
                var i2 = n2.item;
                if (null != i2) {
                  var o2, r2, a2 = { element: i2, callback: t2, isMovementUp: e2, dtop: Xe(i2), yMovement: Ut(hn().P, i2), anchorLink: n2.anchor, sectionIndex: n2.index(), activeSlide: n2.activeSlide ? n2.activeSlide.item : null, leavingSection: hn().P.index() + 1, localIsResizing: vn.F, items: { origin: hn().P, destination: n2 }, direction: null };
                  if (!(hn().P.item == i2 && !vn.F || Mt().scrollBar && W() === a2.dtop && !g(i2, "fp-auto-height"))) {
                    if (null != a2.activeSlide && (o2 = Z(a2.activeSlide, "data-anchor"), r2 = T(a2.activeSlide, null)), !a2.localIsResizing) {
                      var l2 = a2.yMovement;
                      if (void 0 !== e2 && (l2 = e2 ? "up" : "down"), a2.direction = l2, Ot("dropEffect") && s.dropEffect.onLeave_(a2), Ot("waterEffect") && s.waterEffect.onLeave_(a2), X(Mt().beforeLeave) && false === Ye("beforeLeave", a2))
                        return;
                      if (X(Mt().onLeave) && !re("onLeave", a2))
                        return;
                    }
                    Et("parallax", "apply", a2), Et("cards", "apply", a2), Et("dropEffect", "apply", a2), Et("waterEffect", "apply", a2), Mt().autoScrolling && Mt().continuousVertical && void 0 !== a2.isMovementUp && (!a2.isMovementUp && "up" == a2.yMovement || a2.isMovementUp && "down" == a2.yMovement) && (a2 = function(n3) {
                      pn({ nn: true });
                      var t3 = hn().P.item;
                      return n3.isMovementUp ? C(t3, tn(t3, Qn)) : H(t3, en(t3, Qn).reverse()), Jt(hn().P.item.offsetTop), ze(), n3.pn = t3, n3.dtop = n3.element.offsetTop, n3.yMovement = Ut(hn().P, n3.element), n3.leavingSection = n3.items.origin.index() + 1, n3.sectionIndex = n3.items.destination.index(), _(yt(), "onContinuousVertical", n3), n3;
                    }(a2)), Et("scrollOverflowReset", "setPrevious", hn().P.item), a2.localIsResizing || ue(hn().P.item), kt("dropEffect") && Mt().dropEffect || (E(i2, Yn), R(F(i2), Yn)), si(), ce(i2), pn({ canScroll: s.test.hn }), de(r2, o2, a2.anchorLink), dn.L(Dn, a2), function(n3) {
                      var t3 = Mt().scrollingSpeed < 700, e3 = t3 ? 700 : Mt().scrollingSpeed;
                      if (pn({ Y: "none", scrollY: Math.round(n3.dtop) }), dn.L(jn), Mt().css3 && Mt().autoScrolling && !Mt().scrollBar)
                        Qt("translate3d(0px, -" + Math.round(n3.dtop) + "px, 0px)", true), kt("waterEffect") && ze(), Mt().scrollingSpeed ? (clearTimeout(Ze), Ze = setTimeout(function() {
                          _e(n3), pn({ canScroll: !t3 || s.test.hn });
                        }, Mt().scrollingSpeed)) : _e(n3);
                      else {
                        var i3 = Bt(n3.dtop);
                        s.test.top = -n3.dtop + "px", clearTimeout(Ze), ee(i3.element, i3.options, Mt().scrollingSpeed, function() {
                          Mt().scrollBar ? Ze = setTimeout(function() {
                            _e(n3);
                          }, 30) : (_e(n3), pn({ canScroll: !t3 || s.test.hn }));
                        });
                      }
                      t3 && (clearTimeout(Be), Be = setTimeout(function() {
                        pn({ canScroll: true });
                      }, e3));
                    }(a2), pn({ Z: a2.anchorLink }), Ce(a2.anchorLink, function(n3) {
                      return null != n3.pn ? n3.isMovementUp ? vn.j - 1 : 0 : n3.sectionIndex;
                    }(a2));
                  }
                }
              }
              function Xe(n2) {
                var t2 = n2.offsetHeight, e2 = n2.offsetTop, i2 = e2, o2 = kt("dragAndMove") && Et("dragAndMove", "isGrabbing") ? Et("dragAndMove", "isScrollingDown") : e2 > vn.K, r2 = i2 - m() + t2, a2 = Mt().bigSectionsDestination;
                return t2 > m() ? (o2 || a2) && "bottom" !== a2 || (i2 = r2) : (o2 || vn.F && null == y(n2)) && (i2 = r2), kt("offsetSections") && (i2 = s.offsetSections.getSectionPosition_(o2, i2, n2)), pn({ K: i2 }), i2;
              }
              function _e(n2) {
                pn({ C: false }), function(n3) {
                  null != n3.pn && (n3.isMovementUp ? C(p(Qn)[0], n3.pn) : H(p(Qn)[hn().N.length - 1], n3.pn), Jt(hn().P.item.offsetTop), function() {
                    for (var n4 = p(nt), t2 = 0; t2 < n4.length; t2++)
                      Re(n4[t2], "internal");
                  }(), n3.sectionIndex = n3.items.destination.index(), n3.leavingSection = n3.items.origin.index() + 1, pn({ nn: false }));
                }(n2), X(Mt().afterLoad) && !n2.localIsResizing && re("afterLoad", n2), Et("parallax", "afterLoad"), Et("waterEffect", "afterLoad"), Et("dropEffect", "afterLoad"), Et("scrollOverflowReset", "reset"), Et("resetSliders", "apply", n2), si(), n2.localIsResizing || ae(n2.element), E(n2.element, Xn), R(F(n2.element), Xn), De(), pn({ canScroll: true }), dn.L(Nn, n2), X(n2.callback) && n2.callback();
              }
              function Qe(n2, t2) {
                At("fitToSection", n2, t2);
              }
              function Je() {
                vn.canScroll && (pn({ F: true }), Ue(vn.P), pn({ F: false }));
              }
              function Ke() {
                var n2 = Mt().responsive || Mt().responsiveWidth, t2 = Mt().responsiveHeight, e2 = n2 && o.innerWidth < n2, i2 = t2 && o.innerHeight < t2;
                n2 && t2 ? qe(e2 || i2) : n2 ? qe(e2) : t2 && qe(i2);
              }
              function qe(n2) {
                var t2 = $e();
                n2 ? t2 || (je(false, "internal"), Qe(false, "internal"), x(p(Kn)), E($t, Vn), X(Mt().afterResponsive) && Mt().afterResponsive.call(yt(), n2), Et("responsiveSlides", "toSections"), _(yt(), "afterResponsive", n2)) : t2 && (je(Tt().autoScrolling, "internal"), Qe(Tt().autoScrolling, "internal"), O(p(Kn)), R($t, Vn), X(Mt().afterResponsive) && Mt().afterResponsive.call(yt(), n2), Et("responsiveSlides", "toSlides"), _(yt(), "afterResponsive", n2));
              }
              function $e() {
                return g($t, Vn);
              }
              function ni(n2) {
                Mt().verticalCentered && (!Mt().scrollOverflow && li.gn(n2.item) || li.mn(n2) || g(n2.item, rt) || E(n2.item, rt));
              }
              s.moveTo = moveTo, s.getScrollY = function() {
                return vn.scrollY;
              }, dn.R(Mn, function() {
                clearTimeout(Ze), clearTimeout(Be);
              }), s.setFitToSection = Qe, s.fitToSection = Je, s.setResponsive = qe;
              var ti, ei = null;
              function ii(n2) {
                var t2 = n2.item, e2 = n2.wn.length, i2 = n2.index();
                !hn().P && n2.isVisible && (E(t2, Yn), si(), ei = hn().P.item), kt("offsetSections") && b(t2, { height: jt(t2) }), Mt().paddingTop && b(t2, { "padding-top": Mt().paddingTop }), Mt().paddingBottom && b(t2, { "padding-bottom": Mt().paddingBottom }), void 0 !== Mt().sectionsColor[i2] && b(t2, { "background-color": Mt().sectionsColor[i2] }), void 0 !== Mt().anchors[i2] && t2.setAttribute("data-anchor", n2.anchor), e2 || ni(n2);
              }
              function oi() {
                Mt().scrollOverflow && !Mt().scrollBar && (li.bn(), li.Sn());
              }
              function ri() {
                dn.removeListener(gn, oi), Y("keyup", li.yn);
              }
              s.getActiveSection = function() {
                return hn().P;
              }, dn.R(yn, function() {
                dn.R(gn, oi), dn.R(Dn, li.onLeave), dn.R(zn, li.onLeave), dn.R(Pn, li.afterLoad), dn.R(Nn, li.afterLoad), dn.R(Mn, ri), B("keyup", li.yn);
              });
              var ai, li = { Mn: null, Tn: true, An: true, xn: null, On: null, kn: function(n2) {
                if (!vn.canScroll)
                  return V(n2), false;
              }, En: function(n2) {
                if (!cn() && Mt().keyboardScrolling && [38, 33, 32, 40, 34, 36, 35].indexOf(n2.keyCode) > -1 && !li.An)
                  return V(n2), false;
              }, yn: function() {
                li.Tn = vn.canScroll;
              }, onLeave: function() {
                clearTimeout(ti), li.An = false;
              }, afterLoad: function() {
                li.An = false, clearTimeout(ti), ti = setTimeout(function() {
                  li.Tn = vn.canScroll;
                }, 200);
              }, Rn: function() {
                r.activeElement === this.Mn && (this.Mn.blur(), li.An = false);
              }, Sn: function() {
                if (Mt().scrollOverflow && li.Tn) {
                  li.Rn();
                  var n2 = li.Ln(hn().P.item);
                  !n2 || a || u || (this.Mn = n2, requestAnimationFrame(function() {
                    n2.focus(), li.An = true;
                  })), li.Tn = false;
                }
              }, bn: function() {
                Mt().scrollOverflowMacStyle && !l && E($t, "fp-scroll-mac"), hn().un.forEach(function(n2) {
                  if (!(n2.slides && n2.slides.length || g(n2.item, "fp-auto-height-responsive") && $e())) {
                    var t2, e2 = Vt(n2.item), i2 = li.gn(n2.item), o2 = (t2 = n2).rn ? t2 : t2.parent;
                    if (c) {
                      var r2 = i2 ? "addClass" : "removeClass";
                      sn[r2](o2.item, ut), sn[r2](n2.item, ut);
                    } else
                      E(o2.item, ut), E(n2.item, ut);
                    n2.on || (li.jn(e2), li.zn(e2)), n2.on = true;
                  }
                });
              }, zn: function(n2) {
                li.Ln(n2).addEventListener("scroll", li.Dn), n2.addEventListener("wheel", li.kn, { passive: false }), n2.addEventListener("keydown", li.En, { passive: false });
              }, jn: function(n2) {
                var t2 = document.createElement("div");
                t2.className = at, D(n2, t2), t2.setAttribute("tabindex", "-1");
              }, Nn: function(n2) {
                var t2 = p(lt, n2)[0];
                t2 && (N(t2), n2.removeAttribute("tabindex"));
              }, Ln: function(n2) {
                var t2 = Vt(n2);
                return p(lt, t2)[0] || t2;
              }, on: function(n2) {
                return g(n2, at) || null != p(lt, n2)[0];
              }, mn: function(n2) {
                return n2.rn && n2.activeSlide ? n2.activeSlide.on : n2.on;
              }, gn: function(n2) {
                return li.Ln(n2).scrollHeight > o.innerHeight;
              }, Pn: function(n2, t2) {
                if (!vn.canScroll)
                  return false;
                if (Mt().scrollBar)
                  return true;
                var e2 = li.Ln(t2);
                if (!Mt().scrollOverflow || !g(e2, at) || g(t2, "fp-noscroll") || g(Vt(t2), "fp-noscroll"))
                  return true;
                var i2 = c ? 1 : 0, o2 = e2.scrollTop, r2 = "up" === n2 && o2 <= 0, a2 = "down" === n2 && e2.scrollHeight <= Math.ceil(e2.offsetHeight + o2) + i2, l2 = r2 || a2;
                return l2 || (this.xn = (/* @__PURE__ */ new Date()).getTime()), l2;
              }, Hn: function() {
                this.On = (/* @__PURE__ */ new Date()).getTime();
                var n2 = this.On - li.xn, t2 = (a || u) && vn.X, e2 = vn._ && n2 > 600;
                return t2 && n2 > 400 || e2;
              }, Dn: (ai = 0, function(n2) {
                var t2 = n2.target.scrollTop, e2 = "none" !== vn.Y ? vn.Y : ai < t2 ? "down" : "up";
                ai = t2, X(Mt().onScrollOverflow) && re("onScrollOverflow", { position: t2, direction: e2 }), g(n2.target, at) && vn.canScroll && li.Pn(e2, n2.target) && li.Hn() && li.gn(hn().P.item) && dn.L(An, { direction: e2 });
              }) }, ui = null, ci = null;
              function si() {
                vn.P = null, vn.N.map(function(n2) {
                  var t2 = g(n2.item, Yn);
                  n2.isActive = t2, n2.on = li.on(n2.item), t2 && (vn.P = n2), n2.slides.length && (n2.activeSlide = null, n2.slides.map(function(t3) {
                    var e2 = g(t3.item, Yn);
                    t3.on = li.on(n2.item), t3.isActive = e2, e2 && (n2.activeSlide = t3);
                  }));
                }), function() {
                  var n2 = vn.P, t2 = !!vn.P && vn.P.slides.length, e2 = vn.P ? vn.P.activeSlide : null;
                  if (!n2 && vn.N.length && !hn().C) {
                    if (ui) {
                      var i2 = vi(ui, vn.N);
                      i2 && (vn.P = i2, vn.P.isActive = true, E(vn.P.item, Yn)), vn.P && Jt(vn.P.item.offsetTop);
                    }
                    if (t2 && !e2 && ci) {
                      var o2 = vi(ci, vn.P.slides);
                      o2 && (vn.P.activeSlide = o2, vn.P.activeSlide.isActive = true, E(vn.P.activeSlide.item, Yn)), vn.P.activeSlide && Re(vn.P.activeSlide.item, "internal");
                    }
                  }
                }(), _(yt(), "onUpdateStateDone");
              }
              function fi() {
                var n2 = p(Mt().sectionSelector + ", " + Qn, yt()), t2 = v(n2), e2 = Array.from(n2).map(function(n3) {
                  return new pi(n3);
                }), i2 = e2.filter(function(n3) {
                  return n3.isVisible;
                }), o2 = i2.reduce(function(n3, t3) {
                  return n3.concat(t3.slides);
                }, []);
                ui = di(vn.P), ci = di(vn.P ? vn.P.activeSlide : null), vn.j = t2.length, vn.D = i2.reduce(function(n3, t3) {
                  return n3 + t3.slides.length;
                }, 0), vn.N = i2, vn.an = e2, vn.slides = o2, vn.un = vn.N.concat(vn.slides);
              }
              function di(n2) {
                if (!n2)
                  return null;
                var t2 = n2 ? n2.item : null, e2 = n2.rn ? vn.an : vn.P.Cn;
                if (t2) {
                  var i2 = Ct(e2, t2);
                  return i2 ? i2.index() : null;
                }
                return null;
              }
              function vi(n2, t2) {
                var e2, i2 = n2 - 1, o2 = n2;
                do {
                  if (e2 = t2[i2] || t2[o2])
                    break;
                  i2 -= 1, o2 += 1;
                } while (i2 >= 0 || o2 < t2.length);
                return e2;
              }
              var pi = function(n2) {
                var t2 = this;
                [].push.call(arguments, Mt().sectionSelector), Pt.apply(this, arguments), this.wn = p(Mt().slideSelector, n2), this.Cn = Array.from(this.wn).map(function(n3) {
                  return new gi(n3, t2);
                }), this.slides = this.Cn.filter(function(n3) {
                  return n3.isVisible;
                }), this.activeSlide = this.slides.length ? this.slides.filter(function(n3) {
                  return n3.isActive;
                })[0] || this.slides[0] : null;
              };
              pi.prototype = Pt.prototype, pi.prototype.constructor = pi;
              var hi, gi = function(n2, t2) {
                this.parent = t2, Pt.call(this, n2, Mt().slideSelector);
              };
              function mi() {
                E(p(Mt().sectionSelector, yt()), _n), E(p(Mt().slideSelector, yt()), qn);
              }
              function wi(n2) {
                var t2 = n2.slides.length, e2 = n2.wn, i2 = n2.slides, o2 = 100 * t2, a2 = 100 / t2;
                if (!p(et, n2.item)[0]) {
                  var l2 = r.createElement("div");
                  l2.className = tt, z(e2, l2);
                  var u2 = r.createElement("div");
                  u2.className = it, z(e2, u2);
                }
                b(p(ot, n2.item), { width: o2 + "%" }), t2 > 1 && (Mt().controlArrows && function(n3) {
                  var t3 = n3.item, e3 = [K(Mt().controlArrowsHTML[0]), K(Mt().controlArrowsHTML[1])];
                  H(p(et, t3)[0], e3), E(e3, ft), E(e3[0], vt), E(e3[1], "fp-next"), "#fff" !== Mt().controlArrowColor && (b(p(ht, t3), { "border-color": "transparent transparent transparent " + Mt().controlArrowColor }), b(p(pt, t3), { "border-color": "transparent " + Mt().controlArrowColor + " transparent transparent" })), Mt().loopHorizontal || x(p(pt, t3));
                }(n2), Mt().slidesNavigation && function(n3) {
                  var t3 = n3.item, e3 = n3.slides.length;
                  L(K('<div class="fp-slidesNav"><ul></ul></div>'), t3);
                  var i3 = p(ct, t3)[0];
                  E(i3, "fp-" + Mt().slidesNavPosition);
                  for (var o3 = 0; o3 < e3; o3++)
                    L(K('<li><a href="#"><span class="fp-sr-only">' + pe(o3, "Slide", p($n, t3)[o3]) + "</span><span></span></a></li>"), p("ul", i3)[0]);
                  b(i3, { "margin-left": "-" + i3.innerWidth / 2 + "px" });
                  var r2 = n3.activeSlide ? n3.activeSlide.index() : 0;
                  E(p("a", p("li", i3)[r2]), Yn);
                }(n2)), i2.forEach(function(n3) {
                  b(n3.item, { width: a2 + "%" }), Mt().verticalCentered && ni(n3);
                });
                var c2 = kt("responsiveSlides") ? null : n2.activeSlide || null;
                null != c2 && vn.P && (0 !== vn.P.index() || 0 === vn.P.index() && 0 !== c2.index()) ? (Re(c2.item, "internal"), E(c2.item, "fp-initial")) : E(e2[0], Yn);
              }
              gi.prototype = Pt.prototype, gi.prototype.constructor = pi;
              var bi = { attributes: false, subtree: true, childList: true, characterData: true };
              function Si() {
                return Et("responsiveSlides", "isResponsiveSlidesChanging") || v(p(Mt().slideSelector, yt())).length !== hn().D;
              }
              function yi(n2) {
                var t2 = Si();
                (Si() || Et("responsiveSlides", "isResponsiveSlidesChanging") || v(p(Mt().sectionSelector, yt())).length !== hn().j) && !vn.nn && (Mt().observer && hi && hi.disconnect(), fi(), si(), Mt().anchors = [], q(p(Kn)), Et("responsiveSlides", "isResponsiveSlidesChanging") || mi(), xt(), Mt().navigation && Pe(), t2 && (q(p(ct)), q(p(dt))), hn().N.forEach(function(n3) {
                  n3.slides.length ? t2 && wi(n3) : ii(n3);
                })), Mt().observer && hi && p(Fn)[0] && hi.observe(p(Fn)[0], bi);
              }
              dn.R(yn, function() {
                var n2, t2, e2;
                Mt().observer && "MutationObserver" in window && p(Fn)[0] && (n2 = p(Fn)[0], t2 = bi, (e2 = new MutationObserver(yi)).observe(n2, t2), hi = e2), dn.R(Tn, yi);
              }), s.render = yi;
              var Mi = function() {
                var n2 = false;
                try {
                  var t2 = Object.defineProperty({}, "passive", { get: function() {
                    n2 = true;
                  } });
                  G("testPassive", null, t2), U("testPassive", null, t2);
                } catch (n3) {
                }
                return function() {
                  return n2;
                };
              }();
              function Ti() {
                return !!Mi() && { passive: false };
              }
              var Ai, xi, Oi, ki, Ei = (Oi = (/* @__PURE__ */ new Date()).getTime(), ki = [], { In: function(n2) {
                var t2 = (n2 = n2 || o.event).wheelDelta || -n2.deltaY || -n2.detail, e2 = Math.max(-1, Math.min(1, t2)), i2 = void 0 !== n2.wheelDeltaX || void 0 !== n2.deltaX;
                Ai = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !i2;
                var r2 = (/* @__PURE__ */ new Date()).getTime();
                xi = e2 < 0 ? "down" : "up", ki.length > 149 && ki.shift(), ki.push(Math.abs(t2));
                var a2 = r2 - Oi;
                Oi = r2, a2 > 200 && (ki = []);
              }, Wn: function() {
                var n2 = an(ki, 10) >= an(ki, 70);
                return !!ki.length && n2 && Ai;
              }, Fn: function() {
                return xi;
              } });
              function Ri() {
                var n2 = Mt().css3 ? W() + m() : rn(hn().N).item.offsetTop + rn(hn().N).item.offsetHeight, t2 = Bt(n2);
                s.test.top = -n2 + "px", pn({ canScroll: false }), ee(t2.element, t2.options, Mt().scrollingSpeed, function() {
                  setTimeout(function() {
                    pn({ C: true }), pn({ canScroll: true });
                  }, 30);
                });
              }
              function Li() {
                yt().getBoundingClientRect().bottom >= 0 && ji();
              }
              function ji() {
                var n2 = Bt(rn(hn().N).item.offsetTop);
                pn({ canScroll: false }), ee(n2.element, n2.options, Mt().scrollingSpeed, function() {
                  pn({ canScroll: true }), pn({ C: false }), pn({ Vn: false });
                });
              }
              var zi, Di, Ni, Pi = (zi = false, Di = {}, Ni = {}, function(n2, t2, e2) {
                switch (n2) {
                  case "set":
                    Di[t2] = (/* @__PURE__ */ new Date()).getTime(), Ni[t2] = e2;
                    break;
                  case "isNewKeyframe":
                    var i2 = (/* @__PURE__ */ new Date()).getTime();
                    zi = i2 - Di[t2] > Ni[t2];
                }
                return zi;
              });
              function Hi() {
                var n2 = hn().P.next();
                n2 || !Mt().loopBottom && !Mt().continuousVertical || (n2 = hn().N[0]), null != n2 ? Ue(n2, null, false) : yt().scrollHeight < $t.scrollHeight && Mt().scrollBar && Mt().Zn && dn.L(Ln);
              }
              function Ci() {
                var n2 = hn().P.prev();
                n2 || !Mt().loopTop && !Mt().continuousVertical || (n2 = rn(hn().N)), null != n2 && Ue(n2, null, true);
              }
              s.moveSectionDown = Hi, s.moveSectionUp = Ci;
              var Ii = 0;
              function Wi(n2) {
                Mt().autoScrolling && (vn.canScroll && (n2.pageY < Ii && Se().m.up ? Ci() : n2.pageY > Ii && Se().m.down && Hi()), Ii = n2.pageY);
              }
              function Fi(n2) {
                if (Se().m[n2]) {
                  var t2 = "down" === n2 ? Hi : Ci;
                  kt("scrollHorizontally") && (t2 = Et("scrollHorizontally", "getScrollSection", { type: n2, scrollSection: t2 })), Mt().scrollOverflow && li.mn(hn().P) ? li.Pn(n2, hn().P.item) && li.Hn() && t2() : t2();
                }
              }
              var Vi, Zi, Bi, Gi = 0, Yi = 0, Ui = 0, Xi = 0, _i = to(), Qi = { Bn: "ontouchmove" in window ? "touchmove" : _i ? _i.move : null, Gn: "ontouchstart" in window ? "touchstart" : _i ? _i.down : null };
              function Ji(n2) {
                var t2 = P(n2.target, Qn) || hn().P.item, e2 = li.mn(hn().P);
                if (Ki(n2)) {
                  pn({ X: true, _: false }), Mt().autoScrolling && (e2 && !vn.canScroll || Mt().scrollBar) && V(n2);
                  var i2 = no(n2);
                  Ui = i2.y, Xi = i2.x;
                  var r2 = Math.abs(Gi - Ui) > o.innerHeight / 100 * Mt().touchSensitivity, a2 = Math.abs(Yi - Xi) > w() / 100 * Mt().touchSensitivity, l2 = p(et, t2).length && Math.abs(Yi - Xi) > Math.abs(Gi - Ui), u2 = Gi > Ui ? "down" : "up";
                  pn({ Y: l2 ? Yi > Xi ? "right" : "left" : u2 }), l2 ? !vn.W && a2 && (Yi > Xi ? Se().m.right && dn.L(bn, { section: t2 }) : Se().m.left && dn.L(wn, { section: t2 })) : Mt().autoScrolling && vn.canScroll && r2 && Fi(u2);
                }
              }
              function Ki(n2) {
                return void 0 === n2.pointerType || "mouse" != n2.pointerType;
              }
              function qi(n2) {
                if (Mt().fitToSection && pn({ G: false }), Ki(n2)) {
                  var t2 = no(n2);
                  Gi = t2.y, Yi = t2.x;
                }
                G("touchend", $i);
              }
              function $i() {
                U("touchend", $i), pn({ X: false });
              }
              function no(n2) {
                var t2 = {};
                return t2.y = void 0 !== n2.pageY && (n2.pageY || n2.pageX) ? n2.pageY : n2.touches[0].pageY, t2.x = void 0 !== n2.pageX && (n2.pageY || n2.pageX) ? n2.pageX : n2.touches[0].pageX, u && Ki(n2) && Mt().scrollBar && void 0 !== n2.touches && (t2.y = n2.touches[0].pageY, t2.x = n2.touches[0].pageX), t2;
              }
              function to() {
                var n2;
                return o.PointerEvent && (n2 = { down: "pointerdown", move: "pointermove" }), n2;
              }
              function eo(n2) {
                Mt().autoScrolling && Ki(n2) && Se().m.up && (vn.canScroll || V(n2));
              }
              function io(n2, t2) {
                var e2 = null == t2 ? hn().P.item : t2, i2 = Ct(vn.N, e2), o2 = p(et, e2)[0];
                if (!(null == o2 || Rt() || vn.W || i2.slides.length < 2)) {
                  var r2 = i2.activeSlide, a2 = "left" === n2 ? r2.prev() : r2.next();
                  if (!a2) {
                    if (!Mt().loopHorizontal)
                      return;
                    a2 = "left" === n2 ? rn(i2.slides) : i2.slides[0];
                  }
                  pn({ W: !s.test.hn }), Ae(o2, a2.item, n2);
                }
              }
              function oo(n2) {
                io("left", n2);
              }
              function ro(n2) {
                io("right", n2);
              }
              function ao(n2) {
                var t2 = hn().N.filter(function(t3) {
                  return t3.anchor === n2;
                })[0];
                if (!t2) {
                  var e2 = void 0 !== n2 ? n2 - 1 : 0;
                  t2 = hn().N[e2];
                }
                return t2;
              }
              function lo(n2) {
                null != n2 && Ae(P(n2, et), n2);
              }
              function uo(n2, t2) {
                var e2 = ao(n2);
                if (null != e2) {
                  var i2 = function(n3, t3) {
                    var e3 = t3.slides.filter(function(t4) {
                      return t4.anchor === n3;
                    })[0];
                    return null == e3 && (n3 = void 0 !== n3 ? n3 : 0, e3 = t3.slides[n3]), e3 ? e3.item : null;
                  }(t2, e2);
                  e2.anchor && e2.anchor === vn.Z || g(e2.item, Yn) ? lo(i2) : Ue(e2, function() {
                    lo(i2);
                  });
                }
              }
              function co(n2, t2) {
                var e2 = ao(n2);
                void 0 !== t2 ? uo(n2, t2) : null != e2 && Ue(e2);
              }
              function so() {
                clearTimeout(Zi), Y("keydown", fo), Y("keyup", vo);
              }
              function fo(n2) {
                clearTimeout(Zi);
                var t2 = n2.keyCode, e2 = [37, 39].indexOf(t2) > -1, i2 = Mt().autoScrolling || Mt().fitToSection || e2;
                9 === t2 ? function(n3) {
                  var t3 = n3.shiftKey, e3 = r.activeElement, i3 = wo(Vt(hn().P.item));
                  function o2(n4) {
                    return V(n4), i3[0] ? i3[0].focus() : null;
                  }
                  if (vn.canScroll) {
                    if (!function(n4) {
                      var t4 = wo(r), e4 = t4.indexOf(r.activeElement), i4 = t4[n4.shiftKey ? e4 - 1 : e4 + 1], o3 = P(i4, $n), a3 = P(i4, Qn);
                      return !o3 && !a3;
                    }(n3)) {
                      e3 ? null == P(e3, ".fp-section.active,.fp-section.active .fp-slide.active") && (e3 = o2(n3)) : o2(n3);
                      var a2 = e3 == i3[0], l2 = e3 == i3[i3.length - 1], u2 = t3 && a2;
                      if (u2 || !t3 && l2) {
                        V(n3);
                        var c2 = function(n4) {
                          var t4, e4 = n4 ? "prevPanel" : "nextPanel", i4 = [], o3 = Zt((vn.P && vn.P.activeSlide ? vn.P.activeSlide : vn.P)[e4]());
                          do {
                            (i4 = wo(o3.item)).length && (t4 = { Yn: o3, Un: i4[n4 ? i4.length - 1 : 0] }), o3 = Zt(o3[e4]());
                          } while (o3 && 0 === i4.length);
                          return t4;
                        }(u2), s2 = c2 ? c2.Yn : null;
                        if (s2) {
                          var f2 = s2.rn ? s2 : s2.parent;
                          dn.L(xn, { Xn: f2.index() + 1, slideAnchor: s2.rn ? 0 : s2.index() }), Bi = c2.Un, V(n3);
                        }
                      }
                    }
                  } else
                    V(n3);
                }(n2) : !cn() && Mt().keyboardScrolling && i2 && (Vi = n2.ctrlKey, Zi = setTimeout(function() {
                  !function(n3) {
                    var t3 = n3.shiftKey, e3 = r.activeElement, i3 = Q(e3, "video") || Q(e3, "audio"), o2 = li.Pn("up", hn().P.item), a2 = li.Pn("down", hn().P.item), l2 = [37, 39].indexOf(n3.keyCode) > -1;
                    if (function(n4) {
                      (function(n5) {
                        return [40, 38, 32, 33, 34].indexOf(n5.keyCode) > -1 && !vn.C;
                      })(n4) && !P(n4.target, lt) && n4.preventDefault();
                    }(n3), vn.canScroll || l2)
                      switch (pn({ H: "keydown" }), n3.keyCode) {
                        case 38:
                        case 33:
                          Se().k.up && o2 ? vn.C ? dn.L(On, { e: n3 }) : Ci() : li.Sn();
                          break;
                        case 32:
                          if (t3 && Se().k.up && !i3 && o2) {
                            Ci();
                            break;
                          }
                        case 40:
                        case 34:
                          if (Se().k.down && a2) {
                            if (vn.C)
                              return;
                            32 === n3.keyCode && i3 || Hi();
                          } else
                            li.Sn();
                          break;
                        case 36:
                          Se().k.up && co(1);
                          break;
                        case 35:
                          Se().k.down && co(hn().N.length);
                          break;
                        case 37:
                          Se().k.left && oo();
                          break;
                        case 39:
                          Se().k.right && ro();
                      }
                  }(n2);
                }, 0));
              }
              function vo(n2) {
                vn.J && (Vi = n2.ctrlKey);
              }
              function po() {
                pn({ J: false }), Vi = false;
              }
              function ho(n2) {
                mo();
              }
              function go(n2) {
                P(Bi, $n) && !P(Bi, nt) || mo();
              }
              function mo() {
                Bi && (Bi.focus(), Bi = null);
              }
              function wo(n2) {
                return [].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n2)).filter(function(n3) {
                  return "-1" !== Z(n3, "tabindex") && null !== n3.offsetParent;
                });
              }
              s.moveSlideLeft = oo, s.moveSlideRight = ro, s.moveTo = co, dn.R(yn, function() {
                G("blur", po), B("keydown", fo), B("keyup", vo), dn.R(Mn, so), dn.R(Pn, ho), dn.R(Nn, go);
              });
              var bo = (/* @__PURE__ */ new Date()).getTime(), So = [];
              function yo(n2) {
                n2 ? (function() {
                  var n3, t2 = "";
                  o.addEventListener ? n3 = "addEventListener" : (n3 = "attachEvent", t2 = "on");
                  var e2 = "onwheel" in r.createElement("div") ? "wheel" : void 0 !== r.onmousewheel ? "mousewheel" : "DOMMouseScroll", i2 = Ti();
                  "DOMMouseScroll" == e2 ? r[n3](t2 + "MozMousePixelScroll", Mo, i2) : r[n3](t2 + e2, Mo, i2);
                }(), yt().addEventListener("mousedown", To), yt().addEventListener("mouseup", Ao)) : (r.addEventListener ? (Y("mousewheel", Mo, false), Y("wheel", Mo, false), Y("MozMousePixelScroll", Mo, false)) : r.detachEvent("onmousewheel", Mo), yt().removeEventListener("mousedown", To), yt().removeEventListener("mouseup", Ao));
              }
              function Mo(n2) {
                var t2 = (/* @__PURE__ */ new Date()).getTime(), e2 = g(p(".fp-completely")[0], "fp-normal-scroll"), i2 = function(n3, t3) {
                  (/* @__PURE__ */ new Date()).getTime();
                  var e3 = hn().C && n3.getBoundingClientRect().bottom >= 0 && "up" === Ei.Fn(), i3 = hn().Vn;
                  if (i3)
                    return V(t3), false;
                  if (hn().C) {
                    if (e3) {
                      var o2;
                      if (!(i3 || Pi("isNewKeyframe", "beyondFullpage") && Ei.Wn()))
                        return (o2 = Bt(rn(hn().N).item.offsetTop + rn(hn().N).item.offsetHeight)).element.scrollTo(0, o2.options), pn({ Vn: false }), V(t3), false;
                      if (Ei.Wn())
                        return e3 = false, pn({ Vn: true }), pn({ H: "wheel" }), ji(), V(t3), false;
                    } else
                      Pi("set", "beyondFullpage", 1e3);
                    if (!i3 && !e3)
                      return true;
                  }
                }(yt(), n2);
                if (vn._ || pn({ X: false, _: true, Y: "none" }), !Se().m.down && !Se().m.up)
                  return V(n2), false;
                if (i2)
                  return true;
                if (false === i2)
                  return V(n2), false;
                if (Mt().autoScrolling && !Vi && !e2) {
                  var r2 = (n2 = n2 || o.event).wheelDelta || -n2.deltaY || -n2.detail, a2 = Math.max(-1, Math.min(1, r2)), l2 = void 0 !== n2.wheelDeltaX || void 0 !== n2.deltaX, u2 = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !l2, c2 = a2 < 0 ? "down" : a2 > 0 ? "up" : "none";
                  So.length > 149 && So.shift(), So.push(Math.abs(r2)), Mt().scrollBar && V(n2);
                  var s2 = t2 - bo;
                  return bo = t2, s2 > 200 && (So = []), pn({ U: c2 }), vn.canScroll && !Rt() && an(So, 10) >= an(So, 70) && u2 && (pn({ H: "wheel" }), Fi(a2 < 0 ? "down" : "up")), false;
                }
                Mt().fitToSection && pn({ G: false });
              }
              function To(n2) {
                var t2;
                2 == n2.which && (t2 = n2.pageY, Ii = t2, yt().addEventListener("mousemove", Wi));
              }
              function Ao(n2) {
                2 == n2.which && yt().removeEventListener("mousemove", Wi);
              }
              function xo(n2) {
                n2 ? (yo(true), function() {
                  if (Qi.Bn && (a || u) && (!kt("dragAndMove") || "mouseonly" === Mt().dragAndMove)) {
                    Mt().autoScrolling && ($t.removeEventListener(Qi.Bn, eo, { passive: false }), $t.addEventListener(Qi.Bn, eo, { passive: false }));
                    var n3 = Mt().touchWrapper;
                    n3.removeEventListener(Qi.Gn, qi), n3.removeEventListener(Qi.Bn, Ji, { passive: false }), n3.addEventListener(Qi.Gn, qi), n3.addEventListener(Qi.Bn, Ji, { passive: false });
                  }
                }()) : (yo(false), function() {
                  if (Qi.Bn && (a || u)) {
                    Mt().autoScrolling && ($t.removeEventListener(Qi.Bn, Ji, { passive: false }), $t.removeEventListener(Qi.Bn, eo, { passive: false }));
                    var n3 = Mt().touchWrapper;
                    n3.removeEventListener(Qi.Gn, qi), n3.removeEventListener(Qi.Bn, Ji, { passive: false });
                  }
                }());
              }
              s.setMouseWheelScrolling = yo;
              var Oo = true;
              function ko() {
                ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(n2) {
                  Y(n2, Ro, true);
                });
              }
              function Eo(n2, t2) {
                document["fp_" + n2] = t2, B(n2, Ro, true);
              }
              function Ro(n2) {
                var t2 = n2.type, e2 = false, i2 = "mouseleave" === t2 ? n2.toElement || n2.relatedTarget : n2.target;
                i2 != document && i2 ? ("touchend" === t2 && (Oo = false, setTimeout(function() {
                  Oo = true;
                }, 800)), ("mouseenter" !== t2 || Oo) && (Mt().normalScrollElements.split(",").forEach(function(n3) {
                  if (!e2) {
                    var t3 = Q(i2, n3), o2 = P(i2, n3);
                    (t3 || o2) && (s.shared._n || xo(false), s.shared._n = true, e2 = true);
                  }
                }), !e2 && s.shared._n && (xo(true), s.shared._n = false))) : xo(true);
              }
              function Lo(n2, t2) {
                Kt(0, "internal"), co(n2, t2), Kt(Tt().scrollingSpeed, "internal");
              }
              dn.R(yn, function() {
                Mt().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(n2) {
                  Eo(n2, false);
                }), ["mouseleave", "touchend"].forEach(function(n2) {
                  Eo(n2, true);
                })), dn.R(Mn, ko);
              }), s.silentMoveTo = Lo;
              var jo, zo, Do = m(), No = w(), Po = false;
              function Ho() {
                clearTimeout(jo), clearTimeout(zo), U("resize", Co);
              }
              function Co() {
                Po || (Mt().autoScrolling && !Mt().scrollBar || !Mt().fitToSection) && Wo(m()), function() {
                  if (a)
                    for (var n2 = 0; n2 < 4; n2++)
                      zo = setTimeout(function() {
                        window.requestAnimationFrame(function() {
                          Mt().autoScrolling && !Mt().scrollBar && (pn({ F: true }), Lo(vn.P.index() + 1), pn({ F: false }));
                        });
                      }, 200 * n2);
                }(), Po = true, clearTimeout(jo), jo = setTimeout(function() {
                  !function() {
                    if (pn({ F: true }), Wo(""), _(yt(), "onResize"), Mt().autoScrolling || vn.C || function() {
                      if (!Mt().autoScrolling || Mt().scrollBar) {
                        var n3 = 0.01 * o.innerHeight;
                        r.documentElement.style.setProperty("--vh", "".concat(n3, "px"));
                      }
                    }(), dn.L(Tn), si(), Ke(), a) {
                      var n2 = r.activeElement;
                      if (!Q(n2, "textarea") && !Q(n2, "input") && !Q(n2, "select")) {
                        var t2 = m();
                        Math.abs(t2 - Do) > 20 * Math.max(Do, t2) / 100 && (Io(true), Do = t2);
                      }
                    } else
                      e2 = m(), i2 = w(), vn.q === e2 && No === i2 || (pn({ q: e2 }), No = i2, Io(true));
                    var e2, i2;
                    _(yt(), "onResizeEnds"), pn({ F: false });
                  }(), Po = false;
                }, 400);
              }
              function Io(n2) {
                if (!g(yt(), Bn)) {
                  pn({ F: true, q: m(), Qn: w() });
                  for (var t2 = hn().N, e2 = 0; e2 < t2.length; ++e2) {
                    var i2 = t2[e2], r2 = p(et, i2.item)[0], a2 = i2.slides;
                    kt("offsetSections") && b(i2.item, { height: jt(i2.item) }), a2.length > 1 && Ae(r2, i2.activeSlide.item);
                  }
                  Mt().scrollOverflow && li.bn();
                  var l2 = hn().P.index();
                  vn.C || !l2 || kt("fadingEffect") || kt("dropEffect") || kt("waterEffect") || Lo(l2 + 1), pn({ F: false }), X(Mt().afterResize) && n2 && Mt().afterResize.call(yt(), o.innerWidth, o.innerHeight), X(Mt().afterReBuild) && !n2 && Mt().afterReBuild.call(yt()), _(yt(), "afterRebuild");
                }
              }
              function Wo(n2) {
                hn().N.forEach(function(t2) {
                  var e2 = "" !== n2 || kt("offsetSections") ? jt(t2.item) : "";
                  b(t2.item, { height: e2 });
                });
              }
              function Fo() {
                var n2, t2, e2 = o.location.hash;
                if (e2.length) {
                  var i2 = e2.replace("#", "").split("/"), r2 = e2.indexOf("#/") > -1;
                  n2 = r2 ? "/" + i2[1] : decodeURIComponent(i2[0]);
                  var a2 = r2 ? i2[2] : i2[1];
                  a2 && a2.length && (t2 = decodeURIComponent(a2));
                }
                return { section: n2, sn: t2 };
              }
              function Vo() {
                U("hashchange", Zo);
              }
              function Zo() {
                if (!vn.V && !Mt().lockAnchors) {
                  var n2 = Fo(), t2 = n2.section, e2 = n2.sn, i2 = void 0 === vn.Z, o2 = void 0 === vn.Z && void 0 === e2 && !vn.W;
                  t2 && t2.length && (t2 && t2 !== vn.Z && !i2 || o2 && !Rt() || !vn.W && vn.B != e2 && !Rt()) && dn.L(xn, { Xn: t2, slideAnchor: e2 });
                }
              }
              function Bo(n2) {
                var t2 = n2.target;
                P(t2, Mt().menu + " [data-menuanchor]") && Go.call(t2, n2);
              }
              function Go(n2) {
                pn({ H: "menu" }), !p(Mt().menu)[0] || !Mt().lockAnchors && Mt().anchors.length || (V(n2), dn.L(kn, { anchor: Z(this, "data-menuanchor") }));
              }
              function Yo(n2) {
                var t2 = n2.target;
                t2 && P(t2, "#fp-nav a") ? He.call(t2, n2.e) : Q(t2, ".fp-tooltip") ? Ne.call(t2) : (Q(t2, st) || null != P(t2, st)) && he.call(t2, n2.e);
              }
              s.reBuild = Io, dn.R(yn, function() {
                Co(), G("resize", Co), dn.R(Mn, Ho);
              }), s.setLockAnchors = function(n2) {
                Mt().lockAnchors = n2;
              }, dn.R(yn, function() {
                G("hashchange", Zo), dn.R(Mn, Vo);
              }), dn.R(yn, function() {
                B("wheel", Ei.In, Ti()), dn.R(Ln, Ri), dn.R(On, Li);
              }), dn.R(yn, function() {
                dn.R(mn, Bo);
              }), dn.R(yn, function() {
                dn.R(mn, Yo);
              });
              var Uo, Xo, _o = 0;
              function Qo(n2) {
                var t2, e2, i2, o2, r2;
                if (_(yt(), "onScroll"), !vn.F && hn().P && (rn(hn().N), !hn().C && !hn().Vn && (!Mt().autoScrolling || Mt().scrollBar || kt("dragAndMove")) && !Lt())) {
                  var a2 = kt("dragAndMove") ? Math.abs(Et("dragAndMove", "getCurrentScroll")) : W(), l2 = function(n3) {
                    var t3 = n3 > _o ? "down" : "up";
                    return _o = n3, pn({ K: n3 }), t3;
                  }(a2), u2 = 0, c2 = a2 + m() / 2, s2 = (kt("dragAndMove") ? Et("dragAndMove", "getDocumentHeight") : $t.scrollHeight - m()) === a2, f2 = hn().N;
                  if (pn({ scrollY: a2 }), s2)
                    u2 = f2.length - 1;
                  else if (a2)
                    for (var d2 = 0; d2 < f2.length; ++d2)
                      (P(f2[d2].item, Qn) || f2[d2].item).offsetTop <= c2 && (u2 = d2);
                  else
                    u2 = 0;
                  if (i2 = l2, o2 = hn().P.item.offsetTop, r2 = o2 + m(), ("up" == i2 ? r2 >= W() + m() : o2 <= W()) && (g(hn().P.item, Xn) || (E(hn().P.item, Xn), R(F(hn().P.item), Xn))), e2 = (t2 = f2[u2]).item, !t2.isActive) {
                    pn({ V: true });
                    var v2, p2, h2 = hn().P.item, w2 = hn().P.index() + 1, b2 = Ut(hn().P, e2), S2 = t2.anchor, y2 = t2.index() + 1, M2 = t2.activeSlide, T2 = { P: h2, sectionIndex: y2 - 1, anchorLink: S2, element: e2, leavingSection: w2, direction: b2, items: { origin: hn().P, destination: t2 } };
                    if (M2 && (p2 = M2.anchor, v2 = M2.index()), vn.canScroll)
                      R(f2.filter(function(n3) {
                        return n3.index() !== t2.index();
                      }).map(function(n3) {
                        return n3.item;
                      }), Yn), E(e2, Yn), Et("parallax", "afterLoad"), X(Mt().beforeLeave) && Ye("beforeLeave", T2), X(Mt().onLeave) && re("onLeave", T2), X(Mt().afterLoad) && re("afterLoad", T2), Et("resetSliders", "apply", { localIsResizing: vn.F, leavingSection: w2 }), ue(h2), ce(e2), ae(e2), Ce(S2, y2 - 1), Mt().anchors.length && pn({ Z: S2 }), si(), de(v2, p2, S2);
                    clearTimeout(Uo), Uo = setTimeout(function() {
                      pn({ V: false });
                    }, 100);
                  }
                  Mt().fitToSection && vn.canScroll && (clearTimeout(Xo), Xo = setTimeout(function() {
                    vn.N.filter(function(n3) {
                      var t3 = n3.item.getBoundingClientRect();
                      return Math.round(t3.bottom) === Math.round(m()) || 0 === Math.round(t3.top);
                    }).length || Je();
                  }, Mt().en));
                }
              }
              function Jo(n2, t2) {
                void 0 !== t2 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
                  be(n2, t3, "k");
                }) : (be(n2, "all", "k"), Mt().keyboardScrolling = n2);
              }
              function Ko(n2) {
                var t2 = n2.index();
                void 0 !== Mt().anchors[t2] && n2.isActive && Ce(Mt().anchors[t2], t2), Mt().menu && Mt().css3 && null != P(p(Mt().menu)[0], Fn) && p(Mt().menu).forEach(function(n3) {
                  $t.appendChild(n3);
                });
              }
              function qo() {
                var n2, t2, e2 = hn().P, i2 = hn().P.item;
                E(i2, Xn), ce(i2), De(), ae(i2), t2 = ao((n2 = Fo()).section), n2.section && t2 && (void 0 === t2 || t2.index() !== T(ei)) || !X(Mt().afterLoad) || re("afterLoad", { P: i2, element: i2, direction: null, anchorLink: e2.anchor, sectionIndex: e2.index(), items: { origin: hn().P, destination: hn().P } }), X(Mt().afterRender) && re("afterRender"), _(yt(), "afterRender");
              }
              function $o(n2, t2) {
                void 0 !== t2 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
                  be(n2, t3, "m");
                }) : be(n2, "all", "m"), _(yt(), "setAllowScrolling", { value: n2, Jn: t2 });
              }
              function nr() {
                var n2 = Fo(), t2 = n2.section, e2 = n2.sn;
                t2 ? Mt().animateAnchor ? uo(t2, e2) : Lo(t2, e2) : dn.L(gn, null);
              }
              dn.R(Mn, function() {
                clearTimeout(Uo), clearTimeout(Xo);
              }), dn.R(yn, function() {
                G("scroll", Qo), r.body.addEventListener("scroll", Qo), dn.R(xn, function(n2) {
                  uo(n2.Xn, n2.slideAnchor);
                }), dn.R(kn, function(n2) {
                  co(n2.anchor, void 0);
                }), dn.R(An, function(n2) {
                  ("down" === n2.direction ? Hi : Ci)();
                }), dn.R(En, function(n2) {
                  Ue(n2.destination);
                });
              }), dn.R(Mn, function() {
                U("scroll", Qo);
              }), s.getActiveSlide = function() {
                return oe(hn().P.activeSlide);
              }, s.getScrollX = function() {
                return vn.scrollX;
              }, dn.R(yn, function() {
                dn.R(Mn, ke), dn.R(Rn, function(n2) {
                  Ae(n2.slides, n2.destination);
                }), dn.R(bn, function(n2) {
                  ro(n2.section);
                }), dn.R(wn, function(n2) {
                  oo(n2.section);
                });
              }), dn.R(yn, function() {
                var n2 = Mt().credits.position, t2 = ["left", "right"].indexOf(n2) > -1 ? "".concat(n2, ": 0;") : "", e2 = '\n        <div class="fp-watermark" style="'.concat(t2, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(Mt().credits.label, "\n            </a>\n        </div>\n    "), i2 = rn(vn.N), o2 = !vn.Kn || Mt().credits.enabled;
                i2 && i2.item && o2 && i2.item.insertAdjacentHTML("beforeend", e2);
              }), function() {
                dn.R(Sn, function() {
                  var t3, l2, u2;
                  pn({ Kn: (Mt().licenseKey, t3 = Mt().licenseKey, l2 = function(t4) {
                    var e3 = parseInt("514").toString(16);
                    if (!t4 || t4.length < 29 || 4 === t4.split(n2[0]).length)
                      return null;
                    var i3 = ["Each", "for"][o2()]().join(""), l3 = t4[["split"]]("-"), u3 = [];
                    l3[i3](function(n3, t5) {
                      if (t5 < 4) {
                        var i4 = function(n4) {
                          var t6 = n4[n4.length - 1], e4 = ["NaN", "is"][o2()]().join("");
                          return window[e4](t6) ? r2(t6) : function(n5) {
                            return n5 - Yn.length;
                          }(t6);
                        }(n3);
                        u3.push(i4);
                        var a3 = r2(n3[i4]);
                        if (1 === t5) {
                          var l4 = ["pa", "dS", "t", "art"].join("");
                          a3 = a3.toString()[l4](2, "0");
                        }
                        e3 += a3, 0 !== t5 && 1 !== t5 || (e3 += "-");
                      }
                    });
                    var c2 = 0, s2 = "";
                    return t4.split("-").forEach(function(n3, t5) {
                      if (t5 < 4) {
                        for (var e4 = 0, i4 = 0; i4 < 4; i4++)
                          i4 !== u3[t5] && (e4 += Math.abs(r2(n3[i4])), isNaN(n3[i4]) || c2++);
                        var o3 = a2(e4);
                        s2 += o3;
                      }
                    }), s2 += a2(c2), { qn: /* @__PURE__ */ new Date(e3 + "T00:00"), $n: e3.split("-")[2] === 8 * (Yn.length - 2) + "", nt: s2 };
                  }(t3), u2 = function(n3) {
                    var t4 = i2[o2()]().join("");
                    return n3 && 0 === t4.indexOf(n3) && n3.length === t4.length;
                  }(t3), (l2 || u2) && (l2 && e2 <= l2.qn && l2.nt === t3.split(n2[0])[4] || u2 || l2.$n) || false) });
                });
                var n2 = ["-"], t2 = "2023-4-29".split("-"), e2 = new Date(t2[0], t2[1], t2[2]), i2 = ["se", "licen", "-", "v3", "l", "gp"];
                function o2() {
                  return [["re", "verse"].join("")]["".length];
                }
                function r2(n3) {
                  return n3 ? isNaN(n3) ? n3.charCodeAt(0) - 72 : n3 : "";
                }
                function a2(n3) {
                  var t3 = 72 + n3;
                  return t3 > 90 && t3 < 97 && (t3 += 15), String.fromCharCode(t3).toUpperCase();
                }
              }(), s.setKeyboardScrolling = Jo, s.shared.tt = qo, s.setAllowScrolling = $o;
              var tr = {};
              function er() {
                return tr;
              }
              var ir, or, rr, ar, lr = !g($t, Dt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
              function ur(n2) {
                if (or = r.createElement("div"), ir = Dt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), lr || (ir = ir.replace("extensions/", "").replace("Extension", "")), or.innerHTML = ir, or = or.firstChild, "MutationObserver" in window && new MutationObserver(sr).observe(r.body, { childList: true, subtree: false }), (!lr || kt(n2) && s[n2]) && (!function(n3) {
                  var t3 = void 0 !== er()[n3] && er()[n3].length, e2 = [], i2 = false;
                  return k(er()[n3]) ? e2 = er()[n3] : e2.push(er()[n3]), e2.forEach(function(e3) {
                    var o2 = function() {
                      if (r.domain.length) {
                        for (var n4 = r.domain.replace(/^(www\.)/, "").split("."); n4.length > 2; )
                          n4.shift();
                        return n4.join(".").replace(/(^\.*)|(\.*$)/g, "");
                      }
                      return "";
                    }(), a2 = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng=="], l2 = Dt(a2[0]), u2 = Dt(a2[1]), c2 = Dt(a2[2]), s2 = Dt(a2[6]), f2 = Dt(a2[3]), d2 = Dt(a2[4]), v2 = Dt(a2[5]), p2 = void 0 !== Mt()[d2 + v2];
                    t3 = t3 || p2;
                    var h2 = [l2, u2, c2, s2].indexOf(o2) < 0 && 0 !== o2.length;
                    if (!t3 && !p2 && h2)
                      return false;
                    var g2 = t3 ? Dt(e3) : "", m2 = (g2 = g2.split("_")).length > 1 && g2[1].indexOf(n3, g2[1].length - n3.length) > -1, w2 = g2.length > 1 && g2[1].toLowerCase().indexOf(d2) > -1, b2 = g2[0].indexOf(o2, g2[0].length - o2.length) < 0, S2 = m2 || w2;
                    i2 = i2 || !(b2 && h2 && f2 != g2[0]) && S2 || !h2;
                  }), i2;
                }(n2) || !lr)) {
                  cr();
                  var t2 = Dt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                  window[t2](cr, 2e3);
                }
              }
              function cr() {
                or && (ar || (Math.random() < 0.5 ? zt($t, or) : L(or, $t), ar = true), or.setAttribute("style", Dt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, Dt("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
              }
              function sr(n2) {
                n2.forEach(function(n3) {
                  if (n3.removedNodes[0] && n3.removedNodes[0].isEqualNode(or)) {
                    clearTimeout(rr);
                    var t2 = Dt("bDIwc2V0VGltZW91dDAzbA==");
                    rr = window[t2](fr, 900);
                  }
                });
              }
              function fr() {
                ar = false;
              }
              function dr() {
                fi(), si(), Mt().scrollBar = Mt().scrollBar || Mt().hybrid, xt(), function() {
                  b(un(yt(), "body"), { height: "100%", position: "relative" }), E(yt(), Wn), E(ne, Gn), pn({ q: m() }), R(yt(), Bn), mi(), Et("parallax", "init");
                  for (var n2 = hn().an, t2 = 0; t2 < n2.length; t2++) {
                    var e2 = n2[t2], i2 = e2.wn, o2 = Z(e2.item, "style");
                    o2 && e2.item.setAttribute("data-fp-styles", o2), ii(e2), Ko(e2), i2.length > 0 && wi(e2);
                  }
                  Mt().fixedElements && Mt().css3 && p(Mt().fixedElements).forEach(function(n3) {
                    $t.appendChild(n3);
                  }), Mt().navigation && Pe(), p('iframe[src*="youtube.com/embed/"]', yt()).forEach(function(n3) {
                    var t3, e3;
                    e3 = Z(t3 = n3, "src"), t3.setAttribute("src", e3 + (/\?/.test(e3) ? "&" : "?") + "enablejsapi=1");
                  }), Et("fadingEffect", "apply"), Et("waterEffect", "init"), Et("dropEffect", "init"), Et("cards", "init"), Mt().scrollOverflow && li.bn();
                }(), $o(true), xo(true), je(Mt().autoScrolling, "internal"), Ke(), se(), "complete" === r.readyState && nr(), G("load", nr), qo(), lr || ur("l"), fi(), si();
              }
              function vr() {
                var n2 = Mt().licenseKey;
                "" === Mt().licenseKey.trim() ? (f("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), f("error", "https://github.com/alvarotrigo/fullPage.js#options")) : Mt() && vn.Kn || r.domain.indexOf("alvarotrigo.com") > -1 ? n2 && n2.length : (f("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), f("error", "https://alvarotrigo.com/fullPage/pricing")), g(ne, Gn) ? f("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (Mt().continuousVertical && (Mt().loopTop || Mt().loopBottom) && (Mt().continuousVertical = false, f("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !Mt().scrollOverflow || !Mt().scrollBar && Mt().autoScrolling || f("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !Mt().continuousVertical || !Mt().scrollBar && Mt().autoScrolling || (Mt().continuousVertical = false, f("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), Mt().anchors.forEach(function(n3) {
                  var t2 = [].slice.call(p("[name]")).filter(function(t3) {
                    return Z(t3, "name") && Z(t3, "name").toLowerCase() == n3.toLowerCase();
                  }), e2 = [].slice.call(p("[id]")).filter(function(t3) {
                    return Z(t3, "id") && Z(t3, "id").toLowerCase() == n3.toLowerCase();
                  });
                  if (e2.length || t2.length) {
                    f("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                    var i2 = e2.length ? "id" : "name";
                    (e2.length || t2.length) && f("error", '"' + n3 + '" is is being used by another element `' + i2 + "` property");
                  }
                }));
              }
              function pr() {
                return { options: Mt(), internals: { container: yt(), canScroll: vn.canScroll, isScrollAllowed: Se(), getDestinationPosition: Xe, isTouch: u, c: ur, getXmovement: Oe, removeAnimation: Xt, getTransforms: _t, lazyLoad: ce, addAnimation: Yt, performHorizontalMove: xe, landscapeScroll: Ae, silentLandscapeScroll: Re, keepSlidesPosition: ze, silentScroll: Jt, styleSlides: wi, styleSection: ii, scrollHandler: Qo, getEventsPage: no, getMSPointer: to, isReallyTouch: Ki, usingExtension: kt, toggleControlArrows: Me, touchStartHandler: qi, touchMoveHandler: Ji, nullOrSection: ie, items: { SectionPanel: pi, SlidePanel: gi, Item: Pt }, getVisible: v, getState: hn, updateState: si, updateStructuralState: fi, activeSlidesNavigation: ge, getPanels: function() {
                  return vn.un;
                }, getSections: function() {
                  return vn.N;
                }, setActiveSection: function(n2) {
                  vn.P = n2;
                } } };
              }
              function hr(n2) {
                var t2 = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], e2 = Dt(t2[0]), i2 = Dt(t2[1]), o2 = void 0 !== Mt()[e2 + i2], r2 = "fp_" + n2 + "Extension";
                er()[n2] = o2 ? Mt()[e2 + i2] : Mt()[n2 + i2], s[n2] = void 0 !== window[r2] ? new window[r2]() : null, s[n2] && s[n2].c(n2);
              }
              function gr(n2, t2) {
                var e2;
                if ($t = p("body")[0], ne = p("html")[0], te = p("html, body"), !g(ne, Gn))
                  return "touchWrapper", e2 = "string" == typeof n2 ? p(n2)[0] : n2, gt.touchWrapper = e2, function(n3) {
                    St = h({}, gt, n3), bt = Object.assign({}, St);
                  }(t2), function(n3) {
                    mt = n3;
                  }("string" == typeof n2 ? p(n2)[0] : n2), dn.L(Sn), vr(), s.getFullpageData = pr, s.version = "4.0.20", s.test = Object.assign(s.test, { top: "0px", cn: "translate3d(0px, 0px, 0px)", dn: function() {
                    for (var n3 = [], t3 = 0; t3 < p(Mt().sectionSelector, yt()).length; t3++)
                      n3.push("translate3d(0px, 0px, 0px)");
                    return n3;
                  }(), left: function() {
                    for (var n3 = [], t3 = 0; t3 < p(Mt().sectionSelector, yt()).length; t3++)
                      n3.push(0);
                    return n3;
                  }(), options: Mt(), setAutoScrolling: null }), s.shared = Object.assign(s.shared, { tt: null, _n: false }), o.fullpage_api = s, o.fullpage_extensions = true, yt() && (dn.L("beforeInit"), hr("continuousHorizontal"), hr("scrollHorizontally"), hr("resetSliders"), hr("interlockedSlides"), hr("responsiveSlides"), hr("fadingEffect"), hr("dragAndMove"), hr("offsetSections"), hr("scrollOverflowReset"), hr("parallax"), hr("cards"), hr("dropEffect"), hr("waterEffect"), Et("dragAndMove", "init"), Et("responsiveSlides", "init"), dr(), dn.L(yn), Et("dragAndMove", "turnOffTouch")), o.fullpage_api;
                vr();
              }
              return s.destroy = function(n2) {
                _(yt(), "destroy", n2), je(false, "internal"), $o(true), xo(false), Jo(false), E(yt(), Bn), dn.L(Mn), Et("dragAndMove", "destroy"), n2 && (Jt(0), p("img[data-src], source[data-src], audio[data-src], iframe[data-src]", yt()).forEach(function(n3) {
                  ln(n3, "src");
                }), p("img[data-srcset]").forEach(function(n3) {
                  ln(n3, "srcset");
                }), q(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")), b(Ht(hn().N), { height: "", "background-color": "", padding: "" }), b(Ht(hn().slides), { width: "" }), b(yt(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), b(te, { overflow: "", height: "" }), R(ne, Gn), R($t, Vn + " fp-scrollable"), $t.className.split(/\s+/).forEach(function(n3) {
                  0 === n3.indexOf("fp-viewing") && R($t, n3);
                }), Ht(hn().un).forEach(function(n3) {
                  Mt().scrollOverflow && li.Nn(n3), R(n3, "fp-table active fp-completely " + ut);
                  var t2 = Z(n3, "data-fp-styles");
                  t2 && n3.setAttribute("style", t2), g(n3, _n) && !wt && n3.removeAttribute("data-anchor");
                }), Xt(yt()), [Jn, ot, et].forEach(function(n3) {
                  p(n3, yt()).forEach(function(n4) {
                    N(n4);
                  });
                }), b(yt(), { "-webkit-transition": "none", transition: "none" }), R(yt(), Wn), o.scrollTo(0, 0), [_n, qn, it].forEach(function(n3) {
                  R(p("." + n3), n3);
                }));
              }, o.fp_easings = h(o.fp_easings, { easeInOutCubic: function(n2, t2, e2, i2) {
                return (n2 /= i2 / 2) < 1 ? e2 / 2 * n2 * n2 * n2 + t2 : e2 / 2 * ((n2 -= 2) * n2 * n2 + 2) + t2;
              } }), o.jQuery && function(n2, t2) {
                n2 && t2 ? n2.fn.fullpage = function(e2) {
                  e2 = n2.extend({}, e2, { $: n2 }), new t2(this[0], e2), Object.keys(s).forEach(function(n3) {
                    Mt().$.fn.fullpage[n3] = s[n3];
                  });
                } : f("error", "jQuery is required to use the jQuery fullpage adapter!");
              }(o.jQuery, gr), gr;
            });
          }
        ),
        /***/
        239: (
          /***/
          () => {
            window.fp_easings = { def: "easeOutQuad", linear: function(n, t, e, u) {
              return e * n / u + t;
            }, swing: function(n, t, e, u) {
              return window.fp_easings[window.fp_easings.def](n, t, e, u);
            }, easeInQuad: function(n, t, e, u) {
              return e * (n /= u) * n + t;
            }, easeOutQuad: function(n, t, e, u) {
              return -e * (n /= u) * (n - 2) + t;
            }, easeInOutQuad: function(n, t, e, u) {
              return (n /= u / 2) < 1 ? e / 2 * n * n + t : -e / 2 * (--n * (n - 2) - 1) + t;
            }, easeInCubic: function(n, t, e, u) {
              return e * (n /= u) * n * n + t;
            }, easeOutCubic: function(n, t, e, u) {
              return e * ((n = n / u - 1) * n * n + 1) + t;
            }, easeInOutCubic: function(n, t, e, u) {
              return (n /= u / 2) < 1 ? e / 2 * n * n * n + t : e / 2 * ((n -= 2) * n * n + 2) + t;
            }, easeInQuart: function(n, t, e, u) {
              return e * (n /= u) * n * n * n + t;
            }, easeOutQuart: function(n, t, e, u) {
              return -e * ((n = n / u - 1) * n * n * n - 1) + t;
            }, easeInOutQuart: function(n, t, e, u) {
              return (n /= u / 2) < 1 ? e / 2 * n * n * n * n + t : -e / 2 * ((n -= 2) * n * n * n - 2) + t;
            }, easeInQuint: function(n, t, e, u) {
              return e * (n /= u) * n * n * n * n + t;
            }, easeOutQuint: function(n, t, e, u) {
              return e * ((n = n / u - 1) * n * n * n * n + 1) + t;
            }, easeInOutQuint: function(n, t, e, u) {
              return (n /= u / 2) < 1 ? e / 2 * n * n * n * n * n + t : e / 2 * ((n -= 2) * n * n * n * n + 2) + t;
            }, easeInSine: function(n, t, e, u) {
              return -e * Math.cos(n / u * (Math.PI / 2)) + e + t;
            }, easeOutSine: function(n, t, e, u) {
              return e * Math.sin(n / u * (Math.PI / 2)) + t;
            }, easeInOutSine: function(n, t, e, u) {
              return -e / 2 * (Math.cos(Math.PI * n / u) - 1) + t;
            }, easeInExpo: function(n, t, e, u) {
              return 0 == n ? t : e * Math.pow(2, 10 * (n / u - 1)) + t;
            }, easeOutExpo: function(n, t, e, u) {
              return n == u ? t + e : e * (1 - Math.pow(2, -10 * n / u)) + t;
            }, easeInOutExpo: function(n, t, e, u) {
              return 0 == n ? t : n == u ? t + e : (n /= u / 2) < 1 ? e / 2 * Math.pow(2, 10 * (n - 1)) + t : e / 2 * (2 - Math.pow(2, -10 * --n)) + t;
            }, easeInCirc: function(n, t, e, u) {
              return -e * (Math.sqrt(1 - (n /= u) * n) - 1) + t;
            }, easeOutCirc: function(n, t, e, u) {
              return e * Math.sqrt(1 - (n = n / u - 1) * n) + t;
            }, easeInOutCirc: function(n, t, e, u) {
              return (n /= u / 2) < 1 ? -e / 2 * (Math.sqrt(1 - n * n) - 1) + t : e / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + t;
            }, easeInElastic: function(n, t, e, u) {
              var a = 1.70158, r = 0, i = e;
              if (0 == n)
                return t;
              if (1 == (n /= u))
                return t + e;
              if (r || (r = 0.3 * u), i < Math.abs(e)) {
                i = e;
                a = r / 4;
              } else
                a = r / (2 * Math.PI) * Math.asin(e / i);
              return -i * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * u - a) * (2 * Math.PI) / r) + t;
            }, easeOutElastic: function(n, t, e, u) {
              var a = 1.70158, r = 0, i = e;
              if (0 == n)
                return t;
              if (1 == (n /= u))
                return t + e;
              if (r || (r = 0.3 * u), i < Math.abs(e)) {
                i = e;
                a = r / 4;
              } else
                a = r / (2 * Math.PI) * Math.asin(e / i);
              return i * Math.pow(2, -10 * n) * Math.sin((n * u - a) * (2 * Math.PI) / r) + e + t;
            }, easeInOutElastic: function(n, t, e, u) {
              var a = 1.70158, r = 0, i = e;
              if (0 == n)
                return t;
              if (2 == (n /= u / 2))
                return t + e;
              if (r || (r = u * (0.3 * 1.5)), i < Math.abs(e)) {
                i = e;
                a = r / 4;
              } else
                a = r / (2 * Math.PI) * Math.asin(e / i);
              return n < 1 ? i * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * u - a) * (2 * Math.PI) / r) * -0.5 + t : i * Math.pow(2, -10 * (n -= 1)) * Math.sin((n * u - a) * (2 * Math.PI) / r) * 0.5 + e + t;
            }, easeInBack: function(n, t, e, u, a) {
              return null == a && (a = 1.70158), e * (n /= u) * n * ((a + 1) * n - a) + t;
            }, easeOutBack: function(n, t, e, u, a) {
              return null == a && (a = 1.70158), e * ((n = n / u - 1) * n * ((a + 1) * n + a) + 1) + t;
            }, easeInOutBack: function(n, t, e, u, a) {
              return null == a && (a = 1.70158), (n /= u / 2) < 1 ? e / 2 * (n * n * ((1 + (a *= 1.525)) * n - a)) + t : e / 2 * ((n -= 2) * n * ((1 + (a *= 1.525)) * n + a) + 2) + t;
            }, easeInBounce: function(n, t, e, u) {
              return e - window.fp_easings.easeOutBounce(u - n, 0, e, u) + t;
            }, easeOutBounce: function(n, t, e, u) {
              return (n /= u) < 1 / 2.75 ? e * (7.5625 * n * n) + t : n < 2 / 2.75 ? e * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + t : n < 2.5 / 2.75 ? e * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + t : e * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + t;
            }, easeInOutBounce: function(n, t, e, u) {
              return n < u / 2 ? 0.5 * window.fp_easings.easeInBounce(2 * n, 0, e, u) + t : 0.5 * window.fp_easings.easeOutBounce(2 * n - u, 0, e, u) + 0.5 * e + t;
            } };
          }
        ),
        /***/
        379: (
          /***/
          (module2) => {
            "use strict";
            var stylesInDom = [];
            function getIndexByIdentifier(identifier) {
              var result = -1;
              for (var i = 0; i < stylesInDom.length; i++) {
                if (stylesInDom[i].identifier === identifier) {
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
                var index = getIndexByIdentifier(identifier);
                var obj = {
                  css: item[1],
                  media: item[2],
                  sourceMap: item[3]
                };
                if (index !== -1) {
                  stylesInDom[index].references++;
                  stylesInDom[index].updater(obj);
                } else {
                  stylesInDom.push({
                    identifier,
                    updater: addStyle(obj, options),
                    references: 1
                  });
                }
                identifiers.push(identifier);
              }
              return identifiers;
            }
            function addStyle(obj, options) {
              var api = options.domAPI(options);
              api.update(obj);
              return function updateStyle(newObj) {
                if (newObj) {
                  if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                    return;
                  }
                  api.update(obj = newObj);
                } else {
                  api.remove();
                }
              };
            }
            module2.exports = function(list, options) {
              options = options || {};
              list = list || [];
              var lastIdentifiers = modulesToDom(list, options);
              return function update(newList) {
                newList = newList || [];
                for (var i = 0; i < lastIdentifiers.length; i++) {
                  var identifier = lastIdentifiers[i];
                  var index = getIndexByIdentifier(identifier);
                  stylesInDom[index].references--;
                }
                var newLastIdentifiers = modulesToDom(newList, options);
                for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                  var _identifier = lastIdentifiers[_i];
                  var _index = getIndexByIdentifier(_identifier);
                  if (stylesInDom[_index].references === 0) {
                    stylesInDom[_index].updater();
                    stylesInDom.splice(_index, 1);
                  }
                }
                lastIdentifiers = newLastIdentifiers;
              };
            };
          }
        ),
        /***/
        569: (
          /***/
          (module2) => {
            "use strict";
            var memo = {};
            function getTarget(target) {
              if (typeof memo[target] === "undefined") {
                var styleTarget = document.querySelector(target);
                if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                  try {
                    styleTarget = styleTarget.contentDocument.head;
                  } catch (e) {
                    styleTarget = null;
                  }
                }
                memo[target] = styleTarget;
              }
              return memo[target];
            }
            function insertBySelector(insert, style) {
              var target = getTarget(insert);
              if (!target) {
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              }
              target.appendChild(style);
            }
            module2.exports = insertBySelector;
          }
        ),
        /***/
        216: (
          /***/
          (module2) => {
            "use strict";
            function insertStyleElement(options) {
              var style = document.createElement("style");
              options.setAttributes(style, options.attributes);
              options.insert(style);
              return style;
            }
            module2.exports = insertStyleElement;
          }
        ),
        /***/
        565: (
          /***/
          (module2, __unused_webpack_exports, __webpack_require__2) => {
            "use strict";
            function setAttributesWithoutAttributes(style) {
              var nonce = true ? __webpack_require__2.nc : 0;
              if (nonce) {
                style.setAttribute("nonce", nonce);
              }
            }
            module2.exports = setAttributesWithoutAttributes;
          }
        ),
        /***/
        795: (
          /***/
          (module2) => {
            "use strict";
            function apply(style, options, obj) {
              var css = obj.css;
              var media = obj.media;
              var sourceMap = obj.sourceMap;
              if (media) {
                style.setAttribute("media", media);
              } else {
                style.removeAttribute("media");
              }
              if (sourceMap && typeof btoa !== "undefined") {
                css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
              }
              options.styleTagTransform(css, style);
            }
            function removeStyleElement(style) {
              if (style.parentNode === null) {
                return false;
              }
              style.parentNode.removeChild(style);
            }
            function domAPI(options) {
              var style = options.insertStyleElement(options);
              return {
                update: function update(obj) {
                  apply(style, options, obj);
                },
                remove: function remove() {
                  removeStyleElement(style);
                }
              };
            }
            module2.exports = domAPI;
          }
        ),
        /***/
        589: (
          /***/
          (module2) => {
            "use strict";
            function styleTagTransform(css, style) {
              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                while (style.firstChild) {
                  style.removeChild(style.firstChild);
                }
                style.appendChild(document.createTextNode(css));
              }
            }
            module2.exports = styleTagTransform;
          }
        ),
        /***/
        497: (
          /***/
          (module2) => {
            "use strict";
            module2.exports = require_react();
          }
        )
        /******/
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          /******/
          id: moduleId,
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      (() => {
        __webpack_require__.n = (module2) => {
          var getter = module2 && module2.__esModule ? (
            /******/
            () => module2["default"]
          ) : (
            /******/
            () => module2
          );
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      })();
      (() => {
        __webpack_require__.d = (exports2, definition) => {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      })();
      (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      })();
      (() => {
        __webpack_require__.r = (exports2) => {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      })();
      var __webpack_exports__ = {};
      (() => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          "default": () => (
            /* binding */
            components
          )
        });
        var external_react_ = __webpack_require__(497);
        var external_react_default = __webpack_require__.n(external_react_);
        ;
        const Wrapper = (_ref) => {
          let { children } = _ref;
          return external_react_default().createElement(external_react_.Fragment, null, children);
        };
        const components_Wrapper = Wrapper;
        ;
        const windowExists = () => {
          if (typeof window === "undefined") {
            return false;
          }
          try {
            const env = "production".toLowerCase();
            return !env.match(/test/);
          } catch (e) {
            return true;
          }
        };
        const components = (() => {
          let exported;
          if (windowExists()) {
            exported = __webpack_require__(88).Z;
          } else {
            exported = __webpack_require__(882).Z;
          }
          exported.Wrapper = components_Wrapper;
          return exported;
        })();
      })();
      module.exports = __webpack_exports__;
    })();
  }
});
export default require_react_fullpage();
/*! Bundled license information:

@fullpage/react-fullpage/dist/react-fullpage.js:
  (*!
   * @fullpage/react-fullpage 0.1.40
   * https://github.com/alvarotrigo/react-fullpage
   * @license https://github.com/alvarotrigo/react-fullpage#license
   *
   * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
   *)
  (*!
  * fullPage 4.0.20
  * https://github.com/alvarotrigo/fullPage.js
  *
  * @license GPLv3 for open source use only
  * or Fullpage Commercial License for commercial use
  * http://alvarotrigo.com/fullPage/pricing/
  *
  * Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
  *)
*/
//# sourceMappingURL=@fullpage_react-fullpage.js.map
