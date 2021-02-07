(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/documents/show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/documents/show.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['comp'],
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  methods: {
    showDocument: function showDocument(path) {
      var url = this.$store.state.serverUrl + path;
      window.open(url, "_blank");
    }
  },
  computed: {
    checkDocuments: function checkDocuments() {
      var docs = [];
      this.comp.company_documents.forEach(function (value, index) {
        docs.push({
          'name': value.document.name,
          "path": value.path,
          "status": value.status
        });
      });
      return docs;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/invoices/show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/invoices/show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['comp'],
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  methods: {
    cancelInvoice: function cancelInvoice(id) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/onlinepayments/show.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/onlinepayments/show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['comp'],
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  methods: {
    cancelInvoice: function cancelInvoice(id) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/profile/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/profile/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/company_service */ "./resources/js/services/company_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      show: false,
      editCompanyDialog: false,
      loading: false,
      name: this.company.name,
      nameRule: [function (v) {
        return !!v || 'Name required';
      }],
      surnameRule: [function (v) {
        return !!v || 'Surname required';
      }],
      countrylist: ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe'],
      country: this.company.country,
      countryRule: [function (v) {
        return !!v || 'Country is required';
      }],
      type: this.company.accounttype_id,
      typeRule: [function (v) {
        return !!v || 'Type required';
      }],
      valid: true
    };
  },
  methods: {
    updateCompany: function updateCompany() {
      var _this = this;

      var formData = new FormData();
      formData.append('name', this.name);
      formData.append('accounttype', this.type);
      formData.append('country', this.country);
      formData.append('id', this.company.id);

      if (this.$refs.form.validate()) {
        this.loading = true;
        _services_company_service__WEBPACK_IMPORTED_MODULE_0__["updateCompany"](formData).then(function (response) {
          _this.loading = false;
          _this.snackbar = true;
          _this.color = "green";
          _this.message = "Successfully updated Company Details";
          _this.comp = response.data.company;
          _this.editCompanyDialog = false;

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
    getTypes: function getTypes() {
      return this.$store.state.types;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/profile/show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/profile/show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./resources/js/components/company/profile/edit.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['comp'],
  components: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/receipts/show.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/receipts/show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['comp'],
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  methods: {
    cancelInvoice: function cancelInvoice(id) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/registrations/edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/registrations/edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/company_service */ "./resources/js/services/company_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['registration'],
  data: function data() {
    return {
      category: '',
      categoryRule: [function (v) {
        return !!v || 'Select Category';
      }],
      regyear: '',
      regyearRule: [function (v) {
        return !!v || 'Select Registration years';
      }],
      isvalid: true,
      loading: false,
      snackbar: false,
      message: '',
      color: '',
      showDialog: false
    };
  },
  methods: {
    updated: function updated() {
      var _this = this;

      if (this.$refs.form.validate()) {
        var formData = new FormData();
        formData.append('category', this.category);
        formData.append('regyear', this.regyear);
        _services_company_service__WEBPACK_IMPORTED_MODULE_0__["updateRegistration"](formData, this.registration).then(function (response) {
          _this.loading = false;
          _this.snackbar = true;
          _this.color = "green";
          _this.message = "Successfully updated Company Details";
          _this.showDialog = false;
        })["catch"](function (error) {
          _this.loading = false;
          _this.showDialog = false;
          _this.message = error.response.data.message;
          _this.snackbar = true;
          _this.color = "red";
        });
      }
    }
  },
  computed: {
    getCategorylist: function getCategorylist() {
      return this.$store.state.categorylist;
    },
    getYears: function getYears() {
      return this.$store.state.regyear;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/registrations/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/registrations/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./resources/js/components/company/registrations/edit.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['comp'],
  components: {
    editregistration: _edit__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  methods: {
    cancelInvoice: function cancelInvoice(id) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/rtgs/show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/rtgs/show.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['comp'],
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  methods: {
    cancelInvoice: function cancelInvoice(id) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/company_service */ "./resources/js/services/company_service.js");
/* harmony import */ var _profile_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/show */ "./resources/js/components/company/profile/show.vue");
/* harmony import */ var _user_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/show */ "./resources/js/components/company/user/show.vue");
/* harmony import */ var _documents_show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documents/show */ "./resources/js/components/company/documents/show.vue");
/* harmony import */ var _invoices_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoices/show */ "./resources/js/components/company/invoices/show.vue");
/* harmony import */ var _receipts_show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipts/show */ "./resources/js/components/company/receipts/show.vue");
/* harmony import */ var _onlinepayments_show__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onlinepayments/show */ "./resources/js/components/company/onlinepayments/show.vue");
/* harmony import */ var _transfers_show__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transfers/show */ "./resources/js/components/company/transfers/show.vue");
/* harmony import */ var _rtgs_show__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rtgs/show */ "./resources/js/components/company/rtgs/show.vue");
/* harmony import */ var _registrations_show__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./registrations/show */ "./resources/js/components/company/registrations/show.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    profile: _profile_show__WEBPACK_IMPORTED_MODULE_1__["default"],
    users: _user_show__WEBPACK_IMPORTED_MODULE_2__["default"],
    documents: _documents_show__WEBPACK_IMPORTED_MODULE_3__["default"],
    invoices: _invoices_show__WEBPACK_IMPORTED_MODULE_4__["default"],
    receipts: _receipts_show__WEBPACK_IMPORTED_MODULE_5__["default"],
    onlinepayments: _onlinepayments_show__WEBPACK_IMPORTED_MODULE_6__["default"],
    banktransfers: _transfers_show__WEBPACK_IMPORTED_MODULE_7__["default"],
    rtgs: _rtgs_show__WEBPACK_IMPORTED_MODULE_8__["default"],
    registrations: _registrations_show__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      showDialog: false,
      tab: null,
      tab2: null,
      comp: '',
      loading: false
    };
  },
  methods: {
    show: function show() {
      var _this = this;

      this.loading = true;
      _services_company_service__WEBPACK_IMPORTED_MODULE_0__["showCompany"](this.company.id).then(function (response) {
        _this.loading = false;
        _this.comp = response.data.company;

        _this.$store.dispatch('setRegyear', response.data.years);

        _this.$store.dispatch('setCategorylist', response.data.category);

        _this.showDialog = true;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/transfers/show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/transfers/show.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['comp'],
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  methods: {
    cancelInvoice: function cancelInvoice(id) {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/user/add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/user/add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/company_service */ "./resources/js/services/company_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['comp'],
  data: function data() {
    return {
      name: '',
      surname: '',
      email: '',
      emailRule: [function (v) {
        return !!v || 'Email is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }],
      nameRule: [function (v) {
        return !!v || 'Name required';
      }],
      surnameRule: [function (v) {
        return !!v || 'Surname required';
      }],
      valid: true,
      adduserDialog: false,
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  methods: {
    addUser: function addUser() {
      var _this = this;

      if (this.$refs.userForm.validate()) {
        var formData = new FormData();
        formData.append('name', this.name);
        formData.append('surname', this.surname);
        formData.append('email', this.email);
        formData.append('id', this.comp);
        this.loading = true;
        _services_company_service__WEBPACK_IMPORTED_MODULE_0__["adduser"](formData).then(function (response) {
          _this.loading = false;
          _this.adduserDialog = false;
          _this.snackbar = true;
          _this.color = "green";
          _this.message = "USer successfully created";
        })["catch"](function (error) {
          _this.loading = false;
          _this.message = error.response.data.message;
          _this.snackbar = true;
          _this.color = "red";
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/user/show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/user/show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ "./resources/js/components/company/user/add.vue");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/company_service */ "./resources/js/services/company_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['comp'],
  data: function data() {
    return {
      snackbar: false,
      loading: false,
      message: '',
      color: ''
    };
  },
  components: {
    addUser: _add__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    passwordreset: function passwordreset(id) {
      var _this = this;

      this.loading = true;
      _services_company_service__WEBPACK_IMPORTED_MODULE_1__["passwordreset"](id).then(function (response) {
        _this.loading = false;
        _this.snackbar = true;
        _this.color = "green";
        _this.message = "Password Reset successful";
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/company.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/company.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/company_service */ "./resources/js/services/company_service.js");
/* harmony import */ var _components_company_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/company/show */ "./resources/js/components/company/show.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    showCompany: _components_company_show__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      items: [{
        text: 'Dashboard',
        disabled: false,
        href: '/administrator/dashboard'
      }, {
        text: 'Companies',
        disabled: true,
        href: 'admin.company'
      }],
      companies: [],
      comp: '',
      snackbar: false,
      color: '',
      message: '',
      loading: false,
      filter: ''
    };
  },
  methods: {
    getList: function getList() {
      var _this = this;

      this.loading = true;
      var formData = new FormData();
      formData.append('search', this.filter);
      _services_company_service__WEBPACK_IMPORTED_MODULE_0__["getList"](formData).then(function (response) {
        _this.loading = false;
        _this.companies = response.data.company;

        _this.$store.dispatch('setTypes', response.data.types);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/documents/show.vue?vue&type=template&id=4babbe5e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/documents/show.vue?vue&type=template&id=4babbe5e& ***!
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
        "v-card",
        { staticClass: "ma-1" },
        [
          _c("v-card-title", [_c("div", [_vm._v("Account Documents")])]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _vm._v(
                        "\r\n                      Name\r\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Status\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.checkDocuments
                      ? _vm._l(_vm.checkDocuments, function(doc) {
                          return _c("tr", { key: doc.id }, [
                            _c("td", [_vm._v(_vm._s(doc.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(doc.status))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "white--text",
                                    attrs: {
                                      fab: "",
                                      small: "",
                                      depressed: "",
                                      color: "green"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.showDocument(doc.path)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("fa fa-download")])],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        })
                      : [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "red--text text-center px-10",
                                attrs: { colspan: "2" }
                              },
                              [_vm._v("No Company Documents Found")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/invoices/show.vue?vue&type=template&id=5d2d0f39&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/invoices/show.vue?vue&type=template&id=5d2d0f39& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "ma-1" },
        [
          _c("v-card-title", [_c("div", [_vm._v("Invoices")])]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _vm._v(
                        "\r\n                      Date\r\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Invoice Number\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Category\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     Year\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Status\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Amount\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.comp.invoices
                      ? _vm._l(_vm.comp.invoices, function(inv) {
                          return _c("tr", { key: inv.id }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(inv.created_at))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(inv.invoice_number))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(inv.category.code))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(inv.year))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(inv.status))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(inv.cost))]),
                            _vm._v(" "),
                            _c("td")
                          ])
                        })
                      : [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "red--text text-center px-10",
                                attrs: { colspan: "6" }
                              },
                              [_vm._v("No Invoices found Found")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/onlinepayments/show.vue?vue&type=template&id=a39f46c2&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/onlinepayments/show.vue?vue&type=template&id=a39f46c2& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "ma-1" },
        [
          _c("v-card-title", [_c("div", [_vm._v("Online Payments")])]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _vm._v(
                        "\r\n                      Date\r\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Invoice Number\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Method\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                       Status\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Amount\r\n                     "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.comp.onlinepayments
                      ? _vm._l(_vm.comp.onlinepayments, function(online) {
                          return _c("tr", { key: online.id }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(online.created_at))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(online.invoice_number))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(online.mode))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(online.status))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(online.amount))])
                          ])
                        })
                      : [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "red--text text-center px-10",
                                attrs: { colspan: "5" }
                              },
                              [_vm._v("No Online paymets found Found")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/profile/edit.vue?vue&type=template&id=4a768a66&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/profile/edit.vue?vue&type=template&id=4a768a66& ***!
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
        "v-btn",
        {
          staticClass: "white--text",
          attrs: { color: "blue", small: "", depressed: "", fab: "" },
          on: {
            click: function($event) {
              _vm.editCompanyDialog = true
            }
          }
        },
        [_c("v-icon", [_vm._v("fa fa-pencil")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500" },
          model: {
            value: _vm.editCompanyDialog,
            callback: function($$v) {
              _vm.editCompanyDialog = $$v
            },
            expression: "editCompanyDialog"
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
                  _c(
                    "v-card-title",
                    [
                      _c("div", [_vm._v("Edit Account")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.editCompanyDialog = false
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-times")])],
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
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          label: "Name",
                          rules: _vm.nameRule
                        },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          label: "Country",
                          items: _vm.countrylist,
                          rules: _vm.countryRule
                        },
                        model: {
                          value: _vm.country,
                          callback: function($$v) {
                            _vm.country = $$v
                          },
                          expression: "country"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          label: "Account type",
                          items: _vm.getTypes,
                          "item-text": "name",
                          "item-value": "id",
                          rules: _vm.typeRule
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
                              _vm.editCompanyDialog = false
                            }
                          }
                        },
                        [_vm._v("\n             Cancel\n         ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { outlined: "", color: "green" },
                          on: { click: _vm.updateCompany }
                        },
                        [_vm._v("\n            Submit\n         ")]
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
                    "\n                  Please wait ....\n                  "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/profile/show.vue?vue&type=template&id=67157640&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/profile/show.vue?vue&type=template&id=67157640& ***!
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
    "v-card",
    { staticClass: "ma-1" },
    [
      _c(
        "v-card-title",
        [
          _c("div", [
            _vm._v(
              "\n                       Details\n                           "
            )
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex" },
            [_c("edit", { attrs: { company: _vm.comp } })],
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
                _c("th", [_vm._v("Name")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.comp.name))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Reg number")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.comp.regnumber))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Country")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.comp.country))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("City")]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.comp.city))])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Account type")]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm.comp.accounttype
                      ? [
                          _vm._v(
                            "\n                                   " +
                              _vm._s(_vm.comp.accounttype.name) +
                              "\n                                   "
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Email")]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm.comp.accounttype
                      ? [
                          _vm._v(
                            "\n                                   " +
                              _vm._s(_vm.comp.contacts.emails) +
                              "\n                                   "
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Phone")]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm.comp.accounttype
                      ? [
                          _vm._v(
                            "\n                                   " +
                              _vm._s(_vm.comp.contacts.phones) +
                              "\n                                   "
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("th", [_vm._v("Address")]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm.comp.accounttype
                      ? [
                          _vm._v(
                            "\n                                   " +
                              _vm._s(_vm.comp.contacts.address) +
                              "\n                                   "
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                )
              ])
            ])
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/receipts/show.vue?vue&type=template&id=3703a6f8&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/receipts/show.vue?vue&type=template&id=3703a6f8& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "ma-1" },
        [
          _c("v-card-title", [_c("div", [_vm._v("Receipts")])]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _vm._v(
                        "\r\n                      Date\r\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Invoice Number\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     Receipt Number\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     Description\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Method\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                       Currency\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Amount\r\n                     "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.comp.receipts
                      ? _vm._l(_vm.comp.receipts, function(rpt) {
                          return _c("tr", { key: rpt.id }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(rpt.created_at))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(rpt.invoicenumber))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(rpt.receiptnumber))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(rpt.description))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(rpt.method))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(rpt.currency))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(rpt.amount))])
                          ])
                        })
                      : [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "red--text text-center px-10",
                                attrs: { colspan: "7" }
                              },
                              [_vm._v("No Receipts found Found")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/registrations/edit.vue?vue&type=template&id=798464fc&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/registrations/edit.vue?vue&type=template&id=798464fc& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
          staticClass: "blue lighten-4 white--text",
          attrs: { fab: "", small: "" },
          on: {
            click: function($event) {
              _vm.showDialog = true
            }
          }
        },
        [_c("v-icon", [_vm._v("fa fa-pencil")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "300" },
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
                  _c("v-card-title", [_vm._v("Update Registrations")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          label: "Select Year",
                          items: _vm.getYears,
                          "item-value": "year",
                          "item-text": "year",
                          rules: _vm.regyearRule
                        },
                        model: {
                          value: _vm.regyear,
                          callback: function($$v) {
                            _vm.regyear = $$v
                          },
                          expression: "regyear"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          label: "Select Category",
                          items: _vm.getCategorylist,
                          "item-value": "id",
                          "item-text": "code",
                          rules: _vm.categoryRule
                        },
                        model: {
                          value: _vm.category,
                          callback: function($$v) {
                            _vm.category = $$v
                          },
                          expression: "category"
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
                        { attrs: { rounded: "", outlined: "", color: "red" } },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { rounded: "", outlined: "", color: "green" },
                          on: { click: _vm.updated }
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/registrations/show.vue?vue&type=template&id=05d5206f&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/registrations/show.vue?vue&type=template&id=05d5206f& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "ma-1" },
        [
          _c("v-card-title", [_c("div", [_vm._v("Registrations")])]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _vm._v(
                        "\r\n                      Date\r\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Category\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Year\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                       Status\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Print\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.comp.registrations
                      ? _vm._l(_vm.comp.registrations, function(online) {
                          return _c("tr", { key: online.id }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(online.created_at))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(online.category.code))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(online.expire_year))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(online.status))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(online.printed))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                online.status == "PENDING"
                                  ? [
                                      _c("editregistration", {
                                        attrs: { registration: online.id }
                                      })
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
                                staticClass: "red--text text-center px-10",
                                attrs: { colspan: "5" }
                              },
                              [_vm._v("No Registrations found Found")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/rtgs/show.vue?vue&type=template&id=4004a5f1&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/rtgs/show.vue?vue&type=template&id=4004a5f1& ***!
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
        "v-card",
        { staticClass: "ma-1" },
        [
          _c("v-card-title", [_c("div", [_vm._v("RTGS Uploads")])]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _vm._v(
                        "\r\n                      Date\r\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     Invoice Number\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Bank\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     Payment Date\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     Status\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     Commet\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Amount\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.comp.rtgs
                      ? _vm._l(_vm.comp.rtgs, function(bank) {
                          return _c("tr", { key: bank.id }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(bank.created_at))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.invoice_number))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.paymentdate))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.status))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.comment))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.amounnt))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                bank.comments
                                  ? [
                                      _c(
                                        "v-tooltip",
                                        {
                                          attrs: { right: "" },
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  var attrs = ref.attrs
                                                  return [
                                                    _c(
                                                      "v-btn",
                                                      _vm._g(
                                                        _vm._b(
                                                          {
                                                            attrs: {
                                                              color: "primary",
                                                              dark: "",
                                                              fab: "",
                                                              depressed: "",
                                                              icon: ""
                                                            }
                                                          },
                                                          "v-btn",
                                                          attrs,
                                                          false
                                                        ),
                                                        on
                                                      ),
                                                      [
                                                        _c("v-icon", [
                                                          _vm._v(
                                                            "fa fa-comment"
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
                                        },
                                        [
                                          _vm._v(" "),
                                          _vm._l(bank.comments, function(
                                            comment
                                          ) {
                                            return _c(
                                              "span",
                                              { key: comment.id },
                                              [_vm._v(_vm._s(comment.comment))]
                                            )
                                          })
                                        ],
                                        2
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
                                staticClass: "red--text text-center px-10",
                                attrs: { colspan: "5" }
                              },
                              [_vm._v("No Bank Transfers Claimed")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/show.vue?vue&type=template&id=5a03b4cc&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/show.vue?vue&type=template&id=5a03b4cc& ***!
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
    "tr",
    [
      _c("td", [_vm._v(_vm._s(_vm.company.id))]),
      _vm._v(" "),
      _c("td", [_vm._v(_vm._s(_vm.company.regnumber))]),
      _vm._v(" "),
      _c("td", [_vm._v(_vm._s(_vm.company.name))]),
      _vm._v(" "),
      _c(
        "td",
        [
          _c(
            "v-btn",
            {
              attrs: { outlined: "", color: "green" },
              on: { click: _vm.show }
            },
            [_vm._v("View")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "1000" },
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
              _c(
                "v-card-title",
                [
                  _c("div", [_vm._v("Account Details")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.showDialog = false
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
                    "v-tabs",
                    {
                      attrs: { left: "", "icons-and-text": "" },
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c("v-tabs-slider"),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { dark: "", href: "#tab-1" } },
                        [
                          _vm._v(
                            "\n                      Company Details\n                      "
                          ),
                          _c("v-icon", [_vm._v("fa fa-institution")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { href: "#tab-2" } },
                        [
                          _vm._v(
                            "\n                       Users\n                        "
                          ),
                          _c("v-icon", [_vm._v("fa fa-users")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { href: "#tab-3" } },
                        [
                          _vm._v(
                            "\n                       Documents\n                        "
                          ),
                          _c("v-icon", [_vm._v("fa fa-file")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      model: {
                        value: _vm.tab,
                        callback: function($$v) {
                          _vm.tab = $$v
                        },
                        expression: "tab"
                      }
                    },
                    [
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-1" } },
                        [_c("profile", { attrs: { comp: _vm.comp } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-2" } },
                        [_c("users", { attrs: { comp: _vm.comp } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-3" } },
                        [_c("documents", { attrs: { comp: _vm.comp } })],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h5", { staticClass: "headline mt-5" }, [
                    _vm._v("Transactions")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-tabs",
                    {
                      attrs: { left: "", "icons-and-text": "" },
                      model: {
                        value: _vm.tab2,
                        callback: function($$v) {
                          _vm.tab2 = $$v
                        },
                        expression: "tab2"
                      }
                    },
                    [
                      _c("v-tabs-slider"),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { dark: "", href: "#tab-4" } },
                        [
                          _vm._v(
                            "\n                     Invoices\n                      "
                          ),
                          _c("v-icon", [_vm._v("fa fa-file")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { href: "#tab-5" } },
                        [
                          _vm._v(
                            "\n                       Receipts\n                        "
                          ),
                          _c("v-icon", [_vm._v("fa fa-file")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { href: "#tab-6" } },
                        [
                          _vm._v(
                            "\n                       Online payments\n                        "
                          ),
                          _c("v-icon", [_vm._v("fa fa-dollar")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { href: "#tab-7" } },
                        [
                          _vm._v(
                            "\n                       Transfers\n                        "
                          ),
                          _c("v-icon", [_vm._v("fa fa-exchange")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { href: "#tab-8" } },
                        [
                          _vm._v(
                            "\n                       RTGS\n                        "
                          ),
                          _c("v-icon", [_vm._v("fa fa-credit-card")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { attrs: { href: "#tab-9" } },
                        [
                          _vm._v(
                            "\n                      Registrations\n                        "
                          ),
                          _c("v-icon", [_vm._v("fa fa-check")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      model: {
                        value: _vm.tab2,
                        callback: function($$v) {
                          _vm.tab2 = $$v
                        },
                        expression: "tab2"
                      }
                    },
                    [
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-4" } },
                        [_c("invoices", { attrs: { comp: _vm.comp } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-5" } },
                        [_c("receipts", { attrs: { comp: _vm.comp } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-6" } },
                        [_c("onlinepayments", { attrs: { comp: _vm.comp } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-7" } },
                        [_c("banktransfers", { attrs: { comp: _vm.comp } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-8" } },
                        [_c("rtgs", { attrs: { comp: _vm.comp } })],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { attrs: { value: "tab-9" } },
                        [_c("registrations", { attrs: { comp: _vm.comp } })],
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
                  _vm._v("\n            Please wait ....\n            "),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/transfers/show.vue?vue&type=template&id=b06078be&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/transfers/show.vue?vue&type=template&id=b06078be& ***!
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
        "v-card",
        { staticClass: "ma-1" },
        [
          _c("v-card-title", [_c("div", [_vm._v("Bank transfers")])]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", [
                      _vm._v(
                        "\r\n                      Date\r\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     transaction Date\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Description\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                     Reference Number\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Currency\r\n                     "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Amount\r\n                     "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.comp.banktransactions
                      ? _vm._l(_vm.comp.banktransactions, function(bank) {
                          return _c("tr", { key: bank.id }, [
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("formatDate")(bank.created_at))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.trans_date))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.description))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.source_reference))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.currency))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(bank.amount))])
                          ])
                        })
                      : [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "red--text text-center px-10",
                                attrs: { colspan: "5" }
                              },
                              [_vm._v("No Bank Transfers Claimed")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/user/add.vue?vue&type=template&id=2ee4b47a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/user/add.vue?vue&type=template&id=2ee4b47a& ***!
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
    "div",
    [
      _c(
        "v-btn",
        {
          attrs: { fab: "", small: "", depressed: "", color: "primary" },
          on: {
            click: function($event) {
              _vm.adduserDialog = true
            }
          }
        },
        [_c("v-icon", [_vm._v("fa fa-plus")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500" },
          model: {
            value: _vm.adduserDialog,
            callback: function($$v) {
              _vm.adduserDialog = $$v
            },
            expression: "adduserDialog"
          }
        },
        [
          _c(
            "v-form",
            {
              ref: "userForm",
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
                    [
                      _c("div", [_vm._v("Add User")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.adduserDialog = false
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-times")])],
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
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          label: "Name",
                          rules: _vm.nameRule
                        },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          label: "Surname",
                          rules: _vm.surnameRule
                        },
                        model: {
                          value: _vm.surname,
                          callback: function($$v) {
                            _vm.surname = $$v
                          },
                          expression: "surname"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          label: "email",
                          rules: _vm.emailRule
                        },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
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
                              _vm.adduserDialog = false
                            }
                          }
                        },
                        [_vm._v("\r\n               Cancel\r\n           ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { outlined: "", color: "green" },
                          on: { click: _vm.addUser }
                        },
                        [_vm._v("\r\n              Submit\r\n           ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/user/show.vue?vue&type=template&id=346d8518&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/user/show.vue?vue&type=template&id=346d8518& ***!
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
        "v-card",
        { staticClass: "ma-1" },
        [
          _c(
            "v-card-title",
            [
              _c("div", [_vm._v("Users")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("addUser", { attrs: { comp: _vm.comp.id } })
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
                    _c("th", [
                      _vm._v(
                        "\r\n                      Name\r\n                      "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Surname\r\n                  "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th", [
                      _vm._v(
                        "\r\n                      Email\r\n                  "
                      )
                    ]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.comp.users
                      ? _vm._l(_vm.comp.users, function(user) {
                          return _c("tr", { key: user.id }, [
                            _c("td", [_vm._v(_vm._s(user.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.surname))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.email))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticClass: "text-right" },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "blue white--text",
                                    attrs: { outlined: "", rounded: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.passwordreset(user.id)
                                      }
                                    }
                                  },
                                  [_vm._v("Reset")]
                                )
                              ],
                              1
                            )
                          ])
                        })
                      : [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "red--text text-center px-10",
                                attrs: { colspan: "4" }
                              },
                              [_vm._v("No Users Found")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/company.vue?vue&type=template&id=543ad664&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/company.vue?vue&type=template&id=543ad664& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
                            return _vm.getList($event)
                          }
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
              _c(
                "v-simple-table",
                [
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v(
                            "\r\n                    ID\r\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v(
                            "\r\n                      Reg number\r\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v(
                            "\r\n                        Name\r\n                    "
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.companies, function(company) {
                        return _c("showCompany", {
                          key: company.id,
                          attrs: { company: company }
                        })
                      }),
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
              "         \r\n            "
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

/***/ "./resources/js/components/company/documents/show.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/company/documents/show.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_4babbe5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=4babbe5e& */ "./resources/js/components/company/documents/show.vue?vue&type=template&id=4babbe5e&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/documents/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_4babbe5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_4babbe5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/documents/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/documents/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/company/documents/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/documents/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/documents/show.vue?vue&type=template&id=4babbe5e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/company/documents/show.vue?vue&type=template&id=4babbe5e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4babbe5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=4babbe5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/documents/show.vue?vue&type=template&id=4babbe5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4babbe5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4babbe5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/invoices/show.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/company/invoices/show.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_5d2d0f39___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=5d2d0f39& */ "./resources/js/components/company/invoices/show.vue?vue&type=template&id=5d2d0f39&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/invoices/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_5d2d0f39___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_5d2d0f39___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/invoices/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/invoices/show.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/company/invoices/show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/invoices/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/invoices/show.vue?vue&type=template&id=5d2d0f39&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/company/invoices/show.vue?vue&type=template&id=5d2d0f39& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5d2d0f39___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=5d2d0f39& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/invoices/show.vue?vue&type=template&id=5d2d0f39&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5d2d0f39___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5d2d0f39___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/onlinepayments/show.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/company/onlinepayments/show.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_a39f46c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=a39f46c2& */ "./resources/js/components/company/onlinepayments/show.vue?vue&type=template&id=a39f46c2&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/onlinepayments/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_a39f46c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_a39f46c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/onlinepayments/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/onlinepayments/show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/company/onlinepayments/show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/onlinepayments/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/onlinepayments/show.vue?vue&type=template&id=a39f46c2&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/company/onlinepayments/show.vue?vue&type=template&id=a39f46c2& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_a39f46c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=a39f46c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/onlinepayments/show.vue?vue&type=template&id=a39f46c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_a39f46c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_a39f46c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/profile/edit.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/company/profile/edit.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_4a768a66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=4a768a66& */ "./resources/js/components/company/profile/edit.vue?vue&type=template&id=4a768a66&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/company/profile/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_4a768a66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_4a768a66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__["VProgressLinear"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/profile/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/profile/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/company/profile/edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/profile/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/profile/edit.vue?vue&type=template&id=4a768a66&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/company/profile/edit.vue?vue&type=template&id=4a768a66& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_4a768a66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=4a768a66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/profile/edit.vue?vue&type=template&id=4a768a66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_4a768a66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_4a768a66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/profile/show.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/company/profile/show.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_67157640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=67157640& */ "./resources/js/components/company/profile/show.vue?vue&type=template&id=67157640&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/profile/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_67157640___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_67157640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/profile/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/profile/show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/company/profile/show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/profile/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/profile/show.vue?vue&type=template&id=67157640&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/company/profile/show.vue?vue&type=template&id=67157640& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_67157640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=67157640& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/profile/show.vue?vue&type=template&id=67157640&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_67157640___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_67157640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/receipts/show.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/company/receipts/show.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_3703a6f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=3703a6f8& */ "./resources/js/components/company/receipts/show.vue?vue&type=template&id=3703a6f8&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/receipts/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_3703a6f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_3703a6f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/receipts/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/receipts/show.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/company/receipts/show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/receipts/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/receipts/show.vue?vue&type=template&id=3703a6f8&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/company/receipts/show.vue?vue&type=template&id=3703a6f8& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_3703a6f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=3703a6f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/receipts/show.vue?vue&type=template&id=3703a6f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_3703a6f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_3703a6f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/registrations/edit.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/company/registrations/edit.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_798464fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=798464fc& */ "./resources/js/components/company/registrations/edit.vue?vue&type=template&id=798464fc&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/components/company/registrations/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_798464fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_798464fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__["VProgressLinear"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/registrations/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/registrations/edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/company/registrations/edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/registrations/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/registrations/edit.vue?vue&type=template&id=798464fc&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/company/registrations/edit.vue?vue&type=template&id=798464fc& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_798464fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=798464fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/registrations/edit.vue?vue&type=template&id=798464fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_798464fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_798464fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/registrations/show.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/company/registrations/show.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_05d5206f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=05d5206f& */ "./resources/js/components/company/registrations/show.vue?vue&type=template&id=05d5206f&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/registrations/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_05d5206f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_05d5206f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/registrations/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/registrations/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/company/registrations/show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/registrations/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/registrations/show.vue?vue&type=template&id=05d5206f&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/company/registrations/show.vue?vue&type=template&id=05d5206f& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_05d5206f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=05d5206f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/registrations/show.vue?vue&type=template&id=05d5206f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_05d5206f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_05d5206f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/rtgs/show.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/company/rtgs/show.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_4004a5f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=4004a5f1& */ "./resources/js/components/company/rtgs/show.vue?vue&type=template&id=4004a5f1&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/rtgs/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_4004a5f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_4004a5f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VSimpleTable"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_8__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/rtgs/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/rtgs/show.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/company/rtgs/show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/rtgs/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/rtgs/show.vue?vue&type=template&id=4004a5f1&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/company/rtgs/show.vue?vue&type=template&id=4004a5f1& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4004a5f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=4004a5f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/rtgs/show.vue?vue&type=template&id=4004a5f1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4004a5f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_4004a5f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/show.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/company/show.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_5a03b4cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=5a03b4cc& */ "./resources/js/components/company/show.vue?vue&type=template&id=5a03b4cc&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_5a03b4cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_5a03b4cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_8__["VProgressLinear"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_10__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_10__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_10__["VTabs"],VTabsItems: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_10__["VTabsItems"],VTabsSlider: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_10__["VTabsSlider"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/show.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/company/show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/show.vue?vue&type=template&id=5a03b4cc&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/company/show.vue?vue&type=template&id=5a03b4cc& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5a03b4cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=5a03b4cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/show.vue?vue&type=template&id=5a03b4cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5a03b4cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_5a03b4cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/transfers/show.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/company/transfers/show.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_b06078be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=b06078be& */ "./resources/js/components/company/transfers/show.vue?vue&type=template&id=b06078be&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/transfers/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_b06078be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_b06078be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/transfers/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/transfers/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/company/transfers/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/transfers/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/transfers/show.vue?vue&type=template&id=b06078be&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/company/transfers/show.vue?vue&type=template&id=b06078be& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_b06078be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=b06078be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/transfers/show.vue?vue&type=template&id=b06078be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_b06078be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_b06078be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/user/add.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/company/user/add.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_2ee4b47a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=2ee4b47a& */ "./resources/js/components/company/user/add.vue?vue&type=template&id=2ee4b47a&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/components/company/user/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_2ee4b47a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_2ee4b47a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_9__["VProgressLinear"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/user/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/user/add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/company/user/add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/user/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/user/add.vue?vue&type=template&id=2ee4b47a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/company/user/add.vue?vue&type=template&id=2ee4b47a& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_2ee4b47a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=2ee4b47a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/user/add.vue?vue&type=template&id=2ee4b47a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_2ee4b47a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_2ee4b47a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/user/show.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/company/user/show.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_346d8518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=346d8518& */ "./resources/js/components/company/user/show.vue?vue&type=template&id=346d8518&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/components/company/user/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_346d8518___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_346d8518___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_6__["VDialog"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_7__["VProgressLinear"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_9__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/user/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/user/show.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/company/user/show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--11!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/user/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/user/show.vue?vue&type=template&id=346d8518&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/company/user/show.vue?vue&type=template&id=346d8518& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_346d8518___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=346d8518& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/user/show.vue?vue&type=template&id=346d8518&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_346d8518___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_346d8518___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/company_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/company_service.js ***!
  \**************************************************/
/*! exports provided: getList, showCompany, updateCompany, passwordreset, adduser, updateRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCompany", function() { return showCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCompany", function() { return updateCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordreset", function() { return passwordreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adduser", function() { return adduser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRegistration", function() { return updateRegistration; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getList(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/administrator/company', data);
}
function showCompany(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/company/' + id);
}
function updateCompany(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('administrator/company/update', data);
}
function passwordreset(id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('administrator/user/passwordreset/' + id);
}
function adduser(data) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('administrator/company/user/create', data);
}
function updateRegistration(data, id) {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('administrator/registration/update/' + id, data);
}

/***/ }),

/***/ "./resources/js/views/admin/company.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/admin/company.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _company_vue_vue_type_template_id_543ad664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company.vue?vue&type=template&id=543ad664& */ "./resources/js/views/admin/company.vue?vue&type=template&id=543ad664&");
/* harmony import */ var _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBreadcrumbs */ "./node_modules/vuetify/lib/components/VBreadcrumbs/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _company_vue_vue_type_template_id_543ad664___WEBPACK_IMPORTED_MODULE_0__["render"],
  _company_vue_vue_type_template_id_543ad664___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBreadcrumbs: vuetify_lib_components_VBreadcrumbs__WEBPACK_IMPORTED_MODULE_4__["VBreadcrumbs"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_8__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_10__["VSnackbar"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/company.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/company.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/admin/company.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/company.vue?vue&type=template&id=543ad664&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/company.vue?vue&type=template&id=543ad664& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_543ad664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./company.vue?vue&type=template&id=543ad664& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/company.vue?vue&type=template&id=543ad664&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_543ad664___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_543ad664___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);