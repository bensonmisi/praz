<?php

namespace App\Http\Controllers\administrator\entity;

use App\currency;
use App\Http\Controllers\Controller;
use App\pclass;
use App\pclassification;
use App\pthreshold;
use Illuminate\Http\Request;

class thresholdController extends Controller
{
     public function index(){
         $pclass = pclass::get();
         $pclassification = pclassification::get();
         $currencylist = currency::get();
         $thresholdlist = pthreshold::with('classification','pclass')
                                    ->get()
                                    ->map(function($threshold){
                                        $classification = !is_null($threshold->classification) ?  $threshold->classification->name :'null';
                                        $class = !is_null($threshold->pclass) ? $threshold->pclass->name : 'null';
                                        return[
                                            'id'=>$threshold->id,
                                            'value'=>$threshold->value,
                                            'class'=>$class,
                                            'classification'=>$classification,
                                            'currency'=>$threshold->currency->name,
                                            'locality'=>$threshold->locality
                                        ];
                                    });
         return response()->json(['pclass'=>$pclass,'pclassification'=>$pclassification,'thresholdlist'=>$thresholdlist,'currencylist'=>$currencylist]);
     }

     public function store(Request $request){
         $request->validate(['locality'=>'required','pclass'=>'required','pclassification'=>'required','value'=>'required','currency'=>'required']);
         pthreshold::create(['pclass_id'=>$request->pclass,'locality'=>$request->locality,'pclassification_id'=>$request->pclassification,'value'=>$request->value,'currency_id'=>$request->currency]);
         return response()->json(['message'=>'success'],200);
     }

    public function update(Request $request ,pthreshold $pthreshold){
        $request->validate(['locality'=>'required','pclass'=>'required','pclassification'=>'required','value'=>'required','currency'=>'required']);
         $pthreshold->locality = $request->locality;
         $pthreshold->pclass_id = $request->pclass;
         $pthreshold->pclassification_id = $request->pclassification;
         $pthreshold->value = $request->value;
         $pthreshold->currency_id = $request->currency;
         $pthreshold->save();
         return response()->json(['message'=>'success'],200);
    }

  public function destroy(pthreshold $pthreshold){
      $pthreshold->delete();
      return response()->json(['message'=>'success'],200);

  }
}
