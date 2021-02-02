<?php

namespace App\Http\Controllers;

use App\category;
use App\Http\Requests\searchRequest;
use App\Interfaces\welcomeInterface;
use Carbon\Carbon;
use Illuminate\Http\Request;

class welcomeController extends Controller
{
    private $welcome;

    public function __construct(welcomeInterface $welcome)
    {
        $this->welcome = $welcome;
    }

    public function index(){
        
    }
    public function search(searchRequest $request){
      return $this->welcome->searchCertificate($request);    
    }
     public function suppliers(){
      return $this->welcome->getRegisteredSuppliers();
     }

     public function notices(){

     }

     public function awards(){

     }
}
