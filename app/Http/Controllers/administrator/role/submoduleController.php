<?php

namespace App\Http\Controllers\administrator\role;

use App\Http\Controllers\Controller;
use App\roles;
use App\submodules;
use Illuminate\Http\Request;

class submoduleController extends Controller
{
     public function index($module,$role){
         $submodules =  submodules::wheremodule_id($module)->with(['roles'=>function($query)use($role){
         $query->where('role_id','=',$role);
         }])
         ->get()
         ->map(function($submodule){
           return[
             'id'=>$submodule->id,
             'name'=>$submodule->name,
             'assigned'=> count($submodule->roles)>0 ? true : false
           ];
         });

         return response()->json(['submodules'=>$submodules],200);
     }

     public function assign(Request $request){
        $role = roles::whereid($request->role)->first();
        if($request->action =="attach")
        {
         $role->submodules()->attach($request->submodule_id);
        }
        else{
         $role->submodules()->detach($request->submodule_id); 
        }
      $role->save();
      $submodules =  submodules::wheremodule_id($request->module)->with(['roles'=>function($query)use($request){
        $query->where('role_id','=',$request->role);
        }])
        ->get()
        ->map(function($submodule){
          return[
            'id'=>$submodule->id,
            'name'=>$submodule->name,
            'assigned'=> count($submodule->roles)>0 ? true : false
          ];
        });

        return response()->json(['submodules'=>$submodules],200);
     }
}
