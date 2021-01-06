<?php

namespace App\Http\Controllers\bidders;

use App\Http\Controllers\Controller;
use App\Notifications\activation;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class userController extends Controller
{
   
    public function index()
    {
        $users = User::wherecompany_id(Auth::user()->company->id)->get();
        return response()->json(['users'=>$users],200);
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'surname'=>'required',
            'phone'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|min:8|confirmed']); 
            $company = Auth::user()->company;

            $user= User::create([
               'name'=>$request->name,
               'surname'=>$request->surname,
               'email'=>$request->email,
               'company_id'=>$company->id,
               'phone'=>$request->phone,
               'role_id'=>'9',
               'role'=>'bidder',
               'authcode'=>rand(100,1000),
               'status'=>'PENDING',
               'password'=>$request->password,
               'created_at'=>Auth::user()->id
               ]);
        $user->notify(new activation($user->email,$user->authcode));
        $users = User::wherecompany_id($user->company_id)->get();
        return response()->json(['users'=>$users],200);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'name'=>'required',
            'surname'=>'required',
            'phone'=>'required',
            'email'=>['required',Rule::unique('users')->ignore($id)],
            'password'=>'required|min:8|confirmed']);
          
                $user = User::whereid($id)->first();
                $user->name = $request->name;
                $user->surname = $request->surname;
                $user->phone = $request->phone;
                $user->email = $request->email;
                $user->password = $request->password;
                $user->save();
                $company = Auth::user()->company;
                $users = User::wherecompany_id($company->id)->get();
                return response()->json(['message'=>'Successful'],200);
          
    }

    public function change(Request $request, User $user){
        if(Auth::user()->id != $user->id)
        {
      $user->status = $request->status;
      $user->save();
      $users = User::wherecompany_id($user->company_id)->get();
      return response()->json(['users'=>$users],200);
        }else{
            return response()->json(['message'=>'User cannot change state of own instance'],500);  
        }
    } 

}
