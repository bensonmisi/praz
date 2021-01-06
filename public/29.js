(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/rtgs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/rtgs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        href: '/administrator/dashboard'
      }, {
        text: 'RTGS Payments',
        disabled: true,
        href: 'admin.rtgs'
      }],
      rtgs: [],
      invoices: [],
      statements: [],
      comments: [],
      commentRule: [function (v) {
        return !!v || 'Comment is required';
      }],
      referencenumber: '',
      rtg: '',
      color: '',
      snackbar: false,
      message: '',
      loading: false,
      showDialog: false,
      receiptModel: false,
      statement: '',
      confirmModel: false,
      filter: '',
      newcomment: '',
      commentsModel: false,
      valid: true
    };
  },
  mounted: function mounted() {
    this.getRTGS();
  },
  methods: {
    getRTGS: function getRTGS() {
      var _this = this;

      this.loading = true;
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["getRtgs"]().then(function (response) {
        _this.loading = false;
        _this.invoices = response.data.invoices;
      })["catch"](function (error) {
        _this.loading = false;
        _this.message = error.response.data.message;
        _this.snackbar = true;
        _this.color = "red";
      });
    },
    showRtgs: function showRtgs(id) {
      var _this2 = this;

      this.loading = true;
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["showRtgs"](id).then(function (response) {
        _this2.loading = false;
        _this2.showDialog = true;
        _this2.rtg = response.data.rtgdata;
      })["catch"](function (error) {
        _this2.loading = false;
        _this2.message = error.response.data.message;
        _this2.snackbar = true;
        _this2.color = "red";
      });
    },
    getStatement: function getStatement(currency) {
      var _this3 = this;

      this.loading = true;
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["getStatement"](currency).then(function (response) {
        _this3.loading = false;
        _this3.statements = response.data.statement;
        _this3.receiptModel = true;
      })["catch"](function (error) {
        _this3.loading = false;
        _this3.message = error.response.data.message;
        _this3.snackbar = true;
        _this3.color = "red";
      });
    },
    retriveStatement: function retriveStatement() {
      var _this4 = this;

      this.loading = true; //var formData = new FormData();
      //  formData.append('referencenumber',this.referencenumber)

      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["getStatement"](this.referencenumber).then(function (response) {
        _this4.loading = false;
        _this4.statements = response.data.statement;
      })["catch"](function (error) {
        _this4.loading = false;
        _this4.message = error.response.data.message;
        _this4.snackbar = true;
        _this4.color = "red";
      });
    },
    showStatement: function showStatement(statement) {
      this.statement = statement;
      this.confirmModel = true;
    },
    submitStatement: function submitStatement() {
      var _this5 = this;

      this.loading = true;
      var formData = new FormData();
      formData.append('statement_id', this.statement.id);
      formData.append('rtgs_id', this.rtg.id);
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["submitStatement"](formData).then(function (response) {
        _this5.invoices = response.data.invoices;
        _this5.confirmModel = false;
        _this5.receiptModel = false;
        _this5.showDialog = false;
        _this5.loading = false;
        _this5.snackbar = true;
        _this5.message = "Transaction successfully approved";
        _this5.color = "green";
      })["catch"](function (error) {
        _this5.loading = false;
        _this5.message = error.response.data.message;
        _this5.snackbar = true;
        _this5.color = "red";
      });
    },
    getComments: function getComments(id) {
      var _this6 = this;

      this.loading = true;
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["getComments"](id).then(function (response) {
        _this6.loading = false;
        _this6.comments = response.data.comments;
        _this6.commentsModel = true;
      })["catch"](function (error) {
        _this6.loading = false;
        _this6.message = error.response.data.message;
        _this6.snackbar = true;
        _this6.color = "red";
      });
    },
    saveComment: function saveComment() {
      var _this7 = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        var formData = new FormData();
        formData.append('id', this.rtg.id);
        formData.append('comment', this.newcomment);
        _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["saveComment"](formData).then(function (response) {
          _this7.loading = false;
          _this7.comments = response.data.comments;
          _this7.newcomment = "";
        })["catch"](function (error) {
          _this7.loading = false;
          _this7.message = error.response.data.message;
          _this7.snackbar = true;
          _this7.color = "red";
        });
      }
    },
    showPop: function showPop() {
      var url = this.$store.state.serverUrl + this.rtg.filename;
      window.open(url, "_blank");
    }
  },
  computed: {
    totalCost: function totalCost() {
      var total = 0;
      this.rtg.invoice.forEach(function (value, index) {
        total = total + value.cost;
      });
      return total;
    },
    totalPaid: function totalPaid() {
      var total = 0;
      this.rtg.receipts.forEach(function (value, index) {
        total = total + value.amount;
      });
      return total;
    },
    searchStatement: function searchStatement() {
      var _this8 = this;

      return this.statements.filter(function (state) {
        return !state.source_reference.toUpperCase().indexOf(_this8.referencenumber.toUpperCase()) || !state.description.toUpperCase().indexOf(_this8.referencenumber.toUpperCase());
      });
    },
    searchInvoice: function searchInvoice() {
      var _this9 = this;

      return this.invoices.filter(function (invoice) {
        return !invoice.name.toUpperCase().indexOf(_this9.filter.toUpperCase());
      });
    },
    countComments: function countComments() {
      if (this.rtg) {
        return this.rtg.comments.length > 0 ? this.rtg.comments.length : 0;
      } else {
        return 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/rtgs.vue?vue&type=template&id=c939b6a6&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/rtgs.vue?vue&type=template&id=c939b6a6& ***!
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
    "v-container",
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-text",
            [_c("v-breadcrumbs", { attrs: { items: _vm.items } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mt-2" },
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { sm: "12" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          label: "Search Company",
                          "prepend-inner-icon": "fa fa-search"
                        },
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
              _c("v-simple-table", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                    Invoice number\n                   "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                     Company\n                   "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                      Total Due\n                   "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                      Total Paid\n                   "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                     Balance\n                   "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                     Status\n                   "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.searchInvoice, function(invoice) {
                            return _c(
                              "tr",
                              {
                                key: invoice.id,
                                on: {
                                  click: function($event) {
                                    return _vm.showRtgs(invoice.invoice_number)
                                  }
                                }
                              },
                              [
                                _c("td", [
                                  _vm._v(_vm._s(invoice.invoice_number))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(invoice.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(invoice.cost))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(invoice.paid))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(invoice.cost - invoice.paid))
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v("AWAITING")])
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              })
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
            "\n               " + _vm._s(_vm.message) + "         \n       "
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
                    "\n                   Please wait ....\n                   "
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
          attrs: { "max-width": "700px", "hide-overlay": "" },
          model: {
            value: _vm.showDialog,
            callback: function($$v) {
              _vm.showDialog = $$v
            },
            expression: "showDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("RTGS Detail")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Invoice number\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Category\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Year\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Cost\n                                   "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm._l(_vm.rtg.invoice, function(inv) {
                                  return _c("tr", { key: inv.id }, [
                                    _c("td", [
                                      _vm._v(_vm._s(inv.invoice_number))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(inv.category.code))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(inv.year))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(inv.currency.name) +
                                          _vm._s(inv.cost)
                                      )
                                    ])
                                  ])
                                }),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { attrs: { colspan: "3" } }, [
                                    _vm._v("Balance Due")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.rtg.invoice[0].currency.name) +
                                        _vm._s(_vm.totalCost)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { attrs: { colspan: "3" } }, [
                                    _vm._v("Total paid")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.rtg.invoice[0].currency.name) +
                                        _vm._s(_vm.totalPaid)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { attrs: { colspan: "3" } }, [
                                    _vm._v("Balance")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(_vm.rtg.invoice[0].currency.name) +
                                        _vm._s(_vm.totalCost - _vm.totalPaid)
                                    )
                                  ])
                                ])
                              ],
                              2
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  }),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { sm: "12" } },
                        [
                          _c("v-simple-table", [
                            _c("thead", [
                              _c("tr", [
                                _c("th", [_vm._v("Reference number")]),
                                _c("th", [_vm._v("Status")])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm.rtg.transfer
                                  ? [
                                      _c("tr", [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.rtg.transfer.referencenumber
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(_vm.rtg.transfer.status)
                                          )
                                        ])
                                      ])
                                    ]
                                  : [
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "text-center red--text",
                                            attrs: { colspan: "2" }
                                          },
                                          [_vm._v("No transfer details found")]
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c("v-col", { staticClass: "px-5", attrs: { sm: "8" } }, [
                        _c("div", { staticClass: "headline" }, [
                          _vm._v("Receipts")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "d-flex px-2", attrs: { sm: "4" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                sm: "",
                                outlined: "",
                                color: "blue",
                                fab: ""
                              },
                              on: { click: _vm.showPop }
                            },
                            [_c("v-icon", [_vm._v("fa fa-download")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                sm: "",
                                outlined: "",
                                color: "green",
                                fab: ""
                              },
                              on: {
                                click: function($event) {
                                  _vm.receiptModel = true
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("fa fa-plus")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-badge",
                            {
                              attrs: {
                                bordered: "",
                                color: "error",
                                content: _vm.countComments,
                                overlap: ""
                              }
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    sm: "",
                                    outlined: "",
                                    color: "grey",
                                    fab: ""
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.getComments(_vm.rtg.id)
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("fa fa-comment")])],
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
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Receipt number\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Description\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Method\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Cost\n                                   "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm.rtg.receipts.length > 0
                                  ? [
                                      _vm._l(_vm.rtg.receipts, function(rpt) {
                                        return _c("tr", { key: rpt.id }, [
                                          _c("td", [
                                            _vm._v(_vm._s(rpt.receiptnumber))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(rpt.description))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(rpt.method))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [_vm._v(_vm._s(rpt.amount))])
                                        ])
                                      }),
                                      _vm._v(" "),
                                      _c("tr", [
                                        _c("td", { attrs: { colspan: "3" } }, [
                                          _vm._v("Total Receipted")
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(_vm.totalPaid))
                                        ])
                                      ])
                                    ]
                                  : [
                                      _c("tr", [
                                        _c(
                                          "td",
                                          {
                                            staticClass:
                                              "red--text py-5 px-5 text-center",
                                            attrs: { colspan: "4" }
                                          },
                                          [_vm._v("No receipts found as yet")]
                                        )
                                      ])
                                    ]
                              ],
                              2
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
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
          attrs: { "hide-overlay": "", fullscreen: "", "max-width": "700px" },
          model: {
            value: _vm.receiptModel,
            callback: function($$v) {
              _vm.receiptModel = $$v
            },
            expression: "receiptModel"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("div", [_vm._v("Receipt")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.receiptModel = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("fa fa-times")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Filter By Reference number or Description",
                      outlined: ""
                    },
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
                  }),
                  _vm._v(" "),
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Reference number\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                   Description\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                    Amount\n                                   "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.statements, function(state) {
                                return _c("tr", { key: state.id }, [
                                  _c("td", [
                                    _vm._v(
                                      "\n                                      " +
                                        _vm._s(state.source_reference) +
                                        "\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                                       " +
                                        _vm._s(state.description) +
                                        "\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                                       " +
                                        _vm._s(state.currency) +
                                        "\n                                       " +
                                        _vm._s(state.amount) +
                                        "\n                                    "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      state.status == "PENDING"
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                outlined: "",
                                                small: "",
                                                color: "primary"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.showStatement(
                                                    state
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("USE")]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                ])
                              }),
                              0
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
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
          attrs: { "hide-overlay": "", "max-width": "700px" },
          model: {
            value: _vm.confirmModel,
            callback: function($$v) {
              _vm.confirmModel = $$v
            },
            expression: "confirmModel"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("div", [_vm._v("Confirm")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.confirmModel = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("fa fa-times")])],
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
                    _c("tbody", [
                      _c("tr", [
                        _c("th", [_vm._v("Reference number")]),
                        _c("td", [
                          _vm._v(_vm._s(_vm.statement.referencenumber))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Description")]),
                        _c("td", [_vm._v(_vm._s(_vm.statement.description))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Currency")]),
                        _c("td", [_vm._v(_vm._s(_vm.statement.currency))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Amount")]),
                        _c("td", [_vm._v(_vm._s(_vm.statement.amount))])
                      ])
                    ])
                  ])
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
                      attrs: { outlined: "", color: "red" },
                      on: {
                        click: function($event) {
                          _vm.confirmModel = false
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
                      attrs: { outlined: "", color: "green" },
                      on: { click: _vm.submitStatement }
                    },
                    [_vm._v("Submit")]
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
          attrs: { "hide-overlay": "", "max-width": "700px" },
          model: {
            value: _vm.commentsModel,
            callback: function($$v) {
              _vm.commentsModel = $$v
            },
            expression: "commentsModel"
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
                  _c("v-card-title", [_vm._v("Comments")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-simple-table", [
                        _c(
                          "tbody",
                          [
                            _vm.comments.length > 0
                              ? _vm._l(_vm.comments, function(comment) {
                                  return _c("tr", { key: comment.id }, [
                                    _c("td", [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(comment.comment) +
                                          "\n                                    "
                                      )
                                    ])
                                  ])
                                })
                              : [
                                  _c(
                                    "tr",
                                    {
                                      staticClass: "text-center red--text pa-10"
                                    },
                                    [
                                      _vm._v(
                                        "\n                                       No comments found as yet\n                                   "
                                      )
                                    ]
                                  )
                                ]
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: {
                          outlined: "",
                          label: "Comment",
                          rules: _vm.commentRule
                        },
                        model: {
                          value: _vm.newcomment,
                          callback: function($$v) {
                            _vm.newcomment = $$v
                          },
                          expression: "newcomment"
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
                          attrs: { outlined: "", color: "red" },
                          on: {
                            click: function($event) {
                              _vm.commentsModel = false
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
                          attrs: { outlined: "", color: "green" },
                          on: { click: _vm.saveComment }
                        },
                        [_vm._v("Submit")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/rtgs_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/rtgs_service.js ***!
  \***********************************************/
/*! exports provided: getRtgs, showRtgs, getStatement, submitStatement, getComments, saveComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtgs", function() { return getRtgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showRtgs", function() { return showRtgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatement", function() { return getStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitStatement", function() { return submitStatement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveComment", function() { return saveComment; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getRtgs() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/rtgs/pending');
}
function showRtgs(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/rtgs/show/' + id);
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

/***/ }),

/***/ "./resources/js/views/admin/rtgs.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/admin/rtgs.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rtgs_vue_vue_type_template_id_c939b6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rtgs.vue?vue&type=template&id=c939b6a6& */ "./resources/js/views/admin/rtgs.vue?vue&type=template&id=c939b6a6&");
/* harmony import */ var _rtgs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rtgs.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/rtgs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBadge */ "./node_modules/vuetify/lib/components/VBadge/index.js");
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _rtgs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _rtgs_vue_vue_type_template_id_c939b6a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _rtgs_vue_vue_type_template_id_c939b6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBadge: vuetify_lib_components_VBadge__WEBPACK_IMPORTED_MODULE_4__["VBadge"],VBreadcrumbs: vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_5__["VBreadcrumbs"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_13__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_16__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/rtgs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/rtgs.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/admin/rtgs.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rtgs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./rtgs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/rtgs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rtgs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/rtgs.vue?vue&type=template&id=c939b6a6&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/rtgs.vue?vue&type=template&id=c939b6a6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rtgs_vue_vue_type_template_id_c939b6a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./rtgs.vue?vue&type=template&id=c939b6a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/rtgs.vue?vue&type=template&id=c939b6a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rtgs_vue_vue_type_template_id_c939b6a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rtgs_vue_vue_type_template_id_c939b6a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);