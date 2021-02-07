<?php

namespace App\Repositories;

use App\administrator;
use App\Http\Requests\assignRequest;
use App\Interfaces\administrator\taskInterface;
use App\operationtask_comments;
use App\operationtask_user;
use App\operationtasks;
use App\Traits\ResponseAPI;

class taskRepository implements taskInterface{
  use ResponseAPI;
    public function getUsers()
    {
        $administrator = administrator::wherestatus('ACTIVE')->get();
        return $this->success('SUCCESS',$administrator);  
    }

    public function assignUser(assignRequest $request)
    {
       if(!operationtasks::where(['company_id'=>$request->company,'action'=>$request->action,'status'=>'PENDING'])->exists())
       {
         $task = operationtasks::create(['company_id'=>$request->company,'action'=>$request->action,'status'=>'PENDING']);
           operationtask_user::create(['operationtask_id'=>$task->id,'administrator_id'=>$request->agent,'status'=>'PENDING']);
           return $this->success("Task successully assinged to user",$task);
       }else{

          return $this->error('Account already assigned to agent',500);
       }
    }

    public function getTasks($user){
      $tasks = operationtask_user::with('task.company')
                                  ->where(['administrator_id'=>$user->id])
                                  ->where(['status'=>'PENDING'])
                                   ->get()
                                   ->map(function($task){
                                     return[
                                       'company_id'=>$task->task->company_id,
                                       "name"=>$task->task->company->name,
                                       "action"=>$task->task->action,
                                       "status"=>$task->task->status,
                                       "assigned_on"=>$task->task->created_at->diffForHumans()
                                     ];
                                   });
      return $tasks;
    }
    public function getTask($id){
      
    }

    public function getComments($identifier){

      $comments = operationtask_comments::whereidentifier($identifier)->get();
      return $this->success('SUCCESS',$comments);
    }
}