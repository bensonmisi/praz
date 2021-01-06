<?php

namespace App\Http\Controllers\administrator;

use App\Http\Controllers\Controller;
use App\modules;
use Illuminate\Http\Request;

class moduleController extends Controller
{
     public function index(){
         $modules = modules::get();
         return response()->json(['modules'=>$modules],200);
     }

     public function store(Request $request){
         $request->validate(['name'=>'required','icon'=>'required']);
         modules::firstOrCreate(['name'=>$request->name],['name'=>$request->name,'icon'=>$request->icon]);       
     }

     public function update(Request $request,modules $module){
          $request->validate(['name'=>'required','icon'=>'required']);
          $module->icon = $request->icon;
          $module->name = $request->name;
          $module->save();
     }

     public function delete($id){
         $module = modules::whereid($id)->first();
          if(count($module->submodules) == 0 || count($module->roles) ==0){
              $module->delete(); 
          }
          else{
              $module->status ='DELETED';
              $module->save();
          }
     }
}
