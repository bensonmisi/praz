<?php

namespace App\Http\Controllers\administrator\fees;

use App\currency;
use App\Http\Controllers\Controller;
use App\pspocfee;
use App\pthreshold;
use Illuminate\Http\Request;

class spocController extends Controller
{
    public function index(){
        $currencylist = currency::get();
        $thresholdlist = pthreshold::with('classification','pclass')->get()
                                ->map(function($threshold){
                                      $classification = !is_null($threshold->classification) ?  $threshold->classification->name :'null';
                                      $class = !is_null($threshold->pclass) ? $threshold->pclass->name : 'null';
                                    return[
                                        'id'=>$threshold->id,
                                        'value'=>$classification.'--'.$class.'--'.$threshold->value
                                    ];
                                });
        $fees =  pspocfee::get()
                         ->map(function($fee){
                             return[
                                 'id'=>$fee->id,
                                 'currency'=>$fee->currency->name,
                                 'locality'=>$fee->locality,
                                 'threshold'=>$fee->threshold->value, 
                                 'value'=>$fee->value
                             ];
                         });
     return response()->json(['currencylist'=>$currencylist,'fees'=>$fees,'threshold'=>$thresholdlist]);
    }

    public function store(Request $request){
        $request->validate(['currency'=>'required','threshold'=>'required','value'=>'required','locality'=>'required']);
        pspocfee::firstOrCreate(['pthreshold_id'=>$request->threshold],['currency_id'=>$request->currency,'pthreshold_id'=>$request->threshold,'value'=>$request->value,'locality'=>$request->locality]);
        return response()->json(['message'=>'success'],200);
    }

   public function update(Request $request,pspocfee $pspocfee){
    $request->validate(['currency'=>'required','threshold'=>'required','value'=>'required','locality'=>'required']);
    $pspocfee->currency_id = $request->currency;
    $pspocfee->pthreshold_id = $request->threshold;
    $pspocfee->value = $request->value;
    $pspocfee->locality = $request->locality;
    $pspocfee->save();
     return response()->json(['message'=>'success'],200);

   }

   public function destroy(pspocfee $pspocfee){
    $pspocfee->delete();
       return response()->json(['message'=>'success'],200);
   }
}
