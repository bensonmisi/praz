(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/reports/finance.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/reports/finance.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/reports_service */ "./resources/js/services/reports_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        text: 'Finance Reports',
        disabled: true,
        href: 'breadcrumbs_link_2'
      }],
      startmenu: false,
      startdate: new Date().toISOString().substr(0, 10),
      startmodal: false,
      endmenu: false,
      enddate: new Date().toISOString().substr(0, 10),
      endmodal: false,
      tabs: null,
      snackbar: false,
      message: '',
      color: '',
      loading: false,
      reportlist: [],
      totalpaidZWL: 0,
      totalpaidUSD: 0,
      totalawaitingUSD: 0,
      totalawaitingZWL: 0,
      statuslist: ['AWAITING', 'PAID'],
      filter: '',
      filteryear: '',
      currency: '',
      currencylist: []
    };
  },
  methods: {
    Retrieve: function Retrieve() {
      var _this = this;

      this.loading = true;
      _services_reports_service__WEBPACK_IMPORTED_MODULE_0__["retrieve"]().then(function (response) {
        _this.loading = false;
        _this.reportlist = response.data.report;
        _this.currencylist = response.data.currencylist;
      })["catch"](function (error) {
        _this.loading = false;
        _this.message = error.response.data.message;
        _this.snackbar = true;
        _this.color = "red";
      });
    },
    getReport: function getReport() {
      var _this2 = this;

      this.loading = true;
      var formData = new FormData();
      formData.append('startdate', this.startdate);
      formData.append('enddate', this.enddate);
      _services_reports_service__WEBPACK_IMPORTED_MODULE_0__["getInvoiceReport"](formData).then(function (response) {
        _this2.loading = false;
        _this2.reportlist = response.data.report;
      })["catch"](function (error) {
        _this2.loading = false;
        _this2.message = error.response.data.message;
        _this2.snackbar = true;
        _this2.color = "red";
      });
    },
    download: function download() {
      var _this3 = this;

      this.loading = true;
      var formData = new FormData();
      formData.append('startdate', this.startdate);
      formData.append('enddate', this.enddate);
      _services_reports_service__WEBPACK_IMPORTED_MODULE_0__["download"](formData).then(function (response) {
        _this3.loading = false;
        var filename = 'file.xlsx';
        var blob = new Blob([response.data], {
          type: 'application/octet-stream'
        });

        if (typeof window.navigator.msSaveBlob !== 'undefined') {
          // IE workaround for "HTML7007: One or more blob URLs were
          // revoked by closing the blob for which they were created.
          // These URLs will no longer resolve as the data backing
          // the URL has been freed."
          window.navigator.msSaveBlob(blob, filename);
        } else {
          var blobURL = window.URL.createObjectURL(blob);
          var tempLink = document.createElement('a');
          tempLink.style.display = 'none';
          tempLink.href = blobURL;
          tempLink.download = filename;
          tempLink.click();
          window.URL.revokeObjectURL(blobURL);
        }
      })["catch"](function (error) {
        _this3.loading = false;
        _this3.message = error.response.data.message;
        _this3.snackbar = true;
        _this3.color = "red";
      });
    }
  },
  mounted: function mounted() {
    this.Retrieve();
  },
  computed: {
    calculateTotals: function calculateTotals() {
      var totalawaitingUSD = 0;
      var totalawaitingZWL = 0;
      var totalpaidUSD = 0;
      var totalpaidZWL = 0;
      this.filterreport.forEach(function (value, key) {
        if (value.status == 'PAID' && value.currency == 'ZWL') {
          totalpaidZWL = totalpaidZWL + value.totalreceipted;
        } else if (value.status == 'AWAITING' && value.currency == 'ZWL') {
          totalawaitingZWL = totalawaitingZWL + value.totalinvoiced;
        } else if (value.status == 'PAID' && value.currency == 'USD') {
          totalpaidUSD = totalpaidUSD + value.totalreceipted;
        } else if (value.status == 'AWAITING' && value.currency == 'ZWL') {
          totalawaitingZWL = totalawaitingZWL + value.totalinvoiced;
        }
      });
      return [totalawaitingUSD, totalawaitingZWL, totalpaidUSD, totalpaidZWL];
    },
    filterreport: function filterreport() {
      var _this4 = this;

      var data = this.reportlist;

      if (this.filter !== '') {
        data = data.filter(function (report) {
          return !report.status.toUpperCase().indexOf(_this4.filter.toUpperCase());
        });
      }

      if (this.currency !== '') {
        data = data.filter(function (report) {
          return !report.currency.toUpperCase().indexOf(_this4.currency.toUpperCase());
        });
      }

      if (this.filteryear !== '') {
        data = data.filter(function (report) {
          return report.expireyear == _this4.filteryear;
        });
      }

      return data;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/reports/finance.vue?vue&type=template&id=10b9705b&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/reports/finance.vue?vue&type=template&id=10b9705b& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
            [_c("v-breadcrumbs", { attrs: { items: _vm.items, large: "" } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mt-5" },
        [
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "5" } },
                    [
                      _c(
                        "v-menu",
                        {
                          ref: "startmenu",
                          attrs: {
                            "close-on-content-click": false,
                            "return-value": _vm.startdate,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "290px"
                          },
                          on: {
                            "update:returnValue": function($event) {
                              _vm.startdate = $event
                            },
                            "update:return-value": function($event) {
                              _vm.startdate = $event
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            label: "Picker Start Date",
                                            outlined: "",
                                            "prepend-icon": "mdi-calendar",
                                            readonly: ""
                                          },
                                          model: {
                                            value: _vm.startdate,
                                            callback: function($$v) {
                                              _vm.startdate = $$v
                                            },
                                            expression: "startdate"
                                          }
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  )
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.startmenu,
                            callback: function($$v) {
                              _vm.startmenu = $$v
                            },
                            expression: "startmenu"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-date-picker",
                            {
                              attrs: { "no-title": "", scrollable: "" },
                              model: {
                                value: _vm.startdate,
                                callback: function($$v) {
                                  _vm.startdate = $$v
                                },
                                expression: "startdate"
                              }
                            },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      _vm.startmenu = false
                                    }
                                  }
                                },
                                [_vm._v("\n        Cancel\n      ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.startmenu.save(
                                        _vm.startdate
                                      )
                                    }
                                  }
                                },
                                [_vm._v("\n        OK\n      ")]
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
                    "v-col",
                    { attrs: { cols: "12", sm: "5" } },
                    [
                      _c(
                        "v-menu",
                        {
                          ref: "endmenu",
                          attrs: {
                            "close-on-content-click": false,
                            "return-value": _vm.enddate,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "290px"
                          },
                          on: {
                            "update:returnValue": function($event) {
                              _vm.enddate = $event
                            },
                            "update:return-value": function($event) {
                              _vm.enddate = $event
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            label: "Picker End Date",
                                            "prepend-icon": "mdi-calendar",
                                            readonly: "",
                                            outlined: ""
                                          },
                                          model: {
                                            value: _vm.enddate,
                                            callback: function($$v) {
                                              _vm.enddate = $$v
                                            },
                                            expression: "enddate"
                                          }
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  )
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.endmenu,
                            callback: function($$v) {
                              _vm.endmenu = $$v
                            },
                            expression: "endmenu"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-date-picker",
                            {
                              attrs: { "no-title": "", scrollable: "" },
                              model: {
                                value: _vm.enddate,
                                callback: function($$v) {
                                  _vm.enddate = $$v
                                },
                                expression: "enddate"
                              }
                            },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      _vm.endmenu = false
                                    }
                                  }
                                },
                                [_vm._v("\n        Cancel\n      ")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.endmenu.save(_vm.enddate)
                                    }
                                  }
                                },
                                [_vm._v("\n        OK\n      ")]
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
                    "v-col",
                    { attrs: { cols: "12", sm: "2" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            outlined: "",
                            color: "green white--text",
                            "x-large": ""
                          },
                          on: { click: _vm.getReport }
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mt-10" },
        [
          _c("v-card-text", [
            _c(
              "div",
              [
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      { attrs: { sm: "4" } },
                      [
                        _c("v-select", {
                          attrs: {
                            outlined: "",
                            label: "Filter By Status",
                            items: _vm.statuslist
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
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { sm: "4" } },
                      [
                        _c("v-select", {
                          attrs: {
                            outlined: "",
                            label: "Filter By Currency",
                            items: _vm.currencylist,
                            "item-text": "name",
                            "item-value": "name"
                          },
                          model: {
                            value: _vm.currency,
                            callback: function($$v) {
                              _vm.currency = $$v
                            },
                            expression: "currency"
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
                        _c("v-text-field", {
                          attrs: { outlined: "", label: "Filter By Year" },
                          model: {
                            value: _vm.filteryear,
                            callback: function($$v) {
                              _vm.filteryear = $$v
                            },
                            expression: "filteryear"
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
              "div",
              [
                _c(
                  "v-row",
                  [
                    _c(
                      "v-col",
                      { attrs: { sm: "3" } },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [_vm._v("Total PAID USD")]),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _vm._v(
                                "\n                               " +
                                  _vm._s(_vm.calculateTotals[2]) +
                                  "\n                           "
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
                      "v-col",
                      { attrs: { sm: "3" } },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [_vm._v("Total PAID ZWL")]),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _vm._v(
                                "\n                               " +
                                  _vm._s(_vm.calculateTotals[3]) +
                                  "\n                           "
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
                      "v-col",
                      { attrs: { sm: "3" } },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [_vm._v("Total AWAITING USD")]),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _vm._v(
                                "\n                               " +
                                  _vm._s(_vm.calculateTotals[0]) +
                                  "\n                           "
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
                      "v-col",
                      { attrs: { sm: "3" } },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [_vm._v("Total AWAITING ZWL")]),
                            _vm._v(" "),
                            _c("v-card-text", [
                              _vm._v(
                                "\n                               " +
                                  _vm._s(_vm.calculateTotals[1]) +
                                  "\n                           "
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
              ],
              1
            ),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                [
                  _vm.filterreport.length > 0
                    ? _c(
                        "v-btn",
                        {
                          attrs: { fab: "", color: "green" },
                          on: { click: _vm.download }
                        },
                        [_c("v-icon", [_vm._v("fa fa-download")])],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("v-simple-table", [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [
                          _vm._v(
                            "\n                      Invoice date\n                  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            "\n                      Invoice No\n                  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            "\n                     Year\n                  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            "\n                     Status\n                  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            "\n                      Currency\n                  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            "\n                     Invoice Total\n                  "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Total Receipt")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Balance")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.filterreport, function(report) {
                        return _c("tr", { key: report.id }, [
                          _c("td", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(report.invoicedate) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(report.invoice_number) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(report.expireyear) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(report.status) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(report.currency) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(report.totalinvoiced) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(report.totalreceipted) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(
                                  report.totalinvoiced - report.totalreceipted
                                ) +
                                "\n                  "
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ],
                1
              )
            ])
          ])
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

/***/ "./resources/js/services/reports_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/reports_service.js ***!
  \**************************************************/
/*! exports provided: retrieve, getInvoiceReport, download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieve", function() { return retrieve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInvoiceReport", function() { return getInvoiceReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function retrieve() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/reports/invoices');
}
function getInvoiceReport(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('administrator/reports/finance/invoices', data);
}
function download(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('administrator/reports/finance/download', data, {
    responseType: 'blob'
  });
}

/***/ }),

/***/ "./resources/js/views/admin/reports/finance.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/admin/reports/finance.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finance_vue_vue_type_template_id_10b9705b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finance.vue?vue&type=template&id=10b9705b& */ "./resources/js/views/admin/reports/finance.vue?vue&type=template&id=10b9705b&");
/* harmony import */ var _finance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/reports/finance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _finance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _finance_vue_vue_type_template_id_10b9705b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _finance_vue_vue_type_template_id_10b9705b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBreadcrumbs: vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__["VBreadcrumbs"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_11__["VMenu"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/reports/finance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/reports/finance.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/reports/finance.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./finance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/reports/finance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/reports/finance.vue?vue&type=template&id=10b9705b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/reports/finance.vue?vue&type=template&id=10b9705b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finance_vue_vue_type_template_id_10b9705b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./finance.vue?vue&type=template&id=10b9705b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/reports/finance.vue?vue&type=template&id=10b9705b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finance_vue_vue_type_template_id_10b9705b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finance_vue_vue_type_template_id_10b9705b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);