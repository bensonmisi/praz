<?php
namespace App\Interfaces\administrator;

use App\Http\Requests\assignRequest;

interface taskInterface{

    public function getUsers();

    public function assignUser(assignRequest $request);

    public function getTask($id);
    
    public function getTasks($user);

    public function getComments($identifier);
}