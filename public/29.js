(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/documents.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/documents.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.vue */ "./resources/js/components/user/upload.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      documents: [],
      loading: false,
      message: '',
      snackbar: false,
      color: '',
      tutorialDialog: false,
      e1: 1,
      step1: this.$store.state.serverUrl + 'wizard/step1.jpg',
      step2: this.$store.state.serverUrl + 'wizard/step2.jpg'
    };
  },
  components: {
    uplodaDocument: _upload_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    checkDocuments: function checkDocuments() {
      var uploaded = 0;
      this.getDocuments.forEach(function (value, index) {
        if (value.uploaded) {
          uploaded++;
        }
      });

      if (this.getDocuments.length == 0) {
        this.$router.push({
          name: 'Dashboard'
        });
      } else {
        if (this.getDocuments.length == uploaded) {
          this.$router.push({
            name: 'Registration_invoicing'
          });
        }
      }

      if (localStorage.getItem('document_tutorial') == null && !localStorage.getItem('document_tutorial')) {
        this.tutorialDialog = true;
      }
    },
    completeTutorial: function completeTutorial() {
      localStorage.setItem('document_tutorial', true);
      this.tutorialDialog = false;
    }
  },
  mounted: function mounted() {
    this.checkDocuments();
  },
  computed: {
    getDocuments: function getDocuments() {
      return this.$store.state.companydocuments;
    },
    computeDocuments: function computeDocuments() {
      var uploaded = 0;
      var documents = this.$store.state.companydocuments;
      documents.forEach(function (value, index) {
        if (value.uploaded) {
          uploaded++;
        }
      });
      return documents.length - uploaded;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/registration/documents.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/registration/documents.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_user_documents_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/user/documents.vue */ "./resources/js/components/user/documents.vue");
//
//
//
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
      items: [{
        text: 'Dashboard',
        disabled: false,
        href: '/Bidders-Dashboard/'
      }, {
        text: 'Documents Upload',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }]
    };
  },
  components: {
    documents: _components_user_documents_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/documents.vue?vue&type=template&id=b5425302&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/documents.vue?vue&type=template&id=b5425302& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pa-5" },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "blue lighten-4" },
            [
              _c("div", [_vm._v("Required Company Documents")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("div", { staticClass: "red--text" }, [
                _vm._v("Outstanding  " + _vm._s(_vm.computeDocuments))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-list",
                { attrs: { "two-line": "" } },
                _vm._l(_vm.getDocuments, function(document) {
                  return _c(
                    "div",
                    { key: document.id },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-content",
                            [
                              document
                                ? _c("v-list-item-title", [
                                    _vm._v(_vm._s(document.name))
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                document.uploaded
                                  ? _c("div", { staticClass: "green--text" }, [
                                      _vm._v("Uploaded")
                                    ])
                                  : _c("div", { staticClass: "red--text" }, [
                                      _vm._v("Pending")
                                    ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c("uplodaDocument", {
                                attrs: { document: document },
                                on: { refreshDashboard: _vm.checkDocuments }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider")
                    ],
                    1
                  )
                }),
                0
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
          attrs: { persistent: "", "overlay-color": "grey", width: "800" },
          model: {
            value: _vm.tutorialDialog,
            callback: function($$v) {
              _vm.tutorialDialog = $$v
            },
            expression: "tutorialDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Document upload quick tutorial")]),
              _vm._v(" "),
              _c("v-img", { attrs: { src: _vm.step1 } }),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", [
                  _vm._v(
                    "In order to register as a supplier please upload the required company documents."
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v("1 This shows the  number of  outstanding documents")
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "2 This shows the  status of required document if pending it means it hasn't been upload"
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "3  This is  the button to upload  the required documents   "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "red--text" }, [
                  _vm._v("\n         Please note\n         "),
                  _c("ul", [
                    _c("li", [
                      _vm._v("Our system only accepts PDF file formate ")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v("Your documents  should not exceed 5 mb ")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "For all voluminous  documents we require the first 5 pages "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "Our team will only be able to review your documents once you have completed the registration process"
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: { click: _vm.completeTutorial }
                    },
                    [_vm._v("\n      i have understood\n     ")]
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
          attrs: { "hide-overlay": "", persistent: "", width: "300" },
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
            { attrs: { height: "200" } },
            [
              _c("v-card-text", { staticClass: "text-center pa-20" }, [
                _c("div", { staticClass: "mt-10" }, [
                  _vm._v(
                    "\n                 Please wait ....\n                     "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-5" },
                  [
                    _c("v-progress-circular", {
                      attrs: {
                        size: 70,
                        width: 7,
                        color: "purple",
                        indeterminate: ""
                      }
                    })
                  ],
                  1
                )
              ])
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
          attrs: { timeout: "3000", color: _vm.color, top: "" },
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
            "\n             " + _vm._s(_vm.message) + "         \n             "
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/registration/documents.vue?vue&type=template&id=7b3ee277&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/registration/documents.vue?vue&type=template&id=7b3ee277& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-breadcrumbs", { attrs: { items: _vm.items, large: "" } }),
      _vm._v(" "),
      _c("documents")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/documents.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/user/documents.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _documents_vue_vue_type_template_id_b5425302___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents.vue?vue&type=template&id=b5425302& */ "./resources/js/components/user/documents.vue?vue&type=template&id=b5425302&");
/* harmony import */ var _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents.vue?vue&type=script&lang=js& */ "./resources/js/components/user/documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _documents_vue_vue_type_template_id_b5425302___WEBPACK_IMPORTED_MODULE_0__["render"],
  _documents_vue_vue_type_template_id_b5425302___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_8__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemTitle"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_10__["VProgressCircular"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/documents.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/user/documents.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/documents.vue?vue&type=template&id=b5425302&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/documents.vue?vue&type=template&id=b5425302& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_b5425302___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=template&id=b5425302& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/documents.vue?vue&type=template&id=b5425302&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_b5425302___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_b5425302___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/user/registration/documents.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/user/registration/documents.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _documents_vue_vue_type_template_id_7b3ee277___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents.vue?vue&type=template&id=7b3ee277& */ "./resources/js/views/user/registration/documents.vue?vue&type=template&id=7b3ee277&");
/* harmony import */ var _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents.vue?vue&type=script&lang=js& */ "./resources/js/views/user/registration/documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _documents_vue_vue_type_template_id_7b3ee277___WEBPACK_IMPORTED_MODULE_0__["render"],
  _documents_vue_vue_type_template_id_7b3ee277___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBreadcrumbs: vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__["VBreadcrumbs"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/registration/documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/registration/documents.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/user/registration/documents.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/registration/documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/registration/documents.vue?vue&type=template&id=7b3ee277&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/user/registration/documents.vue?vue&type=template&id=7b3ee277& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_7b3ee277___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=template&id=7b3ee277& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/registration/documents.vue?vue&type=template&id=7b3ee277&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_7b3ee277___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_7b3ee277___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);