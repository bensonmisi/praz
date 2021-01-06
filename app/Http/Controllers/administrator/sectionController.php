<?php

namespace App\Http\Controllers\administrator;

use App\Http\Controllers\Controller;
use App\sections;
use Illuminate\Http\Request;

class sectionController extends Controller
{
   public function index(){
       $sections = sections::get();
       return response()->json(['sections'=>$sections],200);
   }

   public function store(Request $request){
       $request->validate(['name'=>'required']);

       sections::firstOrCreate(['name'=>$request->name],['name'=>$request->name]);
        return response()->json(['message'=>'success'],200);
   }

   public function update(Request $request, sections $section){
       $request->validate(['name'=>'required']);
       $section->name = $request->name;
       $section->save();
       return response()->json(['message'=>'success'],200);
   }

   public function destroy(sections $section){
         if(count($section->categories)>0)
           {
              $section->status ="DELETED";
           }
           else
           {
           $section->delete();
           }

           return response()->json(['message'=>'success'],200);
   }
}
