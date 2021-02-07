(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'register',
  mounted: function mounted() {
    this.getTypes();
  },
  data: function data() {
    var _this = this;

    return {
      valid: true,
      show1: false,
      show2: false,
      loading: false,
      errors: {},
      NameRules: [function (v) {
        return !!v || 'Name is required';
      }],
      SurnameRules: [function (v) {
        return !!v || 'Surname is required';
      }],
      PhoneRules: [function (v) {
        return !!v || 'Phone is required';
      }],
      countryRules: [function (v) {
        return !!v || 'Country is required';
      }],
      CompanyRules: [function (v) {
        return !!v || 'Company name is required';
      }],
      typeRules: [function (v) {
        return !!v || 'Select Account Type';
      }],
      cityRules: [function (v) {
        return !!v || 'City is required';
      }],
      EmailRules: [function (v) {
        return !!v || 'Email is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }],
      PasswordRules: [function (v) {
        return !!v || 'Password is required';
      }],
      rules: {
        required: function required(value) {
          return !!value || 'Required.';
        },
        min: function min(v) {
          return v.length >= 8 || 'Min 8 characters';
        },
        passwordMatch: function passwordMatch(v) {
          return (!!v && v) === _this.user.password || "The passwords you entered don't match";
        }
      },
      countrylist: ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'],
      sectorlist: ['Private', 'Government', 'Councils', 'Parastatals', 'Mining', 'Health', 'NGO', 'Other'],
      provincelist: ['Matabeleland South', 'Mashonaland Central', 'Mashonaland West', 'Mashonaland North', 'Mashonaland East', 'Masvingo', 'Midlands', 'Manicaland', 'Bulawayo', 'Harare'],
      user: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        company: '',
        accounttype: '',
        password: '',
        password_confirmation: '',
        province: '',
        district: ''
      },
      snackbar: false,
      message: '',
      color: '',
      types: []
    };
  },
  methods: {
    getTypes: function getTypes() {
      var _this2 = this;

      this.loading = true;
      _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["getTypes"]().then(function (response) {
        _this2.loading = false;
        var list = [];
        response.data.map(function (value, key) {
          list.push(value.name);
        });
        _this2.types = list;
      });
    },
    submitForm: function submitForm() {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        _services_auth_service__WEBPACK_IMPORTED_MODULE_0__["register"](this.user).then(function (response) {
          _this3.$router.push({
            name: 'Login'
          });

          _this3.message = response.data.message;
          _this3.snackbar = true;
          _this3.color = "green";
        })["catch"](function (error) {
          switch (error.response.status) {
            case 422:
              _this3.message = error.response.data.errors.email[0];
              _this3.snackbar = true;
              _this3.color = "red";
              break;

            case 500:
              _this3.message = error.response.data.message;
              _this3.snackbar = true;
              _this3.color = "red";
              break;

            default:
              break;
          }
        });
      }
    }
  },
  computed: {
    computeList: function computeList() {
      var list = [];

      if (this.user.province == 'Matabeleland South') {
        list = ['Beitbridge', 'Bulilima', 'Gwanda', 'Insiza', 'Mangwe', 'Matobo', 'Umzingwane'];
      } else if (this.user.province == 'Bulawayo') {
        list = ['Bulawayo'];
      } else if (this.user.province == 'Mashonaland Central') {
        list = ["Bindura", "Guruve", "Mazowe", "Mbire", "Mount Darwin", "Muzarabani"];
      } else if (this.user.province == 'Mashonaland West') {
        list = ["Chegutu", "Chinhoyi", "Hurungwe", "Kariba", "Makonde", "Mhondoro-Ngezi", "Sanyati", "Zvimba"];
      } else if (this.user.province == 'Mashonaland East') {
        list = ["Chikomba", "Goromonzi", "Marondera", "Mudzi", "Murehwa", "Mutoko", "Seke", "Uzumba-Maramba-Pfungwe"];
      } else if (this.user.province == 'Masvingo') {
        list = ["Bikita", "Chiredzi", "Chivi", "Gutu", "Masvingo", "Mwenezi", "Zaka"];
      } else if (this.user.province == 'Midlands') {
        list = ["Chirumhanzu", "Gokwe North", "Gokwe South", "Gweru", "Kwekwe", "Mberengwa", "Shurugwi", "Zvishavane"];
      } else if (this.user.province == 'Manicaland') {
        list = ["Buhera", "Chimanimani", "Chipinge", "Makoni", "Mutare", "Mutasa", "Nyanga"];
      } else if (this.user.province == 'Harare') {
        list = ['Harare'];
      }

      return list;
    },
    computeTypes: function computeTypes() {
      var list = [];
      this.types.foreach();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26& ***!
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
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "10", "offset-md": "1" } },
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
                            _c("h3", [_vm._v("New Account")])
                          ]),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Name",
                                          outlined: "",
                                          rules: _vm.NameRules
                                        },
                                        model: {
                                          value: _vm.user.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "name", $$v)
                                          },
                                          expression: "user.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Surname",
                                          outlined: "",
                                          rules: _vm.SurnameRules
                                        },
                                        model: {
                                          value: _vm.user.surname,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "surname", $$v)
                                          },
                                          expression: "user.surname"
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
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Email",
                                          outlined: "",
                                          rules: _vm.EmailRules
                                        },
                                        model: {
                                          value: _vm.user.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "email", $$v)
                                          },
                                          expression: "user.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Phone",
                                          outlined: "",
                                          rules: _vm.PhoneRules
                                        },
                                        model: {
                                          value: _vm.user.phone,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "phone", $$v)
                                          },
                                          expression: "user.phone"
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
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          "append-icon": _vm.show1
                                            ? "mdi-eye"
                                            : "mdi-eye-off",
                                          rules: [
                                            _vm.rules.required,
                                            _vm.rules.min
                                          ],
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
                                          value: _vm.user.password,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "password", $$v)
                                          },
                                          expression: "user.password"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          outlined: "",
                                          "append-icon": _vm.show2
                                            ? "mdi-eye"
                                            : "mdi-eye-off",
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
                                          value: _vm.user.password_confirmation,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "password_confirmation",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "user.password_confirmation"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("h3", [_vm._v("Organisation Details")]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Company Name",
                                          outlined: "",
                                          rules: _vm.CompanyRules
                                        },
                                        model: {
                                          value: _vm.user.company,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "company", $$v)
                                          },
                                          expression: "user.company"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.types,
                                          label: "Account Type",
                                          outlined: "",
                                          rules: _vm.typeRules
                                        },
                                        model: {
                                          value: _vm.user.accounttype,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "accounttype",
                                              $$v
                                            )
                                          },
                                          expression: "user.accounttype"
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
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.countrylist,
                                          label: "Country",
                                          outlined: "",
                                          rules: _vm.countryRules
                                        },
                                        model: {
                                          value: _vm.user.country,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "country", $$v)
                                          },
                                          expression: "user.country"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "City",
                                          outlined: "",
                                          rules: _vm.cityRules
                                        },
                                        model: {
                                          value: _vm.user.city,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "city", $$v)
                                          },
                                          expression: "user.city"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.user.country == "Zimbabwe"
                                ? _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.provincelist,
                                              label: "Province",
                                              outlined: "",
                                              rules: _vm.countryRules
                                            },
                                            model: {
                                              value: _vm.user.province,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user,
                                                  "province",
                                                  $$v
                                                )
                                              },
                                              expression: "user.province"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.computeList,
                                              label: "District",
                                              outlined: "",
                                              rules: _vm.countryRules
                                            },
                                            model: {
                                              value: _vm.user.district,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.user,
                                                  "district",
                                                  $$v
                                                )
                                              },
                                              expression: "user.district"
                                            }
                                          })
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
                            "v-card-actions",
                            { staticClass: "d-flex justify-end" },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "red lighten-3 white--text",
                                  attrs: { outlined: "", rounded: "", text: "" }
                                },
                                [
                                  _vm._v(
                                    "\n                        Cancel\n                    "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "green lighten-3 white--text",
                                  attrs: {
                                    outlined: "",
                                    rounded: "",
                                    text: ""
                                  },
                                  on: { click: _vm.submitForm }
                                },
                                [
                                  _vm._v(
                                    "\n                        Submit\n                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-3" }, [
                        _c(
                          "div",
                          { staticClass: "mt-2" },
                          [
                            _c("router-link", { attrs: { to: "signin" } }, [
                              _vm._v("Already got an acount ??")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-2" },
                          [
                            _c("router-link", { attrs: { to: "forgot" } }, [
                              _vm._v("Forgot Passowrd ??")
                            ])
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
        [_vm._v("\n        " + _vm._s(_vm.message) + "         \n        ")]
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

/***/ "./resources/js/views/pages/Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/pages/Register.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=fa417f26& */ "./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=fa417f26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/Register.vue?vue&type=template&id=fa417f26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_fa417f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);