<?php

namespace App\Http\Controllers\administrator;

use App\currency;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class currencyController extends Controller
{
     public function index(){
         $currency =  currency::get();
         return response()->json(['currency'=>$currency],200);
     }

     public function store(Request $request){
         $request->validate(['name'=>'required']);

         currency::firstOrCreate(['name'=>$request->name],['name'=>$request->name]);
         return  response()->json(['message'=>'success'],200);
     }

     public function update(Request $request,currency $currency){
         $request->validate(['name'=>'required']);
         $currency->name = $request->name;
         $currency->save();
         return  response()->json(['message'=>'success'],200);
     }

     public function destroy(currency $currency){
         if(count($currency->invoices)==0){
              $currency->delete();
         }else{
            $currency->status ="DELETED";
            $currency->save();
         }
         return  response()->json(['message'=>'success'],200);
     }
}
