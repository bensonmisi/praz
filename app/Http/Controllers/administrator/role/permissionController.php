<?php

namespace App\Http\Controllers\administrator\role;

use App\Http\Controllers\Controller;
use App\permissions;
use App\roles;
use Illuminate\Http\Request;

class permissionController extends Controller
{
     public function index($submodule,$role){
         $permissons = permissions::wheresubmodule_id($submodule)->with(['roles'=>function($query)use($role){
             $query->where('role_id','=',$role);
         }])
         ->get()
         ->map(function($permission){
          return[
              'id'=>$permission->id,
              'name'=>$permission->name,
              'assigned'=>count($permission->roles)>0 ? true : false
          ];
         });

         return response()->json(['permissions'=>$permissons],200);
     }
     public function assign(Request $request){
        $role = roles::whereid($request->role)->first();
        if($request->action =="attach")
        {
         $role->permissions()->attach($request->permission_id);
        }
        else{
         $role->permissions()->detach($request->permission_id); 
        }
      $role->save();
      $permissons = permissions::wheresubmodule_id($request->submodule)->with(['roles'=>function($query)use($request){
        $query->where('role_id','=',$request->role);
    }])
    ->get()
    ->map(function($permission){
     return[
         'id'=>$permission->id,
         'name'=>$permission->name,
         'assigned'=>count($permission->roles)>0 ? true : false
     ];
    });

    return response()->json(['permissions'=>$permissons],200);
     }
}
