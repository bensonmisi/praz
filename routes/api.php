<?php

use App\Http\Controllers\administrator\accounttypeController;
use App\Http\Controllers\administrator\categoryController;
use App\Http\Controllers\administrator\companyController;
use App\Http\Controllers\administrator\currencyController;
use App\Http\Controllers\administrator\documentController;
use App\Http\Controllers\administrator\entity\capController;
use App\Http\Controllers\administrator\entity\classificationController;
use App\Http\Controllers\administrator\entity\pclassController;
use App\Http\Controllers\administrator\entity\thresholdController;
use App\Http\Controllers\administrator\exchangeController;
use App\Http\Controllers\administrator\fees\contractController;
use App\Http\Controllers\administrator\fees\establishController;
use App\Http\Controllers\administrator\fees\spocController;
use App\Http\Controllers\administrator\fees\supplierController as FeesSupplierController;
use App\Http\Controllers\administrator\finance\bankController;
use App\Http\Controllers\administrator\finance\onlineController as FinanceOnlineController;
use App\Http\Controllers\administrator\finance\refactorController;
use App\Http\Controllers\administrator\gazateController;
use App\Http\Controllers\administrator\loginController;
use App\Http\Controllers\administrator\moduleController;
use App\Http\Controllers\administrator\permissionController;
use App\Http\Controllers\administrator\reports\invoiceController;
use App\Http\Controllers\administrator\role\permissionController as RolePermissionController;
use App\Http\Controllers\administrator\role\submoduleController as RoleSubmoduleController;
use App\Http\Controllers\administrator\roleController;
use App\Http\Controllers\administrator\rtgsController;
use App\Http\Controllers\administrator\sectionController;
use App\Http\Controllers\administrator\submoduleController;
use App\Http\Controllers\administrator\supplierController;
use App\Http\Controllers\administrator\suppliers\categoryController as SuppliersCategoryController;
use App\Http\Controllers\administrator\suppliers\generalController;
use App\Http\Controllers\administrator\suppliers\monthlyController;
use App\Http\Controllers\administrator\suppliers\yearlyController;
use App\Http\Controllers\administrator\userController as AdministratorUserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\bidders\bankpaymentsController;
use App\Http\Controllers\bidders\bidbondController;
use App\Http\Controllers\bidders\certificateController;
use App\Http\Controllers\bidders\dashboardController;
use App\Http\Controllers\bidders\internalController;
use App\Http\Controllers\bidders\invoicingController;
use App\Http\Controllers\bidders\mobileController;
use App\Http\Controllers\bidders\noticeController;
use App\Http\Controllers\bidders\OnlineController;
use App\Http\Controllers\bidders\OnlinepaymentsController;
use App\Http\Controllers\bidders\qoutationController;
use App\Http\Controllers\bidders\receiptsController;
use App\Http\Controllers\bidders\userController;
use App\Http\Controllers\bidders\registration\documentsController as registrationDocumentsController;
use App\Http\Controllers\bidders\registration\invoicingController as registrationInvoicingController;
use App\Http\Controllers\entity\dashboardController as EntityDashboardController;
use App\Http\Controllers\entity\noticeController as EntityNoticeController;
use App\Http\Controllers\welcomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('welcome',[welcomeController::class,'index']);
Route::get('suppliers',[welcomeController::class,'suppliers']);
Route::get('notices',[welcomeController::class,'notices']);
Route::get('awards',[welcomeController::class,'awards']);
Route::post('verification',[welcomeController::class,'search']);

Route::resource('/sendPayment','transactions\bankController');



Route::group(['prefix'=>'auth'],function(){
    Route::get('accounttypes',[AuthController::class,'index']); 
    Route::post('register',[AuthController::class,'register']);
    Route::post('login',[AuthController::class,'login']);
    Route::get('logout',[AuthController::class,'logout']); 
    Route::post('forgot',[AuthController::class,'resetpwd']);
    Route::get('forgot/{email}',[AuthController::class,'forgot']); 
  });

  Route::group(['prefix'=>'auth-admin'],function(){
    Route::post('login',[loginController::class,'login']);
  });
  Route::group(['middleware'=>['auth:api']],function(){
    Route::get('user/profile',[AuthController::class,'profile']);
  });

  Route::group(['middleware'=>['auth:api','scope:bidder']],function(){
    /**
     * supplier registration  routes
     */
    Route::get('registration_documents',[registrationDocumentsController::class,'index']);
    Route::post('registration_document_upload',[registrationDocumentsController::class,'store']);

    /**
     * 
     */
    Route::get('dashboard',[dashboardController::class,'index']);
    Route::post('claimReceipt',[dashboardController::class,'claimReceipt']);
    Route::post('confirmReceipt',[dashboardController::class,'confirmReceipt']);    
    Route::get('onlinepayments',[onlineController::class,'index']);
    Route::get('checkonlinepayment',[onlineController::class,'check']);
    Route::get('internal/{currency}',[internalController::class,'index']);
    Route::post('internal',[internalController::class,'claim']);
    Route::post('internalregistration',[internalController::class,'registration']);
    Route::post('confirmTransaction',[internalController::class,'confirmTransaction']);
    Route::post('processAwaiting',[internalController::class,'processAwaiting']);
    Route::post('updatereference',[internalController::class,'verify']);
    Route::post('uploadDocument',[registrationDocumentsController::class,'upload']);
    Route::post('updateProfile',[dashboardController::class,'update']);
    Route::get('invoices',[invoicingController::class,'index']);
    Route::get('getinvoices',[invoicingController::class,'getAll']);
    Route::post('addInvoice',[invoicingController::class,'add']);   
    Route::delete('removeItem/{id}',[invoicingController::class,'destroy']);
    Route::get('/printinvoice/{inv}',[invoicingController::class,'download']);
    Route::get('/printcertificate/{id}',[certificateController::class,'download']);
    Route::post('mobilepayment',[mobileController::class,'initiate']);
    Route::get('confirmpayment/{id}',[mobileController::class,'confirm']);
    Route::get('payment/return',[mobileController::class,'update']);
    Route::get('receipts',[receiptsController::class,'index']);
    Route::get('receipt/{rpt}',[receiptsController::class,'download']);
    Route::get('bankpayments',[bankpaymentsController::class,'index']);
    Route::post('bankpayments',[bankpaymentsController::class,'store']);
    Route::get('Onlinepayments',[OnlinepaymentsController::class,'index']);
    Route::get('Onlinepayment/{id}',[OnlinepaymentsController::class,'check']);
    Route::get('Users',[userController::class,'index']);
    Route::post('User',[userController::class,'store']);
    Route::put('User/{id}',[userController::class,'update']);
    Route::post('User/{user}',[userController::class,'change']);
    Route::get('Notices',[noticeController::class,'index']);
    Route::post('addtenderItem',[noticeController::class,'additem']);
    Route::get('Notice/{id}',[noticeController::class,'show']);
    Route::get('verify/{id}',[dashboardController::class,'verify']);
    Route::get('Noticeinititate/{id}',[noticeController::class,'initiate']);
    Route::get('Noticepay/{id}',[noticeController::class,'pay']);
    Route::post('uploadQoutation',[qoutationController::class,'upload']);
    Route::get('bidbonds',[bidbondController::class,'index']);
    Route::get('biddownload/{id}',[bidbondController::class,'download']);
  });
  Route::group(['middleware'=>['auth:api','scope:entity']],function(){
   Route::get('Entity/Notices',[EntityDashboardController::class,'index']);
   Route::get('Entity/Settings',[EntityDashboardController::class,'settings']);
   Route::post('Entity/Notice',[EntityNoticeController::class,'store']);
  });

  Route::group(['middleware'=>['auth:api','checkSubModule','scope:administrator']],function(){
    Route::group(['prefix'=>'administrator'],function(){
         Route::get('roles',[roleController::class,'index'])->name('admin.roles');
         Route::get('sections',[sectionController::class,'index'])->name('admin.sections');
         Route::get('categorylist',[categoryController::class,'index'])->name('admin.category');
         Route::get('users',[AdministratorUserController::class,'index'])->name('admin.users');
         Route::get('modules',[moduleController::class,'index'])->name('admin.modules');
         Route::get('currency',[currencyController::class,'index'])->name('admin.currency');
         Route::get('exchange',[exchangeController::class,'index'])->name('admin.exchange');
         Route::get('supplierfees',[FeesSupplierController::class,'index'])->name('admin.fees.suppliers');
         Route::get('contractfees',[contractController::class,'index'])->name('admin.fees.contract');
         Route::get('establishfees',[establishController::class,'index'])->name('admin.fees.establish');
         Route::get('spocfees',[spocController::class,'index'])->name('admin.fees.spoc');
         Route::get('bondcaps',[capController::class,'index'])->name('admin.cap');     
         Route::get('classifications',[classificationController::class,'index'])->name('admin.classification');
         Route::get('pclass',[pclassController::class,'index'])->name('admin.pclass');
         Route::get('threshold',[thresholdController::class,'index'])->name('admin.threshold');
         Route::get('accounttypes',[accounttypeController::class,'index'])->name('admin.accounttypes');
         Route::get('banktransactions',[bankController::class,'index'])->name('admin.transactions.index');
         Route::get('onlinetransactions',[FinanceOnlineController::class,'index'])->name('admin.onlinepayments.index');
         Route::get('gazzate',[gazateController::class,'index'])->name('admin.gazzatte.index');
         Route::get('rtgs/pending',[rtgsController::class,'pending'])->name('admin.rtgs');
         Route::get('reports/invoices',[invoiceController::class,'index'])->name('admin.finance.index');
         Route::post('company',[companyController::class,'index'])->name('admin.customer');         
         Route::post('suppliers/pending',[companyController::class,'index'])->name('can_suppliers_pending');
         Route::get('suppliers/monthly',[monthlyController::class,'index'])->name('can_suppliers_monthly');
         Route::get('suppliers/yearly',[yearlyController::class,'index'])->name('can_suppliers_yearly');
         Route::get('suppliers/category',[SuppliersCategoryController::class,'index'])->name('can_suppliers_category');
         Route::post('suppliers/monthly',[monthlyController::class,'search'])->name('search_suppliers_monthly');
         Route::get('reporting/suppliers',[generalController::class,'index'])->name('admin.suppliers.index');
         Route::post('reporting/suppliers',[generalController::class,'search'])->name('admin.suppliers.search');
         Route::get('finance/refactor',[refactorController::class,'index'])->name('admin.finance.refactor');
         Route::get('submodules/{id}',[submoduleController::class,'index'])->name('admin.submodules');
         Route::get('permissions/{id}',[permissionController::class,'index'])->name('admin.permissions');
         Route::get('documents/{id}',[documentController::class,'index'])->name('admin.documents');
      
    });
  });
  Route::group(['middleware'=>['auth:api','checkPermission','scope:administrator']],function(){
    Route::group(['prefix'=>'administrator'],function(){
    Route::post('role',[roleController::class,'store'])->name('can_add_role');
    Route::post('banktransactions',[bankController::class,'search'])->name('admin.transactions.search');    
    Route::post('onlinetransactions',[FinanceOnlineController::class,'search'])->name('admin.onlinepayments.search');
    Route::post('banktransactions/download',[bankController::class,'download'])->name('admin.transactions.download');
    Route::post('onlinetransactions/download',[FinanceOnlineController::class,'download'])->name('admin.onlinepayments.download');
    Route::post('role/{role}',[roleController::class,'update'])->name('can_edit_role');
    Route::delete('role/{id}',[roleController::class,'destroy'])->name('can_remove_role');
    Route::post('exchange',[exchangeController::class,'store'])->name('can_add_exchange');
    Route::post('exchange/{exchange}',[exchangeController::class,'update'])->name('can_edit_exchange');
    Route::delete('exchange/{exchange}',[exchangeController::class,'destroy'])->name('can_remove_exchange');
    Route::post('accounttype',[accounttypeController::class,'store'])->name('can_add_accounttype');
    Route::post('accounttype/{accounttype}',[accounttypeController::class,'update'])->name('can_edit_accounttype');
    Route::delete('accounttype/{id}',[accounttypeController::class,'destroy'])->name('can_remove_accounttype');
    Route::post('section',[sectionController::class,'store'])->name('can_add_section');
    Route::post('section/{section}',[sectionController::class,'update'])->name('can_edit_section');
    Route::delete('section/{section}',[sectionController::class,'destroy'])->name('can_remove_section');
    Route::post('category',[categoryController::class,'store'])->name('can_add_category');
    Route::post('categoryupload',[categoryController::class,'upload'])->name('can_upload_category');
    Route::post('category/{category}',[categoryController::class,'update'])->name('can_edit_category');
    Route::delete('category/{category}',[categoryController::class,'destroy'])->name('can_remove_category');
    Route::post('finance/refactor',[refactorController::class,'process'])->name('admin.finance.refactor.process');
    Route::get('role/modules/{id}',[roleController::class,'show'])->name('can_assign_module');
    Route::post('registration/update/{supplier}',[companyController::class,'registration'])->name('can_update_registration');
    Route::post('role/module/assign',[roleController::class,'assign'])->name('can_assign_module_view');
    Route::post('role/submodule/assign',[RoleSubmoduleController::class,'assign'])->name('can_assign_submodule_view');
    Route::post('role/permission/assign',[RolePermissionController::class,'assign'])->name('can_assign_permissions_save');
    Route::get('role/submodule/{module}/{role}',[RoleSubmoduleController::class,'index'])->name('can_assign_submodule_save');
    Route::get('role/permission/{submodule}/{role}',[RolePermissionController::class,'index'])->name('can_assign_permissions_view');
    Route::post('user',[AdministratorUserController::class,'store'])->name('can_add_user');
    Route::post('user/{administrator}',[AdministratorUserController::class,'update'])->name('can_edit_user');
    Route::get('rtgs/show/{id}',[rtgsController::class,'show'])->name('can_view_rtgs');
    Route::get('rtgs/statement/{currency}',[rtgsController::class,'statement'])->name('can_view_statement');
    Route::post('rtgs/statement',[rtgsController::class,'store'])->name('can_store_statement');
    Route::get('rtgs/comments/{id}',[rtgsController::class,'comments'])->name('can_view_comments');
    Route::post('rtgs/comments',[rtgsController::class,'saveComment'])->name('can_save_comment');
    Route::get('company/{id}',[companyController::class,'show'])->name('can_show_customer');
    Route::post('company/update',[companyController::class,'update'])->name('can_update_customer');
    Route::post('company/user/create',[companyController::class,'add'])->name('can_user_add');
    Route::get('user/passwordreset/{id}',[companyController::class,'passwordreset'])->name('can_user_reset');
    Route::get('suppliers/pending',[supplierController::class,'pending'])->name('can_suppliers_pending');
    Route::get('suppliers/pending/{id}',[supplierController::class,'show'])->name('can_suppliers_pending_view');
    Route::post('suppliers/comment',[supplierController::class,'comment'])->name('can_suppliers_comment');
    Route::get('suppliers/approve/{id}',[supplierController::class,'approve'])->name('can_suppliers_approve');   
    Route::post('reports/finance/invoices',[invoiceController::class,'search'])->name('can_view_report_invoices');
    Route::post('reports/finance/download',[invoiceController::class,'download'])->name('can_download_report_finance');
    Route::post('module',[moduleController::class,'store'])->name('can_add_module');
    Route::post('module/{module}',[moduleController::class,'update'])->name('can_update_module');
    Route::delete('module/{module}',[moduleController::class,'delete'])->name('can_delete_module');
    Route::post('submodule',[submoduleController::class,'store'])->name('can_add_submodule');
    Route::post('submodule/{submodule}',[submoduleController::class,'update'])->name('can_update->submodule');
    Route::delete('submodule/{submodule}',[submoduleController::class,'destroy'])->name('cn_destroy_submodule');
    Route::post('permission',[permissionController::class,'store'])->name('can_add_permission');
    Route::post('permission/{permission}',[permissionController::class,'update'])->name('can_update_permission');
    Route::delete('permission/{permission}',[permissionController::class,'destroy'])->name('can_destroy_permission');
    Route::post('document',[documentController::class,'store'])->name('can_add_document');
    Route::post('document/{document}',[documentController::class,'update'])->name('can_update_document');
    Route::delete('document/{document}',[documentController::class,'destroy'])->name('can_destroy_document');
    Route::post('currency',[currencyController::class,'store'])->name('can_add_currency');
    Route::post('currency/{currency}',[currencyController::class,'update'])->name('can_update_currency');
    Route::delete('currency/{currency}',[currencyController::class,'destroy'])->name('can_destroy_currency');
    Route::post('supplierfee',[FeesSupplierController::class,'store'])->name('can_add_supplier_fee');
    Route::post('supplierfee/{pricing}',[FeesSupplierController::class,'update'])->name('can_update_supplier_fee');
    Route::delete('supplierfee/{pricing}',[FeesSupplierController::class,'destroy'])->name('can_destroy_supplier_fee');
    Route::post('contractfee',[contractController::class,'store'])->name('can_add_contract_fee');
    Route::post('contractfee/{pcontractfee}',[contractController::class,'update'])->name('can_update_contract_fee');
    Route::delete('contractfee/{pcontractfee}',[contractController::class,'destroy'])->name('can_destroy_contract_fee');
    Route::post('establishfee',[establishController::class,'store'])->name('can_add_establish_fee');
    Route::post('establishfee/{pestabishmentfee}',[establishController::class,'update'])->name('can_update_establish_fee');
    Route::delete('establishfee/{pestabishmentfee}',[establishController::class,'destroy'])->name('can_destroy_establish_fee');
    Route::post('spocfee',[spocController::class,'store'])->name('can_add_spoc_fee');
    Route::post('spocfee/{pspocfee}',[spocController::class,'update'])->name('can_update_spoc_fee');
    Route::delete('spocfee/{pspocfee}',[spocController::class,'destroy'])->name('can_destroy_spoc_fee');
    Route::post('bondcap',[capController::class,'store'])->name('can_add_cap');
    Route::post('bondcap/{pbondcap}',[capController::class,'update'])->name('can_update_cap');
    Route::delete('bondcap/{pbondcap}',[capController::class,'destroy'])->name('can_delete_cap');
    Route::post('classification',[classificationController::class,'store'])->name('can_add_classification');
    Route::post('classification/{pclassification}',[classificationController::class,'update'])->name('can_update_classification');
    Route::delete('classification/{pclassification}',[classificationController::class,'destroy'])->name('can_delete_classification');
    Route::post('pclass',[pclassController::class,'store'])->name('can_add_pclass');
    Route::post('pclass/{pclass}',[pclassController::class,'update'])->name('can_update_pclass');
    Route::delete('pclass/{pclass}',[pclassController::class,'destroy'])->name('can_delete_pclass');
    Route::post('threshold',[thresholdController::class,'store'])->name('can_add_threshold');
    Route::post('threshold/{pthreshold}',[thresholdController::class,'update'])->name('can_update_threshold');
    Route::delete('threshold/{pthreshold}',[thresholdController::class,'destroy'])->name('can_delete_threshold');
    Route::post('gazzate',[gazateController::class,'store'])->name('can_add_gazzate');
    Route::get('gazzate/{id}',[gazateController::class,'download'])->name('admin.gazzatte.download');
    Route::post('gazzate/{gazzate}',[gazateController::class,'update'])->name('can_update_gazzate');
    Route::delete('gazzate/{gazzate}',[gazateController::class,'destroy'])->name('can_destroy_gazzate');

  });
  });