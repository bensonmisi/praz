<?php

namespace App\Http\Controllers\administrator;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\changePasswordRequest;
use App\Interfaces\administrator\taskInterface;
use App\Repositories\AuthAdminRepository;
use App\Traits\ResponseAPI;
use Illuminate\Http\Request;

class dashboardController extends Controller
{
    use ResponseAPI;
    private $admin;
    private $helper;
    private $task;
    public function __construct(AuthAdminRepository $admin, generalHelpers $helper, taskInterface $task)
    {
        $this->admin = $admin;
        $this->helper = $helper;
        $this->task = $task;
    }

    public function index(){
        $status =  $this->admin->checkstatus($this->helper->getAdminUser()->id);
        $tasks = $this->task->getTasks($this->helper->getAdminUser());
        $data = compact('status','tasks');
        return $this->success('Success',$data);
    }
    public function change(changePasswordRequest $request){
        return $this->admin->changePassword($request,$this->helper->getAdminUser());
    }
}
