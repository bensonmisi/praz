<?php

namespace App\Interfaces\administrator;

use App\Http\Requests\adminAuthRequest;
use App\Http\Requests\changePasswordRequest;

interface AdminAuthInterface{
    public function Login(adminAuthRequest $request);

    public function changePassword(changePasswordRequest $request,$user);
    
    public function checkstatus($user_id);
}