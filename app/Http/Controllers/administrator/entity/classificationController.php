<?php

namespace App\Http\Controllers\administrator\entity;

use App\Http\Controllers\Controller;
use App\pclassification;
use Illuminate\Http\Request;

class classificationController extends Controller
{
     public function index(){
         $classifications = pclassification::get();
         return response()->json(['classifications'=>$classifications],200);
     }

     public function store(Request $request){
         $request->validate(['name'=>'required']);
         pclassification::create(['name'=>$request->name]);

         return response()->json(['message'=>'success'],200);
     }

     public function update(Request $request, pclassification $pclassification)
     {
          $request->validate(['name'=>'required']);

          $pclassification->name = $request->name;
          $pclassification->save();
          return response()->json(['message'=>'success'],200);

     }

     public function destroy(pclassification $pclassification){
         $pclassification->delete();
         return response()->json(['message'=>'success'],200);
     }
}
