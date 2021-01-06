<?php

namespace App\Http\Controllers\administrator;

use App\currency;
use App\exchange;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class exchangeController extends Controller
{
     public function index(){
         $currency = currency::wherestatus('CREATED')->get();
         $exchangelist = exchange::get()
                                ->map(function($exchange){
                                    return[
                                        'id'=>$exchange->id,
                                        'base'=>$exchange->base_currency->name,
                                        'other'=>$exchange->other_currency->name,
                                        'value'=>$exchange->value,
                                        'status'=>$exchange->status,
                                        'general'=>$exchange->general
                                        ];
                                });
         return response()->json(['currencylist'=>$currency,'exchangelist'=>$exchangelist]);
     }

     public function store(Request $request){
         $request->validate(['primary'=>'required','secondary'=>'required','supplier'=>'required','general'=>'required']);
         exchange::create(['other_id'=>$request->secondary,'base_id'=>$request->primary,'value'=>$request->supplier,'general'=>$request->general,'user_id'=>Auth::user()->id]);
         return response()->json(['message'=>'success'],200);
     }

     public function update(Request $request,exchange $exchange){
        $request->validate(['primary'=>'required','secondary'=>'required','supplier'=>'required','general'=>'required']);
        $exchange->base_id = $request->primary;
        $exchange->other_id = $request->secondary;
        $exchange->value = $request->supplier;
        $exchange->general = $request->general;
        $exchange->save();
        return response()->json(['message'=>'success'],200); 
     }

     public function destroy(exchange $exchange){
         if(count($exchange->invoices)>0){
             $exchange->status = 'DELETED';
             $exchange->save();
         }
         else{
              $exchange->delete();
         }
         return response()->json(['message'=>'success deleted'],200);  
     }
}
