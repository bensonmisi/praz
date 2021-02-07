(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/check.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/check.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/invoicing_service */ "./resources/js/services/invoicing_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false
    };
  },
  mounted: function mounted() {
    this.checkpayments();
  },
  methods: {
    checkpayments: function checkpayments() {
      var _this = this;

      this.loading = true;
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["checkpaynow"]().then(function (response) {
        _this.$router.push({
          name: 'Dashboard'
        });
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/check.vue?vue&type=template&id=0927c203&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/check.vue?vue&type=template&id=0927c203& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/services/invoicing_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/invoicing_service.js ***!
  \****************************************************/
/*! exports provided: getInvoice, addInvoice, removeItem, mobilepayment, confirmPayment, downloadInvoice, getInternalBalance, claimInternalBalance, confirmTransaction, registerInternalBalance, paynowPayments, checkpaynow, processAwaiting, updateReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoice", function() { return getInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInvoice", function() { return addInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobilepayment", function() { return mobilepayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPayment", function() { return confirmPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadInvoice", function() { return downloadInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternalBalance", function() { return getInternalBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimInternalBalance", function() { return claimInternalBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmTransaction", function() { return confirmTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInternalBalance", function() { return registerInternalBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paynowPayments", function() { return paynowPayments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkpaynow", function() { return checkpaynow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processAwaiting", function() { return processAwaiting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReference", function() { return updateReference; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getInvoice() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('invoices');
}
function addInvoice(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('addInvoice', data);
}
function removeItem(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]('removeItem/' + id);
}
function mobilepayment(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('mobilepayment', data);
}
function confirmPayment(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('confirmpayment/' + id);
}
function downloadInvoice(inv) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('printinvoice/' + inv, {
    responseType: 'blob'
  });
}
function getInternalBalance(currency) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('internal/' + currency);
}
function claimInternalBalance(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('internal', data);
}
function confirmTransaction(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('confirmTransaction', data);
}
function registerInternalBalance(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('internalregistration', data);
}
function paynowPayments() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('onlinepayments');
}
function checkpaynow() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('checkonlinepayment');
}
function processAwaiting(formdata) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('processAwaiting', formdata);
}
function updateReference(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('updatereference', data);
}

/***/ }),

/***/ "./resources/js/views/user/check.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/user/check.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_vue_vue_type_template_id_0927c203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.vue?vue&type=template&id=0927c203& */ "./resources/js/views/user/check.vue?vue&type=template&id=0927c203&");
/* harmony import */ var _check_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.vue?vue&type=script&lang=js& */ "./resources/js/views/user/check.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _check_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _check_vue_vue_type_template_id_0927c203___WEBPACK_IMPORTED_MODULE_0__["render"],
  _check_vue_vue_type_template_id_0927c203___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__["VDialog"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_6__["VProgressLinear"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/check.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/check.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/user/check.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./check.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/check.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/check.vue?vue&type=template&id=0927c203&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/user/check.vue?vue&type=template&id=0927c203& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_vue_vue_type_template_id_0927c203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./check.vue?vue&type=template&id=0927c203& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/check.vue?vue&type=template&id=0927c203&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_vue_vue_type_template_id_0927c203___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_vue_vue_type_template_id_0927c203___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);