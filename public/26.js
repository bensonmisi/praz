(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bankingdetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/bankingdetails.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      shownotice: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/faqs/sidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/faqs/sidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tutorials_how_register_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/tutorials/how_register.vue */ "./resources/js/components/tutorials/how_register.vue");
/* harmony import */ var _components_tutorials_proof_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tutorials/proof.vue */ "./resources/js/components/tutorials/proof.vue");
/* harmony import */ var _components_tutorials_howmuch_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tutorials/howmuch.vue */ "./resources/js/components/tutorials/howmuch.vue");
/* harmony import */ var _components_tutorials_payment_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tutorials/payment.vue */ "./resources/js/components/tutorials/payment.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    howregister: _components_tutorials_how_register_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    proof: _components_tutorials_proof_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    howmuch: _components_tutorials_howmuch_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    payment: _components_tutorials_payment_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/how_register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/how_register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tutorialDialog: false,
      e6: 1,
      step1: this.$store.state.serverUrl + 'steps/dashboard.jpg',
      step2: this.$store.state.serverUrl + 'steps/document.jpg',
      step3: this.$store.state.serverUrl + 'steps/success_document.jpg',
      step6: this.$store.state.serverUrl + 'steps/invoicing.jpg',
      step4: this.$store.state.serverUrl + 'steps/select_category.jpg',
      step5: this.$store.state.serverUrl + 'steps/select_year.jpg',
      step7: this.$store.state.serverUrl + 'steps/paymentoptions.jpg',
      step8: this.$store.state.serverUrl + 'steps/ecocash.jpg',
      step9: this.$store.state.serverUrl + 'steps/ecocash_complete.jpg'
    };
  },
  methods: {
    complete: function complete() {
      this.tutorialDialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/howmuch.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/howmuch.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      img: this.$store.state.serverUrl + 'img/proof.jpg',
      tutorialDialog: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/payment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/payment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tutorialDialog: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/proof.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/proof.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      img: this.$store.state.serverUrl + 'img/proof.jpg',
      tutorialDialog: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bankingdetails.vue?vue&type=template&id=77e5b732&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/bankingdetails.vue?vue&type=template&id=77e5b732& ***!
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
        "v-card",
        { staticClass: "red lighten-4 mb-5 mt-5", attrs: { flat: "" } },
        [
          _c("v-card-text", [
            _c("p", [
              _vm._v(
                "PLEASE NOTE IF YOU WISH PAY VIA THE BANK EITHER BY DIRECT DEPOSIT,INTERNET BANKING OR  TRANSFERS MAKE SURE TO ENTER YOUR PRAZ NUMBER  AS THE TRANSACTION DESCRIPTION. THIS WILL ALLOW OUR SYSTEM TO AUTOMATICAL IDENTIFY YOUR PAYMENT"
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c(
                "v-btn",
                {
                  attrs: { text: "", color: "primary" },
                  on: {
                    click: function($event) {
                      _vm.shownotice = true
                    }
                  }
                },
                [_vm._v("\n    View Bank Details\n  ")]
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
          attrs: { "max-width": "600" },
          model: {
            value: _vm.shownotice,
            callback: function($$v) {
              _vm.shownotice = $$v
            },
            expression: "shownotice"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Bank Details")]),
              _vm._v(" "),
              _c("v-card-text", [
                _c("p", [
                  _c("b", [
                    _vm._v(
                      "  NON-REFUNDABLE (LOCAL)(For Suppliers Registrations, Tender related fees)"
                    )
                  ]),
                  _c("br"),
                  _vm._v("\n                          PAYMENT INSTRUCTIONS:"),
                  _c("br"),
                  _vm._v(
                    "\n                           BANK NAME: COMMERCIAL BANK OF ZIMBABWE"
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                            ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE"
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                           ACCOUNT NUMBER: 01121064850020"
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                            BRANCH: KWAME NKRUMAH\n                        "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [
                    _vm._v("REFUNDABLE (LOCAL)(For Bid Bond Security)")
                  ]),
                  _c("br"),
                  _vm._v("\n                          PAYMENT INSTRUCTIONS:"),
                  _c("br"),
                  _vm._v(
                    "\n                           BANK NAME: COMMERCIAL BANK OF ZIMBABWE"
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                            ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE"
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                           ACCOUNT NUMBER: 01121064850030"
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                            BRANCH: KWAME NKRUMAH\n                        "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("b", [_vm._v("FCA ACCOUNT (USD DEPOSITS)")]),
                  _c("br"),
                  _vm._v("\n                          PAYMENT INSTRUCTIONS:"),
                  _c("br"),
                  _vm._v(
                    "\n                           BANK NAME: COMMERCIAL BANK OF ZIMBABWE"
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                            ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE"
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                           ACCOUNT NUMBER: 01121064850040"
                  ),
                  _c("br"),
                  _vm._v("\n                            BRANCH: KWAME NKRUMAH"),
                  _c("br"),
                  _vm._v("\n                            BRANCH SORT CODE:6101"),
                  _c("br"),
                  _vm._v(
                    "\n                            SWIFT CODE: COBZZWHAXXX\n                        "
                  )
                ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/faqs/sidebar.vue?vue&type=template&id=9ba5c396&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/faqs/sidebar.vue?vue&type=template&id=9ba5c396& ***!
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
        "v-card",
        [
          _c(
            "v-card-text",
            [
              _c(
                "v-list",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-list-item-group",
                    { attrs: { color: "primary" } },
                    [
                      _c("howregister"),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("proof"),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("howmuch"),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-list-item",
                        { attrs: { link: "", to: { name: "Forgot" } } },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v("I forgot  our login details")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("payment")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/how_register.vue?vue&type=template&id=7c2aaeb7&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/how_register.vue?vue&type=template&id=7c2aaeb7& ***!
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
      _c(
        "v-list-item",
        {
          attrs: { link: "" },
          on: {
            click: function($event) {
              _vm.tutorialDialog = true
            }
          }
        },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [
                _vm._v("How do i register as a supplier")
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
          attrs: { width: "900" },
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
            "v-stepper",
            {
              attrs: { vertical: "" },
              model: {
                value: _vm.e6,
                callback: function($$v) {
                  _vm.e6 = $$v
                },
                expression: "e6"
              }
            },
            [
              _c(
                "v-stepper-step",
                { attrs: { complete: _vm.e6 > 1, step: "1" } },
                [_vm._v("\n      Supplier registration Step\n    ")]
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "1" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step1 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("h5", [_vm._v("Step 1")]),
                        _vm._v(" "),
                        _c("div", [
                          _c("p", [
                            _vm._v(
                              "If this is your first time on our platform please create an account by clicking on register  an once u have successfully created an account  click on login which will redirect you to a dashboard as depicted on the image above"
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "To start the registration process click on  Register category top right corner"
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.e6 = 2
                                }
                              }
                            },
                            [_vm._v("\n        Next >>\n      ")]
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
                "v-stepper-step",
                { attrs: { complete: _vm.e6 > 2, step: "2" } },
                [_vm._v("\n      Account Document Uploads\n    ")]
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "2" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step2 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("h5", [_vm._v("Step 2")]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "The system will display all the required documents depending on the  account type you selected when you where creating your account. Please scan your documents to PDf. If a document is more than 3 pages we just require the first 3 pages"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.e6 = 3
                                }
                              }
                            },
                            [_vm._v("\n        Next >>\n      ")]
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
                "v-stepper-step",
                { attrs: { complete: _vm.e6 > 3, step: "3" } },
                [_vm._v("\n      Documents upload\n    ")]
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "3" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step3 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("div", [
                          _vm._v(
                            "In order to proceed to the next stage please upload all the required documents as per order specified."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.e6 = 4
                                }
                              }
                            },
                            [_vm._v("\n        Next >>\n      ")]
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
              _c("v-stepper-step", { attrs: { step: "4" } }, [
                _vm._v("\n     Category selection\n    ")
              ]),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "4" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step4 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("div", [
                          _vm._v(
                            "Filter and select  your prefered categories for registration, if you are not sure of the category to register  please type words that discribe your line of business. You can add as many categories as possbile on to one invoice"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.e6 = 5
                                }
                              }
                            },
                            [_vm._v("\n        Next >>\n      ")]
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
              _c("v-stepper-step", { attrs: { step: "5" } }, [
                _vm._v(
                  "\n     Select  your preferred currency of trade and year of registration\n    "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "5" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step5 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("div", [
                          _vm._v(
                            "Select the currency you wish to make payment  and also the year of intend to register"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.e6 = 6
                                }
                              }
                            },
                            [_vm._v("\n        Next >>\n      ")]
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
              _c("v-stepper-step", { attrs: { step: "6" } }, [
                _vm._v("\n     Invoice\n    ")
              ]),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "6" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step6 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("div", [
                          _vm._v(
                            "Each time you select a category this system will automatically generate an invoice and You can print the invoice"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.e6 = 7
                                }
                              }
                            },
                            [_vm._v("\n        Next >>\n      ")]
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
              _c("v-stepper-step", { attrs: { step: "7" } }, [
                _vm._v("\n     Payment Option\n    ")
              ]),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "7" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step7 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("div", [
                          _vm._v(
                            "Select your preferred payment option, if your select  ecocash or one money please enter your phone number and  the amount Please note you can only pay in batches of 4000. If you wish to pay using  bank transfer obtain a bank reference number  and use it to claim your transfer"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.e6 = 8
                                }
                              }
                            },
                            [_vm._v("\n        Next >>\n      ")]
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
              _c("v-stepper-step", { attrs: { step: "8" } }, [
                _vm._v("\n     Paying using ecocash\n    ")
              ]),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "8" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step8 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("div", [
                          _vm._v(
                            " if your select  ecocash or one money please enter your phone number and  the amount Please note you can only pay in batches of 4000. If you wish to pay using  bank transfer obtain a bank reference number  and use it to claim your transfer"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  _vm.e6 = 9
                                }
                              }
                            },
                            [_vm._v("\n        Next >>\n      ")]
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
              _c("v-stepper-step", { attrs: { step: "9" } }, [
                _vm._v("\n     Confirming payment\n    ")
              ]),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "9" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-img", { attrs: { src: _vm.step9 } }),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("div", [
                          _vm._v(
                            "Once you have entered your ecocash or onemoney pin please click the I COMPLETED TRANSACTION button to complete the registration"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary", outlined: "" },
                              on: {
                                click: function($event) {
                                  return _vm.complete()
                                }
                              }
                            },
                            [_vm._v("\n      Finish\n      ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/howmuch.vue?vue&type=template&id=358048e8&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/howmuch.vue?vue&type=template&id=358048e8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-list-item",
        {
          attrs: { link: "" },
          on: {
            click: function($event) {
              _vm.tutorialDialog = true
            }
          }
        },
        [
          _c(
            "v-list-item-content",
            [_c("v-list-item-title", [_vm._v("Cost and validity period")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "900" },
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
              _c(
                "v-card-title",
                { staticClass: "blue white--text display-1" },
                [_vm._v("Registration Cost and validity period")]
              ),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "headline" }, [_vm._v("Validity")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Praz registration is valid for a full calender year, mean it doesnt matter  which day or month you  register during the year , all registrations will expire at the end of  each calender year"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "headline" }, [_vm._v("Cost")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Local Suppliers are  required to pay $100 usd  or ZWL8000 per category"
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Foreign Suppliers are  required to pay $750 usd per category"
                  )
                ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/payment.vue?vue&type=template&id=6e354211&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/payment.vue?vue&type=template&id=6e354211& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-list-item",
        {
          attrs: { link: "" },
          on: {
            click: function($event) {
              _vm.tutorialDialog = true
            }
          }
        },
        [
          _c(
            "v-list-item-content",
            [_c("v-list-item-title", [_vm._v("How to make payment")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
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
              _c("v-card-title", { staticClass: "blue white--text subtitle" }, [
                _vm._v("Payment methods")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _c("p", [
                  _vm._v("Our system has the following payment methods")
                ]),
                _vm._v(" "),
                _c("ol", [
                  _c("li", [
                    _c("p", [
                      _c("b", [
                        _vm._v(
                          'Mobile Platforms (ecocash,onemoney) "Local Suppliers"'
                        )
                      ]),
                      _vm._v(
                        " our system is integrated to a mobile platforms enabled gateway. This is the easiest and fast method of payment, the system will require you to enter your mobile wallet number and the amount you wish to pay, PLEASE NOTE CURRENT OUR PLATFORM WILL ASK YOU TO PAY IN BATCHES INLINE WITH THE CURRENT LIMIT ON MOBILE TRANSACTIONS"
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Foreign Suppliers are  required to pay $750 usd per category"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("b", [_vm._v("Bank Payments")]),
                    _vm._v(" "),
                    _c("ul", [
                      _c("li", [
                        _c("b", [_vm._v("ZIPIT:")]),
                        _vm._v(
                          " If you intend to use ZIPIT platform  please make use to get the STAN CODE which is usually the last 6 digits of the transaction reference number. Our system will require this stan code in order to utilize your payment for registration"
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("b", [_vm._v("BANK TRANSFERS:")]),
                        _vm._v(
                          " In order for us to easily identify your transaction  please put your PRAZ number only( starts with PR  obtained on the dashboard after you login) on the discription area when making your payment. You should also call your bank and ask for a reference number  for that transaction which usually starts with  your bank initials"
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("b", [_vm._v("ONLINE PAYMENT GATEWAY")]),
                        _vm._v(
                          " This is a secure online platform that allows  you to pay using VISA or MASTER CARD"
                        )
                      ])
                    ])
                  ])
                ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/proof.vue?vue&type=template&id=c4e2e9e2&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/proof.vue?vue&type=template&id=c4e2e9e2& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
        "v-list-item",
        {
          attrs: { link: "" },
          on: {
            click: function($event) {
              _vm.tutorialDialog = true
            }
          }
        },
        [
          _c(
            "v-list-item-content",
            [
              _c("v-list-item-title", [
                _vm._v("What do i get as proof of registration")
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
          attrs: { width: "900" },
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
              _c("v-img", { attrs: { src: _vm.img } }),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", [
                  _c("p", [
                    _vm._v(
                      "Once a supplier has  successfull registered our system will generate a electronic certificate which can be printed"
                    )
                  ]),
                  _vm._v(" "),
                  _c("h5", [_vm._v("Certificate Features")]),
                  _vm._v(" "),
                  _c("ol", [
                    _c("li", [_vm._v(" Clearly state the name of company")]),
                    _vm._v(" "),
                    _c("li", [_vm._v(" Category name and code ")]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        " Unique Certificate number  which when entered on our verification module the name on the portal should match one on the certificate "
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(
                        "QR code  which can be used to verify authenticity of certificate"
                      )
                    ])
                  ])
                ])
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

/***/ "./resources/js/components/bankingdetails.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/bankingdetails.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bankingdetails_vue_vue_type_template_id_77e5b732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bankingdetails.vue?vue&type=template&id=77e5b732& */ "./resources/js/components/bankingdetails.vue?vue&type=template&id=77e5b732&");
/* harmony import */ var _bankingdetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bankingdetails.vue?vue&type=script&lang=js& */ "./resources/js/components/bankingdetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bankingdetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bankingdetails_vue_vue_type_template_id_77e5b732___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bankingdetails_vue_vue_type_template_id_77e5b732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/bankingdetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/bankingdetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/bankingdetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bankingdetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/babel-loader/lib??ref--11!../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../node_modules/vue-loader/lib??vue-loader-options!./bankingdetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bankingdetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bankingdetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/bankingdetails.vue?vue&type=template&id=77e5b732&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/bankingdetails.vue?vue&type=template&id=77e5b732& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bankingdetails_vue_vue_type_template_id_77e5b732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../node_modules/vue-loader/lib??vue-loader-options!./bankingdetails.vue?vue&type=template&id=77e5b732& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bankingdetails.vue?vue&type=template&id=77e5b732&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bankingdetails_vue_vue_type_template_id_77e5b732___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bankingdetails_vue_vue_type_template_id_77e5b732___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/faqs/sidebar.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/faqs/sidebar.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_vue_vue_type_template_id_9ba5c396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.vue?vue&type=template&id=9ba5c396& */ "./resources/js/components/faqs/sidebar.vue?vue&type=template&id=9ba5c396&");
/* harmony import */ var _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/faqs/sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sidebar_vue_vue_type_template_id_9ba5c396___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sidebar_vue_vue_type_template_id_9ba5c396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__["VDivider"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemGroup"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/faqs/sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/faqs/sidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/faqs/sidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/faqs/sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/faqs/sidebar.vue?vue&type=template&id=9ba5c396&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/faqs/sidebar.vue?vue&type=template&id=9ba5c396& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_9ba5c396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./sidebar.vue?vue&type=template&id=9ba5c396& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/faqs/sidebar.vue?vue&type=template&id=9ba5c396&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_9ba5c396___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_template_id_9ba5c396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tutorials/how_register.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/tutorials/how_register.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _how_register_vue_vue_type_template_id_7c2aaeb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how_register.vue?vue&type=template&id=7c2aaeb7& */ "./resources/js/components/tutorials/how_register.vue?vue&type=template&id=7c2aaeb7&");
/* harmony import */ var _how_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./how_register.vue?vue&type=script&lang=js& */ "./resources/js/components/tutorials/how_register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VStepper */ "./node_modules/vuetify/lib/components/VStepper/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _how_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _how_register_vue_vue_type_template_id_7c2aaeb7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _how_register_vue_vue_type_template_id_7c2aaeb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__["VImg"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemTitle"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VStepper: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__["VStepper"],VStepperContent: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__["VStepperContent"],VStepperStep: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_10__["VStepperStep"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tutorials/how_register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tutorials/how_register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/tutorials/how_register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_how_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./how_register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/how_register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_how_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tutorials/how_register.vue?vue&type=template&id=7c2aaeb7&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/tutorials/how_register.vue?vue&type=template&id=7c2aaeb7& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_how_register_vue_vue_type_template_id_7c2aaeb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./how_register.vue?vue&type=template&id=7c2aaeb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/how_register.vue?vue&type=template&id=7c2aaeb7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_how_register_vue_vue_type_template_id_7c2aaeb7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_how_register_vue_vue_type_template_id_7c2aaeb7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tutorials/howmuch.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/tutorials/howmuch.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _howmuch_vue_vue_type_template_id_358048e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howmuch.vue?vue&type=template&id=358048e8& */ "./resources/js/components/tutorials/howmuch.vue?vue&type=template&id=358048e8&");
/* harmony import */ var _howmuch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howmuch.vue?vue&type=script&lang=js& */ "./resources/js/components/tutorials/howmuch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _howmuch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _howmuch_vue_vue_type_template_id_358048e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _howmuch_vue_vue_type_template_id_358048e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__["VDialog"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tutorials/howmuch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tutorials/howmuch.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/tutorials/howmuch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_howmuch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./howmuch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/howmuch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_howmuch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tutorials/howmuch.vue?vue&type=template&id=358048e8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/tutorials/howmuch.vue?vue&type=template&id=358048e8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_howmuch_vue_vue_type_template_id_358048e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./howmuch.vue?vue&type=template&id=358048e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/howmuch.vue?vue&type=template&id=358048e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_howmuch_vue_vue_type_template_id_358048e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_howmuch_vue_vue_type_template_id_358048e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tutorials/payment.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/tutorials/payment.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_vue_vue_type_template_id_6e354211___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=6e354211& */ "./resources/js/components/tutorials/payment.vue?vue&type=template&id=6e354211&");
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ "./resources/js/components/tutorials/payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_6e354211___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payment_vue_vue_type_template_id_6e354211___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__["VDialog"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tutorials/payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tutorials/payment.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/tutorials/payment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tutorials/payment.vue?vue&type=template&id=6e354211&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/tutorials/payment.vue?vue&type=template&id=6e354211& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_6e354211___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=template&id=6e354211& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/payment.vue?vue&type=template&id=6e354211&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_6e354211___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_6e354211___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tutorials/proof.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/tutorials/proof.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proof_vue_vue_type_template_id_c4e2e9e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proof.vue?vue&type=template&id=c4e2e9e2& */ "./resources/js/components/tutorials/proof.vue?vue&type=template&id=c4e2e9e2&");
/* harmony import */ var _proof_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proof.vue?vue&type=script&lang=js& */ "./resources/js/components/tutorials/proof.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _proof_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _proof_vue_vue_type_template_id_c4e2e9e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _proof_vue_vue_type_template_id_c4e2e9e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__["VDialog"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_6__["VImg"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tutorials/proof.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tutorials/proof.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/tutorials/proof.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proof_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./proof.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/proof.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proof_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tutorials/proof.vue?vue&type=template&id=c4e2e9e2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/tutorials/proof.vue?vue&type=template&id=c4e2e9e2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proof_vue_vue_type_template_id_c4e2e9e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./proof.vue?vue&type=template&id=c4e2e9e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/proof.vue?vue&type=template&id=c4e2e9e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proof_vue_vue_type_template_id_c4e2e9e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_proof_vue_vue_type_template_id_c4e2e9e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);