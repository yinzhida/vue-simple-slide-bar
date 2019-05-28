(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-simple-slide-bar"] = factory();
	else
		root["vue-simple-slide-bar"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'VueSimpleSlideBar',

  props: {
    data: {
      type: Array,
      default: null
    },

    range: {
      type: Array,
      default: null
    },

    speed: {
      type: Number,
      default: 0.5
    },

    iconWidth: {
      type: Number,
      default: 20
    },

    value: {
      type: [String, Number],
      default: 0
    },

    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: 100
    },

    showTooltip: {
      type: Boolean,
      default: false
    },

    isDisabled: {
      type: Boolean,
      default: false
    },

    draggable: {
      type: Boolean,
      default: true
    },

    tooltipStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    labelStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    processStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    trackStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    lazy: {
      type: Boolean,
      default: true
    },

    showBean: {
      type: Boolean,
      default: true
    },

    beanStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    wrapStyles: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      flag: false,
      size: 0,
      currentValue: 0,
      currentSlider: 0,
      isComponentExists: true,
      interval: 1,
      realTime: false,
      dataLabelStyles: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
        'color': '#4a4a4a',
        'font-family': 'Arial, sans-serif',
        'font-size': '12px'
      }, this.$props.labelStyles)
    };
  },


  computed: {
    val: {
      get: function get() {
        return this.data ? this.data[this.currentValue] : this.currentValue;
      },
      set: function set(val) {
        if (this.data) {
          var index = this.data.indexOf(val);
          if (index > -1) {
            this.currentValue = index;
          }
        } else {
          this.currentValue = val;
        }
      }
    },

    currentIndex: function currentIndex() {
      return (this.currentValue - this.minimum) / this.spacing;
    },
    indexRange: function indexRange() {
      return [0, this.currentIndex];
    },
    minimum: function minimum() {
      return this.data ? 0 : this.min;
    },
    maximum: function maximum() {
      return this.data ? this.data.length - 1 : this.max;
    },
    multiple: function multiple() {
      var decimals = ('' + this.interval).split('.')[1];
      return decimals ? Math.pow(10, decimals.length) : 1;
    },
    spacing: function spacing() {
      return this.data ? 1 : this.interval;
    },
    total: function total() {
      if (this.data) {
        return this.data.length - 1;
      } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
        this.printError('[VueSlideBar error]: Prop[interval] is illegal, Please make sure that the interval can be divisible');
      }
      return (this.maximum - this.minimum) / this.interval;
    },
    gap: function gap() {
      return this.size / this.total;
    },
    position: function position() {
      return (this.currentValue - this.minimum) / this.spacing * this.gap;
    },
    limit: function limit() {
      return [0, this.size];
    },
    valueLimit: function valueLimit() {
      return [this.minimum, this.maximum];
    },
    innerWrapStyles: function innerWrapStyles() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, { 'padding': '10px 0', 'min-height': this.range ? '100px' : undefined }, this.wrapStyles);
    }
  },

  watch: {
    value: function value(val) {
      if (this.flag) this.setValue(val);else this.setValue(val, this.speed);
    },
    max: function max(val) {
      if (val < this.min) {
        return this.printError('[VueSlideBar error]: The maximum value can not be less than the minimum value.');
      }
      var resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    min: function min(val) {
      if (val > this.max) {
        return this.printError('[VueSlideBar error]: The minimum value can not be greater than the maximum value.');
      }
      var resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.isComponentExists = true;
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return this.printError('[VueSlideBar error]: window or document is undefined, can not be initialization.');
    }
    this.$nextTick(function () {
      if (_this.isComponentExists) {
        _this.getStaticData();
        _this.setValue(_this.limitValue(_this.value), 0);
        _this.bindEvents();
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.isComponentExists = false;
    this.unbindEvents();
  },


  methods: {
    bindEvents: function bindEvents() {
      document.addEventListener('touchmove', this.moving, { passive: false });
      document.addEventListener('touchend', this.moveEnd, { passive: false });
      document.addEventListener('mousemove', this.moving);
      document.addEventListener('mouseup', this.moveEnd);
      document.addEventListener('mouseleave', this.moveEnd);
      window.addEventListener('resize', this.refresh);
    },
    unbindEvents: function unbindEvents() {
      window.removeEventListener('resize', this.refresh);
      document.removeEventListener('touchmove', this.moving);
      document.removeEventListener('touchend', this.moveEnd);
      document.removeEventListener('mousemove', this.moving);
      document.removeEventListener('mouseup', this.moveEnd);
      document.removeEventListener('mouseleave', this.moveEnd);
    },
    getPos: function getPos(e) {
      this.realTime && this.getStaticData();
      return e.clientX - this.offset;
    },
    wrapClick: function wrapClick(e) {
      if (this.isDisabled || !this.draggable && e.target.className.indexOf('vue-simple-slide-bar-component') !== -1) return false;
      var pos = this.getPos(e);
      this.setValueOnPos(pos);
    },
    moveStart: function moveStart(e, index) {
      if (!this.draggable) return false;
      this.flag = true;
      this.$emit('dragStart', this);
    },
    moving: function moving(e) {
      if (!this.flag || !this.draggable) return false;
      e.preventDefault();
      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];
      this.setValueOnPos(this.getPos(e), true);
    },
    moveEnd: function moveEnd(e) {
      if (this.flag && this.draggable) {
        this.$emit('dragEnd', this);
        if (this.lazy && this.isDiff(this.val, this.value)) {
          this.syncValue();
        }
      } else {
        return false;
      }
      this.flag = false;
      this.setPosition();
    },
    setValueOnPos: function setValueOnPos(pos, isDrag) {
      var range = this.limit;
      var valueRange = this.valueLimit;
      if (pos >= range[0] && pos <= range[1]) {
        this.setTransform(pos);
        var v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + this.minimum * this.multiple) / this.multiple;
        this.setCurrentValue(v, isDrag);
      } else if (pos < range[0]) {
        this.setTransform(range[0]);
        this.setCurrentValue(valueRange[0]);
        if (this.currentSlider === 1) this.currentSlider = 0;
      } else {
        this.setTransform(range[1]);
        this.setCurrentValue(valueRange[1]);
        if (this.currentSlider === 0) this.currentSlider = 1;
      }
    },
    isDiff: function isDiff(a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true;
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some(function (v, i) {
          return v !== b[i];
        });
      }
      return a !== b;
    },
    setCurrentValue: function setCurrentValue(val, bool) {
      if (val < this.minimum || val > this.maximum) return false;
      if (this.isDiff(this.currentValue, val)) {
        this.currentValue = val;
        if (!this.lazy || !this.flag) {
          this.syncValue();
        }
      }
      bool || this.setPosition();
    },
    setIndex: function setIndex(val) {
      val = this.spacing * val + this.minimum;
      this.setCurrentValue(val);
    },
    setValue: function setValue(val, speed) {
      var _this2 = this;

      if (this.flag) {
        return;
      }
      if (this.isDiff(this.val, val)) {
        var resetVal = this.limitValue(val);
        this.val = resetVal;
      }
      this.$nextTick(function () {
        return _this2.setPosition(speed);
      });
    },
    setPosition: function setPosition(speed) {
      if (this.flag) {
        return;
      }
      this.setTransitionTime(speed === undefined ? this.speed : speed);
      this.setTransform(this.position);
    },
    setTransform: function setTransform(val) {
      var toolTipX = val - (this.$refs.tooltip.scrollWidth - 2) / 2;
      var translateToolTip = 'translateX(' + toolTipX + 'px)';
      this.$refs.tooltip.style.transform = translateToolTip;
      this.$refs.tooltip.style.WebkitTransform = translateToolTip;
      this.$refs.tooltip.style.msTransform = translateToolTip;

      var beanX = val - (this.$refs.bean.scrollWidth - 2) / 2;
      var translateBean = 'translateX(' + beanX + 'px)';
      this.$refs.bean.style.transform = translateBean;
      this.$refs.bean.style.WebkitTransform = translateBean;
      this.$refs.bean.style.msTransform = translateBean;

      this.$refs.process.style.width = val + 'px';
      this.$refs.process.style['left'] = 0;
    },
    setTransitionTime: function setTransitionTime(time) {
      this.$refs.tooltip.style.transitionDuration = time + 's';
      this.$refs.tooltip.style.WebkitTransitionDuration = time + 's';

      this.$refs.bean.style.transitionDuration = time + 's';
      this.$refs.bean.style.WebkitTransitionDuration = time + 's';

      this.$refs.process.style.transitionDuration = time + 's';
      this.$refs.process.style.WebkitTransitionDuration = time + 's';
    },
    limitValue: function limitValue(val) {
      var _this3 = this;

      if (this.data) {
        return val;
      }
      var inRange = function inRange(v) {
        if (v < _this3.min) {
          _this3.printError('[VueSlideBar warn]: The value of the slider is ' + val + ', the minimum value is ' + _this3.min + ', the value of this slider can not be less than the minimum value');
          return _this3.min;
        } else if (v > _this3.max) {
          _this3.printError('[VueSlideBar warn]: The value of the slider is ' + val + ', the maximum value is ' + _this3.max + ', the value of this slider can not be greater than the maximum value');
          return _this3.max;
        }
        return v;
      };
      return inRange(val);
    },
    syncValue: function syncValue() {
      var val = this.val;
      if (this.range) {
        this.$emit('callbackRange', this.range[this.currentIndex]);
      }
      this.$emit('input', val);
    },
    getValue: function getValue() {
      return this.val;
    },
    getIndex: function getIndex() {
      return this.currentIndex;
    },
    getStaticData: function getStaticData() {
      if (this.$refs.elem) {
        this.size = this.$refs.elem.offsetWidth;
        this.offset = this.$refs.elem.getBoundingClientRect().left;
      }
    },
    refresh: function refresh() {
      if (this.$refs.elem) {
        this.getStaticData();
        this.setPosition();
      }
    },
    printError: function printError(msg) {
      console.error(msg);
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueSimpleSlideBarPlugin", function() { return VueSimpleSlideBarPlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_index__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VueSimpleSlideBar", function() { return __WEBPACK_IMPORTED_MODULE_0__src_js_index__["a"]; });


var VueSimpleSlideBarPlugin = {
  install: function install(Vue) {
    Vue.component('VueSimpleSlideBar', __WEBPACK_IMPORTED_MODULE_0__src_js_index__["a" /* VueSimpleSlideBar */]);
  }
};



if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(__WEBPACK_IMPORTED_MODULE_0__src_js_index__["a" /* VueSimpleSlideBar */]);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vue_simple_slide_bar__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_vue_simple_slide_bar__["a"]; });




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_simple_slide_bar_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_319b3fa2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_simple_slide_bar_vue__ = __webpack_require__(8);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(4)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-319b3fa2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_simple_slide_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_319b3fa2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_simple_slide_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/vue-simple-slide-bar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-319b3fa2", Component.options)
  } else {
    hotAPI.reload("data-v-319b3fa2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "wrap",
      staticClass:
        "vue-simple-slide-bar-component vue-simple-slide-bar-horizontal",
      style: _vm.innerWrapStyles,
      on: { click: _vm.wrapClick }
    },
    [
      _c(
        "div",
        {
          ref: "elem",
          staticClass: "vue-simple-slide-bar",
          style: _vm.trackStyles
        },
        [
          _c("div", {
            ref: "process",
            staticClass: "vue-simple-slide-bar-process",
            style: _vm.processStyles
          }),
          _vm._v(" "),
          [
            _c(
              "div",
              {
                ref: "tooltip",
                staticClass:
                  "vue-simple-slide-bar-always vue-simple-slide-bar-tooltip-container",
                style: { width: _vm.iconWidth + "px" },
                on: { mousedown: _vm.moveStart, touchstart: _vm.moveStart }
              },
              [
                _vm.showTooltip
                  ? _c(
                      "span",
                      {
                        staticClass:
                          "vue-simple-slide-bar-tooltip-top vue-simple-slide-bar-tooltip-wrap"
                      },
                      [
                        _vm._t("tooltip", [
                          _c(
                            "span",
                            {
                              staticClass: "vue-simple-slide-bar-tooltip",
                              style: _vm.tooltipStyles
                            },
                            [_vm._v(_vm._s(_vm.val))]
                          )
                        ])
                      ],
                      2
                    )
                  : _vm._e()
              ]
            )
          ],
          _vm._v(" "),
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showBean,
                expression: "showBean"
              }
            ],
            ref: "bean",
            staticClass: "vue-simple-slide-bar-bean",
            style: _vm.beanStyles,
            on: { mousedown: _vm.moveStart, touchstart: _vm.moveStart }
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.range
        ? _c(
            "div",
            { staticClass: "vue-simple-slide-bar-range" },
            _vm._l(_vm.range, function(r, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "vue-simple-slide-bar-separate",
                  style: _vm.dataLabelStyles
                },
                [
                  !r.isHide
                    ? _c(
                        "span",
                        { staticClass: "vue-simple-slide-bar-separate-text" },
                        [_vm._v("\n        " + _vm._s(r.label) + "\n      ")]
                      )
                    : _vm._e()
                ]
              )
            }),
            0
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-319b3fa2", esExports)
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-simple-slide-bar.js.map