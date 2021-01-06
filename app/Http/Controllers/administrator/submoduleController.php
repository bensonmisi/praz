<?php

namespace App\Http\Controllers\administrator;

use App\Http\Controllers\Controller;
use App\submodules;
use Illuminate\Http\Request;

class submoduleController extends Controller
{
    public function index($id){
        $submodules = submodules::wheremodule_id($id)->get();
        return response()->json(['submodules'=>$submodules],200);
    }

    public function store(Request $request){
        $request->validate(['icon'=>'required','name'=>'required','url'=>'required']);
        submodules::firstOrCreate(
             ['module_id'=>$request->module,'name'=>$request->name],
             ['module_id'=>$request->module,'name'=>$request->name,'icon'=>$request->icon,'url'=>$request->url]
        );

        return response()->json(['message'=>'success'],200);
    }

   public function update(Request $request, submodules $submodule){
    $request->validate(['icon'=>'required','name'=>'required','url'=>'required']);
    $submodule->icon = $request->icon;
    $submodule->name = $request->name;
    $submodule->url = $request->url;
    $submodule->save();
    return response()->json(['message'=>'success'],200);

   }

   public function destroy(submodules $submodule)
   {
       if(count($submodule->permissions) == 0  || count($submodule->roles) == 0 ){
           $submodule->delete();
       }else{
           $submodule->status = "DELETED";
           $submodule->save();
       }

       return response()->json(['message'=>'success'],200);
   }
}
