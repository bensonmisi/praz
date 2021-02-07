(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rtgs/assign.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rtgs/assign.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task_service */ "./resources/js/services/task_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      userDialog: false,
      message: '',
      snackbar: false,
      color: '',
      loading: false,
      users: [],
      filter: ''
    };
  },
  methods: {
    geUsers: function geUsers() {
      var _this = this;

      this.loading = true;
      _services_task_service__WEBPACK_IMPORTED_MODULE_0__["getUsers"]().then(function (response) {
        _this.loading = false;
        _this.users = response.data.data;
        _this.userDialog = true;
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    },
    assignUser: function assignUser(id) {
      var _this2 = this;

      var formdata = new FormData();
      formdata.append('agent', id);
      formdata.append('company', this.company);
      formdata.append('action', 'INVOICE_APPROVAL');
      this.loading = true;
      _services_task_service__WEBPACK_IMPORTED_MODULE_0__["assignUser"](formdata).then(function (response) {
        _this2.loading = false;
        _this2.snackbar = true;
        _this2.color = "green";
        _this2.message = "User successfully  assigned";
        _this2.userDialog = false;

        _this2.$emit('reload');
      })["catch"](function (error) {
        _this2.loading = false;
        _this2.snackbar = true;
        _this2.color = "red";
        _this2.message = error.response.data.message;
      });
    }
  },
  computed: {
    searchUsers: function searchUsers() {
      var _this3 = this;

      return this.users.filter(function (user) {
        return !user.name.toUpperCase().indexOf(_this3.filter.toUpperCase());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rtgs/comments.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rtgs/comments.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task_service */ "./resources/js/services/task_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['identifier'],
  data: function data() {
    return {
      comments: [],
      commentDialog: false,
      loading: false
    };
  },
  methods: {
    getComments: function getComments() {
      var _this = this;

      this.loading = true;
      _services_task_service__WEBPACK_IMPORTED_MODULE_0__["getComments"](this.identifier).then(function (respose) {
        _this.loading = false;
        _this.comments = respose.data.data;
        _this.commentDialog = true;
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.respose.data.message;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/rtgs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/rtgs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rtgs_service */ "./resources/js/services/rtgs_service.js");
/* harmony import */ var _components_rtgs_assign_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/rtgs/assign.vue */ "./resources/js/components/rtgs/assign.vue");
/* harmony import */ var _components_rtgs_comments_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/rtgs/comments.vue */ "./resources/js/components/rtgs/comments.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    assign: _components_rtgs_assign_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    comments: _components_rtgs_comments_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
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
      loading: false,
      snackbar: false,
      color: "",
      message: "",
      invoices: [],
      filter: ''
    };
  },
  methods: {
    getTasks: function getTasks() {
      var _this = this;

      this.loading = true;
      _services_rtgs_service__WEBPACK_IMPORTED_MODULE_0__["getRtgs"]().then(function (response) {
        _this.loading = false;
        _this.invoices = response.data.data;
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    }
  },
  mounted: function mounted() {
    this.getTasks();
  },
  computed: {
    searchInvoice: function searchInvoice() {
      var _this2 = this;

      return this.invoices.filter(function (invoice) {
        return !invoice.name.toUpperCase().indexOf(_this2.filter.toUpperCase());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rtgs/assign.vue?vue&type=template&id=fe41cb16&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rtgs/assign.vue?vue&type=template&id=fe41cb16& ***!
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
      _c(
        "v-btn",
        {
          staticClass: "mt-2",
          attrs: { rounded: "", outlined: "", color: "green" },
          on: { click: _vm.geUsers }
        },
        [_vm._v("Assign")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500px" },
          model: {
            value: _vm.userDialog,
            callback: function($$v) {
              _vm.userDialog = $$v
            },
            expression: "userDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Users")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { outlined: "", label: "Filter User" },
                    model: {
                      value: _vm.filter,
                      callback: function($$v) {
                        _vm.filter = $$v
                      },
                      expression: "filter"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-simple-table", [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("User")]),
                        _c("th", [_vm._v("Action")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.searchUsers, function(user) {
                        return _c("tr", { key: user.id }, [
                          _c("td", [
                            _c("div", [
                              _vm._v(_vm._s(user.name) + _vm._s(user.surname))
                            ]),
                            _vm._v(" "),
                            _c("div", [_vm._v(_vm._s(user.email))])
                          ]),
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
                                    depressed: "",
                                    small: "",
                                    color: "green"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.assignUser(user.id)
                                    }
                                  }
                                },
                                [_vm._v("Assign")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rtgs/comments.vue?vue&type=template&id=7fdaed0c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/rtgs/comments.vue?vue&type=template&id=7fdaed0c& ***!
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
        {
          staticClass: "mt-2",
          attrs: { outlined: "", rounded: "", small: "", color: "green" },
          on: { click: _vm.getComments }
        },
        [_vm._v("Comments")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
          model: {
            value: _vm.commentDialog,
            callback: function($$v) {
              _vm.commentDialog = $$v
            },
            expression: "commentDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _vm._v("Comments"),
                  _c("v-spacer"),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.commentDialog = false
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
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-item-group",
                        { attrs: { multiple: "", "active-class": "" } },
                        [
                          _vm.comments.length > 0
                            ? _vm._l(_vm.comments, function(comment) {
                                return _c("v-list-item", {
                                  key: comment.id,
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var active = ref.active
                                          return [
                                            _c(
                                              "v-list-item-action",
                                              [
                                                _c("v-checkbox", {
                                                  attrs: {
                                                    "input-value": active
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm._f("formatDate")(
                                                        comment.created_at
                                                      )
                                                    )
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-list-item-subtitle", [
                                                  _vm._v(
                                                    _vm._s(comment.comments)
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                })
                              })
                            : [
                                _c(
                                  "v-list-item",
                                  [
                                    _c("v-list-item-content", [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "text-center red--text"
                                        },
                                        [_vm._v("No Comments Found")]
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ]
                        ],
                        2
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
                                "\n                   TImestamp\n                  "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                    Company\n                  "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                    Reg Year\n                  "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                     Total Due\n                  "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                 Status\n                  "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Assigned")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Action")])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.searchInvoice, function(invoice) {
                            return _c("tr", { key: invoice.id }, [
                              _c("td", [_vm._v(_vm._s(invoice.date))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(invoice.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(invoice.year))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(invoice.cost))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(invoice.status))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  invoice.assigned
                                    ? [
                                        _c("div", [
                                          _c("b", [_vm._v("assigned On:")]),
                                          _vm._v(" "),
                                          _c("i", [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("formatDate")(
                                                  invoice.assigned.created_at
                                                )
                                              )
                                            )
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", [
                                          _c("b", [_vm._v("Assigned To:")]),
                                          _vm._v(" "),
                                          _c("i", [
                                            _vm._v(
                                              _vm._s(
                                                invoice.assigned.users.user.name
                                              ) +
                                                _vm._s(
                                                  invoice.assigned.users.user
                                                    .surname
                                                )
                                            )
                                          ])
                                        ])
                                      ]
                                    : [
                                        _c(
                                          "div",
                                          { staticClass: "red--text" },
                                          [_vm._v("PENDING")]
                                        )
                                      ]
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "d-flex" },
                                [
                                  invoice.assigned
                                    ? [
                                        _c("comments", {
                                          attrs: {
                                            identifier: invoice.invoice_number
                                          }
                                        })
                                      ]
                                    : [
                                        _c("assign", {
                                          attrs: { company: invoice.id },
                                          on: { reload: _vm.getTasks }
                                        })
                                      ]
                                ],
                                2
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
                    "\n                  Please wait ....\n                      "
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
            "\n              " +
              _vm._s(_vm.message) +
              "         \n              "
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

/***/ "./resources/js/components/rtgs/assign.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/rtgs/assign.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assign_vue_vue_type_template_id_fe41cb16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assign.vue?vue&type=template&id=fe41cb16& */ "./resources/js/components/rtgs/assign.vue?vue&type=template&id=fe41cb16&");
/* harmony import */ var _assign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assign.vue?vue&type=script&lang=js& */ "./resources/js/components/rtgs/assign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _assign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _assign_vue_vue_type_template_id_fe41cb16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _assign_vue_vue_type_template_id_fe41cb16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_7__["VProgressCircular"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_9__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/rtgs/assign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/rtgs/assign.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/rtgs/assign.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./assign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rtgs/assign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/rtgs/assign.vue?vue&type=template&id=fe41cb16&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/rtgs/assign.vue?vue&type=template&id=fe41cb16& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_template_id_fe41cb16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./assign.vue?vue&type=template&id=fe41cb16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rtgs/assign.vue?vue&type=template&id=fe41cb16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_template_id_fe41cb16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_assign_vue_vue_type_template_id_fe41cb16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/rtgs/comments.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/rtgs/comments.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comments_vue_vue_type_template_id_7fdaed0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.vue?vue&type=template&id=7fdaed0c& */ "./resources/js/components/rtgs/comments.vue?vue&type=template&id=7fdaed0c&");
/* harmony import */ var _comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.vue?vue&type=script&lang=js& */ "./resources/js/components/rtgs/comments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _comments_vue_vue_type_template_id_7fdaed0c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _comments_vue_vue_type_template_id_7fdaed0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemGroup"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemTitle"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_10__["VProgressCircular"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/rtgs/comments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/rtgs/comments.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/rtgs/comments.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./comments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rtgs/comments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/rtgs/comments.vue?vue&type=template&id=7fdaed0c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/rtgs/comments.vue?vue&type=template&id=7fdaed0c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comments_vue_vue_type_template_id_7fdaed0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./comments.vue?vue&type=template&id=7fdaed0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/rtgs/comments.vue?vue&type=template&id=7fdaed0c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comments_vue_vue_type_template_id_7fdaed0c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_comments_vue_vue_type_template_id_7fdaed0c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/services/task_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/task_service.js ***!
  \***********************************************/
/*! exports provided: getUsers, assignUser, getComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignUser", function() { return assignUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function getUsers() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/getUsers');
}
function assignUser(formdata) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('administrator/assignUser', formdata);
}
function getComments(identifier) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/comments/' + identifier);
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
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





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













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBreadcrumbs: vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__["VBreadcrumbs"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__["VProgressCircular"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


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