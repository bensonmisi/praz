(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/verification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/verification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/welcome */ "./resources/js/services/welcome.js");
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
      search: '',
      searchRule: [function (v) {
        return !!v || 'Search Query Required';
      }],
      loading: false,
      snackbar: false,
      message: '',
      color: '',
      results: [],
      valid: true
    };
  },
  methods: {
    searchCertificate: function searchCertificate() {
      var _this = this;

      if (this.$refs.form.validate()) {
        var formdata = new FormData();
        formdata.append('search', this.search);
        this.loading = true;
        _services_welcome__WEBPACK_IMPORTED_MODULE_0__["searchCertificate"](formdata).then(function (response) {
          _this.loading = false;
          _this.results = response.data.data;
        })["catch"](function (error) {
          _this.loading = false;
          _this.snackbar = true;
          _this.color = 'red';
          _this.message = error.response.data.message;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/verification.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/verification.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_verification_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/verification.vue */ "./resources/js/components/verification.vue");
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
  components: {
    verification: _components_verification_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      items: [{
        text: 'Home',
        disabled: false,
        href: '/'
      }, {
        text: 'Cerificate verification',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/verification.vue?vue&type=template&id=7952ff34&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/verification.vue?vue&type=template&id=7952ff34& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "8", "offset-sm": "2" } },
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  model: {
                    value: _vm.valid,
                    callback: function($$v) {
                      _vm.valid = $$v
                    },
                    expression: "valid"
                  }
                },
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
                                { attrs: { sm: "10" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      rules: _vm.searchRule,
                                      label: "Certificate Number"
                                    },
                                    model: {
                                      value: _vm.search,
                                      callback: function($$v) {
                                        _vm.search = $$v
                                      },
                                      expression: "search"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { sm: "2" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-2",
                                      attrs: {
                                        color: "primary",
                                        "x-large": ""
                                      },
                                      on: { click: _vm.searchCertificate }
                                    },
                                    [_vm._v("Search")]
                                  )
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
                        "v-card-text",
                        [
                          _vm.results.length
                            ? [
                                _c("v-simple-table", [
                                  _c("tbody", [
                                    _c("tr", [
                                      _c("th", [_vm._v("Company")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].company))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("regnumber")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].regnumber))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("Code")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].code))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("Name")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].name))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("address")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].address))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("emails")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].emails))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("phones")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].phones))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("city")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].city))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("country")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].country))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("th", [_vm._v("date")]),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.results[0].date))
                                      ])
                                    ])
                                  ])
                                ])
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ],
                    1
                  )
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
          attrs: { timeout: "2000", color: _vm.color, top: "" },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.message) + "         \n   ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/verification.vue?vue&type=template&id=178c7ec5&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/verification.vue?vue&type=template&id=178c7ec5& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "8", "offset-sm": "2" } },
            [
              _c("v-breadcrumbs", { attrs: { items: _vm.items, large: "" } }),
              _vm._v(" "),
              _c("h1", [_vm._v("Certificate Verification")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("verification")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/verification.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/verification.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verification_vue_vue_type_template_id_7952ff34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.vue?vue&type=template&id=7952ff34& */ "./resources/js/components/verification.vue?vue&type=template&id=7952ff34&");
/* harmony import */ var _verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.vue?vue&type=script&lang=js& */ "./resources/js/components/verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verification_vue_vue_type_template_id_7952ff34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _verification_vue_vue_type_template_id_7952ff34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/verification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/verification.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/verification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--11!../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/verification.vue?vue&type=template&id=7952ff34&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/verification.vue?vue&type=template&id=7952ff34& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_7952ff34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=template&id=7952ff34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/verification.vue?vue&type=template&id=7952ff34&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_7952ff34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_7952ff34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/welcome.js":
/*!******************************************!*\
  !*** ./resources/js/services/welcome.js ***!
  \******************************************/
/*! exports provided: getSuppliers, getAwards, getNotices, getWelcome, searchCertificate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuppliers", function() { return getSuppliers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAwards", function() { return getAwards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotices", function() { return getNotices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWelcome", function() { return getWelcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCertificate", function() { return searchCertificate; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getSuppliers() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('suppliers');
}
function getAwards() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('awards');
}
function getNotices() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('notices');
}
function getWelcome() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('welcome');
}
function searchCertificate(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('verification', data);
}

/***/ }),

/***/ "./resources/js/views/pages/verification.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/pages/verification.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verification_vue_vue_type_template_id_178c7ec5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.vue?vue&type=template&id=178c7ec5& */ "./resources/js/views/pages/verification.vue?vue&type=template&id=178c7ec5&");
/* harmony import */ var _verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verification_vue_vue_type_template_id_178c7ec5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _verification_vue_vue_type_template_id_178c7ec5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBreadcrumbs: vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__["VBreadcrumbs"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/verification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/verification.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/pages/verification.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/verification.vue?vue&type=template&id=178c7ec5&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/verification.vue?vue&type=template&id=178c7ec5& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_178c7ec5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=template&id=178c7ec5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/verification.vue?vue&type=template&id=178c7ec5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_178c7ec5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_178c7ec5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);