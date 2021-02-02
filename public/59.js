(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/documents.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/documents.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_user_upload_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/user/upload.vue */ "./resources/js/components/user/upload.vue");
/* harmony import */ var _services_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/registration_service */ "./resources/js/services/registration_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      color: ''
    };
  },
  components: {
    uplodaDocument: _components_user_upload_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    fetchDocuments: function fetchDocuments() {
      var _this = this;

      this.loading = true;
      _services_registration_service__WEBPACK_IMPORTED_MODULE_1__["getCompanyDocuments"]().then(function (response) {
        _this.loading = false;

        _this.$store.dispatch('setCompanyDocuments', response.data.data);
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    }
  },
  mounted: function mounted() {
    this.fetchDocuments();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/documents.vue?vue&type=template&id=7582239a&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/documents.vue?vue&type=template&id=7582239a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
                    "\n                Please wait ....\n                    "
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
            "\n            " + _vm._s(_vm.message) + "         \n            "
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

/***/ "./resources/js/services/registration_service.js":
/*!*******************************************************!*\
  !*** ./resources/js/services/registration_service.js ***!
  \*******************************************************/
/*! exports provided: getCompanyDocuments, uploadCompanyDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompanyDocuments", function() { return getCompanyDocuments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadCompanyDocument", function() { return uploadCompanyDocument; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getCompanyDocuments() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/registration_documents');
}
function uploadCompanyDocument(form_data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/registration_document_upload', form_data);
}

/***/ }),

/***/ "./resources/js/views/user/documents.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/user/documents.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _documents_vue_vue_type_template_id_7582239a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents.vue?vue&type=template&id=7582239a& */ "./resources/js/views/user/documents.vue?vue&type=template&id=7582239a&");
/* harmony import */ var _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents.vue?vue&type=script&lang=js& */ "./resources/js/views/user/documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _documents_vue_vue_type_template_id_7582239a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _documents_vue_vue_type_template_id_7582239a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemTitle"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__["VProgressCircular"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/documents.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/user/documents.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/documents.vue?vue&type=template&id=7582239a&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/user/documents.vue?vue&type=template&id=7582239a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_7582239a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./documents.vue?vue&type=template&id=7582239a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/documents.vue?vue&type=template&id=7582239a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_7582239a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_documents_vue_vue_type_template_id_7582239a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);