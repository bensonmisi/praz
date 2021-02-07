(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/paynotice.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/paynotice.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_notices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/notices */ "./resources/js/services/notices.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['id', 'cost', 'description', 'currency'],
  data: function data() {
    return {
      dialog: false,
      loading: false,
      initiateDialog: false,
      due: '',
      wallet: '',
      snackbar: false,
      accountnumber: '',
      color: '',
      message: '',
      paid: ''
    };
  },
  mounted: function mounted() {
    console.log('mounted');
  },
  methods: {
    initiate: function initiate() {
      var _this = this;

      this.loading = true;
      _services_notices__WEBPACK_IMPORTED_MODULE_0__["initiate"](this.id).then(function (response) {
        _this.loading = false;
        _this.due = response.data.due;
        _this.wallet = response.data.wallet;
        _this.paid = response.data.paid;
        _this.accountnumber = response.data.accountnumber;
        _this.initiateDialog = true;
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    },
    pay: function pay() {
      var _this2 = this;

      this.loading = true;
      _services_notices__WEBPACK_IMPORTED_MODULE_0__["pay"](this.id).then(function (response) {
        _this2.loading = false;
        _this2.snackbar = true;
        _this2.initiateDialog = false;
        _this2.dialog = false;
        _this2.color = "green";
        _this2.message = 'Successfully Made Payment ';

        _this2.$emit('paid');
      })["catch"](function (error) {
        _this2.loading = false;
        _this2.snackbar = true;
        _this2.color = "red";
        _this2.message = error.response.data.message;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/tenders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/tenders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_user_paynotice_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/user/paynotice.vue */ "./resources/js/components/user/paynotice.vue");
/* harmony import */ var _services_notices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/notices */ "./resources/js/services/notices.js");
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
    paynotice: _components_user_paynotice_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      notices: [],
      notice: {},
      types: [],
      type: '',
      uploaded: false,
      currency: '',
      snackbar: false,
      loading: false,
      dialog: false,
      invoice: {},
      spoc: '',
      nonrefundable: [],
      bidbond: ''
    }, _defineProperty(_ref, "type", 'N'), _defineProperty(_ref, "message", ''), _defineProperty(_ref, "filter", ''), _defineProperty(_ref, "color", ''), _defineProperty(_ref, "previous_link", ''), _defineProperty(_ref, "next_link", ''), _defineProperty(_ref, "morepages", false), _defineProperty(_ref, "previous", false), _defineProperty(_ref, "qoute", null), _defineProperty(_ref, "valid", true), _defineProperty(_ref, "amount", ''), _defineProperty(_ref, "fileRule", [function (v) {
      return !v || v.size < 5000000 || 'File size should be less than 5 MB!';
    }, function (v) {
      return !!v || 'Qoute is required is required';
    }]), _defineProperty(_ref, "amountRule", [function (v) {
      return !!v || 'Total on qoutation required';
    }]), _ref;
  },
  mounted: function mounted() {
    this.getNotices();
  },
  methods: {
    getNotices: function getNotices() {
      var _this = this;

      this.loading = true;
      _services_notices__WEBPACK_IMPORTED_MODULE_1__["getNotices"]().then(function (response) {
        _this.loading = false;
        _this.notices = response.data.notices.data;
        _this.types = response.data.types;
        console.log(response.data.notices.current_page);

        if (response.data.notices.current_page < response.data.notices.last_page) {
          _this.morepages = true;
          _this.next_link = response.data.notices.next_page_url;
        }
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    },
    nextPage: function nextPage() {
      var _this2 = this;

      this.loading = true;
      _services_notices__WEBPACK_IMPORTED_MODULE_1__["retreiveNotices"](this.next_link).then(function (response) {
        _this2.notices = response.data.notices.data;
        _this2.loading = false;
        console.log(response.data.notices.last_page);

        if (response.data.notices.current_page < response.data.notices.last_page) {
          _this2.morepages = true;
          _this2.next_link = response.data.notices.next_page_url;
        } else {
          _this2.morepages = false;
        }

        if (response.data.notices.prev_page_url != null) {
          _this2.previous_link = response.data.notices.prev_page_url;
          _this2.previous = true;
        } else {
          _this2.previous = false;
        }
      })["catch"](function (error) {
        _this2.loading = false;
        _this2.snackbar = true;
        _this2.color = "red";
        _this2.message = error.response.data.message;
      });
    },
    previousPage: function previousPage() {
      var _this3 = this;

      this.loading = true;
      _services_notices__WEBPACK_IMPORTED_MODULE_1__["retreiveNotices"](this.previous_link).then(function (response) {
        _this3.notices = response.data.notices.data;
        _this3.loading = false;

        if (response.data.notices.current_page < response.data.notices.last_page) {
          _this3.morepages = true;
          _this3.next_link = response.data.notices.next_page_url;
        } else {
          _this3.morepages = false;
        }

        if (response.data.notices.prev_page_url) {
          _this3.previous_link = response.data.notices.prev_page_url;
          _this3.previous = true;
        } else {
          _this3.previous = false;
        }
      })["catch"](function (error) {
        _this3.loading = false;
        _this3.snackbar = true;
        _this3.color = "red";
        _this3.message = error.response.data.message;
      });
    },
    shownotice: function shownotice(notice) {
      var _this4 = this;

      this.loading = true;
      _services_notices__WEBPACK_IMPORTED_MODULE_1__["getNotice"](notice.id).then(function (response) {
        _this4.loading = false;
        _this4.notice = response.data.notice;
        _this4.nonrefundable = response.data.nonrefundable;
        _this4.invoice = response.data.invoice;
        _this4.currency = response.data.notice.currency.name;
        _this4.type = response.data.notice.type.allow_upload;

        if (response.data.notice.qoutations.length > 0) {
          _this4.uploaded = true;
        }

        _this4.dialog = true;
      })["catch"](function (error) {
        _this4.loading = false;
      });
    },
    uploadQoute: function uploadQoute() {
      var _this5 = this;

      if (this.$refs.qouteForm.validate()) {
        this.loading = true;
        var formData = new FormData();
        formData.append('notice', this.notice.id);
        formData.append('amount', this.amount);
        formData.append('qoute', this.qoute);
        _services_notices__WEBPACK_IMPORTED_MODULE_1__["uploadQoutation"](formData).then(function (response) {
          _this5.loading = false;
          _this5.notice = response.data.notice;
          _this5.snackbar = true;
          _this5.color = "green";
          _this5.message = 'Successfully Uploaded Qoutation';
        })["catch"](function (error) {
          _this5.loading = false;
          _this5.snackbar = true;
          _this5.color = "red";
          _this5.message = error.response.data.message;
        });
      }
    },
    addInvoice: function addInvoice(name) {
      var _this6 = this;

      var formData = new FormData();
      formData.append('name', name);
      formData.append('notice', this.notice.id);
      this.loading = true;
      _services_notices__WEBPACK_IMPORTED_MODULE_1__["addItem"](formData).then(function (response) {
        _this6.loading = false;
        _this6.invoice = response.data.invoice;
        _this6.snackbar = true;
        _this6.color = "green";
        _this6.message = 'Successfully Add Item to Invoice';
      })["catch"](function (error) {
        _this6.loading = false;
        _this6.snackbar = true;
        _this6.color = "red";
        _this6.message = error.response.data.message;
      });
    }
  },
  computed: {
    filterNotices: function filterNotices() {
      var _this7 = this;

      var filter = this.filter;
      console.log(this.type);

      if (filter) {
        return this.notices.filter(function (notice) {
          return notice.description.toUpperCase().indexOf(filter.toUpperCase()) > -1 || notice.ptype_id == _this7.type;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/paynotice.vue?vue&type=template&id=c435ed72&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/paynotice.vue?vue&type=template&id=c435ed72& ***!
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
          staticClass: "green white--text",
          attrs: { block: "" },
          on: {
            click: function($event) {
              _vm.dialog = true
            }
          }
        },
        [_vm._v(" Make Payment")]
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
              _c("v-card-title", { staticClass: "blue white--text" }, [
                _vm._v("Make Payment")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { sm: "8" } }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.description) +
                            "\n                         "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { sm: "4" } }, [
                        _c("div", [
                          _c("div", [
                            _vm._v(_vm._s(_vm.currency) + _vm._s(_vm.cost))
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider")
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
                      attrs: { rounded: "", outlined: "", color: "primary" },
                      on: { click: _vm.initiate }
                    },
                    [_vm._v("inititate payment")]
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
          attrs: { timeout: "4000", color: _vm.color, top: "", right: "" },
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
          attrs: { "max-width": "700", "hide-overlay": "" },
          model: {
            value: _vm.initiateDialog,
            callback: function($$v) {
              _vm.initiateDialog = $$v
            },
            expression: "initiateDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v(
                  "\n                    Confirm Payment\n                "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { sm: "6" } }, [
                        _c("div", { staticClass: "caption" }, [
                          _vm._v("Total Invoice")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { sm: "6" } }, [
                        _c("div", { staticClass: "caption red--text" }, [
                          _vm._v(_vm._s(_vm.currency) + _vm._s(_vm.cost))
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { sm: "6" } }, [
                        _c("div", { staticClass: "caption" }, [
                          _vm._v(" Total Paid")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { sm: "6" } }, [
                        _c("div", { staticClass: "caption green--text" }, [
                          _vm._v(_vm._s(_vm.currency) + _vm._s(_vm.paid))
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { sm: "6" } }, [
                        _c("div", { staticClass: "caption" }, [
                          _vm._v(" Balance Due")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { sm: "6" } }, [
                        _c("div", { staticClass: "caption red--text" }, [
                          _vm._v(
                            _vm._s(_vm.currency) + _vm._s(_vm.cost - _vm.paid)
                          )
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { sm: "6" } }, [
                        _vm._v("Available Internal Funds ")
                      ]),
                      _vm._v(" "),
                      _c("v-col", { attrs: { sm: "6" } }, [
                        _vm._v(_vm._s(_vm.currency) + _vm._s(_vm.wallet))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-expansion-panels",
                    { attrs: { flat: "" } },
                    [
                      _c(
                        "v-expansion-panel",
                        [
                          _c(
                            "v-expansion-panel-header",
                            { staticClass: "blue--text text--lighten-2" },
                            [
                              _vm._v(
                                "\n                        How to top up your internal funds\n                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-expansion-panel-content", [
                            _c(
                              "div",
                              { staticClass: "red--text font-italic" },
                              [
                                _vm._v(
                                  "Please deposite funds into our bank using the details below. Obtain the transaction reference number from your bank and click the UPDATE on the Bank transactions module "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", [_vm._v("Bank: CBZ")]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "Account Name : Procurement Regulatory Authority of Zimbabwe"
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "Account number: " + _vm._s(_vm.accountnumber)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [_vm._v("Branch : Kwame Nkrumah")]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      color: "primary",
                                      depressed: "",
                                      to: { name: "Bankpayments" }
                                    }
                                  },
                                  [_vm._v("Goto My Bank transactions")]
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
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { outlined: "", rounded: "", color: "red" },
                      on: {
                        click: function($event) {
                          _vm.initiateDialog = false
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
                      attrs: { outlined: "", rounded: "", color: "green" },
                      on: { click: _vm.pay }
                    },
                    [_vm._v("Pay")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/tenders.vue?vue&type=template&id=3935d4da&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/tenders.vue?vue&type=template&id=3935d4da& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
              : _c("div", { staticClass: "text-center pa-10" }, [
                  _vm._v(
                    "\n                       No Procurement notices uploaded as yet\n              "
                  )
                ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _vm.previous
                ? _c(
                    "v-btn",
                    {
                      attrs: { outlined: "", color: "green" },
                      on: { click: _vm.previousPage }
                    },
                    [
                      _vm._v("Previous Page"),
                      _c("v-icon", [_vm._v("mdi-arrow-left-thick")])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.morepages
                ? _c(
                    "v-btn",
                    {
                      attrs: { outlined: "", color: "green" },
                      on: { click: _vm.nextPage }
                    },
                    [
                      _vm._v(" Next Page "),
                      _c("v-icon", [_vm._v("mdi-arrow-right-thick")])
                    ],
                    1
                  )
                : _vm._e()
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-top-transition"
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
                "v-card-title",
                { staticClass: "green lighten-2 white--text" },
                [
                  _c("div", [_vm._v(_vm._s(_vm.notice.tendernumber))]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
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
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    { staticClass: "headline  px-3 py-3" },
                                    [_vm._v("Products/Services")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-list",
                                        { attrs: { "two-line": "" } },
                                        _vm._l(_vm.notice.products, function(
                                          product
                                        ) {
                                          return _c(
                                            "div",
                                            { key: product.id },
                                            [
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c("v-list-item-content", [
                                                    _vm._v(_vm._s(product.name))
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-item-content", [
                                                    _vm._v(
                                                      _vm._s(product.quantity)
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
                                        0
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "headline mt-6" },
                                        [_vm._v("Required Categories")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list",
                                        { attrs: { "two-line": "" } },
                                        _vm._l(_vm.notice.category, function(
                                          cat
                                        ) {
                                          return _c(
                                            "div",
                                            { key: cat.id },
                                            [
                                              _c(
                                                "v-list-item",
                                                [
                                                  _c("v-list-item-content", [
                                                    _vm._v(
                                                      _vm._s(cat.category.code)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("v-list-item-content", [
                                                    _vm._v(
                                                      _vm._s(cat.category.name)
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
                          _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
                            _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      "x-large": "",
                                      outlined: "",
                                      color: "success",
                                      dark: "",
                                      block: ""
                                    }
                                  },
                                  [
                                    _c("v-icon", [_vm._v("fa fa-download")]),
                                    _vm._v(
                                      " Document\n                                    "
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.notice.ptype_id == "2"
                              ? _c(
                                  "div",
                                  { staticClass: "mt-6" },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c(
                                          "v-card-title",
                                          {
                                            staticClass:
                                              "py-3 px-3 primary white--text"
                                          },
                                          [_vm._v("Required Tender Fees")]
                                        ),
                                        _vm._v(" "),
                                        _c("v-card-text", [
                                          _vm.nonrefundable.length > 0
                                            ? _c(
                                                "div",
                                                _vm._l(
                                                  _vm.nonrefundable,
                                                  function(fee) {
                                                    return _c(
                                                      "div",
                                                      { key: fee.id },
                                                      [
                                                        _c(
                                                          "v-row",
                                                          [
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  sm: "6"
                                                                }
                                                              },
                                                              [
                                                                _c("div", [
                                                                  _vm._v(
                                                                    "\n                                                     " +
                                                                      _vm._s(
                                                                        fee.name
                                                                      ) +
                                                                      "\n                                                      "
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("div", [
                                                                  _vm._v(
                                                                    "\n                                                        " +
                                                                      _vm._s(
                                                                        fee.status
                                                                      ) +
                                                                      "\n                                                      "
                                                                  )
                                                                ])
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                staticClass:
                                                                  "d-flex",
                                                                attrs: {
                                                                  sm: "6"
                                                                }
                                                              },
                                                              [
                                                                _c("div", [
                                                                  _vm._v(
                                                                    "  " +
                                                                      _vm._s(
                                                                        _vm.currency
                                                                      ) +
                                                                      " " +
                                                                      _vm._s(
                                                                        fee.cost
                                                                      )
                                                                  )
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("v-spacer"),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "div",
                                                                  [
                                                                    !fee.paid
                                                                      ? _c(
                                                                          "v-btn",
                                                                          {
                                                                            attrs: {
                                                                              outlined:
                                                                                "",
                                                                              rounded:
                                                                                "",
                                                                              dense:
                                                                                "",
                                                                              color:
                                                                                "primary"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                return _vm.addInvoice(
                                                                                  fee.name
                                                                                )
                                                                              }
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Add"
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "green--text"
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              "Paid"
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
                                                        _c("v-divider")
                                                      ],
                                                      1
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            : _c("div", [
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "pa-6 red--text"
                                                  },
                                                  [_vm._v("No Fees Found")]
                                                )
                                              ])
                                        ]),
                                        _vm._v(" "),
                                        _vm.invoice
                                          ? _c(
                                              "v-card-actions",
                                              [
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c("paynotice", {
                                                  attrs: {
                                                    id: _vm.invoice
                                                      ? _vm.invoice.id
                                                      : 0,
                                                    cost: _vm.invoice
                                                      ? _vm.invoice.cost
                                                      : 0,
                                                    description: _vm.invoice
                                                      ? _vm.invoice.description
                                                      : "",
                                                    currency:
                                                      _vm.notice.currency.name
                                                  },
                                                  on: {
                                                    paid: function($event) {
                                                      return _vm.shownotice(
                                                        _vm.notice
                                                      )
                                                    }
                                                  }
                                                })
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
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.type == "Y"
                              ? _c("div", { staticClass: "mt-6" }, [
                                  !_vm.uploaded
                                    ? _c(
                                        "div",
                                        [
                                          _c(
                                            "v-form",
                                            {
                                              ref: "qouteForm",
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
                                                    {
                                                      staticClass:
                                                        "pa-5 blue white--text"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                             Upload Quotation\n                                        "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-card-text",
                                                    [
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            " font-weight-bold red--text mt-6"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Please note  qoutation should be in " +
                                                              _vm._s(
                                                                _vm.currency
                                                              )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-row",
                                                        [
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-text-field",
                                                                {
                                                                  attrs: {
                                                                    label:
                                                                      "Total Cost on Qoute",
                                                                    outlined:
                                                                      "",
                                                                    dense: "",
                                                                    rules:
                                                                      _vm.amountRule,
                                                                    "prepend-icon":
                                                                      "mdi-currency-usd"
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.amount,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.amount = $$v
                                                                    },
                                                                    expression:
                                                                      "amount"
                                                                  }
                                                                }
                                                              )
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
                                                          _c(
                                                            "v-col",
                                                            {
                                                              attrs: {
                                                                cols: "12"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "v-file-input",
                                                                {
                                                                  attrs: {
                                                                    "show-size":
                                                                      "",
                                                                    accept:
                                                                      ".pdf",
                                                                    counter: "",
                                                                    dense: "",
                                                                    outlined:
                                                                      "",
                                                                    rules:
                                                                      _vm.fileRule,
                                                                    "prepend-icon":
                                                                      "mdi-pdf-box",
                                                                    label:
                                                                      "Attach Quotation"
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      _vm.qoute,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.qoute = $$v
                                                                    },
                                                                    expression:
                                                                      "qoute"
                                                                  }
                                                                }
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
                                                    "v-card-actions",
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          attrs: {
                                                            outlined: "",
                                                            rounded: "",
                                                            block: "",
                                                            color: "green"
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.uploadQoute
                                                          }
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
                                      )
                                    : _c(
                                        "div",
                                        {
                                          staticClass:
                                            "text-center pa-10  border"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "green--text font-weight-bold headline"
                                            },
                                            [_vm._v("Qoutation Uploaded")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                rounded: "",
                                                color: "primary"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.uploaded = false
                                                }
                                              }
                                            },
                                            [_vm._v("ReUpload")]
                                          )
                                        ],
                                        1
                                      )
                                ])
                              : _vm._e()
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("h5", { staticClass: "display-1" }, [
                        _vm._v("Details")
                      ]),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.notice.description))])
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/paynotice.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/user/paynotice.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paynotice_vue_vue_type_template_id_c435ed72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paynotice.vue?vue&type=template&id=c435ed72& */ "./resources/js/components/user/paynotice.vue?vue&type=template&id=c435ed72&");
/* harmony import */ var _paynotice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paynotice.vue?vue&type=script&lang=js& */ "./resources/js/components/user/paynotice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _paynotice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _paynotice_vue_vue_type_template_id_c435ed72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _paynotice_vue_vue_type_template_id_c435ed72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VExpansionPanel: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__["VExpansionPanel"],VExpansionPanelContent: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__["VExpansionPanelContent"],VExpansionPanelHeader: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__["VExpansionPanelHeader"],VExpansionPanels: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_9__["VExpansionPanels"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/paynotice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/paynotice.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/user/paynotice.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paynotice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./paynotice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/paynotice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paynotice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/paynotice.vue?vue&type=template&id=c435ed72&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/paynotice.vue?vue&type=template&id=c435ed72& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paynotice_vue_vue_type_template_id_c435ed72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./paynotice.vue?vue&type=template&id=c435ed72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/paynotice.vue?vue&type=template&id=c435ed72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paynotice_vue_vue_type_template_id_c435ed72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_paynotice_vue_vue_type_template_id_c435ed72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/notices.js":
/*!******************************************!*\
  !*** ./resources/js/services/notices.js ***!
  \******************************************/
/*! exports provided: getNotices, retreiveNotices, getNotice, uploadQoutation, addItem, initiate, pay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotices", function() { return getNotices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retreiveNotices", function() { return retreiveNotices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotice", function() { return getNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadQoutation", function() { return uploadQoutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initiate", function() { return initiate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pay", function() { return pay; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getNotices() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('Notices');
}
function retreiveNotices(link) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get(link);
}
function getNotice(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('Notice/' + id);
}
function uploadQoutation(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('uploadQoutation', data);
}
function addItem(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('addtenderItem', data);
}
function initiate(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('Noticeinititate/' + id);
}
function pay(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('Noticepay/' + id);
}

/***/ }),

/***/ "./resources/js/views/user/tenders.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/user/tenders.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tenders_vue_vue_type_template_id_3935d4da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tenders.vue?vue&type=template&id=3935d4da& */ "./resources/js/views/user/tenders.vue?vue&type=template&id=3935d4da&");
/* harmony import */ var _tenders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenders.vue?vue&type=script&lang=js& */ "./resources/js/views/user/tenders.vue?vue&type=script&lang=js&");
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
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tenders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tenders_vue_vue_type_template_id_3935d4da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tenders_vue_vue_type_template_id_3935d4da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_12__["VListItemContent"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_13__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/tenders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/tenders.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/user/tenders.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tenders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./tenders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/tenders.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tenders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/tenders.vue?vue&type=template&id=3935d4da&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/user/tenders.vue?vue&type=template&id=3935d4da& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tenders_vue_vue_type_template_id_3935d4da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./tenders.vue?vue&type=template&id=3935d4da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/tenders.vue?vue&type=template&id=3935d4da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tenders_vue_vue_type_template_id_3935d4da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tenders_vue_vue_type_template_id_3935d4da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);