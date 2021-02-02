(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/payment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/payment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['total', 'currency'],
  data: function data() {
    var _this = this;

    return {
      dialog: false,
      mobileDialog: false,
      confirmDialog: false,
      internalDialog: false,
      transferDialog: false,
      referenceDialog: false,
      successDialog: false,
      confirmref: false,
      loading: false,
      balance: 0,
      mode: '',
      phone: '',
      amount: '',
      snackbar: false,
      color: '',
      message: '',
      valid: true,
      online: '',
      refnumber: '',
      reform: true,
      bank: '',
      bankRule: [function (v) {
        return !!v || 'Enter Bank Name';
      }],
      phoneRule: [function (v) {
        return !!v || 'Phone number required';
      }],
      refRule: [function (v) {
        return !!v || 'Reference number required';
      }],
      amountRule: [function (v) {
        return !!v || 'Amount required';
      }, function (v) {
        return v && v <= _this.total || 'Amount must be less than' + _this.total;
      }],
      fileRule: [function (v) {
        return !v || v.size < 5000000 || 'File size should be less than 5 MB!';
      }, function (v) {
        return !!v || 'File is required is required';
      }],
      fileupload: null,
      confirmbtn: true
    };
  },
  methods: {
    claimRef: function claimRef() {
      var _this2 = this;

      if (this.$refs.reform.validate()) {
        this.loading = true;
        var formData = new FormData();
        formData.append('refnumber', this.refnumber);
        _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["claimInternalBalance"](formData).then(function (response) {
          _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["getInternalBalance"](_this2.currency).then(function (response) {
            _this2.balance = response.data.balance;
            _this2.referenceDialog = false;
            _this2.loading = false;
            _this2.internalDialog = true;
          });
        })["catch"](function (error) {
          _this2.loading = false;
          _this2.confirmref = true;
        });
      }
    },
    claim: function claim() {
      this.referenceDialog = true;
    },
    confirm: function confirm() {
      var _this3 = this;

      if (this.$refs.reform.validate()) {
        this.loading = true;
        var formData = new FormData();
        formData.append('refnumber', this.refnumber);
        formData.append('fileupload', this.fileupload);
        formData.append('bank', this.bank);
        _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["confirmTransaction"](formData).then(function (response) {
          _this3.confirmref = false;
          _this3.referenceDialog = false;
          _this3.transferDialog = true;
          _this3.loading = false;
          _this3.refnumber = "";
          _this3.fileupload = null;
          _this3.bank = "";
          _this3.message = response.data.message;
        })["catch"](function (error) {
          _this3.loading = false;
          _this3.snackbar = true;
          _this3.color = "red";
          _this3.message = error.response.data.message;
        });
      }
    },
    internalRegistration: function internalRegistration() {
      var _this4 = this;

      this.loading = true;
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["registerInternalBalance"]().then(function (response) {
        _this4.confirmDialog = false;
        _this4.internalDialog = false;
        _this4.loading = false;

        if (_this4.balance >= _this4.total) {
          _this4.successDialog = true;
        } else {
          _this4.$emit('reloadInvoice');
        }
      })["catch"](function (error) {
        _this4.loading = false;
        _this4.snackbar = true;
        _this4.color = "red";
        _this4.message = error.response.data.message;
      });
    },
    getInternal: function getInternal() {
      var _this5 = this;

      this.loading = true;
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["getInternalBalance"](this.currency).then(function (response) {
        _this5.balance = response.data.balance;
        _this5.loading = false;

        if (_this5.balance > 0) {
          _this5.internalDialog = true;
        } else {
          _this5.referenceDialog = true;
        }
      })["catch"](function (error) {
        _this5.loading = false;
        _this5.snackbar = true;
        _this5.color = "red";
        _this5.message = error.response.data.message;
      });
    },
    showMobile: function showMobile(mode) {
      this.mode = mode;
      this.mobileDialog = true;
    },
    makepayment: function makepayment() {
      var _this6 = this;

      if (this.$refs.form.validate()) {
        var formData = new FormData();
        formData.append('phone', this.phone);
        formData.append('amount', this.amount);
        formData.append('mode', this.mode);
        this.loading = true;
        _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["mobilepayment"](formData).then(function (response) {
          if (response.status == 200) {
            _this6.mobileDialog = false;
            _this6.dialog = false;
            _this6.confirmDialog = true;
            _this6.online = response.data;
          }
        })["catch"](function (error) {
          _this6.loading = false;
          _this6.snackbar = true;
          _this6.color = "red";
          _this6.message = error.response.data.message;
        });
      }
    },
    confirmPayment: function confirmPayment() {
      var _this7 = this;

      this.loading = true;
      this.confirmbtn = false;
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["confirmPayment"](this.online.id).then(function (response) {
        _this7.confirmDialog = false;
        _this7.loading = false;

        if (_this7.total == _this7.amount) {
          _this7.successDialog = true;
        } else {
          _this7.$emit('reloadInvoice');
        }
      })["catch"](function (error) {
        _this7.loading = false;
        _this7.snackbar = true;
        _this7.message = "Failed to complete please try again";
        _this7.color = "red";
      });
    },
    onlinepayment: function onlinepayment() {
      var _this8 = this;

      this.loading = true;
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["paynowPayments"]().then(function (response) {
        _this8.loading = false;
        window.open(response.data.link);
      })["catch"](function (error) {
        _this8.loading = false;
        _this8.snackbar = true;
        _this8.color = "red";
        _this8.message = error.response.data.message;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoicing.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/invoicing.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_user_payment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/user/payment.vue */ "./resources/js/components/user/payment.vue");
/* harmony import */ var _services_invoicing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/invoicing_service */ "./resources/js/services/invoicing_service.js");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Payment: _components_user_payment_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return _defineProperty({
      currencylist: this.$store.state.currencylist,
      invoicelist: this.$store.state.invoice,
      years: this.$store.state.regyear,
      filter: '',
      loading: false,
      categoryDialog: false,
      selectDialog: false,
      confirmDialog: false,
      currencyRules: [function (v) {
        return !!v || 'Select Preferred Currency';
      }],
      yearRules: [function (v) {
        return !!v || 'Select Registration Year';
      }],
      currency: '',
      year: '',
      category_id: '',
      valid: true,
      snackbar: false,
      color: '',
      message: ''
    }, "loading", false);
  },
  mounted: function mounted() {
    this.getInvoices();
  },
  methods: {
    getInvoices: function getInvoices() {
      if (!this.$store.state.documentstatus) {
        this.$router.push({
          name: 'Dashboard'
        });
      }
    },
    selectCategory: function selectCategory(id) {
      this.category_id = id;
      this.selectDialog = true;
    },
    addCategory: function addCategory() {
      if (this.$refs.form.validate()) {
        this.confirmDialog = true;
      }
    },
    saveCategory: function saveCategory() {
      var _this = this;

      var formData = new FormData();
      formData.append('category', this.category_id);
      formData.append('year', this.year);
      formData.append('currency', this.currency);
      this.loading = true;
      this.confirmDialog = false;
      this.selectDialog = false;
      this.categoryDialog = false;
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_1__["addInvoice"](formData).then(function (response) {
        _this.loading = false;
        _this.invoicelist = response.data.invoice;
        _this.snackbar = true;
        _this.color = "green";
        _this.message = "Successfully Added Category to invoices";
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    },
    printInvoice: function printInvoice(inv) {
      var _this2 = this;

      this.loading = true;
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_1__["downloadInvoice"](inv).then(function (response) {
        _this2.loading = false;
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'invoice.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      })["catch"](function (error) {
        _this2.loading = false;
        console.log(error);
      });
    },
    removeItem: function removeItem(id) {
      var _this3 = this;

      this.loading = true;
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_1__["removeItem"](id).then(function (response) {
        _this3.loading = false;
        _this3.invoicelist = response.data.invoice;
        _this3.snackbar = true;
        _this3.color = "green";
        _this3.message = "Successfully Deleted Item From invoice";
      })["catch"](function (error) {
        _this3.loading = false;
        _this3.snackbar = true;
        _this3.color = "red";
        _this3.message = error.response.data.message;
      });
    }
  },
  computed: {
    yearslist: function yearslist() {
      var yearlist = [];
      this.years.forEach(function (value, index) {
        yearlist.push(value.year);
      });
      return yearlist;
    },
    currencies: function currencies() {
      var currencyarray = [];
      this.currencylist.forEach(function (value, index) {
        currencyarray.push(value.name);
      });
      return currencyarray;
    },
    total: function total() {
      var cost = 0;
      this.invoicelist.forEach(function (value, index) {
        cost = cost + value.cost;
      });
      return cost;
    },
    totalpaid: function totalpaid() {
      var cost = 0;
      this.invoicelist[0].receipts.forEach(function (value, index) {
        cost = cost + value.amount;
      });
      return cost;
    },
    finalcurrency: function finalcurrency() {
      return this.invoicelist[0].currency.name;
    },
    getCategorylist: function getCategorylist() {
      return this.$store.state.categorylist;
    },
    filterCategories: function filterCategories() {
      var _this4 = this;

      return this.getCategorylist.filter(function (category) {
        return !category.name.toUpperCase().indexOf(_this4.filter.toUpperCase()) || !category.code.toUpperCase().indexOf(_this4.filter.toUpperCase());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/payment.vue?vue&type=template&id=72e8de8d&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/payment.vue?vue&type=template&id=72e8de8d& ***!
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
          attrs: { color: "green", dark: "", rounded: "" },
          on: {
            click: function($event) {
              $event.stopPropagation()
              _vm.dialog = true
            }
          }
        },
        [_vm._v("\r\n     Make Payment\r\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "700" },
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
                "v-card-title",
                { staticClass: "blue lighten-1 white--text" },
                [
                  _c("div", [_vm._v("Payment Options")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("div", [_vm._v(_vm._s(_vm.currency) + _vm._s(_vm.total))])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _vm.currency == "ZWL"
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: " blue",
                                  attrs: { dark: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.showMobile("ecocash")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    { staticClass: "text-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "heading white--text" },
                                        [
                                          _vm._v(
                                            "\r\n                             Ecocash\r\n                            "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.currency == "ZWL"
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "orange",
                                  attrs: { dark: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.showMobile("onemoney")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    { staticClass: "text-center" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "heading white--text" },
                                        [
                                          _vm._v(
                                            "\r\n                                 One Money\r\n                             "
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "green",
                              attrs: { dark: "" },
                              on: { click: _vm.getInternal }
                            },
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "text-center" },
                                [
                                  _c("div", [
                                    _c(
                                      "div",
                                      { staticClass: "heading white--text" },
                                      [
                                        _vm._v(
                                          "\r\n                             Upload proof of Payment\r\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        "\r\n                                    Zipit,Transfers,Direct Deposits\r\n                                "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.currency == "USD"
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "orange",
                                  attrs: { dark: "" },
                                  on: { click: _vm.onlinepayment }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    { staticClass: "text-center" },
                                    [
                                      _c("div", [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "heading white--text"
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                           Online payment gateway\r\n                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _vm._v(
                                            "\r\n                                    Visa,Master Card\r\n                                "
                                          )
                                        ])
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
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
          attrs: { "max-width": "290" },
          model: {
            value: _vm.mobileDialog,
            callback: function($$v) {
              _vm.mobileDialog = $$v
            },
            expression: "mobileDialog"
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
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v(
                      "\r\n           " + _vm._s(_vm.mode) + "\r\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          label: "Ecocash Number",
                          "prepend-icon": "fa fa-phone",
                          rules: _vm.phoneRule
                        },
                        model: {
                          value: _vm.phone,
                          callback: function($$v) {
                            _vm.phone = $$v
                          },
                          expression: "phone"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          label: "Amount",
                          "prepend-icon": "fa fa-dollar",
                          rules: _vm.amountRule
                        },
                        model: {
                          value: _vm.amount,
                          callback: function($$v) {
                            _vm.amount = $$v
                          },
                          expression: "amount"
                        }
                      })
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
                          attrs: {
                            color: "red darken-1",
                            outlined: "",
                            rounded: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.mobileDialog = false
                            }
                          }
                        },
                        [_vm._v("\r\n            Close\r\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "green darken-1",
                            outlined: "",
                            rounded: ""
                          },
                          on: { click: _vm.makepayment }
                        },
                        [_vm._v("\r\n            Submit\r\n          ")]
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
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.confirmDialog,
            callback: function($$v) {
              _vm.confirmDialog = $$v
            },
            expression: "confirmDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_c("span", [_vm._v("Confirm Payment")])]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("p", { staticClass: "text-lg font-weight-bold" }, [
                    _vm._v(
                      "1 PLEASE CHECK YOUR PHONE AND ENTER YOUR PIN TO AUTHORIZE THE TRANSACTION"
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-lg font-weight-bold" }, [
                    _vm._v(
                      "2 WHEN YOU HAVE AUTHORIZED THE TRANSACTION PLEASE PRESS BUTTON BELOW TO COMPLETE THE TRANSACTION"
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-lg font-weight-bold" }, [
                    _vm._v(
                      "3 IF PRESSING THE BUTTON BELOW DOES NOT COMPLETE THE TRANSACTION PLEASE DAIL Dial *151*2*4# ENTER YOUR ECOCASH PIN AND THEN PRESS THE BUTTON BELOW AGAIN"
                    )
                  ]),
                  _vm._v(" "),
                  _vm.confirmbtn
                    ? _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1 white--text" },
                          on: { click: _vm.confirmPayment }
                        },
                        [
                          _vm._v(
                            "\r\n            Confirm Payment\r\n          "
                          )
                        ]
                      )
                    : _vm._e()
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
          attrs: { "max-width": "600px" },
          model: {
            value: _vm.internalDialog,
            callback: function($$v) {
              _vm.internalDialog = $$v
            },
            expression: "internalDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("div", { staticClass: "heading d-flex" }, [
                    _c("div", [_vm._v(_vm._s(_vm.currency))]),
                    _vm._v(" "),
                    _c("div", [_vm._v(" " + _vm._s(_vm.balance))])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.internalDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", [
                  _vm._v(
                    "\r\n              Are you sure you want to use funds you  transfered into our account to settle your current supplier registreation  invoice \r\n            "
                  ),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "red white--text",
                          on: {
                            click: function($event) {
                              _vm.internalDialog = false
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "green white--text",
                          on: { click: _vm.internalRegistration }
                        },
                        [_vm._v("Proceed")]
                      )
                    ],
                    1
                  )
                ])
              ])
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
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.referenceDialog,
            callback: function($$v) {
              _vm.referenceDialog = $$v
            },
            expression: "referenceDialog"
          }
        },
        [
          _c(
            "v-form",
            {
              ref: "reform",
              attrs: { "lazy-validation": "" },
              model: {
                value: _vm.reform,
                callback: function($$v) {
                  _vm.reform = $$v
                },
                expression: "reform"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [_vm._v("Upload Proof Of Payment")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Reference Number",
                          outlined: "",
                          rules: _vm.refRule
                        },
                        model: {
                          value: _vm.refnumber,
                          callback: function($$v) {
                            _vm.refnumber = $$v
                          },
                          expression: "refnumber"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-file-input", {
                        attrs: {
                          "show-size": "",
                          counter: "",
                          outlined: "",
                          label: "Attach Proof of Payment",
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
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "Bank name",
                          outlined: "",
                          rules: _vm.bankRule
                        },
                        model: {
                          value: _vm.bank,
                          callback: function($$v) {
                            _vm.bank = $$v
                          },
                          expression: "bank"
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
                          staticClass: "red white--text",
                          attrs: { rounded: "" },
                          on: {
                            click: function($event) {
                              _vm.referenceDialog = false
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "green white--text",
                          attrs: { rounded: "" },
                          on: { click: _vm.confirm }
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
              "         \r\n       "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.successDialog,
            callback: function($$v) {
              _vm.successDialog = $$v
            },
            expression: "successDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Success Completion")]),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "text-center" }, [
                _c("h1", [_vm._v("Successfull")]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("v-icon", { attrs: { "x-large": "" } }, [
                      _vm._v("mdi-check")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\r\n                     " +
                      _vm._s(_vm.message) +
                      "\r\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "green white--text",
                        attrs: { outlined: "", to: { name: "Dashboard" } }
                      },
                      [_vm._v("OK")]
                    )
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
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.transferDialog,
            callback: function($$v) {
              _vm.transferDialog = $$v
            },
            expression: "transferDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v(" Upload Success")]),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "text-center" }, [
                _c("h1", [_vm._v("Success")]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("v-icon", { attrs: { "x-large": "" } }, [
                      _vm._v("mdi-check")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", [
                  _vm._v(
                    "\r\n                  You proof of payment was successfully uploaded your registration will be approved manually. Please note  this will be processed only when funds reflect in our account,Do you wish to upload another proof of payment\r\n                "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "green white--text",
                        attrs: { outlined: "" },
                        on: {
                          click: function($event) {
                            _vm.referenceDialog = true
                          }
                        }
                      },
                      [_vm._v("Yes")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "red white--text",
                        attrs: { outlined: "", to: { name: "Dashboard" } }
                      },
                      [_vm._v("NO")]
                    )
                  ],
                  1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoicing.vue?vue&type=template&id=f5b8c9b6&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/invoicing.vue?vue&type=template&id=f5b8c9b6& ***!
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
    "div",
    [
      _c(
        "v-container",
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("div", [_vm._v("Register Category")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "hidden-sm-and-down",
                      attrs: { depressed: "", dense: "", color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.categoryDialog = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                   Select Category\r\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "hidden-md-and-up",
                      attrs: {
                        fab: "",
                        dark: "",
                        small: "",
                        color: "indigo",
                        top: "",
                        right: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.categoryDialog = true
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("fa fa-plus")])],
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
        "v-container",
        { staticClass: "mt-3" },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { sm: "2" } }, [
                        _c(
                          "div",
                          { staticClass: "font-weight-bold black--text" },
                          [_vm._v("Date")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { sm: "8" } }, [
                        _c(
                          "div",
                          { staticClass: "font-weight-bold black--text" },
                          [_vm._v("Descriptin")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { sm: "2" } }, [
                        _c(
                          "div",
                          { staticClass: "font-weight-bold black--text" },
                          [_vm._v("Amount")]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _vm.invoicelist.length > 0
                    ? _c(
                        "div",
                        [
                          _vm._l(_vm.invoicelist, function(invoice) {
                            return _c(
                              "div",
                              { key: invoice.id },
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c("v-col", { attrs: { sm: "2" } }, [
                                      _c("div", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formatDate")(
                                              invoice.created_at
                                            )
                                          )
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("v-col", { attrs: { sm: "8" } }, [
                                      _c("div", [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-weight-bold black--text"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(invoice.category.code)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "hidden-sm-and-down" },
                                          [
                                            _vm._v(
                                              _vm._s(invoice.category.name)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", [
                                          _vm._v(_vm._s(invoice.year))
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("v-col", { attrs: { sm: "2" } }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "d-flex justify-between"
                                        },
                                        [
                                          _c("div", [
                                            _vm._v(
                                              _vm._s(invoice.currency.name) +
                                                _vm._s(invoice.cost)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "red--text",
                                                  attrs: { icon: "" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeItem(
                                                        invoice.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("fa fa-trash")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-divider")
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { sm: "10" } }, [
                                _c("div", { staticClass: "headline" }, [
                                  _vm._v("Total Due")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { sm: "2" } }, [
                                _c("div", { staticClass: "headline" }, [
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.finalcurrency) +
                                      " " +
                                      _vm._s(_vm.total)
                                  )
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { sm: "10" } }, [
                                _c("div", { staticClass: "headline" }, [
                                  _vm._v("Total Paid")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { sm: "2" } },
                                [
                                  _c("div", { staticClass: "headline" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.finalcurrency) +
                                        " " +
                                        _vm._s(_vm.totalpaid)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider", { staticClass: "black" })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { sm: "10" } }, [
                                _c("div", { staticClass: "headline" }, [
                                  _vm._v("Balance")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { sm: "2" } },
                                [
                                  _c("div", { staticClass: "headline" }, [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.finalcurrency) +
                                        " " +
                                        _vm._s(_vm.total - _vm.totalpaid)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider", { staticClass: "black" })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { cols: "12", sm: "8" } }),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "d-flex",
                                  attrs: { cols: "12", sm: "4" }
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "primary",
                                      attrs: { rounded: "", depressed: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.printInvoice(
                                            _vm.invoicelist[0].invoice_number
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Print Invoice")]
                                  ),
                                  _vm._v(" "),
                                  _c("payment", {
                                    attrs: {
                                      total: _vm.total - _vm.totalpaid,
                                      currency: _vm.finalcurrency
                                    },
                                    on: { reloadInvoice: _vm.getInvoices }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    : _c(
                        "div",
                        { staticClass: "pa-10 text-center red--text" },
                        [
                          _vm._v(
                            "\r\n                  No category selected as yet\r\n               "
                          )
                        ]
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
        "v-dialog",
        {
          attrs: { "hide-overlay": "", width: "600" },
          model: {
            value: _vm.categoryDialog,
            callback: function($$v) {
              _vm.categoryDialog = $$v
            },
            expression: "categoryDialog"
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
                "v-card-text",
                [
                  _c(
                    "v-list",
                    { attrs: { "two-line": "" } },
                    _vm._l(_vm.filterCategories, function(cat) {
                      return _c(
                        "div",
                        { key: cat.id },
                        [
                          _c(
                            "v-list-item",
                            [
                              _c("v-list-item-content", [
                                _c("div", [_vm._v(_vm._s(cat.code))]),
                                _vm._v(" "),
                                _c("div", [_vm._v(_vm._s(cat.name))])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-list-item-action",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "green  white--text",
                                      attrs: { fab: "", depressed: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.selectCategory(cat.id)
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("fa fa-plus")])],
                                    1
                                  )
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "hide-overlay": "", width: "300", persistent: "" },
          model: {
            value: _vm.selectDialog,
            callback: function($$v) {
              _vm.selectDialog = $$v
            },
            expression: "selectDialog"
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
                  _c("v-card-title", [_vm._v("Select Currency & Year")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.currencies,
                          outlined: "",
                          rules: _vm.currencyRules,
                          label: "Select Currency"
                        },
                        model: {
                          value: _vm.currency,
                          callback: function($$v) {
                            _vm.currency = $$v
                          },
                          expression: "currency"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.yearslist,
                          outlined: "",
                          rules: _vm.yearRules,
                          label: "Select Year"
                        },
                        model: {
                          value: _vm.year,
                          callback: function($$v) {
                            _vm.year = $$v
                          },
                          expression: "year"
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
                          staticClass: "red white--text",
                          attrs: { outlined: "" },
                          on: {
                            click: function($event) {
                              _vm.selectDialog = false
                            }
                          }
                        },
                        [_vm._v("cancel")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "green white--text",
                          attrs: { outlined: "" },
                          on: { click: _vm.addCategory }
                        },
                        [_vm._v("Add")]
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
          attrs: { "hide-overlay": "", width: "500", persistent: "" },
          model: {
            value: _vm.confirmDialog,
            callback: function($$v) {
              _vm.confirmDialog = $$v
            },
            expression: "confirmDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline red white--text" }, [
                _vm._v(
                  "\r\n                        Registration Warning\r\n                        "
                )
              ]),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "font-weight-bold" }, [
                _vm._v(
                  "\r\n                         Please note your registration will be valid from 1 January " +
                    _vm._s(_vm.year) +
                    " to 31 December " +
                    _vm._s(_vm.year) +
                    " , Click confirm if you wish to register for that period\r\n                        "
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red", depressed: "" },
                      on: {
                        click: function($event) {
                          _vm.confirmDialog = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                            Cancel\r\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", depressed: "" },
                      on: { click: _vm.saveCategory }
                    },
                    [
                      _vm._v(
                        "\r\n                            I accept\r\n                        "
                      )
                    ]
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/payment.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/user/payment.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_vue_vue_type_template_id_72e8de8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=72e8de8d& */ "./resources/js/components/user/payment.vue?vue&type=template&id=72e8de8d&");
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ "./resources/js/components/user/payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_72e8de8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payment_vue_vue_type_template_id_72e8de8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_13__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/payment.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/user/payment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/payment.vue?vue&type=template&id=72e8de8d&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/user/payment.vue?vue&type=template&id=72e8de8d& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_72e8de8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=template&id=72e8de8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/payment.vue?vue&type=template&id=72e8de8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_72e8de8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_72e8de8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/user/invoicing.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/user/invoicing.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoicing_vue_vue_type_template_id_f5b8c9b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoicing.vue?vue&type=template&id=f5b8c9b6& */ "./resources/js/views/user/invoicing.vue?vue&type=template&id=f5b8c9b6&");
/* harmony import */ var _invoicing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoicing.vue?vue&type=script&lang=js& */ "./resources/js/views/user/invoicing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _invoicing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _invoicing_vue_vue_type_template_id_f5b8c9b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invoicing_vue_vue_type_template_id_f5b8c9b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/invoicing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/invoicing.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/user/invoicing.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoicing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./invoicing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoicing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoicing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/invoicing.vue?vue&type=template&id=f5b8c9b6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/user/invoicing.vue?vue&type=template&id=f5b8c9b6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoicing_vue_vue_type_template_id_f5b8c9b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./invoicing.vue?vue&type=template&id=f5b8c9b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/invoicing.vue?vue&type=template&id=f5b8c9b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoicing_vue_vue_type_template_id_f5b8c9b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoicing_vue_vue_type_template_id_f5b8c9b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);