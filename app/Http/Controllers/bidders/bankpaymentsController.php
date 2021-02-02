<?php

namespace App\Http\Controllers\bidders;

use App\banktransactions;
use App\Http\Controllers\Controller;
use App\online_invoice;
use App\supplier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class bankpaymentsController extends Controller
{
     public function index(){
         $payments = banktransactions::wherecustomer_number(Auth::user()->company->regnumber)->get();
         return response()->json(['payments'=>$payments],200);
     }

  
}
