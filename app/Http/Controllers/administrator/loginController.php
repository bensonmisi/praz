<?php

namespace App\Http\Controllers\administrator;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\adminAuthRequest;
use App\Http\Requests\changePasswordRequest;
use App\Repositories\AuthAdminRepository;


class loginController extends Controller
{
    private $admin;
    private $helper;

    public function __construct(AuthAdminRepository $admin, generalHelpers $helper)
    {
        $this->admin = $admin;
        $this->helper = $helper;
    }
     public function login(adminAuthRequest $request){
      return $this->admin->login($request);  
     }

     
}
