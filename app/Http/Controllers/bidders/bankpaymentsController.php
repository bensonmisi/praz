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

     public function store(Request $request){
         $request->validate(['refnumber'=>'required']);
         if(!online_invoice::where(['company_id'=>Auth::user()->company->id,'status'=>'AWAITING'])->exists())
           {
         $transaction = banktransactions::wheresource_reference($request->refnumber)->wherestatus('PENDING')->first();
         if(!is_null($transaction)){
               $transaction->customer_number = Auth::user()->company->regnumber;
               $transaction->status ="CLAIMED";
               $transaction->save() ;
               $payments = banktransactions::wherecustomer_number(Auth::user()->company->regnumber)->get();
               return response()->json(['payments'=>$payments],200);
         }else{
             return response()->json(['message'=>'Bank reference number not found please try again later. If this error persist for more that 48 hours please contact  our  Finance department'],500);
         }
        }else{
            return response()->json(['message'=>'Company has an invoice awaiting manual verification'],500);
      
        }
     }
}
