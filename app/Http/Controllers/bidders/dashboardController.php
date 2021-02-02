<?php

namespace App\Http\Controllers\bidders;

use App\Helpers\generalHelpers;
use App\Http\Controllers\Controller;
use App\Http\Requests\companyDocumentRequest;
use App\Http\Requests\companyPofileRequest;
use App\Interfaces\bidder\documentInterface;
use App\Interfaces\bidder\profileInterface;
use App\Interfaces\generalInterface;
use App\Traits\ResponseAPI;

class dashboardController extends Controller
{

  private $general;
  private $profile;
  private $helper;
  use ResponseAPI;

  public function __construct(generalInterface $general,profileInterface $profile,generalHelpers $helper)
  {
       $this->general = $general;
       $this->profile = $profile;
       $this->helper = $helper;
  }
    public function index(){
        $company = $this->general->getCompanyById();        
        $category = $this->general->getCategories();
        $registrations = $this->general->getRegistrations($company);
        $pending= $this->general->getInvoiceTotals($company,['PENDING']);
        $awaiting = $this->general->getInvoiceTotals($company,['AWAITING',]);
        $years = $this->general->getRegistrationsYears();
        $profile = $this->general->getCompanyProfile($company);
        $types = $this->general->getAccountype();
        $currency = $this->general->getCurrency();
        $documents = $this->helper->getCompanyDocuments($company);
        $messages = $this->helper->getMessages($company);
        $data = compact('category','registrations','years','profile','types','currency','awaiting','pending','documents','messages');
        return $this->success("success",$data);       
    }

   

    public function update(companyPofileRequest $request){
        $company = $this->general->getCompanyById();
        return $this->profile->updateCompanyProfile($request,$company);

    }






}
