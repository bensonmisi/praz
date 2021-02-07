(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/document.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tasks/document.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/invoice.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tasks/invoice.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rtgs_service */ "./resources/js/services/rtgs_service.js");
/* harmony import */ var _show_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue */ "./resources/js/components/tasks/show.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['company'],
  components: {
    show: _show_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      invoices: [],
      loading: false,
      snackbar: false,
      message: '',
      color: ''
    };
  },
  methods: {
    getInvoice: function getInvoice() {
      var _this = this;

      this.loading = true;
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["showRtgs"](this.company).then(function (response) {
        _this.loading = false;
        _this.invoices = response.data.data;
        _this.dialog = true;
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.message = error.response.data.message;
        _this.color = "red";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/search.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tasks/search.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rtgs_service */ "./resources/js/services/rtgs_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['invoicenumber'],
  data: function data() {
    return {
      referencenumber: '',
      statement: [],
      showModel: false,
      loading: false,
      snackbar: false,
      color: '',
      message: ''
    };
  },
  methods: {
    retriveStatement: function retriveStatement() {
      var _this = this;

      this.loading = true; //var formData = new FormData();
      //  formData.append('referencenumber',this.referencenumber)

      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["getStatement"](this.referencenumber).then(function (response) {
        _this.loading = false;
        _this.statement = response.data.data;
      })["catch"](function (error) {
        _this.loading = false;
        _this.message = error.response.data.message;
        _this.snackbar = true;
        _this.color = "red";
      });
    },
    submitStatement: function submitStatement(id) {
      var _this2 = this;

      this.loading = true;
      var formData = new FormData();
      formData.append('bank', id);
      formData.append('invoicenumber', this.invoicenumber);
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["submitStatement"](formData).then(function (response) {
        _this2.showModel = false;
        _this2.loading = false;
        _this2.snackbar = true;
        _this2.message = "Transaction successfully approved";
        _this2.color = "green";
        location.reload();
      })["catch"](function (error) {
        _this2.loading = false;
        _this2.message = error.response.data.message;
        _this2.snackbar = true;
        _this2.color = "red";
      });
    },
    reserveRegistration: function reserveRegistration(id) {
      var _this3 = this;

      this.loading = true;
      var formData = new FormData();
      formData.append('id', id);
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["reverse"](formData).then(function (response) {
        _this3.showModel = false;
        _this3.loading = false;
        _this3.snackbar = true;
        _this3.message = "Transaction successfully Rervesed";
        _this3.color = "green";
        location.reload();
      })["catch"](function (error) {
        _this3.loading = false;
        _this3.message = error.response.data.message;
        _this3.snackbar = true;
        _this3.color = "red";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tasks/show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue */ "./resources/js/components/tasks/search.vue");
/* harmony import */ var _services_rtgs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rtgs_service */ "./resources/js/services/rtgs_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['invoice'],
  components: {
    search: _search_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showModel: false,
      loading: false,
      snackbar: false,
      color: "",
      message: "",
      invoices: []
    };
  },
  methods: {
    getInvoice: function getInvoice() {
      var _this = this;

      this.loading = true;
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_1__["retrieveInvoice"](this.invoice.invoice_number).then(function (response) {
        _this.loading = false;
        _this.invoices = response.data.data;
        _this.showModel = true;
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    },
    showPop: function showPop(filename) {
      var url = this.$store.state.serverUrl + filename;
      window.open(url, "_blank");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _services_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin_dashboard_service */ "./resources/js/services/admin_dashboard_service.js");
/* harmony import */ var _components_tasks_invoice_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tasks/invoice.vue */ "./resources/js/components/tasks/invoice.vue");
/* harmony import */ var _components_tasks_document_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tasks/document.vue */ "./resources/js/components/tasks/document.vue");
/* harmony import */ var vue_password_strength_meter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-password-strength-meter */ "./node_modules/vue-password-strength-meter/dist/vue-password-strength-meter.min.js");
/* harmony import */ var vue_password_strength_meter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_password_strength_meter__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Password: vue_password_strength_meter__WEBPACK_IMPORTED_MODULE_4___default.a,
    taskInvoice: _components_tasks_invoice_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    taskDocument: _components_tasks_document_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      role: '',
      name: '',
      snackbar: false,
      loading: false,
      message: '',
      color: '',
      valid: true,
      show1: false,
      show2: false,
      changeModel: false,
      password: '',
      password_confirmation: '',
      tasks: [],
      rules: {
        required: function required(value) {
          return !!value || 'Enter a password';
        },
        min: function min(v) {
          return v.length >= 8 || 'Use 8 characters or more for your password';
        },
        passwordMatch: function passwordMatch(v) {
          return (!!v && v) === _this.password || "The passwords you entered don't match";
        },
        strength: function strength(v) {
          return zxcvbn(v).score >= 3 || 'Please choose a stronger password. Try a mix of letters, numbers, and symbols.';
        }
      }
    };
  },
  mounted: function mounted() {
    this.getProfile();
  },
  methods: {
    getProfile: function getProfile() {
      var _this2 = this;

      this.role = _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["getCompany"]().user.token_scope;
      this.name = _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["getCompany"]().user.user.name + ' ' + _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["getCompany"]().user.user.surname;

      if (this.role !== 'administrator') {
        this.$router.push({
          name: 'welcome'
        });
      } else {
        this.loading = true;
        _services_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["getDashboard"]().then(function (response) {
          _this2.loading = false;
          _this2.tasks = response.data.data.tasks;

          if (response.data.data.status == 'expired') {
            _this2.snackbar = true;
            _this2.color = "red";
            _this2.message = "Your password  has expired please  updated";
            _this2.changeModel = true;
          }
        })["catch"](function (error) {
          _this2.loading = false;
          _this2.snackbar = true;
          _this2.color = "red";
          _this2.message = error.response.data.message;
        });
      }
    },
    changePassword: function changePassword() {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        var formdata = new FormData();
        formdata.append('password', this.password);
        formdata.append('password_confirmation', this.password_confirmation);
        this.loading = true;
        _services_admin_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["changepassword"](formdata).then(function (response) {
          _this3.loading = false;
          _this3.snackbar = true;
          _this3.color = "green";
          _this3.message = "Password Successfully changed";
          _this3.changeModel = false;
        })["catch"](function (error) {
          _this3.loading = false;
          _this3.snackbar = true;
          _this3.color = "red";
          _this3.message = error.response.data.message;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/document.vue?vue&type=template&id=2770e787&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tasks/document.vue?vue&type=template&id=2770e787& ***!
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
    [
      _c(
        "v-btn",
        {
          attrs: { outlined: "", rounded: "" },
          on: {
            click: function($event) {
              _vm.dialog = true
            }
          }
        },
        [_vm._v("OPEN")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
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
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c("v-toolbar-title", [_vm._v("Document Approval")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-text")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/invoice.vue?vue&type=template&id=2b7fb371&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tasks/invoice.vue?vue&type=template&id=2b7fb371& ***!
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
        "v-btn",
        { attrs: { outlined: "", rounded: "" }, on: { click: _vm.getInvoice } },
        [_vm._v("OPEN")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
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
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c("v-toolbar-title", [_vm._v("Invoice Approval")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
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
                  _c("v-simple-table", [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Invoice Number")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Year")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Currency")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Total Due")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Total Paid")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.invoices, function(invoice) {
                        return _c("tr", { key: invoice.invoie_number }, [
                          _c("td", [_vm._v(_vm._s(invoice.invoice_number))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(invoice.year))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(invoice.currency))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(invoice.cost))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(invoice.paid))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [_c("show", { attrs: { invoice: invoice } })],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/search.vue?vue&type=template&id=b1cc9ad8&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tasks/search.vue?vue&type=template&id=b1cc9ad8& ***!
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
        "v-btn",
        {
          attrs: { icon: "", color: "green" },
          on: {
            click: function($event) {
              _vm.showModel = true
            }
          }
        },
        [_c("v-icon", [_vm._v("fa fa-search")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "700" },
          model: {
            value: _vm.showModel,
            callback: function($$v) {
              _vm.showModel = $$v
            },
            expression: "showModel"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("v-text-field", {
                    attrs: { outlined: "", label: "Search for transfer" },
                    on: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.retriveStatement($event)
                      }
                    },
                    model: {
                      value: _vm.referencenumber,
                      callback: function($$v) {
                        _vm.referencenumber = $$v
                      },
                      expression: "referencenumber"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-simple-table", [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("transaction Details")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Claimee ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm.statement.length > 0
                          ? _vm._l(_vm.statement, function(state) {
                              return _c("tr", { key: state.id }, [
                                _c("td", [
                                  _c("div", [
                                    _vm._v(_vm._s(state.description))
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [
                                    _vm._v(_vm._s(state.source_reference))
                                  ]),
                                  _vm._v(" "),
                                  _c("div", [
                                    _vm._v(
                                      _vm._s(state.currency) +
                                        _vm._s(state.amount)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("div", [_vm._v(_vm._s(state.regnumber))]),
                                  _vm._v(" "),
                                  _c("div", [_vm._v(_vm._s(state.company))])
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(state.status) +
                                      "\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    state.status == "PENDING"
                                      ? [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                outlined: "",
                                                rounded: "",
                                                color: "primary"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.submitStatement(
                                                    state.id
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("USE")]
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
                                    staticClass: "text-center red--text pa-10",
                                    attrs: { colspan: "4" }
                                  },
                                  [_vm._v(" No transfers found as yet")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/show.vue?vue&type=template&id=113ffa69&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tasks/show.vue?vue&type=template&id=113ffa69& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
        "v-btn",
        {
          attrs: { rounded: "", outlined: "", color: "green" },
          on: { click: _vm.getInvoice }
        },
        [_vm._v("View")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "1200" },
          model: {
            value: _vm.showModel,
            callback: function($$v) {
              _vm.showModel = $$v
            },
            expression: "showModel"
          }
        },
        [
          _vm.invoices.length > 0
            ? [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-card-title",
                      [
                        _c("div", [_vm._v("Invoice Details")]),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex" },
                          [
                            _c("search", {
                              attrs: {
                                invoicenumber: _vm.invoices[0].invoice_number
                              },
                              on: { reload: _vm.getInvoice }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "" },
                                on: {
                                  click: function($event) {
                                    _vm.showModel = false
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("fa fa-times")])],
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
                        _c("v-simple-table", [
                          _c("thead", [
                            _c("tr", [
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                                Invoice number\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                                Category\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                                Year\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                                Cost\n                                "
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.invoices, function(inv) {
                              return _c("tr", { key: inv.invoice_number }, [
                                _c("td", [_vm._v(_vm._s(inv.invoice_number))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(inv.category.code))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(inv.year))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(inv.cost))])
                              ])
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "title mt-5 ml-1" }, [
                          _c("b", [_vm._v("Payments")])
                        ]),
                        _vm._v(" "),
                        _c("v-simple-table", [
                          _c("thead"),
                          _c("thead", [
                            _c("tr", [
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                                Receipt number\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                                Description\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                                Method\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v(
                                  "\n                                Cost\n                                "
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            [
                              _vm.invoices[0].receipts.length > 0
                                ? _vm._l(_vm.invoices[0].receipts, function(
                                    rpt
                                  ) {
                                    return _c("tr", { key: rpt.id }, [
                                      _c("td", [
                                        _vm._v(_vm._s(rpt.receiptnumber))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(rpt.description))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rpt.method))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(rpt.amount))])
                                    ])
                                  })
                                : [
                                    _c("tr", [
                                      _c(
                                        "td",
                                        {
                                          staticClass: "text-center red--text",
                                          attrs: { colspan: "4" }
                                        },
                                        [_vm._v("No Payments Found")]
                                      )
                                    ])
                                  ]
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "title mt-5 ml-1" }, [
                          _c("b", [_vm._v("Reference Numbers")])
                        ]),
                        _vm._v(" "),
                        _c("v-simple-table", [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("Reference Number")]),
                              _c("th", [_vm._v("Description")]),
                              _c("th", [_vm._v("Account number")]),
                              _c("th", [_vm._v("Currency")]),
                              _c("th", [_vm._v("Amount")]),
                              _c("th", [_vm._v("Status")]),
                              _c("th", [_vm._v("Claimee")]),
                              _c("th")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.invoices[0].transfers, function(
                              transfer
                            ) {
                              return _c("tr", { key: transfer.id }, [
                                _c("td", [
                                  _vm._v(_vm._s(transfer.referencenumber))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    transfer.transaction
                                      ? [
                                          _vm._v(
                                            "\n                                  " +
                                              _vm._s(
                                                transfer.transaction.description
                                              ) +
                                              "\n                              "
                                          )
                                        ]
                                      : [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-center red--text"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                 Not Found\n                                  "
                                              )
                                            ]
                                          )
                                        ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    transfer.transaction
                                      ? [
                                          _vm._v(
                                            "\n                                  " +
                                              _vm._s(
                                                transfer.transaction
                                                  .accountnumber
                                              ) +
                                              "\n                              "
                                          )
                                        ]
                                      : [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-center red--text"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                 Not Found\n                                  "
                                              )
                                            ]
                                          )
                                        ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    transfer.transaction
                                      ? [
                                          _vm._v(
                                            "\n                                  " +
                                              _vm._s(
                                                transfer.transaction.currency
                                              ) +
                                              "\n                              "
                                          )
                                        ]
                                      : [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-center red--text"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                 Not Found\n                                  "
                                              )
                                            ]
                                          )
                                        ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    transfer.transaction
                                      ? [
                                          _vm._v(
                                            "\n                                  " +
                                              _vm._s(
                                                transfer.transaction.amount
                                              ) +
                                              "\n                              "
                                          )
                                        ]
                                      : [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-center red--text"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                 Not Found\n                                  "
                                              )
                                            ]
                                          )
                                        ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    transfer.transaction
                                      ? [
                                          _vm._v(
                                            "\n                                  " +
                                              _vm._s(
                                                transfer.transaction.status
                                              ) +
                                              "\n                              "
                                          )
                                        ]
                                      : [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-center red--text"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                 Not Found\n                                  "
                                              )
                                            ]
                                          )
                                        ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    transfer.transaction
                                      ? [
                                          transfer.transaction.company
                                            ? [
                                                _c("div", [
                                                  _vm._v(
                                                    _vm._s(
                                                      transfer.transaction
                                                        .company.name
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("div", [
                                                  _vm._v(
                                                    _vm._s(
                                                      transfer.transaction
                                                        .company.regnumber
                                                    )
                                                  )
                                                ])
                                              ]
                                            : _vm._e()
                                        ]
                                      : [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "text-center red--text"
                                            },
                                            [
                                              _vm._v(
                                                "\n                                 Not Found\n                                  "
                                              )
                                            ]
                                          )
                                        ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c("td")
                              ])
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "title mt-5 ml-1" }, [
                          _c("b", [_vm._v("Proof of Payment")])
                        ]),
                        _vm._v(" "),
                        _c("v-simple-table", [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("Bank")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Action")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.invoices[0].rtgs, function(rtg) {
                              return _c("tr", { key: rtg.invoice_number }, [
                                _c("td", [_vm._v(_vm._s(rtg.name))]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          rounded: "",
                                          outlined: "",
                                          color: "primary",
                                          small: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.showPop(rtg.filename)
                                          }
                                        }
                                      },
                                      [_vm._v("Download")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            }),
                            0
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            : _vm._e()
        ],
        2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
        "v-container",
        [
          _c(
            "v-card",
            [
              _c("v-card-text", [
                _c("div", { staticClass: "display-1" }, [
                  _vm._v(_vm._s(_vm.name))
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            { staticClass: "mt-2" },
            [
              _c("v-card-title", { staticClass: "grey lighten-4 display-1" }, [
                _vm._v("My Tasks")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-simple-table", [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Assigned On")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Company")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Action")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm.tasks.length
                          ? _vm._l(_vm.tasks, function(task) {
                              return _c("tr", { key: task.company_id }, [
                                _c("td", [_vm._v(_vm._s(task.assigned_on))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(task.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(task.action))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(task.status))]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    task.action == "INVOICE_APPROVAL"
                                      ? [
                                          _c("task-invoice", {
                                            attrs: { company: task.company_id }
                                          })
                                        ]
                                      : [_c("task-document")]
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
                                    staticClass: "text-center red--text",
                                    attrs: { colspan: "5" }
                                  },
                                  [_vm._v("No tasks Found")]
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "400", persistent: "" },
          model: {
            value: _vm.changeModel,
            callback: function($$v) {
              _vm.changeModel = $$v
            },
            expression: "changeModel"
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
                  _c("v-card-title", [_vm._v("Change Password")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          "append-icon": _vm.show1 ? "mdi-eye" : "mdi-eye-off",
                          rules: [_vm.rules.required, _vm.rules.min],
                          type: _vm.show1 ? "text" : "password",
                          label: "Password",
                          hint: "At least 8 characters",
                          counter: ""
                        },
                        on: {
                          "click:append": function($event) {
                            _vm.show1 = !_vm.show1
                          }
                        },
                        model: {
                          value: _vm.password,
                          callback: function($$v) {
                            _vm.password = $$v
                          },
                          expression: "password"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          "append-icon": _vm.show2 ? "mdi-eye" : "mdi-eye-off",
                          rules: [
                            _vm.rules.required,
                            _vm.rules.min,
                            _vm.rules.passwordMatch
                          ],
                          type: _vm.show2 ? "text" : "password",
                          label: "ConfirmPassword",
                          hint: "At least 8 characters",
                          counter: ""
                        },
                        on: {
                          "click:append": function($event) {
                            _vm.show2 = !_vm.show2
                          }
                        },
                        model: {
                          value: _vm.password_confirmation,
                          callback: function($$v) {
                            _vm.password_confirmation = $$v
                          },
                          expression: "password_confirmation"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            rounded: "",
                            outlined: "",
                            block: "",
                            color: "green"
                          },
                          on: { click: _vm.changePassword }
                        },
                        [_vm._v("Update")]
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
                    "\r\n                    Please wait ....\r\n                        "
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

/***/ "./resources/js/components/tasks/document.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/tasks/document.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _document_vue_vue_type_template_id_2770e787___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document.vue?vue&type=template&id=2770e787& */ "./resources/js/components/tasks/document.vue?vue&type=template&id=2770e787&");
/* harmony import */ var _document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.vue?vue&type=script&lang=js& */ "./resources/js/components/tasks/document.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _document_vue_vue_type_template_id_2770e787___WEBPACK_IMPORTED_MODULE_0__["render"],
  _document_vue_vue_type_template_id_2770e787___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__["VToolbar"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__["VToolbarItems"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_9__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tasks/document.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tasks/document.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/tasks/document.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./document.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/document.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tasks/document.vue?vue&type=template&id=2770e787&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/tasks/document.vue?vue&type=template&id=2770e787& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_template_id_2770e787___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./document.vue?vue&type=template&id=2770e787& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/document.vue?vue&type=template&id=2770e787&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_template_id_2770e787___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_template_id_2770e787___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tasks/invoice.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/tasks/invoice.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_vue_vue_type_template_id_2b7fb371___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.vue?vue&type=template&id=2b7fb371& */ "./resources/js/components/tasks/invoice.vue?vue&type=template&id=2b7fb371&");
/* harmony import */ var _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.vue?vue&type=script&lang=js& */ "./resources/js/components/tasks/invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _invoice_vue_vue_type_template_id_2b7fb371___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invoice_vue_vue_type_template_id_2b7fb371___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__["VProgressCircular"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__["VToolbar"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__["VToolbarItems"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tasks/invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tasks/invoice.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/tasks/invoice.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tasks/invoice.vue?vue&type=template&id=2b7fb371&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/tasks/invoice.vue?vue&type=template&id=2b7fb371& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_2b7fb371___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=template&id=2b7fb371& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/invoice.vue?vue&type=template&id=2b7fb371&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_2b7fb371___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_2b7fb371___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tasks/search.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/tasks/search.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_b1cc9ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=b1cc9ad8& */ "./resources/js/components/tasks/search.vue?vue&type=template&id=b1cc9ad8&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "./resources/js/components/tasks/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_b1cc9ad8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_b1cc9ad8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__["VProgressCircular"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tasks/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tasks/search.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/tasks/search.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tasks/search.vue?vue&type=template&id=b1cc9ad8&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/tasks/search.vue?vue&type=template&id=b1cc9ad8& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b1cc9ad8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=b1cc9ad8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/search.vue?vue&type=template&id=b1cc9ad8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b1cc9ad8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_b1cc9ad8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tasks/show.vue":
/*!************************************************!*\
  !*** ./resources/js/components/tasks/show.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_113ffa69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=113ffa69& */ "./resources/js/components/tasks/show.vue?vue&type=template&id=113ffa69&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/tasks/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_113ffa69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_113ffa69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__["VProgressCircular"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tasks/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tasks/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/tasks/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tasks/show.vue?vue&type=template&id=113ffa69&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/tasks/show.vue?vue&type=template&id=113ffa69& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_113ffa69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=113ffa69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tasks/show.vue?vue&type=template&id=113ffa69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_113ffa69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_113ffa69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/admin_dashboard_service.js":
/*!**********************************************************!*\
  !*** ./resources/js/services/admin_dashboard_service.js ***!
  \**********************************************************/
/*! exports provided: getDashboard, changepassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboard", function() { return getDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changepassword", function() { return changepassword; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getDashboard() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/administrator');
}
function changepassword(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/administrator/passwordChange', data);
}

/***/ }),

/***/ "./resources/js/services/rtgs_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/rtgs_service.js ***!
  \***********************************************/
/*! exports provided: getRtgs, showRtgs, retrieveInvoice, getStatement, submitStatement, getComments, saveComment, reverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtgs", function() { return getRtgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showRtgs", function() { return showRtgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveInvoice", function() { return retrieveInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatement", function() { return getStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitStatement", function() { return submitStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveComment", function() { return saveComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getRtgs() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/rtgs');
}
function showRtgs(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/rtgs/show/' + id);
}
function retrieveInvoice(invoicenumber) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/rtgs/invoice/' + invoicenumber);
}
function getStatement(currency) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/administrator/rtgs/statement/' + currency);
}
function submitStatement(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/administrator/rtgs/statement', data);
}
function getComments(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/administrator/rtgs/comments/' + id);
}
function saveComment(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/administrator/rtgs/comments/', data);
}
function reverse(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/administrator/rtgs/reverse', data);
}

/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=822d95b6& */ "./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__["VProgressCircular"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=822d95b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/dashboard.vue?vue&type=template&id=822d95b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_822d95b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);