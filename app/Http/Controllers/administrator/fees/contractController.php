<?php

namespace App\Http\Controllers\administrator\fees;

use App\currency;
use App\Http\Controllers\Controller;
use App\pcontractfee;
use Illuminate\Http\Request;

class contractController extends Controller
{
     public function index(){
         $currencylist = currency::get();
         $fees = pcontractfee::get()
                             ->map(function($fee){
                                 return[
                                     'id'=>$fee->id,
                                     'currency'=>$fee->currency->name,
                                     'lower'=>$fee->lower,
                                     'upper'=>$fee->upper,
                                     'value'=>$fee->value
                                 ];
                             });

         return response()->json(['currencylist'=>$currencylist,'fees'=>$fees],200);
     }

     public function store(Request $request){
         $request->validate(['currency'=>'required','lower'=>'required','upper'=>'required','value'=>'required']);
          pcontractfee::create([
                                'currency_id'=>$request->currency,
                                'lower'=>$request->lower,
                                'upper'=>$request->upper,
                                'value'=>$request->value
                                ]);
             return response()->json(['message'=>'success'],200);
     }

     public function update(Request $request,pcontractfee $pcontractfee){
        $request->validate(['currency'=>'required','lower'=>'required','upper'=>'required','value'=>'required']); 
       
        $pcontractfee->currency_id = $request->currency;
        $pcontractfee->lower = $request->lower;
        $pcontractfee->upper = $request->upper;
        $pcontractfee->value = $request->value;
        $pcontractfee->save();
        return response()->json(['message'=>'success updated'],200);
     }

     public function destroy(pcontractfee $pcontractfee){
          $pcontractfee->delete();
          return response()->json(['message'=>'success'],200);
     }
}
