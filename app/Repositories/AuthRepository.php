<?php 
namespace App\Repositories;

use App\accounttype;
use App\Events\Passwordreset;
use App\Helpers\generalHelpers;
use App\Http\Requests\AccountCreationRequest;
use App\Http\Requests\loginRequest;
use App\Http\Requests\passwordResetRequest;
use App\Interfaces\bidder\AuthInterface;
use App\Traits\ResponseAPI;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\User;

class AuthRepository implements AuthInterface{
     use ResponseAPI;

     private $helper;

     public function __construct(generalHelpers $helper)
     {
          $this->helper = $helper;
     }
    public function getAccountTypes(){
       return accounttype::get();
    }

    public function Register(AccountCreationRequest $request){
        $message ="";
        if($this->helper->checkCompany($request->company)==0){
            $locality ="";
            if($request->company==='Zimbabwe')
              {
                  $locality = "local";
              }else{
                  $locality ="foreign";
              }
            $company = company::create([
                'regnumber'=>$this->helper->regnumber(),
                'name'=>$request->company,
                'sector'=>$request->sector,
                'accounttype_id'=>$request->accounttype,
                'city'=>$request->city,
                'country'=>$request->country,
                'locality'=>$locality,
                'province'=>$request->province,
                'district'=>$request->district
            ]);

            User::create([
                        'name'=>$request->name,
                        'surname'=>$request->surname,
                        'email'=>$request->email,
                        'company_id'=>$company->id,
                        'phone'=>$request->phone,
                        'role_id'=>'9',
                        'authcode'=>rand(100,1000),
                        'status'=>'PENDING',
                        'password'=>$request->password
                        ]);
            return $this->success('Account successfully created please login',200);
        }else{
          $message="Company name already exist in our database please click on forgot password to reset";
        }

        return $this->error($message,500);

    }

    public function Login(loginRequest $request){
        if(!Auth::attempt(['email'=>$request->email,"password"=>$request->password])){
            return  $this->error('Invalid Email / Password Combination',401);
        }
         $user = $request->user();   
         try{
        $tokenData = $user->generate_token();  
        $token = $tokenData->token;
        if($request->remember_me){
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        if($token->save()){
            $user = $user->formate();
            $access_token = $tokenData->accessToken;
            $token_type ="Bearer";
            $token_scope = $tokenData->token->scopes[0];
            $expires_at=Carbon::parse($tokenData->token->expires_at)->toDateTimeString();
             $data = compact('user','access_token','token_type','token_scope','expires_at');

             return $this->success("Success",$data);
        }
    }catch(\Exception $e){
        return $this->error($e->getMessage(),500);
    }
      
        
    }

    public function Logout(Request $request){
        if(!is_null($request->user()))
        {
          $request->user()->token()->revoke();
        }
        return $this->success("Successfully Logout",200);
    }

    public function Forgot($email){
        $user = User::whereemail($email)->first();
        if(!is_null($user))
         {
             $token = Str::random(60);
             password_resets::create(['email'=>$email,'token'=>$token]);      
              event(new Passwordreset($token,$user));

              return $this->success('Password reset link successfully send  to your email: '.$email,200);
         }
         else{
             return $this->error('Email not found',500);
         }
    }

    public function resetPassword(passwordResetRequest $request){
        if(password_resets::where(['email'=>$request->email,'token'=>$request->token])->exists()){
            $user = User::whereemail($request->email)->first();
            $user->password = $request->password;
            $user->save();
        return $this->success('Password reset successfully completed. Please login',200);
     }else{
         return $this->error('Password Reset token mismatch',500);
     }
    }
    
}