<?php

namespace App\Http\Controllers\administrator\fees;

use App\currency;
use App\Http\Controllers\Controller;
use App\pestabishmentfee;
use Illuminate\Http\Request;

class establishController extends Controller
{
  public function index(){
         $currencylist = currency::get();
         $fees = pestabishmentfee::get()
                                 ->map(function($fee){
                                     return[
                                         'id'=>$fee->id,
                                         'currency'=>$fee->currency->name,
                                         'lower'=>$fee->lower,
                                         'upper'=>$fee->upper,
                                         'validity'=>$fee->validity,
                                         'value'=>$fee->value
                                     ];
                                 });
        return response()->json(['currencylist'=>$currencylist,'fees'=>$fees],200);
  }

  public function store(Request $request){
      $request->validate(['currency'=>'required','lower'=>'required','upper'=>'required','validity'=>'required','value'=>'required']);
      pestabishmentfee::create([
                                'currency_id'=>$request->currency,
                                'lower'=>$request->lower,
                                'upper'=>$request->upper,
                                'validity'=>$request->validity,
                                'value'=>$request->value
                             ]);
     return response()->json(['message'=>'success'],200);
  }

  public function update(Request $request, pestabishmentfee $pestabishmentfee){
    $request->validate(['currency'=>'required','lower'=>'required','upper'=>'required','validity'=>'required','value'=>'required']);
    $pestabishmentfee->currency_id = $request->currency;
    $pestabishmentfee->lower = $request->lower;
    $pestabishmentfee->upper = $request->upper;
    $pestabishmentfee->validity = $request->validity;
    $pestabishmentfee->value = $request->value;
    $pestabishmentfee->save();
     return response()->json(['message'=>'success'],200);

  }

  public function destroy(pestabishmentfee $pestabishmentfee){
    $pestabishmentfee->delete();
      return response()->json(['message'=>'success'],200); 
  }
}
