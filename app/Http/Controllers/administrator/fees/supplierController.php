<?php

namespace App\Http\Controllers\administrator\fees;

use App\currency;
use App\Http\Controllers\Controller;
use App\pricing;
use Illuminate\Http\Request;

class supplierController extends Controller
{
     public function index(){

        $currencylist = currency::get();
        $fees = pricing::get()
                       ->map(function($pricing){
                         return[
                             "id"=>$pricing->id,
                             "currency"=>$pricing->currency->name,
                             "locality"=>$pricing->locality,
                             "action"=>$pricing->action,
                             "price"=>$pricing->price,
                             "status"=>$pricing->status
                         ];
                       });

     return response()->json(['currencylist'=>$currencylist,'fees'=>$fees],200);
     }

     public function store(Request $request){
         $request->validate(['currency'=>'required','locality'=>'required','action'=>'required','price'=>'required']);
         pricing::create(['inventory_id'=>'1',
                          'currency_id'=>$request->currency,
                          'locality'=>$request->locality,
                           'action'=>$request->action,
                           'price'=>$request->price
                          ]);

         return response()->json(['message'=>'success'],200);
     }

     public function update(Request $request,pricing $pricing){
        $request->validate(['currency'=>'required','locality'=>'required','action'=>'required','price'=>'required']);
        $pricing->currency_id = $request->currency;
        $pricing->locality = $request->locality;
        $pricing->action = $request->action;
        $pricing->price = $request->price;
        $pricing->save();
        return response()->json(['message'=>'success'],200); 
     }

     public function destroy(pricing $pricing){
          $pricing->delete();
          return response()->json(['message'=>'success'],200);  
     }
}
