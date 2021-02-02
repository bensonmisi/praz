<?php 
namespace App\Interfaces\bidder;

use App\Http\Requests\AccountCreationRequest;
use App\Http\Requests\loginRequest;
use App\Http\Requests\passwordResetRequest;
use Illuminate\Http\Request;

interface AuthInterface{

    public function getAccountTypes();

    public function Register(AccountCreationRequest $request);

    public function Login(loginRequest $request);

    public function Logout(Request $request);

    public function Forgot($email);

    public function resetPassword(passwordResetRequest $request);


}