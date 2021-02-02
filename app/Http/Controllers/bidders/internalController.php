<?php

namespace App\Http\Controllers\bidders;
use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\claimreferenceRequest;
use App\Http\Requests\uploadProofRequest;
use App\Http\Requests\verifyRequest;
use App\Interfaces\bidder\bankpaymentsInterface;
use App\Interfaces\generalInterface;
use Illuminate\Http\Request;

class internalController extends Controller
{
    private $helper;
    private $bank;
    private $general;
    
    public function __construct(generalHelpers $helper,bankpaymentsInterface $bank,generalInterface $general)
    {
        $this->helper = $helper;  
        $this->bank = $bank;
        $this->general = $general;
    }
     public function index($currency){
         $company = $this->helper->getCompany();
         return  $this->bank->getBalance($currency,$company);
     }

     public function claim(claimreferenceRequest $request){
         $company = $this->helper->getCompany();
         return $this->bank->claimReference($request,$company);
     }

     public function confirmTransaction(uploadProofRequest $request){
      $company = $this->helper->getCompany();
      return $this->bank->uploadProof($request,$company);
     }

     public function registration(Request $request){
      $company = $this->helper->getCompany();
      return $this->bank->registration($company);
     }

     public function processAwaiting(Request $request){
         $company = $this->helper->getCompany();
         return $this->bank->processAwaiting($company,$request->invoice_number);
     }
     public function verify(verifyRequest $request){
        $company = $this->helper->getCompany();
        return $this->bank->verifyReference($company,$request);
     }
}
