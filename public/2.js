(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/upload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/upload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dashboard_service */ "./resources/js/services/dashboard_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['document'],
  name: 'upload',
  data: function data() {
    return {
      dialog: false,
      valid: true,
      loading: false,
      snackbar: false,
      color: '',
      message: '',
      fileRule: [function (v) {
        return !v || v.size < 5000000 || 'File size should be less than 5 MB!';
      }, function (v) {
        return !!v || 'File is required is required';
      }],
      fileupload: null
    };
  },
  methods: {
    uploadFile: function uploadFile() {
      var _this = this;

      if (this.$refs.form.validate()) {
        var formData = new FormData();
        formData.append('filename', this.fileupload);
        formData.append('document', this.document.id);
        this.loading = true;
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["uploadDocument"](formData).then(function (response) {
          _this.loading = false;
          _this.dialog = false;
          _this.snackbar = true, _this.color = 'green', _this.message = 'Successfully Updated ' + _this.document.name;

          _this.$store.dispatch('setCompanyDocuments', response.data.data);

          _this.$emit('refreshDashboard');
        })["catch"](function (error) {
          _this.loading = false;
          _this.snackbar = true;
          _this.color = "red";
          _this.message = error.response.data.message;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.document.uploaded
        ? _c(
            "div",
            [
              _vm.document.status == "PENDING"
                ? _c(
                    "v-btn",
                    {
                      staticClass: "blue white--text",
                      attrs: { rounded: "", outlined: "", depressed: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                                    Edit\r\n                            "
                      )
                    ]
                  )
                : _c("div", { staticClass: "green--text" }, [
                    _vm._v("Approved")
                  ])
            ],
            1
          )
        : _c(
            "div",
            [
              _c(
                "v-btn",
                {
                  staticClass: "green white--text",
                  attrs: { rounded: "", outlined: "", depressed: "" },
                  on: {
                    click: function($event) {
                      _vm.dialog = true
                    }
                  }
                },
                [
                  _vm._v(
                    "\r\n                        Upload\r\n                     "
                  )
                ]
              )
            ],
            1
          ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
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
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v(_vm._s(_vm.document.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c("v-file-input", {
                            attrs: {
                              "show-size": "",
                              counter: "",
                              outlined: "",
                              label: "File input",
                              "prepend-icon": "mdi-pdf-box",
                              accept: ".pdf",
                              rules: _vm.fileRule
                            },
                            model: {
                              value: _vm.fileupload,
                              callback: function($$v) {
                                _vm.fileupload = $$v
                              },
                              expression: "fileupload"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "red white--text",
                          attrs: { rounded: "", outlined: "" }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "green white--text",
                          attrs: { rounded: "", outlined: "" },
                          on: { click: _vm.uploadFile }
                        },
                        [_vm._v("Upload")]
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
                    "\r\n                    Please wait ....\r\n                    "
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
        [
          _vm._v(
            "\r\n                " +
              _vm._s(_vm.message) +
              "         \r\n                "
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

/***/ "./resources/js/components/user/upload.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/user/upload.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.vue?vue&type=template&id=7c3e914a& */ "./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a&");
/* harmony import */ var _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.vue?vue&type=script&lang=js& */ "./resources/js/components/user/upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_8__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__["VProgressLinear"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/upload.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/user/upload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=template&id=7c3e914a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/dashboard_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/dashboard_service.js ***!
  \****************************************************/
/*! exports provided: getDashboard, uploadDocument, updateProfile, downloadCertificate, claimReceipt, confirmReceipt, verify, updateREF, changeCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboard", function() { return getDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadDocument", function() { return uploadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadCertificate", function() { return downloadCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimReceipt", function() { return claimReceipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmReceipt", function() { return confirmReceipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return verify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateREF", function() { return updateREF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCategory", function() { return changeCategory; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getDashboard() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('dashboard');
}
function uploadDocument(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('uploadDocument', data);
}
function updateProfile(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('updateProfile', data);
}
function downloadCertificate(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('printcertificate/' + id, {
    responseType: 'blob'
  });
}
function claimReceipt(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('claimReceipt', data);
}
function confirmReceipt(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('confirmReceipt', data);
}
function verify(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('verify/' + id);
}
function updateREF(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('updatereference', data);
}
function changeCategory(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('changeCategory', data);
}

/***/ })

}]);