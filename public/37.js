(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/bidders.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/bidders.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/welcome */ "./resources/js/services/welcome.js");
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
      categories: [],
      loading: true,
      snackbar: true,
      message: '',
      color: '',
      filter: '',
      items: [{
        text: 'Home',
        disabled: false,
        href: '/'
      }, {
        text: 'Current Registered Suppliers',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }]
    };
  },
  methods: {
    getBidders: function getBidders() {
      var _this = this;

      this.loading = true;
      _services_welcome__WEBPACK_IMPORTED_MODULE_0__["getSuppliers"]().then(function (response) {
        _this.loading = false;
        _this.categories = response.data.data;
      })["catch"](function (error) {
        _this.loading = false;
        _this.message = error.response.data.message;
        _this.snackbar = true;
        _this.color = "red";
      });
    }
  },
  mounted: function mounted() {
    this.getBidders();
  },
  computed: {
    filterCategories: function filterCategories() {
      var _this2 = this;

      var categorylist = this.categories;

      if (this.filter != '') {
        return categorylist.filter(function (category) {
          return !category.name.toUpperCase().indexOf(_this2.filter.toUpperCase()) || !category.code.toUpperCase().indexOf(_this2.filter.toUpperCase());
        });
      } else {
        return categorylist;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/bidders.vue?vue&type=template&id=6798e145&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/bidders.vue?vue&type=template&id=6798e145& ***!
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
      _c("v-breadcrumbs", { attrs: { items: _vm.items, large: "" } }),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c("v-card-title", [
            _vm._v(
              "               \n         Current Registered Suppliers\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "div",
                [
                  _c("v-text-field", {
                    attrs: { outlined: "", label: "Search for Category" },
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
                "v-expansion-panels",
                _vm._l(_vm.filterCategories, function(cat) {
                  return _c(
                    "v-expansion-panel",
                    { key: cat.id },
                    [
                      _c("v-expansion-panel-header", [
                        _c(
                          "div",
                          [
                            _vm._v(
                              _vm._s(cat.name) + "(" + _vm._s(cat.code) + ") "
                            ),
                            _c("v-chip", [_vm._v(_vm._s(cat.suppliers.length))])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        [
                          _c("v-simple-table", [
                            _c("thead", [
                              _c("tr", [
                                _c("th", [_vm._v("Name")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("City")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Address")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Emails")]),
                                _vm._v(" "),
                                _c("th", [_vm._v("Phone numbers")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                cat.suppliers.length
                                  ? _vm._l(cat.suppliers, function(comp) {
                                      return _c("tr", { key: comp.id }, [
                                        _c("td", [
                                          _vm._v(_vm._s(comp.company.name))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(comp.company.city))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            comp.company.contacts
                                              ? [
                                                  _vm._v(
                                                    "\n                                     " +
                                                      _vm._s(
                                                        comp.company.contacts
                                                          .address
                                                      ) +
                                                      "\n                                "
                                                  )
                                                ]
                                              : _vm._e()
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            comp.company.contacts
                                              ? [
                                                  _vm._v(
                                                    "\n                                " +
                                                      _vm._s(
                                                        comp.company.contacts
                                                          .emails
                                                      ) +
                                                      "\n                                 "
                                                  )
                                                ]
                                              : _vm._e()
                                          ],
                                          2
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            comp.company.contacts
                                              ? [
                                                  _vm._v(
                                                    "\n                                " +
                                                      _vm._s(
                                                        comp.company.contacts
                                                          .phones
                                                      ) +
                                                      "\n                                 "
                                                  )
                                                ]
                                              : _vm._e()
                                          ],
                                          2
                                        )
                                      ])
                                    })
                                  : [
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass: "text-center red-text",
                                            attrs: { colspan: "5" }
                                          },
                                          [
                                            _vm._v(
                                              " No registered suppliers found"
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                              ],
                              2
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
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
        [
          _vm._v(
            "\n            " + _vm._s(_vm.message) + "         \n            "
          )
        ]
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/views/pages/bidders.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/pages/bidders.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bidders_vue_vue_type_template_id_6798e145___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bidders.vue?vue&type=template&id=6798e145& */ "./resources/js/views/pages/bidders.vue?vue&type=template&id=6798e145&");
/* harmony import */ var _bidders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bidders.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/bidders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bidders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bidders_vue_vue_type_template_id_6798e145___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bidders_vue_vue_type_template_id_6798e145___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBreadcrumbs: vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__["VBreadcrumbs"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VExpansionPanel: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__["VExpansionPanel"],VExpansionPanelContent: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__["VExpansionPanelContent"],VExpansionPanelHeader: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__["VExpansionPanelHeader"],VExpansionPanels: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__["VExpansionPanels"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__["VProgressLinear"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_11__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/bidders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/bidders.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/pages/bidders.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bidders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./bidders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/bidders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bidders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/bidders.vue?vue&type=template&id=6798e145&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/bidders.vue?vue&type=template&id=6798e145& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bidders_vue_vue_type_template_id_6798e145___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./bidders.vue?vue&type=template&id=6798e145& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/bidders.vue?vue&type=template&id=6798e145&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bidders_vue_vue_type_template_id_6798e145___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bidders_vue_vue_type_template_id_6798e145___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);