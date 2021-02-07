<?php

namespace App\Http\Controllers\administrator;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\reversalRequest;
use App\Interfaces\administrator\banktransactionInterface;
use App\Interfaces\administrator\invoicingTaskInterface;
use Illuminate\Http\Request;

class rtgsController extends Controller
{
    private $general;
    private $task;
    private $bank;

    public function __construct(generalHelpers $general, invoicingTaskInterface $task,banktransactionInterface $bank)
    {
          $this->general = $general;
          $this->task = $task;
          $this->bank = $bank; 
    }

    public function index(){
        return $this->task->getTasks();
    }

    public function show($id){
        return $this->task->showTask($id);
    }

    public function getInvoice($invoicenumber){
        return $this->task->getInvoice($invoicenumber);
    }

    public function statement($reference){
    return $this->bank->search($reference);
    }

    public function store(Request $request){      
        return $this->bank->claim($request->bank,$request->invoicenumber);
    }

    public function reverse(reversalRequest $request){
        return $this->bank->reverse($request);
    }
}
