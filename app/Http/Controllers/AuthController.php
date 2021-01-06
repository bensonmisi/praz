<?php

namespace App\Http\Controllers;

use App\accounttype;
use App\company;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{

    public function index(){
        $accounttype = accounttype::get();
        return response()->json($accounttype,200);
    }
    public function login(Request $request){
        $request->validate([
            'email'=>'required|email',
            'password'=>'required|string|min:8'
            ]);
        
            
            if(!Auth::attempt(['email'=>$request->email,"password"=>$request->password])){
                return  response()->json(['message'=>'Invalid Email / Password Combination','status_code'=>401],401);
            }
            $user = $request->user();   
             
            $tokenData = $user->createToken('Personal Access Token',['bidder']);    
            if($user->role=='entity')  {
                $tokenData = $user->createToken('Personal Access Token',['entity']);
            }    
          $token = $tokenData->token;
            if($request->remember_me){
                $token->expires_at = Carbon::now()->addWeeks(1);
            }
            if($token->save()){
                $user =  User::with('company')->whereid($request->user()->id)->first();
                return response()->json([
                    'user'=>$user,
                    'access_token'=>$tokenData->accessToken,
                    'token_type'=>'Bearer',
                    'token_scope'=>$tokenData->token->scopes[0],
                    'expires_at'=>Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                    'status_code'=>200
                ]);
            }else{
                return response()->json([
                    'message'=>'Some error occurred, Please try again',
                    'status_code'=>500
                ],500);
            }

    }

    public function register(Request $request){
        $request->validate([
            'name'=>'required',
            'surname'=>'required',
            'phone'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|min:8|confirmed',
            'company'=>'required',
            'accounttype'=>'required',
            'city'=>'required',
            'country'=>'required',
            'accounttype'=>'required',
            'province'=>'required_if:country,Zimbabwe',
            'district'=>'required_if:country,Zimbabwe'
            ]);
            $check = $this->check_company($request->company);
            if($check==0)
            {
                $locality ="";
                if($request->company==='Zimbabwe')
                  {
                      $locality = "local";
                  }else{
                      $locality ="foreign";
                  }
                $company = company::create([
                    'regnumber'=>$this->regnumber(),
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
                            return response()->json(['message'=>'Successfully Created Your Account  Please Login','status_code'=>201],201);
               
            }else{

                $user = User::wherecompany_id($check)->first();
                if(!is_null($user))
                  {
                    if(is_null($user->authcode))
                       {
                         $user->authcode = rand(100,1000);
                         $user->save();
                       }
                       return response()->json(['message'=>'Company Name Already In Our System. Please login , if you dnt remember the password click on Forgot password link','status_code'=>500],500);
          
                  }else{
                       return response()->json(['message'=>'Company Name Already In Our System. We failed to find any user details please contact our IT to correct this error','status_code'=>500],500);
          
                }
                
            }
    }

    public function logout(Request $request){
        if(!is_null($request->user()))
          {
            $request->user()->token()->revoke();
          }
        return response()->json([
            'message'=>'Logout Successfull',
            'status_code'=>200
        ],200);

        
    }

    public function profile(Request $request){
        $user =  User::with('company')->whereid($request->user()->id)->first();
        return response()->json(['user'=>$user,'status_code'=>200],200);
    }
    function check_company($name){
        $cleanname =  preg_replace('/\s+/', '', $name);
        $cleanname = str_ireplace('(Private)Limited','',$cleanname);
        $cleanname = str_ireplace('P/L','',$cleanname);
        $cleanname = str_ireplace('PrivateLimited','',$cleanname);
        $cleanname = str_ireplace('Investments','',$cleanname);
        $cleanname = str_ireplace('Investment','',$cleanname);
        $cleanname = str_ireplace('Pvtltd','',$cleanname);
        $first_three_letters = substr($cleanname,0,4);
        $customers =  DB::select("select * from companies where name LIKE '%".$first_three_letters."%'");
         if(count($customers)>0)
         {
            foreach ($customers as $key => $value) {
                //$request_array = str_split(strtoupper($cleanname));
                $db_name = preg_replace('/\s+/', '', $value->name);
                $db_name = str_ireplace('(Private)Limited','',$db_name);
                $db_name = str_ireplace('P/L','',$db_name);
                $db_name = str_ireplace('PrivateLimited','',$db_name);
                $db_name = str_ireplace('Investments','',$db_name);
                $db_name = str_ireplace('Investment','',$db_name);
                $db_name = str_ireplace('Pvtltd','',$db_name);
                $compare = strcasecmp(strtoupper($cleanname),strtoupper(preg_replace('/\s+/', '', $db_name)));
                  if($compare==0)
                    {
                        return $value->id;
                    }
                   
                                 
            } 
            return 0;
         }

    }
    

    function regnumber(){
        $company = count(company::get());
        return "PR".\Carbon\Carbon::now()->micro."".($company+1);
    }


}
