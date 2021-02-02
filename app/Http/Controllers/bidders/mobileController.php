<?php

namespace App\Http\Controllers\bidders;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\mobilePaymentRequest;
use App\Interfaces\bidder\mobilePaymentsInterface;

class mobileController extends Controller
{
    private $mobile;
    private $helper;

    public function __construct(mobilePaymentsInterface $mobile,generalHelpers $helper)
    {
         $this->mobile = $mobile;
         $this->helper = $helper;
        
    }
    public function initiate(mobilePaymentRequest $request){

        $company = $this->helper->getCompanyById();
        return $this->mobile->initiate($request,$company);
    }

    public function confirm($id){
      return $this->mobile->confirm($id);
    }
}
