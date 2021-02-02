<?php

namespace App\Http\Controllers\bidders;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Interfaces\bidder\bankpaymentsInterface;

class bankpaymentsController extends Controller
{
    private $bank;
    private $helper;
    public function __construct(bankpaymentsInterface $bank,generalHelpers $helper)
    {
         $this->bank = $bank;
         $this->helper = $helper;
    }
     public function index(){
        return $this->bank->getlist($this->helper->getCompany());
     }

  
}
