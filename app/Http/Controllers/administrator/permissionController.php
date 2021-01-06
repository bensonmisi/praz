<?php

namespace App\Http\Controllers\administrator;

use App\Http\Controllers\Controller;
use App\permissions;
use Illuminate\Http\Request;

class permissionController extends Controller
{
     public function index($id)
     {
         $permissions = permissions::wheresubmodule_id($id)->get();
         return response()->json(['permissions'=>$permissions],200);
     }

     public function store(Request $request){
         $request->validate(['name'=>'required']);
         permissions::firstOrCreate(['name'=>$request->name],['name'=>$request->name,'submodule_id'=>$request->submodule]);
         return response()->json(['message'=>'success'],200);
     }

     public function update(Request $request,permissions $permission){
         $request->validate(['name'=>'required']);
         $permission->name = $request->name;
         $permission->save();
         return response()->json(['message'=>'success'],200);

     }

     public function destroy($id){
         $permission = permissions::whereid($id)->first();
         if(count($permission->roles)>0){
            $permission->roles()->detach();
        }
        $permission->delete();
        return response()->json(['message'=>'success'],200);
        
         
     }
}
