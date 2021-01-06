<?php

namespace App\Http\Controllers\administrator;

use App\administrator;
use App\Http\Controllers\Controller;
use App\roles;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use serviceHelper;

class userController extends Controller
{
     public function index()
     {
         $users = administrator::get();
         $roles = roles::get();
         return response()->json(['users'=>$users,'roles'=>$roles],200);
     }

     public function store(Request $request){
        $request->validate(['name'=>'required','surname'=>'required','email'=>'required|unique:administrators,email','role'=>'required']);
        $service = new serviceHelper();
        $auth_code = 'admin_'.$service->get_last_administrator_id();
        administrator::create(['name'=>$request->name,'surname'=>$request->surname,'email'=>$request->email,'role_id'=>$request->role,'auth_key'=>$auth_code,'password'=>bcrypt('temp20192020'),'status'=>'ACTIVE']);
        return response()->json(['message'=>'Success'],200);
  
     }

     public function update(Request $request,administrator $administrator){
        $request->validate(['name'=>'required','surname'=>'required','email'=>['required',Rule::unique('administrators')->ignore($administrator->id)],'role'=>'required']);
        $administrator->name = $request->name;
        $administrator->surname = $request->surname;
        if($request->resetpwd){
            $administrator->password = bcrypt('temp20192020');
        }
        $administrator->status = $request->status;
        $administrator->save();
        return response()->json(['message'=>'Successfull'],200);
       
     }
}
