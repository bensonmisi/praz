(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/notices.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/notices.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      notices: [],
      types: [],
      filter: '',
      color: '',
      message: '',
      type: ''
    };
  },
  computed: {
    filterNotices: function filterNotices() {
      var _this = this;

      var filter = this.filter;
      console.log(this.type);

      if (filter) {
        return this.notices.filter(function (notice) {
          return notice.description.toUpperCase().indexOf(filter.toUpperCase()) > -1 || notice.ptype_id == _this.type;
        });
      } else {
        return this.notices;
      }
    },
    typelist: function typelist() {
      var array = [];
      this.types.forEach(function (value, index) {
        array.push({
          'id': value.id,
          'name': value.name
        });
      });
      return array;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/notices.vue?vue&type=template&id=30897a3e&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/notices.vue?vue&type=template&id=30897a3e& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { sm: "8" } },
                    [
                      _c("v-text-field", {
                        attrs: { outlined: "", label: "Search for notice" },
                        model: {
                          value: _vm.filter,
                          callback: function($$v) {
                            _vm.filter = $$v
                          },
                          expression: "filter"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { sm: "4" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.typelist,
                          "item-text": "name",
                          "item-value": "id",
                          label: "Filter By Type",
                          outlined: ""
                        },
                        model: {
                          value: _vm.type,
                          callback: function($$v) {
                            _vm.type = $$v
                          },
                          expression: "type"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _vm.notices.length > 0
              ? _c(
                  "div",
                  [
                    _c(
                      "v-row",
                      {
                        staticClass:
                          "black lighten-2 white--text pt-2 pb-2 hidden-sm-and-down"
                      },
                      [
                        _c("v-col", { attrs: { cols: "12", sm: "4" } }, [
                          _c("div", [_vm._v("Entity")])
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "12", sm: "4" } }, [
                          _c("div", [_vm._v("Products/Services")])
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "12", sm: "2" } }, [
                          _c("div", { staticClass: "text-center" }, [
                            _vm._v("Closing Date")
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.filterNotices, function(notice) {
                      return _c(
                        "div",
                        { key: notice.id },
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "12", sm: "4" } }, [
                                _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "black--text font-weight-bold"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(notice.company.name) +
                                          "(" +
                                          _vm._s(notice.tendernumber) +
                                          ")"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "blue--text font-weight-bold"
                                    },
                                    [_vm._v(_vm._s(notice.type.name))]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", sm: "4" } }, [
                                notice.products.length > 0
                                  ? _c(
                                      "div",
                                      _vm._l(notice.products, function(
                                        product
                                      ) {
                                        return _c("div", { key: product.id }, [
                                          _c("div", [
                                            _vm._v(
                                              _vm._s(product.name) +
                                                "(" +
                                                _vm._s(product.quantity) +
                                                ")"
                                            )
                                          ])
                                        ])
                                      }),
                                      0
                                    )
                                  : _c("div", { staticClass: "red--text" }, [
                                      _vm._v(
                                        "\n                               No products found\n                           "
                                      )
                                    ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { cols: "12", sm: "2" } }, [
                                _c("div", { staticClass: "text-center" }, [
                                  _c("div", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("formatDate")(notice.close_date)
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: "",
                                            outlined: "",
                                            color: "primary"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.shownotice(notice)
                                            }
                                          }
                                        },
                                        [_vm._v("View Details")]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider")
                        ],
                        1
                      )
                    })
                  ],
                  2
                )
              : _c(
                  "div",
                  { staticClass: "text-center red--text pa-10 headline" },
                  [
                    _vm._v(
                      "\n                       No Procurement notices uploaded as yet\n              "
                    )
                  ]
                )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            "hide-overlay": "",
            persistent: "",
            width: "300",
            height: "50"
          },
          model: {
            value: _vm.loading,
            callback: function($$v) {
              _vm.loading = $$v
            },
            expression: "loading"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { color: "primary", dark: "" } },
            [
              _c(
                "v-card-text",
                [
                  _vm._v(
                    "\n                Please wait ....\n                "
                  ),
                  _c("v-progress-linear", {
                    staticClass: "mb-0",
                    attrs: { indeterminate: "", color: "white" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { timeout: "3000", color: _vm.color, top: "", right: "" },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.message) + "         \n        ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/notices.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/pages/notices.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notices_vue_vue_type_template_id_30897a3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notices.vue?vue&type=template&id=30897a3e& */ "./resources/js/views/pages/notices.vue?vue&type=template&id=30897a3e&");
/* harmony import */ var _notices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notices.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/notices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notices_vue_vue_type_template_id_30897a3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notices_vue_vue_type_template_id_30897a3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/notices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/notices.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/pages/notices.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./notices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/notices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/notices.vue?vue&type=template&id=30897a3e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/notices.vue?vue&type=template&id=30897a3e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notices_vue_vue_type_template_id_30897a3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./notices.vue?vue&type=template&id=30897a3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/notices.vue?vue&type=template&id=30897a3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notices_vue_vue_type_template_id_30897a3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notices_vue_vue_type_template_id_30897a3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);