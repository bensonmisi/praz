<?php

namespace App\Http\Controllers;

use App\accounttype;
use App\company;
use App\Http\Requests\AccountCreationRequest;
use App\Http\Requests\loginRequest;
use App\Http\Requests\passwordResetRequest;
use App\Notifications\resetlink;
use App\password_resets;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Interfaces\bidder\AuthInterface;
class AuthController extends Controller
{
    private $auth;

    public function __construct(AuthInterface $auth)
    {
      $this->auth = $auth;   
    }

    public function index(){
        return $this->auth->getAccountTypes();
    }
    public function login(loginRequest $request){ 
           return $this->auth->Login($request); 
    }

    public function register(AccountCreationRequest $request){
      return $this->auth->Register($request);
    }

    public function logout(Request $request){
     return $this->auth->Logout($request);        
    }

    public function forgot($email){
       return $this->auth->Forgot($email);
    }

    public function resetpwd(passwordResetRequest $request){
      return $this->auth->resetPassword($request);
    }
   


}
