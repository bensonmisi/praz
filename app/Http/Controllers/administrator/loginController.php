<?php

namespace App\Http\Controllers\administrator;

use App\administrator;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class loginController extends Controller
{
     public function login(Request $request){
         $request->validate(['username'=>'required','password'=>'required']);
         $user =  administrator::with('role.modules.submodules')->whereauth_key($request->username)->first();
         if(!is_null($user))
         {
             if(!Hash::check($request->password,$user->password))
             {
                return response()->json(['message'=>'Invalid login credentials'],500);
             }
         Auth::login($user);
        $tokenData = $user->createToken('Administrator access token',['administrator']);    
       
         
            return response()->json([
                'user'=>$user,
                'access_token'=>$tokenData->accessToken,
                'token_type'=>'Bearer',
                'token_scope'=>$tokenData->token->scopes[0], 
                'status_code'=>200
            ]);
         }else{
             return response()->json(['message'=>'Invalid login Details'],500);
         }
     
     }
}
