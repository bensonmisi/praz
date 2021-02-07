<?php

namespace App\Http\Controllers\administrator;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\assignRequest;
use App\Interfaces\administrator\taskInterface;

class taskController extends Controller
{
      private $task;
      private $general;

      public function __construct(taskInterface $task,generalHelpers $general){
        $this->task = $task;
        $this->general = $general;
      }

      public function getUsers()
      {
          return $this->task->getUsers();
      }

      public function assign(assignRequest $request){
          return $this->task->assignUser($request);
      }

      public function comments($identifier){
        return $this->task->getComments($identifier);
      }

      public function getTasks(){
        $user = $this->general->getAdminUser();
        return $this->task->getTasks($user);
      }
}
