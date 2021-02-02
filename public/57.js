(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/registration.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/registration.vue?vue&type=script&lang=js& ***!
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
    showTutorial: function showTutorial() {
      if (localStorage.getItem('registration_tutorial') == null && !localStorage.getItem('registration_tutorial')) {
        this.tutorialDialog = true;
      }
    },
    complete: function complete() {
      localStorage.setItem('registration_tutorial', true);
      this.tutorialDialog = false;
    }
  },
  mounted: function mounted() {
    this.showTutorial();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/accountsettings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/accountsettings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dashboard_service */ "./resources/js/services/dashboard_service.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['show'],
  data: function data() {
    var _ref;

    return _ref = {
      countrylist: ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'],
      sectorlist: ['Private', 'Government', 'Councils', 'Parastatals', 'Mining', 'Health', 'NGO', 'Other'],
      provincelist: ['Matabeleland South', 'Mashonaland Central', 'Mashonaland West', 'Matabeleland North', 'Mashonaland East', 'Masvingo', 'Midlands', 'Manicaland', 'Bulawayo', 'Harare'],
      typelist: this.$store.state.types,
      dialog: this.show,
      countryRules: [function (v) {
        return !!v || 'Country is required';
      }],
      addressRules: [function (v) {
        return !!v || 'Address is required';
      }],
      emailRules: [function (v) {
        return !!v || 'Emails is required';
      }],
      phoneRules: [function (v) {
        return !!v || 'Phone is required';
      }],
      typeRules: [function (v) {
        return !!v || 'Select Account Type';
      }],
      cityRules: [function (v) {
        return !!v || 'City is required';
      }]
    }, _defineProperty(_ref, "typeRules", [function (v) {
      return !!v || 'is required';
    }]), _defineProperty(_ref, "user", {
      city: '',
      country: '',
      accounttype: '',
      province: '',
      district: '',
      email: '',
      phone: '',
      address: ''
    }), _defineProperty(_ref, "valid", true), _defineProperty(_ref, "loading", false), _defineProperty(_ref, "snackbar", false), _defineProperty(_ref, "color", ''), _defineProperty(_ref, "message", ''), _ref;
  },
  methods: {
    update: function update() {
      var _this = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["updateProfile"](this.user).then(function (response) {
          _this.loading = false;

          _this.$emit('reload');
        })["catch"](function (error) {
          _this.loading = false;
          _this.message = error.response.data.message;
          _this.snackbar = true;
          _this.color = "red";
        });
      }
    }
  },
  computed: {
    computeList: function computeList() {
      var list = [];

      if (this.user.province == 'Matabeleland South') {
        list = ['Beitbridge', 'Bulilima', 'Gwanda', 'Insiza', 'Mangwe', 'Matobo', 'Umzingwane'];
      } else if (this.user.province == 'Matabeleland North') {
        list = ['Binga', 'Bubi', 'Hwange', 'Lupane', 'Nkayi', 'Tsholotsho', 'Umguza'];
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
    accounttypes: function accounttypes() {
      return this.$store.state.types;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/awaiting/list.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/awaiting/list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue */ "./resources/js/components/user/awaiting/show.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['invoices'],
  components: {
    show: _show_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/awaiting/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/awaiting/show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/invoicing_service */ "./resources/js/services/invoicing_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['inv'],
  data: function data() {
    return {
      message: '',
      color: '',
      snackbar: false,
      loading: false,
      btnloading: false,
      transfers: [],
      transfersDialog: false,
      updateDialog: false,
      refnumber: '',
      id: '',
      refnumberRule: [function (v) {
        return !!v || 'Reference number required';
      }]
    };
  },
  methods: {
    processAwaiting: function processAwaiting() {
      var _this = this;

      var formData = new FormData();
      this.loading = true;
      formData.append('invoice_number', this.inv.invoice_number);
      _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["processAwaiting"](formData).then(function (response) {
        _this.loading = false;
        _this.transfers = response.data.data;

        if (response.data.message == 'INSUFFICIENT') {
          _this.transfersDialog = true;
        } else {
          _this.snackbar = true;
          _this.color = "green";
          _this.message = "Invoice successfully Proceed";
          location.reload();
        }
      })["catch"](function (error) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "red";
        _this.message = error.response.data.message;
      });
    },
    editDialog: function editDialog(id) {
      this.id = id;
      this.updateDialog = true;
    },
    updateReference: function updateReference() {
      var _this2 = this;

      if (this.$refs.refform.validate()) {
        var formdata = new FormData();
        formdata.append('id', this.id);
        formdata.append('invoice_number', this.inv.invoice_number);
        formdata.append('refnumber', this.refnumber);
        this.loading = true;
        _services_invoicing_service__WEBPACK_IMPORTED_MODULE_0__["updateReference"](formdata).then(function (response) {
          _this2.loading = false;
          _this2.transfers = response.data.data;

          if (response.data.message == 'INSUFFICIENT') {
            _this2.transfersDialog = true;
          } else {
            _this2.snackbar = true;
            _this2.color = "green";
            _this2.message = "Invoice successfully Proceed";
            location.reload();
          }
        })["catch"](function (error) {
          _this2.loading = false;
          _this2.snackbar = true;
          _this2.color = "red";
          _this2.message = error.response.data.message;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/messages.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/messages.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
  computed: {
    getMessages: function getMessages() {
      return this.$store.state.messages;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/registered/list.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/registered/list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/dashboard_service */ "./resources/js/services/dashboard_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['registrations'],
  data: function data() {
    return {
      currentyear: new Date().getFullYear(),
      snackbar: false,
      message: '',
      color: '',
      loading: false
    };
  },
  methods: {
    downloadCertificate: function downloadCertificate(id) {
      var _this = this;

      this.loading = true;
      _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["downloadCertificate"](id).then(function (response) {
        _this.loading = false;
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'certificate.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      })["catch"](function (error) {
        _this.loading = false;
        _this.message = error.response.data.message;
        _this.snackbar = true;
        _this.color = "red";
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dashboard_service */ "./resources/js/services/dashboard_service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _components_user_accountsettings_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/accountsettings.vue */ "./resources/js/components/user/accountsettings.vue");
/* harmony import */ var _components_bankingdetails_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/bankingdetails.vue */ "./resources/js/components/bankingdetails.vue");
/* harmony import */ var _components_user_awaiting_list_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user/awaiting/list.vue */ "./resources/js/components/user/awaiting/list.vue");
/* harmony import */ var _components_user_registered_list_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/user/registered/list.vue */ "./resources/js/components/user/registered/list.vue");
/* harmony import */ var _components_user_messages_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/user/messages.vue */ "./resources/js/components/user/messages.vue");
/* harmony import */ var _components_faqs_sidebar_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/faqs/sidebar.vue */ "./resources/js/components/faqs/sidebar.vue");
/* harmony import */ var _components_tutorials_registration_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tutorials/registration.vue */ "./resources/js/components/tutorials/registration.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      role: '',
      company: '',
      regnumber: '',
      loading: false,
      snackbar: false,
      message: '',
      accountsettingsDialog: false,
      color: '',
      awaitinginvoices: [],
      pendinginvoices: [],
      registrations: []
    };
  },
  components: {
    accountsettings: _components_user_accountsettings_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    bankindetails: _components_bankingdetails_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    awaiting: _components_user_awaiting_list_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    registered: _components_user_registered_list_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    messages: _components_user_messages_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    faqs: _components_faqs_sidebar_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    registationtutorial: _components_tutorials_registration_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  mounted: function mounted() {
    this.profile();
    this.dashboard();
  },
  methods: {
    profile: function profile() {
      var company = _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["getCompany"]();
      this.role = company.token_scope;
      this.company = company.user.user.company;
      this.regnumber = company.user.user.regnumber;
    },
    dashboard: function dashboard() {
      var _this = this;

      this.loading = true;

      _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["getDashboard"]().then(function (response) {
        _this.loading = false;

        _this.$store.dispatch('setCompanyDocuments', response.data.data.documents);

        _this.$store.dispatch('setCategorylist', response.data.data.category);

        _this.$store.dispatch('setRegyear', response.data.data.years);

        _this.$store.dispatch('setCurrencylist', response.data.data.currency);

        _this.$store.dispatch('setTypes', response.data.data.types);

        _this.$store.dispatch('setMessages', response.data.data.messages);

        _this.awaitinginvoices = response.data.data.awaiting;
        _this.pendinginvoices = response.data.data.pending;
        _this.registrations = response.data.data.registrations;

        if (response.data.data.profile.accounttype == '' || response.data.data.profile.country == '' || response.data.data.profile.contacts == null) {
          _this.accountsettingsDialog = true;
        } else {
          _this.accountsettingsDialog = false;
        }
      })["catch"](function (error) {
        _this.snackbar = true;
        _this.message = error;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/registration.vue?vue&type=template&id=6503d384&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tutorials/registration.vue?vue&type=template&id=6503d384& ***!
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
        "v-dialog",
        {
          attrs: { width: "900", persistent: "" },
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
                          _vm._v(
                            "\n              To start the registration process click on  Register category top right corner \n          "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/accountsettings.vue?vue&type=template&id=19b13c52&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/accountsettings.vue?vue&type=template&id=19b13c52& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
            persistent: "",
            width: "700"
          },
          model: {
            value: _vm.show,
            callback: function($$v) {
              _vm.show = $$v
            },
            expression: "show"
          }
        },
        [
          _c(
            "v-card",
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
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary", flat: "" } },
                    [
                      _c("v-toolbar-title", [
                        _vm._v(" Update Company Profile")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-toolbar-items",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { dark: "", color: "green" },
                              on: { click: _vm.update }
                            },
                            [_vm._v("\n        Update\n        ")]
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
                                            _vm.$set(_vm.user, "province", $$v)
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
                                            _vm.$set(_vm.user, "district", $$v)
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
                            : _vm._e(),
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
                                      items: _vm.accounttypes,
                                      label: "Account Type",
                                      "item-value": "id",
                                      "item-text": "name",
                                      outlined: "",
                                      rules: _vm.typeRules
                                    },
                                    model: {
                                      value: _vm.user.accounttype,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "accounttype", $$v)
                                      },
                                      expression: "user.accounttype"
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
                                      label: "Emails",
                                      outlined: "",
                                      rules: _vm.emailRules
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
                                      label: "Phones",
                                      outlined: "",
                                      rules: _vm.phoneRules
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "address",
                                      outlined: "",
                                      rules: _vm.addressRules
                                    },
                                    model: {
                                      value: _vm.user.address,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "address", $$v)
                                      },
                                      expression: "user.address"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/awaiting/list.vue?vue&type=template&id=937b5c70&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/awaiting/list.vue?vue&type=template&id=937b5c70& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.invoices.length
        ? [
            _c(
              "v-card",
              [
                _c(
                  "v-card-title",
                  { staticClass: "cyan lighten-1 white--text" },
                  [
                    _vm._v(
                      "\n                      Invoices Awaiting Verification\n                  "
                    )
                  ]
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
                        _vm._l(_vm.invoices, function(inv) {
                          return _c("tr", { key: inv.id }, [
                            _c("td", [_vm._v(_vm._s(inv.invoice_number))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(inv.total))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(inv.receipted))]),
                            _vm._v(" "),
                            _c("td", [_c("show", { attrs: { inv: inv } })], 1)
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/awaiting/show.vue?vue&type=template&id=51db34a7&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/awaiting/show.vue?vue&type=template&id=51db34a7& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c(
        "v-btn",
        {
          attrs: {
            outlined: "",
            color: "green",
            loading: _vm.btnloading,
            rounded: ""
          },
          on: { click: _vm.processAwaiting }
        },
        [_vm._v("Verify")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "hide-overlay": "", persistent: "", width: "500" },
          model: {
            value: _vm.transfersDialog,
            callback: function($$v) {
              _vm.transfersDialog = $$v
            },
            expression: "transfersDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Bank Reference Numbers")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("div", { staticClass: "red white--text pa-5" }, [
                    _c("div", [_vm._v("Reference numbers was not found")]),
                    _vm._v(" "),
                    _c("ol", [
                      _c("li", [
                        _vm._v(
                          "Please contact your bank and ask for a reference number that usually starts with the bank initials eg NEDBP20027A01807 or CABSP20027A02060"
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "If you are registering for a foreign company  please attach a visible proof of  payment"
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "If you paid using ZIPIT  please call your bank and ask of 6 digit stan code for your transaction"
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.transfers.length
                    ? [
                        _c("v-simple-table", { staticClass: "mt-4" }, [
                          _c("thead", [
                            _c("tr", [
                              _c("th", [_vm._v("Reference Number")]),
                              _vm._v(" "),
                              _c("th")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.transfers, function(tran) {
                              return _c("tr", { key: tran.id }, [
                                _c("td", [
                                  _c("div", [
                                    _vm._v(_vm._s(tran.referencenumber))
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "small" }, [
                                    _vm._v(_vm._s(tran.status))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    tran.status == "PENDING"
                                      ? _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              outlined: "",
                                              rounded: "",
                                              color: "blue"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editDialog(tran.id)
                                              }
                                            }
                                          },
                                          [_vm._v("Edit")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ])
                            }),
                            0
                          )
                        ])
                      ]
                    : [
                        _c(
                          "v-btn",
                          {
                            staticClass: "green",
                            attrs: { rounded: "", outlined: "" },
                            on: {
                              click: function($event) {
                                return _vm.editDialog()
                              }
                            }
                          },
                          [_vm._v("Add Bank Reference")]
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "300" },
          model: {
            value: _vm.updateDialog,
            callback: function($$v) {
              _vm.updateDialog = $$v
            },
            expression: "updateDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-form",
                { ref: "refform", attrs: { "lazy-validation": "" } },
                [
                  _c("v-card-title", [_vm._v("Update Ref Number")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        attrs: { outlined: "", rules: _vm.refnumberRule },
                        model: {
                          value: _vm.refnumber,
                          callback: function($$v) {
                            _vm.refnumber = $$v
                          },
                          expression: "refnumber"
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
                          attrs: { rounded: "", outlined: "", color: "red" },
                          on: {
                            click: function($event) {
                              _vm.updateDialog = false
                            }
                          }
                        },
                        [_vm._v(" Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { rounded: "", outlined: "", color: "green" },
                          on: { click: _vm.updateReference }
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
                    "\n                 Please wait ....\n                     "
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
          attrs: { timeout: "3000", color: _vm.color, top: "", right: "" },
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
            "\n             " + _vm._s(_vm.message) + "         \n             "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/messages.vue?vue&type=template&id=82554256&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/messages.vue?vue&type=template&id=82554256& ***!
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
        "v-card",
        { staticClass: "mt-4" },
        [
          _c(
            "v-card-title",
            [
              _c("v-icon", [_vm._v("fa fa-envelope")]),
              _vm._v(" "),
              _c("div", { staticClass: "ml-2" }, [_vm._v("inbox")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-chip", { staticClass: "ma-2" }, [
                _vm._v(" " + _vm._s(_vm.getMessages.length) + " ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            _vm._l(_vm.getMessages, function(msg) {
              return _c(
                "v-list-item",
                { key: msg.id },
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-subtitle", {
                        domProps: { textContent: _vm._s(msg.message) }
                      }),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", {
                        domProps: { textContent: _vm._s(msg.created_at) }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-action",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            small: "",
                            outlined: "",
                            rounded: "",
                            to: { name: msg.action }
                          }
                        },
                        [_vm._v("\n        Open\n      ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/registered/list.vue?vue&type=template&id=86cf31dc&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/registered/list.vue?vue&type=template&id=86cf31dc& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { flat: "" } },
        [
          _c("v-card-title", { staticClass: "green lighten-4 mt-4" }, [
            _c("span", [_vm._v("Registered Supplier Categories")])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                { staticClass: " hidden-sm-and-down" },
                [
                  _c("v-col", { attrs: { sm: "4" } }, [
                    _c("div", { staticClass: "black--text font-weight-bold" }, [
                      _vm._v("Category")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "2" } }, [
                    _c("div", { staticClass: "black--text font-weight-bold" }, [
                      _vm._v("Year")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "2" } }, [
                    _c("div", { staticClass: "black--text font-weight-bold" }, [
                      _vm._v("Status")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", { attrs: { sm: "2" } })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _vm.registrations.length > 0
                ? _c(
                    "div",
                    _vm._l(_vm.registrations, function(reg) {
                      return _c(
                        "div",
                        { key: reg.id },
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-col", { attrs: { sm: "4" } }, [
                                reg
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "black--text font-weight-bold"
                                      },
                                      [_vm._v(_vm._s(reg.category.code))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                reg
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          " text-xs hidden-sm-and-down"
                                      },
                                      [_vm._v(_vm._s(reg.category.name))]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { sm: "2" } }, [
                                _c("div", [_vm._v(_vm._s(reg.expire_year))])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { sm: "2" } }, [
                                _c("span", { attrs: { small: "" } }, [
                                  _vm._v(
                                    "\r\n                      " +
                                      _vm._s(reg.status) +
                                      "\r\n                    "
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("v-col", { attrs: { sm: "2" } }, [
                                reg.status == "APPROVED"
                                  ? _c(
                                      "div",
                                      { staticClass: "d-flex justify-center" },
                                      [
                                        reg.expire_year == _vm.currentyear
                                          ? _c(
                                              "div",
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass:
                                                      "blue white--text hidden-sm-and-down",
                                                    attrs: {
                                                      rounded: "",
                                                      depressed: ""
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.downloadCertificate(
                                                          reg.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Download")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass:
                                                      "blue white--text hidden-md-and-up",
                                                    attrs: {
                                                      rounded: "",
                                                      icon: ""
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.downloadCertificate(
                                                          reg.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("v-icon", [
                                                      _vm._v("fa fa-download")
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _c(
                                              "div",
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { color: "red" } },
                                                  [_vm._v("fa fa-lock")]
                                                ),
                                                _vm._v(
                                                  " Locked\r\n                          "
                                                )
                                              ],
                                              1
                                            )
                                      ]
                                    )
                                  : reg.status == "PENDING"
                                  ? _c("div", { staticClass: "red--text" }, [
                                      _vm._v(
                                        "\r\n                             Awaiting Document Verification    \r\n                          "
                                      )
                                    ])
                                  : _vm._e()
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
                : _c("div", [
                    _c("div", { staticClass: "red--text text-center pa-10" }, [
                      _vm._v(
                        "No registrations found for the current year.Please note all registration for previous years have expire please  click button below to register your prefered categories "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: " d-flex justify-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { rounded: "", color: "green", small: "" },
                            on: { click: _vm.startRegistration }
                          },
                          [_vm._v("Register now")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Dashboard.vue?vue&type=template&id=6ba467ef&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/user/Dashboard.vue?vue&type=template&id=6ba467ef& ***!
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
        { staticClass: "white", attrs: { fluid: "" } },
        [
          _c(
            "div",
            { staticClass: "d-flex justify-between" },
            [
              _c("div", [
                _c("div", { staticClass: "display-1 hidden-sm-and-down" }, [
                  _vm._v(_vm._s(_vm.company) + " ")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: " font-weight-bolder hidden-md-and-up" },
                  [_vm._v(_vm._s(_vm.company))]
                ),
                _vm._v(" "),
                _c("div", [_vm._v(_vm._s(_vm.regnumber))])
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: " hidden-sm-and-down",
                      attrs: {
                        depressed: "",
                        color: "primary",
                        "x-large": "",
                        link: "",
                        to: { name: "Registration_Documents" }
                      }
                    },
                    [
                      _vm._v(
                        "\n                   Register Category\n                   "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: " hidden-md-and-up",
                      attrs: {
                        depressed: "",
                        color: "primary",
                        small: "",
                        rounded: "",
                        link: "",
                        to: { name: "Registration_Documents" }
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Register Category\n                   "
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
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "8" } },
                [
                  _c("bankindetails"),
                  _vm._v(" "),
                  _c("awaiting", { attrs: { invoices: _vm.awaitinginvoices } }),
                  _vm._v(" "),
                  _c("registered", {
                    attrs: { registrations: _vm.registrations }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "4" } },
                [
                  _vm.pendinginvoices.length
                    ? [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [
                              _vm._v(
                                "\n                     Incomplete Invoice\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      "x-large": "",
                                      outlined: "",
                                      color: "red",
                                      link: "",
                                      to: { name: "Registration_Documents" },
                                      block: ""
                                    }
                                  },
                                  [_vm._v("Continue")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _c("messages"),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5" }, [_c("faqs")], 1)
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("accountsettings", {
        attrs: { show: _vm.accountsettingsDialog },
        on: { reload: _vm.dashboard }
      }),
      _vm._v(" "),
      _c("registationtutorial"),
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
                    "\n                   Please wait ....\n                       "
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
            "\n               " +
              _vm._s(_vm.message) +
              "         \n               "
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

/***/ "./resources/js/components/tutorials/registration.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/tutorials/registration.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_vue_vue_type_template_id_6503d384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.vue?vue&type=template&id=6503d384& */ "./resources/js/components/tutorials/registration.vue?vue&type=template&id=6503d384&");
/* harmony import */ var _registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.vue?vue&type=script&lang=js& */ "./resources/js/components/tutorials/registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VStepper */ "./node_modules/vuetify/lib/components/VStepper/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registration_vue_vue_type_template_id_6503d384___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registration_vue_vue_type_template_id_6503d384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__["VImg"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VStepper: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_9__["VStepper"],VStepperContent: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_9__["VStepperContent"],VStepperStep: vuetify_lib_components_VStepper__WEBPACK_IMPORTED_MODULE_9__["VStepperStep"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tutorials/registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tutorials/registration.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/tutorials/registration.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tutorials/registration.vue?vue&type=template&id=6503d384&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/tutorials/registration.vue?vue&type=template&id=6503d384& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_6503d384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=template&id=6503d384& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tutorials/registration.vue?vue&type=template&id=6503d384&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_6503d384___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_6503d384___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/accountsettings.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/user/accountsettings.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accountsettings_vue_vue_type_template_id_19b13c52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accountsettings.vue?vue&type=template&id=19b13c52& */ "./resources/js/components/user/accountsettings.vue?vue&type=template&id=19b13c52&");
/* harmony import */ var _accountsettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accountsettings.vue?vue&type=script&lang=js& */ "./resources/js/components/user/accountsettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _accountsettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _accountsettings_vue_vue_type_template_id_19b13c52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _accountsettings_vue_vue_type_template_id_19b13c52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_9__["VProgressCircular"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbar"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbarItems"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/accountsettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/accountsettings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/accountsettings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountsettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./accountsettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/accountsettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountsettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/accountsettings.vue?vue&type=template&id=19b13c52&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/user/accountsettings.vue?vue&type=template&id=19b13c52& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountsettings_vue_vue_type_template_id_19b13c52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./accountsettings.vue?vue&type=template&id=19b13c52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/accountsettings.vue?vue&type=template&id=19b13c52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountsettings_vue_vue_type_template_id_19b13c52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_accountsettings_vue_vue_type_template_id_19b13c52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/awaiting/list.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/user/awaiting/list.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_937b5c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=937b5c70& */ "./resources/js/components/user/awaiting/list.vue?vue&type=template&id=937b5c70&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/user/awaiting/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_937b5c70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_937b5c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/awaiting/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/awaiting/list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/user/awaiting/list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/awaiting/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/awaiting/list.vue?vue&type=template&id=937b5c70&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/user/awaiting/list.vue?vue&type=template&id=937b5c70& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_937b5c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=937b5c70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/awaiting/list.vue?vue&type=template&id=937b5c70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_937b5c70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_937b5c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/awaiting/show.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/user/awaiting/show.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_51db34a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=51db34a7& */ "./resources/js/components/user/awaiting/show.vue?vue&type=template&id=51db34a7&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/user/awaiting/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_51db34a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_51db34a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__["VProgressCircular"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/awaiting/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/awaiting/show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/user/awaiting/show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/awaiting/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/awaiting/show.vue?vue&type=template&id=51db34a7&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/user/awaiting/show.vue?vue&type=template&id=51db34a7& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_51db34a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=51db34a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/awaiting/show.vue?vue&type=template&id=51db34a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_51db34a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_51db34a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/messages.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/user/messages.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages_vue_vue_type_template_id_82554256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.vue?vue&type=template&id=82554256& */ "./resources/js/components/user/messages.vue?vue&type=template&id=82554256&");
/* harmony import */ var _messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages.vue?vue&type=script&lang=js& */ "./resources/js/components/user/messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _messages_vue_vue_type_template_id_82554256___WEBPACK_IMPORTED_MODULE_0__["render"],
  _messages_vue_vue_type_template_id_82554256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_8__["VListItemSubtitle"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/messages.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/messages.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/user/messages.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./messages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/messages.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/messages.vue?vue&type=template&id=82554256&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/user/messages.vue?vue&type=template&id=82554256& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_template_id_82554256___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./messages.vue?vue&type=template&id=82554256& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/messages.vue?vue&type=template&id=82554256&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_template_id_82554256___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messages_vue_vue_type_template_id_82554256___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/registered/list.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/user/registered/list.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_86cf31dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=86cf31dc& */ "./resources/js/components/user/registered/list.vue?vue&type=template&id=86cf31dc&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/components/user/registered/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_86cf31dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_86cf31dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/registered/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/registered/list.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/registered/list.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/registered/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/registered/list.vue?vue&type=template&id=86cf31dc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/user/registered/list.vue?vue&type=template&id=86cf31dc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_86cf31dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=86cf31dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/registered/list.vue?vue&type=template&id=86cf31dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_86cf31dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_86cf31dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/dashboard_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/dashboard_service.js ***!
  \****************************************************/
/*! exports provided: getDashboard, uploadDocument, updateProfile, downloadCertificate, claimReceipt, confirmReceipt, verify, updateREF */
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

/***/ "./resources/js/views/user/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/user/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_6ba467ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=6ba467ef& */ "./resources/js/views/user/Dashboard.vue?vue&type=template&id=6ba467ef&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_6ba467ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_6ba467ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__["VProgressCircular"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_9__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/user/Dashboard.vue?vue&type=template&id=6ba467ef&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/user/Dashboard.vue?vue&type=template&id=6ba467ef& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6ba467ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=6ba467ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/user/Dashboard.vue?vue&type=template&id=6ba467ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6ba467ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_6ba467ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);