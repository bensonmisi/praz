<?php

namespace App\Http\Controllers\administrator;

use App\Http\Controllers\Controller;
use App\modules;
use App\payments\gateway;
use App\roles;
use Illuminate\Http\Request;

class roleController extends Controller
{
     public function index(){
         $roles = roles::get();

         return response()->json(['roles'=>$roles],200);
     }

     public function store(Request $request)
     {
         $request->validate(['name'=>'required']);

         roles::firstOrCreate(['name'=>$request->name],['name'=>$request->name]);
         $roles = roles::get();
         return response()->json(['roles'=>$roles],200);
     }

     public function update(Request $request,roles $role){         
         $request->validate(['name'=>'required']);
          $role->name = $request->name;
          $role->save();
          $roles = roles::get();
         return response()->json(['roles'=>$roles],200);

     }

     public function destroy($id){
         $role = roles::whereid($id)->first();

         if(count($role->administrators)==0 && count($role->modules)==0){
             $role->delete();
         }else{
             $role->status = 'DELETED';
             $role->save();
         }
         $roles = roles::get();
         return response()->json(['roles'=>$roles],200);
     }

     public function show($id){
         $modules = modules::with(['roles'=>function($query)use($id){
            $query->where('role_id','=',$id);
         }])->get()->map(function($module){
             return[
                 'id'=>$module->id,
                 'name'=>$module->name,
                 'assigned'=>count($module->roles) >  0 ? true : false
             ];
         });

         return response()->json(['modules'=>$modules],200);
     }

     public function assign(Request $request){
         $role = roles::whereid($request->role_id)->first();
           if($request->action =="attach")
           {
            $role->modules()->attach($request->module_id);
           }
           else{
            $role->modules()->detach($request->module_id); 
           }
         $role->save();
         $modules = modules::with(['roles'=>function($query)use($request){
            $query->where('role_id','=',$request->role_id);
         }])->get()->map(function($module){
             return[
                 'id'=>$module->id,
                 'name'=>$module->name,
                 'assigned'=>count($module->roles) >  0 ? true : false
             ];
         });

         return response()->json(['modules'=>$modules],200); 
     }
}
