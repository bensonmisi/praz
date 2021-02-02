<?php

namespace App\Repositories;

use App\administrator;
use App\Http\Requests\adminAuthRequest;
use App\Interfaces\administrator\AdminAuthInterface;
use App\Traits\ResponseAPI;
use Illuminate\Support\Facades\Auth;

class AuthAdminRepository implements AdminAuthInterface{
 use ResponseAPI;
    public function Login(adminAuthRequest $request)
    {
        $user =  administrator::with('role.modules.submodules')->whereauth_key($request->username)->first();
        if(!is_null($user))
        {
            if(!Hash::check($request->password,$user->password))
            {
                return $this->error('Invalid login credentials',500);
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