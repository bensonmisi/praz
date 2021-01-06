(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/claim.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/claim.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dashboard_service */ "./resources/js/services/dashboard_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      receiptnumber: '',
      loading: false,
      snackbar: false,
      confirmDialog: false,
      valid: true,
      color: '',
      message: '',
      dialog: false,
      category: '',
      receiptRule: [function (v) {
        return !!v || 'Receipt number is required';
      }]
    };
  },
  methods: {
    claim: function claim() {
      var _this = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        var formData = new FormData();
        formData.append('receiptnumber', this.receiptnumber);
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["claimReceipt"](formData).then(function (response) {
          _this.loading = false;

          if (response.status == 200) {
            _this.category = response.data.category;
            _this.confirmDialog = true;
            _this.dialog = false;
          }
        })["catch"](function (error) {
          _this.loading = false;
          _this.snackbar = true;
          _this.color = "red";
          _this.message = error.response.data.message;
        });
      }
    },
    confirm: function confirm() {
      var _this2 = this;

      this.loading = true;
      var formData = new FormData();
      formData.append('receiptnumber', this.receiptnumber);
      _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["confirmReceipt"](formData).then(function (response) {
        _this2.loading = false;
        _this2.snackbar = true;
        _this2.color = "green";
        _this2.message = response.data.message;
        _this2.confirmDialog = false;

        _this2.$emit('reload');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/registered.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/registered.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dashboard_service */ "./resources/js/services/dashboard_service.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
/* harmony import */ var _upload_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.vue */ "./resources/js/components/user/upload.vue");
/* harmony import */ var _components_user_claim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user/claim */ "./resources/js/components/user/claim.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'registered',
  components: {
    Upload: _upload_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    claim: _components_user_claim__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      documents: [],
      registrations: [],
      types: [],
      loading: false,
      snackbar: false,
      color: '',
      message: '',
      awaiting: [],
      company: '',
      profileDialog: false,
      valid: true,
      regnumber: '',
      refnumber: '',
      ref_id: '',
      invoice: [],
      currentyear: new Date().getFullYear(),
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
    }]), _defineProperty(_ref, "countrylist", ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', ' Bahrain', ' Bangladesh', ' Barbados', ' Belarus', ' Belgium', ' Belize', ' Benin', ' Bermuda', ' Bhutan', ' Bolivia', ' Bosnia and Herzegovina', ' Botswana', ' Bouvet Island', ' Brazil', ' British Indian Ocean Territory', ' Brunei Darussalam', ' Bulgaria', ' Burkina Faso', ' Burundi', ' Cambodia', ' Cameroon', ' Canada', ' Cape Verde', ' Cayman Islands', ' Central African Republic', ' Chad', ' Chile', ' China', ' Christmas Island', ' Cocos (Keeling Islands)', ' Colombia', ' Comoros', ' Congo', ' Cook Islands', ' Costa Rica', ' Cote D Ivoire (Ivory Coast)', ' Croatia (Hrvatska', ' Cuba', ' Cyprus', ' Czech Republic', ' Denmark', ' Djibouti', ' Dominica', ' Dominican Republic', ' East Timor', ' Ecuador', ' Egypt', ' El Salvador', ' Equatorial Guinea', ' Eritrea', ' Estonia', ' Ethiopia', ' Falkland Islands (Malvinas)', ' Faroe Islands', ' Fiji', ' Finland', ' France', ' France', ' Metropolitan', ' French Guiana', ' French Polynesia', ' French Southern Territories', ' Gabon', ' Gambia', ' Georgia', ' Germany', ' Ghana', ' Gibraltar', ' Greece', ' Greenland', ' Grenada', ' Guadeloupe', ' Guam', ' Guatemala', ' Guinea', ' Guinea-Bissau', ' Guyana', ' Haiti', ' Heard and McDonald Islands', ' Honduras', ' Hong Kong', ' Hungary', ' Iceland', ' India', ' Indonesia', ' Iran', ' Iraq', ' Ireland', ' Israel', ' Italy', ' Jamaica', ' Japan', ' Jordan', ' Kazakhstan', ' Kenya', ' Kiribati', ' Korea (North)', ' Korea (South)', ' Kuwait', ' Kyrgyzstan', ' Laos', ' Latvia', ' Lebanon', ' Lesotho', ' Liberia', ' Libya', ' Liechtenstein', ' Lithuania', ' Luxembourg', ' Macau', ' Macedonia', ' Madagascar', ' Malawi', ' Malaysia', ' Maldives', ' Mali', ' Malta', ' Marshall Islands', ' Martinique', ' Mauritania', ' Mauritius', ' Mayotte', ' Mexico', ' Micronesia', ' Moldova', ' Monaco', ' Mongolia', ' Montserrat', ' Morocco', ' Mozambique', ' Myanmar', ' Namibia', ' Nauru', ' Nepal', ' Netherlands', ' Netherlands Antilles', ' New Caledonia', ' New Zealand', ' Nicaragua', ' Niger', ' Nigeria', ' Niue', ' Norfolk Island', ' Northern Mariana Islands', ' Norway', ' Oman', ' Pakistan', ' Palau', ' Panama', ' Papua New Guinea', ' Paraguay', ' Peru', ' Philippines', ' Pitcairn', ' Poland', ' Portugal', ' Puerto Rico', ' Qatar', ' Reunion', ' Romania', ' Russian Federation', ' Rwanda', ' Saint Kitts and Nevis', ' Saint Lucia', ' Saint Vincent and The Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', ' Singapore', ' Slovak Republic', ' Slovenia', ' Solomon Islands', ' Somalia', ' South Africa', ' S. Georgia and S. Sandwich Isls.', ' Spain', ' Sri Lanka', ' St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', ' Swaziland', ' Sweden', ' Switzerland', ' Syria', ' Taiwan', ' Tajikistan', ' Tanzania', ' Thailand', ' Togo', ' Tokelau', ' Tonga', ' Trinidad and Tobago', ' Tunisia', ' Turkey', ' Turkmenistan', ' Turks and Caicos Islands', ' Tuvalu', ' Uganda', ' Ukraine', ' United Arab Emirates', ' United Kingdom (Britain / UK)', ' United States of America (USA)', ' US Minor Outlying Islands', ' Uruguay', ' Uzbekistan', ' Vanuatu', ' Vatican City State (Holy See)', ' Venezuela', ' Viet Nam', ' Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', ' Zambia', 'Zimbabwe']), _defineProperty(_ref, "sectorlist", ['Private', 'Government', 'Councils', 'Parastatals', 'Mining', 'Health', 'NGO', 'Other']), _defineProperty(_ref, "provincelist", ['Matabeleland South', 'Mashonaland Central', 'Mashonaland West', 'Mashonaland North', 'Mashonaland East', 'Masvingo', 'Midlands', 'Manicaland', 'Bulawayo', 'Harare']), _defineProperty(_ref, "user", {
      city: '',
      country: '',
      accounttype: '',
      province: '',
      district: '',
      email: '',
      phone: '',
      address: ''
    }), _defineProperty(_ref, "changeDialog", false), _defineProperty(_ref, "refnumberRule", [function (v) {
      return !!v || 'Reference number required';
    }]), _defineProperty(_ref, "refform", true), _defineProperty(_ref, "shownotice", false), _ref;
  },
  mounted: function mounted() {
    this.getDashboard();
  },
  methods: {
    getDashboard: function getDashboard() {
      var _this = this;

      this.loading = true;
      _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["getRegistrations"]().then(function (response) {
        _this.loading = false;
        _this.documents = response.data.documents;
        _this.registrations = response.data.registrations;
        _this.company = response.data.company;
        _this.types = response.data.types;
        _this.awaiting = response.data.awaiting;
        _this.invoice = response.data.invoice;

        _this.$store.dispatch('setCategorylist', response.data.category);

        _this.$store.dispatch('setInvoice', response.data.invoice);

        _this.$store.dispatch('setRegyear', response.data.years);

        _this.$store.dispatch('setCurrencylist', response.data.currency);

        if (response.data.company.accounttype_id == '' || response.data.company.country == '' || response.data.contacts == null) {
          _this.profileDialog = true;
        }
      })["catch"](function (error) {
        _this.loading = false;
        _this.message = error.response.data.message;
        _this.snackbar = true;
        _this.color = "red";
      });
    },
    startRegistration: function startRegistration() {
      var count = 0;
      this.documents.forEach(function (value, index) {
        if (value.company == null) {
          count++;
        }
      });

      if (count > 0) {
        this.snackbar = true;
        this.message = "Please upload all required company documents in order to proceed with category registration";
        this.color = "red";
      } else {
        this.$store.dispatch('setDocumentstatus', true);
        this.$router.push({
          name: 'Invoicing'
        });
      }
    },
    update: function update() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        this.loading = true;
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["updateProfile"](this.user).then(function (response) {
          _this2.loading = false;
          _this2.documents = response.data.documents;
          _this2.registrations = response.data.registrations;
          _this2.profileDialog = false;
          _this2.snackbar = true;
          _this2.message = "Successfully updated company profile";
          _this2.color = "green";
        })["catch"](function (error) {
          _this2.loading = false;
          _this2.message = error.response.data.message;
          _this2.snackbar = true;
          _this2.color = "red";
        });
      }
    },
    verify: function verify(id, referencenumber) {
      var _this3 = this;

      this.loading = true;
      _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["verify"](id).then(function (response) {
        _this3.loading = false;
        _this3.refnumber = referencenumber;
        _this3.ref_id = id;

        if (response.data.status == 'PAID') {
          _this3.getDashboard();

          _this3.color = "green";
          _this3.snackbar = true;
          _this3.color = "red";
          _this3.message = response.data.message;
        } else if (response.data.status == "NOT_FOUND") {
          _this3.changeDialog = true;
        } else {
          _this3.snackbar = true;
          _this3.color = "red";
          _this3.message = response.data.message;
        }
      })["catch"](function (error) {
        _this3.loading = false;
        _this3.message = error.response.data.message;
        _this3.snackbar = true;
        _this3.color = "red";
      });
    },
    updateReference: function updateReference() {
      var _this4 = this;

      if (this.$refs.refform.validate()) {
        var formdata = new FormData();
        formdata.append('id', this.ref_id);
        formdata.append('referencenumber', this.refnumber);
        this.loading = true;
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["updateREF"](formdata).then(function (response) {
          _this4.loading = false;
          _this4.changeDialog = false;
          _this4.awaiting = response.data.awaiting;
          _this4.snackbar = true;
          _this4.color = "green";
          _this4.message = 'Reference number successfully updated please  click the verify button to continue';
        })["catch"](function (error) {
          _this4.loading = false;
          _this4.message = error.response.data.message;
          _this4.snackbar = true;
          _this4.color = "red";
        });
      }
    },
    downloadCertificate: function downloadCertificate(id) {
      var _this5 = this;

      this.loading = true;
      _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["downloadCertificate"](id).then(function (response) {
        _this5.loading = false;
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', 'certificate.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      })["catch"](function (error) {
        _this5.loading = false;
        _this5.message = error.response.data.message;
        _this5.snackbar = true;
        _this5.color = "red";
      });
    }
  },
  computed: {
    checkDocuments: function checkDocuments() {
      var docs = [];
      this.documents.forEach(function (value, index) {
        var uploaded = false;
        var status = "";

        if (value.company != null) {
          uploaded = true;
          status = value.company.status;
        }

        docs.push({
          'name': value.name,
          "id": value.id,
          "uploaded": uploaded,
          "status": status
        });
      });
      return docs;
    },
    countDocuments: function countDocuments() {
      var count = 0;
      this.documents.forEach(function (value, index) {
        if (value.company == null) {
          count++;
        }
      });
      return count;
    },
    countApproved: function countApproved() {
      var count = 0;
      this.documents.forEach(function (value, index) {
        if (value.company != null) {
          if (value.company.status == 'APPROVED') {
            count;
          }
        }
      });
      return count;
    },
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
    typelist: function typelist() {
      var list = [];
      this.types.forEach(function (value, index) {
        list.push(value.name);
      });
      return list;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/upload.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--11!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/upload.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dashboard_service */ "./resources/js/services/dashboard_service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['document'],
  name: 'upload',
  data: function data() {
    return {
      dialog: false,
      valid: true,
      loading: false,
      snackbar: false,
      color: '',
      message: '',
      fileRule: [function (v) {
        return !v || v.size < 5000000 || 'File size should be less than 5 MB!';
      }, function (v) {
        return !!v || 'File is required is required';
      }],
      fileupload: null
    };
  },
  methods: {
    uploadFile: function uploadFile() {
      var _this = this;

      if (this.$refs.form.validate()) {
        var formData = new FormData();
        formData.append('filename', this.fileupload);
        formData.append('document', this.document.id);
        this.loading = true;
        _services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["uploadDocument"](formData).then(function (response) {
          _this.loading = false;
          _this.dialog = false;
          _this.snackbar = true, _this.color = 'green', _this.message = 'Successfully Updated ' + _this.document.name;

          _this.$emit('refreshDashboard');
        })["catch"](function (error) {
          _this.loading = false;
          _this.snackbar = true;
          _this.color = "red";
          _this.message = error.response.data.message;
        });
      }
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
/* harmony import */ var _components_user_registered_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/user/registered.vue */ "./resources/js/components/user/registered.vue");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      role: ''
    };
  },
  mounted: function mounted() {
    this.profile();
  },
  methods: {
    profile: function profile() {
      var company = _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["getCompany"]();
      this.role = company.token_scope;
    }
  },
  components: {
    Registered: _components_user_registered_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/claim.vue?vue&type=template&id=4504b983&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/claim.vue?vue&type=template&id=4504b983& ***!
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
        "v-banner",
        {
          staticClass: "red lighten-3",
          attrs: { outlined: "", "justify-center": "" },
          scopedSlots: _vm._u([
            {
              key: "actions",
              fn: function() {
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.dialog = true
                        }
                      }
                    },
                    [_vm._v("\n      CLAIM RECEIPT\n      ")]
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c("span", { staticClass: "white--text" }, [
            _vm._v(
              "\n        If you registered for 2020 manualy and got a manual receipt.\n         Please click on CLAIM RECEIPT  in order to  get your 2020 registration certificate\n    "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
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
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Claim 2020 Manual Receipt")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c("v-text-field", {
                            attrs: {
                              outlined: "",
                              label: "Receipt Number",
                              rules: _vm.receiptRule
                            },
                            model: {
                              value: _vm.receiptnumber,
                              callback: function($$v) {
                                _vm.receiptnumber = $$v
                              },
                              expression: "receiptnumber"
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
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "red white--text",
                          attrs: { rounded: "", outlined: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
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
                          attrs: { rounded: "", outlined: "" },
                          on: { click: _vm.claim }
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
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Claim 2020 Manual Receipt")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-container", [
                    _c("p", [_vm._v(_vm._s(_vm.category.code))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(_vm.category.name))])
                  ])
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
                      staticClass: "red white--text",
                      attrs: { rounded: "", outlined: "" },
                      on: {
                        click: function($event) {
                          _vm.confirmDialog = false
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
                      attrs: { rounded: "", outlined: "" },
                      on: { click: _vm.confirm }
                    },
                    [_vm._v("Confirm")]
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
                    "\n                    Please wait ....\n                    "
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
            "\n                " +
              _vm._s(_vm.message) +
              "   \n                 "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/registered.vue?vue&type=template&id=778578cb&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/registered.vue?vue&type=template&id=778578cb& ***!
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
      _c("v-container", { staticClass: "white", attrs: { fluid: "" } }, [
        _c(
          "div",
          { staticClass: "d-flex justify-between" },
          [
            _c("div", [
              _c("div", { staticClass: "display-1 hidden-sm-and-down" }, [
                _vm._v(_vm._s(_vm.company.name) + " ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: " font-weight-bolder hidden-md-and-up" },
                [_vm._v(_vm._s(_vm.company.name))]
              ),
              _vm._v(" "),
              _c("div", [_vm._v(_vm._s(_vm.company.regnumber))])
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
                    attrs: { depressed: "", color: "primary", "x-large": "" },
                    on: { click: _vm.startRegistration }
                  },
                  [
                    _vm._v(
                      "\n                    Register Category\n                    "
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
                      rounded: ""
                    },
                    on: { click: _vm.startRegistration }
                  },
                  [
                    _vm._v(
                      "\n                     Register Category\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("v-container", { attrs: { fluid: "" } }, [
        _c(
          "div",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { attrs: { cols: "12", sm: "8" } },
                  [
                    _c(
                      "v-card",
                      { staticClass: "red lighten-4" },
                      [
                        _c("v-card-text", [
                          _vm._v(
                            "\n                       PLEASE NOTE IF YOU WISH PAY VIA THE BANK EITHER BY ZIPIT,DIRECT DEPOSIT,INTERNET BANKING OR  TRANSFERS MAKE SURE TO ENTER YOUR PRAZ NUMBER "
                          ),
                          _c("b", [
                            _vm._v("(" + _vm._s(_vm.company.regnumber) + ")")
                          ]),
                          _vm._v(
                            " AS THE TRANSACTION DESCRIPTION. THIS WILL ALLOW OUR SYSTEM TO AUTOMATICAL IDENTIFY YOUR PAYMENT\n       \n                "
                          )
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
                              [_vm._v("\n        View Bank Details\n      ")]
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
                        _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
                          _c(
                            "div",
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass:
                                        "text-center orange lighten-4"
                                    },
                                    [_vm._v("Pending invoices")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _vm.invoice.length > 0
                                        ? _c(
                                            "v-btn",
                                            {
                                              staticClass: "mt-5",
                                              attrs: {
                                                block: "",
                                                outlined: "",
                                                color: "red"
                                              },
                                              on: {
                                                click: _vm.startRegistration
                                              }
                                            },
                                            [_vm._v(" Continue")]
                                          )
                                        : _c(
                                            "div",
                                            {
                                              staticClass:
                                                " red--text pa-10 text-center"
                                            },
                                            [
                                              _vm._v(
                                                "No Pending Invoices found"
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
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-col", { attrs: { cols: "12", sm: "6" } }, [
                          _c(
                            "div",
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticClass: "text-center blue lighten-4"
                                    },
                                    [_vm._v("Awaiting Verification")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-list", [
                                        _vm.awaiting.length > 0
                                          ? _c(
                                              "div",
                                              [
                                                _c("v-simple-table", [
                                                  _c("thead", [
                                                    _c("tr", [
                                                      _c("th", [
                                                        _vm._v(
                                                          "Reference Number"
                                                        )
                                                      ])
                                                    ])
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "tbody",
                                                    [
                                                      _vm._l(
                                                        _vm.awaiting,
                                                        function(aw) {
                                                          return [
                                                            _vm._l(
                                                              aw.transfers,
                                                              function(
                                                                transfer
                                                              ) {
                                                                return [
                                                                  _c(
                                                                    "tr",
                                                                    {
                                                                      key:
                                                                        transfer.id
                                                                    },
                                                                    [
                                                                      _c("td", [
                                                                        _vm._v(
                                                                          "\n                                                    " +
                                                                            _vm._s(
                                                                              transfer.referencenumber
                                                                            ) +
                                                                            "\n                                                "
                                                                        )
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticClass:
                                                                            "text-right"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                outlined:
                                                                                  "",
                                                                                rounded:
                                                                                  "",
                                                                                color:
                                                                                  "green"
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  return _vm.verify(
                                                                                    transfer.id,
                                                                                    transfer.referencenumber
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "Verify"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              }
                                                            )
                                                          ]
                                                        }
                                                      )
                                                    ],
                                                    2
                                                  )
                                                ])
                                              ],
                                              1
                                            )
                                          : _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "red--text pa-8 text-center"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                No Payments Awaiting Verification found\n                            "
                                                )
                                              ]
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
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card",
                      { attrs: { flat: "" } },
                      [
                        _c(
                          "v-card-title",
                          { staticClass: "green lighten-4 mt-4" },
                          [
                            _c("span", [
                              _vm._v("Registered Supplier Categories")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-row",
                              { staticClass: " hidden-sm-and-down" },
                              [
                                _c("v-col", { attrs: { sm: "4" } }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "black--text font-weight-bold"
                                    },
                                    [_vm._v("Category")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-col", { attrs: { sm: "2" } }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "black--text font-weight-bold"
                                    },
                                    [_vm._v("Year")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-col", { attrs: { sm: "2" } }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "black--text font-weight-bold"
                                    },
                                    [_vm._v("Status")]
                                  )
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
                                            _c(
                                              "v-col",
                                              { attrs: { sm: "4" } },
                                              [
                                                reg
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "black--text font-weight-bold"
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            reg.category.code
                                                          )
                                                        )
                                                      ]
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
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            reg.category.name
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { sm: "2" } },
                                              [
                                                _c("div", [
                                                  _vm._v(
                                                    _vm._s(reg.expire_year)
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { sm: "2" } },
                                              [
                                                _c(
                                                  "span",
                                                  { attrs: { small: "" } },
                                                  [
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(reg.status) +
                                                        "\n                    "
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              { attrs: { sm: "2" } },
                                              [
                                                reg.status == "APPROVED"
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "d-flex justify-center"
                                                      },
                                                      [
                                                        reg.expire_year ==
                                                        _vm.currentyear
                                                          ? _c(
                                                              "div",
                                                              [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    staticClass:
                                                                      "blue white--text hidden-sm-and-down",
                                                                    attrs: {
                                                                      rounded:
                                                                        "",
                                                                      depressed:
                                                                        ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.downloadCertificate(
                                                                          reg.id
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Download"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    staticClass:
                                                                      "blue white--text hidden-md-and-up",
                                                                    attrs: {
                                                                      rounded:
                                                                        "",
                                                                      icon: ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.downloadCertificate(
                                                                          reg.id
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      [
                                                                        _vm._v(
                                                                          "fa fa-download"
                                                                        )
                                                                      ]
                                                                    )
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
                                                                  {
                                                                    attrs: {
                                                                      color:
                                                                        "red"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "fa fa-lock"
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(
                                                                  " Locked\n                          "
                                                                )
                                                              ],
                                                              1
                                                            )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
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
                              : _c("div", [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "red--text text-center pa-10"
                                    },
                                    [
                                      _vm._v(
                                        "No registrations found for the current year.Please note all registration for previous years have expire please  click button below to register your prefered categories "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: " d-flex justify-center" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            rounded: "",
                                            color: "green",
                                            small: ""
                                          },
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
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "12", sm: "4" } }, [
                  _c(
                    "div",
                    [
                      _c(
                        "v-list",
                        { attrs: { "two-line": "" } },
                        _vm._l(_vm.checkDocuments, function(document) {
                          return _c(
                            "div",
                            { key: document.id },
                            [
                              _c(
                                "v-list-item",
                                [
                                  _c(
                                    "v-list-item-content",
                                    [
                                      document
                                        ? _c("v-list-item-title", [
                                            _vm._v(_vm._s(document.name))
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("v-list-item-subtitle", [
                                        document.uploaded
                                          ? _c(
                                              "div",
                                              { staticClass: "green--text" },
                                              [_vm._v("Uploaded")]
                                            )
                                          : _c(
                                              "div",
                                              { staticClass: "red--text" },
                                              [_vm._v("Pending")]
                                            )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-action",
                                    [
                                      _c("upload", {
                                        attrs: { document: document },
                                        on: {
                                          refreshDashboard: _vm.getDashboard
                                        }
                                      })
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
                ])
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
                          "\n                    Please wait ....\n                    "
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
                  "\n                " +
                    _vm._s(_vm.message) +
                    "         \n                "
                )
              ]
            ),
            _vm._v(" "),
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
                  value: _vm.profileDialog,
                  callback: function($$v) {
                    _vm.profileDialog = $$v
                  },
                  expression: "profileDialog"
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
                                  [_vm._v("\n            Update\n            ")]
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
                                            items: _vm.typelist,
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
                attrs: { "max-width": "300" },
                model: {
                  value: _vm.changeDialog,
                  callback: function($$v) {
                    _vm.changeDialog = $$v
                  },
                  expression: "changeDialog"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c(
                      "v-form",
                      {
                        ref: "refform",
                        attrs: { "lazy-validation": "" },
                        model: {
                          value: _vm.refform,
                          callback: function($$v) {
                            _vm.refform = $$v
                          },
                          expression: "refform"
                        }
                      },
                      [
                        _c("v-card-title", [_vm._v("Update Ref Number")]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "div",
                              {
                                staticClass: "pa-10 red lighten-3 white--text"
                              },
                              [
                                _vm._v(
                                  "\n                      We could not find your reference number,Please  confirm with your bank if this is the correct reference Number\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
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
                                attrs: {
                                  rounded: "",
                                  outlined: "",
                                  color: "red"
                                }
                              },
                              [_vm._v(" Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  rounded: "",
                                  outlined: "",
                                  color: "green"
                                },
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
                        _vm._v(
                          "\n                              PAYMENT INSTRUCTIONS:"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                               BANK NAME: COMMERCIAL BANK OF ZIMBABWE"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                               ACCOUNT NUMBER: 01121064850020"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                BRANCH: KWAME NKRUMAH\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v("REFUNDABLE (LOCAL)(For Bid Bond Security)")
                        ]),
                        _c("br"),
                        _vm._v(
                          "\n                              PAYMENT INSTRUCTIONS:"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                               BANK NAME: COMMERCIAL BANK OF ZIMBABWE"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                               ACCOUNT NUMBER: 01121064850030"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                BRANCH: KWAME NKRUMAH\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [_vm._v("FCA ACCOUNT (USD DEPOSITS)")]),
                        _c("br"),
                        _vm._v(
                          "\n                              PAYMENT INSTRUCTIONS:"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                               BANK NAME: COMMERCIAL BANK OF ZIMBABWE"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                ACCOUNT NAME: PROCUREMENT REGULATORY AUTHORITY OF ZIMBABWE"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                               ACCOUNT NUMBER: 01121064850040"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                BRANCH: KWAME NKRUMAH"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                BRANCH SORT CODE:6101"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n                                SWIFT CODE: COBZZWHAXXX\n                            "
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a& ***!
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
      _vm.document.uploaded
        ? _c(
            "div",
            [
              _vm.document.status == "PENDING"
                ? _c(
                    "v-btn",
                    {
                      staticClass: "blue white--text",
                      attrs: { rounded: "", outlined: "", depressed: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = true
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\r\n                                    Edit\r\n                            "
                      )
                    ]
                  )
                : _c("div", { staticClass: "green--text" }, [
                    _vm._v("Approved")
                  ])
            ],
            1
          )
        : _c(
            "div",
            [
              _c(
                "v-btn",
                {
                  staticClass: "green white--text",
                  attrs: { rounded: "", outlined: "", depressed: "" },
                  on: {
                    click: function($event) {
                      _vm.dialog = true
                    }
                  }
                },
                [
                  _vm._v(
                    "\r\n                        Upload\r\n                     "
                  )
                ]
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
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
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
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v(_vm._s(_vm.document.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c("v-file-input", {
                            attrs: {
                              "show-size": "",
                              counter: "",
                              outlined: "",
                              label: "File input",
                              "prepend-icon": "mdi-pdf-box",
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
                          })
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
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "red white--text",
                          attrs: { rounded: "", outlined: "" }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "green white--text",
                          attrs: { rounded: "", outlined: "" },
                          on: { click: _vm.uploadFile }
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
  return _c("div", [_c("registered")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/claim.vue":
/*!************************************************!*\
  !*** ./resources/js/components/user/claim.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _claim_vue_vue_type_template_id_4504b983___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim.vue?vue&type=template&id=4504b983& */ "./resources/js/components/user/claim.vue?vue&type=template&id=4504b983&");
/* harmony import */ var _claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./claim.vue?vue&type=script&lang=js& */ "./resources/js/components/user/claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBanner */ "./node_modules/vuetify/lib/components/VBanner/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _claim_vue_vue_type_template_id_4504b983___WEBPACK_IMPORTED_MODULE_0__["render"],
  _claim_vue_vue_type_template_id_4504b983___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBanner: vuetify_lib_components_VBanner__WEBPACK_IMPORTED_MODULE_4__["VBanner"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__["VProgressLinear"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/claim.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/claim.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/user/claim.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./claim.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/claim.vue?vue&type=template&id=4504b983&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/user/claim.vue?vue&type=template&id=4504b983& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claim_vue_vue_type_template_id_4504b983___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./claim.vue?vue&type=template&id=4504b983& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/claim.vue?vue&type=template&id=4504b983&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claim_vue_vue_type_template_id_4504b983___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_claim_vue_vue_type_template_id_4504b983___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/registered.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/user/registered.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registered_vue_vue_type_template_id_778578cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registered.vue?vue&type=template&id=778578cb& */ "./resources/js/components/user/registered.vue?vue&type=template&id=778578cb&");
/* harmony import */ var _registered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registered.vue?vue&type=script&lang=js& */ "./resources/js/components/user/registered.vue?vue&type=script&lang=js&");
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
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _registered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registered_vue_vue_type_template_id_778578cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registered_vue_vue_type_template_id_778578cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemTitle"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_12__["VProgressLinear"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_14__["VSimpleTable"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbar"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbarItems"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/registered.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/registered.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/user/registered.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registered.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/registered.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/registered.vue?vue&type=template&id=778578cb&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/user/registered.vue?vue&type=template&id=778578cb& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registered_vue_vue_type_template_id_778578cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registered.vue?vue&type=template&id=778578cb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/registered.vue?vue&type=template&id=778578cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registered_vue_vue_type_template_id_778578cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registered_vue_vue_type_template_id_778578cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/upload.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/user/upload.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.vue?vue&type=template&id=7c3e914a& */ "./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a&");
/* harmony import */ var _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.vue?vue&type=script&lang=js& */ "./resources/js/components/user/upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VProgressLinear */ "./node_modules/vuetify/lib/components/VProgressLinear/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_8__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VProgressLinear: vuetify_lib_components_VProgressLinear__WEBPACK_IMPORTED_MODULE_10__["VProgressLinear"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_11__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/upload.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/user/upload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--11!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_11_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./upload.vue?vue&type=template&id=7c3e914a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/upload.vue?vue&type=template&id=7c3e914a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_template_id_7c3e914a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/dashboard_service.js":
/*!****************************************************!*\
  !*** ./resources/js/services/dashboard_service.js ***!
  \****************************************************/
/*! exports provided: getRegistrations, uploadDocument, updateProfile, downloadCertificate, claimReceipt, confirmReceipt, verify, updateREF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegistrations", function() { return getRegistrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadDocument", function() { return uploadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadCertificate", function() { return downloadCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "claimReceipt", function() { return claimReceipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmReceipt", function() { return confirmReceipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return verify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateREF", function() { return updateREF; });
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/http_service */ "./resources/js/services/http_service.js");

function getRegistrations() {
  return Object(_services_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('registrations');
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