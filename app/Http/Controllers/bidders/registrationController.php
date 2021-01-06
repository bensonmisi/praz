<?php

namespace App\Http\Controllers\bidders;

use App\category;
use App\currency;
use App\Http\Controllers\Controller;
use App\online_invoice;
use App\regyear;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class registrationController extends Controller
{
      public function index(){
          $categorylist = category::wherestatus('CREATED')->get();
          $currency = currency::get();
          $years = regyear::where('year','>=',Carbon::now()->year)->get();
          $invoice = online_invoice::with('currency','category')
                                   ->wherecompany_id(Auth::user()->company->id)
                                   ->wherestatus('PENDING')
                                    ->get();
        $years = regyear::where('year','>=',Carbon::now()->year)->get();

         return response()->json(['categories'=>$categorylist,"currencylist"=>$currency,"years"=>$years,"invoice"=>$invoice]);
      }
}
