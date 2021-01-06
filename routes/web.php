<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
Route::get('/printinvoice/{inv}','invoiceController@download')->name('invoice_print');
Route::any('{all}', function () {
  return view('welcome');
})
->where(['all' => '.*']);