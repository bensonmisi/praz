<?php

namespace App\Http\Controllers\bidders;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Interfaces\bidder\onlinepaymentInterface;


class OnlinepaymentsController extends Controller
{
   private $helper;
   private $payment;

   public function __construct(generalHelpers $helper, onlinepaymentInterface $payment)
   {
      $this->helper = $helper;
      $this->payment = $payment;
   }
     public function index(){
       $company = $this->helper->getCompany();
       return $this->payment->getAll($company);
     }

     public function check($id){
      $company = $this->helper->getCompanyById();
      return $this->payment->check_by_id($id,$company);
     }
}
