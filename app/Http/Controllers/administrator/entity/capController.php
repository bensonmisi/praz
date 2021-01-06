<?php

namespace App\Http\Controllers\administrator\entity;

use App\Http\Controllers\Controller;
use App\pbondcap;
use Illuminate\Http\Request;

class capController extends Controller
{
     public function index(){
         $caplist =  pbondcap::get();
         return response()->json(['caplist'=>$caplist],200);
     }

     public function store(Request $request){
         $request->validate(['value'=>'required']);
         pbondcap::create(['value'=>$request->value]);
         return response()->json(['message'=>'success'],200);
     }

     public function update(Request $request,pbondcap $pbondcap){
        $request->validate(['value'=>'required']);
         $pbondcap->value = $request->value;
         $pbondcap->save();
         return response()->json(['message'=>'success'],200);
     }

     public function destroy(pbondcap $pbondcap){
         $pbondcap->delete();
         return response()->json(['message'=>'success'],200);
     }
}
