<?php

namespace App\Interfaces\administrator;

use App\Http\Requests\adminAuthRequest;

interface AdminAuthInterface{
    public function Login(adminAuthRequest $request);
}