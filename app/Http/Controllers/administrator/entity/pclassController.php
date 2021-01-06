<?php

namespace App\Http\Controllers\administrator\entity;

use App\Http\Controllers\Controller;
use App\pclass;
use Illuminate\Http\Request;

class pclassController extends Controller
{
     public function index(){
         $pclass = pclass::get();
         return response()->json(['pclass'=>$pclass],200);
     }

     public function store(Request $request){
       $request->validate(['name'=>'required']);
       pclass::firstOrCreate(['name'=>$request->name],['name'=>$request->name]);
       return response()->json(['message'=>'success'],200);
     }

     public function update(Request $request,pclass $pclass){
         $request->validate(['name'=>'required']);
         $pclass->name = $request->name;
         $pclass->save();
         return response()->json(['message'=>'success'],200);
     }

     public function destroy(pclass $pclass){
         $pclass->delete();
         return response()->json(['message'=>'success'],200);
     }
}
