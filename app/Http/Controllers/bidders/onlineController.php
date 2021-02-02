<?php

namespace App\Http\Controllers\bidders;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Interfaces\bidder\onlinepaymentInterface;

class onlineController extends Controller
{
    private $online;
    private $helper;
    public function __construct(onlinepaymentInterface $online,generalHelpers $helper)
    {
     $this->online = $online;  
     $this->helper = $helper;  
    }
     public function index(){
      return $this->online->initiate($this->helper->getCompanyById());
     }


     public function check(){
      return $this->online->check($this->helper->getCompanyById());
     }
}
