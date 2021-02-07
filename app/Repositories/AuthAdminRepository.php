<?php

namespace App\Repositories;

use App\administrator;
use App\Http\Requests\adminAuthRequest;
use App\Http\Requests\changePasswordRequest;
use App\Interfaces\administrator\AdminAuthInterface;
use App\Traits\ResponseAPI;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthAdminRepository implements AdminAuthInterface{
 use ResponseAPI;
    public function Login(adminAuthRequest $request)
    {
        $user =  administrator::with('role.modules.submodules')->whereauth_key($request->username)->first();
        if(!is_null($user))
        {
            if($user->status=='BLOCKED'){
                return $this->error('ACCOUNT BLOCKED',500);
            }
            if(!Hash::check($request->password,$user->password))
            {
               return  $this->error('Invalid login credentials',500);
            }
        Auth::login($user);
        try{
             $tokenData = $user->createToken('Administrator access token',['administrator']);      
             $status =  !is_null($user->reset_date) ? Carbon::parse($user->reset_date)->gte(Carbon::now()) ? 'active':'expred' : 'expired';
            $access_token = $tokenData->accessToken;
            $token_type ="Bearer";
            $token_scope = $tokenData->token->scopes[0];
            $expires_at=Carbon::parse($tokenData->token->expires_at)->toDateTimeString();
            $data = compact('user','access_token','token_type','token_scope','expires_at','status');

             return $this->success("Success",$data);
        
    }catch(\Exception $e){
        return $this->error($e->getMessage(),500);
    }
     
    }else{
        return $this->error("Invalid Username & Password Combination",500);
    }
}

public function changePassword(changePasswordRequest $request,$user)
{
      $administrator = administrator::whereid($user->id)->first();
      $administrator->password = bcrypt($request->password);
      $administrator->reset_date = Carbon::now()->addMonth(1);
      $administrator->save();

       return $this->success('Password Successfully Changed',$administrator);
     
}

public function checkstatus($user_id){
    $user = administrator::whereid($user_id)->first();
    $status =  !is_null($user->reset_date) ? Carbon::parse($user->reset_date)->gte(Carbon::now()) ? 'active':'expired' : 'expired';
     return $status;
}
}